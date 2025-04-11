(ns ctype.server
  (:require [cljs.nodejs :as nodejs]))

;; Import Node.js modules
(def express (nodejs/require "express"))
(def http (nodejs/require "http"))
(def ws (nodejs/require "ws"))
(def fs (nodejs/require "fs"))
(def path (nodejs/require "path"))
(def pug (nodejs/require "pug"))

(def app (express))
(def port 8080)

(defn compile-pug-template [template-path]
  (let [template-content (.readFileSync fs template-path "utf8")]
    (.compile pug template-content)))

(defn serve-static-file [req res]
  (let [file-path (str "public" (.-url req))
        ext (.extname path file-path)
        content-types
        {".html" "text/html"
         ".js" "text/javascript"
         ".css" "text/css"
         ".json" "application/json"
         ".png" "image/png"
         ".jpg" "image/jpeg"
         ".gif" "image/gif"
         ".svg" "image/svg+xml"
         ".ico" "image/x-icon"
         ".ttf" "application/font-ttf"
         ".woff" "application/font-woff"
         ".woff2" "application/font-woff2"
         ".eot" "application/vnd.ms-fontobject"
         ".otf" "application/font-otf"
         ".wasm" "application/wasm"}]
    (if (.existsSync fs file-path)
      (do
        (.setHeader res "Content-Type" (get content-types ext "application/octet-stream"))
        (.sendFile res file-path))
      (do
        (.setHeader res "Content-Type" "text/plain")
        (.status res 404)
        (.send res "Not Found")))))

(defn setup-routes [app]
  (.get app "/" (fn [req res]
                  (let [template (compile-pug-template "public/templates/index.pug")]
                    (.send res (template #js {})))))
  
  (.get app "/ws" (fn [req res]
                    (if (= (.-headers req) "websocket")
                      (js/console.log "WebSocket upgrade request")
                      (.send res "WebSocket endpoint"))))
  
  (.use app (fn [req res next]
              (serve-static-file req res))))

(defn handle-websocket [ws]
  (js/console.log "New WebSocket connection")
  
  (.on ws "message"
       (fn [data]
         (js/console.log "Received:" data)
         (.send ws data)))
  
  (.on ws "close"
       (fn []
         (js/console.log "WebSocket connection closed"))))

(defn start-server []
  (let [server (.createServer http app)
        wss (ws.Server. #js {:server server})]
    
    (setup-routes app)
    
    (.on wss "connection"
         (fn [ws]
           (handle-websocket ws)))
    
    (.listen server port
             (fn []
               (js/console.log (str "Server running on port " port))))))

(defn -main []
  (start-server))

(set! *main-cli-fn* -main) 