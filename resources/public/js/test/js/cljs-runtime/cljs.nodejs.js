goog.provide('cljs.nodejs');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_((function() { 
var G__12468__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__12468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12469__i = 0, G__12469__a = new Array(arguments.length -  0);
while (G__12469__i < G__12469__a.length) {G__12469__a[G__12469__i] = arguments[G__12469__i + 0]; ++G__12469__i;}
  args = new cljs.core.IndexedSeq(G__12469__a,0,null);
} 
return G__12468__delegate.call(this,args);};
G__12468.cljs$lang$maxFixedArity = 0;
G__12468.cljs$lang$applyTo = (function (arglist__12470){
var args = cljs.core.seq(arglist__12470);
return G__12468__delegate(args);
});
G__12468.cljs$core$IFn$_invoke$arity$variadic = G__12468__delegate;
return G__12468;
})()
);

cljs.core.set_print_err_fn_BANG_((function() { 
var G__12471__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__12471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12472__i = 0, G__12472__a = new Array(arguments.length -  0);
while (G__12472__i < G__12472__a.length) {G__12472__a[G__12472__i] = arguments[G__12472__i + 0]; ++G__12472__i;}
  args = new cljs.core.IndexedSeq(G__12472__a,0,null);
} 
return G__12471__delegate.call(this,args);};
G__12471.cljs$lang$maxFixedArity = 0;
G__12471.cljs$lang$applyTo = (function (arglist__12473){
var args = cljs.core.seq(arglist__12473);
return G__12471__delegate(args);
});
G__12471.cljs$core$IFn$_invoke$arity$variadic = G__12471__delegate;
return G__12471;
})()
);

return null;
});

//# sourceMappingURL=cljs.nodejs.js.map
