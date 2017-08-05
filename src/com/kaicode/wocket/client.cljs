(ns com.kaicode.wocket.client
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [chord.client :refer [ws-ch]]
            [cljs.core.async :as a :refer [<! >! put! chan]]
            [com.kaicode.mercury :as m]
            [com.kaicode.teleport :as t]))

;;server-websocket-channel contains a bidirectional core.async channel used to send and read messages from the server
(def server-websocket-channel (atom nil))
(def connected? (atom false))

;;closure that executes a call-back-fn if the :websocket/connected topic has ever been broadcasted
;;example usage: (if-websocket-open #(println "websocket is open"))
(def whenever-websocket-connected (m/whenever :websocket/connected))

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
        (when-not error
          (do (reset! server-websocket-channel ws-channel)
              (reset! connected? true)
              (m/broadcast [:websocket/connected true]))))))

(defn send! [msg]
  (go
    (if @connected?
      (>! @server-websocket-channel (t/serialize msg))
      (prn "queue" msg)
      )))

(defn listen-for-messages-from-websocket-server []
  (go-loop []
    (if-let [{:keys [message]} (<! @server-websocket-channel)]
      (let [msg (t/deserialize message)]
        (process-msg msg))
      (do
        (prn "Disconnected from serverr. trying to reconnect")
        (reset! connected? false)
        (connect-to-websocket-server)
        (<! (a/timeout 5000))))
    (recur)))

(defmethod process-msg :ping [[_ timestamp]]
  (send! [:pong (js/Date.)]))

(connect-to-websocket-server)
(whenever-websocket-connected listen-for-messages-from-websocket-server)
