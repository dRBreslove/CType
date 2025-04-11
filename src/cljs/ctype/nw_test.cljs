(ns ctype.nw-test
  (:require [cljs.test :refer [deftest testing is]]
            [cljs.nodejs :as nodejs]
            [ctype.core :as core]))

(def robot (js/require "robotjs"))

(deftest nw-window-test
  (testing "NW.js window properties"
    (is (exists? js/process.versions.nw) "NW.js should be available")
    (is (exists? js/window.require) "Node.js require should be available in window")))

(deftest robot-test
  (testing "Robot.js functionality"
    (when (exists? js/process.env.ROBOT_TEST)
      (let [mouse-pos (.getMousePos robot)]
        (is (number? (.-x mouse-pos)) "Mouse X position should be a number")
        (is (number? (.-y mouse-pos)) "Mouse Y position should be a number")))))

(deftest core-integration-test
  (testing "Core functionality in NW.js environment"
    (is (= 4 (core/typed_add 2 2)) "Addition should work in NW.js")
    (is (= "Hello, Test!" (core/typed_greet "Test")) "Greeting should work in NW.js"))) 