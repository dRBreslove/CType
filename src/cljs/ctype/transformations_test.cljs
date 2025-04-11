(ns ctype.transformations-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [ctype.transformer :as transformer]))

(deftest transform-to-js-test
  (testing "Transform ClojureScript function to JavaScript"
    (let [input "(defn greet [name]\n  (str \"Hello, \" name \"!\"))"
          expected "function greet(name) {\n  return `Hello, ${name}!`;\n}"
          result (transformer/transform-to-js input)]
      (is (= expected result))))
  
  (testing "Transform ClojureScript map to JavaScript object"
    (let [input "{:name \"John\" :age 30 :greeting \"Hello\"}"
          expected "return {\n    name: John,\n    age: 30,\n    greeting: Hello\n  };"
          result (transformer/transform-to-js input)]
      (is (= expected result))))
  
  (testing "Transform multiple ClojureScript functions"
    (let [input "(defn add [a b]\n  (+ a b))\n\n(defn multiply [x y]\n  (* x y))"
          expected "function add(a, b) {\n  return a + b;\n}\n\nfunction multiply(x, y) {\n  return x * y;\n}"
          result (transformer/transform-to-js input)]
      (is (= expected result)))))

(deftest transform-to-cljs-test
  (testing "Transform JavaScript function to ClojureScript"
    (let [input "function greet(name) {\n  return `Hello, ${name}!`;\n}"
          expected "(defn greet [name]\n  (str \"Hello, \" name \"!\"))"
          result (transformer/transform-to-cljs input)]
      (is (= expected result))))
  
  (testing "Transform JavaScript object to ClojureScript map"
    (let [input "return {\n    name: John,\n    age: 30,\n    greeting: Hello\n  };"
          expected "{:name John :age 30 :greeting Hello}"
          result (transformer/transform-to-cljs input)]
      (is (= expected result))))
  
  (testing "Transform multiple JavaScript functions"
    (let [input "function add(a, b) {\n  return a + b;\n}\n\nfunction multiply(x, y) {\n  return x * y;\n}"
          expected "(defn add [a b]\n  (+ a b))\n\n(defn multiply [x y]\n  (* x y))"
          result (transformer/transform-to-cljs input)]
      (is (= expected result))))) 