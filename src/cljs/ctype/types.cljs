(ns ctype.types
  (:require [clojure.string :as str]))

;; Type annotations using ^:js metadata
(defn ^:js typed-add
  "Adds two numbers with type annotations"
  ^number [^number a ^number b]
  (+ a b))

(defn ^:js typed-greet
  "Greets a person with type annotations"
  ^string [^string name]
  (str "Hello, " name "!"))

(defn ^:js typed-map
  "Maps a function over an array with type annotations"
  ^array [^function f ^array arr]
  (js/Array.prototype.map.call arr f))

(defn ^:js typed-filter
  "Filters an array with type annotations"
  ^array [^function pred ^array arr]
  (js/Array.prototype.filter.call arr pred))

;; Example usage
(defn ^:js init-types []
  (let [numbers (js/Array. 1 2 3 4 5)
        doubled (typed-map #(* % 2) numbers)
        evens (typed-filter #(= 0 (mod % 2)) numbers)]
    (js/console.log "Doubled numbers:" doubled)
    (js/console.log "Even numbers:" evens))) 