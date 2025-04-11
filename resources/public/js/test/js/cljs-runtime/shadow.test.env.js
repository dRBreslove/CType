goog.provide('shadow.test.env');
/**
 * @define {boolean}
 */
shadow.test.env.UI_DRIVEN = goog.define("shadow.test.env.UI_DRIVEN",false);
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_vars = (function shadow$test$env$get_test_vars(){
var iter__5480__auto__ = (function shadow$test$env$get_test_vars_$_iter__12428(s__12429){
return (new cljs.core.LazySeq(null,(function (){
var s__12429__$1 = s__12429;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12429__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__12437 = cljs.core.first(xs__6360__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(1),null);
var iterys__5476__auto__ = ((function (s__12429__$1,vec__12437,ns,ns_info,xs__6360__auto__,temp__5804__auto__){
return (function shadow$test$env$get_test_vars_$_iter__12428_$_iter__12430(s__12431){
return (new cljs.core.LazySeq(null,((function (s__12429__$1,vec__12437,ns,ns_info,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__12431__$1 = s__12431;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12431__$1);
if(temp__5804__auto____$1){
var s__12431__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12431__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12431__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12433 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12432 = (0);
while(true){
if((i__12432 < size__5479__auto__)){
var var$ = cljs.core._nth(c__5478__auto__,i__12432);
cljs.core.chunk_append(b__12433,var$);

var G__12462 = (i__12432 + (1));
i__12432 = G__12462;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12433),shadow$test$env$get_test_vars_$_iter__12428_$_iter__12430(cljs.core.chunk_rest(s__12431__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12433),null);
}
} else {
var var$ = cljs.core.first(s__12431__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__12428_$_iter__12430(cljs.core.rest(s__12431__$2)));
}
} else {
return null;
}
break;
}
});})(s__12429__$1,vec__12437,ns,ns_info,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__12429__$1,vec__12437,ns,ns_info,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$test$env$get_test_vars_$_iter__12428(cljs.core.rest(s__12429__$1)));
} else {
var G__12463 = cljs.core.rest(s__12429__$1);
s__12429__$1 = G__12463;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(shadow.test.env.get_tests());
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__5480__auto__ = (function shadow$test$env$get_test_count_$_iter__12449(s__12450){
return (new cljs.core.LazySeq(null,(function (){
var s__12450__$1 = s__12450;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12450__$1);
if(temp__5804__auto__){
var s__12450__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12450__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12450__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12452 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12451 = (0);
while(true){
if((i__12451 < size__5479__auto__)){
var map__12455 = cljs.core._nth(c__5478__auto__,i__12451);
var map__12455__$1 = cljs.core.__destructure_map(map__12455);
var test_ns = map__12455__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12455__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__12452,cljs.core.count(vars));

var G__12465 = (i__12451 + (1));
i__12451 = G__12465;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12452),shadow$test$env$get_test_count_$_iter__12449(cljs.core.chunk_rest(s__12450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12452),null);
}
} else {
var map__12459 = cljs.core.first(s__12450__$2);
var map__12459__$1 = cljs.core.__destructure_map(map__12459);
var test_ns = map__12459__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12459__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__12449(cljs.core.rest(s__12450__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
