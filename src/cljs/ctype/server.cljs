(ns ctype.server
  (:require [cljs.nodejs :as nodejs]))

(def WebSocket (js/require "ws"))
(def clients (atom #{}))
(def shared-data (atom {:message "Hello from NW.js!"}))

(defn broadcast! [data]
  (doseq [client @clients]
    (.send client (js/JSON.stringify (clj->js data)))))

(defn handle-message! [ws message]
  (let [data (js->clj (js/JSON.parse message) :keywordize-keys true)]
    (reset! shared-data data)
    (broadcast! @shared-data)))

(defn handle-connection! [ws]
  (swap! clients conj ws)
  (.send ws (js/JSON.stringify (clj->js @shared-data)))
  
  (.on ws "message" (partial handle-message! ws))
  
  (.on ws "close" #(swap! clients disj ws)))

(defn start-server! [port]
  (let [wss (WebSocket.Server. #js {:port port})]
    (.on wss "connection" handle-connection!)
    (println "WebSocket server started on port" port)))

(defn -main []
  (start-server! 8090)) 