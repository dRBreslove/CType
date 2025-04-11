goog.provide('ctype.core');
ctype.core.simple_code = ";; My First Program! \uD83C\uDF88\n(defn say-hello [name]\n  (str \"Hi, \" name \"! \uD83D\uDE0A\"))\n\n(defn add-numbers [a b]\n  (+ a b))  ; Add two numbers together!";
ctype.core.magic_code = "// Generated Magic Code \u2728\nfunction sayHello(name) {\n  return \"Hi, \" + name + \"! \uD83D\uDE0A\";\n}\n\nfunction addNumbers(a, b) {\n  return a + b;  // Add two numbers together!\n}";
ctype.core.demo_component = (function ctype$core$demo_component(){
var magic_output = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var simple_output = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"\u2728 Code Transformer \u2728"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.magic-box","div.magic-box",-1959738745),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.emoji","span.emoji",1964684671),"\uD83C\uDF1F"], null),"Turn Simple Code into Magic Code!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-window","div.code-window",143309626),ctype.core.simple_code], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.magic-button","button.magic-button",-732520399),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(magic_output,"\uD83C\uDFA9 Transforming...");

return setTimeout((function (){
return cljs.core.reset_BANG_(magic_output,ctype.core.magic_code);
}),(1000));
})], null),"Transform! \u2728"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-window","div.code-window",143309626),cljs.core.deref(magic_output)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.magic-box","div.magic-box",-1959738745),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.emoji","span.emoji",1964684671),"\uD83D\uDD2E"], null),"Turn Magic Code Back!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-window","div.code-window",143309626),ctype.core.magic_code], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.magic-button","button.magic-button",-732520399),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(simple_output,"\uD83C\uDFAF Transforming back...");

return setTimeout((function (){
return cljs.core.reset_BANG_(simple_output,ctype.core.simple_code);
}),(1000));
})], null),"Transform Back! \uD83C\uDFAF"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-window","div.code-window",143309626),cljs.core.deref(simple_output)], null)], null)], null);
});
});
ctype.core.init = (function ctype$core$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CType initialized"], 0));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctype.core.demo_component], null),document.getElementById("app"));
});
ctype.core.reload = (function ctype$core$reload(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CType reloaded"], 0));

return ctype.core.init();
});
/**
 * Add two numbers with type annotations
 */
ctype.core.typed_add = (function ctype$core$typed_add(a,b){
return (a + b);
});
/**
 * Greet someone with type annotations
 */
ctype.core.typed_greet = (function ctype$core$typed_greet(name){
return ["Hello, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"!"].join('');
});
ctype.core.typed_add = (function ctype$core$typed_add(a,b){
return ctype.core.typed_add(a,b);
});
goog.exportSymbol('ctype.core.typed_add', ctype.core.typed_add);
ctype.core.typed_greet = (function ctype$core$typed_greet(name){
return ctype.core.typed_greet(name);
});
goog.exportSymbol('ctype.core.typed_greet', ctype.core.typed_greet);
ctype.core.init = (function ctype$core$init(){
return (ctype.core.init.cljs$core$IFn$_invoke$arity$0 ? ctype.core.init.cljs$core$IFn$_invoke$arity$0() : ctype.core.init.call(null, ));
});
goog.exportSymbol('ctype.core.init', ctype.core.init);
ctype.core.reload = (function ctype$core$reload(){
return (ctype.core.reload.cljs$core$IFn$_invoke$arity$0 ? ctype.core.reload.cljs$core$IFn$_invoke$arity$0() : ctype.core.reload.call(null, ));
});
goog.exportSymbol('ctype.core.reload', ctype.core.reload);

//# sourceMappingURL=ctype.core.js.map
