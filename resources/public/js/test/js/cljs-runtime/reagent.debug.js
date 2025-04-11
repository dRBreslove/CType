goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__7233__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7234__i = 0, G__7234__a = new Array(arguments.length -  0);
while (G__7234__i < G__7234__a.length) {G__7234__a[G__7234__i] = arguments[G__7234__i + 0]; ++G__7234__i;}
  args = new cljs.core.IndexedSeq(G__7234__a,0,null);
} 
return G__7233__delegate.call(this,args);};
G__7233.cljs$lang$maxFixedArity = 0;
G__7233.cljs$lang$applyTo = (function (arglist__7235){
var args = cljs.core.seq(arglist__7235);
return G__7233__delegate(args);
});
G__7233.cljs$core$IFn$_invoke$arity$variadic = G__7233__delegate;
return G__7233;
})()
);

(o.error = (function() { 
var G__7236__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7237__i = 0, G__7237__a = new Array(arguments.length -  0);
while (G__7237__i < G__7237__a.length) {G__7237__a[G__7237__i] = arguments[G__7237__i + 0]; ++G__7237__i;}
  args = new cljs.core.IndexedSeq(G__7237__a,0,null);
} 
return G__7236__delegate.call(this,args);};
G__7236.cljs$lang$maxFixedArity = 0;
G__7236.cljs$lang$applyTo = (function (arglist__7238){
var args = cljs.core.seq(arglist__7238);
return G__7236__delegate(args);
});
G__7236.cljs$core$IFn$_invoke$arity$variadic = G__7236__delegate;
return G__7236;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
