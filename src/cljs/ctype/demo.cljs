(ns ctype.demo
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as str]
            [ctype.decompiler :as decompiler]))

(def fs (nodejs/require "fs"))
(def path (nodejs/require "path"))

(defn read-file [file-path]
  (try
    (.readFileSync fs file-path "utf8")
    (catch js/Error e
      (println "Error reading file:" (.-message e))
      nil)))

(defn write-file [file-path content]
  (try
    (.writeFileSync fs file-path content "utf8")
    true
    (catch js/Error e
      (println "Error writing file:" (.-message e))
      false)))

(defn compile-cljs [input-path output-path]
  (println "Compiling ClojureScript to JavaScript...")
  (let [content (read-file input-path)]
    (when content
      (write-file output-path content))))

(defn decompile-js [input-path output-path]
  (println "Decompiling JavaScript to ClojureScript...")
  (decompiler/decompile-file input-path output-path))

(defn init-demo []
  (println "Initializing CType Demo...")
  (let [demo-dir "demo"
        cljs-file (path/join demo-dir "example.cljs")
        js-file (path/join demo-dir "example.js")]
    ;; Create demo directory if it doesn't exist
    (when-not (.existsSync fs demo-dir)
      (.mkdirSync fs demo-dir))
    
    ;; Create example ClojureScript file
    (write-file cljs-file
      "(ns example.core
  (:require [cljs.nodejs :as nodejs]))

(defn hello []
  (println \"Hello from ClojureScript!\"))

(defn -main []
  (hello))")
    
    ;; Compile and decompile
    (compile-cljs cljs-file js-file)
    (decompile-js js-file (path/join demo-dir "decompiled.cljs"))))

(defn -main []
  (init-demo))

(set! *main-cli-fn* -main) 