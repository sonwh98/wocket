(ns com.kaicode.mercury
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go go-loop]]))
  #?(:cljs (:require [cljs.core.async :as async :refer [put! <! >! chan pub sub unsub]]))
  #?(:clj  (:require [clojure.core.async :as async :refer [put! <! >! chan pub sub unsub go go-loop]])))

#?(:cljs (enable-console-print!))

;;a message is a vector of the form [topic value]
;;the topic can be any value but should be a keyword
(defonce message-bus (chan 10))
(defonce message-publication (pub message-bus (fn [msg]
                                                (if (vector? msg)
                                                  (first msg)
                                                  :no-topic))))
(defn broadcast [msg]
  (put! message-bus msg))

(defn subscribe-to
  [topic]
  (let [channel (chan (async/dropping-buffer 10))]
    (sub message-publication topic channel)
    channel))

(defn unsubscribe
  [channel topic]
  (unsub message-publication topic channel))

(defn on
  [topic call-back-fn]
  (let [topic-chan (subscribe-to topic)]
    (go-loop []
      (call-back-fn (<! topic-chan))
      (recur))
    topic-chan))

(defn whenever
  "returns a closure that takes a call-back-fn which is executed when ever the topic message been broadcasted"
  [topic]
  (let [topic-message (atom nil)]
    (on topic #(reset! topic-message %))
    (fn [call-back-fn]
      (if @topic-message
        (call-back-fn @topic-message)
        (on topic (fn [this-topic-message]
                    (reset! topic-message this-topic-message)
                    (call-back-fn this-topic-message)))))))

(defn postpone [execute-fn ms]
  (go (<! (async/timeout ms))
      (execute-fn)))
