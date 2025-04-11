goog.provide('ctype.core');
ctype.core.cljs_code = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("(defn greet [name]\n  (str \"Hello, \" name \"!\"))\n\n(defn calculate-sum [a b]\n  (+ a b))\n\n(defn create-person [name age]\n  {:name name\n   :age age\n   :greeting (greet name)})");
ctype.core.js_code = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nfunction calculateSum(a, b) {\n  return a + b;\n}\n\nfunction createPerson(name, age) {\n  return {\n    name: name,\n    age: age,\n    greeting: greet(name)\n  };\n}");
ctype.core.ws_connection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
ctype.core.connection_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Disconnected");
ctype.core.connect_websocket = (function ctype$core$connect_websocket(){
var ws = (new WebSocket("ws://localhost:3000/ws"));
ws.addEventListener("open",(function (){
cljs.core.reset_BANG_(ctype.core.ws_connection,ws);

return cljs.core.reset_BANG_(ctype.core.connection_status,"Connected");
}));

ws.addEventListener("close",(function (){
cljs.core.reset_BANG_(ctype.core.ws_connection,null);

cljs.core.reset_BANG_(ctype.core.connection_status,"Disconnected");

return setTimeout(ctype.core.connect_websocket,(2000));
}));

return ws.addEventListener("message",(function (event){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(event.data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var G__12345 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data);
switch (G__12345) {
case "transform-result":
return cljs.core.reset_BANG_(ctype.core.js_code,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(data));

break;
default:
return console.log("Unknown message type:",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data));

}
}));
});
ctype.core.simple_code = ";; My First Program! \uD83C\uDF88\n(defn say-hello [name]\n  (str \"Hi, \" name \"! \uD83D\uDE0A\"))\n\n(defn add-numbers [a b]\n  (+ a b))  ; Add two numbers together!";
ctype.core.magic_code = "// Generated Magic Code \u2728\nfunction sayHello(name) {\n  return \"Hi, \" + name + \"! \uD83D\uDE0A\";\n}\n\nfunction addNumbers(a, b) {\n  return a + b;  // Add two numbers together!\n}";
/**
 * Add two numbers with type annotations
 */
ctype.core.typed_add = (function ctype$core$typed_add(a,b){
return (a + b);
});
goog.exportSymbol('ctype.core.typed_add', ctype.core.typed_add);
/**
 * Greet someone with type annotations
 */
ctype.core.typed_greet = (function ctype$core$typed_greet(name){
return ["Hello, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"!"].join('');
});
goog.exportSymbol('ctype.core.typed_greet', ctype.core.typed_greet);
ctype.core.demo_component = (function ctype$core$demo_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"CType: ClojureScript to JavaScript Transformer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"and JavaScript to ClojureScript Reformer"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.magic-box","div.magic-box",-1959738745),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Transform ClojureScript to JavaScript"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-window","div.code-window",143309626),"(defn hello [name]\n  (str \"Hello, \" name \"!\"))"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.magic-button","button.magic-button",-732520399),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return alert("Transformed to JavaScript!");
})], null),"Transform! \u2728"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-window","div.code-window",143309626),"function hello(name) {\n  return \"Hello, \" + name + \"!\";\n}"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.magic-box","div.magic-box",-1959738745),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Reform JavaScript to ClojureScript"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-window","div.code-window",143309626),"function add(a, b) {\n  return a + b;\n}"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.magic-button","button.magic-button",-732520399),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return alert("Reformed to ClojureScript!");
})], null),"Reform! \uD83C\uDFAF"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-window","div.code-window",143309626),"(defn add [a b]\n  (+ a b))"], null)], null)], null);
});
ctype.core.app = (function ctype$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"CType: ClojureScript to JavaScript Transformer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.status-bar","div.status-bar",1890137111),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Server Status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ctype.core.connection_status))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editors-container","div.editors-container",-1088678570),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor-box","div.editor-box",585640189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor-title","div.editor-title",-585858300),"ClojureScript"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(ctype.core.cljs_code),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12346_SHARP_){
return cljs.core.reset_BANG_(ctype.core.cljs_code,p1__12346_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor-box","div.editor-box",585640189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor-title","div.editor-title",-585858300),"JavaScript"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(ctype.core.js_code),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12347_SHARP_){
return cljs.core.reset_BANG_(ctype.core.js_code,p1__12347_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-container","div.button-container",107796404),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.transform-button.to-js","button.transform-button.to-js",556808889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(cljs.core.deref(ctype.core.ws_connection))){
return cljs.core.deref(ctype.core.ws_connection).send(JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"transform-to-js",new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.deref(ctype.core.cljs_code)], null))));
} else {
return null;
}
})], null),"Transform to JavaScript \u2728"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.transform-button.to-cljs","button.transform-button.to-cljs",890517268),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(cljs.core.deref(ctype.core.ws_connection))){
return cljs.core.deref(ctype.core.ws_connection).send(JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"transform-to-cljs",new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.deref(ctype.core.js_code)], null))));
} else {
return null;
}
})], null),"Transform to ClojureScript \uD83C\uDFAF"], null)], null)], null);
});
ctype.core.init = (function ctype$core$init(){
ctype.core.connect_websocket();

reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctype.core.app], null),document.getElementById("app"));

return console.log("CType initialized!");
});
ctype.core.reload = (function ctype$core$reload(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CType reloaded"], 0));

return ctype.core.init();
});
ctype.core._init = ctype.core.init;
goog.exportSymbol('ctype.core._init', ctype.core._init);
ctype.core._reload = ctype.core.reload;
goog.exportSymbol('ctype.core._reload', ctype.core._reload);

//# sourceMappingURL=ctype.core.js.map
