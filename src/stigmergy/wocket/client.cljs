(ns stigmergy.wocket.client
  (:require [chord.client :refer [ws-ch]]
            [clojure.core.async :as a :include-macros true]
            [stigmergy.mercury :as m]
            [stigmergy.teleport :as t]
            [taoensso.timbre :as log :include-macros true]))


;;server-websocket-channel contains a bidirectional core.async channel used to send and read messages from the server
(def server-websocket-channel (atom nil))
(let [kw->ws-ch (atom {})]
  (defn msg-tag->websocket-channel [msg-tag-kw]
    (or (@kw->ws-ch msg-tag-kw) (a/chan 5))))

;;multi method that dispatches based on the first attribute of the msg. a msg is a vector of the form [keyword val]
(defmulti process-msg (fn [[kw val]]
                        kw))

(defn connect-to-websocket-server [{:keys [host port uri]}]
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
        connected-ch (a/chan (a/dropping-buffer 1))]
    (a/go-loop []
      (let [{:keys [ws-channel error]} (a/<! (ws-ch url {:format :str}))]
        (if error
          (do
            (reset! server-websocket-channel nil)
            (log/error "websocket error" error)
            (a/<! (a/timeout 1000))
            (recur))
          (do
            (log/info "websocket connected")
            (a/>! connected-ch true)
            (reset! server-websocket-channel ws-channel)
            (m/broadcast [:websocket/connected true])
            (loop []
              (if-let [{:keys [message]} (a/<! ws-channel)]
                (let [[msg-tag msg-payload :as msg] (t/deserialize message)]
                  (m/broadcast msg)
                  (try
                    (process-msg msg)
                    (catch js/Error e
                      (let [ws-chan (msg-tag->websocket-channel msg-tag)]
                        (a/>! ws-chan msg-payload))))
                  (recur))
                (do
                  (reset! server-websocket-channel nil)
                  (log/debug "trying reconnect..."))))
            (recur)))))
    connected-ch))

(defn send! [msg]
  (let [msg-tag-kw  (first msg)
        msg-tag-return-kw (keyword (str (name msg-tag-kw) "-return"))
        ws-chan (msg-tag->websocket-channel msg-tag-return-kw)]
    (a/go (let [send-queue (some-> "send-queue" js/localStorage.getItem t/deserialize)
                send-queue (conj (or send-queue []) msg)]
            (if @server-websocket-channel
              (do
                (doseq [m send-queue]
                  (log/debug "sending " m)
                  (a/>! @server-websocket-channel (t/serialize m)))
                (js/localStorage.setItem "send-queue" nil))
              (let [send-queue (remove #(= :pong (first %)) send-queue)]
                (log/error "websocket disconnected. queuing msg " send-queue)
                (js/localStorage.setItem "send-queue" (t/serialize send-queue))))))
    ws-chan))

(defmethod process-msg :ping [[_ timestamp]]
  (send! [:pong (js/Date.)]))
