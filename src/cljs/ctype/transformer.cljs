(ns ctype.transformer
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as str]
            [clojure.walk :as walk]
            [clojure.edn :as edn]))

(def fs (nodejs/require "fs"))
(def path (nodejs/require "path"))

;; File operations
(defn read-file [file-path]
  (try
    (let [^js fs-module (nodejs/require "fs")]
      (.readFileSync fs-module file-path "utf8"))
    (catch :default e
      (println "Error reading file:" (.-message e))
      nil)))

(defn write-file [file-path content]
  (try
    (let [^js fs-module (nodejs/require "fs")]
      (.writeFileSync fs-module file-path content "utf8")
      true)
    (catch :default e
      (println "Error writing file:" (.-message e))
      false)))

;; Code parsing and transformation
(defn parse-clojure [content]
  (try
    (let [forms (edn/read-string (str "(" content ")"))]
      {:success true
       :forms forms})
    (catch :default e
      {:success false
       :error (.-message e)})))

;; Forward declarations for recursive functions
(declare transform-to-js transform-to-cljs)

(defn- transform-function-to-js [code]
  (let [pattern #"\(defn\s+(\w+)\s+\[([^\]]*)\]\s+(.*)\)"
        matches (re-find pattern code)]
    (when matches
      (let [[_ name args body] matches
            args-list (str/split (str/trim args) #"\s+")]
        (str "function " name "(" (str/join ", " args-list) ") {\n  return " 
             (transform-to-js (str/trim body)) ";\n}")))))

(defn- transform-map-to-js [code]
  (let [pattern #"\{([^\}]*)\}"
        matches (re-find pattern code)]
    (when matches
      (let [content (second matches)
            pairs (re-seq #":(\w+)\s+([^\s]+)" content)
            js-pairs (map (fn [[_ key value]]
                          (str "    " key ": " (str/replace value #"\"" "")))
                        pairs)]
        (str "return {\n" (str/join ",\n" js-pairs) "\n  };")))))

(defn- transform-str-to-js [code]
  (let [pattern #"\(str\s+\"([^\"]*)\"\s+([^\s]+)\s+\"([^\"]*)\"\)"
        matches (re-find pattern code)]
    (when matches
      (let [[_ prefix var suffix] matches]
        (str "`" prefix "${" var "}" suffix "`")))))

(defn- transform-arithmetic-to-js [code]
  (let [pattern #"\(([+\-*/])\s+([^\s]+)\s+([^\)]+)\)"
        matches (re-find pattern code)]
    (when matches
      (let [[_ op a b] matches]
        (str a " " op " " b)))))

(defn transform-to-js [code]
  (if (str/includes? code "\n\n")
    (str/join "\n\n" (map transform-to-js (str/split code #"\n\n")))
    (or (transform-function-to-js code)
        (transform-map-to-js code)
        (transform-str-to-js code)
        (transform-arithmetic-to-js code)
        code)))

(defn- transform-function-to-cljs [code]
  (let [pattern #"function\s+(\w+)\(([^)]*)\)\s*\{\s*return\s+(.*?);\s*\}"
        matches (re-find pattern code)]
    (when matches
      (let [[_ name args body] matches
            args-list (str/split (str/trim args) #",\s*")]
        (str "(defn " name " [" (str/join " " args-list) "]\n  "
             (transform-to-cljs (str/trim body)) ")")))))

(defn- transform-object-to-cljs [code]
  (let [pattern #"return\s*\{\s*([^}]*)\s*\};"
        matches (re-find pattern code)]
    (when matches
      (let [content (second matches)
            pairs (str/split content #",\s*")
            cljs-pairs (map (fn [pair]
                            (let [[key value] (str/split (str/trim pair) #":\s*")]
                              (str ":" (str/trim key) " " (str/trim value))))
                          pairs)]
        (str "{" (str/join " " cljs-pairs) "}")))))

(defn- transform-template-to-cljs [code]
  (let [pattern #"`([^`]*)`"
        matches (re-find pattern code)]
    (when matches
      (let [content (second matches)
            parts (re-seq #"\$\{([^}]+)\}|([^${}]+)" content)
            cljs-parts (map (fn [[_ expr literal]]
                            (if expr
                              expr
                              (str "\"" literal "\"")))
                          parts)]
        (str "(str " (str/join " " cljs-parts) ")")))))

(defn- transform-arithmetic-to-cljs [code]
  (let [pattern #"([^\s]+)\s+([+\-*/])\s+([^\s]+)"
        matches (re-find pattern code)]
    (when matches
      (let [[_ a op b] matches]
        (str "(" op " " a " " b ")")))))

(defn transform-to-cljs [code]
  (if (str/includes? code "\n\n")
    (str/join "\n\n" (map transform-to-cljs (str/split code #"\n\n")))
    (or (transform-function-to-cljs code)
        (transform-object-to-cljs code)
        (transform-template-to-cljs code)
        (transform-arithmetic-to-cljs code)
        code)))

(defn transform
  "Transform code between ClojureScript and JavaScript"
  [code direction]
  (case direction
    "to-js" (transform-to-js code)
    "to-cljs" (transform-to-cljs code)
    code))

(defn transform-to-typescript [forms]
  (let [ts-code (str/replace (pr-str forms) #"\(|\)" "")
        ts-code (str/replace ts-code #"defn" "function")
        ts-code (str/replace ts-code #"def" "const")]
    ts-code))

;; Main transformation function
(defn transform-code [input-path output-path target-format]
  (let [content (read-file input-path)
        parsed (parse-clojure content)]
    (if (:success parsed)
      (let [transformed (case target-format
                         :js (transform-to-js (:forms parsed))
                         :ts (transform-to-typescript (:forms parsed))
                         (throw (js/Error. "Unsupported target format")))]
        (write-file output-path transformed))
      (println "Error parsing code:" (:error parsed)))))

;; CLI entry point
(defn ^:export -main [& args]
  (println "CType Transformer initialized!"))

(set! *main-cli-fn* -main)

(def ^:export transform transform) 