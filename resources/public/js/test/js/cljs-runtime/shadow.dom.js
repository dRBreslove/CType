goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12995 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12995(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12996 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12996(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__12482 = coll;
var G__12483 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__12482,G__12483) : shadow.dom.lazy_native_coll_seq.call(null, G__12482,G__12483));
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
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
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
var G__12495 = arguments.length;
switch (G__12495) {
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
var G__12498 = arguments.length;
switch (G__12498) {
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
var G__12501 = arguments.length;
switch (G__12501) {
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
var G__12503 = arguments.length;
switch (G__12503) {
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
var G__12506 = arguments.length;
switch (G__12506) {
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
var G__12512 = arguments.length;
switch (G__12512) {
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
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e12514){if((e12514 instanceof Object)){
var e = e12514;
return console.log("didnt support attachEvent",el,e);
} else {
throw e12514;

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
var seq__12525 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__12526 = null;
var count__12527 = (0);
var i__12528 = (0);
while(true){
if((i__12528 < count__12527)){
var el = chunk__12526.cljs$core$IIndexed$_nth$arity$2(null, i__12528);
var handler_13003__$1 = ((function (seq__12525,chunk__12526,count__12527,i__12528,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__12525,chunk__12526,count__12527,i__12528,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_13003__$1);


var G__13004 = seq__12525;
var G__13005 = chunk__12526;
var G__13006 = count__12527;
var G__13007 = (i__12528 + (1));
seq__12525 = G__13004;
chunk__12526 = G__13005;
count__12527 = G__13006;
i__12528 = G__13007;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12525);
if(temp__5804__auto__){
var seq__12525__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12525__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12525__$1);
var G__13008 = cljs.core.chunk_rest(seq__12525__$1);
var G__13009 = c__5525__auto__;
var G__13010 = cljs.core.count(c__5525__auto__);
var G__13011 = (0);
seq__12525 = G__13008;
chunk__12526 = G__13009;
count__12527 = G__13010;
i__12528 = G__13011;
continue;
} else {
var el = cljs.core.first(seq__12525__$1);
var handler_13012__$1 = ((function (seq__12525,chunk__12526,count__12527,i__12528,el,seq__12525__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__12525,chunk__12526,count__12527,i__12528,el,seq__12525__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_13012__$1);


var G__13013 = cljs.core.next(seq__12525__$1);
var G__13014 = null;
var G__13015 = (0);
var G__13016 = (0);
seq__12525 = G__13013;
chunk__12526 = G__13014;
count__12527 = G__13015;
i__12528 = G__13016;
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
var G__12533 = arguments.length;
switch (G__12533) {
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
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__12535 = cljs.core.seq(events);
var chunk__12536 = null;
var count__12537 = (0);
var i__12538 = (0);
while(true){
if((i__12538 < count__12537)){
var vec__12546 = chunk__12536.cljs$core$IIndexed$_nth$arity$2(null, i__12538);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12546,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12546,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13018 = seq__12535;
var G__13019 = chunk__12536;
var G__13020 = count__12537;
var G__13021 = (i__12538 + (1));
seq__12535 = G__13018;
chunk__12536 = G__13019;
count__12537 = G__13020;
i__12538 = G__13021;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12535);
if(temp__5804__auto__){
var seq__12535__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12535__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12535__$1);
var G__13022 = cljs.core.chunk_rest(seq__12535__$1);
var G__13023 = c__5525__auto__;
var G__13024 = cljs.core.count(c__5525__auto__);
var G__13025 = (0);
seq__12535 = G__13022;
chunk__12536 = G__13023;
count__12537 = G__13024;
i__12538 = G__13025;
continue;
} else {
var vec__12549 = cljs.core.first(seq__12535__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12549,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13026 = cljs.core.next(seq__12535__$1);
var G__13027 = null;
var G__13028 = (0);
var G__13029 = (0);
seq__12535 = G__13026;
chunk__12536 = G__13027;
count__12537 = G__13028;
i__12538 = G__13029;
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
var seq__12557 = cljs.core.seq(styles);
var chunk__12558 = null;
var count__12559 = (0);
var i__12560 = (0);
while(true){
if((i__12560 < count__12559)){
var vec__12567 = chunk__12558.cljs$core$IIndexed$_nth$arity$2(null, i__12560);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12567,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12567,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13030 = seq__12557;
var G__13031 = chunk__12558;
var G__13032 = count__12559;
var G__13033 = (i__12560 + (1));
seq__12557 = G__13030;
chunk__12558 = G__13031;
count__12559 = G__13032;
i__12560 = G__13033;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12557);
if(temp__5804__auto__){
var seq__12557__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12557__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12557__$1);
var G__13034 = cljs.core.chunk_rest(seq__12557__$1);
var G__13035 = c__5525__auto__;
var G__13036 = cljs.core.count(c__5525__auto__);
var G__13037 = (0);
seq__12557 = G__13034;
chunk__12558 = G__13035;
count__12559 = G__13036;
i__12560 = G__13037;
continue;
} else {
var vec__12570 = cljs.core.first(seq__12557__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12570,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13038 = cljs.core.next(seq__12557__$1);
var G__13039 = null;
var G__13040 = (0);
var G__13041 = (0);
seq__12557 = G__13038;
chunk__12558 = G__13039;
count__12559 = G__13040;
i__12560 = G__13041;
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
var G__12582_13042 = key;
var G__12582_13043__$1 = (((G__12582_13042 instanceof cljs.core.Keyword))?G__12582_13042.fqn:null);
switch (G__12582_13043__$1) {
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
var ks_13045 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_13045,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_13045,"aria-");
}
})())){
el.setAttribute(ks_13045,value);
} else {
(el[ks_13045] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12607){
var map__12608 = p__12607;
var map__12608__$1 = cljs.core.__destructure_map(map__12608);
var props = map__12608__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12608__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12609 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12609,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12609,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12609,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12617 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12617,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12617;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12634 = arguments.length;
switch (G__12634) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12640){
var vec__12641 = p__12640;
var seq__12642 = cljs.core.seq(vec__12641);
var first__12643 = cljs.core.first(seq__12642);
var seq__12642__$1 = cljs.core.next(seq__12642);
var nn = first__12643;
var first__12643__$1 = cljs.core.first(seq__12642__$1);
var seq__12642__$2 = cljs.core.next(seq__12642__$1);
var np = first__12643__$1;
var nc = seq__12642__$2;
var node = vec__12641;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12647 = nn;
var G__12648 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12647,G__12648) : create_fn.call(null, G__12647,G__12648));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12649 = nn;
var G__12650 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12649,G__12650) : create_fn.call(null, G__12649,G__12650));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12651 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12651,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12651,(1),null);
var seq__12654_13047 = cljs.core.seq(node_children);
var chunk__12655_13048 = null;
var count__12656_13049 = (0);
var i__12657_13050 = (0);
while(true){
if((i__12657_13050 < count__12656_13049)){
var child_struct_13051 = chunk__12655_13048.cljs$core$IIndexed$_nth$arity$2(null, i__12657_13050);
var children_13052 = shadow.dom.dom_node(child_struct_13051);
if(cljs.core.seq_QMARK_(children_13052)){
var seq__12693_13053 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13052));
var chunk__12695_13054 = null;
var count__12696_13055 = (0);
var i__12697_13056 = (0);
while(true){
if((i__12697_13056 < count__12696_13055)){
var child_13057 = chunk__12695_13054.cljs$core$IIndexed$_nth$arity$2(null, i__12697_13056);
if(cljs.core.truth_(child_13057)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13057);


var G__13058 = seq__12693_13053;
var G__13059 = chunk__12695_13054;
var G__13060 = count__12696_13055;
var G__13061 = (i__12697_13056 + (1));
seq__12693_13053 = G__13058;
chunk__12695_13054 = G__13059;
count__12696_13055 = G__13060;
i__12697_13056 = G__13061;
continue;
} else {
var G__13062 = seq__12693_13053;
var G__13063 = chunk__12695_13054;
var G__13064 = count__12696_13055;
var G__13065 = (i__12697_13056 + (1));
seq__12693_13053 = G__13062;
chunk__12695_13054 = G__13063;
count__12696_13055 = G__13064;
i__12697_13056 = G__13065;
continue;
}
} else {
var temp__5804__auto___13066 = cljs.core.seq(seq__12693_13053);
if(temp__5804__auto___13066){
var seq__12693_13067__$1 = temp__5804__auto___13066;
if(cljs.core.chunked_seq_QMARK_(seq__12693_13067__$1)){
var c__5525__auto___13068 = cljs.core.chunk_first(seq__12693_13067__$1);
var G__13069 = cljs.core.chunk_rest(seq__12693_13067__$1);
var G__13070 = c__5525__auto___13068;
var G__13071 = cljs.core.count(c__5525__auto___13068);
var G__13072 = (0);
seq__12693_13053 = G__13069;
chunk__12695_13054 = G__13070;
count__12696_13055 = G__13071;
i__12697_13056 = G__13072;
continue;
} else {
var child_13073 = cljs.core.first(seq__12693_13067__$1);
if(cljs.core.truth_(child_13073)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13073);


var G__13074 = cljs.core.next(seq__12693_13067__$1);
var G__13075 = null;
var G__13076 = (0);
var G__13077 = (0);
seq__12693_13053 = G__13074;
chunk__12695_13054 = G__13075;
count__12696_13055 = G__13076;
i__12697_13056 = G__13077;
continue;
} else {
var G__13078 = cljs.core.next(seq__12693_13067__$1);
var G__13079 = null;
var G__13080 = (0);
var G__13081 = (0);
seq__12693_13053 = G__13078;
chunk__12695_13054 = G__13079;
count__12696_13055 = G__13080;
i__12697_13056 = G__13081;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13052);
}


var G__13082 = seq__12654_13047;
var G__13083 = chunk__12655_13048;
var G__13084 = count__12656_13049;
var G__13085 = (i__12657_13050 + (1));
seq__12654_13047 = G__13082;
chunk__12655_13048 = G__13083;
count__12656_13049 = G__13084;
i__12657_13050 = G__13085;
continue;
} else {
var temp__5804__auto___13086 = cljs.core.seq(seq__12654_13047);
if(temp__5804__auto___13086){
var seq__12654_13087__$1 = temp__5804__auto___13086;
if(cljs.core.chunked_seq_QMARK_(seq__12654_13087__$1)){
var c__5525__auto___13088 = cljs.core.chunk_first(seq__12654_13087__$1);
var G__13089 = cljs.core.chunk_rest(seq__12654_13087__$1);
var G__13090 = c__5525__auto___13088;
var G__13091 = cljs.core.count(c__5525__auto___13088);
var G__13092 = (0);
seq__12654_13047 = G__13089;
chunk__12655_13048 = G__13090;
count__12656_13049 = G__13091;
i__12657_13050 = G__13092;
continue;
} else {
var child_struct_13093 = cljs.core.first(seq__12654_13087__$1);
var children_13094 = shadow.dom.dom_node(child_struct_13093);
if(cljs.core.seq_QMARK_(children_13094)){
var seq__12700_13095 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13094));
var chunk__12702_13096 = null;
var count__12703_13097 = (0);
var i__12704_13098 = (0);
while(true){
if((i__12704_13098 < count__12703_13097)){
var child_13099 = chunk__12702_13096.cljs$core$IIndexed$_nth$arity$2(null, i__12704_13098);
if(cljs.core.truth_(child_13099)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13099);


var G__13100 = seq__12700_13095;
var G__13101 = chunk__12702_13096;
var G__13102 = count__12703_13097;
var G__13103 = (i__12704_13098 + (1));
seq__12700_13095 = G__13100;
chunk__12702_13096 = G__13101;
count__12703_13097 = G__13102;
i__12704_13098 = G__13103;
continue;
} else {
var G__13104 = seq__12700_13095;
var G__13105 = chunk__12702_13096;
var G__13106 = count__12703_13097;
var G__13107 = (i__12704_13098 + (1));
seq__12700_13095 = G__13104;
chunk__12702_13096 = G__13105;
count__12703_13097 = G__13106;
i__12704_13098 = G__13107;
continue;
}
} else {
var temp__5804__auto___13108__$1 = cljs.core.seq(seq__12700_13095);
if(temp__5804__auto___13108__$1){
var seq__12700_13109__$1 = temp__5804__auto___13108__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12700_13109__$1)){
var c__5525__auto___13110 = cljs.core.chunk_first(seq__12700_13109__$1);
var G__13111 = cljs.core.chunk_rest(seq__12700_13109__$1);
var G__13112 = c__5525__auto___13110;
var G__13113 = cljs.core.count(c__5525__auto___13110);
var G__13114 = (0);
seq__12700_13095 = G__13111;
chunk__12702_13096 = G__13112;
count__12703_13097 = G__13113;
i__12704_13098 = G__13114;
continue;
} else {
var child_13115 = cljs.core.first(seq__12700_13109__$1);
if(cljs.core.truth_(child_13115)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13115);


var G__13116 = cljs.core.next(seq__12700_13109__$1);
var G__13117 = null;
var G__13118 = (0);
var G__13119 = (0);
seq__12700_13095 = G__13116;
chunk__12702_13096 = G__13117;
count__12703_13097 = G__13118;
i__12704_13098 = G__13119;
continue;
} else {
var G__13120 = cljs.core.next(seq__12700_13109__$1);
var G__13121 = null;
var G__13122 = (0);
var G__13123 = (0);
seq__12700_13095 = G__13120;
chunk__12702_13096 = G__13121;
count__12703_13097 = G__13122;
i__12704_13098 = G__13123;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13094);
}


var G__13124 = cljs.core.next(seq__12654_13087__$1);
var G__13125 = null;
var G__13126 = (0);
var G__13127 = (0);
seq__12654_13047 = G__13124;
chunk__12655_13048 = G__13125;
count__12656_13049 = G__13126;
i__12657_13050 = G__13127;
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
var seq__12739 = cljs.core.seq(node);
var chunk__12740 = null;
var count__12741 = (0);
var i__12742 = (0);
while(true){
if((i__12742 < count__12741)){
var n = chunk__12740.cljs$core$IIndexed$_nth$arity$2(null, i__12742);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__13128 = seq__12739;
var G__13129 = chunk__12740;
var G__13130 = count__12741;
var G__13131 = (i__12742 + (1));
seq__12739 = G__13128;
chunk__12740 = G__13129;
count__12741 = G__13130;
i__12742 = G__13131;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12739);
if(temp__5804__auto__){
var seq__12739__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12739__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12739__$1);
var G__13132 = cljs.core.chunk_rest(seq__12739__$1);
var G__13133 = c__5525__auto__;
var G__13134 = cljs.core.count(c__5525__auto__);
var G__13135 = (0);
seq__12739 = G__13132;
chunk__12740 = G__13133;
count__12741 = G__13134;
i__12742 = G__13135;
continue;
} else {
var n = cljs.core.first(seq__12739__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__13136 = cljs.core.next(seq__12739__$1);
var G__13137 = null;
var G__13138 = (0);
var G__13139 = (0);
seq__12739 = G__13136;
chunk__12740 = G__13137;
count__12741 = G__13138;
i__12742 = G__13139;
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
var G__12750 = arguments.length;
switch (G__12750) {
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
var G__12752 = arguments.length;
switch (G__12752) {
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
var G__12769 = arguments.length;
switch (G__12769) {
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
var len__5726__auto___13143 = arguments.length;
var i__5727__auto___13144 = (0);
while(true){
if((i__5727__auto___13144 < len__5726__auto___13143)){
args__5732__auto__.push((arguments[i__5727__auto___13144]));

var G__13145 = (i__5727__auto___13144 + (1));
i__5727__auto___13144 = G__13145;
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
var seq__12845_13146 = cljs.core.seq(nodes);
var chunk__12846_13147 = null;
var count__12847_13148 = (0);
var i__12848_13149 = (0);
while(true){
if((i__12848_13149 < count__12847_13148)){
var node_13150 = chunk__12846_13147.cljs$core$IIndexed$_nth$arity$2(null, i__12848_13149);
fragment.appendChild(shadow.dom._to_dom(node_13150));


var G__13151 = seq__12845_13146;
var G__13152 = chunk__12846_13147;
var G__13153 = count__12847_13148;
var G__13154 = (i__12848_13149 + (1));
seq__12845_13146 = G__13151;
chunk__12846_13147 = G__13152;
count__12847_13148 = G__13153;
i__12848_13149 = G__13154;
continue;
} else {
var temp__5804__auto___13155 = cljs.core.seq(seq__12845_13146);
if(temp__5804__auto___13155){
var seq__12845_13156__$1 = temp__5804__auto___13155;
if(cljs.core.chunked_seq_QMARK_(seq__12845_13156__$1)){
var c__5525__auto___13157 = cljs.core.chunk_first(seq__12845_13156__$1);
var G__13158 = cljs.core.chunk_rest(seq__12845_13156__$1);
var G__13159 = c__5525__auto___13157;
var G__13160 = cljs.core.count(c__5525__auto___13157);
var G__13161 = (0);
seq__12845_13146 = G__13158;
chunk__12846_13147 = G__13159;
count__12847_13148 = G__13160;
i__12848_13149 = G__13161;
continue;
} else {
var node_13162 = cljs.core.first(seq__12845_13156__$1);
fragment.appendChild(shadow.dom._to_dom(node_13162));


var G__13163 = cljs.core.next(seq__12845_13156__$1);
var G__13164 = null;
var G__13165 = (0);
var G__13166 = (0);
seq__12845_13146 = G__13163;
chunk__12846_13147 = G__13164;
count__12847_13148 = G__13165;
i__12848_13149 = G__13166;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12841){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12841));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12855_13167 = cljs.core.seq(scripts);
var chunk__12856_13168 = null;
var count__12857_13169 = (0);
var i__12858_13170 = (0);
while(true){
if((i__12858_13170 < count__12857_13169)){
var vec__12865_13171 = chunk__12856_13168.cljs$core$IIndexed$_nth$arity$2(null, i__12858_13170);
var script_tag_13172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12865_13171,(0),null);
var script_body_13173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12865_13171,(1),null);
eval(script_body_13173);


var G__13174 = seq__12855_13167;
var G__13175 = chunk__12856_13168;
var G__13176 = count__12857_13169;
var G__13177 = (i__12858_13170 + (1));
seq__12855_13167 = G__13174;
chunk__12856_13168 = G__13175;
count__12857_13169 = G__13176;
i__12858_13170 = G__13177;
continue;
} else {
var temp__5804__auto___13178 = cljs.core.seq(seq__12855_13167);
if(temp__5804__auto___13178){
var seq__12855_13179__$1 = temp__5804__auto___13178;
if(cljs.core.chunked_seq_QMARK_(seq__12855_13179__$1)){
var c__5525__auto___13180 = cljs.core.chunk_first(seq__12855_13179__$1);
var G__13181 = cljs.core.chunk_rest(seq__12855_13179__$1);
var G__13182 = c__5525__auto___13180;
var G__13183 = cljs.core.count(c__5525__auto___13180);
var G__13184 = (0);
seq__12855_13167 = G__13181;
chunk__12856_13168 = G__13182;
count__12857_13169 = G__13183;
i__12858_13170 = G__13184;
continue;
} else {
var vec__12870_13185 = cljs.core.first(seq__12855_13179__$1);
var script_tag_13186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12870_13185,(0),null);
var script_body_13187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12870_13185,(1),null);
eval(script_body_13187);


var G__13188 = cljs.core.next(seq__12855_13179__$1);
var G__13189 = null;
var G__13190 = (0);
var G__13191 = (0);
seq__12855_13167 = G__13188;
chunk__12856_13168 = G__13189;
count__12857_13169 = G__13190;
i__12858_13170 = G__13191;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12874){
var vec__12875 = p__12874;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12875,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12875,(1),null);
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
var G__12880 = arguments.length;
switch (G__12880) {
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
var seq__12883 = cljs.core.seq(style_keys);
var chunk__12884 = null;
var count__12885 = (0);
var i__12886 = (0);
while(true){
if((i__12886 < count__12885)){
var it = chunk__12884.cljs$core$IIndexed$_nth$arity$2(null, i__12886);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13193 = seq__12883;
var G__13194 = chunk__12884;
var G__13195 = count__12885;
var G__13196 = (i__12886 + (1));
seq__12883 = G__13193;
chunk__12884 = G__13194;
count__12885 = G__13195;
i__12886 = G__13196;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12883);
if(temp__5804__auto__){
var seq__12883__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12883__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12883__$1);
var G__13197 = cljs.core.chunk_rest(seq__12883__$1);
var G__13198 = c__5525__auto__;
var G__13199 = cljs.core.count(c__5525__auto__);
var G__13200 = (0);
seq__12883 = G__13197;
chunk__12884 = G__13198;
count__12885 = G__13199;
i__12886 = G__13200;
continue;
} else {
var it = cljs.core.first(seq__12883__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13201 = cljs.core.next(seq__12883__$1);
var G__13202 = null;
var G__13203 = (0);
var G__13204 = (0);
seq__12883 = G__13201;
chunk__12884 = G__13202;
count__12885 = G__13203;
i__12886 = G__13204;
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
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12888,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12893 = k12888;
var G__12893__$1 = (((G__12893 instanceof cljs.core.Keyword))?G__12893.fqn:null);
switch (G__12893__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12888,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12897){
var vec__12900 = p__12897;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12900,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12900,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12887){
var self__ = this;
var G__12887__$1 = this;
return (new cljs.core.RecordIter((0),G__12887__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12889,other12890){
var self__ = this;
var this12889__$1 = this;
return (((!((other12890 == null)))) && ((((this12889__$1.constructor === other12890.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12889__$1.x,other12890.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12889__$1.y,other12890.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12889__$1.__extmap,other12890.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12888){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12910 = k12888;
var G__12910__$1 = (((G__12910 instanceof cljs.core.Keyword))?G__12910.fqn:null);
switch (G__12910__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12888);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12887){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12911 = cljs.core.keyword_identical_QMARK_;
var expr__12912 = k__5309__auto__;
if(cljs.core.truth_((pred__12911.cljs$core$IFn$_invoke$arity$2 ? pred__12911.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12912) : pred__12911.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12912)))){
return (new shadow.dom.Coordinate(G__12887,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12911.cljs$core$IFn$_invoke$arity$2 ? pred__12911.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12912) : pred__12911.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12912)))){
return (new shadow.dom.Coordinate(self__.x,G__12887,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12887),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12887){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12887,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12891){
var extmap__5342__auto__ = (function (){var G__12914 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12891,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12891)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12914);
} else {
return G__12914;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12891),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12891),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12916,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12920 = k12916;
var G__12920__$1 = (((G__12920 instanceof cljs.core.Keyword))?G__12920.fqn:null);
switch (G__12920__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12916,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12921){
var vec__12922 = p__12921;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12922,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12922,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12915){
var self__ = this;
var G__12915__$1 = this;
return (new cljs.core.RecordIter((0),G__12915__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12917,other12918){
var self__ = this;
var this12917__$1 = this;
return (((!((other12918 == null)))) && ((((this12917__$1.constructor === other12918.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12917__$1.w,other12918.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12917__$1.h,other12918.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12917__$1.__extmap,other12918.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12916){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12925 = k12916;
var G__12925__$1 = (((G__12925 instanceof cljs.core.Keyword))?G__12925.fqn:null);
switch (G__12925__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12916);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12915){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12926 = cljs.core.keyword_identical_QMARK_;
var expr__12927 = k__5309__auto__;
if(cljs.core.truth_((pred__12926.cljs$core$IFn$_invoke$arity$2 ? pred__12926.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12927) : pred__12926.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12927)))){
return (new shadow.dom.Size(G__12915,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12926.cljs$core$IFn$_invoke$arity$2 ? pred__12926.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12927) : pred__12926.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12927)))){
return (new shadow.dom.Size(self__.w,G__12915,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12915),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12915){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12915,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12919){
var extmap__5342__auto__ = (function (){var G__12929 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12919,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12919)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12929);
} else {
return G__12929;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12919),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12919),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__13209 = (i + (1));
var G__13210 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13209;
ret = G__13210;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12934){
var vec__12935 = p__12934;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12935,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12935,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12939 = arguments.length;
switch (G__12939) {
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
var G__13212 = ps;
var G__13213 = (i + (1));
el__$1 = G__13212;
i = G__13213;
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
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
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
var vec__12940 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12940,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12940,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12940,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12943_13214 = cljs.core.seq(props);
var chunk__12944_13215 = null;
var count__12945_13216 = (0);
var i__12946_13217 = (0);
while(true){
if((i__12946_13217 < count__12945_13216)){
var vec__12953_13218 = chunk__12944_13215.cljs$core$IIndexed$_nth$arity$2(null, i__12946_13217);
var k_13219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12953_13218,(0),null);
var v_13220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12953_13218,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13219);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13219),v_13220);


var G__13221 = seq__12943_13214;
var G__13222 = chunk__12944_13215;
var G__13223 = count__12945_13216;
var G__13224 = (i__12946_13217 + (1));
seq__12943_13214 = G__13221;
chunk__12944_13215 = G__13222;
count__12945_13216 = G__13223;
i__12946_13217 = G__13224;
continue;
} else {
var temp__5804__auto___13225 = cljs.core.seq(seq__12943_13214);
if(temp__5804__auto___13225){
var seq__12943_13226__$1 = temp__5804__auto___13225;
if(cljs.core.chunked_seq_QMARK_(seq__12943_13226__$1)){
var c__5525__auto___13227 = cljs.core.chunk_first(seq__12943_13226__$1);
var G__13228 = cljs.core.chunk_rest(seq__12943_13226__$1);
var G__13229 = c__5525__auto___13227;
var G__13230 = cljs.core.count(c__5525__auto___13227);
var G__13231 = (0);
seq__12943_13214 = G__13228;
chunk__12944_13215 = G__13229;
count__12945_13216 = G__13230;
i__12946_13217 = G__13231;
continue;
} else {
var vec__12956_13232 = cljs.core.first(seq__12943_13226__$1);
var k_13233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12956_13232,(0),null);
var v_13234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12956_13232,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13233);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13233),v_13234);


var G__13235 = cljs.core.next(seq__12943_13226__$1);
var G__13236 = null;
var G__13237 = (0);
var G__13238 = (0);
seq__12943_13214 = G__13235;
chunk__12944_13215 = G__13236;
count__12945_13216 = G__13237;
i__12946_13217 = G__13238;
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
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12960 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12960,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12960,(1),null);
var seq__12963_13239 = cljs.core.seq(node_children);
var chunk__12965_13240 = null;
var count__12966_13241 = (0);
var i__12967_13242 = (0);
while(true){
if((i__12967_13242 < count__12966_13241)){
var child_struct_13243 = chunk__12965_13240.cljs$core$IIndexed$_nth$arity$2(null, i__12967_13242);
if((!((child_struct_13243 == null)))){
if(typeof child_struct_13243 === 'string'){
var text_13244 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13244),child_struct_13243].join(''));
} else {
var children_13245 = shadow.dom.svg_node(child_struct_13243);
if(cljs.core.seq_QMARK_(children_13245)){
var seq__12981_13246 = cljs.core.seq(children_13245);
var chunk__12983_13247 = null;
var count__12984_13248 = (0);
var i__12985_13249 = (0);
while(true){
if((i__12985_13249 < count__12984_13248)){
var child_13250 = chunk__12983_13247.cljs$core$IIndexed$_nth$arity$2(null, i__12985_13249);
if(cljs.core.truth_(child_13250)){
node.appendChild(child_13250);


var G__13251 = seq__12981_13246;
var G__13252 = chunk__12983_13247;
var G__13253 = count__12984_13248;
var G__13254 = (i__12985_13249 + (1));
seq__12981_13246 = G__13251;
chunk__12983_13247 = G__13252;
count__12984_13248 = G__13253;
i__12985_13249 = G__13254;
continue;
} else {
var G__13255 = seq__12981_13246;
var G__13256 = chunk__12983_13247;
var G__13257 = count__12984_13248;
var G__13258 = (i__12985_13249 + (1));
seq__12981_13246 = G__13255;
chunk__12983_13247 = G__13256;
count__12984_13248 = G__13257;
i__12985_13249 = G__13258;
continue;
}
} else {
var temp__5804__auto___13259 = cljs.core.seq(seq__12981_13246);
if(temp__5804__auto___13259){
var seq__12981_13260__$1 = temp__5804__auto___13259;
if(cljs.core.chunked_seq_QMARK_(seq__12981_13260__$1)){
var c__5525__auto___13261 = cljs.core.chunk_first(seq__12981_13260__$1);
var G__13262 = cljs.core.chunk_rest(seq__12981_13260__$1);
var G__13263 = c__5525__auto___13261;
var G__13264 = cljs.core.count(c__5525__auto___13261);
var G__13265 = (0);
seq__12981_13246 = G__13262;
chunk__12983_13247 = G__13263;
count__12984_13248 = G__13264;
i__12985_13249 = G__13265;
continue;
} else {
var child_13266 = cljs.core.first(seq__12981_13260__$1);
if(cljs.core.truth_(child_13266)){
node.appendChild(child_13266);


var G__13267 = cljs.core.next(seq__12981_13260__$1);
var G__13268 = null;
var G__13269 = (0);
var G__13270 = (0);
seq__12981_13246 = G__13267;
chunk__12983_13247 = G__13268;
count__12984_13248 = G__13269;
i__12985_13249 = G__13270;
continue;
} else {
var G__13271 = cljs.core.next(seq__12981_13260__$1);
var G__13272 = null;
var G__13273 = (0);
var G__13274 = (0);
seq__12981_13246 = G__13271;
chunk__12983_13247 = G__13272;
count__12984_13248 = G__13273;
i__12985_13249 = G__13274;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13245);
}
}


var G__13275 = seq__12963_13239;
var G__13276 = chunk__12965_13240;
var G__13277 = count__12966_13241;
var G__13278 = (i__12967_13242 + (1));
seq__12963_13239 = G__13275;
chunk__12965_13240 = G__13276;
count__12966_13241 = G__13277;
i__12967_13242 = G__13278;
continue;
} else {
var G__13279 = seq__12963_13239;
var G__13280 = chunk__12965_13240;
var G__13281 = count__12966_13241;
var G__13282 = (i__12967_13242 + (1));
seq__12963_13239 = G__13279;
chunk__12965_13240 = G__13280;
count__12966_13241 = G__13281;
i__12967_13242 = G__13282;
continue;
}
} else {
var temp__5804__auto___13283 = cljs.core.seq(seq__12963_13239);
if(temp__5804__auto___13283){
var seq__12963_13284__$1 = temp__5804__auto___13283;
if(cljs.core.chunked_seq_QMARK_(seq__12963_13284__$1)){
var c__5525__auto___13285 = cljs.core.chunk_first(seq__12963_13284__$1);
var G__13286 = cljs.core.chunk_rest(seq__12963_13284__$1);
var G__13287 = c__5525__auto___13285;
var G__13288 = cljs.core.count(c__5525__auto___13285);
var G__13289 = (0);
seq__12963_13239 = G__13286;
chunk__12965_13240 = G__13287;
count__12966_13241 = G__13288;
i__12967_13242 = G__13289;
continue;
} else {
var child_struct_13290 = cljs.core.first(seq__12963_13284__$1);
if((!((child_struct_13290 == null)))){
if(typeof child_struct_13290 === 'string'){
var text_13291 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13291),child_struct_13290].join(''));
} else {
var children_13292 = shadow.dom.svg_node(child_struct_13290);
if(cljs.core.seq_QMARK_(children_13292)){
var seq__12987_13293 = cljs.core.seq(children_13292);
var chunk__12989_13294 = null;
var count__12990_13295 = (0);
var i__12991_13296 = (0);
while(true){
if((i__12991_13296 < count__12990_13295)){
var child_13297 = chunk__12989_13294.cljs$core$IIndexed$_nth$arity$2(null, i__12991_13296);
if(cljs.core.truth_(child_13297)){
node.appendChild(child_13297);


var G__13298 = seq__12987_13293;
var G__13299 = chunk__12989_13294;
var G__13300 = count__12990_13295;
var G__13301 = (i__12991_13296 + (1));
seq__12987_13293 = G__13298;
chunk__12989_13294 = G__13299;
count__12990_13295 = G__13300;
i__12991_13296 = G__13301;
continue;
} else {
var G__13302 = seq__12987_13293;
var G__13303 = chunk__12989_13294;
var G__13304 = count__12990_13295;
var G__13305 = (i__12991_13296 + (1));
seq__12987_13293 = G__13302;
chunk__12989_13294 = G__13303;
count__12990_13295 = G__13304;
i__12991_13296 = G__13305;
continue;
}
} else {
var temp__5804__auto___13306__$1 = cljs.core.seq(seq__12987_13293);
if(temp__5804__auto___13306__$1){
var seq__12987_13307__$1 = temp__5804__auto___13306__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12987_13307__$1)){
var c__5525__auto___13308 = cljs.core.chunk_first(seq__12987_13307__$1);
var G__13309 = cljs.core.chunk_rest(seq__12987_13307__$1);
var G__13310 = c__5525__auto___13308;
var G__13311 = cljs.core.count(c__5525__auto___13308);
var G__13312 = (0);
seq__12987_13293 = G__13309;
chunk__12989_13294 = G__13310;
count__12990_13295 = G__13311;
i__12991_13296 = G__13312;
continue;
} else {
var child_13313 = cljs.core.first(seq__12987_13307__$1);
if(cljs.core.truth_(child_13313)){
node.appendChild(child_13313);


var G__13314 = cljs.core.next(seq__12987_13307__$1);
var G__13315 = null;
var G__13316 = (0);
var G__13317 = (0);
seq__12987_13293 = G__13314;
chunk__12989_13294 = G__13315;
count__12990_13295 = G__13316;
i__12991_13296 = G__13317;
continue;
} else {
var G__13318 = cljs.core.next(seq__12987_13307__$1);
var G__13319 = null;
var G__13320 = (0);
var G__13321 = (0);
seq__12987_13293 = G__13318;
chunk__12989_13294 = G__13319;
count__12990_13295 = G__13320;
i__12991_13296 = G__13321;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13292);
}
}


var G__13322 = cljs.core.next(seq__12963_13284__$1);
var G__13323 = null;
var G__13324 = (0);
var G__13325 = (0);
seq__12963_13239 = G__13322;
chunk__12965_13240 = G__13323;
count__12966_13241 = G__13324;
i__12967_13242 = G__13325;
continue;
} else {
var G__13326 = cljs.core.next(seq__12963_13284__$1);
var G__13327 = null;
var G__13328 = (0);
var G__13329 = (0);
seq__12963_13239 = G__13326;
chunk__12965_13240 = G__13327;
count__12966_13241 = G__13328;
i__12967_13242 = G__13329;
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
var len__5726__auto___13330 = arguments.length;
var i__5727__auto___13331 = (0);
while(true){
if((i__5727__auto___13331 < len__5726__auto___13330)){
args__5732__auto__.push((arguments[i__5727__auto___13331]));

var G__13332 = (i__5727__auto___13331 + (1));
i__5727__auto___13331 = G__13332;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12993){
var G__12994 = cljs.core.first(seq12993);
var seq12993__$1 = cljs.core.next(seq12993);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12994,seq12993__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
