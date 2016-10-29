(ns com.kaicode.wocket.macro)

(defmacro connect-to-websocket-server []
  '(let [protocol (.. js/window -location -protocol)
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
         {:keys [ws-channel error]} (async/<! (ws-ch url))]
     (println "ws-channel" ws-channel "error " error)
     ws-channel))
