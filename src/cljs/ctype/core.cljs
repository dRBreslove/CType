(ns ctype.core
  (:require [clojure.string :as str]))

(defn ^:js typed-add
  "Adds two numbers with type annotations"
  ^number [^number a ^number b]
  (+ a b))

(defn ^:js typed-greet
  "Greets a person with type annotations"
  ^string [^string name]
  (str "Hello, " name "!"))

(defn ^:js init
  "Initialize the library"
  []
  (js/console.log "CType initialized"))

(defn ^:js reload!
  "Reload the library"
  []
  (js/console.log "CType reloaded")) 