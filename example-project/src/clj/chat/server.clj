(ns chat.server
  (:require [compojure.core :refer [defroutes GET]]
            [compojure.route :as r]
            [org.httpkit.server :as h]
            [com.kaicode.wocket.server :as ws :refer [process-msg]]
            [taoensso.timbre :as log :include-macros true])
  (:gen-class))

(defroutes app
  (GET "/ws" [] ws/listen-for-client-websocket-connections)
  (r/resources "/")
  (r/not-found "<h1>Route not defined</h1>"))

(defonce stop-fn (atom nil))

(defn start []
  (reset! stop-fn (h/run-server app {:port 3000})))

(defn stop []
  (when @stop-fn
    (@stop-fn :timeout 100)))


(defn -main [& args]
  (log/info "Starting server...")
  (start)
  (log/info "Server started"))

(defmethod process-msg :chat [[client-socket-channel [_ msg]]]
  (ws/broadcast! [:chat-broadcast msg]))

(comment
  (log/set-level! :info))
