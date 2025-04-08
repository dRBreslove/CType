(ns ctype.client
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(def ws-connection (atom nil))
(def app-state (r/atom {:message "Connecting..."}))

(defn send-update! [new-data]
  (when @ws-connection
    (.send @ws-connection (js/JSON.stringify (clj->js new-data)))))

(defn connect-websocket! []
  (let [ws (js/WebSocket. "ws://localhost:8090")]
    (reset! ws-connection ws)
    
    (set! (.-onmessage ws)
          (fn [event]
            (reset! app-state (js->clj (js/JSON.parse (.-data event)) :keywordize-keys true))))
    
    (set! (.-onclose ws)
          (fn []
            (reset! ws-connection nil)
            (js/setTimeout connect-websocket! 1000)))))

(defn app []
  [:div.container
   [:h1 "CType NW.js Demo"]
   [:div.message-box
    [:input {:type "text"
             :value (:message @app-state)
             :on-change #(let [new-value (.. % -target -value)]
                          (swap! app-state assoc :message new-value)
                          (send-update! @app-state))}]
    [:p "Current message: " (:message @app-state)]]])

(defn ^:export init []
  (connect-websocket!)
  (rdom/render [app] (.getElementById js/document "app"))) 