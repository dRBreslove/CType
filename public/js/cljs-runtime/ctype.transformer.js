goog.provide('ctype.transformer');
ctype.transformer.fs = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("fs") : cljs.nodejs.require.call(null,"fs"));
ctype.transformer.path = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("path") : cljs.nodejs.require.call(null,"path"));
ctype.transformer.read_file = (function ctype$transformer$read_file(file_path){
try{var fs_module = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("fs") : cljs.nodejs.require.call(null,"fs"));
return fs_module.readFileSync(file_path,"utf8");
}catch (e12309){var e = e12309;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error reading file:",e.message], 0));

return null;
}});
ctype.transformer.write_file = (function ctype$transformer$write_file(file_path,content){
try{var fs_module = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("fs") : cljs.nodejs.require.call(null,"fs"));
fs_module.writeFileSync(file_path,content,"utf8");

return true;
}catch (e12310){var e = e12310;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error writing file:",e.message], 0));

return false;
}});
ctype.transformer.parse_clojure = (function ctype$transformer$parse_clojure(content){
try{var forms = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),")"].join(''));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"forms","forms",2045992350),forms], null);
}catch (e12311){var e = e12311;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
}});

ctype.transformer.transform_function_to_js = (function ctype$transformer$transform_function_to_js(code){
var pattern = /\(defn\s+(\w+)\s+\[([^\]]*)\]\s+(.*)\)/;
var matches = cljs.core.re_find(pattern,code);
if(cljs.core.truth_(matches)){
var vec__12312 = matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12312,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12312,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12312,(2),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12312,(3),null);
var args_list = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(args),/\s+/);
return ["function ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",args_list),") {\n  return ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12316 = clojure.string.trim(body);
return (ctype.transformer.transform_to_js.cljs$core$IFn$_invoke$arity$1 ? ctype.transformer.transform_to_js.cljs$core$IFn$_invoke$arity$1(G__12316) : ctype.transformer.transform_to_js.call(null,G__12316));
})()),";\n}"].join('');
} else {
return null;
}
});
ctype.transformer.transform_map_to_js = (function ctype$transformer$transform_map_to_js(code){
var pattern = /\{([^\}]*)\}/;
var matches = cljs.core.re_find(pattern,code);
if(cljs.core.truth_(matches)){
var content = cljs.core.second(matches);
var pairs = cljs.core.re_seq(/:(\w+)\s+([^\s]+)/,content);
var js_pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12317){
var vec__12318 = p__12317;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12318,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12318,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12318,(2),null);
return ["    ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),": ",clojure.string.replace(value,/\"/,"")].join('');
}),pairs);
return ["return {\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",\n",js_pairs),"\n  };"].join('');
} else {
return null;
}
});
ctype.transformer.transform_str_to_js = (function ctype$transformer$transform_str_to_js(code){
var pattern = /\(str\s+\"([^\"]*)\"\s+([^\s]+)\s+\"([^\"]*)\"\)/;
var matches = cljs.core.re_find(pattern,code);
if(cljs.core.truth_(matches)){
var vec__12321 = matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12321,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12321,(1),null);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12321,(2),null);
var suffix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12321,(3),null);
return ["`",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"${",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$),"}",cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix),"`"].join('');
} else {
return null;
}
});
ctype.transformer.transform_arithmetic_to_js = (function ctype$transformer$transform_arithmetic_to_js(code){
var pattern = /\(([+\-*\/])\s+([^\s]+)\s+([^\)]+)\)/;
var matches = cljs.core.re_find(pattern,code);
if(cljs.core.truth_(matches)){
var vec__12324 = matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12324,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12324,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12324,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12324,(3),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
} else {
return null;
}
});
ctype.transformer.transform_to_js = (function ctype$transformer$transform_to_js(code){
if(clojure.string.includes_QMARK_(code,"\n\n")){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(ctype.transformer.transform_to_js,clojure.string.split.cljs$core$IFn$_invoke$arity$2(code,/\n\n/)));
} else {
var or__5002__auto__ = ctype.transformer.transform_function_to_js(code);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = ctype.transformer.transform_map_to_js(code);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = ctype.transformer.transform_str_to_js(code);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = ctype.transformer.transform_arithmetic_to_js(code);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
return code;
}
}
}
}
}
});
ctype.transformer.transform_function_to_cljs = (function ctype$transformer$transform_function_to_cljs(code){
var pattern = /function\s+(\w+)\(([^)]*)\)\s*\{\s*return\s+(.*?);\s*\}/;
var matches = cljs.core.re_find(pattern,code);
if(cljs.core.truth_(matches)){
var vec__12327 = matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12327,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12327,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12327,(2),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12327,(3),null);
var args_list = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(args),/,\s*/);
return ["(defn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," [",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args_list),"]\n  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12331 = clojure.string.trim(body);
return (ctype.transformer.transform_to_cljs.cljs$core$IFn$_invoke$arity$1 ? ctype.transformer.transform_to_cljs.cljs$core$IFn$_invoke$arity$1(G__12331) : ctype.transformer.transform_to_cljs.call(null,G__12331));
})()),")"].join('');
} else {
return null;
}
});
ctype.transformer.transform_object_to_cljs = (function ctype$transformer$transform_object_to_cljs(code){
var pattern = /return\s*\{\s*([^}]*)\s*\};/;
var matches = cljs.core.re_find(pattern,code);
if(cljs.core.truth_(matches)){
var content = cljs.core.second(matches);
var pairs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(content,/,\s*/);
var cljs_pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pair){
var vec__12332 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(pair),/:\s*/);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12332,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12332,(1),null);
return [":",clojure.string.trim(key)," ",clojure.string.trim(value)].join('');
}),pairs);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs_pairs),"}"].join('');
} else {
return null;
}
});
ctype.transformer.transform_template_to_cljs = (function ctype$transformer$transform_template_to_cljs(code){
var pattern = /`([^`]*)`/;
var matches = cljs.core.re_find(pattern,code);
if(cljs.core.truth_(matches)){
var content = cljs.core.second(matches);
var parts = cljs.core.re_seq(/\$\{([^}]+)\}|([^${}]+)/,content);
var cljs_parts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12335){
var vec__12336 = p__12335;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12336,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12336,(1),null);
var literal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12336,(2),null);
if(cljs.core.truth_(expr)){
return expr;
} else {
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(literal),"\""].join('');
}
}),parts);
return ["(str ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs_parts),")"].join('');
} else {
return null;
}
});
ctype.transformer.transform_arithmetic_to_cljs = (function ctype$transformer$transform_arithmetic_to_cljs(code){
var pattern = /([^\s]+)\s+([+\-*\/])\s+([^\s]+)/;
var matches = cljs.core.re_find(pattern,code);
if(cljs.core.truth_(matches)){
var vec__12339 = matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12339,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12339,(1),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12339,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12339,(3),null);
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),")"].join('');
} else {
return null;
}
});
ctype.transformer.transform_to_cljs = (function ctype$transformer$transform_to_cljs(code){
if(clojure.string.includes_QMARK_(code,"\n\n")){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(ctype.transformer.transform_to_cljs,clojure.string.split.cljs$core$IFn$_invoke$arity$2(code,/\n\n/)));
} else {
var or__5002__auto__ = ctype.transformer.transform_function_to_cljs(code);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = ctype.transformer.transform_object_to_cljs(code);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = ctype.transformer.transform_template_to_cljs(code);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = ctype.transformer.transform_arithmetic_to_cljs(code);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
return code;
}
}
}
}
}
});
/**
 * Transform code between ClojureScript and JavaScript
 */
ctype.transformer.transform = (function ctype$transformer$transform(code,direction){
var G__12342 = direction;
switch (G__12342) {
case "to-js":
return ctype.transformer.transform_to_js(code);

break;
case "to-cljs":
return ctype.transformer.transform_to_cljs(code);

break;
default:
return code;

}
});
ctype.transformer.transform_to_typescript = (function ctype$transformer$transform_to_typescript(forms){
var ts_code = clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)),/\(|\)/,"");
var ts_code__$1 = clojure.string.replace(ts_code,/defn/,"function");
var ts_code__$2 = clojure.string.replace(ts_code__$1,/def/,"const");
return ts_code__$2;
});
ctype.transformer.transform_code = (function ctype$transformer$transform_code(input_path,output_path,target_format){
var content = ctype.transformer.read_file(input_path);
var parsed = ctype.transformer.parse_clojure(content);
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(parsed))){
var transformed = (function (){var G__12343 = target_format;
var G__12343__$1 = (((G__12343 instanceof cljs.core.Keyword))?G__12343.fqn:null);
switch (G__12343__$1) {
case "js":
return ctype.transformer.transform_to_js(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parsed));

break;
case "ts":
return ctype.transformer.transform_to_typescript(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parsed));

break;
default:
throw (new Error("Unsupported target format"));

}
})();
return ctype.transformer.write_file(output_path,transformed);
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing code:",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(parsed)], 0));
}
});
ctype.transformer._main = (function ctype$transformer$_main(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12347 = arguments.length;
var i__5727__auto___12348 = (0);
while(true){
if((i__5727__auto___12348 < len__5726__auto___12347)){
args__5732__auto__.push((arguments[i__5727__auto___12348]));

var G__12349 = (i__5727__auto___12348 + (1));
i__5727__auto___12348 = G__12349;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return ctype.transformer._main.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});
goog.exportSymbol('ctype.transformer._main', ctype.transformer._main);

(ctype.transformer._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CType Transformer initialized!"], 0));
}));

(ctype.transformer._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ctype.transformer._main.cljs$lang$applyTo = (function (seq12344){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12344));
}));

(cljs.core._STAR_main_cli_fn_STAR_ = ctype.transformer._main);
ctype.transformer.transform = ctype.transformer.transform;
goog.exportSymbol('ctype.transformer.transform', ctype.transformer.transform);

//# sourceMappingURL=ctype.transformer.js.map
