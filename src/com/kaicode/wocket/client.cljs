(ns com.kaicode.wocket.client
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [com.kaicode.wocket.macro :as mac]
                   )
  (:require [chord.client :refer [ws-ch]]
            [cljs.core.async :as async :refer [<! >! put! chan]]
            [com.kaicode.mercury :as m]
            [com.kaicode.teleport :as t]))

;;server-websocket-channel contains a bidirectional core.async channel used to send and read messages from the server
(defonce server-websocket-channel (atom nil))

;;closure that executes a call-back-fn if the :websocket/connected topic has ever been broadcasted
;;example usage: (whenever-websocket-connected #(println "websocket is open"))
(def whenever-websocket-connected (m/whenever :websocket/connected))

;;multi method that dispatches based on the first attribute of the msg. a msg is a vector of the form [keyword val]
(defmulti process-msg (fn [[kw val]]
                        kw))

(defn send! [msg]
  (whenever-websocket-connected #(go (>! @server-websocket-channel (t/serialize msg)))))

(defn connect-to-server []
  (go (let [s (mac/connect-to-websocket-server)]
        (when s
          (reset! server-websocket-channel s)
          (m/broadcast [:websocket/connected true])))))

(defn listen-for-messages-from-websocket-server []
  (go-loop []
    (println "listening for messages from server")
    (let [{:keys [message]} (<! @server-websocket-channel)]
      (println "message" message)
      (if message
        (let [msg (t/deserialize message)]
          (process-msg msg))
        (do
          (println "reconnecting to server 2")
          (connect-to-server)
          )))

    (<! (async/timeout 2000))
    (recur)))

(connect-to-server)
(whenever-websocket-connected listen-for-messages-from-websocket-server)
