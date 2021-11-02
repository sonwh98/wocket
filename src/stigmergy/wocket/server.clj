(ns stigmergy.wocket.server
  (:require [clojure.core.async :as a :refer [<! >! put! close! go go-loop]]
            [chord.http-kit :refer [with-channel]]
            [stigmergy.mercury :as m]
            [stigmergy.teleport :as t]
            [taoensso.timbre :as log]))

;;a client-websocket-channel is a bidirectional core.async channel to read from and write messages to clients via websocket
;;client-websocket-channels contains all active/opened client-websocket-channel.
(def client-websocket-channels (atom []))
(def event->client-websocket-channels (atom {}))

(defmulti process-msg (fn [[client-websocket-channel [kw msg]]]
                        kw))

(defn send! [client-websocket-channel edn-msg]
  (log/debug "edn-msg=" edn-msg)
  (let [transit-msg (t/serialize edn-msg)]
    (log/debug "transit-msg=" transit-msg)
    (a/put! client-websocket-channel transit-msg)))

(defn broadcast!
  "send transit-msg to all connected client-websocket-channels"
  ([edn-msg]
   (doseq [ws-channel @client-websocket-channels]
     (send! ws-channel edn-msg)))
  ([event-tag edn-msg]
   (when-let [ws-channels (@event->client-websocket-channels event-tag)]
     (doseq [ws-ch ws-channels]
       (send! ws-ch [event-tag edn-msg])))))

(defn- remove-channel [client-websocket-channel]
  (reset! client-websocket-channels (filter #(not= % client-websocket-channel) @client-websocket-channels)))

(defn- clean-up! [client-websocket-channel]
  (log/debug "clean-up " client-websocket-channel)
  (remove-channel client-websocket-channel)
  (close! client-websocket-channel)
  (m/broadcast [:client-websocket-channel-closed client-websocket-channel]))

(defn start-ping []
  (go-loop []
    (let [timestamp (java.util.Date.)]
      (log/debug "ping" timestamp)
      (broadcast! [:ping timestamp]))
    (<! (a/timeout 30000))
    (recur)))

(defn- listen-for-messages-on [client-websocket-channel]
  (go-loop []
    (if-let [{:keys [message]} (<! client-websocket-channel)]
      (let [message (t/deserialize message)]
        (try
          (process-msg [client-websocket-channel message])
          (catch Throwable e
            (log/error e)))
        (recur))
      (clean-up! client-websocket-channel))))

(defn listen-for-client-websocket-connections [request]
  (with-channel request websocket-channel {:format :str}
    ;;(start-ping)
    (log/debug request)
    (swap! client-websocket-channels conj websocket-channel)
    (listen-for-messages-on websocket-channel)))

(defmacro fn->keyword [func]
  `(-> ~func var meta :name keyword))

(defn make-invokable [func msg-tag-kw]
  (defmethod process-msg msg-tag-kw [[client-websocket-channel [msg-tag & msg-payload]]]
    (let [return-result (cond
                          (nil? msg-payload) (func)
                          (sequential? msg-payload) (apply func msg-payload)
                          :else (apply func [msg-payload]))
          return-tag (keyword (str (name msg-tag) "-" "return"))]
      (log/debug return-tag)
      (send! client-websocket-channel [return-tag return-result]))))

(defmacro as-service [func]
  `(make-invokable ~func (fn->keyword ~func)))

(defmethod process-msg :pong [[_ timestamp]]
  (log/debug "pong " timestamp))

(defmethod process-msg :subscribe [[client-websocket-channel [_ event-tag]]]
  (log/debug "subscribe " event-tag)
  (swap! event->client-websocket-channels update-in [event-tag] conj client-websocket-channel))

(defmethod process-msg :un-subscribe [[client-websocket-channel [_ event-tag]]]
  (log/debug "unsubscribe " event-tag)
  (swap! event->client-websocket-channels update-in [event-tag]
         (fn [ws-channels]
           (remove #(= client-websocket-channel %) ws-channels))))


