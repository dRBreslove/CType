(ns ctype.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.nodejs :as nodejs]
            [clojure.string :as str]
            [ctype.transformer :as transformer]))

;; State atoms
(def cljs-code (r/atom "(defn greet [name]\n  (str \"Hello, \" name \"!\"))\n\n(defn calculate-sum [a b]\n  (+ a b))\n\n(defn create-person [name age]\n  {:name name\n   :age age\n   :greeting (greet name)})"))

(def js-code (r/atom "function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nfunction calculateSum(a, b) {\n  return a + b;\n}\n\nfunction createPerson(name, age) {\n  return {\n    name: name,\n    age: age,\n    greeting: greet(name)\n  };\n}"))

;; WebSocket connection
(def ws-connection (r/atom nil))
(def connection-status (r/atom "Disconnected"))

(defn connect-websocket []
  (let [ws (js/WebSocket. "ws://localhost:3000/ws")]
    (.addEventListener ws "open"
                      #(do
                         (reset! ws-connection ws)
                         (reset! connection-status "Connected")))
    (.addEventListener ws "close"
                      #(do
                         (reset! ws-connection nil)
                         (reset! connection-status "Disconnected")
                         ;; Try to reconnect after 2 seconds
                         (js/setTimeout connect-websocket 2000)))
    (.addEventListener ws "message"
                      (fn [event]
                        (let [data (js->clj (js/JSON.parse (.-data event)) :keywordize-keys true)]
                          (case (:type data)
                            "transform-result" (reset! js-code (:result data))
                            (js/console.log "Unknown message type:" (:type data))))))))

;; Simple example code that kids can understand
(def simple-code
  ";; My First Program! 🎈
(defn say-hello [name]
  (str \"Hi, \" name \"! 😊\"))

(defn add-numbers [a b]
  (+ a b))  ; Add two numbers together!")

;; The 'magic' transformed code
(def magic-code
  "// Generated Magic Code ✨
function sayHello(name) {
  return \"Hi, \" + name + \"! 😊\";
}

function addNumbers(a, b) {
  return a + b;  // Add two numbers together!
}")

;; Core functionality
(defn ^:export typed_add
  "Add two numbers with type annotations"
  [a b]
  (+ a b))

(defn ^:export typed_greet
  "Greet someone with type annotations"
  [name]
  (str "Hello, " name "!"))

;; UI Components
(defn demo-component []
  [:div
   [:h1 "CType: ClojureScript to JavaScript Transformer"]
   [:h2 "and JavaScript to ClojureScript Reformer"]
   [:div.magic-box
    [:h3 "Transform ClojureScript to JavaScript"]
    [:div.code-window
     "(defn hello [name]\n  (str \"Hello, \" name \"!\"))"]
    [:button.magic-button 
     {:on-click #(js/alert "Transformed to JavaScript!")}
     "Transform! ✨"]
    [:div.code-window
     "function hello(name) {\n  return \"Hello, \" + name + \"!\";\n}"]]
   [:div.magic-box
    [:h3 "Reform JavaScript to ClojureScript"]
    [:div.code-window
     "function add(a, b) {\n  return a + b;\n}"]
    [:button.magic-button
     {:on-click #(js/alert "Reformed to ClojureScript!")}
     "Reform! 🎯"]
    [:div.code-window
     "(defn add [a b]\n  (+ a b))"]]])

;; UI Components
(defn app []
  [:div.container
   [:h1 "CType: ClojureScript to JavaScript Transformer"]
   [:div.status-bar
    [:span (str "Server Status: " @connection-status)]]
   [:div.editors-container
    [:div.editor-box
     [:div.editor-title "ClojureScript"]
     [:textarea
      {:value @cljs-code
       :on-change #(reset! cljs-code (.. % -target -value))}]]
    [:div.editor-box
     [:div.editor-title "JavaScript"]
     [:textarea
      {:value @js-code
       :on-change #(reset! js-code (.. % -target -value))}]]]
   [:div.button-container
    [:button.transform-button.to-js
     {:on-click #(when @ws-connection
                  (.send @ws-connection
                        (js/JSON.stringify
                         (clj->js {:type "transform-to-js"
                                 :code @cljs-code}))))}
     "Transform to JavaScript ✨"]
    [:button.transform-button.to-cljs
     {:on-click #(when @ws-connection
                  (.send @ws-connection
                        (js/JSON.stringify
                         (clj->js {:type "transform-to-cljs"
                                 :code @js-code}))))}
     "Transform to ClojureScript 🎯"]]])

;; Initialize application
(defn init []
  (connect-websocket)
  (rdom/render [app]
               (.getElementById js/document "app"))
  (js/console.log "CType initialized!"))

(defn reload []
  (println "CType reloaded")
  (init))

;; Export functions
(def ^:export -init init)
(def ^:export -reload reload) 