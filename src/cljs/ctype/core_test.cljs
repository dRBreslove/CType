(ns ctype.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [ctype.core :as core]))

(deftest test-typed-add
  (testing "Adding numbers with type annotations"
    (is (= 5 (core/typed-add 2 3)))
    (is (= 0 (core/typed-add -1 1)))
    (is (= 10 (core/typed-add 5 5)))))

(deftest test-typed-greet
  (testing "Greeting with type annotations"
    (is (= "Hello, World!" (core/typed-greet "World")))
    (is (= "Hello, ClojureScript!" (core/typed-greet "ClojureScript")))
    (is (= "Hello, TypeScript!" (core/typed-greet "TypeScript")))))

(deftest test-init-and-reload
  (testing "Library initialization and reload"
    (is (fn? core/init))
    (is (fn? core/reload!)))) 