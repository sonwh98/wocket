# wocket

A async messaging library for communicating between clojure and clojurescript via websockets. Future plan to add
WebRTC.

# Dependency

    [stigmergy/wocket "0.1.5-SNAPSHOT"] 
    
# Quick Start

See [chat demo](/example-project) for a complete example.

## Server-side Clojure setup

Setup a route for Websocket connection

```Clojure
(defroute app
    (GET "/ws" [] ws/listen-for-client-websocket-connection))
```

## Client-side ClojureScript setup

Connect to Clojure websocket server

```Clojure
(require [stigmergy.wocket.client :as ws :refer [process-msg]])

(ws/connect-to-websocket-server {:host yourHost :port your-port :uri "/ws" :msg-queuing? false}) 

;;or use reasonable defaults with no parameters
(ws/connect-to-websocket-server)

```
connect-to-websocket-server takes an optional map with the following keys :host :port :uri :msg-queuing? to
configure how to connect to websocket-server. :uri is the uri (defaults to "/ws"). The uri
is also known as the route. :msg-queuing? (defaults to true) enables queueing message to localStorage. This is useful
for offline clients, When clients are reconnected to the websocket server, queued messages are sent.  If :msg-queuing? 
is false and client is offline or not connected to the websocket server yet, you'll get an exception.

# Send messages between ClojureScript <-> Clojure

Once browser is connected to the websocket server, cljs can send messages to the clj server like this

```Clojure
(ws/send! [:msg-tag msg-payload])

```

:msg-tag can be any arbitary value, but a descriptive keyword should be used. 
message-payload can be any arbitary value.

The Clojure server can receive and respond to the message by defining a multi-method 

```Clojure
(defmethod process-msg :msg-tag [ [client-websocket-channel [msg-tag msg-payload]] ]
    ;;do something with the msg-payload from cljs
    (prn "msg-payload from cljs " msg-payload)

    ;;send something back to cljs using the core.async channel client-socket-channel
    (ws/send! client-websocket-channel [:msg-tag-respond "I hear you"])
)
```
Likewise, the cljs client can recieve the message from the server with a multi-method

```Clojure
(defmethod process-msg :msg-tag-respond [ [_ msg-respond]]
    (prn "message from server " msg-respond)
)
```

# Server broadcast to all connected clients

Server side broadcast can easily be done

```Clojure

(ws/broadcast! [:msg-tag "msg from server to all clients"]

```
