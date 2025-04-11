goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22962 = arguments.length;
var i__5727__auto___22963 = (0);
while(true){
if((i__5727__auto___22963 < len__5726__auto___22962)){
args__5732__auto__.push((arguments[i__5727__auto___22963]));

var G__22964 = (i__5727__auto___22963 + (1));
i__5727__auto___22963 = G__22964;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22555){
var G__22556 = cljs.core.first(seq22555);
var seq22555__$1 = cljs.core.next(seq22555);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22556,seq22555__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22558 = cljs.core.seq(sources);
var chunk__22559 = null;
var count__22560 = (0);
var i__22561 = (0);
while(true){
if((i__22561 < count__22560)){
var map__22566 = chunk__22559.cljs$core$IIndexed$_nth$arity$2(null,i__22561);
var map__22566__$1 = cljs.core.__destructure_map(map__22566);
var src = map__22566__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22566__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22566__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22566__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22566__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22567){var e_22965 = e22567;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22965);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22965.message)].join('')));
}

var G__22966 = seq__22558;
var G__22967 = chunk__22559;
var G__22968 = count__22560;
var G__22969 = (i__22561 + (1));
seq__22558 = G__22966;
chunk__22559 = G__22967;
count__22560 = G__22968;
i__22561 = G__22969;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22558);
if(temp__5804__auto__){
var seq__22558__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22558__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22558__$1);
var G__22970 = cljs.core.chunk_rest(seq__22558__$1);
var G__22971 = c__5525__auto__;
var G__22972 = cljs.core.count(c__5525__auto__);
var G__22973 = (0);
seq__22558 = G__22970;
chunk__22559 = G__22971;
count__22560 = G__22972;
i__22561 = G__22973;
continue;
} else {
var map__22571 = cljs.core.first(seq__22558__$1);
var map__22571__$1 = cljs.core.__destructure_map(map__22571);
var src = map__22571__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22575){var e_22974 = e22575;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22974);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22974.message)].join('')));
}

var G__22975 = cljs.core.next(seq__22558__$1);
var G__22976 = null;
var G__22977 = (0);
var G__22978 = (0);
seq__22558 = G__22975;
chunk__22559 = G__22976;
count__22560 = G__22977;
i__22561 = G__22978;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22577 = cljs.core.seq(js_requires);
var chunk__22578 = null;
var count__22579 = (0);
var i__22580 = (0);
while(true){
if((i__22580 < count__22579)){
var js_ns = chunk__22578.cljs$core$IIndexed$_nth$arity$2(null,i__22580);
var require_str_22979 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22979);


var G__22980 = seq__22577;
var G__22981 = chunk__22578;
var G__22982 = count__22579;
var G__22983 = (i__22580 + (1));
seq__22577 = G__22980;
chunk__22578 = G__22981;
count__22579 = G__22982;
i__22580 = G__22983;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22577);
if(temp__5804__auto__){
var seq__22577__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22577__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22577__$1);
var G__22984 = cljs.core.chunk_rest(seq__22577__$1);
var G__22985 = c__5525__auto__;
var G__22986 = cljs.core.count(c__5525__auto__);
var G__22987 = (0);
seq__22577 = G__22984;
chunk__22578 = G__22985;
count__22579 = G__22986;
i__22580 = G__22987;
continue;
} else {
var js_ns = cljs.core.first(seq__22577__$1);
var require_str_22988 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22988);


var G__22989 = cljs.core.next(seq__22577__$1);
var G__22990 = null;
var G__22991 = (0);
var G__22992 = (0);
seq__22577 = G__22989;
chunk__22578 = G__22990;
count__22579 = G__22991;
i__22580 = G__22992;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22584){
var map__22585 = p__22584;
var map__22585__$1 = cljs.core.__destructure_map(map__22585);
var msg = map__22585__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22585__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22585__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22586(s__22587){
return (new cljs.core.LazySeq(null,(function (){
var s__22587__$1 = s__22587;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22587__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22592 = cljs.core.first(xs__6360__auto__);
var map__22592__$1 = cljs.core.__destructure_map(map__22592);
var src = map__22592__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22592__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22592__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__22587__$1,map__22592,map__22592__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22585,map__22585__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22586_$_iter__22588(s__22589){
return (new cljs.core.LazySeq(null,((function (s__22587__$1,map__22592,map__22592__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22585,map__22585__$1,msg,info,reload_info){
return (function (){
var s__22589__$1 = s__22589;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22589__$1);
if(temp__5804__auto____$1){
var s__22589__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22589__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22589__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22591 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22590 = (0);
while(true){
if((i__22590 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__22590);
cljs.core.chunk_append(b__22591,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22993 = (i__22590 + (1));
i__22590 = G__22993;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22591),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22586_$_iter__22588(cljs.core.chunk_rest(s__22589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22591),null);
}
} else {
var warning = cljs.core.first(s__22589__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22586_$_iter__22588(cljs.core.rest(s__22589__$2)));
}
} else {
return null;
}
break;
}
});})(s__22587__$1,map__22592,map__22592__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22585,map__22585__$1,msg,info,reload_info))
,null,null));
});})(s__22587__$1,map__22592,map__22592__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22585,map__22585__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22586(cljs.core.rest(s__22587__$1)));
} else {
var G__22994 = cljs.core.rest(s__22587__$1);
s__22587__$1 = G__22994;
continue;
}
} else {
var G__22995 = cljs.core.rest(s__22587__$1);
s__22587__$1 = G__22995;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22593_22996 = cljs.core.seq(warnings);
var chunk__22594_22997 = null;
var count__22595_22998 = (0);
var i__22596_22999 = (0);
while(true){
if((i__22596_22999 < count__22595_22998)){
var map__22599_23000 = chunk__22594_22997.cljs$core$IIndexed$_nth$arity$2(null,i__22596_22999);
var map__22599_23001__$1 = cljs.core.__destructure_map(map__22599_23000);
var w_23002 = map__22599_23001__$1;
var msg_23003__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22599_23001__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22599_23001__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22599_23001__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22599_23001__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23006)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23004),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23005),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23003__$1)].join(''));


var G__23007 = seq__22593_22996;
var G__23008 = chunk__22594_22997;
var G__23009 = count__22595_22998;
var G__23010 = (i__22596_22999 + (1));
seq__22593_22996 = G__23007;
chunk__22594_22997 = G__23008;
count__22595_22998 = G__23009;
i__22596_22999 = G__23010;
continue;
} else {
var temp__5804__auto___23011 = cljs.core.seq(seq__22593_22996);
if(temp__5804__auto___23011){
var seq__22593_23012__$1 = temp__5804__auto___23011;
if(cljs.core.chunked_seq_QMARK_(seq__22593_23012__$1)){
var c__5525__auto___23013 = cljs.core.chunk_first(seq__22593_23012__$1);
var G__23014 = cljs.core.chunk_rest(seq__22593_23012__$1);
var G__23015 = c__5525__auto___23013;
var G__23016 = cljs.core.count(c__5525__auto___23013);
var G__23017 = (0);
seq__22593_22996 = G__23014;
chunk__22594_22997 = G__23015;
count__22595_22998 = G__23016;
i__22596_22999 = G__23017;
continue;
} else {
var map__22600_23018 = cljs.core.first(seq__22593_23012__$1);
var map__22600_23019__$1 = cljs.core.__destructure_map(map__22600_23018);
var w_23020 = map__22600_23019__$1;
var msg_23021__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22600_23019__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22600_23019__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22600_23019__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22600_23019__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23024)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23022),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23023),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23021__$1)].join(''));


var G__23025 = cljs.core.next(seq__22593_23012__$1);
var G__23026 = null;
var G__23027 = (0);
var G__23028 = (0);
seq__22593_22996 = G__23025;
chunk__22594_22997 = G__23026;
count__22595_22998 = G__23027;
i__22596_22999 = G__23028;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22583_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22583_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__22602 = node_uri;
G__22602.setQuery(null);

G__22602.setPath(new$);

return G__22602;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22603){
var map__22604 = p__22603;
var map__22604__$1 = cljs.core.__destructure_map(map__22604);
var msg = map__22604__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22604__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22604__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22605 = cljs.core.seq(updates);
var chunk__22607 = null;
var count__22608 = (0);
var i__22609 = (0);
while(true){
if((i__22609 < count__22608)){
var path = chunk__22607.cljs$core$IIndexed$_nth$arity$2(null,i__22609);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22746_23030 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22750_23031 = null;
var count__22751_23032 = (0);
var i__22752_23033 = (0);
while(true){
if((i__22752_23033 < count__22751_23032)){
var node_23034 = chunk__22750_23031.cljs$core$IIndexed$_nth$arity$2(null,i__22752_23033);
if(cljs.core.not(node_23034.shadow$old)){
var path_match_23035 = shadow.cljs.devtools.client.browser.match_paths(node_23034.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23035)){
var new_link_23036 = (function (){var G__22796 = node_23034.cloneNode(true);
G__22796.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23035),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22796;
})();
(node_23034.shadow$old = true);

(new_link_23036.onload = ((function (seq__22746_23030,chunk__22750_23031,count__22751_23032,i__22752_23033,seq__22605,chunk__22607,count__22608,i__22609,new_link_23036,path_match_23035,node_23034,path,map__22604,map__22604__$1,msg,updates,reload_info){
return (function (e){
var seq__22797_23037 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22799_23038 = null;
var count__22800_23039 = (0);
var i__22801_23040 = (0);
while(true){
if((i__22801_23040 < count__22800_23039)){
var map__22805_23041 = chunk__22799_23038.cljs$core$IIndexed$_nth$arity$2(null,i__22801_23040);
var map__22805_23042__$1 = cljs.core.__destructure_map(map__22805_23041);
var task_23043 = map__22805_23042__$1;
var fn_str_23044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22805_23042__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22805_23042__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23046 = goog.getObjectByName(fn_str_23044,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23045)].join(''));

(fn_obj_23046.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23046.cljs$core$IFn$_invoke$arity$2(path,new_link_23036) : fn_obj_23046.call(null,path,new_link_23036));


var G__23047 = seq__22797_23037;
var G__23048 = chunk__22799_23038;
var G__23049 = count__22800_23039;
var G__23050 = (i__22801_23040 + (1));
seq__22797_23037 = G__23047;
chunk__22799_23038 = G__23048;
count__22800_23039 = G__23049;
i__22801_23040 = G__23050;
continue;
} else {
var temp__5804__auto___23051 = cljs.core.seq(seq__22797_23037);
if(temp__5804__auto___23051){
var seq__22797_23052__$1 = temp__5804__auto___23051;
if(cljs.core.chunked_seq_QMARK_(seq__22797_23052__$1)){
var c__5525__auto___23053 = cljs.core.chunk_first(seq__22797_23052__$1);
var G__23054 = cljs.core.chunk_rest(seq__22797_23052__$1);
var G__23055 = c__5525__auto___23053;
var G__23056 = cljs.core.count(c__5525__auto___23053);
var G__23057 = (0);
seq__22797_23037 = G__23054;
chunk__22799_23038 = G__23055;
count__22800_23039 = G__23056;
i__22801_23040 = G__23057;
continue;
} else {
var map__22806_23058 = cljs.core.first(seq__22797_23052__$1);
var map__22806_23059__$1 = cljs.core.__destructure_map(map__22806_23058);
var task_23060 = map__22806_23059__$1;
var fn_str_23061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22806_23059__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22806_23059__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23063 = goog.getObjectByName(fn_str_23061,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23062)].join(''));

(fn_obj_23063.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23063.cljs$core$IFn$_invoke$arity$2(path,new_link_23036) : fn_obj_23063.call(null,path,new_link_23036));


var G__23064 = cljs.core.next(seq__22797_23052__$1);
var G__23065 = null;
var G__23066 = (0);
var G__23067 = (0);
seq__22797_23037 = G__23064;
chunk__22799_23038 = G__23065;
count__22800_23039 = G__23066;
i__22801_23040 = G__23067;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23034);
});})(seq__22746_23030,chunk__22750_23031,count__22751_23032,i__22752_23033,seq__22605,chunk__22607,count__22608,i__22609,new_link_23036,path_match_23035,node_23034,path,map__22604,map__22604__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23035], 0));

goog.dom.insertSiblingAfter(new_link_23036,node_23034);


var G__23068 = seq__22746_23030;
var G__23069 = chunk__22750_23031;
var G__23070 = count__22751_23032;
var G__23071 = (i__22752_23033 + (1));
seq__22746_23030 = G__23068;
chunk__22750_23031 = G__23069;
count__22751_23032 = G__23070;
i__22752_23033 = G__23071;
continue;
} else {
var G__23072 = seq__22746_23030;
var G__23073 = chunk__22750_23031;
var G__23074 = count__22751_23032;
var G__23075 = (i__22752_23033 + (1));
seq__22746_23030 = G__23072;
chunk__22750_23031 = G__23073;
count__22751_23032 = G__23074;
i__22752_23033 = G__23075;
continue;
}
} else {
var G__23076 = seq__22746_23030;
var G__23077 = chunk__22750_23031;
var G__23078 = count__22751_23032;
var G__23079 = (i__22752_23033 + (1));
seq__22746_23030 = G__23076;
chunk__22750_23031 = G__23077;
count__22751_23032 = G__23078;
i__22752_23033 = G__23079;
continue;
}
} else {
var temp__5804__auto___23080 = cljs.core.seq(seq__22746_23030);
if(temp__5804__auto___23080){
var seq__22746_23081__$1 = temp__5804__auto___23080;
if(cljs.core.chunked_seq_QMARK_(seq__22746_23081__$1)){
var c__5525__auto___23082 = cljs.core.chunk_first(seq__22746_23081__$1);
var G__23083 = cljs.core.chunk_rest(seq__22746_23081__$1);
var G__23084 = c__5525__auto___23082;
var G__23085 = cljs.core.count(c__5525__auto___23082);
var G__23086 = (0);
seq__22746_23030 = G__23083;
chunk__22750_23031 = G__23084;
count__22751_23032 = G__23085;
i__22752_23033 = G__23086;
continue;
} else {
var node_23087 = cljs.core.first(seq__22746_23081__$1);
if(cljs.core.not(node_23087.shadow$old)){
var path_match_23088 = shadow.cljs.devtools.client.browser.match_paths(node_23087.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23088)){
var new_link_23089 = (function (){var G__22807 = node_23087.cloneNode(true);
G__22807.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23088),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22807;
})();
(node_23087.shadow$old = true);

(new_link_23089.onload = ((function (seq__22746_23030,chunk__22750_23031,count__22751_23032,i__22752_23033,seq__22605,chunk__22607,count__22608,i__22609,new_link_23089,path_match_23088,node_23087,seq__22746_23081__$1,temp__5804__auto___23080,path,map__22604,map__22604__$1,msg,updates,reload_info){
return (function (e){
var seq__22808_23090 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22810_23091 = null;
var count__22811_23092 = (0);
var i__22812_23093 = (0);
while(true){
if((i__22812_23093 < count__22811_23092)){
var map__22816_23094 = chunk__22810_23091.cljs$core$IIndexed$_nth$arity$2(null,i__22812_23093);
var map__22816_23095__$1 = cljs.core.__destructure_map(map__22816_23094);
var task_23096 = map__22816_23095__$1;
var fn_str_23097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22816_23095__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22816_23095__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23099 = goog.getObjectByName(fn_str_23097,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23098)].join(''));

(fn_obj_23099.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23099.cljs$core$IFn$_invoke$arity$2(path,new_link_23089) : fn_obj_23099.call(null,path,new_link_23089));


var G__23100 = seq__22808_23090;
var G__23101 = chunk__22810_23091;
var G__23102 = count__22811_23092;
var G__23103 = (i__22812_23093 + (1));
seq__22808_23090 = G__23100;
chunk__22810_23091 = G__23101;
count__22811_23092 = G__23102;
i__22812_23093 = G__23103;
continue;
} else {
var temp__5804__auto___23104__$1 = cljs.core.seq(seq__22808_23090);
if(temp__5804__auto___23104__$1){
var seq__22808_23105__$1 = temp__5804__auto___23104__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22808_23105__$1)){
var c__5525__auto___23106 = cljs.core.chunk_first(seq__22808_23105__$1);
var G__23107 = cljs.core.chunk_rest(seq__22808_23105__$1);
var G__23108 = c__5525__auto___23106;
var G__23109 = cljs.core.count(c__5525__auto___23106);
var G__23110 = (0);
seq__22808_23090 = G__23107;
chunk__22810_23091 = G__23108;
count__22811_23092 = G__23109;
i__22812_23093 = G__23110;
continue;
} else {
var map__22819_23111 = cljs.core.first(seq__22808_23105__$1);
var map__22819_23112__$1 = cljs.core.__destructure_map(map__22819_23111);
var task_23113 = map__22819_23112__$1;
var fn_str_23114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22819_23112__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22819_23112__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23116 = goog.getObjectByName(fn_str_23114,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23115)].join(''));

(fn_obj_23116.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23116.cljs$core$IFn$_invoke$arity$2(path,new_link_23089) : fn_obj_23116.call(null,path,new_link_23089));


var G__23118 = cljs.core.next(seq__22808_23105__$1);
var G__23119 = null;
var G__23120 = (0);
var G__23121 = (0);
seq__22808_23090 = G__23118;
chunk__22810_23091 = G__23119;
count__22811_23092 = G__23120;
i__22812_23093 = G__23121;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23087);
});})(seq__22746_23030,chunk__22750_23031,count__22751_23032,i__22752_23033,seq__22605,chunk__22607,count__22608,i__22609,new_link_23089,path_match_23088,node_23087,seq__22746_23081__$1,temp__5804__auto___23080,path,map__22604,map__22604__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23088], 0));

goog.dom.insertSiblingAfter(new_link_23089,node_23087);


var G__23123 = cljs.core.next(seq__22746_23081__$1);
var G__23124 = null;
var G__23125 = (0);
var G__23126 = (0);
seq__22746_23030 = G__23123;
chunk__22750_23031 = G__23124;
count__22751_23032 = G__23125;
i__22752_23033 = G__23126;
continue;
} else {
var G__23128 = cljs.core.next(seq__22746_23081__$1);
var G__23129 = null;
var G__23130 = (0);
var G__23131 = (0);
seq__22746_23030 = G__23128;
chunk__22750_23031 = G__23129;
count__22751_23032 = G__23130;
i__22752_23033 = G__23131;
continue;
}
} else {
var G__23132 = cljs.core.next(seq__22746_23081__$1);
var G__23133 = null;
var G__23134 = (0);
var G__23135 = (0);
seq__22746_23030 = G__23132;
chunk__22750_23031 = G__23133;
count__22751_23032 = G__23134;
i__22752_23033 = G__23135;
continue;
}
}
} else {
}
}
break;
}


var G__23136 = seq__22605;
var G__23137 = chunk__22607;
var G__23138 = count__22608;
var G__23139 = (i__22609 + (1));
seq__22605 = G__23136;
chunk__22607 = G__23137;
count__22608 = G__23138;
i__22609 = G__23139;
continue;
} else {
var G__23140 = seq__22605;
var G__23141 = chunk__22607;
var G__23142 = count__22608;
var G__23143 = (i__22609 + (1));
seq__22605 = G__23140;
chunk__22607 = G__23141;
count__22608 = G__23142;
i__22609 = G__23143;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22605);
if(temp__5804__auto__){
var seq__22605__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22605__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22605__$1);
var G__23144 = cljs.core.chunk_rest(seq__22605__$1);
var G__23145 = c__5525__auto__;
var G__23146 = cljs.core.count(c__5525__auto__);
var G__23147 = (0);
seq__22605 = G__23144;
chunk__22607 = G__23145;
count__22608 = G__23146;
i__22609 = G__23147;
continue;
} else {
var path = cljs.core.first(seq__22605__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22824_23148 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22828_23149 = null;
var count__22829_23150 = (0);
var i__22830_23151 = (0);
while(true){
if((i__22830_23151 < count__22829_23150)){
var node_23152 = chunk__22828_23149.cljs$core$IIndexed$_nth$arity$2(null,i__22830_23151);
if(cljs.core.not(node_23152.shadow$old)){
var path_match_23153 = shadow.cljs.devtools.client.browser.match_paths(node_23152.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23153)){
var new_link_23154 = (function (){var G__22886 = node_23152.cloneNode(true);
G__22886.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23153),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22886;
})();
(node_23152.shadow$old = true);

(new_link_23154.onload = ((function (seq__22824_23148,chunk__22828_23149,count__22829_23150,i__22830_23151,seq__22605,chunk__22607,count__22608,i__22609,new_link_23154,path_match_23153,node_23152,path,seq__22605__$1,temp__5804__auto__,map__22604,map__22604__$1,msg,updates,reload_info){
return (function (e){
var seq__22888_23155 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22890_23156 = null;
var count__22891_23157 = (0);
var i__22892_23158 = (0);
while(true){
if((i__22892_23158 < count__22891_23157)){
var map__22906_23159 = chunk__22890_23156.cljs$core$IIndexed$_nth$arity$2(null,i__22892_23158);
var map__22906_23160__$1 = cljs.core.__destructure_map(map__22906_23159);
var task_23161 = map__22906_23160__$1;
var fn_str_23162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22906_23160__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22906_23160__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23165 = goog.getObjectByName(fn_str_23162,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23163)].join(''));

(fn_obj_23165.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23165.cljs$core$IFn$_invoke$arity$2(path,new_link_23154) : fn_obj_23165.call(null,path,new_link_23154));


var G__23167 = seq__22888_23155;
var G__23168 = chunk__22890_23156;
var G__23169 = count__22891_23157;
var G__23170 = (i__22892_23158 + (1));
seq__22888_23155 = G__23167;
chunk__22890_23156 = G__23168;
count__22891_23157 = G__23169;
i__22892_23158 = G__23170;
continue;
} else {
var temp__5804__auto___23171__$1 = cljs.core.seq(seq__22888_23155);
if(temp__5804__auto___23171__$1){
var seq__22888_23172__$1 = temp__5804__auto___23171__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22888_23172__$1)){
var c__5525__auto___23173 = cljs.core.chunk_first(seq__22888_23172__$1);
var G__23174 = cljs.core.chunk_rest(seq__22888_23172__$1);
var G__23175 = c__5525__auto___23173;
var G__23176 = cljs.core.count(c__5525__auto___23173);
var G__23177 = (0);
seq__22888_23155 = G__23174;
chunk__22890_23156 = G__23175;
count__22891_23157 = G__23176;
i__22892_23158 = G__23177;
continue;
} else {
var map__22908_23178 = cljs.core.first(seq__22888_23172__$1);
var map__22908_23179__$1 = cljs.core.__destructure_map(map__22908_23178);
var task_23180 = map__22908_23179__$1;
var fn_str_23181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22908_23179__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22908_23179__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23183 = goog.getObjectByName(fn_str_23181,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23182)].join(''));

(fn_obj_23183.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23183.cljs$core$IFn$_invoke$arity$2(path,new_link_23154) : fn_obj_23183.call(null,path,new_link_23154));


var G__23184 = cljs.core.next(seq__22888_23172__$1);
var G__23185 = null;
var G__23186 = (0);
var G__23187 = (0);
seq__22888_23155 = G__23184;
chunk__22890_23156 = G__23185;
count__22891_23157 = G__23186;
i__22892_23158 = G__23187;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23152);
});})(seq__22824_23148,chunk__22828_23149,count__22829_23150,i__22830_23151,seq__22605,chunk__22607,count__22608,i__22609,new_link_23154,path_match_23153,node_23152,path,seq__22605__$1,temp__5804__auto__,map__22604,map__22604__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23153], 0));

goog.dom.insertSiblingAfter(new_link_23154,node_23152);


var G__23188 = seq__22824_23148;
var G__23189 = chunk__22828_23149;
var G__23190 = count__22829_23150;
var G__23191 = (i__22830_23151 + (1));
seq__22824_23148 = G__23188;
chunk__22828_23149 = G__23189;
count__22829_23150 = G__23190;
i__22830_23151 = G__23191;
continue;
} else {
var G__23192 = seq__22824_23148;
var G__23193 = chunk__22828_23149;
var G__23194 = count__22829_23150;
var G__23195 = (i__22830_23151 + (1));
seq__22824_23148 = G__23192;
chunk__22828_23149 = G__23193;
count__22829_23150 = G__23194;
i__22830_23151 = G__23195;
continue;
}
} else {
var G__23196 = seq__22824_23148;
var G__23197 = chunk__22828_23149;
var G__23198 = count__22829_23150;
var G__23199 = (i__22830_23151 + (1));
seq__22824_23148 = G__23196;
chunk__22828_23149 = G__23197;
count__22829_23150 = G__23198;
i__22830_23151 = G__23199;
continue;
}
} else {
var temp__5804__auto___23200__$1 = cljs.core.seq(seq__22824_23148);
if(temp__5804__auto___23200__$1){
var seq__22824_23201__$1 = temp__5804__auto___23200__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22824_23201__$1)){
var c__5525__auto___23202 = cljs.core.chunk_first(seq__22824_23201__$1);
var G__23203 = cljs.core.chunk_rest(seq__22824_23201__$1);
var G__23204 = c__5525__auto___23202;
var G__23205 = cljs.core.count(c__5525__auto___23202);
var G__23206 = (0);
seq__22824_23148 = G__23203;
chunk__22828_23149 = G__23204;
count__22829_23150 = G__23205;
i__22830_23151 = G__23206;
continue;
} else {
var node_23207 = cljs.core.first(seq__22824_23201__$1);
if(cljs.core.not(node_23207.shadow$old)){
var path_match_23208 = shadow.cljs.devtools.client.browser.match_paths(node_23207.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23208)){
var new_link_23209 = (function (){var G__22909 = node_23207.cloneNode(true);
G__22909.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23208),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22909;
})();
(node_23207.shadow$old = true);

(new_link_23209.onload = ((function (seq__22824_23148,chunk__22828_23149,count__22829_23150,i__22830_23151,seq__22605,chunk__22607,count__22608,i__22609,new_link_23209,path_match_23208,node_23207,seq__22824_23201__$1,temp__5804__auto___23200__$1,path,seq__22605__$1,temp__5804__auto__,map__22604,map__22604__$1,msg,updates,reload_info){
return (function (e){
var seq__22910_23210 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22912_23211 = null;
var count__22913_23212 = (0);
var i__22914_23213 = (0);
while(true){
if((i__22914_23213 < count__22913_23212)){
var map__22918_23214 = chunk__22912_23211.cljs$core$IIndexed$_nth$arity$2(null,i__22914_23213);
var map__22918_23215__$1 = cljs.core.__destructure_map(map__22918_23214);
var task_23216 = map__22918_23215__$1;
var fn_str_23217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918_23215__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918_23215__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23219 = goog.getObjectByName(fn_str_23217,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23218)].join(''));

(fn_obj_23219.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23219.cljs$core$IFn$_invoke$arity$2(path,new_link_23209) : fn_obj_23219.call(null,path,new_link_23209));


var G__23220 = seq__22910_23210;
var G__23221 = chunk__22912_23211;
var G__23222 = count__22913_23212;
var G__23223 = (i__22914_23213 + (1));
seq__22910_23210 = G__23220;
chunk__22912_23211 = G__23221;
count__22913_23212 = G__23222;
i__22914_23213 = G__23223;
continue;
} else {
var temp__5804__auto___23224__$2 = cljs.core.seq(seq__22910_23210);
if(temp__5804__auto___23224__$2){
var seq__22910_23226__$1 = temp__5804__auto___23224__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22910_23226__$1)){
var c__5525__auto___23227 = cljs.core.chunk_first(seq__22910_23226__$1);
var G__23228 = cljs.core.chunk_rest(seq__22910_23226__$1);
var G__23230 = c__5525__auto___23227;
var G__23231 = cljs.core.count(c__5525__auto___23227);
var G__23232 = (0);
seq__22910_23210 = G__23228;
chunk__22912_23211 = G__23230;
count__22913_23212 = G__23231;
i__22914_23213 = G__23232;
continue;
} else {
var map__22921_23235 = cljs.core.first(seq__22910_23226__$1);
var map__22921_23236__$1 = cljs.core.__destructure_map(map__22921_23235);
var task_23237 = map__22921_23236__$1;
var fn_str_23238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22921_23236__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22921_23236__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23240 = goog.getObjectByName(fn_str_23238,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23239)].join(''));

(fn_obj_23240.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23240.cljs$core$IFn$_invoke$arity$2(path,new_link_23209) : fn_obj_23240.call(null,path,new_link_23209));


var G__23241 = cljs.core.next(seq__22910_23226__$1);
var G__23242 = null;
var G__23243 = (0);
var G__23244 = (0);
seq__22910_23210 = G__23241;
chunk__22912_23211 = G__23242;
count__22913_23212 = G__23243;
i__22914_23213 = G__23244;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23207);
});})(seq__22824_23148,chunk__22828_23149,count__22829_23150,i__22830_23151,seq__22605,chunk__22607,count__22608,i__22609,new_link_23209,path_match_23208,node_23207,seq__22824_23201__$1,temp__5804__auto___23200__$1,path,seq__22605__$1,temp__5804__auto__,map__22604,map__22604__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23208], 0));

goog.dom.insertSiblingAfter(new_link_23209,node_23207);


var G__23245 = cljs.core.next(seq__22824_23201__$1);
var G__23246 = null;
var G__23247 = (0);
var G__23248 = (0);
seq__22824_23148 = G__23245;
chunk__22828_23149 = G__23246;
count__22829_23150 = G__23247;
i__22830_23151 = G__23248;
continue;
} else {
var G__23249 = cljs.core.next(seq__22824_23201__$1);
var G__23250 = null;
var G__23251 = (0);
var G__23252 = (0);
seq__22824_23148 = G__23249;
chunk__22828_23149 = G__23250;
count__22829_23150 = G__23251;
i__22830_23151 = G__23252;
continue;
}
} else {
var G__23253 = cljs.core.next(seq__22824_23201__$1);
var G__23254 = null;
var G__23255 = (0);
var G__23256 = (0);
seq__22824_23148 = G__23253;
chunk__22828_23149 = G__23254;
count__22829_23150 = G__23255;
i__22830_23151 = G__23256;
continue;
}
}
} else {
}
}
break;
}


var G__23257 = cljs.core.next(seq__22605__$1);
var G__23258 = null;
var G__23259 = (0);
var G__23260 = (0);
seq__22605 = G__23257;
chunk__22607 = G__23258;
count__22608 = G__23259;
i__22609 = G__23260;
continue;
} else {
var G__23261 = cljs.core.next(seq__22605__$1);
var G__23262 = null;
var G__23263 = (0);
var G__23264 = (0);
seq__22605 = G__23261;
chunk__22607 = G__23262;
count__22608 = G__23263;
i__22609 = G__23264;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__22929 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__22929) : success.call(null,G__22929));
}catch (e22926){var e = e22926;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__22930,success,fail){
var map__22931 = p__22930;
var map__22931__$1 = cljs.core.__destructure_map(map__22931);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22931__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__22933 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__22933) : success.call(null,G__22933));
}catch (e22932){var e = e22932;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22934,done,error){
var map__22935 = p__22934;
var map__22935__$1 = cljs.core.__destructure_map(map__22935);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22935__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22937,done,error){
var map__22939 = p__22937;
var map__22939__$1 = cljs.core.__destructure_map(map__22939);
var msg = map__22939__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22939__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22939__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22939__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22944){
var map__22945 = p__22944;
var map__22945__$1 = cljs.core.__destructure_map(map__22945);
var src = map__22945__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22945__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22946 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22946) : done.call(null,G__22946));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22947){
var map__22948 = p__22947;
var map__22948__$1 = cljs.core.__destructure_map(map__22948);
var msg__$1 = map__22948__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22949){var ex = e22949;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22950){
var map__22951 = p__22950;
var map__22951__$1 = cljs.core.__destructure_map(map__22951);
var env = map__22951__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22956){
var map__22957 = p__22956;
var map__22957__$1 = cljs.core.__destructure_map(map__22957);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22957__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22957__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22960){
var map__22961 = p__22960;
var map__22961__$1 = cljs.core.__destructure_map(map__22961);
var svc = map__22961__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22961__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
