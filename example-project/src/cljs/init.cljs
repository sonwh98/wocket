(ns chat.init
  (:require [reagent.core :as r]
            [com.kaicode.wocket.client :as ws :refer [process-msg]]))

(def app-state (r/atom {:client-msg "my chat window"
                        :server-msg "other's chat window"}))

(defn chat-area [state]
  (let [client-msg (r/cursor state [:client-msg])
        server-msg (r/cursor state [:server-msg])]
    [:div 
     [:textarea {:style {:width "100%"
                         :height 200}
                 :value @client-msg
                 :on-change #(reset! client-msg (-> % .-target .-value))}]
     [:button {:on-click #(ws/send! [:chat @client-msg])}
      "Send Msg"]
     [:button {:on-click #(reset! client-msg "")}
      "Clear Msg"]

     [:textarea {:style {:width "100%"
                         :height 200}
                 :value @server-msg
                 :read-only true
                 }]
     
     ]
    ))


(defn init []
  (prn "init")
  )

(defmethod process-msg :chat-broadcast [[_ msg]]
  (prn "from clj " msg)
  (swap! app-state assoc :server-msg msg)
  )

(ws/connect-to-websocket-server {:port 3000})
(r/render-component [chat-area app-state] (js/document.getElementById "app"))
