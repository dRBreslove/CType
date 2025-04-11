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
var G__22543__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22544__i = 0, G__22544__a = new Array(arguments.length -  0);
while (G__22544__i < G__22544__a.length) {G__22544__a[G__22544__i] = arguments[G__22544__i + 0]; ++G__22544__i;}
  args = new cljs.core.IndexedSeq(G__22544__a,0,null);
} 
return G__22543__delegate.call(this,args);};
G__22543.cljs$lang$maxFixedArity = 0;
G__22543.cljs$lang$applyTo = (function (arglist__22545){
var args = cljs.core.seq(arglist__22545);
return G__22543__delegate(args);
});
G__22543.cljs$core$IFn$_invoke$arity$variadic = G__22543__delegate;
return G__22543;
})()
);

(o.error = (function() { 
var G__22546__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22547__i = 0, G__22547__a = new Array(arguments.length -  0);
while (G__22547__i < G__22547__a.length) {G__22547__a[G__22547__i] = arguments[G__22547__i + 0]; ++G__22547__i;}
  args = new cljs.core.IndexedSeq(G__22547__a,0,null);
} 
return G__22546__delegate.call(this,args);};
G__22546.cljs$lang$maxFixedArity = 0;
G__22546.cljs$lang$applyTo = (function (arglist__22548){
var args = cljs.core.seq(arglist__22548);
return G__22546__delegate(args);
});
G__22546.cljs$core$IFn$_invoke$arity$variadic = G__22546__delegate;
return G__22546;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
