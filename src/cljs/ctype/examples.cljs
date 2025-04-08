(ns ctype.examples
  (:require [clojure.string :as str]
            [ctype.interfaces :as interfaces]))

;; Complex type examples
(defn ^:js create-todo
  "Creates a todo item with type annotations"
  ^object [^string title ^string description]
  (interfaces/safe-create-todo title description))

(defn ^:js create-priority-todo
  "Creates a priority todo item"
  ^object [^string title ^string description ^string priority]
  (interfaces/safe-create-priority-todo title description priority))

(defn ^:js create-tag-todo
  "Creates a tagged todo item"
  ^object [^string title ^string description ^array tags]
  (interfaces/safe-create-tag-todo title description tags))

(defn ^:js toggle-todo
  "Toggles the completed state of a todo"
  ^object [^object todo]
  (clj->js (assoc (js->clj todo) :completed (not (get (js->clj todo) "completed")))))

(defn ^:js filter-todos
  "Filters todos based on completion status"
  ^array [^array todos ^boolean completed]
  (interfaces/filter-with-type todos
    (fn [todo]
      (= (get (js->clj todo) "completed") completed))
    "todo"))

(defn ^:js filter-by-priority
  "Filters todos by priority"
  ^array [^array todos ^string priority]
  (interfaces/filter-with-type todos
    (fn [todo]
      (= (get (js->clj todo) "priority") priority))
    "priority-todo"))

(defn ^:js filter-by-tag
  "Filters todos by tag"
  ^array [^array todos ^string tag]
  (interfaces/filter-with-type todos
    (fn [todo]
      (some #(= % tag) (get (js->clj todo) "tags")))
    "tag-todo"))

(defn ^:js sort-todos
  "Sorts todos by creation date"
  ^array [^array todos]
  (interfaces/map-with-type
    (js/Array.prototype.sort.call todos
      (fn [a b]
        (- (get (js->clj a) "created-at")
           (get (js->clj b) "created-at"))))
    identity
    "todo"))

(defn ^:js add-tag
  "Adds a tag to a todo"
  ^object [^object todo ^string tag]
  (let [todo-map (js->clj todo)
        tags (get todo-map "tags" [])]
    (interfaces/safe-create-tag-todo
      (get todo-map "title")
      (get todo-map "description")
      (conj tags tag))))

(defn ^:js remove-tag
  "Removes a tag from a todo"
  ^object [^object todo ^string tag]
  (let [todo-map (js->clj todo)
        tags (get todo-map "tags" [])]
    (interfaces/safe-create-tag-todo
      (get todo-map "title")
      (get todo-map "description")
      (remove #(= % tag) tags))))

(defn ^:js update-priority
  "Updates the priority of a todo"
  ^object [^object todo ^string priority]
  (interfaces/safe-create-priority-todo
    (get (js->clj todo) "title")
    (get (js->clj todo) "description")
    priority))

;; Example usage
(defn ^:js init-examples []
  (let [todos (js/Array.)
        todo1 (create-todo "Learn ClojureScript" "Study the basics")
        todo2 (create-priority-todo "Learn TypeScript" "Study type system" "high")
        todo3 (create-tag-todo "Build CType" "Create the bridge" (js/Array. "typescript" "clojurescript"))]
    (.push todos todo1)
    (.push todos todo2)
    (.push todos todo3)
    
    (js/console.log "Initial todos:" todos)
    (js/console.log "High priority todos:" (filter-by-priority todos "high"))
    (js/console.log "Todos with typescript tag:" (filter-by-tag todos "typescript"))
    (js/console.log "Sorted todos:" (sort-todos todos))))

;; Interactive demo functions
(defn ^:js add-todo
  "Adds a new todo item"
  ^object [^string title ^string description]
  (create-todo title description))

(defn ^:js add-priority-todo
  "Adds a new priority todo item"
  ^object [^string title ^string description ^string priority]
  (create-priority-todo title description priority))

(defn ^:js add-tag-todo
  "Adds a new tagged todo item"
  ^object [^string title ^string description ^array tags]
  (create-tag-todo title description tags))

(defn ^:js get-completed-todos
  "Gets all completed todos"
  ^array [^array todos]
  (filter-todos todos true))

(defn ^:js get-active-todos
  "Gets all active todos"
  ^array [^array todos]
  (filter-todos todos false))

(defn ^:js get-sorted-todos
  "Gets todos sorted by creation date"
  ^array [^array todos]
  (sort-todos todos))

(defn ^:js get-todos-by-priority
  "Gets todos by priority"
  ^array [^array todos ^string priority]
  (filter-by-priority todos priority))

(defn ^:js get-todos-by-tag
  "Gets todos by tag"
  ^array [^array todos ^string tag]
  (filter-by-tag todos tag)) 