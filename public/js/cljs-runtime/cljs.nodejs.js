goog.provide('cljs.nodejs');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_((function() { 
var G__22936__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__22936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22938__i = 0, G__22938__a = new Array(arguments.length -  0);
while (G__22938__i < G__22938__a.length) {G__22938__a[G__22938__i] = arguments[G__22938__i + 0]; ++G__22938__i;}
  args = new cljs.core.IndexedSeq(G__22938__a,0,null);
} 
return G__22936__delegate.call(this,args);};
G__22936.cljs$lang$maxFixedArity = 0;
G__22936.cljs$lang$applyTo = (function (arglist__22940){
var args = cljs.core.seq(arglist__22940);
return G__22936__delegate(args);
});
G__22936.cljs$core$IFn$_invoke$arity$variadic = G__22936__delegate;
return G__22936;
})()
);

cljs.core.set_print_err_fn_BANG_((function() { 
var G__22941__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__22941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22942__i = 0, G__22942__a = new Array(arguments.length -  0);
while (G__22942__i < G__22942__a.length) {G__22942__a[G__22942__i] = arguments[G__22942__i + 0]; ++G__22942__i;}
  args = new cljs.core.IndexedSeq(G__22942__a,0,null);
} 
return G__22941__delegate.call(this,args);};
G__22941.cljs$lang$maxFixedArity = 0;
G__22941.cljs$lang$applyTo = (function (arglist__22943){
var args = cljs.core.seq(arglist__22943);
return G__22941__delegate(args);
});
G__22941.cljs$core$IFn$_invoke$arity$variadic = G__22941__delegate;
return G__22941;
})()
);

return null;
});

//# sourceMappingURL=cljs.nodejs.js.map
