goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20805){
var map__20807 = p__20805;
var map__20807__$1 = cljs.core.__destructure_map(map__20807);
var m = map__20807__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20807__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20807__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20816_21178 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20817_21179 = null;
var count__20818_21180 = (0);
var i__20819_21181 = (0);
while(true){
if((i__20819_21181 < count__20818_21180)){
var f_21182 = chunk__20817_21179.cljs$core$IIndexed$_nth$arity$2(null,i__20819_21181);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21182], 0));


var G__21183 = seq__20816_21178;
var G__21184 = chunk__20817_21179;
var G__21185 = count__20818_21180;
var G__21186 = (i__20819_21181 + (1));
seq__20816_21178 = G__21183;
chunk__20817_21179 = G__21184;
count__20818_21180 = G__21185;
i__20819_21181 = G__21186;
continue;
} else {
var temp__5804__auto___21187 = cljs.core.seq(seq__20816_21178);
if(temp__5804__auto___21187){
var seq__20816_21188__$1 = temp__5804__auto___21187;
if(cljs.core.chunked_seq_QMARK_(seq__20816_21188__$1)){
var c__5525__auto___21190 = cljs.core.chunk_first(seq__20816_21188__$1);
var G__21191 = cljs.core.chunk_rest(seq__20816_21188__$1);
var G__21192 = c__5525__auto___21190;
var G__21193 = cljs.core.count(c__5525__auto___21190);
var G__21194 = (0);
seq__20816_21178 = G__21191;
chunk__20817_21179 = G__21192;
count__20818_21180 = G__21193;
i__20819_21181 = G__21194;
continue;
} else {
var f_21195 = cljs.core.first(seq__20816_21188__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21195], 0));


var G__21196 = cljs.core.next(seq__20816_21188__$1);
var G__21197 = null;
var G__21198 = (0);
var G__21199 = (0);
seq__20816_21178 = G__21196;
chunk__20817_21179 = G__21197;
count__20818_21180 = G__21198;
i__20819_21181 = G__21199;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21200 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21200], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21200)))?cljs.core.second(arglists_21200):arglists_21200)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20832_21209 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20833_21210 = null;
var count__20834_21211 = (0);
var i__20835_21213 = (0);
while(true){
if((i__20835_21213 < count__20834_21211)){
var vec__20855_21214 = chunk__20833_21210.cljs$core$IIndexed$_nth$arity$2(null,i__20835_21213);
var name_21215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20855_21214,(0),null);
var map__20858_21216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20855_21214,(1),null);
var map__20858_21217__$1 = cljs.core.__destructure_map(map__20858_21216);
var doc_21218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20858_21217__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20858_21217__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21215], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21219], 0));

if(cljs.core.truth_(doc_21218)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21218], 0));
} else {
}


var G__21221 = seq__20832_21209;
var G__21222 = chunk__20833_21210;
var G__21223 = count__20834_21211;
var G__21224 = (i__20835_21213 + (1));
seq__20832_21209 = G__21221;
chunk__20833_21210 = G__21222;
count__20834_21211 = G__21223;
i__20835_21213 = G__21224;
continue;
} else {
var temp__5804__auto___21225 = cljs.core.seq(seq__20832_21209);
if(temp__5804__auto___21225){
var seq__20832_21226__$1 = temp__5804__auto___21225;
if(cljs.core.chunked_seq_QMARK_(seq__20832_21226__$1)){
var c__5525__auto___21227 = cljs.core.chunk_first(seq__20832_21226__$1);
var G__21228 = cljs.core.chunk_rest(seq__20832_21226__$1);
var G__21229 = c__5525__auto___21227;
var G__21230 = cljs.core.count(c__5525__auto___21227);
var G__21231 = (0);
seq__20832_21209 = G__21228;
chunk__20833_21210 = G__21229;
count__20834_21211 = G__21230;
i__20835_21213 = G__21231;
continue;
} else {
var vec__20865_21232 = cljs.core.first(seq__20832_21226__$1);
var name_21233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20865_21232,(0),null);
var map__20868_21234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20865_21232,(1),null);
var map__20868_21235__$1 = cljs.core.__destructure_map(map__20868_21234);
var doc_21236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20868_21235__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20868_21235__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21233], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21237], 0));

if(cljs.core.truth_(doc_21236)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21236], 0));
} else {
}


var G__21243 = cljs.core.next(seq__20832_21226__$1);
var G__21244 = null;
var G__21245 = (0);
var G__21246 = (0);
seq__20832_21209 = G__21243;
chunk__20833_21210 = G__21244;
count__20834_21211 = G__21245;
i__20835_21213 = G__21246;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20872 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20873 = null;
var count__20874 = (0);
var i__20875 = (0);
while(true){
if((i__20875 < count__20874)){
var role = chunk__20873.cljs$core$IIndexed$_nth$arity$2(null,i__20875);
var temp__5804__auto___21249__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21249__$1)){
var spec_21251 = temp__5804__auto___21249__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21251)], 0));
} else {
}


var G__21252 = seq__20872;
var G__21253 = chunk__20873;
var G__21254 = count__20874;
var G__21255 = (i__20875 + (1));
seq__20872 = G__21252;
chunk__20873 = G__21253;
count__20874 = G__21254;
i__20875 = G__21255;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20872);
if(temp__5804__auto____$1){
var seq__20872__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20872__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20872__$1);
var G__21257 = cljs.core.chunk_rest(seq__20872__$1);
var G__21258 = c__5525__auto__;
var G__21259 = cljs.core.count(c__5525__auto__);
var G__21260 = (0);
seq__20872 = G__21257;
chunk__20873 = G__21258;
count__20874 = G__21259;
i__20875 = G__21260;
continue;
} else {
var role = cljs.core.first(seq__20872__$1);
var temp__5804__auto___21261__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21261__$2)){
var spec_21262 = temp__5804__auto___21261__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21262)], 0));
} else {
}


var G__21267 = cljs.core.next(seq__20872__$1);
var G__21268 = null;
var G__21269 = (0);
var G__21270 = (0);
seq__20872 = G__21267;
chunk__20873 = G__21268;
count__20874 = G__21269;
i__20875 = G__21270;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20926 = datafied_throwable;
var map__20926__$1 = cljs.core.__destructure_map(map__20926);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20926__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20926__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20926__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20927 = cljs.core.last(via);
var map__20927__$1 = cljs.core.__destructure_map(map__20927);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20927__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20927__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20927__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20928 = data;
var map__20928__$1 = cljs.core.__destructure_map(map__20928);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20928__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20928__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20928__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20930 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20930__$1 = cljs.core.__destructure_map(map__20930);
var top_data = map__20930__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20930__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20942 = phase;
var G__20942__$1 = (((G__20942 instanceof cljs.core.Keyword))?G__20942.fqn:null);
switch (G__20942__$1) {
case "read-source":
var map__20946 = data;
var map__20946__$1 = cljs.core.__destructure_map(map__20946);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20946__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20946__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20949 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20949__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20949,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20949);
var G__20949__$2 = (cljs.core.truth_((function (){var fexpr__20956 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20956.cljs$core$IFn$_invoke$arity$1 ? fexpr__20956.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20956.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20949__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20949__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20949__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20949__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20959 = top_data;
var G__20959__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20959,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20959);
var G__20959__$2 = (cljs.core.truth_((function (){var fexpr__20965 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20965.cljs$core$IFn$_invoke$arity$1 ? fexpr__20965.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20965.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20959__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20959__$1);
var G__20959__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20959__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20959__$2);
var G__20959__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20959__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20959__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20959__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20959__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20969 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20969,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20969,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20969,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20969,(3),null);
var G__20972 = top_data;
var G__20972__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20972,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20972);
var G__20972__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20972__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20972__$1);
var G__20972__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20972__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20972__$2);
var G__20972__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20972__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20972__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20972__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20972__$4;
}

break;
case "execution":
var vec__20979 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20979,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20979,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20979,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20979,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20892_SHARP_){
var or__5002__auto__ = (p1__20892_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__20983 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20983.cljs$core$IFn$_invoke$arity$1 ? fexpr__20983.cljs$core$IFn$_invoke$arity$1(p1__20892_SHARP_) : fexpr__20983.call(null,p1__20892_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__20988 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20988__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20988,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20988);
var G__20988__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20988__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20988__$1);
var G__20988__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20988__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20988__$2);
var G__20988__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20988__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20988__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20988__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20988__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20942__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21017){
var map__21018 = p__21017;
var map__21018__$1 = cljs.core.__destructure_map(map__21018);
var triage_data = map__21018__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21029 = phase;
var G__21029__$1 = (((G__21029 instanceof cljs.core.Keyword))?G__21029.fqn:null);
switch (G__21029__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21056 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21057 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21058 = loc;
var G__21059 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21080_21369 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21081_21370 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21082_21371 = true;
var _STAR_print_fn_STAR__temp_val__21083_21372 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21082_21371);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21083_21372);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21002_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21002_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21081_21370);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21080_21369);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21056,G__21057,G__21058,G__21059) : format.call(null,G__21056,G__21057,G__21058,G__21059));

break;
case "macroexpansion":
var G__21106 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21107 = cause_type;
var G__21108 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21109 = loc;
var G__21110 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21106,G__21107,G__21108,G__21109,G__21110) : format.call(null,G__21106,G__21107,G__21108,G__21109,G__21110));

break;
case "compile-syntax-check":
var G__21116 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21117 = cause_type;
var G__21118 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21119 = loc;
var G__21120 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21116,G__21117,G__21118,G__21119,G__21120) : format.call(null,G__21116,G__21117,G__21118,G__21119,G__21120));

break;
case "compilation":
var G__21127 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21128 = cause_type;
var G__21129 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21130 = loc;
var G__21131 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21127,G__21128,G__21129,G__21130,G__21131) : format.call(null,G__21127,G__21128,G__21129,G__21130,G__21131));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21145 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21146 = symbol;
var G__21147 = loc;
var G__21148 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21150_21421 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21151_21422 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21152_21423 = true;
var _STAR_print_fn_STAR__temp_val__21153_21424 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21152_21423);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21153_21424);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21016_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21016_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21151_21422);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21150_21421);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21145,G__21146,G__21147,G__21148) : format.call(null,G__21145,G__21146,G__21147,G__21148));
} else {
var G__21158 = "Execution error%s at %s(%s).\n%s\n";
var G__21159 = cause_type;
var G__21160 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21161 = loc;
var G__21162 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21158,G__21159,G__21160,G__21161,G__21162) : format.call(null,G__21158,G__21159,G__21160,G__21161,G__21162));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21029__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
