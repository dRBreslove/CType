goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18411 = (function (f,blockable,meta18412){
this.f = f;
this.blockable = blockable;
this.meta18412 = meta18412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18413,meta18412__$1){
var self__ = this;
var _18413__$1 = this;
return (new cljs.core.async.t_cljs$core$async18411(self__.f,self__.blockable,meta18412__$1));
}));

(cljs.core.async.t_cljs$core$async18411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18413){
var self__ = this;
var _18413__$1 = this;
return self__.meta18412;
}));

(cljs.core.async.t_cljs$core$async18411.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18411.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18411.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18411.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18412","meta18412",-1428078218,null)], null);
}));

(cljs.core.async.t_cljs$core$async18411.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18411");

(cljs.core.async.t_cljs$core$async18411.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18411");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18411.
 */
cljs.core.async.__GT_t_cljs$core$async18411 = (function cljs$core$async$__GT_t_cljs$core$async18411(f,blockable,meta18412){
return (new cljs.core.async.t_cljs$core$async18411(f,blockable,meta18412));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18410 = arguments.length;
switch (G__18410) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async18411(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18456 = arguments.length;
switch (G__18456) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18486 = arguments.length;
switch (G__18486) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18530 = arguments.length;
switch (G__18530) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20703 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20703) : fn1.call(null,val_20703));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20703) : fn1.call(null,val_20703));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18556 = arguments.length;
switch (G__18556) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___20708 = n;
var x_20709 = (0);
while(true){
if((x_20709 < n__5593__auto___20708)){
(a[x_20709] = x_20709);

var G__20710 = (x_20709 + (1));
x_20709 = G__20710;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18582 = (function (flag,meta18583){
this.flag = flag;
this.meta18583 = meta18583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18584,meta18583__$1){
var self__ = this;
var _18584__$1 = this;
return (new cljs.core.async.t_cljs$core$async18582(self__.flag,meta18583__$1));
}));

(cljs.core.async.t_cljs$core$async18582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18584){
var self__ = this;
var _18584__$1 = this;
return self__.meta18583;
}));

(cljs.core.async.t_cljs$core$async18582.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18583","meta18583",-2033595732,null)], null);
}));

(cljs.core.async.t_cljs$core$async18582.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18582");

(cljs.core.async.t_cljs$core$async18582.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18582");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18582.
 */
cljs.core.async.__GT_t_cljs$core$async18582 = (function cljs$core$async$__GT_t_cljs$core$async18582(flag,meta18583){
return (new cljs.core.async.t_cljs$core$async18582(flag,meta18583));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async18582(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18586 = (function (flag,cb,meta18587){
this.flag = flag;
this.cb = cb;
this.meta18587 = meta18587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18588,meta18587__$1){
var self__ = this;
var _18588__$1 = this;
return (new cljs.core.async.t_cljs$core$async18586(self__.flag,self__.cb,meta18587__$1));
}));

(cljs.core.async.t_cljs$core$async18586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18588){
var self__ = this;
var _18588__$1 = this;
return self__.meta18587;
}));

(cljs.core.async.t_cljs$core$async18586.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18586.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18587","meta18587",-726639560,null)], null);
}));

(cljs.core.async.t_cljs$core$async18586.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18586");

(cljs.core.async.t_cljs$core$async18586.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18586");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18586.
 */
cljs.core.async.__GT_t_cljs$core$async18586 = (function cljs$core$async$__GT_t_cljs$core$async18586(flag,cb,meta18587){
return (new cljs.core.async.t_cljs$core$async18586(flag,cb,meta18587));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async18586(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18590_SHARP_){
var G__18593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18590_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18593) : fret.call(null,G__18593));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18591_SHARP_){
var G__18594 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18591_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18594) : fret.call(null,G__18594));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20711 = (i + (1));
i = G__20711;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20712 = arguments.length;
var i__5727__auto___20713 = (0);
while(true){
if((i__5727__auto___20713 < len__5726__auto___20712)){
args__5732__auto__.push((arguments[i__5727__auto___20713]));

var G__20714 = (i__5727__auto___20713 + (1));
i__5727__auto___20713 = G__20714;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18599){
var map__18600 = p__18599;
var map__18600__$1 = cljs.core.__destructure_map(map__18600);
var opts = map__18600__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18596){
var G__18597 = cljs.core.first(seq18596);
var seq18596__$1 = cljs.core.next(seq18596);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18597,seq18596__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18603 = arguments.length;
switch (G__18603) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18305__auto___20718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_18632){
var state_val_18633 = (state_18632[(1)]);
if((state_val_18633 === (7))){
var inst_18628 = (state_18632[(2)]);
var state_18632__$1 = state_18632;
var statearr_18637_20719 = state_18632__$1;
(statearr_18637_20719[(2)] = inst_18628);

(statearr_18637_20719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18633 === (1))){
var state_18632__$1 = state_18632;
var statearr_18638_20720 = state_18632__$1;
(statearr_18638_20720[(2)] = null);

(statearr_18638_20720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18633 === (4))){
var inst_18611 = (state_18632[(7)]);
var inst_18611__$1 = (state_18632[(2)]);
var inst_18612 = (inst_18611__$1 == null);
var state_18632__$1 = (function (){var statearr_18639 = state_18632;
(statearr_18639[(7)] = inst_18611__$1);

return statearr_18639;
})();
if(cljs.core.truth_(inst_18612)){
var statearr_18640_20721 = state_18632__$1;
(statearr_18640_20721[(1)] = (5));

} else {
var statearr_18641_20722 = state_18632__$1;
(statearr_18641_20722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18633 === (13))){
var state_18632__$1 = state_18632;
var statearr_18643_20723 = state_18632__$1;
(statearr_18643_20723[(2)] = null);

(statearr_18643_20723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18633 === (6))){
var inst_18611 = (state_18632[(7)]);
var state_18632__$1 = state_18632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18632__$1,(11),to,inst_18611);
} else {
if((state_val_18633 === (3))){
var inst_18630 = (state_18632[(2)]);
var state_18632__$1 = state_18632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18632__$1,inst_18630);
} else {
if((state_val_18633 === (12))){
var state_18632__$1 = state_18632;
var statearr_18645_20724 = state_18632__$1;
(statearr_18645_20724[(2)] = null);

(statearr_18645_20724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18633 === (2))){
var state_18632__$1 = state_18632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18632__$1,(4),from);
} else {
if((state_val_18633 === (11))){
var inst_18621 = (state_18632[(2)]);
var state_18632__$1 = state_18632;
if(cljs.core.truth_(inst_18621)){
var statearr_18646_20729 = state_18632__$1;
(statearr_18646_20729[(1)] = (12));

} else {
var statearr_18647_20730 = state_18632__$1;
(statearr_18647_20730[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18633 === (9))){
var state_18632__$1 = state_18632;
var statearr_18648_20731 = state_18632__$1;
(statearr_18648_20731[(2)] = null);

(statearr_18648_20731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18633 === (5))){
var state_18632__$1 = state_18632;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18649_20732 = state_18632__$1;
(statearr_18649_20732[(1)] = (8));

} else {
var statearr_18650_20733 = state_18632__$1;
(statearr_18650_20733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18633 === (14))){
var inst_18626 = (state_18632[(2)]);
var state_18632__$1 = state_18632;
var statearr_18651_20734 = state_18632__$1;
(statearr_18651_20734[(2)] = inst_18626);

(statearr_18651_20734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18633 === (10))){
var inst_18618 = (state_18632[(2)]);
var state_18632__$1 = state_18632;
var statearr_18652_20735 = state_18632__$1;
(statearr_18652_20735[(2)] = inst_18618);

(statearr_18652_20735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18633 === (8))){
var inst_18615 = cljs.core.async.close_BANG_(to);
var state_18632__$1 = state_18632;
var statearr_18653_20740 = state_18632__$1;
(statearr_18653_20740[(2)] = inst_18615);

(statearr_18653_20740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18000__auto__ = null;
var cljs$core$async$state_machine__18000__auto____0 = (function (){
var statearr_18654 = [null,null,null,null,null,null,null,null];
(statearr_18654[(0)] = cljs$core$async$state_machine__18000__auto__);

(statearr_18654[(1)] = (1));

return statearr_18654;
});
var cljs$core$async$state_machine__18000__auto____1 = (function (state_18632){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_18632);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e18655){var ex__18003__auto__ = e18655;
var statearr_18656_20741 = state_18632;
(statearr_18656_20741[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_18632[(4)]))){
var statearr_18657_20742 = state_18632;
(statearr_18657_20742[(1)] = cljs.core.first((state_18632[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20743 = state_18632;
state_18632 = G__20743;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$state_machine__18000__auto__ = function(state_18632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18000__auto____1.call(this,state_18632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18000__auto____0;
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18000__auto____1;
return cljs$core$async$state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_18658 = f__18306__auto__();
(statearr_18658[(6)] = c__18305__auto___20718);

return statearr_18658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__18660){
var vec__18661 = p__18660;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18661,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18661,(1),null);
var job = vec__18661;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18305__auto___20744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_18668){
var state_val_18669 = (state_18668[(1)]);
if((state_val_18669 === (1))){
var state_18668__$1 = state_18668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18668__$1,(2),res,v);
} else {
if((state_val_18669 === (2))){
var inst_18665 = (state_18668[(2)]);
var inst_18666 = cljs.core.async.close_BANG_(res);
var state_18668__$1 = (function (){var statearr_18671 = state_18668;
(statearr_18671[(7)] = inst_18665);

return statearr_18671;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18668__$1,inst_18666);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____0 = (function (){
var statearr_18672 = [null,null,null,null,null,null,null,null];
(statearr_18672[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__);

(statearr_18672[(1)] = (1));

return statearr_18672;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____1 = (function (state_18668){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_18668);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e18673){var ex__18003__auto__ = e18673;
var statearr_18674_20745 = state_18668;
(statearr_18674_20745[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_18668[(4)]))){
var statearr_18675_20746 = state_18668;
(statearr_18675_20746[(1)] = cljs.core.first((state_18668[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20747 = state_18668;
state_18668 = G__20747;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__ = function(state_18668){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____1.call(this,state_18668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_18678 = f__18306__auto__();
(statearr_18678[(6)] = c__18305__auto___20744);

return statearr_18678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18679){
var vec__18680 = p__18679;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18680,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18680,(1),null);
var job = vec__18680;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___20748 = n;
var __20749 = (0);
while(true){
if((__20749 < n__5593__auto___20748)){
var G__18683_20750 = type;
var G__18683_20751__$1 = (((G__18683_20750 instanceof cljs.core.Keyword))?G__18683_20750.fqn:null);
switch (G__18683_20751__$1) {
case "compute":
var c__18305__auto___20753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20749,c__18305__auto___20753,G__18683_20750,G__18683_20751__$1,n__5593__auto___20748,jobs,results,process__$1,async){
return (function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = ((function (__20749,c__18305__auto___20753,G__18683_20750,G__18683_20751__$1,n__5593__auto___20748,jobs,results,process__$1,async){
return (function (state_18696){
var state_val_18697 = (state_18696[(1)]);
if((state_val_18697 === (1))){
var state_18696__$1 = state_18696;
var statearr_18699_20754 = state_18696__$1;
(statearr_18699_20754[(2)] = null);

(statearr_18699_20754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (2))){
var state_18696__$1 = state_18696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18696__$1,(4),jobs);
} else {
if((state_val_18697 === (3))){
var inst_18694 = (state_18696[(2)]);
var state_18696__$1 = state_18696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18696__$1,inst_18694);
} else {
if((state_val_18697 === (4))){
var inst_18686 = (state_18696[(2)]);
var inst_18687 = process__$1(inst_18686);
var state_18696__$1 = state_18696;
if(cljs.core.truth_(inst_18687)){
var statearr_18701_20755 = state_18696__$1;
(statearr_18701_20755[(1)] = (5));

} else {
var statearr_18702_20756 = state_18696__$1;
(statearr_18702_20756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (5))){
var state_18696__$1 = state_18696;
var statearr_18703_20757 = state_18696__$1;
(statearr_18703_20757[(2)] = null);

(statearr_18703_20757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (6))){
var state_18696__$1 = state_18696;
var statearr_18704_20758 = state_18696__$1;
(statearr_18704_20758[(2)] = null);

(statearr_18704_20758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (7))){
var inst_18692 = (state_18696[(2)]);
var state_18696__$1 = state_18696;
var statearr_18705_20759 = state_18696__$1;
(statearr_18705_20759[(2)] = inst_18692);

(statearr_18705_20759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20749,c__18305__auto___20753,G__18683_20750,G__18683_20751__$1,n__5593__auto___20748,jobs,results,process__$1,async))
;
return ((function (__20749,switch__17999__auto__,c__18305__auto___20753,G__18683_20750,G__18683_20751__$1,n__5593__auto___20748,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____0 = (function (){
var statearr_18706 = [null,null,null,null,null,null,null];
(statearr_18706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__);

(statearr_18706[(1)] = (1));

return statearr_18706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____1 = (function (state_18696){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_18696);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e18707){var ex__18003__auto__ = e18707;
var statearr_18708_20761 = state_18696;
(statearr_18708_20761[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_18696[(4)]))){
var statearr_18709_20762 = state_18696;
(statearr_18709_20762[(1)] = cljs.core.first((state_18696[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20763 = state_18696;
state_18696 = G__20763;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__ = function(state_18696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____1.call(this,state_18696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__;
})()
;})(__20749,switch__17999__auto__,c__18305__auto___20753,G__18683_20750,G__18683_20751__$1,n__5593__auto___20748,jobs,results,process__$1,async))
})();
var state__18307__auto__ = (function (){var statearr_18710 = f__18306__auto__();
(statearr_18710[(6)] = c__18305__auto___20753);

return statearr_18710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
});})(__20749,c__18305__auto___20753,G__18683_20750,G__18683_20751__$1,n__5593__auto___20748,jobs,results,process__$1,async))
);


break;
case "async":
var c__18305__auto___20764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20749,c__18305__auto___20764,G__18683_20750,G__18683_20751__$1,n__5593__auto___20748,jobs,results,process__$1,async){
return (function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = ((function (__20749,c__18305__auto___20764,G__18683_20750,G__18683_20751__$1,n__5593__auto___20748,jobs,results,process__$1,async){
return (function (state_18725){
var state_val_18726 = (state_18725[(1)]);
if((state_val_18726 === (1))){
var state_18725__$1 = state_18725;
var statearr_18727_20765 = state_18725__$1;
(statearr_18727_20765[(2)] = null);

(statearr_18727_20765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18726 === (2))){
var state_18725__$1 = state_18725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18725__$1,(4),jobs);
} else {
if((state_val_18726 === (3))){
var inst_18723 = (state_18725[(2)]);
var state_18725__$1 = state_18725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18725__$1,inst_18723);
} else {
if((state_val_18726 === (4))){
var inst_18714 = (state_18725[(2)]);
var inst_18715 = async(inst_18714);
var state_18725__$1 = state_18725;
if(cljs.core.truth_(inst_18715)){
var statearr_18728_20766 = state_18725__$1;
(statearr_18728_20766[(1)] = (5));

} else {
var statearr_18729_20767 = state_18725__$1;
(statearr_18729_20767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18726 === (5))){
var state_18725__$1 = state_18725;
var statearr_18730_20768 = state_18725__$1;
(statearr_18730_20768[(2)] = null);

(statearr_18730_20768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18726 === (6))){
var state_18725__$1 = state_18725;
var statearr_18731_20769 = state_18725__$1;
(statearr_18731_20769[(2)] = null);

(statearr_18731_20769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18726 === (7))){
var inst_18721 = (state_18725[(2)]);
var state_18725__$1 = state_18725;
var statearr_18732_20771 = state_18725__$1;
(statearr_18732_20771[(2)] = inst_18721);

(statearr_18732_20771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20749,c__18305__auto___20764,G__18683_20750,G__18683_20751__$1,n__5593__auto___20748,jobs,results,process__$1,async))
;
return ((function (__20749,switch__17999__auto__,c__18305__auto___20764,G__18683_20750,G__18683_20751__$1,n__5593__auto___20748,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____0 = (function (){
var statearr_18733 = [null,null,null,null,null,null,null];
(statearr_18733[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__);

(statearr_18733[(1)] = (1));

return statearr_18733;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____1 = (function (state_18725){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_18725);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e18734){var ex__18003__auto__ = e18734;
var statearr_18735_20772 = state_18725;
(statearr_18735_20772[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_18725[(4)]))){
var statearr_18736_20774 = state_18725;
(statearr_18736_20774[(1)] = cljs.core.first((state_18725[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20775 = state_18725;
state_18725 = G__20775;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__ = function(state_18725){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____1.call(this,state_18725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__;
})()
;})(__20749,switch__17999__auto__,c__18305__auto___20764,G__18683_20750,G__18683_20751__$1,n__5593__auto___20748,jobs,results,process__$1,async))
})();
var state__18307__auto__ = (function (){var statearr_18737 = f__18306__auto__();
(statearr_18737[(6)] = c__18305__auto___20764);

return statearr_18737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
});})(__20749,c__18305__auto___20764,G__18683_20750,G__18683_20751__$1,n__5593__auto___20748,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18683_20751__$1)].join('')));

}

var G__20776 = (__20749 + (1));
__20749 = G__20776;
continue;
} else {
}
break;
}

var c__18305__auto___20777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_18765){
var state_val_18766 = (state_18765[(1)]);
if((state_val_18766 === (7))){
var inst_18759 = (state_18765[(2)]);
var state_18765__$1 = state_18765;
var statearr_18770_20778 = state_18765__$1;
(statearr_18770_20778[(2)] = inst_18759);

(statearr_18770_20778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18766 === (1))){
var state_18765__$1 = state_18765;
var statearr_18771_20779 = state_18765__$1;
(statearr_18771_20779[(2)] = null);

(statearr_18771_20779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18766 === (4))){
var inst_18741 = (state_18765[(7)]);
var inst_18741__$1 = (state_18765[(2)]);
var inst_18743 = (inst_18741__$1 == null);
var state_18765__$1 = (function (){var statearr_18772 = state_18765;
(statearr_18772[(7)] = inst_18741__$1);

return statearr_18772;
})();
if(cljs.core.truth_(inst_18743)){
var statearr_18773_20780 = state_18765__$1;
(statearr_18773_20780[(1)] = (5));

} else {
var statearr_18775_20781 = state_18765__$1;
(statearr_18775_20781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18766 === (6))){
var inst_18741 = (state_18765[(7)]);
var inst_18748 = (state_18765[(8)]);
var inst_18748__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18749 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18750 = [inst_18741,inst_18748__$1];
var inst_18751 = (new cljs.core.PersistentVector(null,2,(5),inst_18749,inst_18750,null));
var state_18765__$1 = (function (){var statearr_18787 = state_18765;
(statearr_18787[(8)] = inst_18748__$1);

return statearr_18787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18765__$1,(8),jobs,inst_18751);
} else {
if((state_val_18766 === (3))){
var inst_18762 = (state_18765[(2)]);
var state_18765__$1 = state_18765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18765__$1,inst_18762);
} else {
if((state_val_18766 === (2))){
var state_18765__$1 = state_18765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18765__$1,(4),from);
} else {
if((state_val_18766 === (9))){
var inst_18755 = (state_18765[(2)]);
var state_18765__$1 = (function (){var statearr_18809 = state_18765;
(statearr_18809[(9)] = inst_18755);

return statearr_18809;
})();
var statearr_18814_20782 = state_18765__$1;
(statearr_18814_20782[(2)] = null);

(statearr_18814_20782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18766 === (5))){
var inst_18746 = cljs.core.async.close_BANG_(jobs);
var state_18765__$1 = state_18765;
var statearr_18817_20783 = state_18765__$1;
(statearr_18817_20783[(2)] = inst_18746);

(statearr_18817_20783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18766 === (8))){
var inst_18748 = (state_18765[(8)]);
var inst_18753 = (state_18765[(2)]);
var state_18765__$1 = (function (){var statearr_18819 = state_18765;
(statearr_18819[(10)] = inst_18753);

return statearr_18819;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18765__$1,(9),results,inst_18748);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____0 = (function (){
var statearr_18824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__);

(statearr_18824[(1)] = (1));

return statearr_18824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____1 = (function (state_18765){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_18765);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e18826){var ex__18003__auto__ = e18826;
var statearr_18827_20786 = state_18765;
(statearr_18827_20786[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_18765[(4)]))){
var statearr_18830_20787 = state_18765;
(statearr_18830_20787[(1)] = cljs.core.first((state_18765[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20788 = state_18765;
state_18765 = G__20788;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__ = function(state_18765){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____1.call(this,state_18765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_18832 = f__18306__auto__();
(statearr_18832[(6)] = c__18305__auto___20777);

return statearr_18832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));


var c__18305__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_18913){
var state_val_18914 = (state_18913[(1)]);
if((state_val_18914 === (7))){
var inst_18908 = (state_18913[(2)]);
var state_18913__$1 = state_18913;
var statearr_18919_20790 = state_18913__$1;
(statearr_18919_20790[(2)] = inst_18908);

(statearr_18919_20790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (20))){
var state_18913__$1 = state_18913;
var statearr_18923_20791 = state_18913__$1;
(statearr_18923_20791[(2)] = null);

(statearr_18923_20791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (1))){
var state_18913__$1 = state_18913;
var statearr_18924_20792 = state_18913__$1;
(statearr_18924_20792[(2)] = null);

(statearr_18924_20792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (4))){
var inst_18836 = (state_18913[(7)]);
var inst_18836__$1 = (state_18913[(2)]);
var inst_18838 = (inst_18836__$1 == null);
var state_18913__$1 = (function (){var statearr_18928 = state_18913;
(statearr_18928[(7)] = inst_18836__$1);

return statearr_18928;
})();
if(cljs.core.truth_(inst_18838)){
var statearr_18930_20794 = state_18913__$1;
(statearr_18930_20794[(1)] = (5));

} else {
var statearr_18931_20795 = state_18913__$1;
(statearr_18931_20795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (15))){
var inst_18887 = (state_18913[(8)]);
var state_18913__$1 = state_18913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18913__$1,(18),to,inst_18887);
} else {
if((state_val_18914 === (21))){
var inst_18903 = (state_18913[(2)]);
var state_18913__$1 = state_18913;
var statearr_18933_20796 = state_18913__$1;
(statearr_18933_20796[(2)] = inst_18903);

(statearr_18933_20796[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (13))){
var inst_18905 = (state_18913[(2)]);
var state_18913__$1 = (function (){var statearr_18937 = state_18913;
(statearr_18937[(9)] = inst_18905);

return statearr_18937;
})();
var statearr_18938_20798 = state_18913__$1;
(statearr_18938_20798[(2)] = null);

(statearr_18938_20798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (6))){
var inst_18836 = (state_18913[(7)]);
var state_18913__$1 = state_18913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18913__$1,(11),inst_18836);
} else {
if((state_val_18914 === (17))){
var inst_18898 = (state_18913[(2)]);
var state_18913__$1 = state_18913;
if(cljs.core.truth_(inst_18898)){
var statearr_18943_20799 = state_18913__$1;
(statearr_18943_20799[(1)] = (19));

} else {
var statearr_18944_20800 = state_18913__$1;
(statearr_18944_20800[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (3))){
var inst_18910 = (state_18913[(2)]);
var state_18913__$1 = state_18913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18913__$1,inst_18910);
} else {
if((state_val_18914 === (12))){
var inst_18884 = (state_18913[(10)]);
var state_18913__$1 = state_18913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18913__$1,(14),inst_18884);
} else {
if((state_val_18914 === (2))){
var state_18913__$1 = state_18913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18913__$1,(4),results);
} else {
if((state_val_18914 === (19))){
var state_18913__$1 = state_18913;
var statearr_18949_20802 = state_18913__$1;
(statearr_18949_20802[(2)] = null);

(statearr_18949_20802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (11))){
var inst_18884 = (state_18913[(2)]);
var state_18913__$1 = (function (){var statearr_18951 = state_18913;
(statearr_18951[(10)] = inst_18884);

return statearr_18951;
})();
var statearr_18954_20803 = state_18913__$1;
(statearr_18954_20803[(2)] = null);

(statearr_18954_20803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (9))){
var state_18913__$1 = state_18913;
var statearr_18958_20806 = state_18913__$1;
(statearr_18958_20806[(2)] = null);

(statearr_18958_20806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (5))){
var state_18913__$1 = state_18913;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18961_20808 = state_18913__$1;
(statearr_18961_20808[(1)] = (8));

} else {
var statearr_18963_20809 = state_18913__$1;
(statearr_18963_20809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (14))){
var inst_18892 = (state_18913[(11)]);
var inst_18887 = (state_18913[(8)]);
var inst_18887__$1 = (state_18913[(2)]);
var inst_18890 = (inst_18887__$1 == null);
var inst_18892__$1 = cljs.core.not(inst_18890);
var state_18913__$1 = (function (){var statearr_18965 = state_18913;
(statearr_18965[(11)] = inst_18892__$1);

(statearr_18965[(8)] = inst_18887__$1);

return statearr_18965;
})();
if(inst_18892__$1){
var statearr_18969_20810 = state_18913__$1;
(statearr_18969_20810[(1)] = (15));

} else {
var statearr_18970_20812 = state_18913__$1;
(statearr_18970_20812[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (16))){
var inst_18892 = (state_18913[(11)]);
var state_18913__$1 = state_18913;
var statearr_18972_20813 = state_18913__$1;
(statearr_18972_20813[(2)] = inst_18892);

(statearr_18972_20813[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (10))){
var inst_18846 = (state_18913[(2)]);
var state_18913__$1 = state_18913;
var statearr_18976_20814 = state_18913__$1;
(statearr_18976_20814[(2)] = inst_18846);

(statearr_18976_20814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (18))){
var inst_18895 = (state_18913[(2)]);
var state_18913__$1 = state_18913;
var statearr_18977_20815 = state_18913__$1;
(statearr_18977_20815[(2)] = inst_18895);

(statearr_18977_20815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (8))){
var inst_18843 = cljs.core.async.close_BANG_(to);
var state_18913__$1 = state_18913;
var statearr_18980_20820 = state_18913__$1;
(statearr_18980_20820[(2)] = inst_18843);

(statearr_18980_20820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____0 = (function (){
var statearr_18984 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18984[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__);

(statearr_18984[(1)] = (1));

return statearr_18984;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____1 = (function (state_18913){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_18913);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e18988){var ex__18003__auto__ = e18988;
var statearr_18989_20821 = state_18913;
(statearr_18989_20821[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_18913[(4)]))){
var statearr_18991_20823 = state_18913;
(statearr_18991_20823[(1)] = cljs.core.first((state_18913[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20824 = state_18913;
state_18913 = G__20824;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__ = function(state_18913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____1.call(this,state_18913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18000__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_18995 = f__18306__auto__();
(statearr_18995[(6)] = c__18305__auto__);

return statearr_18995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));

return c__18305__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__19001 = arguments.length;
switch (G__19001) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__19019 = arguments.length;
switch (G__19019) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__19034 = arguments.length;
switch (G__19034) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__18305__auto___20836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_19060){
var state_val_19061 = (state_19060[(1)]);
if((state_val_19061 === (7))){
var inst_19056 = (state_19060[(2)]);
var state_19060__$1 = state_19060;
var statearr_19062_20841 = state_19060__$1;
(statearr_19062_20841[(2)] = inst_19056);

(statearr_19062_20841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (1))){
var state_19060__$1 = state_19060;
var statearr_19063_20842 = state_19060__$1;
(statearr_19063_20842[(2)] = null);

(statearr_19063_20842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (4))){
var inst_19037 = (state_19060[(7)]);
var inst_19037__$1 = (state_19060[(2)]);
var inst_19038 = (inst_19037__$1 == null);
var state_19060__$1 = (function (){var statearr_19064 = state_19060;
(statearr_19064[(7)] = inst_19037__$1);

return statearr_19064;
})();
if(cljs.core.truth_(inst_19038)){
var statearr_19065_20843 = state_19060__$1;
(statearr_19065_20843[(1)] = (5));

} else {
var statearr_19066_20844 = state_19060__$1;
(statearr_19066_20844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (13))){
var state_19060__$1 = state_19060;
var statearr_19067_20845 = state_19060__$1;
(statearr_19067_20845[(2)] = null);

(statearr_19067_20845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (6))){
var inst_19037 = (state_19060[(7)]);
var inst_19043 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19037) : p.call(null,inst_19037));
var state_19060__$1 = state_19060;
if(cljs.core.truth_(inst_19043)){
var statearr_19068_20851 = state_19060__$1;
(statearr_19068_20851[(1)] = (9));

} else {
var statearr_19069_20852 = state_19060__$1;
(statearr_19069_20852[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (3))){
var inst_19058 = (state_19060[(2)]);
var state_19060__$1 = state_19060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19060__$1,inst_19058);
} else {
if((state_val_19061 === (12))){
var state_19060__$1 = state_19060;
var statearr_19070_20853 = state_19060__$1;
(statearr_19070_20853[(2)] = null);

(statearr_19070_20853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (2))){
var state_19060__$1 = state_19060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19060__$1,(4),ch);
} else {
if((state_val_19061 === (11))){
var inst_19037 = (state_19060[(7)]);
var inst_19047 = (state_19060[(2)]);
var state_19060__$1 = state_19060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19060__$1,(8),inst_19047,inst_19037);
} else {
if((state_val_19061 === (9))){
var state_19060__$1 = state_19060;
var statearr_19073_20854 = state_19060__$1;
(statearr_19073_20854[(2)] = tc);

(statearr_19073_20854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (5))){
var inst_19040 = cljs.core.async.close_BANG_(tc);
var inst_19041 = cljs.core.async.close_BANG_(fc);
var state_19060__$1 = (function (){var statearr_19074 = state_19060;
(statearr_19074[(8)] = inst_19040);

return statearr_19074;
})();
var statearr_19075_20859 = state_19060__$1;
(statearr_19075_20859[(2)] = inst_19041);

(statearr_19075_20859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (14))){
var inst_19054 = (state_19060[(2)]);
var state_19060__$1 = state_19060;
var statearr_19076_20861 = state_19060__$1;
(statearr_19076_20861[(2)] = inst_19054);

(statearr_19076_20861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (10))){
var state_19060__$1 = state_19060;
var statearr_19077_20862 = state_19060__$1;
(statearr_19077_20862[(2)] = fc);

(statearr_19077_20862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (8))){
var inst_19049 = (state_19060[(2)]);
var state_19060__$1 = state_19060;
if(cljs.core.truth_(inst_19049)){
var statearr_19078_20863 = state_19060__$1;
(statearr_19078_20863[(1)] = (12));

} else {
var statearr_19079_20864 = state_19060__$1;
(statearr_19079_20864[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18000__auto__ = null;
var cljs$core$async$state_machine__18000__auto____0 = (function (){
var statearr_19080 = [null,null,null,null,null,null,null,null,null];
(statearr_19080[(0)] = cljs$core$async$state_machine__18000__auto__);

(statearr_19080[(1)] = (1));

return statearr_19080;
});
var cljs$core$async$state_machine__18000__auto____1 = (function (state_19060){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_19060);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e19081){var ex__18003__auto__ = e19081;
var statearr_19082_20869 = state_19060;
(statearr_19082_20869[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_19060[(4)]))){
var statearr_19083_20870 = state_19060;
(statearr_19083_20870[(1)] = cljs.core.first((state_19060[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20871 = state_19060;
state_19060 = G__20871;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$state_machine__18000__auto__ = function(state_19060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18000__auto____1.call(this,state_19060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18000__auto____0;
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18000__auto____1;
return cljs$core$async$state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_19084 = f__18306__auto__();
(statearr_19084[(6)] = c__18305__auto___20836);

return statearr_19084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18305__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_19106){
var state_val_19107 = (state_19106[(1)]);
if((state_val_19107 === (7))){
var inst_19102 = (state_19106[(2)]);
var state_19106__$1 = state_19106;
var statearr_19108_20877 = state_19106__$1;
(statearr_19108_20877[(2)] = inst_19102);

(statearr_19108_20877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (1))){
var inst_19085 = init;
var inst_19086 = inst_19085;
var state_19106__$1 = (function (){var statearr_19109 = state_19106;
(statearr_19109[(7)] = inst_19086);

return statearr_19109;
})();
var statearr_19110_20878 = state_19106__$1;
(statearr_19110_20878[(2)] = null);

(statearr_19110_20878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (4))){
var inst_19089 = (state_19106[(8)]);
var inst_19089__$1 = (state_19106[(2)]);
var inst_19090 = (inst_19089__$1 == null);
var state_19106__$1 = (function (){var statearr_19113 = state_19106;
(statearr_19113[(8)] = inst_19089__$1);

return statearr_19113;
})();
if(cljs.core.truth_(inst_19090)){
var statearr_19114_20879 = state_19106__$1;
(statearr_19114_20879[(1)] = (5));

} else {
var statearr_19115_20880 = state_19106__$1;
(statearr_19115_20880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (6))){
var inst_19093 = (state_19106[(9)]);
var inst_19086 = (state_19106[(7)]);
var inst_19089 = (state_19106[(8)]);
var inst_19093__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_19086,inst_19089) : f.call(null,inst_19086,inst_19089));
var inst_19094 = cljs.core.reduced_QMARK_(inst_19093__$1);
var state_19106__$1 = (function (){var statearr_19116 = state_19106;
(statearr_19116[(9)] = inst_19093__$1);

return statearr_19116;
})();
if(inst_19094){
var statearr_19117_20881 = state_19106__$1;
(statearr_19117_20881[(1)] = (8));

} else {
var statearr_19118_20882 = state_19106__$1;
(statearr_19118_20882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (3))){
var inst_19104 = (state_19106[(2)]);
var state_19106__$1 = state_19106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19106__$1,inst_19104);
} else {
if((state_val_19107 === (2))){
var state_19106__$1 = state_19106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19106__$1,(4),ch);
} else {
if((state_val_19107 === (9))){
var inst_19093 = (state_19106[(9)]);
var inst_19086 = inst_19093;
var state_19106__$1 = (function (){var statearr_19123 = state_19106;
(statearr_19123[(7)] = inst_19086);

return statearr_19123;
})();
var statearr_19128_20883 = state_19106__$1;
(statearr_19128_20883[(2)] = null);

(statearr_19128_20883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (5))){
var inst_19086 = (state_19106[(7)]);
var state_19106__$1 = state_19106;
var statearr_19130_20884 = state_19106__$1;
(statearr_19130_20884[(2)] = inst_19086);

(statearr_19130_20884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (10))){
var inst_19100 = (state_19106[(2)]);
var state_19106__$1 = state_19106;
var statearr_19131_20885 = state_19106__$1;
(statearr_19131_20885[(2)] = inst_19100);

(statearr_19131_20885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (8))){
var inst_19093 = (state_19106[(9)]);
var inst_19096 = cljs.core.deref(inst_19093);
var state_19106__$1 = state_19106;
var statearr_19132_20886 = state_19106__$1;
(statearr_19132_20886[(2)] = inst_19096);

(statearr_19132_20886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__18000__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18000__auto____0 = (function (){
var statearr_19133 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19133[(0)] = cljs$core$async$reduce_$_state_machine__18000__auto__);

(statearr_19133[(1)] = (1));

return statearr_19133;
});
var cljs$core$async$reduce_$_state_machine__18000__auto____1 = (function (state_19106){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_19106);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e19134){var ex__18003__auto__ = e19134;
var statearr_19135_20887 = state_19106;
(statearr_19135_20887[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_19106[(4)]))){
var statearr_19140_20888 = state_19106;
(statearr_19140_20888[(1)] = cljs.core.first((state_19106[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20889 = state_19106;
state_19106 = G__20889;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18000__auto__ = function(state_19106){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18000__auto____1.call(this,state_19106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18000__auto____0;
cljs$core$async$reduce_$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18000__auto____1;
return cljs$core$async$reduce_$_state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_19145 = f__18306__auto__();
(statearr_19145[(6)] = c__18305__auto__);

return statearr_19145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));

return c__18305__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__18305__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_19155){
var state_val_19156 = (state_19155[(1)]);
if((state_val_19156 === (1))){
var inst_19150 = cljs.core.async.reduce(f__$1,init,ch);
var state_19155__$1 = state_19155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19155__$1,(2),inst_19150);
} else {
if((state_val_19156 === (2))){
var inst_19152 = (state_19155[(2)]);
var inst_19153 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_19152) : f__$1.call(null,inst_19152));
var state_19155__$1 = state_19155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19155__$1,inst_19153);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__18000__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18000__auto____0 = (function (){
var statearr_19161 = [null,null,null,null,null,null,null];
(statearr_19161[(0)] = cljs$core$async$transduce_$_state_machine__18000__auto__);

(statearr_19161[(1)] = (1));

return statearr_19161;
});
var cljs$core$async$transduce_$_state_machine__18000__auto____1 = (function (state_19155){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_19155);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e19165){var ex__18003__auto__ = e19165;
var statearr_19166_20911 = state_19155;
(statearr_19166_20911[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_19155[(4)]))){
var statearr_19168_20912 = state_19155;
(statearr_19168_20912[(1)] = cljs.core.first((state_19155[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20913 = state_19155;
state_19155 = G__20913;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18000__auto__ = function(state_19155){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18000__auto____1.call(this,state_19155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18000__auto____0;
cljs$core$async$transduce_$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18000__auto____1;
return cljs$core$async$transduce_$_state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_19169 = f__18306__auto__();
(statearr_19169[(6)] = c__18305__auto__);

return statearr_19169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));

return c__18305__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__19172 = arguments.length;
switch (G__19172) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18305__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_19205){
var state_val_19206 = (state_19205[(1)]);
if((state_val_19206 === (7))){
var inst_19187 = (state_19205[(2)]);
var state_19205__$1 = state_19205;
var statearr_19211_20925 = state_19205__$1;
(statearr_19211_20925[(2)] = inst_19187);

(statearr_19211_20925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19206 === (1))){
var inst_19180 = cljs.core.seq(coll);
var inst_19181 = inst_19180;
var state_19205__$1 = (function (){var statearr_19214 = state_19205;
(statearr_19214[(7)] = inst_19181);

return statearr_19214;
})();
var statearr_19216_20929 = state_19205__$1;
(statearr_19216_20929[(2)] = null);

(statearr_19216_20929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19206 === (4))){
var inst_19181 = (state_19205[(7)]);
var inst_19185 = cljs.core.first(inst_19181);
var state_19205__$1 = state_19205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19205__$1,(7),ch,inst_19185);
} else {
if((state_val_19206 === (13))){
var inst_19199 = (state_19205[(2)]);
var state_19205__$1 = state_19205;
var statearr_19218_20931 = state_19205__$1;
(statearr_19218_20931[(2)] = inst_19199);

(statearr_19218_20931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19206 === (6))){
var inst_19190 = (state_19205[(2)]);
var state_19205__$1 = state_19205;
if(cljs.core.truth_(inst_19190)){
var statearr_19223_20932 = state_19205__$1;
(statearr_19223_20932[(1)] = (8));

} else {
var statearr_19225_20933 = state_19205__$1;
(statearr_19225_20933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19206 === (3))){
var inst_19203 = (state_19205[(2)]);
var state_19205__$1 = state_19205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19205__$1,inst_19203);
} else {
if((state_val_19206 === (12))){
var state_19205__$1 = state_19205;
var statearr_19234_20938 = state_19205__$1;
(statearr_19234_20938[(2)] = null);

(statearr_19234_20938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19206 === (2))){
var inst_19181 = (state_19205[(7)]);
var state_19205__$1 = state_19205;
if(cljs.core.truth_(inst_19181)){
var statearr_19242_20940 = state_19205__$1;
(statearr_19242_20940[(1)] = (4));

} else {
var statearr_19244_20941 = state_19205__$1;
(statearr_19244_20941[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19206 === (11))){
var inst_19196 = cljs.core.async.close_BANG_(ch);
var state_19205__$1 = state_19205;
var statearr_19249_20943 = state_19205__$1;
(statearr_19249_20943[(2)] = inst_19196);

(statearr_19249_20943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19206 === (9))){
var state_19205__$1 = state_19205;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19251_20945 = state_19205__$1;
(statearr_19251_20945[(1)] = (11));

} else {
var statearr_19256_20947 = state_19205__$1;
(statearr_19256_20947[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19206 === (5))){
var inst_19181 = (state_19205[(7)]);
var state_19205__$1 = state_19205;
var statearr_19265_20950 = state_19205__$1;
(statearr_19265_20950[(2)] = inst_19181);

(statearr_19265_20950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19206 === (10))){
var inst_19201 = (state_19205[(2)]);
var state_19205__$1 = state_19205;
var statearr_19270_20951 = state_19205__$1;
(statearr_19270_20951[(2)] = inst_19201);

(statearr_19270_20951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19206 === (8))){
var inst_19181 = (state_19205[(7)]);
var inst_19192 = cljs.core.next(inst_19181);
var inst_19181__$1 = inst_19192;
var state_19205__$1 = (function (){var statearr_19275 = state_19205;
(statearr_19275[(7)] = inst_19181__$1);

return statearr_19275;
})();
var statearr_19276_20957 = state_19205__$1;
(statearr_19276_20957[(2)] = null);

(statearr_19276_20957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18000__auto__ = null;
var cljs$core$async$state_machine__18000__auto____0 = (function (){
var statearr_19277 = [null,null,null,null,null,null,null,null];
(statearr_19277[(0)] = cljs$core$async$state_machine__18000__auto__);

(statearr_19277[(1)] = (1));

return statearr_19277;
});
var cljs$core$async$state_machine__18000__auto____1 = (function (state_19205){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_19205);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e19278){var ex__18003__auto__ = e19278;
var statearr_19279_20966 = state_19205;
(statearr_19279_20966[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_19205[(4)]))){
var statearr_19280_20967 = state_19205;
(statearr_19280_20967[(1)] = cljs.core.first((state_19205[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20968 = state_19205;
state_19205 = G__20968;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$state_machine__18000__auto__ = function(state_19205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18000__auto____1.call(this,state_19205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18000__auto____0;
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18000__auto____1;
return cljs$core$async$state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_19281 = f__18306__auto__();
(statearr_19281[(6)] = c__18305__auto__);

return statearr_19281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));

return c__18305__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19283 = arguments.length;
switch (G__19283) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20978 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20978(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20982 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20982(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20993 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20993(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20995 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20995(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19289 = (function (ch,cs,meta19290){
this.ch = ch;
this.cs = cs;
this.meta19290 = meta19290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19291,meta19290__$1){
var self__ = this;
var _19291__$1 = this;
return (new cljs.core.async.t_cljs$core$async19289(self__.ch,self__.cs,meta19290__$1));
}));

(cljs.core.async.t_cljs$core$async19289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19291){
var self__ = this;
var _19291__$1 = this;
return self__.meta19290;
}));

(cljs.core.async.t_cljs$core$async19289.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19289.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19289.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19289.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19289.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19290","meta19290",1142353392,null)], null);
}));

(cljs.core.async.t_cljs$core$async19289.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19289");

(cljs.core.async.t_cljs$core$async19289.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19289");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19289.
 */
cljs.core.async.__GT_t_cljs$core$async19289 = (function cljs$core$async$__GT_t_cljs$core$async19289(ch,cs,meta19290){
return (new cljs.core.async.t_cljs$core$async19289(ch,cs,meta19290));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async19289(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__18305__auto___21019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_19426){
var state_val_19427 = (state_19426[(1)]);
if((state_val_19427 === (7))){
var inst_19422 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
var statearr_19428_21020 = state_19426__$1;
(statearr_19428_21020[(2)] = inst_19422);

(statearr_19428_21020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (20))){
var inst_19327 = (state_19426[(7)]);
var inst_19339 = cljs.core.first(inst_19327);
var inst_19340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19339,(0),null);
var inst_19341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19339,(1),null);
var state_19426__$1 = (function (){var statearr_19429 = state_19426;
(statearr_19429[(8)] = inst_19340);

return statearr_19429;
})();
if(cljs.core.truth_(inst_19341)){
var statearr_19430_21021 = state_19426__$1;
(statearr_19430_21021[(1)] = (22));

} else {
var statearr_19431_21022 = state_19426__$1;
(statearr_19431_21022[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (27))){
var inst_19376 = (state_19426[(9)]);
var inst_19296 = (state_19426[(10)]);
var inst_19371 = (state_19426[(11)]);
var inst_19369 = (state_19426[(12)]);
var inst_19376__$1 = cljs.core._nth(inst_19369,inst_19371);
var inst_19377 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19376__$1,inst_19296,done);
var state_19426__$1 = (function (){var statearr_19432 = state_19426;
(statearr_19432[(9)] = inst_19376__$1);

return statearr_19432;
})();
if(cljs.core.truth_(inst_19377)){
var statearr_19433_21023 = state_19426__$1;
(statearr_19433_21023[(1)] = (30));

} else {
var statearr_19434_21024 = state_19426__$1;
(statearr_19434_21024[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (1))){
var state_19426__$1 = state_19426;
var statearr_19435_21025 = state_19426__$1;
(statearr_19435_21025[(2)] = null);

(statearr_19435_21025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (24))){
var inst_19327 = (state_19426[(7)]);
var inst_19346 = (state_19426[(2)]);
var inst_19347 = cljs.core.next(inst_19327);
var inst_19305 = inst_19347;
var inst_19306 = null;
var inst_19307 = (0);
var inst_19308 = (0);
var state_19426__$1 = (function (){var statearr_19436 = state_19426;
(statearr_19436[(13)] = inst_19305);

(statearr_19436[(14)] = inst_19346);

(statearr_19436[(15)] = inst_19307);

(statearr_19436[(16)] = inst_19308);

(statearr_19436[(17)] = inst_19306);

return statearr_19436;
})();
var statearr_19437_21037 = state_19426__$1;
(statearr_19437_21037[(2)] = null);

(statearr_19437_21037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (39))){
var state_19426__$1 = state_19426;
var statearr_19441_21038 = state_19426__$1;
(statearr_19441_21038[(2)] = null);

(statearr_19441_21038[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (4))){
var inst_19296 = (state_19426[(10)]);
var inst_19296__$1 = (state_19426[(2)]);
var inst_19297 = (inst_19296__$1 == null);
var state_19426__$1 = (function (){var statearr_19442 = state_19426;
(statearr_19442[(10)] = inst_19296__$1);

return statearr_19442;
})();
if(cljs.core.truth_(inst_19297)){
var statearr_19443_21039 = state_19426__$1;
(statearr_19443_21039[(1)] = (5));

} else {
var statearr_19445_21040 = state_19426__$1;
(statearr_19445_21040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (15))){
var inst_19305 = (state_19426[(13)]);
var inst_19307 = (state_19426[(15)]);
var inst_19308 = (state_19426[(16)]);
var inst_19306 = (state_19426[(17)]);
var inst_19323 = (state_19426[(2)]);
var inst_19324 = (inst_19308 + (1));
var tmp19438 = inst_19305;
var tmp19439 = inst_19307;
var tmp19440 = inst_19306;
var inst_19305__$1 = tmp19438;
var inst_19306__$1 = tmp19440;
var inst_19307__$1 = tmp19439;
var inst_19308__$1 = inst_19324;
var state_19426__$1 = (function (){var statearr_19447 = state_19426;
(statearr_19447[(13)] = inst_19305__$1);

(statearr_19447[(18)] = inst_19323);

(statearr_19447[(15)] = inst_19307__$1);

(statearr_19447[(16)] = inst_19308__$1);

(statearr_19447[(17)] = inst_19306__$1);

return statearr_19447;
})();
var statearr_19448_21055 = state_19426__$1;
(statearr_19448_21055[(2)] = null);

(statearr_19448_21055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (21))){
var inst_19350 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
var statearr_19452_21060 = state_19426__$1;
(statearr_19452_21060[(2)] = inst_19350);

(statearr_19452_21060[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (31))){
var inst_19376 = (state_19426[(9)]);
var inst_19380 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19376);
var state_19426__$1 = state_19426;
var statearr_19453_21069 = state_19426__$1;
(statearr_19453_21069[(2)] = inst_19380);

(statearr_19453_21069[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (32))){
var inst_19371 = (state_19426[(11)]);
var inst_19370 = (state_19426[(19)]);
var inst_19368 = (state_19426[(20)]);
var inst_19369 = (state_19426[(12)]);
var inst_19382 = (state_19426[(2)]);
var inst_19383 = (inst_19371 + (1));
var tmp19449 = inst_19370;
var tmp19450 = inst_19368;
var tmp19451 = inst_19369;
var inst_19368__$1 = tmp19450;
var inst_19369__$1 = tmp19451;
var inst_19370__$1 = tmp19449;
var inst_19371__$1 = inst_19383;
var state_19426__$1 = (function (){var statearr_19454 = state_19426;
(statearr_19454[(11)] = inst_19371__$1);

(statearr_19454[(19)] = inst_19370__$1);

(statearr_19454[(20)] = inst_19368__$1);

(statearr_19454[(21)] = inst_19382);

(statearr_19454[(12)] = inst_19369__$1);

return statearr_19454;
})();
var statearr_19456_21077 = state_19426__$1;
(statearr_19456_21077[(2)] = null);

(statearr_19456_21077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (40))){
var inst_19395 = (state_19426[(22)]);
var inst_19399 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19395);
var state_19426__$1 = state_19426;
var statearr_19457_21078 = state_19426__$1;
(statearr_19457_21078[(2)] = inst_19399);

(statearr_19457_21078[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (33))){
var inst_19386 = (state_19426[(23)]);
var inst_19388 = cljs.core.chunked_seq_QMARK_(inst_19386);
var state_19426__$1 = state_19426;
if(inst_19388){
var statearr_19459_21079 = state_19426__$1;
(statearr_19459_21079[(1)] = (36));

} else {
var statearr_19460_21084 = state_19426__$1;
(statearr_19460_21084[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (13))){
var inst_19317 = (state_19426[(24)]);
var inst_19320 = cljs.core.async.close_BANG_(inst_19317);
var state_19426__$1 = state_19426;
var statearr_19461_21085 = state_19426__$1;
(statearr_19461_21085[(2)] = inst_19320);

(statearr_19461_21085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (22))){
var inst_19340 = (state_19426[(8)]);
var inst_19343 = cljs.core.async.close_BANG_(inst_19340);
var state_19426__$1 = state_19426;
var statearr_19462_21086 = state_19426__$1;
(statearr_19462_21086[(2)] = inst_19343);

(statearr_19462_21086[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (36))){
var inst_19386 = (state_19426[(23)]);
var inst_19390 = cljs.core.chunk_first(inst_19386);
var inst_19391 = cljs.core.chunk_rest(inst_19386);
var inst_19392 = cljs.core.count(inst_19390);
var inst_19368 = inst_19391;
var inst_19369 = inst_19390;
var inst_19370 = inst_19392;
var inst_19371 = (0);
var state_19426__$1 = (function (){var statearr_19463 = state_19426;
(statearr_19463[(11)] = inst_19371);

(statearr_19463[(19)] = inst_19370);

(statearr_19463[(20)] = inst_19368);

(statearr_19463[(12)] = inst_19369);

return statearr_19463;
})();
var statearr_19464_21088 = state_19426__$1;
(statearr_19464_21088[(2)] = null);

(statearr_19464_21088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (41))){
var inst_19386 = (state_19426[(23)]);
var inst_19401 = (state_19426[(2)]);
var inst_19402 = cljs.core.next(inst_19386);
var inst_19368 = inst_19402;
var inst_19369 = null;
var inst_19370 = (0);
var inst_19371 = (0);
var state_19426__$1 = (function (){var statearr_19467 = state_19426;
(statearr_19467[(11)] = inst_19371);

(statearr_19467[(19)] = inst_19370);

(statearr_19467[(25)] = inst_19401);

(statearr_19467[(20)] = inst_19368);

(statearr_19467[(12)] = inst_19369);

return statearr_19467;
})();
var statearr_19468_21089 = state_19426__$1;
(statearr_19468_21089[(2)] = null);

(statearr_19468_21089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (43))){
var state_19426__$1 = state_19426;
var statearr_19469_21091 = state_19426__$1;
(statearr_19469_21091[(2)] = null);

(statearr_19469_21091[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (29))){
var inst_19410 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
var statearr_19470_21092 = state_19426__$1;
(statearr_19470_21092[(2)] = inst_19410);

(statearr_19470_21092[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (44))){
var inst_19419 = (state_19426[(2)]);
var state_19426__$1 = (function (){var statearr_19471 = state_19426;
(statearr_19471[(26)] = inst_19419);

return statearr_19471;
})();
var statearr_19472_21096 = state_19426__$1;
(statearr_19472_21096[(2)] = null);

(statearr_19472_21096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (6))){
var inst_19360 = (state_19426[(27)]);
var inst_19359 = cljs.core.deref(cs);
var inst_19360__$1 = cljs.core.keys(inst_19359);
var inst_19361 = cljs.core.count(inst_19360__$1);
var inst_19362 = cljs.core.reset_BANG_(dctr,inst_19361);
var inst_19367 = cljs.core.seq(inst_19360__$1);
var inst_19368 = inst_19367;
var inst_19369 = null;
var inst_19370 = (0);
var inst_19371 = (0);
var state_19426__$1 = (function (){var statearr_19473 = state_19426;
(statearr_19473[(11)] = inst_19371);

(statearr_19473[(19)] = inst_19370);

(statearr_19473[(20)] = inst_19368);

(statearr_19473[(28)] = inst_19362);

(statearr_19473[(27)] = inst_19360__$1);

(statearr_19473[(12)] = inst_19369);

return statearr_19473;
})();
var statearr_19474_21097 = state_19426__$1;
(statearr_19474_21097[(2)] = null);

(statearr_19474_21097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (28))){
var inst_19386 = (state_19426[(23)]);
var inst_19368 = (state_19426[(20)]);
var inst_19386__$1 = cljs.core.seq(inst_19368);
var state_19426__$1 = (function (){var statearr_19475 = state_19426;
(statearr_19475[(23)] = inst_19386__$1);

return statearr_19475;
})();
if(inst_19386__$1){
var statearr_19476_21098 = state_19426__$1;
(statearr_19476_21098[(1)] = (33));

} else {
var statearr_19477_21099 = state_19426__$1;
(statearr_19477_21099[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (25))){
var inst_19371 = (state_19426[(11)]);
var inst_19370 = (state_19426[(19)]);
var inst_19373 = (inst_19371 < inst_19370);
var inst_19374 = inst_19373;
var state_19426__$1 = state_19426;
if(cljs.core.truth_(inst_19374)){
var statearr_19478_21101 = state_19426__$1;
(statearr_19478_21101[(1)] = (27));

} else {
var statearr_19479_21102 = state_19426__$1;
(statearr_19479_21102[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (34))){
var state_19426__$1 = state_19426;
var statearr_19480_21103 = state_19426__$1;
(statearr_19480_21103[(2)] = null);

(statearr_19480_21103[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (17))){
var state_19426__$1 = state_19426;
var statearr_19481_21104 = state_19426__$1;
(statearr_19481_21104[(2)] = null);

(statearr_19481_21104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (3))){
var inst_19424 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19426__$1,inst_19424);
} else {
if((state_val_19427 === (12))){
var inst_19355 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
var statearr_19483_21105 = state_19426__$1;
(statearr_19483_21105[(2)] = inst_19355);

(statearr_19483_21105[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (2))){
var state_19426__$1 = state_19426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19426__$1,(4),ch);
} else {
if((state_val_19427 === (23))){
var state_19426__$1 = state_19426;
var statearr_19485_21112 = state_19426__$1;
(statearr_19485_21112[(2)] = null);

(statearr_19485_21112[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (35))){
var inst_19408 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
var statearr_19486_21113 = state_19426__$1;
(statearr_19486_21113[(2)] = inst_19408);

(statearr_19486_21113[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (19))){
var inst_19327 = (state_19426[(7)]);
var inst_19331 = cljs.core.chunk_first(inst_19327);
var inst_19332 = cljs.core.chunk_rest(inst_19327);
var inst_19333 = cljs.core.count(inst_19331);
var inst_19305 = inst_19332;
var inst_19306 = inst_19331;
var inst_19307 = inst_19333;
var inst_19308 = (0);
var state_19426__$1 = (function (){var statearr_19488 = state_19426;
(statearr_19488[(13)] = inst_19305);

(statearr_19488[(15)] = inst_19307);

(statearr_19488[(16)] = inst_19308);

(statearr_19488[(17)] = inst_19306);

return statearr_19488;
})();
var statearr_19492_21115 = state_19426__$1;
(statearr_19492_21115[(2)] = null);

(statearr_19492_21115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (11))){
var inst_19305 = (state_19426[(13)]);
var inst_19327 = (state_19426[(7)]);
var inst_19327__$1 = cljs.core.seq(inst_19305);
var state_19426__$1 = (function (){var statearr_19493 = state_19426;
(statearr_19493[(7)] = inst_19327__$1);

return statearr_19493;
})();
if(inst_19327__$1){
var statearr_19494_21121 = state_19426__$1;
(statearr_19494_21121[(1)] = (16));

} else {
var statearr_19495_21122 = state_19426__$1;
(statearr_19495_21122[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (9))){
var inst_19357 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
var statearr_19496_21123 = state_19426__$1;
(statearr_19496_21123[(2)] = inst_19357);

(statearr_19496_21123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (5))){
var inst_19303 = cljs.core.deref(cs);
var inst_19304 = cljs.core.seq(inst_19303);
var inst_19305 = inst_19304;
var inst_19306 = null;
var inst_19307 = (0);
var inst_19308 = (0);
var state_19426__$1 = (function (){var statearr_19498 = state_19426;
(statearr_19498[(13)] = inst_19305);

(statearr_19498[(15)] = inst_19307);

(statearr_19498[(16)] = inst_19308);

(statearr_19498[(17)] = inst_19306);

return statearr_19498;
})();
var statearr_19499_21124 = state_19426__$1;
(statearr_19499_21124[(2)] = null);

(statearr_19499_21124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (14))){
var state_19426__$1 = state_19426;
var statearr_19501_21125 = state_19426__$1;
(statearr_19501_21125[(2)] = null);

(statearr_19501_21125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (45))){
var inst_19416 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
var statearr_19502_21126 = state_19426__$1;
(statearr_19502_21126[(2)] = inst_19416);

(statearr_19502_21126[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (26))){
var inst_19360 = (state_19426[(27)]);
var inst_19412 = (state_19426[(2)]);
var inst_19413 = cljs.core.seq(inst_19360);
var state_19426__$1 = (function (){var statearr_19504 = state_19426;
(statearr_19504[(29)] = inst_19412);

return statearr_19504;
})();
if(inst_19413){
var statearr_19505_21133 = state_19426__$1;
(statearr_19505_21133[(1)] = (42));

} else {
var statearr_19506_21134 = state_19426__$1;
(statearr_19506_21134[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (16))){
var inst_19327 = (state_19426[(7)]);
var inst_19329 = cljs.core.chunked_seq_QMARK_(inst_19327);
var state_19426__$1 = state_19426;
if(inst_19329){
var statearr_19509_21137 = state_19426__$1;
(statearr_19509_21137[(1)] = (19));

} else {
var statearr_19510_21138 = state_19426__$1;
(statearr_19510_21138[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (38))){
var inst_19405 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
var statearr_19511_21139 = state_19426__$1;
(statearr_19511_21139[(2)] = inst_19405);

(statearr_19511_21139[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (30))){
var state_19426__$1 = state_19426;
var statearr_19512_21141 = state_19426__$1;
(statearr_19512_21141[(2)] = null);

(statearr_19512_21141[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (10))){
var inst_19308 = (state_19426[(16)]);
var inst_19306 = (state_19426[(17)]);
var inst_19316 = cljs.core._nth(inst_19306,inst_19308);
var inst_19317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19316,(0),null);
var inst_19318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19316,(1),null);
var state_19426__$1 = (function (){var statearr_19513 = state_19426;
(statearr_19513[(24)] = inst_19317);

return statearr_19513;
})();
if(cljs.core.truth_(inst_19318)){
var statearr_19514_21143 = state_19426__$1;
(statearr_19514_21143[(1)] = (13));

} else {
var statearr_19518_21144 = state_19426__$1;
(statearr_19518_21144[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (18))){
var inst_19353 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
var statearr_19519_21149 = state_19426__$1;
(statearr_19519_21149[(2)] = inst_19353);

(statearr_19519_21149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (42))){
var state_19426__$1 = state_19426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19426__$1,(45),dchan);
} else {
if((state_val_19427 === (37))){
var inst_19386 = (state_19426[(23)]);
var inst_19296 = (state_19426[(10)]);
var inst_19395 = (state_19426[(22)]);
var inst_19395__$1 = cljs.core.first(inst_19386);
var inst_19396 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19395__$1,inst_19296,done);
var state_19426__$1 = (function (){var statearr_19520 = state_19426;
(statearr_19520[(22)] = inst_19395__$1);

return statearr_19520;
})();
if(cljs.core.truth_(inst_19396)){
var statearr_19521_21154 = state_19426__$1;
(statearr_19521_21154[(1)] = (39));

} else {
var statearr_19522_21155 = state_19426__$1;
(statearr_19522_21155[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (8))){
var inst_19307 = (state_19426[(15)]);
var inst_19308 = (state_19426[(16)]);
var inst_19310 = (inst_19308 < inst_19307);
var inst_19311 = inst_19310;
var state_19426__$1 = state_19426;
if(cljs.core.truth_(inst_19311)){
var statearr_19523_21156 = state_19426__$1;
(statearr_19523_21156[(1)] = (10));

} else {
var statearr_19524_21157 = state_19426__$1;
(statearr_19524_21157[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__18000__auto__ = null;
var cljs$core$async$mult_$_state_machine__18000__auto____0 = (function (){
var statearr_19538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19538[(0)] = cljs$core$async$mult_$_state_machine__18000__auto__);

(statearr_19538[(1)] = (1));

return statearr_19538;
});
var cljs$core$async$mult_$_state_machine__18000__auto____1 = (function (state_19426){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_19426);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e19545){var ex__18003__auto__ = e19545;
var statearr_19546_21167 = state_19426;
(statearr_19546_21167[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_19426[(4)]))){
var statearr_19547_21171 = state_19426;
(statearr_19547_21171[(1)] = cljs.core.first((state_19426[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21172 = state_19426;
state_19426 = G__21172;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18000__auto__ = function(state_19426){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18000__auto____1.call(this,state_19426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18000__auto____0;
cljs$core$async$mult_$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18000__auto____1;
return cljs$core$async$mult_$_state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_19548 = f__18306__auto__();
(statearr_19548[(6)] = c__18305__auto___21019);

return statearr_19548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19560 = arguments.length;
switch (G__19560) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_21174 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_21174(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_21189 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_21189(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_21201 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_21201(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_21207 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_21207(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_21220 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_21220(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21241 = arguments.length;
var i__5727__auto___21242 = (0);
while(true){
if((i__5727__auto___21242 < len__5726__auto___21241)){
args__5732__auto__.push((arguments[i__5727__auto___21242]));

var G__21247 = (i__5727__auto___21242 + (1));
i__5727__auto___21242 = G__21247;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19580){
var map__19581 = p__19580;
var map__19581__$1 = cljs.core.__destructure_map(map__19581);
var opts = map__19581__$1;
var statearr_19582_21248 = state;
(statearr_19582_21248[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19583_21250 = state;
(statearr_19583_21250[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19586_21256 = state;
(statearr_19586_21256[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19576){
var G__19577 = cljs.core.first(seq19576);
var seq19576__$1 = cljs.core.next(seq19576);
var G__19578 = cljs.core.first(seq19576__$1);
var seq19576__$2 = cljs.core.next(seq19576__$1);
var G__19579 = cljs.core.first(seq19576__$2);
var seq19576__$3 = cljs.core.next(seq19576__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19577,G__19578,G__19579,seq19576__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19592 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19593){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19593 = meta19593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19594,meta19593__$1){
var self__ = this;
var _19594__$1 = this;
return (new cljs.core.async.t_cljs$core$async19592(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19593__$1));
}));

(cljs.core.async.t_cljs$core$async19592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19594){
var self__ = this;
var _19594__$1 = this;
return self__.meta19593;
}));

(cljs.core.async.t_cljs$core$async19592.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19592.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19592.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19592.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19592.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19592.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19592.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19592.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19593","meta19593",1940858486,null)], null);
}));

(cljs.core.async.t_cljs$core$async19592.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19592");

(cljs.core.async.t_cljs$core$async19592.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19592");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19592.
 */
cljs.core.async.__GT_t_cljs$core$async19592 = (function cljs$core$async$__GT_t_cljs$core$async19592(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19593){
return (new cljs.core.async.t_cljs$core$async19592(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19593));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async19592(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__18305__auto___21278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_19674){
var state_val_19675 = (state_19674[(1)]);
if((state_val_19675 === (7))){
var inst_19634 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
if(cljs.core.truth_(inst_19634)){
var statearr_19676_21279 = state_19674__$1;
(statearr_19676_21279[(1)] = (8));

} else {
var statearr_19677_21282 = state_19674__$1;
(statearr_19677_21282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (20))){
var inst_19627 = (state_19674[(7)]);
var state_19674__$1 = state_19674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19674__$1,(23),out,inst_19627);
} else {
if((state_val_19675 === (1))){
var inst_19607 = calc_state();
var inst_19608 = cljs.core.__destructure_map(inst_19607);
var inst_19609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19608,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19608,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19608,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19615 = inst_19607;
var state_19674__$1 = (function (){var statearr_19678 = state_19674;
(statearr_19678[(8)] = inst_19609);

(statearr_19678[(9)] = inst_19610);

(statearr_19678[(10)] = inst_19611);

(statearr_19678[(11)] = inst_19615);

return statearr_19678;
})();
var statearr_19683_21285 = state_19674__$1;
(statearr_19683_21285[(2)] = null);

(statearr_19683_21285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (24))){
var inst_19618 = (state_19674[(12)]);
var inst_19615 = inst_19618;
var state_19674__$1 = (function (){var statearr_19684 = state_19674;
(statearr_19684[(11)] = inst_19615);

return statearr_19684;
})();
var statearr_19685_21286 = state_19674__$1;
(statearr_19685_21286[(2)] = null);

(statearr_19685_21286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (4))){
var inst_19629 = (state_19674[(13)]);
var inst_19627 = (state_19674[(7)]);
var inst_19626 = (state_19674[(2)]);
var inst_19627__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19626,(0),null);
var inst_19628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19626,(1),null);
var inst_19629__$1 = (inst_19627__$1 == null);
var state_19674__$1 = (function (){var statearr_19686 = state_19674;
(statearr_19686[(13)] = inst_19629__$1);

(statearr_19686[(14)] = inst_19628);

(statearr_19686[(7)] = inst_19627__$1);

return statearr_19686;
})();
if(cljs.core.truth_(inst_19629__$1)){
var statearr_19688_21288 = state_19674__$1;
(statearr_19688_21288[(1)] = (5));

} else {
var statearr_19692_21289 = state_19674__$1;
(statearr_19692_21289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (15))){
var inst_19619 = (state_19674[(15)]);
var inst_19648 = (state_19674[(16)]);
var inst_19648__$1 = cljs.core.empty_QMARK_(inst_19619);
var state_19674__$1 = (function (){var statearr_19693 = state_19674;
(statearr_19693[(16)] = inst_19648__$1);

return statearr_19693;
})();
if(inst_19648__$1){
var statearr_19694_21291 = state_19674__$1;
(statearr_19694_21291[(1)] = (17));

} else {
var statearr_19695_21292 = state_19674__$1;
(statearr_19695_21292[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (21))){
var inst_19618 = (state_19674[(12)]);
var inst_19615 = inst_19618;
var state_19674__$1 = (function (){var statearr_19696 = state_19674;
(statearr_19696[(11)] = inst_19615);

return statearr_19696;
})();
var statearr_19697_21293 = state_19674__$1;
(statearr_19697_21293[(2)] = null);

(statearr_19697_21293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (13))){
var inst_19641 = (state_19674[(2)]);
var inst_19642 = calc_state();
var inst_19615 = inst_19642;
var state_19674__$1 = (function (){var statearr_19698 = state_19674;
(statearr_19698[(11)] = inst_19615);

(statearr_19698[(17)] = inst_19641);

return statearr_19698;
})();
var statearr_19699_21294 = state_19674__$1;
(statearr_19699_21294[(2)] = null);

(statearr_19699_21294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (22))){
var inst_19668 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19700_21295 = state_19674__$1;
(statearr_19700_21295[(2)] = inst_19668);

(statearr_19700_21295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (6))){
var inst_19628 = (state_19674[(14)]);
var inst_19632 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19628,change);
var state_19674__$1 = state_19674;
var statearr_19701_21296 = state_19674__$1;
(statearr_19701_21296[(2)] = inst_19632);

(statearr_19701_21296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (25))){
var state_19674__$1 = state_19674;
var statearr_19702_21297 = state_19674__$1;
(statearr_19702_21297[(2)] = null);

(statearr_19702_21297[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (17))){
var inst_19620 = (state_19674[(18)]);
var inst_19628 = (state_19674[(14)]);
var inst_19650 = (inst_19620.cljs$core$IFn$_invoke$arity$1 ? inst_19620.cljs$core$IFn$_invoke$arity$1(inst_19628) : inst_19620.call(null,inst_19628));
var inst_19651 = cljs.core.not(inst_19650);
var state_19674__$1 = state_19674;
var statearr_19703_21298 = state_19674__$1;
(statearr_19703_21298[(2)] = inst_19651);

(statearr_19703_21298[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (3))){
var inst_19672 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19674__$1,inst_19672);
} else {
if((state_val_19675 === (12))){
var state_19674__$1 = state_19674;
var statearr_19704_21299 = state_19674__$1;
(statearr_19704_21299[(2)] = null);

(statearr_19704_21299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (2))){
var inst_19615 = (state_19674[(11)]);
var inst_19618 = (state_19674[(12)]);
var inst_19618__$1 = cljs.core.__destructure_map(inst_19615);
var inst_19619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19618__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19618__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19618__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19674__$1 = (function (){var statearr_19705 = state_19674;
(statearr_19705[(18)] = inst_19620);

(statearr_19705[(15)] = inst_19619);

(statearr_19705[(12)] = inst_19618__$1);

return statearr_19705;
})();
return cljs.core.async.ioc_alts_BANG_(state_19674__$1,(4),inst_19621);
} else {
if((state_val_19675 === (23))){
var inst_19659 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
if(cljs.core.truth_(inst_19659)){
var statearr_19708_21302 = state_19674__$1;
(statearr_19708_21302[(1)] = (24));

} else {
var statearr_19709_21303 = state_19674__$1;
(statearr_19709_21303[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (19))){
var inst_19654 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19710_21304 = state_19674__$1;
(statearr_19710_21304[(2)] = inst_19654);

(statearr_19710_21304[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (11))){
var inst_19628 = (state_19674[(14)]);
var inst_19638 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19628);
var state_19674__$1 = state_19674;
var statearr_19711_21305 = state_19674__$1;
(statearr_19711_21305[(2)] = inst_19638);

(statearr_19711_21305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (9))){
var inst_19619 = (state_19674[(15)]);
var inst_19628 = (state_19674[(14)]);
var inst_19645 = (state_19674[(19)]);
var inst_19645__$1 = (inst_19619.cljs$core$IFn$_invoke$arity$1 ? inst_19619.cljs$core$IFn$_invoke$arity$1(inst_19628) : inst_19619.call(null,inst_19628));
var state_19674__$1 = (function (){var statearr_19715 = state_19674;
(statearr_19715[(19)] = inst_19645__$1);

return statearr_19715;
})();
if(cljs.core.truth_(inst_19645__$1)){
var statearr_19716_21306 = state_19674__$1;
(statearr_19716_21306[(1)] = (14));

} else {
var statearr_19717_21307 = state_19674__$1;
(statearr_19717_21307[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (5))){
var inst_19629 = (state_19674[(13)]);
var state_19674__$1 = state_19674;
var statearr_19718_21309 = state_19674__$1;
(statearr_19718_21309[(2)] = inst_19629);

(statearr_19718_21309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (14))){
var inst_19645 = (state_19674[(19)]);
var state_19674__$1 = state_19674;
var statearr_19719_21310 = state_19674__$1;
(statearr_19719_21310[(2)] = inst_19645);

(statearr_19719_21310[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (26))){
var inst_19664 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19720_21311 = state_19674__$1;
(statearr_19720_21311[(2)] = inst_19664);

(statearr_19720_21311[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (16))){
var inst_19656 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
if(cljs.core.truth_(inst_19656)){
var statearr_19721_21313 = state_19674__$1;
(statearr_19721_21313[(1)] = (20));

} else {
var statearr_19722_21316 = state_19674__$1;
(statearr_19722_21316[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (10))){
var inst_19670 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19723_21319 = state_19674__$1;
(statearr_19723_21319[(2)] = inst_19670);

(statearr_19723_21319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (18))){
var inst_19648 = (state_19674[(16)]);
var state_19674__$1 = state_19674;
var statearr_19724_21320 = state_19674__$1;
(statearr_19724_21320[(2)] = inst_19648);

(statearr_19724_21320[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (8))){
var inst_19627 = (state_19674[(7)]);
var inst_19636 = (inst_19627 == null);
var state_19674__$1 = state_19674;
if(cljs.core.truth_(inst_19636)){
var statearr_19725_21322 = state_19674__$1;
(statearr_19725_21322[(1)] = (11));

} else {
var statearr_19726_21323 = state_19674__$1;
(statearr_19726_21323[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__18000__auto__ = null;
var cljs$core$async$mix_$_state_machine__18000__auto____0 = (function (){
var statearr_19727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19727[(0)] = cljs$core$async$mix_$_state_machine__18000__auto__);

(statearr_19727[(1)] = (1));

return statearr_19727;
});
var cljs$core$async$mix_$_state_machine__18000__auto____1 = (function (state_19674){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_19674);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e19728){var ex__18003__auto__ = e19728;
var statearr_19729_21324 = state_19674;
(statearr_19729_21324[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_19674[(4)]))){
var statearr_19730_21326 = state_19674;
(statearr_19730_21326[(1)] = cljs.core.first((state_19674[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21330 = state_19674;
state_19674 = G__21330;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18000__auto__ = function(state_19674){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18000__auto____1.call(this,state_19674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18000__auto____0;
cljs$core$async$mix_$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18000__auto____1;
return cljs$core$async$mix_$_state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_19731 = f__18306__auto__();
(statearr_19731[(6)] = c__18305__auto___21278);

return statearr_19731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_21333 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_21333(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_21338 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_21338(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_21339 = (function() {
var G__21340 = null;
var G__21340__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__21340__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__21340 = function(p,v){
switch(arguments.length){
case 1:
return G__21340__1.call(this,p);
case 2:
return G__21340__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21340.cljs$core$IFn$_invoke$arity$1 = G__21340__1;
G__21340.cljs$core$IFn$_invoke$arity$2 = G__21340__2;
return G__21340;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19734 = arguments.length;
switch (G__19734) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21339(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21339(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19745 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19746){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19746 = meta19746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19747,meta19746__$1){
var self__ = this;
var _19747__$1 = this;
return (new cljs.core.async.t_cljs$core$async19745(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19746__$1));
}));

(cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19747){
var self__ = this;
var _19747__$1 = this;
return self__.meta19746;
}));

(cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19746","meta19746",1512922025,null)], null);
}));

(cljs.core.async.t_cljs$core$async19745.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19745");

(cljs.core.async.t_cljs$core$async19745.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19745");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19745.
 */
cljs.core.async.__GT_t_cljs$core$async19745 = (function cljs$core$async$__GT_t_cljs$core$async19745(ch,topic_fn,buf_fn,mults,ensure_mult,meta19746){
return (new cljs.core.async.t_cljs$core$async19745(ch,topic_fn,buf_fn,mults,ensure_mult,meta19746));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19740 = arguments.length;
switch (G__19740) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19738_SHARP_){
if(cljs.core.truth_((p1__19738_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19738_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19738_SHARP_.call(null,topic)))){
return p1__19738_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19738_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async19745(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__18305__auto___21349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_19859){
var state_val_19860 = (state_19859[(1)]);
if((state_val_19860 === (7))){
var inst_19849 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
var statearr_19861_21350 = state_19859__$1;
(statearr_19861_21350[(2)] = inst_19849);

(statearr_19861_21350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (20))){
var state_19859__$1 = state_19859;
var statearr_19862_21354 = state_19859__$1;
(statearr_19862_21354[(2)] = null);

(statearr_19862_21354[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (1))){
var state_19859__$1 = state_19859;
var statearr_19865_21356 = state_19859__$1;
(statearr_19865_21356[(2)] = null);

(statearr_19865_21356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (24))){
var inst_19832 = (state_19859[(7)]);
var inst_19841 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19832);
var state_19859__$1 = state_19859;
var statearr_19866_21357 = state_19859__$1;
(statearr_19866_21357[(2)] = inst_19841);

(statearr_19866_21357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (4))){
var inst_19770 = (state_19859[(8)]);
var inst_19770__$1 = (state_19859[(2)]);
var inst_19771 = (inst_19770__$1 == null);
var state_19859__$1 = (function (){var statearr_19868 = state_19859;
(statearr_19868[(8)] = inst_19770__$1);

return statearr_19868;
})();
if(cljs.core.truth_(inst_19771)){
var statearr_19869_21360 = state_19859__$1;
(statearr_19869_21360[(1)] = (5));

} else {
var statearr_19870_21361 = state_19859__$1;
(statearr_19870_21361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (15))){
var inst_19820 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
var statearr_19871_21363 = state_19859__$1;
(statearr_19871_21363[(2)] = inst_19820);

(statearr_19871_21363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (21))){
var inst_19846 = (state_19859[(2)]);
var state_19859__$1 = (function (){var statearr_19872 = state_19859;
(statearr_19872[(9)] = inst_19846);

return statearr_19872;
})();
var statearr_19873_21366 = state_19859__$1;
(statearr_19873_21366[(2)] = null);

(statearr_19873_21366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (13))){
var inst_19794 = (state_19859[(10)]);
var inst_19796 = cljs.core.chunked_seq_QMARK_(inst_19794);
var state_19859__$1 = state_19859;
if(inst_19796){
var statearr_19874_21367 = state_19859__$1;
(statearr_19874_21367[(1)] = (16));

} else {
var statearr_19875_21368 = state_19859__$1;
(statearr_19875_21368[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (22))){
var inst_19838 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
if(cljs.core.truth_(inst_19838)){
var statearr_19879_21374 = state_19859__$1;
(statearr_19879_21374[(1)] = (23));

} else {
var statearr_19880_21375 = state_19859__$1;
(statearr_19880_21375[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (6))){
var inst_19834 = (state_19859[(11)]);
var inst_19770 = (state_19859[(8)]);
var inst_19832 = (state_19859[(7)]);
var inst_19832__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19770) : topic_fn.call(null,inst_19770));
var inst_19833 = cljs.core.deref(mults);
var inst_19834__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19833,inst_19832__$1);
var state_19859__$1 = (function (){var statearr_19881 = state_19859;
(statearr_19881[(11)] = inst_19834__$1);

(statearr_19881[(7)] = inst_19832__$1);

return statearr_19881;
})();
if(cljs.core.truth_(inst_19834__$1)){
var statearr_19882_21377 = state_19859__$1;
(statearr_19882_21377[(1)] = (19));

} else {
var statearr_19883_21379 = state_19859__$1;
(statearr_19883_21379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (25))){
var inst_19843 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
var statearr_19884_21380 = state_19859__$1;
(statearr_19884_21380[(2)] = inst_19843);

(statearr_19884_21380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (17))){
var inst_19794 = (state_19859[(10)]);
var inst_19803 = cljs.core.first(inst_19794);
var inst_19804 = cljs.core.async.muxch_STAR_(inst_19803);
var inst_19805 = cljs.core.async.close_BANG_(inst_19804);
var inst_19812 = cljs.core.next(inst_19794);
var inst_19780 = inst_19812;
var inst_19781 = null;
var inst_19782 = (0);
var inst_19783 = (0);
var state_19859__$1 = (function (){var statearr_19885 = state_19859;
(statearr_19885[(12)] = inst_19805);

(statearr_19885[(13)] = inst_19780);

(statearr_19885[(14)] = inst_19783);

(statearr_19885[(15)] = inst_19781);

(statearr_19885[(16)] = inst_19782);

return statearr_19885;
})();
var statearr_19886_21381 = state_19859__$1;
(statearr_19886_21381[(2)] = null);

(statearr_19886_21381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (3))){
var inst_19851 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19859__$1,inst_19851);
} else {
if((state_val_19860 === (12))){
var inst_19822 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
var statearr_19887_21382 = state_19859__$1;
(statearr_19887_21382[(2)] = inst_19822);

(statearr_19887_21382[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (2))){
var state_19859__$1 = state_19859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19859__$1,(4),ch);
} else {
if((state_val_19860 === (23))){
var state_19859__$1 = state_19859;
var statearr_19888_21385 = state_19859__$1;
(statearr_19888_21385[(2)] = null);

(statearr_19888_21385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (19))){
var inst_19834 = (state_19859[(11)]);
var inst_19770 = (state_19859[(8)]);
var inst_19836 = cljs.core.async.muxch_STAR_(inst_19834);
var state_19859__$1 = state_19859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19859__$1,(22),inst_19836,inst_19770);
} else {
if((state_val_19860 === (11))){
var inst_19794 = (state_19859[(10)]);
var inst_19780 = (state_19859[(13)]);
var inst_19794__$1 = cljs.core.seq(inst_19780);
var state_19859__$1 = (function (){var statearr_19889 = state_19859;
(statearr_19889[(10)] = inst_19794__$1);

return statearr_19889;
})();
if(inst_19794__$1){
var statearr_19890_21386 = state_19859__$1;
(statearr_19890_21386[(1)] = (13));

} else {
var statearr_19891_21387 = state_19859__$1;
(statearr_19891_21387[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (9))){
var inst_19824 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
var statearr_19892_21388 = state_19859__$1;
(statearr_19892_21388[(2)] = inst_19824);

(statearr_19892_21388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (5))){
var inst_19777 = cljs.core.deref(mults);
var inst_19778 = cljs.core.vals(inst_19777);
var inst_19779 = cljs.core.seq(inst_19778);
var inst_19780 = inst_19779;
var inst_19781 = null;
var inst_19782 = (0);
var inst_19783 = (0);
var state_19859__$1 = (function (){var statearr_19893 = state_19859;
(statearr_19893[(13)] = inst_19780);

(statearr_19893[(14)] = inst_19783);

(statearr_19893[(15)] = inst_19781);

(statearr_19893[(16)] = inst_19782);

return statearr_19893;
})();
var statearr_19894_21389 = state_19859__$1;
(statearr_19894_21389[(2)] = null);

(statearr_19894_21389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (14))){
var state_19859__$1 = state_19859;
var statearr_19898_21390 = state_19859__$1;
(statearr_19898_21390[(2)] = null);

(statearr_19898_21390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (16))){
var inst_19794 = (state_19859[(10)]);
var inst_19798 = cljs.core.chunk_first(inst_19794);
var inst_19799 = cljs.core.chunk_rest(inst_19794);
var inst_19800 = cljs.core.count(inst_19798);
var inst_19780 = inst_19799;
var inst_19781 = inst_19798;
var inst_19782 = inst_19800;
var inst_19783 = (0);
var state_19859__$1 = (function (){var statearr_19899 = state_19859;
(statearr_19899[(13)] = inst_19780);

(statearr_19899[(14)] = inst_19783);

(statearr_19899[(15)] = inst_19781);

(statearr_19899[(16)] = inst_19782);

return statearr_19899;
})();
var statearr_19900_21391 = state_19859__$1;
(statearr_19900_21391[(2)] = null);

(statearr_19900_21391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (10))){
var inst_19780 = (state_19859[(13)]);
var inst_19783 = (state_19859[(14)]);
var inst_19781 = (state_19859[(15)]);
var inst_19782 = (state_19859[(16)]);
var inst_19788 = cljs.core._nth(inst_19781,inst_19783);
var inst_19789 = cljs.core.async.muxch_STAR_(inst_19788);
var inst_19790 = cljs.core.async.close_BANG_(inst_19789);
var inst_19791 = (inst_19783 + (1));
var tmp19895 = inst_19780;
var tmp19896 = inst_19781;
var tmp19897 = inst_19782;
var inst_19780__$1 = tmp19895;
var inst_19781__$1 = tmp19896;
var inst_19782__$1 = tmp19897;
var inst_19783__$1 = inst_19791;
var state_19859__$1 = (function (){var statearr_19901 = state_19859;
(statearr_19901[(13)] = inst_19780__$1);

(statearr_19901[(14)] = inst_19783__$1);

(statearr_19901[(15)] = inst_19781__$1);

(statearr_19901[(16)] = inst_19782__$1);

(statearr_19901[(17)] = inst_19790);

return statearr_19901;
})();
var statearr_19902_21395 = state_19859__$1;
(statearr_19902_21395[(2)] = null);

(statearr_19902_21395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (18))){
var inst_19817 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
var statearr_19903_21396 = state_19859__$1;
(statearr_19903_21396[(2)] = inst_19817);

(statearr_19903_21396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (8))){
var inst_19783 = (state_19859[(14)]);
var inst_19782 = (state_19859[(16)]);
var inst_19785 = (inst_19783 < inst_19782);
var inst_19786 = inst_19785;
var state_19859__$1 = state_19859;
if(cljs.core.truth_(inst_19786)){
var statearr_19904_21397 = state_19859__$1;
(statearr_19904_21397[(1)] = (10));

} else {
var statearr_19905_21398 = state_19859__$1;
(statearr_19905_21398[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18000__auto__ = null;
var cljs$core$async$state_machine__18000__auto____0 = (function (){
var statearr_19906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19906[(0)] = cljs$core$async$state_machine__18000__auto__);

(statearr_19906[(1)] = (1));

return statearr_19906;
});
var cljs$core$async$state_machine__18000__auto____1 = (function (state_19859){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_19859);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e19907){var ex__18003__auto__ = e19907;
var statearr_19908_21400 = state_19859;
(statearr_19908_21400[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_19859[(4)]))){
var statearr_19909_21401 = state_19859;
(statearr_19909_21401[(1)] = cljs.core.first((state_19859[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21402 = state_19859;
state_19859 = G__21402;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$state_machine__18000__auto__ = function(state_19859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18000__auto____1.call(this,state_19859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18000__auto____0;
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18000__auto____1;
return cljs$core$async$state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_19910 = f__18306__auto__();
(statearr_19910[(6)] = c__18305__auto___21349);

return statearr_19910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19917 = arguments.length;
switch (G__19917) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19925 = arguments.length;
switch (G__19925) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19927 = arguments.length;
switch (G__19927) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__18305__auto___21416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_19974){
var state_val_19975 = (state_19974[(1)]);
if((state_val_19975 === (7))){
var state_19974__$1 = state_19974;
var statearr_19978_21419 = state_19974__$1;
(statearr_19978_21419[(2)] = null);

(statearr_19978_21419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (1))){
var state_19974__$1 = state_19974;
var statearr_19979_21420 = state_19974__$1;
(statearr_19979_21420[(2)] = null);

(statearr_19979_21420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (4))){
var inst_19931 = (state_19974[(7)]);
var inst_19932 = (state_19974[(8)]);
var inst_19934 = (inst_19932 < inst_19931);
var state_19974__$1 = state_19974;
if(cljs.core.truth_(inst_19934)){
var statearr_19982_21425 = state_19974__$1;
(statearr_19982_21425[(1)] = (6));

} else {
var statearr_19983_21426 = state_19974__$1;
(statearr_19983_21426[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (15))){
var inst_19960 = (state_19974[(9)]);
var inst_19965 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19960);
var state_19974__$1 = state_19974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19974__$1,(17),out,inst_19965);
} else {
if((state_val_19975 === (13))){
var inst_19960 = (state_19974[(9)]);
var inst_19960__$1 = (state_19974[(2)]);
var inst_19961 = cljs.core.some(cljs.core.nil_QMARK_,inst_19960__$1);
var state_19974__$1 = (function (){var statearr_19984 = state_19974;
(statearr_19984[(9)] = inst_19960__$1);

return statearr_19984;
})();
if(cljs.core.truth_(inst_19961)){
var statearr_19985_21430 = state_19974__$1;
(statearr_19985_21430[(1)] = (14));

} else {
var statearr_19986_21431 = state_19974__$1;
(statearr_19986_21431[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (6))){
var state_19974__$1 = state_19974;
var statearr_19987_21432 = state_19974__$1;
(statearr_19987_21432[(2)] = null);

(statearr_19987_21432[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (17))){
var inst_19967 = (state_19974[(2)]);
var state_19974__$1 = (function (){var statearr_19989 = state_19974;
(statearr_19989[(10)] = inst_19967);

return statearr_19989;
})();
var statearr_19990_21433 = state_19974__$1;
(statearr_19990_21433[(2)] = null);

(statearr_19990_21433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (3))){
var inst_19972 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19974__$1,inst_19972);
} else {
if((state_val_19975 === (12))){
var _ = (function (){var statearr_19991 = state_19974;
(statearr_19991[(4)] = cljs.core.rest((state_19974[(4)])));

return statearr_19991;
})();
var state_19974__$1 = state_19974;
var ex19988 = (state_19974__$1[(2)]);
var statearr_19992_21434 = state_19974__$1;
(statearr_19992_21434[(5)] = ex19988);


if((ex19988 instanceof Object)){
var statearr_19993_21435 = state_19974__$1;
(statearr_19993_21435[(1)] = (11));

(statearr_19993_21435[(5)] = null);

} else {
throw ex19988;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (2))){
var inst_19930 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19931 = cnt;
var inst_19932 = (0);
var state_19974__$1 = (function (){var statearr_19997 = state_19974;
(statearr_19997[(11)] = inst_19930);

(statearr_19997[(7)] = inst_19931);

(statearr_19997[(8)] = inst_19932);

return statearr_19997;
})();
var statearr_19998_21438 = state_19974__$1;
(statearr_19998_21438[(2)] = null);

(statearr_19998_21438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (11))){
var inst_19937 = (state_19974[(2)]);
var inst_19938 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19974__$1 = (function (){var statearr_19999 = state_19974;
(statearr_19999[(12)] = inst_19937);

return statearr_19999;
})();
var statearr_20000_21441 = state_19974__$1;
(statearr_20000_21441[(2)] = inst_19938);

(statearr_20000_21441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (9))){
var inst_19932 = (state_19974[(8)]);
var _ = (function (){var statearr_20001 = state_19974;
(statearr_20001[(4)] = cljs.core.cons((12),(state_19974[(4)])));

return statearr_20001;
})();
var inst_19946 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19932) : chs__$1.call(null,inst_19932));
var inst_19947 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19932) : done.call(null,inst_19932));
var inst_19948 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19946,inst_19947);
var ___$1 = (function (){var statearr_20002 = state_19974;
(statearr_20002[(4)] = cljs.core.rest((state_19974[(4)])));

return statearr_20002;
})();
var state_19974__$1 = state_19974;
var statearr_20003_21443 = state_19974__$1;
(statearr_20003_21443[(2)] = inst_19948);

(statearr_20003_21443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (5))){
var inst_19958 = (state_19974[(2)]);
var state_19974__$1 = (function (){var statearr_20004 = state_19974;
(statearr_20004[(13)] = inst_19958);

return statearr_20004;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19974__$1,(13),dchan);
} else {
if((state_val_19975 === (14))){
var inst_19963 = cljs.core.async.close_BANG_(out);
var state_19974__$1 = state_19974;
var statearr_20012_21444 = state_19974__$1;
(statearr_20012_21444[(2)] = inst_19963);

(statearr_20012_21444[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (16))){
var inst_19970 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
var statearr_20016_21447 = state_19974__$1;
(statearr_20016_21447[(2)] = inst_19970);

(statearr_20016_21447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (10))){
var inst_19932 = (state_19974[(8)]);
var inst_19951 = (state_19974[(2)]);
var inst_19952 = (inst_19932 + (1));
var inst_19932__$1 = inst_19952;
var state_19974__$1 = (function (){var statearr_20020 = state_19974;
(statearr_20020[(14)] = inst_19951);

(statearr_20020[(8)] = inst_19932__$1);

return statearr_20020;
})();
var statearr_20021_21448 = state_19974__$1;
(statearr_20021_21448[(2)] = null);

(statearr_20021_21448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (8))){
var inst_19956 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
var statearr_20022_21449 = state_19974__$1;
(statearr_20022_21449[(2)] = inst_19956);

(statearr_20022_21449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18000__auto__ = null;
var cljs$core$async$state_machine__18000__auto____0 = (function (){
var statearr_20023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20023[(0)] = cljs$core$async$state_machine__18000__auto__);

(statearr_20023[(1)] = (1));

return statearr_20023;
});
var cljs$core$async$state_machine__18000__auto____1 = (function (state_19974){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_19974);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e20031){var ex__18003__auto__ = e20031;
var statearr_20032_21450 = state_19974;
(statearr_20032_21450[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_19974[(4)]))){
var statearr_20036_21451 = state_19974;
(statearr_20036_21451[(1)] = cljs.core.first((state_19974[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21452 = state_19974;
state_19974 = G__21452;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$state_machine__18000__auto__ = function(state_19974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18000__auto____1.call(this,state_19974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18000__auto____0;
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18000__auto____1;
return cljs$core$async$state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_20037 = f__18306__auto__();
(statearr_20037[(6)] = c__18305__auto___21416);

return statearr_20037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__20050 = arguments.length;
switch (G__20050) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18305__auto___21458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_20091){
var state_val_20092 = (state_20091[(1)]);
if((state_val_20092 === (7))){
var inst_20070 = (state_20091[(7)]);
var inst_20071 = (state_20091[(8)]);
var inst_20070__$1 = (state_20091[(2)]);
var inst_20071__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20070__$1,(0),null);
var inst_20072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20070__$1,(1),null);
var inst_20073 = (inst_20071__$1 == null);
var state_20091__$1 = (function (){var statearr_20093 = state_20091;
(statearr_20093[(9)] = inst_20072);

(statearr_20093[(7)] = inst_20070__$1);

(statearr_20093[(8)] = inst_20071__$1);

return statearr_20093;
})();
if(cljs.core.truth_(inst_20073)){
var statearr_20094_21471 = state_20091__$1;
(statearr_20094_21471[(1)] = (8));

} else {
var statearr_20095_21473 = state_20091__$1;
(statearr_20095_21473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (1))){
var inst_20058 = cljs.core.vec(chs);
var inst_20059 = inst_20058;
var state_20091__$1 = (function (){var statearr_20096 = state_20091;
(statearr_20096[(10)] = inst_20059);

return statearr_20096;
})();
var statearr_20097_21477 = state_20091__$1;
(statearr_20097_21477[(2)] = null);

(statearr_20097_21477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (4))){
var inst_20059 = (state_20091[(10)]);
var state_20091__$1 = state_20091;
return cljs.core.async.ioc_alts_BANG_(state_20091__$1,(7),inst_20059);
} else {
if((state_val_20092 === (6))){
var inst_20087 = (state_20091[(2)]);
var state_20091__$1 = state_20091;
var statearr_20098_21486 = state_20091__$1;
(statearr_20098_21486[(2)] = inst_20087);

(statearr_20098_21486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (3))){
var inst_20089 = (state_20091[(2)]);
var state_20091__$1 = state_20091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20091__$1,inst_20089);
} else {
if((state_val_20092 === (2))){
var inst_20059 = (state_20091[(10)]);
var inst_20063 = cljs.core.count(inst_20059);
var inst_20064 = (inst_20063 > (0));
var state_20091__$1 = state_20091;
if(cljs.core.truth_(inst_20064)){
var statearr_20100_21491 = state_20091__$1;
(statearr_20100_21491[(1)] = (4));

} else {
var statearr_20101_21492 = state_20091__$1;
(statearr_20101_21492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (11))){
var inst_20059 = (state_20091[(10)]);
var inst_20080 = (state_20091[(2)]);
var tmp20099 = inst_20059;
var inst_20059__$1 = tmp20099;
var state_20091__$1 = (function (){var statearr_20102 = state_20091;
(statearr_20102[(10)] = inst_20059__$1);

(statearr_20102[(11)] = inst_20080);

return statearr_20102;
})();
var statearr_20103_21493 = state_20091__$1;
(statearr_20103_21493[(2)] = null);

(statearr_20103_21493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (9))){
var inst_20071 = (state_20091[(8)]);
var state_20091__$1 = state_20091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20091__$1,(11),out,inst_20071);
} else {
if((state_val_20092 === (5))){
var inst_20085 = cljs.core.async.close_BANG_(out);
var state_20091__$1 = state_20091;
var statearr_20104_21496 = state_20091__$1;
(statearr_20104_21496[(2)] = inst_20085);

(statearr_20104_21496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (10))){
var inst_20083 = (state_20091[(2)]);
var state_20091__$1 = state_20091;
var statearr_20105_21497 = state_20091__$1;
(statearr_20105_21497[(2)] = inst_20083);

(statearr_20105_21497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20092 === (8))){
var inst_20072 = (state_20091[(9)]);
var inst_20070 = (state_20091[(7)]);
var inst_20071 = (state_20091[(8)]);
var inst_20059 = (state_20091[(10)]);
var inst_20075 = (function (){var cs = inst_20059;
var vec__20066 = inst_20070;
var v = inst_20071;
var c = inst_20072;
return (function (p1__20041_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20041_SHARP_);
});
})();
var inst_20076 = cljs.core.filterv(inst_20075,inst_20059);
var inst_20059__$1 = inst_20076;
var state_20091__$1 = (function (){var statearr_20106 = state_20091;
(statearr_20106[(10)] = inst_20059__$1);

return statearr_20106;
})();
var statearr_20107_21500 = state_20091__$1;
(statearr_20107_21500[(2)] = null);

(statearr_20107_21500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18000__auto__ = null;
var cljs$core$async$state_machine__18000__auto____0 = (function (){
var statearr_20109 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20109[(0)] = cljs$core$async$state_machine__18000__auto__);

(statearr_20109[(1)] = (1));

return statearr_20109;
});
var cljs$core$async$state_machine__18000__auto____1 = (function (state_20091){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_20091);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e20111){var ex__18003__auto__ = e20111;
var statearr_20112_21511 = state_20091;
(statearr_20112_21511[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_20091[(4)]))){
var statearr_20113_21513 = state_20091;
(statearr_20113_21513[(1)] = cljs.core.first((state_20091[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21523 = state_20091;
state_20091 = G__21523;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$state_machine__18000__auto__ = function(state_20091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18000__auto____1.call(this,state_20091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18000__auto____0;
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18000__auto____1;
return cljs$core$async$state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_20114 = f__18306__auto__();
(statearr_20114[(6)] = c__18305__auto___21458);

return statearr_20114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__20127 = arguments.length;
switch (G__20127) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18305__auto___21525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_20153){
var state_val_20154 = (state_20153[(1)]);
if((state_val_20154 === (7))){
var inst_20135 = (state_20153[(7)]);
var inst_20135__$1 = (state_20153[(2)]);
var inst_20136 = (inst_20135__$1 == null);
var inst_20137 = cljs.core.not(inst_20136);
var state_20153__$1 = (function (){var statearr_20155 = state_20153;
(statearr_20155[(7)] = inst_20135__$1);

return statearr_20155;
})();
if(inst_20137){
var statearr_20156_21527 = state_20153__$1;
(statearr_20156_21527[(1)] = (8));

} else {
var statearr_20157_21530 = state_20153__$1;
(statearr_20157_21530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (1))){
var inst_20130 = (0);
var state_20153__$1 = (function (){var statearr_20158 = state_20153;
(statearr_20158[(8)] = inst_20130);

return statearr_20158;
})();
var statearr_20159_21531 = state_20153__$1;
(statearr_20159_21531[(2)] = null);

(statearr_20159_21531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (4))){
var state_20153__$1 = state_20153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20153__$1,(7),ch);
} else {
if((state_val_20154 === (6))){
var inst_20148 = (state_20153[(2)]);
var state_20153__$1 = state_20153;
var statearr_20160_21538 = state_20153__$1;
(statearr_20160_21538[(2)] = inst_20148);

(statearr_20160_21538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (3))){
var inst_20150 = (state_20153[(2)]);
var inst_20151 = cljs.core.async.close_BANG_(out);
var state_20153__$1 = (function (){var statearr_20161 = state_20153;
(statearr_20161[(9)] = inst_20150);

return statearr_20161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20153__$1,inst_20151);
} else {
if((state_val_20154 === (2))){
var inst_20130 = (state_20153[(8)]);
var inst_20132 = (inst_20130 < n);
var state_20153__$1 = state_20153;
if(cljs.core.truth_(inst_20132)){
var statearr_20162_21540 = state_20153__$1;
(statearr_20162_21540[(1)] = (4));

} else {
var statearr_20163_21541 = state_20153__$1;
(statearr_20163_21541[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (11))){
var inst_20130 = (state_20153[(8)]);
var inst_20140 = (state_20153[(2)]);
var inst_20141 = (inst_20130 + (1));
var inst_20130__$1 = inst_20141;
var state_20153__$1 = (function (){var statearr_20164 = state_20153;
(statearr_20164[(10)] = inst_20140);

(statearr_20164[(8)] = inst_20130__$1);

return statearr_20164;
})();
var statearr_20165_21543 = state_20153__$1;
(statearr_20165_21543[(2)] = null);

(statearr_20165_21543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (9))){
var state_20153__$1 = state_20153;
var statearr_20166_21544 = state_20153__$1;
(statearr_20166_21544[(2)] = null);

(statearr_20166_21544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (5))){
var state_20153__$1 = state_20153;
var statearr_20167_21545 = state_20153__$1;
(statearr_20167_21545[(2)] = null);

(statearr_20167_21545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (10))){
var inst_20145 = (state_20153[(2)]);
var state_20153__$1 = state_20153;
var statearr_20168_21546 = state_20153__$1;
(statearr_20168_21546[(2)] = inst_20145);

(statearr_20168_21546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20154 === (8))){
var inst_20135 = (state_20153[(7)]);
var state_20153__$1 = state_20153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20153__$1,(11),out,inst_20135);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18000__auto__ = null;
var cljs$core$async$state_machine__18000__auto____0 = (function (){
var statearr_20171 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20171[(0)] = cljs$core$async$state_machine__18000__auto__);

(statearr_20171[(1)] = (1));

return statearr_20171;
});
var cljs$core$async$state_machine__18000__auto____1 = (function (state_20153){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_20153);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e20172){var ex__18003__auto__ = e20172;
var statearr_20174_21549 = state_20153;
(statearr_20174_21549[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_20153[(4)]))){
var statearr_20175_21550 = state_20153;
(statearr_20175_21550[(1)] = cljs.core.first((state_20153[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21551 = state_20153;
state_20153 = G__21551;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$state_machine__18000__auto__ = function(state_20153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18000__auto____1.call(this,state_20153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18000__auto____0;
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18000__auto____1;
return cljs$core$async$state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_20176 = f__18306__auto__();
(statearr_20176[(6)] = c__18305__auto___21525);

return statearr_20176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20191 = (function (f,ch,meta20179,_,fn1,meta20192){
this.f = f;
this.ch = ch;
this.meta20179 = meta20179;
this._ = _;
this.fn1 = fn1;
this.meta20192 = meta20192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20193,meta20192__$1){
var self__ = this;
var _20193__$1 = this;
return (new cljs.core.async.t_cljs$core$async20191(self__.f,self__.ch,self__.meta20179,self__._,self__.fn1,meta20192__$1));
}));

(cljs.core.async.t_cljs$core$async20191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20193){
var self__ = this;
var _20193__$1 = this;
return self__.meta20192;
}));

(cljs.core.async.t_cljs$core$async20191.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20191.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__20177_SHARP_){
var G__20194 = (((p1__20177_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20177_SHARP_) : self__.f.call(null,p1__20177_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20194) : f1.call(null,G__20194));
});
}));

(cljs.core.async.t_cljs$core$async20191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20179","meta20179",-458939620,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20178","cljs.core.async/t_cljs$core$async20178",1981622562,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20192","meta20192",2084357649,null)], null);
}));

(cljs.core.async.t_cljs$core$async20191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20191");

(cljs.core.async.t_cljs$core$async20191.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20191.
 */
cljs.core.async.__GT_t_cljs$core$async20191 = (function cljs$core$async$__GT_t_cljs$core$async20191(f,ch,meta20179,_,fn1,meta20192){
return (new cljs.core.async.t_cljs$core$async20191(f,ch,meta20179,_,fn1,meta20192));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20178 = (function (f,ch,meta20179){
this.f = f;
this.ch = ch;
this.meta20179 = meta20179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20180,meta20179__$1){
var self__ = this;
var _20180__$1 = this;
return (new cljs.core.async.t_cljs$core$async20178(self__.f,self__.ch,meta20179__$1));
}));

(cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20180){
var self__ = this;
var _20180__$1 = this;
return self__.meta20179;
}));

(cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async20191(self__.f,self__.ch,self__.meta20179,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20197 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20197) : self__.f.call(null,G__20197));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20179","meta20179",-458939620,null)], null);
}));

(cljs.core.async.t_cljs$core$async20178.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20178");

(cljs.core.async.t_cljs$core$async20178.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20178");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20178.
 */
cljs.core.async.__GT_t_cljs$core$async20178 = (function cljs$core$async$__GT_t_cljs$core$async20178(f,ch,meta20179){
return (new cljs.core.async.t_cljs$core$async20178(f,ch,meta20179));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20178(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20200 = (function (f,ch,meta20201){
this.f = f;
this.ch = ch;
this.meta20201 = meta20201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20202,meta20201__$1){
var self__ = this;
var _20202__$1 = this;
return (new cljs.core.async.t_cljs$core$async20200(self__.f,self__.ch,meta20201__$1));
}));

(cljs.core.async.t_cljs$core$async20200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20202){
var self__ = this;
var _20202__$1 = this;
return self__.meta20201;
}));

(cljs.core.async.t_cljs$core$async20200.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20200.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20200.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20200.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20200.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20200.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async20200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20201","meta20201",-719543893,null)], null);
}));

(cljs.core.async.t_cljs$core$async20200.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20200");

(cljs.core.async.t_cljs$core$async20200.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20200");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20200.
 */
cljs.core.async.__GT_t_cljs$core$async20200 = (function cljs$core$async$__GT_t_cljs$core$async20200(f,ch,meta20201){
return (new cljs.core.async.t_cljs$core$async20200(f,ch,meta20201));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20200(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20211 = (function (p,ch,meta20212){
this.p = p;
this.ch = ch;
this.meta20212 = meta20212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20213,meta20212__$1){
var self__ = this;
var _20213__$1 = this;
return (new cljs.core.async.t_cljs$core$async20211(self__.p,self__.ch,meta20212__$1));
}));

(cljs.core.async.t_cljs$core$async20211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20213){
var self__ = this;
var _20213__$1 = this;
return self__.meta20212;
}));

(cljs.core.async.t_cljs$core$async20211.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20211.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20211.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20211.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20211.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20211.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20211.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20212","meta20212",-2110281171,null)], null);
}));

(cljs.core.async.t_cljs$core$async20211.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20211");

(cljs.core.async.t_cljs$core$async20211.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20211");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20211.
 */
cljs.core.async.__GT_t_cljs$core$async20211 = (function cljs$core$async$__GT_t_cljs$core$async20211(p,ch,meta20212){
return (new cljs.core.async.t_cljs$core$async20211(p,ch,meta20212));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async20211(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__20236 = arguments.length;
switch (G__20236) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18305__auto___21573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_20264){
var state_val_20265 = (state_20264[(1)]);
if((state_val_20265 === (7))){
var inst_20260 = (state_20264[(2)]);
var state_20264__$1 = state_20264;
var statearr_20270_21574 = state_20264__$1;
(statearr_20270_21574[(2)] = inst_20260);

(statearr_20270_21574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (1))){
var state_20264__$1 = state_20264;
var statearr_20272_21575 = state_20264__$1;
(statearr_20272_21575[(2)] = null);

(statearr_20272_21575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (4))){
var inst_20246 = (state_20264[(7)]);
var inst_20246__$1 = (state_20264[(2)]);
var inst_20247 = (inst_20246__$1 == null);
var state_20264__$1 = (function (){var statearr_20273 = state_20264;
(statearr_20273[(7)] = inst_20246__$1);

return statearr_20273;
})();
if(cljs.core.truth_(inst_20247)){
var statearr_20274_21576 = state_20264__$1;
(statearr_20274_21576[(1)] = (5));

} else {
var statearr_20275_21577 = state_20264__$1;
(statearr_20275_21577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (6))){
var inst_20246 = (state_20264[(7)]);
var inst_20251 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20246) : p.call(null,inst_20246));
var state_20264__$1 = state_20264;
if(cljs.core.truth_(inst_20251)){
var statearr_20276_21579 = state_20264__$1;
(statearr_20276_21579[(1)] = (8));

} else {
var statearr_20277_21580 = state_20264__$1;
(statearr_20277_21580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (3))){
var inst_20262 = (state_20264[(2)]);
var state_20264__$1 = state_20264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20264__$1,inst_20262);
} else {
if((state_val_20265 === (2))){
var state_20264__$1 = state_20264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20264__$1,(4),ch);
} else {
if((state_val_20265 === (11))){
var inst_20254 = (state_20264[(2)]);
var state_20264__$1 = state_20264;
var statearr_20278_21583 = state_20264__$1;
(statearr_20278_21583[(2)] = inst_20254);

(statearr_20278_21583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (9))){
var state_20264__$1 = state_20264;
var statearr_20280_21584 = state_20264__$1;
(statearr_20280_21584[(2)] = null);

(statearr_20280_21584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (5))){
var inst_20249 = cljs.core.async.close_BANG_(out);
var state_20264__$1 = state_20264;
var statearr_20281_21585 = state_20264__$1;
(statearr_20281_21585[(2)] = inst_20249);

(statearr_20281_21585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (10))){
var inst_20257 = (state_20264[(2)]);
var state_20264__$1 = (function (){var statearr_20283 = state_20264;
(statearr_20283[(8)] = inst_20257);

return statearr_20283;
})();
var statearr_20290_21586 = state_20264__$1;
(statearr_20290_21586[(2)] = null);

(statearr_20290_21586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (8))){
var inst_20246 = (state_20264[(7)]);
var state_20264__$1 = state_20264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20264__$1,(11),out,inst_20246);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18000__auto__ = null;
var cljs$core$async$state_machine__18000__auto____0 = (function (){
var statearr_20291 = [null,null,null,null,null,null,null,null,null];
(statearr_20291[(0)] = cljs$core$async$state_machine__18000__auto__);

(statearr_20291[(1)] = (1));

return statearr_20291;
});
var cljs$core$async$state_machine__18000__auto____1 = (function (state_20264){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_20264);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e20293){var ex__18003__auto__ = e20293;
var statearr_20294_21590 = state_20264;
(statearr_20294_21590[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_20264[(4)]))){
var statearr_20295_21592 = state_20264;
(statearr_20295_21592[(1)] = cljs.core.first((state_20264[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21593 = state_20264;
state_20264 = G__21593;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$state_machine__18000__auto__ = function(state_20264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18000__auto____1.call(this,state_20264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18000__auto____0;
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18000__auto____1;
return cljs$core$async$state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_20296 = f__18306__auto__();
(statearr_20296[(6)] = c__18305__auto___21573);

return statearr_20296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20300 = arguments.length;
switch (G__20300) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18305__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_20366){
var state_val_20367 = (state_20366[(1)]);
if((state_val_20367 === (7))){
var inst_20362 = (state_20366[(2)]);
var state_20366__$1 = state_20366;
var statearr_20368_21595 = state_20366__$1;
(statearr_20368_21595[(2)] = inst_20362);

(statearr_20368_21595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (20))){
var inst_20332 = (state_20366[(7)]);
var inst_20343 = (state_20366[(2)]);
var inst_20344 = cljs.core.next(inst_20332);
var inst_20317 = inst_20344;
var inst_20318 = null;
var inst_20319 = (0);
var inst_20320 = (0);
var state_20366__$1 = (function (){var statearr_20369 = state_20366;
(statearr_20369[(8)] = inst_20318);

(statearr_20369[(9)] = inst_20317);

(statearr_20369[(10)] = inst_20320);

(statearr_20369[(11)] = inst_20319);

(statearr_20369[(12)] = inst_20343);

return statearr_20369;
})();
var statearr_20370_21596 = state_20366__$1;
(statearr_20370_21596[(2)] = null);

(statearr_20370_21596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (1))){
var state_20366__$1 = state_20366;
var statearr_20371_21597 = state_20366__$1;
(statearr_20371_21597[(2)] = null);

(statearr_20371_21597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (4))){
var inst_20306 = (state_20366[(13)]);
var inst_20306__$1 = (state_20366[(2)]);
var inst_20307 = (inst_20306__$1 == null);
var state_20366__$1 = (function (){var statearr_20376 = state_20366;
(statearr_20376[(13)] = inst_20306__$1);

return statearr_20376;
})();
if(cljs.core.truth_(inst_20307)){
var statearr_20377_21598 = state_20366__$1;
(statearr_20377_21598[(1)] = (5));

} else {
var statearr_20378_21599 = state_20366__$1;
(statearr_20378_21599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (15))){
var state_20366__$1 = state_20366;
var statearr_20382_21600 = state_20366__$1;
(statearr_20382_21600[(2)] = null);

(statearr_20382_21600[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (21))){
var state_20366__$1 = state_20366;
var statearr_20383_21601 = state_20366__$1;
(statearr_20383_21601[(2)] = null);

(statearr_20383_21601[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (13))){
var inst_20318 = (state_20366[(8)]);
var inst_20317 = (state_20366[(9)]);
var inst_20320 = (state_20366[(10)]);
var inst_20319 = (state_20366[(11)]);
var inst_20328 = (state_20366[(2)]);
var inst_20329 = (inst_20320 + (1));
var tmp20379 = inst_20318;
var tmp20380 = inst_20317;
var tmp20381 = inst_20319;
var inst_20317__$1 = tmp20380;
var inst_20318__$1 = tmp20379;
var inst_20319__$1 = tmp20381;
var inst_20320__$1 = inst_20329;
var state_20366__$1 = (function (){var statearr_20385 = state_20366;
(statearr_20385[(8)] = inst_20318__$1);

(statearr_20385[(9)] = inst_20317__$1);

(statearr_20385[(10)] = inst_20320__$1);

(statearr_20385[(11)] = inst_20319__$1);

(statearr_20385[(14)] = inst_20328);

return statearr_20385;
})();
var statearr_20386_21602 = state_20366__$1;
(statearr_20386_21602[(2)] = null);

(statearr_20386_21602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (22))){
var state_20366__$1 = state_20366;
var statearr_20393_21607 = state_20366__$1;
(statearr_20393_21607[(2)] = null);

(statearr_20393_21607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (6))){
var inst_20306 = (state_20366[(13)]);
var inst_20315 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20306) : f.call(null,inst_20306));
var inst_20316 = cljs.core.seq(inst_20315);
var inst_20317 = inst_20316;
var inst_20318 = null;
var inst_20319 = (0);
var inst_20320 = (0);
var state_20366__$1 = (function (){var statearr_20397 = state_20366;
(statearr_20397[(8)] = inst_20318);

(statearr_20397[(9)] = inst_20317);

(statearr_20397[(10)] = inst_20320);

(statearr_20397[(11)] = inst_20319);

return statearr_20397;
})();
var statearr_20398_21608 = state_20366__$1;
(statearr_20398_21608[(2)] = null);

(statearr_20398_21608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (17))){
var inst_20332 = (state_20366[(7)]);
var inst_20336 = cljs.core.chunk_first(inst_20332);
var inst_20337 = cljs.core.chunk_rest(inst_20332);
var inst_20338 = cljs.core.count(inst_20336);
var inst_20317 = inst_20337;
var inst_20318 = inst_20336;
var inst_20319 = inst_20338;
var inst_20320 = (0);
var state_20366__$1 = (function (){var statearr_20400 = state_20366;
(statearr_20400[(8)] = inst_20318);

(statearr_20400[(9)] = inst_20317);

(statearr_20400[(10)] = inst_20320);

(statearr_20400[(11)] = inst_20319);

return statearr_20400;
})();
var statearr_20404_21609 = state_20366__$1;
(statearr_20404_21609[(2)] = null);

(statearr_20404_21609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (3))){
var inst_20364 = (state_20366[(2)]);
var state_20366__$1 = state_20366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20366__$1,inst_20364);
} else {
if((state_val_20367 === (12))){
var inst_20352 = (state_20366[(2)]);
var state_20366__$1 = state_20366;
var statearr_20405_21610 = state_20366__$1;
(statearr_20405_21610[(2)] = inst_20352);

(statearr_20405_21610[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (2))){
var state_20366__$1 = state_20366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20366__$1,(4),in$);
} else {
if((state_val_20367 === (23))){
var inst_20360 = (state_20366[(2)]);
var state_20366__$1 = state_20366;
var statearr_20412_21612 = state_20366__$1;
(statearr_20412_21612[(2)] = inst_20360);

(statearr_20412_21612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (19))){
var inst_20347 = (state_20366[(2)]);
var state_20366__$1 = state_20366;
var statearr_20413_21614 = state_20366__$1;
(statearr_20413_21614[(2)] = inst_20347);

(statearr_20413_21614[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (11))){
var inst_20317 = (state_20366[(9)]);
var inst_20332 = (state_20366[(7)]);
var inst_20332__$1 = cljs.core.seq(inst_20317);
var state_20366__$1 = (function (){var statearr_20414 = state_20366;
(statearr_20414[(7)] = inst_20332__$1);

return statearr_20414;
})();
if(inst_20332__$1){
var statearr_20415_21615 = state_20366__$1;
(statearr_20415_21615[(1)] = (14));

} else {
var statearr_20422_21616 = state_20366__$1;
(statearr_20422_21616[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (9))){
var inst_20354 = (state_20366[(2)]);
var inst_20355 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20366__$1 = (function (){var statearr_20423 = state_20366;
(statearr_20423[(15)] = inst_20354);

return statearr_20423;
})();
if(cljs.core.truth_(inst_20355)){
var statearr_20424_21618 = state_20366__$1;
(statearr_20424_21618[(1)] = (21));

} else {
var statearr_20425_21619 = state_20366__$1;
(statearr_20425_21619[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (5))){
var inst_20309 = cljs.core.async.close_BANG_(out);
var state_20366__$1 = state_20366;
var statearr_20426_21620 = state_20366__$1;
(statearr_20426_21620[(2)] = inst_20309);

(statearr_20426_21620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (14))){
var inst_20332 = (state_20366[(7)]);
var inst_20334 = cljs.core.chunked_seq_QMARK_(inst_20332);
var state_20366__$1 = state_20366;
if(inst_20334){
var statearr_20427_21622 = state_20366__$1;
(statearr_20427_21622[(1)] = (17));

} else {
var statearr_20428_21623 = state_20366__$1;
(statearr_20428_21623[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (16))){
var inst_20350 = (state_20366[(2)]);
var state_20366__$1 = state_20366;
var statearr_20430_21624 = state_20366__$1;
(statearr_20430_21624[(2)] = inst_20350);

(statearr_20430_21624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (10))){
var inst_20318 = (state_20366[(8)]);
var inst_20320 = (state_20366[(10)]);
var inst_20326 = cljs.core._nth(inst_20318,inst_20320);
var state_20366__$1 = state_20366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20366__$1,(13),out,inst_20326);
} else {
if((state_val_20367 === (18))){
var inst_20332 = (state_20366[(7)]);
var inst_20341 = cljs.core.first(inst_20332);
var state_20366__$1 = state_20366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20366__$1,(20),out,inst_20341);
} else {
if((state_val_20367 === (8))){
var inst_20320 = (state_20366[(10)]);
var inst_20319 = (state_20366[(11)]);
var inst_20322 = (inst_20320 < inst_20319);
var inst_20323 = inst_20322;
var state_20366__$1 = state_20366;
if(cljs.core.truth_(inst_20323)){
var statearr_20432_21625 = state_20366__$1;
(statearr_20432_21625[(1)] = (10));

} else {
var statearr_20433_21626 = state_20366__$1;
(statearr_20433_21626[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18000__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18000__auto____0 = (function (){
var statearr_20434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20434[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18000__auto__);

(statearr_20434[(1)] = (1));

return statearr_20434;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18000__auto____1 = (function (state_20366){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_20366);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e20435){var ex__18003__auto__ = e20435;
var statearr_20436_21627 = state_20366;
(statearr_20436_21627[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_20366[(4)]))){
var statearr_20437_21628 = state_20366;
(statearr_20437_21628[(1)] = cljs.core.first((state_20366[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21629 = state_20366;
state_20366 = G__21629;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18000__auto__ = function(state_20366){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18000__auto____1.call(this,state_20366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18000__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18000__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_20443 = f__18306__auto__();
(statearr_20443[(6)] = c__18305__auto__);

return statearr_20443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));

return c__18305__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20450 = arguments.length;
switch (G__20450) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20454 = arguments.length;
switch (G__20454) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20461 = arguments.length;
switch (G__20461) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18305__auto___21643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_20489){
var state_val_20490 = (state_20489[(1)]);
if((state_val_20490 === (7))){
var inst_20484 = (state_20489[(2)]);
var state_20489__$1 = state_20489;
var statearr_20491_21644 = state_20489__$1;
(statearr_20491_21644[(2)] = inst_20484);

(statearr_20491_21644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20490 === (1))){
var inst_20462 = null;
var state_20489__$1 = (function (){var statearr_20492 = state_20489;
(statearr_20492[(7)] = inst_20462);

return statearr_20492;
})();
var statearr_20493_21650 = state_20489__$1;
(statearr_20493_21650[(2)] = null);

(statearr_20493_21650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20490 === (4))){
var inst_20466 = (state_20489[(8)]);
var inst_20466__$1 = (state_20489[(2)]);
var inst_20470 = (inst_20466__$1 == null);
var inst_20471 = cljs.core.not(inst_20470);
var state_20489__$1 = (function (){var statearr_20501 = state_20489;
(statearr_20501[(8)] = inst_20466__$1);

return statearr_20501;
})();
if(inst_20471){
var statearr_20502_21652 = state_20489__$1;
(statearr_20502_21652[(1)] = (5));

} else {
var statearr_20503_21653 = state_20489__$1;
(statearr_20503_21653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20490 === (6))){
var state_20489__$1 = state_20489;
var statearr_20507_21654 = state_20489__$1;
(statearr_20507_21654[(2)] = null);

(statearr_20507_21654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20490 === (3))){
var inst_20486 = (state_20489[(2)]);
var inst_20487 = cljs.core.async.close_BANG_(out);
var state_20489__$1 = (function (){var statearr_20508 = state_20489;
(statearr_20508[(9)] = inst_20486);

return statearr_20508;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20489__$1,inst_20487);
} else {
if((state_val_20490 === (2))){
var state_20489__$1 = state_20489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20489__$1,(4),ch);
} else {
if((state_val_20490 === (11))){
var inst_20466 = (state_20489[(8)]);
var inst_20478 = (state_20489[(2)]);
var inst_20462 = inst_20466;
var state_20489__$1 = (function (){var statearr_20509 = state_20489;
(statearr_20509[(10)] = inst_20478);

(statearr_20509[(7)] = inst_20462);

return statearr_20509;
})();
var statearr_20510_21660 = state_20489__$1;
(statearr_20510_21660[(2)] = null);

(statearr_20510_21660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20490 === (9))){
var inst_20466 = (state_20489[(8)]);
var state_20489__$1 = state_20489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20489__$1,(11),out,inst_20466);
} else {
if((state_val_20490 === (5))){
var inst_20462 = (state_20489[(7)]);
var inst_20466 = (state_20489[(8)]);
var inst_20473 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20466,inst_20462);
var state_20489__$1 = state_20489;
if(inst_20473){
var statearr_20512_21661 = state_20489__$1;
(statearr_20512_21661[(1)] = (8));

} else {
var statearr_20513_21662 = state_20489__$1;
(statearr_20513_21662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20490 === (10))){
var inst_20481 = (state_20489[(2)]);
var state_20489__$1 = state_20489;
var statearr_20514_21663 = state_20489__$1;
(statearr_20514_21663[(2)] = inst_20481);

(statearr_20514_21663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20490 === (8))){
var inst_20462 = (state_20489[(7)]);
var tmp20511 = inst_20462;
var inst_20462__$1 = tmp20511;
var state_20489__$1 = (function (){var statearr_20515 = state_20489;
(statearr_20515[(7)] = inst_20462__$1);

return statearr_20515;
})();
var statearr_20519_21665 = state_20489__$1;
(statearr_20519_21665[(2)] = null);

(statearr_20519_21665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18000__auto__ = null;
var cljs$core$async$state_machine__18000__auto____0 = (function (){
var statearr_20520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20520[(0)] = cljs$core$async$state_machine__18000__auto__);

(statearr_20520[(1)] = (1));

return statearr_20520;
});
var cljs$core$async$state_machine__18000__auto____1 = (function (state_20489){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_20489);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e20521){var ex__18003__auto__ = e20521;
var statearr_20522_21666 = state_20489;
(statearr_20522_21666[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_20489[(4)]))){
var statearr_20523_21667 = state_20489;
(statearr_20523_21667[(1)] = cljs.core.first((state_20489[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21668 = state_20489;
state_20489 = G__21668;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$state_machine__18000__auto__ = function(state_20489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18000__auto____1.call(this,state_20489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18000__auto____0;
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18000__auto____1;
return cljs$core$async$state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_20524 = f__18306__auto__();
(statearr_20524[(6)] = c__18305__auto___21643);

return statearr_20524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20526 = arguments.length;
switch (G__20526) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18305__auto___21675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_20564){
var state_val_20565 = (state_20564[(1)]);
if((state_val_20565 === (7))){
var inst_20560 = (state_20564[(2)]);
var state_20564__$1 = state_20564;
var statearr_20566_21686 = state_20564__$1;
(statearr_20566_21686[(2)] = inst_20560);

(statearr_20566_21686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (1))){
var inst_20527 = (new Array(n));
var inst_20528 = inst_20527;
var inst_20529 = (0);
var state_20564__$1 = (function (){var statearr_20567 = state_20564;
(statearr_20567[(7)] = inst_20528);

(statearr_20567[(8)] = inst_20529);

return statearr_20567;
})();
var statearr_20568_21694 = state_20564__$1;
(statearr_20568_21694[(2)] = null);

(statearr_20568_21694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (4))){
var inst_20532 = (state_20564[(9)]);
var inst_20532__$1 = (state_20564[(2)]);
var inst_20533 = (inst_20532__$1 == null);
var inst_20534 = cljs.core.not(inst_20533);
var state_20564__$1 = (function (){var statearr_20569 = state_20564;
(statearr_20569[(9)] = inst_20532__$1);

return statearr_20569;
})();
if(inst_20534){
var statearr_20570_21698 = state_20564__$1;
(statearr_20570_21698[(1)] = (5));

} else {
var statearr_20571_21699 = state_20564__$1;
(statearr_20571_21699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (15))){
var inst_20554 = (state_20564[(2)]);
var state_20564__$1 = state_20564;
var statearr_20572_21702 = state_20564__$1;
(statearr_20572_21702[(2)] = inst_20554);

(statearr_20572_21702[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (13))){
var state_20564__$1 = state_20564;
var statearr_20573_21705 = state_20564__$1;
(statearr_20573_21705[(2)] = null);

(statearr_20573_21705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (6))){
var inst_20529 = (state_20564[(8)]);
var inst_20550 = (inst_20529 > (0));
var state_20564__$1 = state_20564;
if(cljs.core.truth_(inst_20550)){
var statearr_20575_21711 = state_20564__$1;
(statearr_20575_21711[(1)] = (12));

} else {
var statearr_20576_21713 = state_20564__$1;
(statearr_20576_21713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (3))){
var inst_20562 = (state_20564[(2)]);
var state_20564__$1 = state_20564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20564__$1,inst_20562);
} else {
if((state_val_20565 === (12))){
var inst_20528 = (state_20564[(7)]);
var inst_20552 = cljs.core.vec(inst_20528);
var state_20564__$1 = state_20564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20564__$1,(15),out,inst_20552);
} else {
if((state_val_20565 === (2))){
var state_20564__$1 = state_20564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20564__$1,(4),ch);
} else {
if((state_val_20565 === (11))){
var inst_20544 = (state_20564[(2)]);
var inst_20545 = (new Array(n));
var inst_20528 = inst_20545;
var inst_20529 = (0);
var state_20564__$1 = (function (){var statearr_20580 = state_20564;
(statearr_20580[(7)] = inst_20528);

(statearr_20580[(8)] = inst_20529);

(statearr_20580[(10)] = inst_20544);

return statearr_20580;
})();
var statearr_20581_21733 = state_20564__$1;
(statearr_20581_21733[(2)] = null);

(statearr_20581_21733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (9))){
var inst_20528 = (state_20564[(7)]);
var inst_20542 = cljs.core.vec(inst_20528);
var state_20564__$1 = state_20564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20564__$1,(11),out,inst_20542);
} else {
if((state_val_20565 === (5))){
var inst_20528 = (state_20564[(7)]);
var inst_20529 = (state_20564[(8)]);
var inst_20537 = (state_20564[(11)]);
var inst_20532 = (state_20564[(9)]);
var inst_20536 = (inst_20528[inst_20529] = inst_20532);
var inst_20537__$1 = (inst_20529 + (1));
var inst_20538 = (inst_20537__$1 < n);
var state_20564__$1 = (function (){var statearr_20582 = state_20564;
(statearr_20582[(12)] = inst_20536);

(statearr_20582[(11)] = inst_20537__$1);

return statearr_20582;
})();
if(cljs.core.truth_(inst_20538)){
var statearr_20583_21752 = state_20564__$1;
(statearr_20583_21752[(1)] = (8));

} else {
var statearr_20584_21753 = state_20564__$1;
(statearr_20584_21753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (14))){
var inst_20557 = (state_20564[(2)]);
var inst_20558 = cljs.core.async.close_BANG_(out);
var state_20564__$1 = (function (){var statearr_20586 = state_20564;
(statearr_20586[(13)] = inst_20557);

return statearr_20586;
})();
var statearr_20590_21754 = state_20564__$1;
(statearr_20590_21754[(2)] = inst_20558);

(statearr_20590_21754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (10))){
var inst_20548 = (state_20564[(2)]);
var state_20564__$1 = state_20564;
var statearr_20591_21755 = state_20564__$1;
(statearr_20591_21755[(2)] = inst_20548);

(statearr_20591_21755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (8))){
var inst_20528 = (state_20564[(7)]);
var inst_20537 = (state_20564[(11)]);
var tmp20585 = inst_20528;
var inst_20528__$1 = tmp20585;
var inst_20529 = inst_20537;
var state_20564__$1 = (function (){var statearr_20592 = state_20564;
(statearr_20592[(7)] = inst_20528__$1);

(statearr_20592[(8)] = inst_20529);

return statearr_20592;
})();
var statearr_20593_21756 = state_20564__$1;
(statearr_20593_21756[(2)] = null);

(statearr_20593_21756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18000__auto__ = null;
var cljs$core$async$state_machine__18000__auto____0 = (function (){
var statearr_20594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20594[(0)] = cljs$core$async$state_machine__18000__auto__);

(statearr_20594[(1)] = (1));

return statearr_20594;
});
var cljs$core$async$state_machine__18000__auto____1 = (function (state_20564){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_20564);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e20595){var ex__18003__auto__ = e20595;
var statearr_20596_21759 = state_20564;
(statearr_20596_21759[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_20564[(4)]))){
var statearr_20597_21760 = state_20564;
(statearr_20597_21760[(1)] = cljs.core.first((state_20564[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21761 = state_20564;
state_20564 = G__21761;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$state_machine__18000__auto__ = function(state_20564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18000__auto____1.call(this,state_20564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18000__auto____0;
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18000__auto____1;
return cljs$core$async$state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_20598 = f__18306__auto__();
(statearr_20598[(6)] = c__18305__auto___21675);

return statearr_20598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20601 = arguments.length;
switch (G__20601) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18305__auto___21765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18306__auto__ = (function (){var switch__17999__auto__ = (function (state_20650){
var state_val_20651 = (state_20650[(1)]);
if((state_val_20651 === (7))){
var inst_20646 = (state_20650[(2)]);
var state_20650__$1 = state_20650;
var statearr_20656_21766 = state_20650__$1;
(statearr_20656_21766[(2)] = inst_20646);

(statearr_20656_21766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20651 === (1))){
var inst_20602 = [];
var inst_20603 = inst_20602;
var inst_20604 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20650__$1 = (function (){var statearr_20657 = state_20650;
(statearr_20657[(7)] = inst_20603);

(statearr_20657[(8)] = inst_20604);

return statearr_20657;
})();
var statearr_20658_21767 = state_20650__$1;
(statearr_20658_21767[(2)] = null);

(statearr_20658_21767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20651 === (4))){
var inst_20607 = (state_20650[(9)]);
var inst_20607__$1 = (state_20650[(2)]);
var inst_20608 = (inst_20607__$1 == null);
var inst_20609 = cljs.core.not(inst_20608);
var state_20650__$1 = (function (){var statearr_20659 = state_20650;
(statearr_20659[(9)] = inst_20607__$1);

return statearr_20659;
})();
if(inst_20609){
var statearr_20660_21768 = state_20650__$1;
(statearr_20660_21768[(1)] = (5));

} else {
var statearr_20661_21769 = state_20650__$1;
(statearr_20661_21769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20651 === (15))){
var inst_20603 = (state_20650[(7)]);
var inst_20638 = cljs.core.vec(inst_20603);
var state_20650__$1 = state_20650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20650__$1,(18),out,inst_20638);
} else {
if((state_val_20651 === (13))){
var inst_20633 = (state_20650[(2)]);
var state_20650__$1 = state_20650;
var statearr_20662_21770 = state_20650__$1;
(statearr_20662_21770[(2)] = inst_20633);

(statearr_20662_21770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20651 === (6))){
var inst_20603 = (state_20650[(7)]);
var inst_20635 = inst_20603.length;
var inst_20636 = (inst_20635 > (0));
var state_20650__$1 = state_20650;
if(cljs.core.truth_(inst_20636)){
var statearr_20663_21771 = state_20650__$1;
(statearr_20663_21771[(1)] = (15));

} else {
var statearr_20664_21772 = state_20650__$1;
(statearr_20664_21772[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20651 === (17))){
var inst_20643 = (state_20650[(2)]);
var inst_20644 = cljs.core.async.close_BANG_(out);
var state_20650__$1 = (function (){var statearr_20665 = state_20650;
(statearr_20665[(10)] = inst_20643);

return statearr_20665;
})();
var statearr_20667_21773 = state_20650__$1;
(statearr_20667_21773[(2)] = inst_20644);

(statearr_20667_21773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20651 === (3))){
var inst_20648 = (state_20650[(2)]);
var state_20650__$1 = state_20650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20650__$1,inst_20648);
} else {
if((state_val_20651 === (12))){
var inst_20603 = (state_20650[(7)]);
var inst_20622 = cljs.core.vec(inst_20603);
var state_20650__$1 = state_20650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20650__$1,(14),out,inst_20622);
} else {
if((state_val_20651 === (2))){
var state_20650__$1 = state_20650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20650__$1,(4),ch);
} else {
if((state_val_20651 === (11))){
var inst_20607 = (state_20650[(9)]);
var inst_20603 = (state_20650[(7)]);
var inst_20611 = (state_20650[(11)]);
var inst_20619 = inst_20603.push(inst_20607);
var tmp20669 = inst_20603;
var inst_20603__$1 = tmp20669;
var inst_20604 = inst_20611;
var state_20650__$1 = (function (){var statearr_20670 = state_20650;
(statearr_20670[(12)] = inst_20619);

(statearr_20670[(7)] = inst_20603__$1);

(statearr_20670[(8)] = inst_20604);

return statearr_20670;
})();
var statearr_20671_21774 = state_20650__$1;
(statearr_20671_21774[(2)] = null);

(statearr_20671_21774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20651 === (9))){
var inst_20604 = (state_20650[(8)]);
var inst_20615 = cljs.core.keyword_identical_QMARK_(inst_20604,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20650__$1 = state_20650;
var statearr_20672_21775 = state_20650__$1;
(statearr_20672_21775[(2)] = inst_20615);

(statearr_20672_21775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20651 === (5))){
var inst_20607 = (state_20650[(9)]);
var inst_20612 = (state_20650[(13)]);
var inst_20604 = (state_20650[(8)]);
var inst_20611 = (state_20650[(11)]);
var inst_20611__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20607) : f.call(null,inst_20607));
var inst_20612__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20611__$1,inst_20604);
var state_20650__$1 = (function (){var statearr_20673 = state_20650;
(statearr_20673[(13)] = inst_20612__$1);

(statearr_20673[(11)] = inst_20611__$1);

return statearr_20673;
})();
if(inst_20612__$1){
var statearr_20674_21777 = state_20650__$1;
(statearr_20674_21777[(1)] = (8));

} else {
var statearr_20675_21778 = state_20650__$1;
(statearr_20675_21778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20651 === (14))){
var inst_20607 = (state_20650[(9)]);
var inst_20611 = (state_20650[(11)]);
var inst_20624 = (state_20650[(2)]);
var inst_20629 = [];
var inst_20630 = inst_20629.push(inst_20607);
var inst_20603 = inst_20629;
var inst_20604 = inst_20611;
var state_20650__$1 = (function (){var statearr_20676 = state_20650;
(statearr_20676[(7)] = inst_20603);

(statearr_20676[(8)] = inst_20604);

(statearr_20676[(14)] = inst_20630);

(statearr_20676[(15)] = inst_20624);

return statearr_20676;
})();
var statearr_20677_21781 = state_20650__$1;
(statearr_20677_21781[(2)] = null);

(statearr_20677_21781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20651 === (16))){
var state_20650__$1 = state_20650;
var statearr_20678_21784 = state_20650__$1;
(statearr_20678_21784[(2)] = null);

(statearr_20678_21784[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20651 === (10))){
var inst_20617 = (state_20650[(2)]);
var state_20650__$1 = state_20650;
if(cljs.core.truth_(inst_20617)){
var statearr_20679_21787 = state_20650__$1;
(statearr_20679_21787[(1)] = (11));

} else {
var statearr_20680_21788 = state_20650__$1;
(statearr_20680_21788[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20651 === (18))){
var inst_20640 = (state_20650[(2)]);
var state_20650__$1 = state_20650;
var statearr_20681_21789 = state_20650__$1;
(statearr_20681_21789[(2)] = inst_20640);

(statearr_20681_21789[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20651 === (8))){
var inst_20612 = (state_20650[(13)]);
var state_20650__$1 = state_20650;
var statearr_20682_21790 = state_20650__$1;
(statearr_20682_21790[(2)] = inst_20612);

(statearr_20682_21790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18000__auto__ = null;
var cljs$core$async$state_machine__18000__auto____0 = (function (){
var statearr_20683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20683[(0)] = cljs$core$async$state_machine__18000__auto__);

(statearr_20683[(1)] = (1));

return statearr_20683;
});
var cljs$core$async$state_machine__18000__auto____1 = (function (state_20650){
while(true){
var ret_value__18001__auto__ = (function (){try{while(true){
var result__18002__auto__ = switch__17999__auto__(state_20650);
if(cljs.core.keyword_identical_QMARK_(result__18002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18002__auto__;
}
break;
}
}catch (e20684){var ex__18003__auto__ = e20684;
var statearr_20685_21794 = state_20650;
(statearr_20685_21794[(2)] = ex__18003__auto__);


if(cljs.core.seq((state_20650[(4)]))){
var statearr_20686_21797 = state_20650;
(statearr_20686_21797[(1)] = cljs.core.first((state_20650[(4)])));

} else {
throw ex__18003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21798 = state_20650;
state_20650 = G__21798;
continue;
} else {
return ret_value__18001__auto__;
}
break;
}
});
cljs$core$async$state_machine__18000__auto__ = function(state_20650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18000__auto____1.call(this,state_20650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18000__auto____0;
cljs$core$async$state_machine__18000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18000__auto____1;
return cljs$core$async$state_machine__18000__auto__;
})()
})();
var state__18307__auto__ = (function (){var statearr_20687 = f__18306__auto__();
(statearr_20687[(6)] = c__18305__auto___21765);

return statearr_20687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18307__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
