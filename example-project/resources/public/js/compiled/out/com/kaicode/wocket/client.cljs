(ns com.kaicode.wocket.client
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [chord.client :refer [ws-ch]]
            [cljs.core.async :as a :refer [<! >! put! chan]]
            [com.kaicode.mercury :as m]
            [com.kaicode.teleport :as t]
            [taoensso.timbre :as log :include-macros true]))


;;server-websocket-channel contains a bidirectional core.async channel used to send and read messages from the server
(def server-websocket-channel (atom nil))

;;multi method that dispatches based on the first attribute of the msg. a msg is a vector of the form [keyword val]
(defmulti process-msg (fn [[kw val]]
                        kw))

(defn connect-to-websocket-server [{:keys [host port uri]}]
  (go-loop []
    (let [protocol (.. js/window -location -protocol)
          protocol (if (= protocol "http:")
                     "ws://"
                     "wss://")
          host (or host (.. js/window -location -hostname))
          port (or port (.. js/window -location -port))
          port (if (or (= "80" port)
                       (= "" port))
                 ""
                 (str ":" port))
          uri (or uri "/ws")
          url (str protocol host port uri)
          {:keys [ws-channel error]} (<! (ws-ch url {:format :str}))]
      
      (if error
        (do
          (reset! server-websocket-channel nil)
          (log/error "websocket error" error)
          (<! (a/timeout 5000))
          (recur))
        (do
          (log/info "websocket connected")
          (reset! server-websocket-channel ws-channel)
          (m/broadcast [:websocket/connected true])
          (loop []
            (if-let [{:keys [message]} (<! ws-channel)]
              (let [msg (t/deserialize message)]
                (process-msg msg)
                (recur))
              (do
                (reset! server-websocket-channel nil)
                (log/debug "trying reconnect..."))))
          (recur))))))

(defn send! [msg]
  (go (let [send-queue (some-> "send-queue" js/localStorage.getItem t/deserialize)
            send-queue (conj (or send-queue []) msg)]
        (if @server-websocket-channel
          (do
            (doseq [m send-queue]
              (log/debug "sending " m)
              (>! @server-websocket-channel (t/serialize m)))
            (js/localStorage.setItem "send-queue" nil))
          (let [send-queue (remove #(= :pong (first %)) send-queue)]
            (log/error "websocket disconnected. queuing msg " send-queue)
            (js/localStorage.setItem "send-queue" (t/serialize send-queue)))))))

(defmethod process-msg :ping [[_ timestamp]]
  (send! [:pong (js/Date.)]))
