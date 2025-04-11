goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__12577){
var vec__12578 = p__12577;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__12583 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__12583__$1 = (((G__12583 instanceof cljs.core.Keyword))?G__12583.fqn:null);
switch (G__12583__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__12594 = (function (){
var seq__12595 = cljs.core.seq(vars__$1);
var chunk__12596 = null;
var count__12597 = (0);
var i__12598 = (0);
while(true){
if((i__12598 < count__12597)){
var v = chunk__12596.cljs$core$IIndexed$_nth$arity$2(null, i__12598);
var temp__5804__auto___12782 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___12782)){
var t_12783 = temp__5804__auto___12782;
var G__12684_12784 = ((function (seq__12595,chunk__12596,count__12597,i__12598,t_12783,temp__5804__auto___12782,v,each_fixture_fn,G__12583,G__12583__$1,env,once_fixtures,each_fixtures,vec__12578,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_12783)));
});})(seq__12595,chunk__12596,count__12597,i__12598,t_12783,temp__5804__auto___12782,v,each_fixture_fn,G__12583,G__12583__$1,env,once_fixtures,each_fixtures,vec__12578,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__12684_12784) : each_fixture_fn.call(null, G__12684_12784));
} else {
}


var G__12785 = seq__12595;
var G__12786 = chunk__12596;
var G__12787 = count__12597;
var G__12788 = (i__12598 + (1));
seq__12595 = G__12785;
chunk__12596 = G__12786;
count__12597 = G__12787;
i__12598 = G__12788;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12595);
if(temp__5804__auto__){
var seq__12595__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12595__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12595__$1);
var G__12789 = cljs.core.chunk_rest(seq__12595__$1);
var G__12790 = c__5525__auto__;
var G__12791 = cljs.core.count(c__5525__auto__);
var G__12792 = (0);
seq__12595 = G__12789;
chunk__12596 = G__12790;
count__12597 = G__12791;
i__12598 = G__12792;
continue;
} else {
var v = cljs.core.first(seq__12595__$1);
var temp__5804__auto___12793__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___12793__$1)){
var t_12794 = temp__5804__auto___12793__$1;
var G__12685_12795 = ((function (seq__12595,chunk__12596,count__12597,i__12598,t_12794,temp__5804__auto___12793__$1,v,seq__12595__$1,temp__5804__auto__,each_fixture_fn,G__12583,G__12583__$1,env,once_fixtures,each_fixtures,vec__12578,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_12794)));
});})(seq__12595,chunk__12596,count__12597,i__12598,t_12794,temp__5804__auto___12793__$1,v,seq__12595__$1,temp__5804__auto__,each_fixture_fn,G__12583,G__12583__$1,env,once_fixtures,each_fixtures,vec__12578,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__12685_12795) : each_fixture_fn.call(null, G__12685_12795));
} else {
}


var G__12796 = cljs.core.next(seq__12595__$1);
var G__12797 = null;
var G__12798 = (0);
var G__12799 = (0);
seq__12595 = G__12796;
chunk__12596 = G__12797;
count__12597 = G__12798;
i__12598 = G__12799;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__12593 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__12593.cljs$core$IFn$_invoke$arity$1 ? fexpr__12593.cljs$core$IFn$_invoke$arity$1(G__12594) : fexpr__12593.call(null, G__12594));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12583__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__12576_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__12576_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__12699 = shadow.test.env.get_test_ns_info(ns);
var map__12699__$1 = cljs.core.__destructure_map(map__12699);
var test_ns = map__12699__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12699__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__12707,vars){
var map__12708 = p__12707;
var map__12708__$1 = cljs.core.__destructure_map(map__12708);
var env = map__12708__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12708__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__12709_12800 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__12711_12801 = null;
var count__12712_12802 = (0);
var i__12713_12803 = (0);
while(true){
if((i__12713_12803 < count__12712_12802)){
var vec__12729_12804 = chunk__12711_12801.cljs$core$IIndexed$_nth$arity$2(null, i__12713_12803);
var test_ns_12805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12729_12804,(0),null);
var ns_info_12806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12729_12804,(1),null);
var map__12732_12807 = ns_info_12806;
var map__12732_12808__$1 = cljs.core.__destructure_map(map__12732_12807);
var fixtures_12809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12732_12808__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___12810 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_12809);
if(cljs.core.truth_(temp__5804__auto___12810)){
var fix_12811 = temp__5804__auto___12810;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_12805,fix_12811], 0));
} else {
}

var temp__5804__auto___12812 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_12809);
if(cljs.core.truth_(temp__5804__auto___12812)){
var fix_12813 = temp__5804__auto___12812;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_12805,fix_12813], 0));
} else {
}


var G__12814 = seq__12709_12800;
var G__12815 = chunk__12711_12801;
var G__12816 = count__12712_12802;
var G__12817 = (i__12713_12803 + (1));
seq__12709_12800 = G__12814;
chunk__12711_12801 = G__12815;
count__12712_12802 = G__12816;
i__12713_12803 = G__12817;
continue;
} else {
var temp__5804__auto___12818 = cljs.core.seq(seq__12709_12800);
if(temp__5804__auto___12818){
var seq__12709_12819__$1 = temp__5804__auto___12818;
if(cljs.core.chunked_seq_QMARK_(seq__12709_12819__$1)){
var c__5525__auto___12820 = cljs.core.chunk_first(seq__12709_12819__$1);
var G__12821 = cljs.core.chunk_rest(seq__12709_12819__$1);
var G__12822 = c__5525__auto___12820;
var G__12823 = cljs.core.count(c__5525__auto___12820);
var G__12824 = (0);
seq__12709_12800 = G__12821;
chunk__12711_12801 = G__12822;
count__12712_12802 = G__12823;
i__12713_12803 = G__12824;
continue;
} else {
var vec__12734_12825 = cljs.core.first(seq__12709_12819__$1);
var test_ns_12826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12734_12825,(0),null);
var ns_info_12827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12734_12825,(1),null);
var map__12738_12828 = ns_info_12827;
var map__12738_12829__$1 = cljs.core.__destructure_map(map__12738_12828);
var fixtures_12830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12738_12829__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___12831__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_12830);
if(cljs.core.truth_(temp__5804__auto___12831__$1)){
var fix_12832 = temp__5804__auto___12831__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_12826,fix_12832], 0));
} else {
}

var temp__5804__auto___12833__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_12830);
if(cljs.core.truth_(temp__5804__auto___12833__$1)){
var fix_12834 = temp__5804__auto___12833__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_12826,fix_12834], 0));
} else {
}


var G__12835 = cljs.core.next(seq__12709_12819__$1);
var G__12836 = null;
var G__12837 = (0);
var G__12838 = (0);
seq__12709_12800 = G__12835;
chunk__12711_12801 = G__12836;
count__12712_12802 = G__12837;
i__12713_12803 = G__12838;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12706_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__12706_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__12743 = cljs.test.get_current_env();
var map__12743__$1 = cljs.core.__destructure_map(map__12743);
var env = map__12743__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12743__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12743__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null, cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null, cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__12745 = arguments.length;
switch (G__12745) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__12747 = arguments.length;
switch (G__12747) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__12761 = shadow.test.env.get_test_ns_info(ns);
var map__12761__$1 = cljs.core.__destructure_map(map__12761);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12761__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__12764 = arguments.length;
switch (G__12764) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12762_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__12762_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__12773 = arguments.length;
switch (G__12773) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12771_SHARP_){
var or__5002__auto__ = (re == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12771_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
