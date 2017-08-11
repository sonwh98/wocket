(ns com.kaicode.wocket.client
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [chord.client :refer [ws-ch]]
            [cljs.core.async :as a :refer [<! >! put! chan]]
            [com.kaicode.mercury :as m]
            [com.kaicode.teleport :as t]))


;;server-websocket-channel contains a bidirectional core.async channel used to send and read messages from the server
(def server-websocket-channel (atom nil))

;;multi method that dispatches based on the first attribute of the msg. a msg is a vector of the form [keyword val]
(defmulti process-msg (fn [[kw val]]
                        kw))

(defn connect-to-websocket-server []
  (go (let [protocol (.. js/window -location -protocol)
            protocol (if (= protocol "http:")
                       "ws://"
                       "wss://")
            host (.. js/window -location -hostname)
            port (.. js/window -location -port)
            port (if (or (= "80" port)
                         (= "" port))
                   ""
                   (str ":" port))
            url (str protocol host port "/ws")
            {:keys [ws-channel error]} (<! (ws-ch url))]
        
        (if error
          (do
            (<! (a/timeout 5000))
            (m/broadcast [:websocket/socket-channel nil]))
          (m/broadcast [:websocket/socket-channel ws-channel])))))

(defn listen-for-messages-from-websocket-server []
  (go-loop [connected? true]
    (if-let [{:keys [message]} (<! @server-websocket-channel)]
      (let [msg (t/deserialize message)]
        (process-msg msg)
        (recur true))
      (do
        (<! (a/timeout 5000))
        (m/broadcast [:websocket/socket-channel nil])
        (recur false)))))

(m/on :websocket/socket-channel (fn [[_ socket-channel]]
                                  (reset! server-websocket-channel socket-channel)
                                  (if socket-channel
                                    (do
                                      (prn "Connected to server")
                                      (listen-for-messages-from-websocket-server))
                                    (do
                                      (prn "Disconnected from server. trying to reconnect")
                                      (connect-to-websocket-server)))))

(defn send! [msg]
  (go (let [send-queue (some-> "send-queue" js/localStorage.getItem t/deserialize)
            send-queue (conj (or send-queue []) msg)]
        (if @server-websocket-channel
          (do
            (doseq [m send-queue]
              (prn "sending " m)
              (>! @server-websocket-channel (t/serialize m)))
            (js/localStorage.setItem "send-queue" nil))
          (let [send-queue (remove #(= :pong (first %)) send-queue)]
            (prn "websocket disconnected. queuing msg " send-queue)
            (js/localStorage.setItem "send-queue" (t/serialize send-queue)))))))

(defmethod process-msg :ping [[_ timestamp]]
  (send! [:pong (js/Date.)]))
