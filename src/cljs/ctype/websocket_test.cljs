(ns ctype.websocket-test
  (:require [cljs.test :refer [deftest is testing async]]
            [cljs.core.async :refer [go timeout <! put! close! chan]]
            [ctype.server :as server]))

(deftest websocket-connection-test
  (testing "WebSocket connection"
    (async done
      (let [ws (js/WebSocket. "ws://localhost:8080")]
        (.addEventListener ws "open"
          (fn []
            (is true "WebSocket connection established")
            (.close ws)))
        
        (.addEventListener ws "error"
          (fn [error]
            (is false "WebSocket connection failed")
            (done)))
        
        (.addEventListener ws "close"
          (fn []
            (done)))))))

(deftest websocket-message-test
  (testing "WebSocket message exchange"
    (async done
      (let [ws (js/WebSocket. "ws://localhost:8080")
            test-message "Hello WebSocket!"]
        
        (.addEventListener ws "open"
          (fn []
            (.send ws test-message)))
        
        (.addEventListener ws "message"
          (fn [event]
            (is (= test-message (.-data event))
                "Received message matches sent message")
            (.close ws)))
        
        (.addEventListener ws "error"
          (fn [error]
            (is false "WebSocket message exchange failed")
            (done)))
        
        (.addEventListener ws "close"
          (fn []
            (done)))))))

(deftest websocket-binary-data-test
  (testing "WebSocket binary data exchange"
    (async done
      (let [ws (js/WebSocket. "ws://localhost:8080")
            binary-data (js/Uint8Array. #js [1 2 3 4 5])]
        
        (.addEventListener ws "open"
          (fn []
            (.send ws binary-data)))
        
        (.addEventListener ws "message"
          (fn [event]
            (let [received-data (js/Uint8Array. (.-data event))]
              (is (= (.-length binary-data) (.-length received-data))
                  "Received binary data length matches sent data")
              (is (= (js/JSON.stringify (js/Array.from binary-data))
                    (js/JSON.stringify (js/Array.from received-data)))
                  "Received binary data matches sent data")
              (.close ws))))
        
        (.addEventListener ws "error"
          (fn [error]
            (is false "WebSocket binary data exchange failed")
            (done)))
        
        (.addEventListener ws "close"
          (fn []
            (done)))))))) 