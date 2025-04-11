(ns ctype.core-test
  (:require [cljs.test :refer [deftest testing is]]
            [ctype.core :as core]))

(deftest test-typed-add
  (testing "Adding numbers with type annotations"
    (is (= 5 (core/typed_add 2 3)))
    (is (= 0 (core/typed_add -1 1)))
    (is (= 10 (core/typed_add 5 5)))))

(deftest test-typed-greet
  (testing "Greeting with type annotations"
    (is (= "Hello, World!" (core/typed_greet "World")))
    (is (= "Hello, ClojureScript!" (core/typed_greet "ClojureScript")))
    (is (= "Hello, TypeScript!" (core/typed_greet "TypeScript")))))

(deftest test-init-and-reload
  (testing "Library initialization and reload"
    (is (fn? core/-init))
    (is (fn? core/-reload)))) 