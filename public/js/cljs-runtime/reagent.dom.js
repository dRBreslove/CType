goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__23535 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__23536 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__23536);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__23537 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__23538 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__23538);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__23537);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__23535);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__23540 = arguments.length;
switch (G__23540) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__23541 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23541,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23541,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__23547_23567 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__23548_23568 = null;
var count__23549_23569 = (0);
var i__23550_23570 = (0);
while(true){
if((i__23550_23570 < count__23549_23569)){
var vec__23558_23571 = chunk__23548_23568.cljs$core$IIndexed$_nth$arity$2(null,i__23550_23570);
var container_23572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23558_23571,(0),null);
var comp_23573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23558_23571,(1),null);
reagent.dom.re_render_component(comp_23573,container_23572);


var G__23574 = seq__23547_23567;
var G__23575 = chunk__23548_23568;
var G__23576 = count__23549_23569;
var G__23577 = (i__23550_23570 + (1));
seq__23547_23567 = G__23574;
chunk__23548_23568 = G__23575;
count__23549_23569 = G__23576;
i__23550_23570 = G__23577;
continue;
} else {
var temp__5804__auto___23578 = cljs.core.seq(seq__23547_23567);
if(temp__5804__auto___23578){
var seq__23547_23579__$1 = temp__5804__auto___23578;
if(cljs.core.chunked_seq_QMARK_(seq__23547_23579__$1)){
var c__5525__auto___23580 = cljs.core.chunk_first(seq__23547_23579__$1);
var G__23581 = cljs.core.chunk_rest(seq__23547_23579__$1);
var G__23582 = c__5525__auto___23580;
var G__23583 = cljs.core.count(c__5525__auto___23580);
var G__23584 = (0);
seq__23547_23567 = G__23581;
chunk__23548_23568 = G__23582;
count__23549_23569 = G__23583;
i__23550_23570 = G__23584;
continue;
} else {
var vec__23563_23585 = cljs.core.first(seq__23547_23579__$1);
var container_23586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23563_23585,(0),null);
var comp_23587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23563_23585,(1),null);
reagent.dom.re_render_component(comp_23587,container_23586);


var G__23588 = cljs.core.next(seq__23547_23579__$1);
var G__23589 = null;
var G__23590 = (0);
var G__23591 = (0);
seq__23547_23567 = G__23588;
chunk__23548_23568 = G__23589;
count__23549_23569 = G__23590;
i__23550_23570 = G__23591;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
