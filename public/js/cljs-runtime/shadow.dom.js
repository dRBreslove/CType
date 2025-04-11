goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16657 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16657(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16658 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16658(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__15955 = coll;
var G__15956 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__15955,G__15956) : shadow.dom.lazy_native_coll_seq.call(null,G__15955,G__15956));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__15966 = arguments.length;
switch (G__15966) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__15983 = arguments.length;
switch (G__15983) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__15987 = arguments.length;
switch (G__15987) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__16007 = arguments.length;
switch (G__16007) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__16033 = arguments.length;
switch (G__16033) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__16035 = arguments.length;
switch (G__16035) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e16036){if((e16036 instanceof Object)){
var e = e16036;
return console.log("didnt support attachEvent",el,e);
} else {
throw e16036;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__16037 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__16038 = null;
var count__16039 = (0);
var i__16040 = (0);
while(true){
if((i__16040 < count__16039)){
var el = chunk__16038.cljs$core$IIndexed$_nth$arity$2(null,i__16040);
var handler_16665__$1 = ((function (seq__16037,chunk__16038,count__16039,i__16040,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16037,chunk__16038,count__16039,i__16040,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16665__$1);


var G__16666 = seq__16037;
var G__16667 = chunk__16038;
var G__16668 = count__16039;
var G__16669 = (i__16040 + (1));
seq__16037 = G__16666;
chunk__16038 = G__16667;
count__16039 = G__16668;
i__16040 = G__16669;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16037);
if(temp__5804__auto__){
var seq__16037__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16037__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16037__$1);
var G__16670 = cljs.core.chunk_rest(seq__16037__$1);
var G__16671 = c__5525__auto__;
var G__16672 = cljs.core.count(c__5525__auto__);
var G__16673 = (0);
seq__16037 = G__16670;
chunk__16038 = G__16671;
count__16039 = G__16672;
i__16040 = G__16673;
continue;
} else {
var el = cljs.core.first(seq__16037__$1);
var handler_16674__$1 = ((function (seq__16037,chunk__16038,count__16039,i__16040,el,seq__16037__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16037,chunk__16038,count__16039,i__16040,el,seq__16037__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16674__$1);


var G__16675 = cljs.core.next(seq__16037__$1);
var G__16676 = null;
var G__16677 = (0);
var G__16678 = (0);
seq__16037 = G__16675;
chunk__16038 = G__16676;
count__16039 = G__16677;
i__16040 = G__16678;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__16044 = arguments.length;
switch (G__16044) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__16046 = cljs.core.seq(events);
var chunk__16047 = null;
var count__16048 = (0);
var i__16049 = (0);
while(true){
if((i__16049 < count__16048)){
var vec__16059 = chunk__16047.cljs$core$IIndexed$_nth$arity$2(null,i__16049);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16059,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16059,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16680 = seq__16046;
var G__16681 = chunk__16047;
var G__16682 = count__16048;
var G__16683 = (i__16049 + (1));
seq__16046 = G__16680;
chunk__16047 = G__16681;
count__16048 = G__16682;
i__16049 = G__16683;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16046);
if(temp__5804__auto__){
var seq__16046__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16046__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16046__$1);
var G__16684 = cljs.core.chunk_rest(seq__16046__$1);
var G__16685 = c__5525__auto__;
var G__16686 = cljs.core.count(c__5525__auto__);
var G__16687 = (0);
seq__16046 = G__16684;
chunk__16047 = G__16685;
count__16048 = G__16686;
i__16049 = G__16687;
continue;
} else {
var vec__16064 = cljs.core.first(seq__16046__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16064,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16064,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16688 = cljs.core.next(seq__16046__$1);
var G__16689 = null;
var G__16690 = (0);
var G__16691 = (0);
seq__16046 = G__16688;
chunk__16047 = G__16689;
count__16048 = G__16690;
i__16049 = G__16691;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__16068 = cljs.core.seq(styles);
var chunk__16069 = null;
var count__16070 = (0);
var i__16071 = (0);
while(true){
if((i__16071 < count__16070)){
var vec__16083 = chunk__16069.cljs$core$IIndexed$_nth$arity$2(null,i__16071);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16083,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16692 = seq__16068;
var G__16693 = chunk__16069;
var G__16694 = count__16070;
var G__16695 = (i__16071 + (1));
seq__16068 = G__16692;
chunk__16069 = G__16693;
count__16070 = G__16694;
i__16071 = G__16695;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16068);
if(temp__5804__auto__){
var seq__16068__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16068__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16068__$1);
var G__16696 = cljs.core.chunk_rest(seq__16068__$1);
var G__16697 = c__5525__auto__;
var G__16698 = cljs.core.count(c__5525__auto__);
var G__16699 = (0);
seq__16068 = G__16696;
chunk__16069 = G__16697;
count__16070 = G__16698;
i__16071 = G__16699;
continue;
} else {
var vec__16086 = cljs.core.first(seq__16068__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16086,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16700 = cljs.core.next(seq__16068__$1);
var G__16701 = null;
var G__16702 = (0);
var G__16703 = (0);
seq__16068 = G__16700;
chunk__16069 = G__16701;
count__16070 = G__16702;
i__16071 = G__16703;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__16089_16704 = key;
var G__16089_16705__$1 = (((G__16089_16704 instanceof cljs.core.Keyword))?G__16089_16704.fqn:null);
switch (G__16089_16705__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16707 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_16707,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_16707,"aria-");
}
})())){
el.setAttribute(ks_16707,value);
} else {
(el[ks_16707] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__16090){
var map__16091 = p__16090;
var map__16091__$1 = cljs.core.__destructure_map(map__16091);
var props = map__16091__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16091__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__16092 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16092,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16092,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16092,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__16095 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__16095,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__16095;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__16097 = arguments.length;
switch (G__16097) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__16098){
var vec__16099 = p__16098;
var seq__16100 = cljs.core.seq(vec__16099);
var first__16101 = cljs.core.first(seq__16100);
var seq__16100__$1 = cljs.core.next(seq__16100);
var nn = first__16101;
var first__16101__$1 = cljs.core.first(seq__16100__$1);
var seq__16100__$2 = cljs.core.next(seq__16100__$1);
var np = first__16101__$1;
var nc = seq__16100__$2;
var node = vec__16099;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16102 = nn;
var G__16103 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16102,G__16103) : create_fn.call(null,G__16102,G__16103));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16104 = nn;
var G__16105 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16104,G__16105) : create_fn.call(null,G__16104,G__16105));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__16119 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16119,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16119,(1),null);
var seq__16125_16709 = cljs.core.seq(node_children);
var chunk__16126_16710 = null;
var count__16127_16711 = (0);
var i__16128_16712 = (0);
while(true){
if((i__16128_16712 < count__16127_16711)){
var child_struct_16713 = chunk__16126_16710.cljs$core$IIndexed$_nth$arity$2(null,i__16128_16712);
var children_16714 = shadow.dom.dom_node(child_struct_16713);
if(cljs.core.seq_QMARK_(children_16714)){
var seq__16163_16715 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16714));
var chunk__16165_16716 = null;
var count__16166_16717 = (0);
var i__16167_16718 = (0);
while(true){
if((i__16167_16718 < count__16166_16717)){
var child_16719 = chunk__16165_16716.cljs$core$IIndexed$_nth$arity$2(null,i__16167_16718);
if(cljs.core.truth_(child_16719)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16719);


var G__16720 = seq__16163_16715;
var G__16721 = chunk__16165_16716;
var G__16722 = count__16166_16717;
var G__16723 = (i__16167_16718 + (1));
seq__16163_16715 = G__16720;
chunk__16165_16716 = G__16721;
count__16166_16717 = G__16722;
i__16167_16718 = G__16723;
continue;
} else {
var G__16724 = seq__16163_16715;
var G__16725 = chunk__16165_16716;
var G__16726 = count__16166_16717;
var G__16727 = (i__16167_16718 + (1));
seq__16163_16715 = G__16724;
chunk__16165_16716 = G__16725;
count__16166_16717 = G__16726;
i__16167_16718 = G__16727;
continue;
}
} else {
var temp__5804__auto___16728 = cljs.core.seq(seq__16163_16715);
if(temp__5804__auto___16728){
var seq__16163_16729__$1 = temp__5804__auto___16728;
if(cljs.core.chunked_seq_QMARK_(seq__16163_16729__$1)){
var c__5525__auto___16730 = cljs.core.chunk_first(seq__16163_16729__$1);
var G__16731 = cljs.core.chunk_rest(seq__16163_16729__$1);
var G__16732 = c__5525__auto___16730;
var G__16733 = cljs.core.count(c__5525__auto___16730);
var G__16734 = (0);
seq__16163_16715 = G__16731;
chunk__16165_16716 = G__16732;
count__16166_16717 = G__16733;
i__16167_16718 = G__16734;
continue;
} else {
var child_16735 = cljs.core.first(seq__16163_16729__$1);
if(cljs.core.truth_(child_16735)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16735);


var G__16736 = cljs.core.next(seq__16163_16729__$1);
var G__16737 = null;
var G__16738 = (0);
var G__16739 = (0);
seq__16163_16715 = G__16736;
chunk__16165_16716 = G__16737;
count__16166_16717 = G__16738;
i__16167_16718 = G__16739;
continue;
} else {
var G__16740 = cljs.core.next(seq__16163_16729__$1);
var G__16741 = null;
var G__16742 = (0);
var G__16743 = (0);
seq__16163_16715 = G__16740;
chunk__16165_16716 = G__16741;
count__16166_16717 = G__16742;
i__16167_16718 = G__16743;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16714);
}


var G__16744 = seq__16125_16709;
var G__16745 = chunk__16126_16710;
var G__16746 = count__16127_16711;
var G__16747 = (i__16128_16712 + (1));
seq__16125_16709 = G__16744;
chunk__16126_16710 = G__16745;
count__16127_16711 = G__16746;
i__16128_16712 = G__16747;
continue;
} else {
var temp__5804__auto___16748 = cljs.core.seq(seq__16125_16709);
if(temp__5804__auto___16748){
var seq__16125_16749__$1 = temp__5804__auto___16748;
if(cljs.core.chunked_seq_QMARK_(seq__16125_16749__$1)){
var c__5525__auto___16750 = cljs.core.chunk_first(seq__16125_16749__$1);
var G__16751 = cljs.core.chunk_rest(seq__16125_16749__$1);
var G__16752 = c__5525__auto___16750;
var G__16753 = cljs.core.count(c__5525__auto___16750);
var G__16754 = (0);
seq__16125_16709 = G__16751;
chunk__16126_16710 = G__16752;
count__16127_16711 = G__16753;
i__16128_16712 = G__16754;
continue;
} else {
var child_struct_16755 = cljs.core.first(seq__16125_16749__$1);
var children_16756 = shadow.dom.dom_node(child_struct_16755);
if(cljs.core.seq_QMARK_(children_16756)){
var seq__16181_16757 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16756));
var chunk__16183_16758 = null;
var count__16184_16759 = (0);
var i__16185_16760 = (0);
while(true){
if((i__16185_16760 < count__16184_16759)){
var child_16761 = chunk__16183_16758.cljs$core$IIndexed$_nth$arity$2(null,i__16185_16760);
if(cljs.core.truth_(child_16761)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16761);


var G__16762 = seq__16181_16757;
var G__16763 = chunk__16183_16758;
var G__16764 = count__16184_16759;
var G__16765 = (i__16185_16760 + (1));
seq__16181_16757 = G__16762;
chunk__16183_16758 = G__16763;
count__16184_16759 = G__16764;
i__16185_16760 = G__16765;
continue;
} else {
var G__16766 = seq__16181_16757;
var G__16767 = chunk__16183_16758;
var G__16768 = count__16184_16759;
var G__16769 = (i__16185_16760 + (1));
seq__16181_16757 = G__16766;
chunk__16183_16758 = G__16767;
count__16184_16759 = G__16768;
i__16185_16760 = G__16769;
continue;
}
} else {
var temp__5804__auto___16770__$1 = cljs.core.seq(seq__16181_16757);
if(temp__5804__auto___16770__$1){
var seq__16181_16771__$1 = temp__5804__auto___16770__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16181_16771__$1)){
var c__5525__auto___16772 = cljs.core.chunk_first(seq__16181_16771__$1);
var G__16773 = cljs.core.chunk_rest(seq__16181_16771__$1);
var G__16774 = c__5525__auto___16772;
var G__16775 = cljs.core.count(c__5525__auto___16772);
var G__16776 = (0);
seq__16181_16757 = G__16773;
chunk__16183_16758 = G__16774;
count__16184_16759 = G__16775;
i__16185_16760 = G__16776;
continue;
} else {
var child_16777 = cljs.core.first(seq__16181_16771__$1);
if(cljs.core.truth_(child_16777)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16777);


var G__16778 = cljs.core.next(seq__16181_16771__$1);
var G__16779 = null;
var G__16780 = (0);
var G__16781 = (0);
seq__16181_16757 = G__16778;
chunk__16183_16758 = G__16779;
count__16184_16759 = G__16780;
i__16185_16760 = G__16781;
continue;
} else {
var G__16782 = cljs.core.next(seq__16181_16771__$1);
var G__16783 = null;
var G__16784 = (0);
var G__16785 = (0);
seq__16181_16757 = G__16782;
chunk__16183_16758 = G__16783;
count__16184_16759 = G__16784;
i__16185_16760 = G__16785;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16756);
}


var G__16786 = cljs.core.next(seq__16125_16749__$1);
var G__16787 = null;
var G__16788 = (0);
var G__16789 = (0);
seq__16125_16709 = G__16786;
chunk__16126_16710 = G__16787;
count__16127_16711 = G__16788;
i__16128_16712 = G__16789;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__16248 = cljs.core.seq(node);
var chunk__16249 = null;
var count__16250 = (0);
var i__16251 = (0);
while(true){
if((i__16251 < count__16250)){
var n = chunk__16249.cljs$core$IIndexed$_nth$arity$2(null,i__16251);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16790 = seq__16248;
var G__16791 = chunk__16249;
var G__16792 = count__16250;
var G__16793 = (i__16251 + (1));
seq__16248 = G__16790;
chunk__16249 = G__16791;
count__16250 = G__16792;
i__16251 = G__16793;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16248);
if(temp__5804__auto__){
var seq__16248__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16248__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16248__$1);
var G__16794 = cljs.core.chunk_rest(seq__16248__$1);
var G__16795 = c__5525__auto__;
var G__16796 = cljs.core.count(c__5525__auto__);
var G__16797 = (0);
seq__16248 = G__16794;
chunk__16249 = G__16795;
count__16250 = G__16796;
i__16251 = G__16797;
continue;
} else {
var n = cljs.core.first(seq__16248__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16798 = cljs.core.next(seq__16248__$1);
var G__16799 = null;
var G__16800 = (0);
var G__16801 = (0);
seq__16248 = G__16798;
chunk__16249 = G__16799;
count__16250 = G__16800;
i__16251 = G__16801;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__16277 = arguments.length;
switch (G__16277) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__16291 = arguments.length;
switch (G__16291) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__16322 = arguments.length;
switch (G__16322) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16805 = arguments.length;
var i__5727__auto___16806 = (0);
while(true){
if((i__5727__auto___16806 < len__5726__auto___16805)){
args__5732__auto__.push((arguments[i__5727__auto___16806]));

var G__16807 = (i__5727__auto___16806 + (1));
i__5727__auto___16806 = G__16807;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__16379_16808 = cljs.core.seq(nodes);
var chunk__16380_16809 = null;
var count__16381_16810 = (0);
var i__16382_16811 = (0);
while(true){
if((i__16382_16811 < count__16381_16810)){
var node_16812 = chunk__16380_16809.cljs$core$IIndexed$_nth$arity$2(null,i__16382_16811);
fragment.appendChild(shadow.dom._to_dom(node_16812));


var G__16813 = seq__16379_16808;
var G__16814 = chunk__16380_16809;
var G__16815 = count__16381_16810;
var G__16816 = (i__16382_16811 + (1));
seq__16379_16808 = G__16813;
chunk__16380_16809 = G__16814;
count__16381_16810 = G__16815;
i__16382_16811 = G__16816;
continue;
} else {
var temp__5804__auto___16817 = cljs.core.seq(seq__16379_16808);
if(temp__5804__auto___16817){
var seq__16379_16818__$1 = temp__5804__auto___16817;
if(cljs.core.chunked_seq_QMARK_(seq__16379_16818__$1)){
var c__5525__auto___16819 = cljs.core.chunk_first(seq__16379_16818__$1);
var G__16820 = cljs.core.chunk_rest(seq__16379_16818__$1);
var G__16821 = c__5525__auto___16819;
var G__16822 = cljs.core.count(c__5525__auto___16819);
var G__16823 = (0);
seq__16379_16808 = G__16820;
chunk__16380_16809 = G__16821;
count__16381_16810 = G__16822;
i__16382_16811 = G__16823;
continue;
} else {
var node_16824 = cljs.core.first(seq__16379_16818__$1);
fragment.appendChild(shadow.dom._to_dom(node_16824));


var G__16825 = cljs.core.next(seq__16379_16818__$1);
var G__16826 = null;
var G__16827 = (0);
var G__16828 = (0);
seq__16379_16808 = G__16825;
chunk__16380_16809 = G__16826;
count__16381_16810 = G__16827;
i__16382_16811 = G__16828;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq16362){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16362));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__16401_16829 = cljs.core.seq(scripts);
var chunk__16402_16830 = null;
var count__16403_16831 = (0);
var i__16404_16832 = (0);
while(true){
if((i__16404_16832 < count__16403_16831)){
var vec__16415_16833 = chunk__16402_16830.cljs$core$IIndexed$_nth$arity$2(null,i__16404_16832);
var script_tag_16834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16415_16833,(0),null);
var script_body_16835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16415_16833,(1),null);
eval(script_body_16835);


var G__16836 = seq__16401_16829;
var G__16837 = chunk__16402_16830;
var G__16838 = count__16403_16831;
var G__16839 = (i__16404_16832 + (1));
seq__16401_16829 = G__16836;
chunk__16402_16830 = G__16837;
count__16403_16831 = G__16838;
i__16404_16832 = G__16839;
continue;
} else {
var temp__5804__auto___16840 = cljs.core.seq(seq__16401_16829);
if(temp__5804__auto___16840){
var seq__16401_16841__$1 = temp__5804__auto___16840;
if(cljs.core.chunked_seq_QMARK_(seq__16401_16841__$1)){
var c__5525__auto___16842 = cljs.core.chunk_first(seq__16401_16841__$1);
var G__16843 = cljs.core.chunk_rest(seq__16401_16841__$1);
var G__16844 = c__5525__auto___16842;
var G__16845 = cljs.core.count(c__5525__auto___16842);
var G__16846 = (0);
seq__16401_16829 = G__16843;
chunk__16402_16830 = G__16844;
count__16403_16831 = G__16845;
i__16404_16832 = G__16846;
continue;
} else {
var vec__16419_16847 = cljs.core.first(seq__16401_16841__$1);
var script_tag_16848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16419_16847,(0),null);
var script_body_16849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16419_16847,(1),null);
eval(script_body_16849);


var G__16850 = cljs.core.next(seq__16401_16841__$1);
var G__16851 = null;
var G__16852 = (0);
var G__16853 = (0);
seq__16401_16829 = G__16850;
chunk__16402_16830 = G__16851;
count__16403_16831 = G__16852;
i__16404_16832 = G__16853;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__16424){
var vec__16425 = p__16424;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16425,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16425,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__16433 = arguments.length;
switch (G__16433) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__16437 = cljs.core.seq(style_keys);
var chunk__16438 = null;
var count__16439 = (0);
var i__16440 = (0);
while(true){
if((i__16440 < count__16439)){
var it = chunk__16438.cljs$core$IIndexed$_nth$arity$2(null,i__16440);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16855 = seq__16437;
var G__16856 = chunk__16438;
var G__16857 = count__16439;
var G__16858 = (i__16440 + (1));
seq__16437 = G__16855;
chunk__16438 = G__16856;
count__16439 = G__16857;
i__16440 = G__16858;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16437);
if(temp__5804__auto__){
var seq__16437__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16437__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16437__$1);
var G__16859 = cljs.core.chunk_rest(seq__16437__$1);
var G__16860 = c__5525__auto__;
var G__16861 = cljs.core.count(c__5525__auto__);
var G__16862 = (0);
seq__16437 = G__16859;
chunk__16438 = G__16860;
count__16439 = G__16861;
i__16440 = G__16862;
continue;
} else {
var it = cljs.core.first(seq__16437__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16863 = cljs.core.next(seq__16437__$1);
var G__16864 = null;
var G__16865 = (0);
var G__16866 = (0);
seq__16437 = G__16863;
chunk__16438 = G__16864;
count__16439 = G__16865;
i__16440 = G__16866;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16447,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16455 = k16447;
var G__16455__$1 = (((G__16455 instanceof cljs.core.Keyword))?G__16455.fqn:null);
switch (G__16455__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16447,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16456){
var vec__16457 = p__16456;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16457,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16457,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16446){
var self__ = this;
var G__16446__$1 = this;
return (new cljs.core.RecordIter((0),G__16446__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16448,other16449){
var self__ = this;
var this16448__$1 = this;
return (((!((other16449 == null)))) && ((((this16448__$1.constructor === other16449.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16448__$1.x,other16449.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16448__$1.y,other16449.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16448__$1.__extmap,other16449.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16447){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16478 = k16447;
var G__16478__$1 = (((G__16478 instanceof cljs.core.Keyword))?G__16478.fqn:null);
switch (G__16478__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16447);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16446){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16479 = cljs.core.keyword_identical_QMARK_;
var expr__16480 = k__5309__auto__;
if(cljs.core.truth_((pred__16479.cljs$core$IFn$_invoke$arity$2 ? pred__16479.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__16480) : pred__16479.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__16480)))){
return (new shadow.dom.Coordinate(G__16446,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16479.cljs$core$IFn$_invoke$arity$2 ? pred__16479.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__16480) : pred__16479.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__16480)))){
return (new shadow.dom.Coordinate(self__.x,G__16446,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16446),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16446){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__16446,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__16452){
var extmap__5342__auto__ = (function (){var G__16487 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16452,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__16452)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16487);
} else {
return G__16487;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__16452),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__16452),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16491,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16498 = k16491;
var G__16498__$1 = (((G__16498 instanceof cljs.core.Keyword))?G__16498.fqn:null);
switch (G__16498__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16491,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16501){
var vec__16502 = p__16501;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16502,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16502,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16490){
var self__ = this;
var G__16490__$1 = this;
return (new cljs.core.RecordIter((0),G__16490__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16492,other16493){
var self__ = this;
var this16492__$1 = this;
return (((!((other16493 == null)))) && ((((this16492__$1.constructor === other16493.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16492__$1.w,other16493.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16492__$1.h,other16493.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16492__$1.__extmap,other16493.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16491){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16505 = k16491;
var G__16505__$1 = (((G__16505 instanceof cljs.core.Keyword))?G__16505.fqn:null);
switch (G__16505__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16491);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16490){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16506 = cljs.core.keyword_identical_QMARK_;
var expr__16507 = k__5309__auto__;
if(cljs.core.truth_((pred__16506.cljs$core$IFn$_invoke$arity$2 ? pred__16506.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16507) : pred__16506.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__16507)))){
return (new shadow.dom.Size(G__16490,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16506.cljs$core$IFn$_invoke$arity$2 ? pred__16506.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16507) : pred__16506.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__16507)))){
return (new shadow.dom.Size(self__.w,G__16490,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16490),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16490){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__16490,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16495){
var extmap__5342__auto__ = (function (){var G__16509 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16495,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16495)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16509);
} else {
return G__16509;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16495),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16495),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__16871 = (i + (1));
var G__16872 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16871;
ret = G__16872;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16514){
var vec__16515 = p__16514;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16515,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16515,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16519 = arguments.length;
switch (G__16519) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16874 = ps;
var G__16875 = (i + (1));
el__$1 = G__16874;
i = G__16875;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__16526 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16526,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16526,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16526,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16535_16876 = cljs.core.seq(props);
var chunk__16536_16877 = null;
var count__16537_16878 = (0);
var i__16538_16879 = (0);
while(true){
if((i__16538_16879 < count__16537_16878)){
var vec__16556_16880 = chunk__16536_16877.cljs$core$IIndexed$_nth$arity$2(null,i__16538_16879);
var k_16881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16556_16880,(0),null);
var v_16882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16556_16880,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16881);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16881),v_16882);


var G__16883 = seq__16535_16876;
var G__16884 = chunk__16536_16877;
var G__16885 = count__16537_16878;
var G__16886 = (i__16538_16879 + (1));
seq__16535_16876 = G__16883;
chunk__16536_16877 = G__16884;
count__16537_16878 = G__16885;
i__16538_16879 = G__16886;
continue;
} else {
var temp__5804__auto___16887 = cljs.core.seq(seq__16535_16876);
if(temp__5804__auto___16887){
var seq__16535_16888__$1 = temp__5804__auto___16887;
if(cljs.core.chunked_seq_QMARK_(seq__16535_16888__$1)){
var c__5525__auto___16889 = cljs.core.chunk_first(seq__16535_16888__$1);
var G__16890 = cljs.core.chunk_rest(seq__16535_16888__$1);
var G__16891 = c__5525__auto___16889;
var G__16892 = cljs.core.count(c__5525__auto___16889);
var G__16893 = (0);
seq__16535_16876 = G__16890;
chunk__16536_16877 = G__16891;
count__16537_16878 = G__16892;
i__16538_16879 = G__16893;
continue;
} else {
var vec__16560_16894 = cljs.core.first(seq__16535_16888__$1);
var k_16895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16560_16894,(0),null);
var v_16896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16560_16894,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16895);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16895),v_16896);


var G__16897 = cljs.core.next(seq__16535_16888__$1);
var G__16898 = null;
var G__16899 = (0);
var G__16900 = (0);
seq__16535_16876 = G__16897;
chunk__16536_16877 = G__16898;
count__16537_16878 = G__16899;
i__16538_16879 = G__16900;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16567 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16567,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16567,(1),null);
var seq__16572_16901 = cljs.core.seq(node_children);
var chunk__16574_16902 = null;
var count__16575_16903 = (0);
var i__16576_16904 = (0);
while(true){
if((i__16576_16904 < count__16575_16903)){
var child_struct_16905 = chunk__16574_16902.cljs$core$IIndexed$_nth$arity$2(null,i__16576_16904);
if((!((child_struct_16905 == null)))){
if(typeof child_struct_16905 === 'string'){
var text_16906 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16906),child_struct_16905].join(''));
} else {
var children_16907 = shadow.dom.svg_node(child_struct_16905);
if(cljs.core.seq_QMARK_(children_16907)){
var seq__16611_16908 = cljs.core.seq(children_16907);
var chunk__16613_16909 = null;
var count__16614_16910 = (0);
var i__16615_16911 = (0);
while(true){
if((i__16615_16911 < count__16614_16910)){
var child_16912 = chunk__16613_16909.cljs$core$IIndexed$_nth$arity$2(null,i__16615_16911);
if(cljs.core.truth_(child_16912)){
node.appendChild(child_16912);


var G__16913 = seq__16611_16908;
var G__16914 = chunk__16613_16909;
var G__16915 = count__16614_16910;
var G__16916 = (i__16615_16911 + (1));
seq__16611_16908 = G__16913;
chunk__16613_16909 = G__16914;
count__16614_16910 = G__16915;
i__16615_16911 = G__16916;
continue;
} else {
var G__16917 = seq__16611_16908;
var G__16918 = chunk__16613_16909;
var G__16919 = count__16614_16910;
var G__16920 = (i__16615_16911 + (1));
seq__16611_16908 = G__16917;
chunk__16613_16909 = G__16918;
count__16614_16910 = G__16919;
i__16615_16911 = G__16920;
continue;
}
} else {
var temp__5804__auto___16921 = cljs.core.seq(seq__16611_16908);
if(temp__5804__auto___16921){
var seq__16611_16922__$1 = temp__5804__auto___16921;
if(cljs.core.chunked_seq_QMARK_(seq__16611_16922__$1)){
var c__5525__auto___16923 = cljs.core.chunk_first(seq__16611_16922__$1);
var G__16924 = cljs.core.chunk_rest(seq__16611_16922__$1);
var G__16925 = c__5525__auto___16923;
var G__16926 = cljs.core.count(c__5525__auto___16923);
var G__16927 = (0);
seq__16611_16908 = G__16924;
chunk__16613_16909 = G__16925;
count__16614_16910 = G__16926;
i__16615_16911 = G__16927;
continue;
} else {
var child_16928 = cljs.core.first(seq__16611_16922__$1);
if(cljs.core.truth_(child_16928)){
node.appendChild(child_16928);


var G__16929 = cljs.core.next(seq__16611_16922__$1);
var G__16930 = null;
var G__16931 = (0);
var G__16932 = (0);
seq__16611_16908 = G__16929;
chunk__16613_16909 = G__16930;
count__16614_16910 = G__16931;
i__16615_16911 = G__16932;
continue;
} else {
var G__16933 = cljs.core.next(seq__16611_16922__$1);
var G__16934 = null;
var G__16935 = (0);
var G__16936 = (0);
seq__16611_16908 = G__16933;
chunk__16613_16909 = G__16934;
count__16614_16910 = G__16935;
i__16615_16911 = G__16936;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16907);
}
}


var G__16937 = seq__16572_16901;
var G__16938 = chunk__16574_16902;
var G__16939 = count__16575_16903;
var G__16940 = (i__16576_16904 + (1));
seq__16572_16901 = G__16937;
chunk__16574_16902 = G__16938;
count__16575_16903 = G__16939;
i__16576_16904 = G__16940;
continue;
} else {
var G__16941 = seq__16572_16901;
var G__16942 = chunk__16574_16902;
var G__16943 = count__16575_16903;
var G__16944 = (i__16576_16904 + (1));
seq__16572_16901 = G__16941;
chunk__16574_16902 = G__16942;
count__16575_16903 = G__16943;
i__16576_16904 = G__16944;
continue;
}
} else {
var temp__5804__auto___16945 = cljs.core.seq(seq__16572_16901);
if(temp__5804__auto___16945){
var seq__16572_16946__$1 = temp__5804__auto___16945;
if(cljs.core.chunked_seq_QMARK_(seq__16572_16946__$1)){
var c__5525__auto___16947 = cljs.core.chunk_first(seq__16572_16946__$1);
var G__16948 = cljs.core.chunk_rest(seq__16572_16946__$1);
var G__16949 = c__5525__auto___16947;
var G__16950 = cljs.core.count(c__5525__auto___16947);
var G__16951 = (0);
seq__16572_16901 = G__16948;
chunk__16574_16902 = G__16949;
count__16575_16903 = G__16950;
i__16576_16904 = G__16951;
continue;
} else {
var child_struct_16952 = cljs.core.first(seq__16572_16946__$1);
if((!((child_struct_16952 == null)))){
if(typeof child_struct_16952 === 'string'){
var text_16953 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16953),child_struct_16952].join(''));
} else {
var children_16954 = shadow.dom.svg_node(child_struct_16952);
if(cljs.core.seq_QMARK_(children_16954)){
var seq__16628_16955 = cljs.core.seq(children_16954);
var chunk__16630_16956 = null;
var count__16631_16957 = (0);
var i__16632_16958 = (0);
while(true){
if((i__16632_16958 < count__16631_16957)){
var child_16959 = chunk__16630_16956.cljs$core$IIndexed$_nth$arity$2(null,i__16632_16958);
if(cljs.core.truth_(child_16959)){
node.appendChild(child_16959);


var G__16960 = seq__16628_16955;
var G__16961 = chunk__16630_16956;
var G__16962 = count__16631_16957;
var G__16963 = (i__16632_16958 + (1));
seq__16628_16955 = G__16960;
chunk__16630_16956 = G__16961;
count__16631_16957 = G__16962;
i__16632_16958 = G__16963;
continue;
} else {
var G__16964 = seq__16628_16955;
var G__16965 = chunk__16630_16956;
var G__16966 = count__16631_16957;
var G__16967 = (i__16632_16958 + (1));
seq__16628_16955 = G__16964;
chunk__16630_16956 = G__16965;
count__16631_16957 = G__16966;
i__16632_16958 = G__16967;
continue;
}
} else {
var temp__5804__auto___16968__$1 = cljs.core.seq(seq__16628_16955);
if(temp__5804__auto___16968__$1){
var seq__16628_16969__$1 = temp__5804__auto___16968__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16628_16969__$1)){
var c__5525__auto___16970 = cljs.core.chunk_first(seq__16628_16969__$1);
var G__16971 = cljs.core.chunk_rest(seq__16628_16969__$1);
var G__16972 = c__5525__auto___16970;
var G__16973 = cljs.core.count(c__5525__auto___16970);
var G__16974 = (0);
seq__16628_16955 = G__16971;
chunk__16630_16956 = G__16972;
count__16631_16957 = G__16973;
i__16632_16958 = G__16974;
continue;
} else {
var child_16975 = cljs.core.first(seq__16628_16969__$1);
if(cljs.core.truth_(child_16975)){
node.appendChild(child_16975);


var G__16976 = cljs.core.next(seq__16628_16969__$1);
var G__16977 = null;
var G__16978 = (0);
var G__16979 = (0);
seq__16628_16955 = G__16976;
chunk__16630_16956 = G__16977;
count__16631_16957 = G__16978;
i__16632_16958 = G__16979;
continue;
} else {
var G__16980 = cljs.core.next(seq__16628_16969__$1);
var G__16981 = null;
var G__16982 = (0);
var G__16983 = (0);
seq__16628_16955 = G__16980;
chunk__16630_16956 = G__16981;
count__16631_16957 = G__16982;
i__16632_16958 = G__16983;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16954);
}
}


var G__16984 = cljs.core.next(seq__16572_16946__$1);
var G__16985 = null;
var G__16986 = (0);
var G__16987 = (0);
seq__16572_16901 = G__16984;
chunk__16574_16902 = G__16985;
count__16575_16903 = G__16986;
i__16576_16904 = G__16987;
continue;
} else {
var G__16988 = cljs.core.next(seq__16572_16946__$1);
var G__16989 = null;
var G__16990 = (0);
var G__16991 = (0);
seq__16572_16901 = G__16988;
chunk__16574_16902 = G__16989;
count__16575_16903 = G__16990;
i__16576_16904 = G__16991;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16992 = arguments.length;
var i__5727__auto___16993 = (0);
while(true){
if((i__5727__auto___16993 < len__5726__auto___16992)){
args__5732__auto__.push((arguments[i__5727__auto___16993]));

var G__16994 = (i__5727__auto___16993 + (1));
i__5727__auto___16993 = G__16994;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16650){
var G__16651 = cljs.core.first(seq16650);
var seq16650__$1 = cljs.core.next(seq16650);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16651,seq16650__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
