(ns stigmergy.wocket.server
  (:require [clojure.core.async :as a :refer [<! >! put! close! go go-loop]]
            [chord.http-kit :refer [with-channel]]
            [taoensso.timbre :as log]
            [stigmergy.mercury :as m]
            [stigmergy.teleport :as t]))

;;a client-websocket-channel is a bidirectional core.async channel to read from and write messages to clients via websocket
;;client-websocket-channels contains all active/opened client-websocket-channel.
(def client-websocket-channels (atom []))

(defmulti process-msg (fn [[client-websocket-channel [kw msg]]]
                        kw))

(defn send! [client-websocket-channel edn-msg]
  (let [transit-msg (t/serialize edn-msg)]
    (go (>! client-websocket-channel transit-msg))))

(defn broadcast!
  "send transit-msg to all connected client-websocket-channels"
  [edn-msg]
  (doseq [ws-channel @client-websocket-channels]
    (send! ws-channel edn-msg)))

(defn- remove-channel [client-websocket-channel]
  (reset! client-websocket-channels (filter #(not= % client-websocket-channel) @client-websocket-channels)))

(defn- clean-up! [client-websocket-channel]
  (log/info "clean-up " client-websocket-channel)
  (remove-channel client-websocket-channel)
  (close! client-websocket-channel)
  (m/broadcast [:client-websocket-channel-closed client-websocket-channel]))

(defn- listen-for-messages-on [client-websocket-channel]
  (go-loop []
    (if-let [{:keys [message]} (<! client-websocket-channel)]
      (let [message (t/deserialize message)]
        (log/debug "client-message: " message)
        (try
          (let [[msg-tag-kw msg-payload] message
                result (process-msg [client-websocket-channel message])
                return-msg-tag-kw (keyword (str (name msg-tag-kw) "-return"))]
            (if-not (= return-msg-tag-kw :pong-return)
              (send! client-websocket-channel [return-msg-tag-kw result])))
          
          (catch Throwable e
            (log/error e)))
        (recur))
      (clean-up! client-websocket-channel))))

(defn listen-for-client-websocket-connections [request]
  (with-channel request websocket-channel {:format :str}
    (swap! client-websocket-channels conj websocket-channel)
    (listen-for-messages-on websocket-channel)))

(defmacro fn->keyword [func]
  `(-> ~func var meta :name keyword))

(defn make-invokable [func msg-tag-kw]
  (defmethod process-msg msg-tag-kw [[client-websocket-channel [msg-tag msg-payload]]]
    (apply func [msg-payload])))

(defmacro as-service [func]
  `(make-invokable ~func (fn->keyword ~func)))

(defmethod process-msg :pong [[_ timestamp]]
  (log/debug "pong " timestamp))

(go-loop []
  (doseq [cws-chan @client-websocket-channels
          :let [timestamp (java.util.Date.)]]
    (log/debug "ping" timestamp)
    (send! cws-chan [:ping timestamp]))

  (<! (a/timeout 30000))
  (recur))
