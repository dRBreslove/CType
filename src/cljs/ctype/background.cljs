(ns ctype.background
  (:require [cljs.nodejs :as nodejs]
            [ctype.core :as core]))

(defn init []
  (println "Background script initialized")
  (core/init))

(defn -main []
  (init))

(set! *main-cli-fn* -main) 