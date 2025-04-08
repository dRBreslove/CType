(ns hello.core
  (:require [cljs.nodejs :as nodejs]))

(defn hello []
  (println "Hello, World from ClojureScript!"))

(defn -main []
  (hello))

(set! *main-cli-fn* -main) 