(ns chat.init
  (:require [reagent.core :as r]
            [com.kaicode.wocket.client :as ws :refer [process-msg]]))

(def state (r/atom {:msg "hi"}))

(defn chat [state]
  (let [msg (r/atom nil)]
    (fn [state]
      [:div
       [:textarea {:value @msg
                   :on-change #(reset! msg (-> % .-target .-value))}]
       [:button {:on-click #(ws/send! [:chat @msg])}
        "Send Msg"
        ]]))
  )

(defn init []
  (prn "init")
  )

(defmethod process-msg :chat-broadcast [[_ msg]]
  (prn "from clj " msg)
  )

(ws/connect-to-websocket-server {:port 3000})
(r/render-component [chat] (js/document.getElementById "app"))
