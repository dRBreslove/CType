(ns ctype.interfaces
  (:require [clojure.string :as str]))

;; Type interfaces
(defn ^:js TodoInterface
  "Defines the shape of a todo item"
  ^object [^string title ^string description ^boolean completed ^number created-at]
  (clj->js {:title title
            :description description
            :completed completed
            :created-at created-at}))

(defn ^:js TodoPriorityInterface
  "Extends TodoInterface with priority"
  ^object [^object todo ^string priority]
  (clj->js (merge (js->clj todo)
                  {:priority priority})))

(defn ^:js TodoTagInterface
  "Extends TodoInterface with tags"
  ^object [^object todo ^array tags]
  (clj->js (merge (js->clj todo)
                  {:tags tags})))

;; Generic type functions
(defn ^:js map-with-type
  "Generic map function that preserves type information"
  ^array [^array items ^function f ^string type]
  (js/Array.prototype.map.call items
    (fn [item]
      (let [result (f item)]
        (clj->js (merge (js->clj result)
                       {:__type type}))))))

(defn ^:js filter-with-type
  "Generic filter function that preserves type information"
  ^array [^array items ^function pred ^string type]
  (js/Array.prototype.filter.call items
    (fn [item]
      (and (= (get (js->clj item) "__type") type)
           (pred item)))))

;; Type validation
(defn ^:js validate-todo
  "Validates a todo item against its interface"
  ^boolean [^object todo]
  (let [todo-map (js->clj todo)]
    (and (string? (get todo-map "title"))
         (string? (get todo-map "description"))
         (boolean? (get todo-map "completed"))
         (number? (get todo-map "created-at")))))

(defn ^:js validate-priority-todo
  "Validates a priority todo item"
  ^boolean [^object todo]
  (let [todo-map (js->clj todo)]
    (and (validate-todo todo)
         (string? (get todo-map "priority"))
         (contains? #{"low" "medium" "high"} (get todo-map "priority")))))

(defn ^:js validate-tag-todo
  "Validates a tagged todo item"
  ^boolean [^object todo]
  (let [todo-map (js->clj todo)]
    (and (validate-todo todo)
         (array? (get todo-map "tags"))
         (every? string? (get todo-map "tags")))))

;; Error handling
(defn ^:js safe-create-todo
  "Creates a todo with error handling"
  ^object [^string title ^string description]
  (try
    (let [todo (TodoInterface title description false (js/Date.now))]
      (if (validate-todo todo)
        todo
        (throw (js/Error. "Invalid todo data"))))
    (catch :default e
      (js/console.error "Error creating todo:" e)
      (throw e)))))

(defn ^:js safe-create-priority-todo
  "Creates a priority todo with error handling"
  ^object [^string title ^string description ^string priority]
  (try
    (let [todo (TodoPriorityInterface
                (TodoInterface title description false (js/Date.now))
                priority)]
      (if (validate-priority-todo todo)
        todo
        (throw (js/Error. "Invalid priority todo data"))))
    (catch :default e
      (js/console.error "Error creating priority todo:" e)
      (throw e)))))

(defn ^:js safe-create-tag-todo
  "Creates a tagged todo with error handling"
  ^object [^string title ^string description ^array tags]
  (try
    (let [todo (TodoTagInterface
                (TodoInterface title description false (js/Date.now))
                tags)]
      (if (validate-tag-todo todo)
        todo
        (throw (js/Error. "Invalid tag todo data"))))
    (catch :default e
      (js/console.error "Error creating tag todo:" e)
      (throw e))))) 