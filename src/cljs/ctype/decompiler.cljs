(ns ctype.decompiler
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as str]))

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

(defn parse-cljs-file [content]
  (let [lines (str/split-lines content)
        ns-decl (first (filter #(re-find #"^\(ns" %) lines))
        functions (filter #(re-find #"^\(defn" %) lines)]
    {:namespace (second (re-find #"\(ns\s+([^\s]+)" ns-decl))
     :functions (mapv (fn [fn-def]
                       (let [[_ name args] (re-find #"\(defn\s+([^\s]+)\s*\[([^\]]*)\]" fn-def)]
                         {:name name
                          :args (when (not-empty args)
                                 (str/split args #"\s+"))}))
                     functions)}))

(defn generate-ts-declaration [{:keys [namespace functions]}]
  (let [ns-parts (str/split namespace #"\.")
        module-name (str/join "/" ns-parts)]
    (str "declare module '" module-name "' {\n"
         (str/join "\n" 
           (map (fn [{:keys [name args]}]
                  (str "  export function " name 
                       "(" (when args 
                            (str/join ", " 
                              (map-indexed 
                                (fn [idx _] 
                                  (str "arg" idx ": any")) 
                                args))) 
                       "): any;"))
                functions))
         "\n}\n")))

(defn decompile-file [input-path output-path]
  (if-let [content (read-file input-path)]
    (let [parsed (parse-cljs-file content)
          ts-decl (generate-ts-declaration parsed)]
      (write-file output-path ts-decl))
    false))

(defn -main [& args]
  (if (< (count args) 2)
    (println "Usage: node decompiler.cjs <input-file> <output-file>")
    (let [[input output] args]
      (if (decompile-file input output)
        (println "Successfully decompiled" input "to" output)
        (println "Failed to decompile" input)))))

(set! *main-cli-fn* -main) 