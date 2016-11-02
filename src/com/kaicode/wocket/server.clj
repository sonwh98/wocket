(ns com.kaicode.wocket.server
  (:require [clojure.core.async :as a :refer [<! >! put! close! go go-loop]]
            [chord.http-kit :refer [with-channel]]
            [clojure.tools.logging :as log]
            [com.kaicode.mercury :as m]
            [com.kaicode.teleport :as t]))

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
        (log/info "client-message: " message)
        (process-msg [client-websocket-channel message])
        (recur))
      (clean-up! client-websocket-channel))))

(defn listen-for-client-websocket-connections [request]
  (with-channel request websocket-channel
    (swap! client-websocket-channels conj websocket-channel)
    (listen-for-messages-on websocket-channel)))

(defmethod process-msg :pong [[_ timestamp]]
  (log/debug "pong " timestamp))

(go-loop []
  (doseq [cws-chan @client-websocket-channels
          :let [timestamp (java.util.Date.)]]
    (log/debug "ping" timestamp)
    (send! cws-chan [:ping timestamp]))
  
  (<! (a/timeout 30000))
  (recur))
