goog.provide('ctype.client');
ctype.client.ws_connection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
ctype.client.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Connecting..."], null));
ctype.client.send_update_BANG_ = (function ctype$client$send_update_BANG_(new_data){
if(cljs.core.truth_(cljs.core.deref(ctype.client.ws_connection))){
return cljs.core.deref(ctype.client.ws_connection).send(JSON.stringify(cljs.core.clj__GT_js(new_data)));
} else {
return null;
}
});
ctype.client.connect_websocket_BANG_ = (function ctype$client$connect_websocket_BANG_(){
var ws = (new WebSocket("ws://localhost:8090"));
cljs.core.reset_BANG_(ctype.client.ws_connection,ws);

(ws.onmessage = (function (event){
return cljs.core.reset_BANG_(ctype.client.app_state,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(event.data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
}));

return (ws.onclose = (function (){
cljs.core.reset_BANG_(ctype.client.ws_connection,null);

return setTimeout(ctype.client.connect_websocket_BANG_,(1000));
}));
});
ctype.client.app = (function ctype$client$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"CType NW.js Demo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message-box","div.message-box",1411849984),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ctype.client.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12377_SHARP_){
var new_value = p1__12377_SHARP_.target.value;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ctype.client.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"message","message",-406056002),new_value);

return ctype.client.send_update_BANG_(cljs.core.deref(ctype.client.app_state));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Current message: ",new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ctype.client.app_state))], null)], null)], null);
});
ctype.client.init = (function ctype$client$init(){
ctype.client.connect_websocket_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctype.client.app], null),document.getElementById("app"));
});
goog.exportSymbol('ctype.client.init', ctype.client.init);

//# sourceMappingURL=ctype.client.js.map
