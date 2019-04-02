// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30386 = arguments.length;
switch (G__30386) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30387 = (function (f,blockable,meta30388){
this.f = f;
this.blockable = blockable;
this.meta30388 = meta30388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30389,meta30388__$1){
var self__ = this;
var _30389__$1 = this;
return (new cljs.core.async.t_cljs$core$async30387(self__.f,self__.blockable,meta30388__$1));
});

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30389){
var self__ = this;
var _30389__$1 = this;
return self__.meta30388;
});

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30388","meta30388",1717092134,null)], null);
});

cljs.core.async.t_cljs$core$async30387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30387";

cljs.core.async.t_cljs$core$async30387.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30387");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30387.
 */
cljs.core.async.__GT_t_cljs$core$async30387 = (function cljs$core$async$__GT_t_cljs$core$async30387(f__$1,blockable__$1,meta30388){
return (new cljs.core.async.t_cljs$core$async30387(f__$1,blockable__$1,meta30388));
});

}

return (new cljs.core.async.t_cljs$core$async30387(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__30393 = arguments.length;
switch (G__30393) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30396 = arguments.length;
switch (G__30396) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__30399 = arguments.length;
switch (G__30399) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30401 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30401);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30401,ret){
return (function (){
return fn1.call(null,val_30401);
});})(val_30401,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__30403 = arguments.length;
switch (G__30403) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___30405 = n;
var x_30406 = (0);
while(true){
if((x_30406 < n__4607__auto___30405)){
(a[x_30406] = (0));

var G__30407 = (x_30406 + (1));
x_30406 = G__30407;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30408 = (i + (1));
i = G__30408;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30409 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30409 = (function (flag,meta30410){
this.flag = flag;
this.meta30410 = meta30410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30411,meta30410__$1){
var self__ = this;
var _30411__$1 = this;
return (new cljs.core.async.t_cljs$core$async30409(self__.flag,meta30410__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30411){
var self__ = this;
var _30411__$1 = this;
return self__.meta30410;
});})(flag))
;

cljs.core.async.t_cljs$core$async30409.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30409.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30409.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30409.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30409.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30410","meta30410",-359861658,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30409";

cljs.core.async.t_cljs$core$async30409.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30409");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30409.
 */
cljs.core.async.__GT_t_cljs$core$async30409 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30409(flag__$1,meta30410){
return (new cljs.core.async.t_cljs$core$async30409(flag__$1,meta30410));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30409(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30412 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30412 = (function (flag,cb,meta30413){
this.flag = flag;
this.cb = cb;
this.meta30413 = meta30413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30414,meta30413__$1){
var self__ = this;
var _30414__$1 = this;
return (new cljs.core.async.t_cljs$core$async30412(self__.flag,self__.cb,meta30413__$1));
});

cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30414){
var self__ = this;
var _30414__$1 = this;
return self__.meta30413;
});

cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30413","meta30413",-1852191053,null)], null);
});

cljs.core.async.t_cljs$core$async30412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30412";

cljs.core.async.t_cljs$core$async30412.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30412");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30412.
 */
cljs.core.async.__GT_t_cljs$core$async30412 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30412(flag__$1,cb__$1,meta30413){
return (new cljs.core.async.t_cljs$core$async30412(flag__$1,cb__$1,meta30413));
});

}

return (new cljs.core.async.t_cljs$core$async30412(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30415_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30415_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30416_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30416_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30417 = (i + (1));
i = G__30417;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4736__auto__ = [];
var len__4730__auto___30423 = arguments.length;
var i__4731__auto___30424 = (0);
while(true){
if((i__4731__auto___30424 < len__4730__auto___30423)){
args__4736__auto__.push((arguments[i__4731__auto___30424]));

var G__30425 = (i__4731__auto___30424 + (1));
i__4731__auto___30424 = G__30425;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30420){
var map__30421 = p__30420;
var map__30421__$1 = (((((!((map__30421 == null))))?(((((map__30421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30421):map__30421);
var opts = map__30421__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30418){
var G__30419 = cljs.core.first.call(null,seq30418);
var seq30418__$1 = cljs.core.next.call(null,seq30418);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30419,seq30418__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__30427 = arguments.length;
switch (G__30427) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30326__auto___30473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___30473){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto___30473){
return (function (state_30451){
var state_val_30452 = (state_30451[(1)]);
if((state_val_30452 === (7))){
var inst_30447 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
var statearr_30453_30474 = state_30451__$1;
(statearr_30453_30474[(2)] = inst_30447);

(statearr_30453_30474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (1))){
var state_30451__$1 = state_30451;
var statearr_30454_30475 = state_30451__$1;
(statearr_30454_30475[(2)] = null);

(statearr_30454_30475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (4))){
var inst_30430 = (state_30451[(7)]);
var inst_30430__$1 = (state_30451[(2)]);
var inst_30431 = (inst_30430__$1 == null);
var state_30451__$1 = (function (){var statearr_30455 = state_30451;
(statearr_30455[(7)] = inst_30430__$1);

return statearr_30455;
})();
if(cljs.core.truth_(inst_30431)){
var statearr_30456_30476 = state_30451__$1;
(statearr_30456_30476[(1)] = (5));

} else {
var statearr_30457_30477 = state_30451__$1;
(statearr_30457_30477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (13))){
var state_30451__$1 = state_30451;
var statearr_30458_30478 = state_30451__$1;
(statearr_30458_30478[(2)] = null);

(statearr_30458_30478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (6))){
var inst_30430 = (state_30451[(7)]);
var state_30451__$1 = state_30451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30451__$1,(11),to,inst_30430);
} else {
if((state_val_30452 === (3))){
var inst_30449 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30451__$1,inst_30449);
} else {
if((state_val_30452 === (12))){
var state_30451__$1 = state_30451;
var statearr_30459_30479 = state_30451__$1;
(statearr_30459_30479[(2)] = null);

(statearr_30459_30479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (2))){
var state_30451__$1 = state_30451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30451__$1,(4),from);
} else {
if((state_val_30452 === (11))){
var inst_30440 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
if(cljs.core.truth_(inst_30440)){
var statearr_30460_30480 = state_30451__$1;
(statearr_30460_30480[(1)] = (12));

} else {
var statearr_30461_30481 = state_30451__$1;
(statearr_30461_30481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (9))){
var state_30451__$1 = state_30451;
var statearr_30462_30482 = state_30451__$1;
(statearr_30462_30482[(2)] = null);

(statearr_30462_30482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (5))){
var state_30451__$1 = state_30451;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30463_30483 = state_30451__$1;
(statearr_30463_30483[(1)] = (8));

} else {
var statearr_30464_30484 = state_30451__$1;
(statearr_30464_30484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (14))){
var inst_30445 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
var statearr_30465_30485 = state_30451__$1;
(statearr_30465_30485[(2)] = inst_30445);

(statearr_30465_30485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (10))){
var inst_30437 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
var statearr_30466_30486 = state_30451__$1;
(statearr_30466_30486[(2)] = inst_30437);

(statearr_30466_30486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (8))){
var inst_30434 = cljs.core.async.close_BANG_.call(null,to);
var state_30451__$1 = state_30451;
var statearr_30467_30487 = state_30451__$1;
(statearr_30467_30487[(2)] = inst_30434);

(statearr_30467_30487[(1)] = (10));


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
});})(c__30326__auto___30473))
;
return ((function (switch__30231__auto__,c__30326__auto___30473){
return (function() {
var cljs$core$async$state_machine__30232__auto__ = null;
var cljs$core$async$state_machine__30232__auto____0 = (function (){
var statearr_30468 = [null,null,null,null,null,null,null,null];
(statearr_30468[(0)] = cljs$core$async$state_machine__30232__auto__);

(statearr_30468[(1)] = (1));

return statearr_30468;
});
var cljs$core$async$state_machine__30232__auto____1 = (function (state_30451){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_30451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e30469){if((e30469 instanceof Object)){
var ex__30235__auto__ = e30469;
var statearr_30470_30488 = state_30451;
(statearr_30470_30488[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30489 = state_30451;
state_30451 = G__30489;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$state_machine__30232__auto__ = function(state_30451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30232__auto____1.call(this,state_30451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30232__auto____0;
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30232__auto____1;
return cljs$core$async$state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto___30473))
})();
var state__30328__auto__ = (function (){var statearr_30471 = f__30327__auto__.call(null);
(statearr_30471[(6)] = c__30326__auto___30473);

return statearr_30471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___30473))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30490){
var vec__30491 = p__30490;
var v = cljs.core.nth.call(null,vec__30491,(0),null);
var p = cljs.core.nth.call(null,vec__30491,(1),null);
var job = vec__30491;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30326__auto___30662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___30662,res,vec__30491,v,p,job,jobs,results){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto___30662,res,vec__30491,v,p,job,jobs,results){
return (function (state_30498){
var state_val_30499 = (state_30498[(1)]);
if((state_val_30499 === (1))){
var state_30498__$1 = state_30498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30498__$1,(2),res,v);
} else {
if((state_val_30499 === (2))){
var inst_30495 = (state_30498[(2)]);
var inst_30496 = cljs.core.async.close_BANG_.call(null,res);
var state_30498__$1 = (function (){var statearr_30500 = state_30498;
(statearr_30500[(7)] = inst_30495);

return statearr_30500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30498__$1,inst_30496);
} else {
return null;
}
}
});})(c__30326__auto___30662,res,vec__30491,v,p,job,jobs,results))
;
return ((function (switch__30231__auto__,c__30326__auto___30662,res,vec__30491,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____0 = (function (){
var statearr_30501 = [null,null,null,null,null,null,null,null];
(statearr_30501[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__);

(statearr_30501[(1)] = (1));

return statearr_30501;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____1 = (function (state_30498){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_30498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e30502){if((e30502 instanceof Object)){
var ex__30235__auto__ = e30502;
var statearr_30503_30663 = state_30498;
(statearr_30503_30663[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30664 = state_30498;
state_30498 = G__30664;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__ = function(state_30498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____1.call(this,state_30498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto___30662,res,vec__30491,v,p,job,jobs,results))
})();
var state__30328__auto__ = (function (){var statearr_30504 = f__30327__auto__.call(null);
(statearr_30504[(6)] = c__30326__auto___30662);

return statearr_30504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___30662,res,vec__30491,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30505){
var vec__30506 = p__30505;
var v = cljs.core.nth.call(null,vec__30506,(0),null);
var p = cljs.core.nth.call(null,vec__30506,(1),null);
var job = vec__30506;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___30665 = n;
var __30666 = (0);
while(true){
if((__30666 < n__4607__auto___30665)){
var G__30509_30667 = type;
var G__30509_30668__$1 = (((G__30509_30667 instanceof cljs.core.Keyword))?G__30509_30667.fqn:null);
switch (G__30509_30668__$1) {
case "compute":
var c__30326__auto___30670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30666,c__30326__auto___30670,G__30509_30667,G__30509_30668__$1,n__4607__auto___30665,jobs,results,process,async){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (__30666,c__30326__auto___30670,G__30509_30667,G__30509_30668__$1,n__4607__auto___30665,jobs,results,process,async){
return (function (state_30522){
var state_val_30523 = (state_30522[(1)]);
if((state_val_30523 === (1))){
var state_30522__$1 = state_30522;
var statearr_30524_30671 = state_30522__$1;
(statearr_30524_30671[(2)] = null);

(statearr_30524_30671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30523 === (2))){
var state_30522__$1 = state_30522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30522__$1,(4),jobs);
} else {
if((state_val_30523 === (3))){
var inst_30520 = (state_30522[(2)]);
var state_30522__$1 = state_30522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30522__$1,inst_30520);
} else {
if((state_val_30523 === (4))){
var inst_30512 = (state_30522[(2)]);
var inst_30513 = process.call(null,inst_30512);
var state_30522__$1 = state_30522;
if(cljs.core.truth_(inst_30513)){
var statearr_30525_30672 = state_30522__$1;
(statearr_30525_30672[(1)] = (5));

} else {
var statearr_30526_30673 = state_30522__$1;
(statearr_30526_30673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30523 === (5))){
var state_30522__$1 = state_30522;
var statearr_30527_30674 = state_30522__$1;
(statearr_30527_30674[(2)] = null);

(statearr_30527_30674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30523 === (6))){
var state_30522__$1 = state_30522;
var statearr_30528_30675 = state_30522__$1;
(statearr_30528_30675[(2)] = null);

(statearr_30528_30675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30523 === (7))){
var inst_30518 = (state_30522[(2)]);
var state_30522__$1 = state_30522;
var statearr_30529_30676 = state_30522__$1;
(statearr_30529_30676[(2)] = inst_30518);

(statearr_30529_30676[(1)] = (3));


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
});})(__30666,c__30326__auto___30670,G__30509_30667,G__30509_30668__$1,n__4607__auto___30665,jobs,results,process,async))
;
return ((function (__30666,switch__30231__auto__,c__30326__auto___30670,G__30509_30667,G__30509_30668__$1,n__4607__auto___30665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____0 = (function (){
var statearr_30530 = [null,null,null,null,null,null,null];
(statearr_30530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__);

(statearr_30530[(1)] = (1));

return statearr_30530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____1 = (function (state_30522){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_30522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e30531){if((e30531 instanceof Object)){
var ex__30235__auto__ = e30531;
var statearr_30532_30677 = state_30522;
(statearr_30532_30677[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30678 = state_30522;
state_30522 = G__30678;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__ = function(state_30522){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____1.call(this,state_30522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__;
})()
;})(__30666,switch__30231__auto__,c__30326__auto___30670,G__30509_30667,G__30509_30668__$1,n__4607__auto___30665,jobs,results,process,async))
})();
var state__30328__auto__ = (function (){var statearr_30533 = f__30327__auto__.call(null);
(statearr_30533[(6)] = c__30326__auto___30670);

return statearr_30533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(__30666,c__30326__auto___30670,G__30509_30667,G__30509_30668__$1,n__4607__auto___30665,jobs,results,process,async))
);


break;
case "async":
var c__30326__auto___30679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30666,c__30326__auto___30679,G__30509_30667,G__30509_30668__$1,n__4607__auto___30665,jobs,results,process,async){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (__30666,c__30326__auto___30679,G__30509_30667,G__30509_30668__$1,n__4607__auto___30665,jobs,results,process,async){
return (function (state_30546){
var state_val_30547 = (state_30546[(1)]);
if((state_val_30547 === (1))){
var state_30546__$1 = state_30546;
var statearr_30548_30680 = state_30546__$1;
(statearr_30548_30680[(2)] = null);

(statearr_30548_30680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (2))){
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(4),jobs);
} else {
if((state_val_30547 === (3))){
var inst_30544 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30546__$1,inst_30544);
} else {
if((state_val_30547 === (4))){
var inst_30536 = (state_30546[(2)]);
var inst_30537 = async.call(null,inst_30536);
var state_30546__$1 = state_30546;
if(cljs.core.truth_(inst_30537)){
var statearr_30549_30681 = state_30546__$1;
(statearr_30549_30681[(1)] = (5));

} else {
var statearr_30550_30682 = state_30546__$1;
(statearr_30550_30682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (5))){
var state_30546__$1 = state_30546;
var statearr_30551_30683 = state_30546__$1;
(statearr_30551_30683[(2)] = null);

(statearr_30551_30683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (6))){
var state_30546__$1 = state_30546;
var statearr_30552_30684 = state_30546__$1;
(statearr_30552_30684[(2)] = null);

(statearr_30552_30684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (7))){
var inst_30542 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30553_30685 = state_30546__$1;
(statearr_30553_30685[(2)] = inst_30542);

(statearr_30553_30685[(1)] = (3));


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
});})(__30666,c__30326__auto___30679,G__30509_30667,G__30509_30668__$1,n__4607__auto___30665,jobs,results,process,async))
;
return ((function (__30666,switch__30231__auto__,c__30326__auto___30679,G__30509_30667,G__30509_30668__$1,n__4607__auto___30665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____0 = (function (){
var statearr_30554 = [null,null,null,null,null,null,null];
(statearr_30554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__);

(statearr_30554[(1)] = (1));

return statearr_30554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____1 = (function (state_30546){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_30546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e30555){if((e30555 instanceof Object)){
var ex__30235__auto__ = e30555;
var statearr_30556_30686 = state_30546;
(statearr_30556_30686[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30687 = state_30546;
state_30546 = G__30687;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__ = function(state_30546){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____1.call(this,state_30546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__;
})()
;})(__30666,switch__30231__auto__,c__30326__auto___30679,G__30509_30667,G__30509_30668__$1,n__4607__auto___30665,jobs,results,process,async))
})();
var state__30328__auto__ = (function (){var statearr_30557 = f__30327__auto__.call(null);
(statearr_30557[(6)] = c__30326__auto___30679);

return statearr_30557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(__30666,c__30326__auto___30679,G__30509_30667,G__30509_30668__$1,n__4607__auto___30665,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30509_30668__$1)].join('')));

}

var G__30688 = (__30666 + (1));
__30666 = G__30688;
continue;
} else {
}
break;
}

var c__30326__auto___30689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___30689,jobs,results,process,async){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto___30689,jobs,results,process,async){
return (function (state_30579){
var state_val_30580 = (state_30579[(1)]);
if((state_val_30580 === (7))){
var inst_30575 = (state_30579[(2)]);
var state_30579__$1 = state_30579;
var statearr_30581_30690 = state_30579__$1;
(statearr_30581_30690[(2)] = inst_30575);

(statearr_30581_30690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30580 === (1))){
var state_30579__$1 = state_30579;
var statearr_30582_30691 = state_30579__$1;
(statearr_30582_30691[(2)] = null);

(statearr_30582_30691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30580 === (4))){
var inst_30560 = (state_30579[(7)]);
var inst_30560__$1 = (state_30579[(2)]);
var inst_30561 = (inst_30560__$1 == null);
var state_30579__$1 = (function (){var statearr_30583 = state_30579;
(statearr_30583[(7)] = inst_30560__$1);

return statearr_30583;
})();
if(cljs.core.truth_(inst_30561)){
var statearr_30584_30692 = state_30579__$1;
(statearr_30584_30692[(1)] = (5));

} else {
var statearr_30585_30693 = state_30579__$1;
(statearr_30585_30693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30580 === (6))){
var inst_30565 = (state_30579[(8)]);
var inst_30560 = (state_30579[(7)]);
var inst_30565__$1 = cljs.core.async.chan.call(null,(1));
var inst_30566 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30567 = [inst_30560,inst_30565__$1];
var inst_30568 = (new cljs.core.PersistentVector(null,2,(5),inst_30566,inst_30567,null));
var state_30579__$1 = (function (){var statearr_30586 = state_30579;
(statearr_30586[(8)] = inst_30565__$1);

return statearr_30586;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30579__$1,(8),jobs,inst_30568);
} else {
if((state_val_30580 === (3))){
var inst_30577 = (state_30579[(2)]);
var state_30579__$1 = state_30579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30579__$1,inst_30577);
} else {
if((state_val_30580 === (2))){
var state_30579__$1 = state_30579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30579__$1,(4),from);
} else {
if((state_val_30580 === (9))){
var inst_30572 = (state_30579[(2)]);
var state_30579__$1 = (function (){var statearr_30587 = state_30579;
(statearr_30587[(9)] = inst_30572);

return statearr_30587;
})();
var statearr_30588_30694 = state_30579__$1;
(statearr_30588_30694[(2)] = null);

(statearr_30588_30694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30580 === (5))){
var inst_30563 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30579__$1 = state_30579;
var statearr_30589_30695 = state_30579__$1;
(statearr_30589_30695[(2)] = inst_30563);

(statearr_30589_30695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30580 === (8))){
var inst_30565 = (state_30579[(8)]);
var inst_30570 = (state_30579[(2)]);
var state_30579__$1 = (function (){var statearr_30590 = state_30579;
(statearr_30590[(10)] = inst_30570);

return statearr_30590;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30579__$1,(9),results,inst_30565);
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
});})(c__30326__auto___30689,jobs,results,process,async))
;
return ((function (switch__30231__auto__,c__30326__auto___30689,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____0 = (function (){
var statearr_30591 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__);

(statearr_30591[(1)] = (1));

return statearr_30591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____1 = (function (state_30579){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_30579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e30592){if((e30592 instanceof Object)){
var ex__30235__auto__ = e30592;
var statearr_30593_30696 = state_30579;
(statearr_30593_30696[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30697 = state_30579;
state_30579 = G__30697;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__ = function(state_30579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____1.call(this,state_30579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto___30689,jobs,results,process,async))
})();
var state__30328__auto__ = (function (){var statearr_30594 = f__30327__auto__.call(null);
(statearr_30594[(6)] = c__30326__auto___30689);

return statearr_30594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___30689,jobs,results,process,async))
);


var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__,jobs,results,process,async){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto__,jobs,results,process,async){
return (function (state_30632){
var state_val_30633 = (state_30632[(1)]);
if((state_val_30633 === (7))){
var inst_30628 = (state_30632[(2)]);
var state_30632__$1 = state_30632;
var statearr_30634_30698 = state_30632__$1;
(statearr_30634_30698[(2)] = inst_30628);

(statearr_30634_30698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (20))){
var state_30632__$1 = state_30632;
var statearr_30635_30699 = state_30632__$1;
(statearr_30635_30699[(2)] = null);

(statearr_30635_30699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (1))){
var state_30632__$1 = state_30632;
var statearr_30636_30700 = state_30632__$1;
(statearr_30636_30700[(2)] = null);

(statearr_30636_30700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (4))){
var inst_30597 = (state_30632[(7)]);
var inst_30597__$1 = (state_30632[(2)]);
var inst_30598 = (inst_30597__$1 == null);
var state_30632__$1 = (function (){var statearr_30637 = state_30632;
(statearr_30637[(7)] = inst_30597__$1);

return statearr_30637;
})();
if(cljs.core.truth_(inst_30598)){
var statearr_30638_30701 = state_30632__$1;
(statearr_30638_30701[(1)] = (5));

} else {
var statearr_30639_30702 = state_30632__$1;
(statearr_30639_30702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (15))){
var inst_30610 = (state_30632[(8)]);
var state_30632__$1 = state_30632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30632__$1,(18),to,inst_30610);
} else {
if((state_val_30633 === (21))){
var inst_30623 = (state_30632[(2)]);
var state_30632__$1 = state_30632;
var statearr_30640_30703 = state_30632__$1;
(statearr_30640_30703[(2)] = inst_30623);

(statearr_30640_30703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (13))){
var inst_30625 = (state_30632[(2)]);
var state_30632__$1 = (function (){var statearr_30641 = state_30632;
(statearr_30641[(9)] = inst_30625);

return statearr_30641;
})();
var statearr_30642_30704 = state_30632__$1;
(statearr_30642_30704[(2)] = null);

(statearr_30642_30704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (6))){
var inst_30597 = (state_30632[(7)]);
var state_30632__$1 = state_30632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30632__$1,(11),inst_30597);
} else {
if((state_val_30633 === (17))){
var inst_30618 = (state_30632[(2)]);
var state_30632__$1 = state_30632;
if(cljs.core.truth_(inst_30618)){
var statearr_30643_30705 = state_30632__$1;
(statearr_30643_30705[(1)] = (19));

} else {
var statearr_30644_30706 = state_30632__$1;
(statearr_30644_30706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (3))){
var inst_30630 = (state_30632[(2)]);
var state_30632__$1 = state_30632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30632__$1,inst_30630);
} else {
if((state_val_30633 === (12))){
var inst_30607 = (state_30632[(10)]);
var state_30632__$1 = state_30632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30632__$1,(14),inst_30607);
} else {
if((state_val_30633 === (2))){
var state_30632__$1 = state_30632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30632__$1,(4),results);
} else {
if((state_val_30633 === (19))){
var state_30632__$1 = state_30632;
var statearr_30645_30707 = state_30632__$1;
(statearr_30645_30707[(2)] = null);

(statearr_30645_30707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (11))){
var inst_30607 = (state_30632[(2)]);
var state_30632__$1 = (function (){var statearr_30646 = state_30632;
(statearr_30646[(10)] = inst_30607);

return statearr_30646;
})();
var statearr_30647_30708 = state_30632__$1;
(statearr_30647_30708[(2)] = null);

(statearr_30647_30708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (9))){
var state_30632__$1 = state_30632;
var statearr_30648_30709 = state_30632__$1;
(statearr_30648_30709[(2)] = null);

(statearr_30648_30709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (5))){
var state_30632__$1 = state_30632;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30649_30710 = state_30632__$1;
(statearr_30649_30710[(1)] = (8));

} else {
var statearr_30650_30711 = state_30632__$1;
(statearr_30650_30711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (14))){
var inst_30612 = (state_30632[(11)]);
var inst_30610 = (state_30632[(8)]);
var inst_30610__$1 = (state_30632[(2)]);
var inst_30611 = (inst_30610__$1 == null);
var inst_30612__$1 = cljs.core.not.call(null,inst_30611);
var state_30632__$1 = (function (){var statearr_30651 = state_30632;
(statearr_30651[(11)] = inst_30612__$1);

(statearr_30651[(8)] = inst_30610__$1);

return statearr_30651;
})();
if(inst_30612__$1){
var statearr_30652_30712 = state_30632__$1;
(statearr_30652_30712[(1)] = (15));

} else {
var statearr_30653_30713 = state_30632__$1;
(statearr_30653_30713[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (16))){
var inst_30612 = (state_30632[(11)]);
var state_30632__$1 = state_30632;
var statearr_30654_30714 = state_30632__$1;
(statearr_30654_30714[(2)] = inst_30612);

(statearr_30654_30714[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (10))){
var inst_30604 = (state_30632[(2)]);
var state_30632__$1 = state_30632;
var statearr_30655_30715 = state_30632__$1;
(statearr_30655_30715[(2)] = inst_30604);

(statearr_30655_30715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (18))){
var inst_30615 = (state_30632[(2)]);
var state_30632__$1 = state_30632;
var statearr_30656_30716 = state_30632__$1;
(statearr_30656_30716[(2)] = inst_30615);

(statearr_30656_30716[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30633 === (8))){
var inst_30601 = cljs.core.async.close_BANG_.call(null,to);
var state_30632__$1 = state_30632;
var statearr_30657_30717 = state_30632__$1;
(statearr_30657_30717[(2)] = inst_30601);

(statearr_30657_30717[(1)] = (10));


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
});})(c__30326__auto__,jobs,results,process,async))
;
return ((function (switch__30231__auto__,c__30326__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____0 = (function (){
var statearr_30658 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__);

(statearr_30658[(1)] = (1));

return statearr_30658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____1 = (function (state_30632){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_30632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e30659){if((e30659 instanceof Object)){
var ex__30235__auto__ = e30659;
var statearr_30660_30718 = state_30632;
(statearr_30660_30718[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30719 = state_30632;
state_30632 = G__30719;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__ = function(state_30632){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____1.call(this,state_30632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto__,jobs,results,process,async))
})();
var state__30328__auto__ = (function (){var statearr_30661 = f__30327__auto__.call(null);
(statearr_30661[(6)] = c__30326__auto__);

return statearr_30661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__,jobs,results,process,async))
);

return c__30326__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30721 = arguments.length;
switch (G__30721) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__30724 = arguments.length;
switch (G__30724) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__30727 = arguments.length;
switch (G__30727) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30326__auto___30776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___30776,tc,fc){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto___30776,tc,fc){
return (function (state_30753){
var state_val_30754 = (state_30753[(1)]);
if((state_val_30754 === (7))){
var inst_30749 = (state_30753[(2)]);
var state_30753__$1 = state_30753;
var statearr_30755_30777 = state_30753__$1;
(statearr_30755_30777[(2)] = inst_30749);

(statearr_30755_30777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (1))){
var state_30753__$1 = state_30753;
var statearr_30756_30778 = state_30753__$1;
(statearr_30756_30778[(2)] = null);

(statearr_30756_30778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (4))){
var inst_30730 = (state_30753[(7)]);
var inst_30730__$1 = (state_30753[(2)]);
var inst_30731 = (inst_30730__$1 == null);
var state_30753__$1 = (function (){var statearr_30757 = state_30753;
(statearr_30757[(7)] = inst_30730__$1);

return statearr_30757;
})();
if(cljs.core.truth_(inst_30731)){
var statearr_30758_30779 = state_30753__$1;
(statearr_30758_30779[(1)] = (5));

} else {
var statearr_30759_30780 = state_30753__$1;
(statearr_30759_30780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (13))){
var state_30753__$1 = state_30753;
var statearr_30760_30781 = state_30753__$1;
(statearr_30760_30781[(2)] = null);

(statearr_30760_30781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (6))){
var inst_30730 = (state_30753[(7)]);
var inst_30736 = p.call(null,inst_30730);
var state_30753__$1 = state_30753;
if(cljs.core.truth_(inst_30736)){
var statearr_30761_30782 = state_30753__$1;
(statearr_30761_30782[(1)] = (9));

} else {
var statearr_30762_30783 = state_30753__$1;
(statearr_30762_30783[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (3))){
var inst_30751 = (state_30753[(2)]);
var state_30753__$1 = state_30753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30753__$1,inst_30751);
} else {
if((state_val_30754 === (12))){
var state_30753__$1 = state_30753;
var statearr_30763_30784 = state_30753__$1;
(statearr_30763_30784[(2)] = null);

(statearr_30763_30784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (2))){
var state_30753__$1 = state_30753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30753__$1,(4),ch);
} else {
if((state_val_30754 === (11))){
var inst_30730 = (state_30753[(7)]);
var inst_30740 = (state_30753[(2)]);
var state_30753__$1 = state_30753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30753__$1,(8),inst_30740,inst_30730);
} else {
if((state_val_30754 === (9))){
var state_30753__$1 = state_30753;
var statearr_30764_30785 = state_30753__$1;
(statearr_30764_30785[(2)] = tc);

(statearr_30764_30785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (5))){
var inst_30733 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30734 = cljs.core.async.close_BANG_.call(null,fc);
var state_30753__$1 = (function (){var statearr_30765 = state_30753;
(statearr_30765[(8)] = inst_30733);

return statearr_30765;
})();
var statearr_30766_30786 = state_30753__$1;
(statearr_30766_30786[(2)] = inst_30734);

(statearr_30766_30786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (14))){
var inst_30747 = (state_30753[(2)]);
var state_30753__$1 = state_30753;
var statearr_30767_30787 = state_30753__$1;
(statearr_30767_30787[(2)] = inst_30747);

(statearr_30767_30787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (10))){
var state_30753__$1 = state_30753;
var statearr_30768_30788 = state_30753__$1;
(statearr_30768_30788[(2)] = fc);

(statearr_30768_30788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (8))){
var inst_30742 = (state_30753[(2)]);
var state_30753__$1 = state_30753;
if(cljs.core.truth_(inst_30742)){
var statearr_30769_30789 = state_30753__$1;
(statearr_30769_30789[(1)] = (12));

} else {
var statearr_30770_30790 = state_30753__$1;
(statearr_30770_30790[(1)] = (13));

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
});})(c__30326__auto___30776,tc,fc))
;
return ((function (switch__30231__auto__,c__30326__auto___30776,tc,fc){
return (function() {
var cljs$core$async$state_machine__30232__auto__ = null;
var cljs$core$async$state_machine__30232__auto____0 = (function (){
var statearr_30771 = [null,null,null,null,null,null,null,null,null];
(statearr_30771[(0)] = cljs$core$async$state_machine__30232__auto__);

(statearr_30771[(1)] = (1));

return statearr_30771;
});
var cljs$core$async$state_machine__30232__auto____1 = (function (state_30753){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_30753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e30772){if((e30772 instanceof Object)){
var ex__30235__auto__ = e30772;
var statearr_30773_30791 = state_30753;
(statearr_30773_30791[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30792 = state_30753;
state_30753 = G__30792;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$state_machine__30232__auto__ = function(state_30753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30232__auto____1.call(this,state_30753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30232__auto____0;
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30232__auto____1;
return cljs$core$async$state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto___30776,tc,fc))
})();
var state__30328__auto__ = (function (){var statearr_30774 = f__30327__auto__.call(null);
(statearr_30774[(6)] = c__30326__auto___30776);

return statearr_30774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___30776,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto__){
return (function (state_30813){
var state_val_30814 = (state_30813[(1)]);
if((state_val_30814 === (7))){
var inst_30809 = (state_30813[(2)]);
var state_30813__$1 = state_30813;
var statearr_30815_30833 = state_30813__$1;
(statearr_30815_30833[(2)] = inst_30809);

(statearr_30815_30833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30814 === (1))){
var inst_30793 = init;
var state_30813__$1 = (function (){var statearr_30816 = state_30813;
(statearr_30816[(7)] = inst_30793);

return statearr_30816;
})();
var statearr_30817_30834 = state_30813__$1;
(statearr_30817_30834[(2)] = null);

(statearr_30817_30834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30814 === (4))){
var inst_30796 = (state_30813[(8)]);
var inst_30796__$1 = (state_30813[(2)]);
var inst_30797 = (inst_30796__$1 == null);
var state_30813__$1 = (function (){var statearr_30818 = state_30813;
(statearr_30818[(8)] = inst_30796__$1);

return statearr_30818;
})();
if(cljs.core.truth_(inst_30797)){
var statearr_30819_30835 = state_30813__$1;
(statearr_30819_30835[(1)] = (5));

} else {
var statearr_30820_30836 = state_30813__$1;
(statearr_30820_30836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30814 === (6))){
var inst_30800 = (state_30813[(9)]);
var inst_30796 = (state_30813[(8)]);
var inst_30793 = (state_30813[(7)]);
var inst_30800__$1 = f.call(null,inst_30793,inst_30796);
var inst_30801 = cljs.core.reduced_QMARK_.call(null,inst_30800__$1);
var state_30813__$1 = (function (){var statearr_30821 = state_30813;
(statearr_30821[(9)] = inst_30800__$1);

return statearr_30821;
})();
if(inst_30801){
var statearr_30822_30837 = state_30813__$1;
(statearr_30822_30837[(1)] = (8));

} else {
var statearr_30823_30838 = state_30813__$1;
(statearr_30823_30838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30814 === (3))){
var inst_30811 = (state_30813[(2)]);
var state_30813__$1 = state_30813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30813__$1,inst_30811);
} else {
if((state_val_30814 === (2))){
var state_30813__$1 = state_30813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30813__$1,(4),ch);
} else {
if((state_val_30814 === (9))){
var inst_30800 = (state_30813[(9)]);
var inst_30793 = inst_30800;
var state_30813__$1 = (function (){var statearr_30824 = state_30813;
(statearr_30824[(7)] = inst_30793);

return statearr_30824;
})();
var statearr_30825_30839 = state_30813__$1;
(statearr_30825_30839[(2)] = null);

(statearr_30825_30839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30814 === (5))){
var inst_30793 = (state_30813[(7)]);
var state_30813__$1 = state_30813;
var statearr_30826_30840 = state_30813__$1;
(statearr_30826_30840[(2)] = inst_30793);

(statearr_30826_30840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30814 === (10))){
var inst_30807 = (state_30813[(2)]);
var state_30813__$1 = state_30813;
var statearr_30827_30841 = state_30813__$1;
(statearr_30827_30841[(2)] = inst_30807);

(statearr_30827_30841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30814 === (8))){
var inst_30800 = (state_30813[(9)]);
var inst_30803 = cljs.core.deref.call(null,inst_30800);
var state_30813__$1 = state_30813;
var statearr_30828_30842 = state_30813__$1;
(statearr_30828_30842[(2)] = inst_30803);

(statearr_30828_30842[(1)] = (10));


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
});})(c__30326__auto__))
;
return ((function (switch__30231__auto__,c__30326__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30232__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30232__auto____0 = (function (){
var statearr_30829 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30829[(0)] = cljs$core$async$reduce_$_state_machine__30232__auto__);

(statearr_30829[(1)] = (1));

return statearr_30829;
});
var cljs$core$async$reduce_$_state_machine__30232__auto____1 = (function (state_30813){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_30813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e30830){if((e30830 instanceof Object)){
var ex__30235__auto__ = e30830;
var statearr_30831_30843 = state_30813;
(statearr_30831_30843[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30844 = state_30813;
state_30813 = G__30844;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30232__auto__ = function(state_30813){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30232__auto____1.call(this,state_30813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30232__auto____0;
cljs$core$async$reduce_$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30232__auto____1;
return cljs$core$async$reduce_$_state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto__))
})();
var state__30328__auto__ = (function (){var statearr_30832 = f__30327__auto__.call(null);
(statearr_30832[(6)] = c__30326__auto__);

return statearr_30832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__))
);

return c__30326__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__,f__$1){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto__,f__$1){
return (function (state_30850){
var state_val_30851 = (state_30850[(1)]);
if((state_val_30851 === (1))){
var inst_30845 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30850__$1 = state_30850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30850__$1,(2),inst_30845);
} else {
if((state_val_30851 === (2))){
var inst_30847 = (state_30850[(2)]);
var inst_30848 = f__$1.call(null,inst_30847);
var state_30850__$1 = state_30850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30850__$1,inst_30848);
} else {
return null;
}
}
});})(c__30326__auto__,f__$1))
;
return ((function (switch__30231__auto__,c__30326__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30232__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30232__auto____0 = (function (){
var statearr_30852 = [null,null,null,null,null,null,null];
(statearr_30852[(0)] = cljs$core$async$transduce_$_state_machine__30232__auto__);

(statearr_30852[(1)] = (1));

return statearr_30852;
});
var cljs$core$async$transduce_$_state_machine__30232__auto____1 = (function (state_30850){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_30850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e30853){if((e30853 instanceof Object)){
var ex__30235__auto__ = e30853;
var statearr_30854_30856 = state_30850;
(statearr_30854_30856[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30857 = state_30850;
state_30850 = G__30857;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30232__auto__ = function(state_30850){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30232__auto____1.call(this,state_30850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30232__auto____0;
cljs$core$async$transduce_$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30232__auto____1;
return cljs$core$async$transduce_$_state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto__,f__$1))
})();
var state__30328__auto__ = (function (){var statearr_30855 = f__30327__auto__.call(null);
(statearr_30855[(6)] = c__30326__auto__);

return statearr_30855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__,f__$1))
);

return c__30326__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30859 = arguments.length;
switch (G__30859) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto__){
return (function (state_30884){
var state_val_30885 = (state_30884[(1)]);
if((state_val_30885 === (7))){
var inst_30866 = (state_30884[(2)]);
var state_30884__$1 = state_30884;
var statearr_30886_30907 = state_30884__$1;
(statearr_30886_30907[(2)] = inst_30866);

(statearr_30886_30907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (1))){
var inst_30860 = cljs.core.seq.call(null,coll);
var inst_30861 = inst_30860;
var state_30884__$1 = (function (){var statearr_30887 = state_30884;
(statearr_30887[(7)] = inst_30861);

return statearr_30887;
})();
var statearr_30888_30908 = state_30884__$1;
(statearr_30888_30908[(2)] = null);

(statearr_30888_30908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (4))){
var inst_30861 = (state_30884[(7)]);
var inst_30864 = cljs.core.first.call(null,inst_30861);
var state_30884__$1 = state_30884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30884__$1,(7),ch,inst_30864);
} else {
if((state_val_30885 === (13))){
var inst_30878 = (state_30884[(2)]);
var state_30884__$1 = state_30884;
var statearr_30889_30909 = state_30884__$1;
(statearr_30889_30909[(2)] = inst_30878);

(statearr_30889_30909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (6))){
var inst_30869 = (state_30884[(2)]);
var state_30884__$1 = state_30884;
if(cljs.core.truth_(inst_30869)){
var statearr_30890_30910 = state_30884__$1;
(statearr_30890_30910[(1)] = (8));

} else {
var statearr_30891_30911 = state_30884__$1;
(statearr_30891_30911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (3))){
var inst_30882 = (state_30884[(2)]);
var state_30884__$1 = state_30884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30884__$1,inst_30882);
} else {
if((state_val_30885 === (12))){
var state_30884__$1 = state_30884;
var statearr_30892_30912 = state_30884__$1;
(statearr_30892_30912[(2)] = null);

(statearr_30892_30912[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (2))){
var inst_30861 = (state_30884[(7)]);
var state_30884__$1 = state_30884;
if(cljs.core.truth_(inst_30861)){
var statearr_30893_30913 = state_30884__$1;
(statearr_30893_30913[(1)] = (4));

} else {
var statearr_30894_30914 = state_30884__$1;
(statearr_30894_30914[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (11))){
var inst_30875 = cljs.core.async.close_BANG_.call(null,ch);
var state_30884__$1 = state_30884;
var statearr_30895_30915 = state_30884__$1;
(statearr_30895_30915[(2)] = inst_30875);

(statearr_30895_30915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (9))){
var state_30884__$1 = state_30884;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30896_30916 = state_30884__$1;
(statearr_30896_30916[(1)] = (11));

} else {
var statearr_30897_30917 = state_30884__$1;
(statearr_30897_30917[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (5))){
var inst_30861 = (state_30884[(7)]);
var state_30884__$1 = state_30884;
var statearr_30898_30918 = state_30884__$1;
(statearr_30898_30918[(2)] = inst_30861);

(statearr_30898_30918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (10))){
var inst_30880 = (state_30884[(2)]);
var state_30884__$1 = state_30884;
var statearr_30899_30919 = state_30884__$1;
(statearr_30899_30919[(2)] = inst_30880);

(statearr_30899_30919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (8))){
var inst_30861 = (state_30884[(7)]);
var inst_30871 = cljs.core.next.call(null,inst_30861);
var inst_30861__$1 = inst_30871;
var state_30884__$1 = (function (){var statearr_30900 = state_30884;
(statearr_30900[(7)] = inst_30861__$1);

return statearr_30900;
})();
var statearr_30901_30920 = state_30884__$1;
(statearr_30901_30920[(2)] = null);

(statearr_30901_30920[(1)] = (2));


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
});})(c__30326__auto__))
;
return ((function (switch__30231__auto__,c__30326__auto__){
return (function() {
var cljs$core$async$state_machine__30232__auto__ = null;
var cljs$core$async$state_machine__30232__auto____0 = (function (){
var statearr_30902 = [null,null,null,null,null,null,null,null];
(statearr_30902[(0)] = cljs$core$async$state_machine__30232__auto__);

(statearr_30902[(1)] = (1));

return statearr_30902;
});
var cljs$core$async$state_machine__30232__auto____1 = (function (state_30884){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_30884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e30903){if((e30903 instanceof Object)){
var ex__30235__auto__ = e30903;
var statearr_30904_30921 = state_30884;
(statearr_30904_30921[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30922 = state_30884;
state_30884 = G__30922;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$state_machine__30232__auto__ = function(state_30884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30232__auto____1.call(this,state_30884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30232__auto____0;
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30232__auto____1;
return cljs$core$async$state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto__))
})();
var state__30328__auto__ = (function (){var statearr_30905 = f__30327__auto__.call(null);
(statearr_30905[(6)] = c__30326__auto__);

return statearr_30905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__))
);

return c__30326__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30923 = (function (ch,cs,meta30924){
this.ch = ch;
this.cs = cs;
this.meta30924 = meta30924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30925,meta30924__$1){
var self__ = this;
var _30925__$1 = this;
return (new cljs.core.async.t_cljs$core$async30923(self__.ch,self__.cs,meta30924__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30925){
var self__ = this;
var _30925__$1 = this;
return self__.meta30924;
});})(cs))
;

cljs.core.async.t_cljs$core$async30923.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30923.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30923.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30923.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30923.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30923.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30923.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30924","meta30924",-469346207,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30923";

cljs.core.async.t_cljs$core$async30923.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30923");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30923.
 */
cljs.core.async.__GT_t_cljs$core$async30923 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30923(ch__$1,cs__$1,meta30924){
return (new cljs.core.async.t_cljs$core$async30923(ch__$1,cs__$1,meta30924));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30923(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30326__auto___31145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___31145,cs,m,dchan,dctr,done){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto___31145,cs,m,dchan,dctr,done){
return (function (state_31060){
var state_val_31061 = (state_31060[(1)]);
if((state_val_31061 === (7))){
var inst_31056 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31062_31146 = state_31060__$1;
(statearr_31062_31146[(2)] = inst_31056);

(statearr_31062_31146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (20))){
var inst_30959 = (state_31060[(7)]);
var inst_30971 = cljs.core.first.call(null,inst_30959);
var inst_30972 = cljs.core.nth.call(null,inst_30971,(0),null);
var inst_30973 = cljs.core.nth.call(null,inst_30971,(1),null);
var state_31060__$1 = (function (){var statearr_31063 = state_31060;
(statearr_31063[(8)] = inst_30972);

return statearr_31063;
})();
if(cljs.core.truth_(inst_30973)){
var statearr_31064_31147 = state_31060__$1;
(statearr_31064_31147[(1)] = (22));

} else {
var statearr_31065_31148 = state_31060__$1;
(statearr_31065_31148[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (27))){
var inst_30928 = (state_31060[(9)]);
var inst_31008 = (state_31060[(10)]);
var inst_31001 = (state_31060[(11)]);
var inst_31003 = (state_31060[(12)]);
var inst_31008__$1 = cljs.core._nth.call(null,inst_31001,inst_31003);
var inst_31009 = cljs.core.async.put_BANG_.call(null,inst_31008__$1,inst_30928,done);
var state_31060__$1 = (function (){var statearr_31066 = state_31060;
(statearr_31066[(10)] = inst_31008__$1);

return statearr_31066;
})();
if(cljs.core.truth_(inst_31009)){
var statearr_31067_31149 = state_31060__$1;
(statearr_31067_31149[(1)] = (30));

} else {
var statearr_31068_31150 = state_31060__$1;
(statearr_31068_31150[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (1))){
var state_31060__$1 = state_31060;
var statearr_31069_31151 = state_31060__$1;
(statearr_31069_31151[(2)] = null);

(statearr_31069_31151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (24))){
var inst_30959 = (state_31060[(7)]);
var inst_30978 = (state_31060[(2)]);
var inst_30979 = cljs.core.next.call(null,inst_30959);
var inst_30937 = inst_30979;
var inst_30938 = null;
var inst_30939 = (0);
var inst_30940 = (0);
var state_31060__$1 = (function (){var statearr_31070 = state_31060;
(statearr_31070[(13)] = inst_30978);

(statearr_31070[(14)] = inst_30938);

(statearr_31070[(15)] = inst_30937);

(statearr_31070[(16)] = inst_30939);

(statearr_31070[(17)] = inst_30940);

return statearr_31070;
})();
var statearr_31071_31152 = state_31060__$1;
(statearr_31071_31152[(2)] = null);

(statearr_31071_31152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (39))){
var state_31060__$1 = state_31060;
var statearr_31075_31153 = state_31060__$1;
(statearr_31075_31153[(2)] = null);

(statearr_31075_31153[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (4))){
var inst_30928 = (state_31060[(9)]);
var inst_30928__$1 = (state_31060[(2)]);
var inst_30929 = (inst_30928__$1 == null);
var state_31060__$1 = (function (){var statearr_31076 = state_31060;
(statearr_31076[(9)] = inst_30928__$1);

return statearr_31076;
})();
if(cljs.core.truth_(inst_30929)){
var statearr_31077_31154 = state_31060__$1;
(statearr_31077_31154[(1)] = (5));

} else {
var statearr_31078_31155 = state_31060__$1;
(statearr_31078_31155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (15))){
var inst_30938 = (state_31060[(14)]);
var inst_30937 = (state_31060[(15)]);
var inst_30939 = (state_31060[(16)]);
var inst_30940 = (state_31060[(17)]);
var inst_30955 = (state_31060[(2)]);
var inst_30956 = (inst_30940 + (1));
var tmp31072 = inst_30938;
var tmp31073 = inst_30937;
var tmp31074 = inst_30939;
var inst_30937__$1 = tmp31073;
var inst_30938__$1 = tmp31072;
var inst_30939__$1 = tmp31074;
var inst_30940__$1 = inst_30956;
var state_31060__$1 = (function (){var statearr_31079 = state_31060;
(statearr_31079[(14)] = inst_30938__$1);

(statearr_31079[(15)] = inst_30937__$1);

(statearr_31079[(16)] = inst_30939__$1);

(statearr_31079[(17)] = inst_30940__$1);

(statearr_31079[(18)] = inst_30955);

return statearr_31079;
})();
var statearr_31080_31156 = state_31060__$1;
(statearr_31080_31156[(2)] = null);

(statearr_31080_31156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (21))){
var inst_30982 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31084_31157 = state_31060__$1;
(statearr_31084_31157[(2)] = inst_30982);

(statearr_31084_31157[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (31))){
var inst_31008 = (state_31060[(10)]);
var inst_31012 = done.call(null,null);
var inst_31013 = cljs.core.async.untap_STAR_.call(null,m,inst_31008);
var state_31060__$1 = (function (){var statearr_31085 = state_31060;
(statearr_31085[(19)] = inst_31012);

return statearr_31085;
})();
var statearr_31086_31158 = state_31060__$1;
(statearr_31086_31158[(2)] = inst_31013);

(statearr_31086_31158[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (32))){
var inst_31002 = (state_31060[(20)]);
var inst_31000 = (state_31060[(21)]);
var inst_31001 = (state_31060[(11)]);
var inst_31003 = (state_31060[(12)]);
var inst_31015 = (state_31060[(2)]);
var inst_31016 = (inst_31003 + (1));
var tmp31081 = inst_31002;
var tmp31082 = inst_31000;
var tmp31083 = inst_31001;
var inst_31000__$1 = tmp31082;
var inst_31001__$1 = tmp31083;
var inst_31002__$1 = tmp31081;
var inst_31003__$1 = inst_31016;
var state_31060__$1 = (function (){var statearr_31087 = state_31060;
(statearr_31087[(20)] = inst_31002__$1);

(statearr_31087[(21)] = inst_31000__$1);

(statearr_31087[(22)] = inst_31015);

(statearr_31087[(11)] = inst_31001__$1);

(statearr_31087[(12)] = inst_31003__$1);

return statearr_31087;
})();
var statearr_31088_31159 = state_31060__$1;
(statearr_31088_31159[(2)] = null);

(statearr_31088_31159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (40))){
var inst_31028 = (state_31060[(23)]);
var inst_31032 = done.call(null,null);
var inst_31033 = cljs.core.async.untap_STAR_.call(null,m,inst_31028);
var state_31060__$1 = (function (){var statearr_31089 = state_31060;
(statearr_31089[(24)] = inst_31032);

return statearr_31089;
})();
var statearr_31090_31160 = state_31060__$1;
(statearr_31090_31160[(2)] = inst_31033);

(statearr_31090_31160[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (33))){
var inst_31019 = (state_31060[(25)]);
var inst_31021 = cljs.core.chunked_seq_QMARK_.call(null,inst_31019);
var state_31060__$1 = state_31060;
if(inst_31021){
var statearr_31091_31161 = state_31060__$1;
(statearr_31091_31161[(1)] = (36));

} else {
var statearr_31092_31162 = state_31060__$1;
(statearr_31092_31162[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (13))){
var inst_30949 = (state_31060[(26)]);
var inst_30952 = cljs.core.async.close_BANG_.call(null,inst_30949);
var state_31060__$1 = state_31060;
var statearr_31093_31163 = state_31060__$1;
(statearr_31093_31163[(2)] = inst_30952);

(statearr_31093_31163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (22))){
var inst_30972 = (state_31060[(8)]);
var inst_30975 = cljs.core.async.close_BANG_.call(null,inst_30972);
var state_31060__$1 = state_31060;
var statearr_31094_31164 = state_31060__$1;
(statearr_31094_31164[(2)] = inst_30975);

(statearr_31094_31164[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (36))){
var inst_31019 = (state_31060[(25)]);
var inst_31023 = cljs.core.chunk_first.call(null,inst_31019);
var inst_31024 = cljs.core.chunk_rest.call(null,inst_31019);
var inst_31025 = cljs.core.count.call(null,inst_31023);
var inst_31000 = inst_31024;
var inst_31001 = inst_31023;
var inst_31002 = inst_31025;
var inst_31003 = (0);
var state_31060__$1 = (function (){var statearr_31095 = state_31060;
(statearr_31095[(20)] = inst_31002);

(statearr_31095[(21)] = inst_31000);

(statearr_31095[(11)] = inst_31001);

(statearr_31095[(12)] = inst_31003);

return statearr_31095;
})();
var statearr_31096_31165 = state_31060__$1;
(statearr_31096_31165[(2)] = null);

(statearr_31096_31165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (41))){
var inst_31019 = (state_31060[(25)]);
var inst_31035 = (state_31060[(2)]);
var inst_31036 = cljs.core.next.call(null,inst_31019);
var inst_31000 = inst_31036;
var inst_31001 = null;
var inst_31002 = (0);
var inst_31003 = (0);
var state_31060__$1 = (function (){var statearr_31097 = state_31060;
(statearr_31097[(20)] = inst_31002);

(statearr_31097[(21)] = inst_31000);

(statearr_31097[(27)] = inst_31035);

(statearr_31097[(11)] = inst_31001);

(statearr_31097[(12)] = inst_31003);

return statearr_31097;
})();
var statearr_31098_31166 = state_31060__$1;
(statearr_31098_31166[(2)] = null);

(statearr_31098_31166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (43))){
var state_31060__$1 = state_31060;
var statearr_31099_31167 = state_31060__$1;
(statearr_31099_31167[(2)] = null);

(statearr_31099_31167[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (29))){
var inst_31044 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31100_31168 = state_31060__$1;
(statearr_31100_31168[(2)] = inst_31044);

(statearr_31100_31168[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (44))){
var inst_31053 = (state_31060[(2)]);
var state_31060__$1 = (function (){var statearr_31101 = state_31060;
(statearr_31101[(28)] = inst_31053);

return statearr_31101;
})();
var statearr_31102_31169 = state_31060__$1;
(statearr_31102_31169[(2)] = null);

(statearr_31102_31169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (6))){
var inst_30992 = (state_31060[(29)]);
var inst_30991 = cljs.core.deref.call(null,cs);
var inst_30992__$1 = cljs.core.keys.call(null,inst_30991);
var inst_30993 = cljs.core.count.call(null,inst_30992__$1);
var inst_30994 = cljs.core.reset_BANG_.call(null,dctr,inst_30993);
var inst_30999 = cljs.core.seq.call(null,inst_30992__$1);
var inst_31000 = inst_30999;
var inst_31001 = null;
var inst_31002 = (0);
var inst_31003 = (0);
var state_31060__$1 = (function (){var statearr_31103 = state_31060;
(statearr_31103[(29)] = inst_30992__$1);

(statearr_31103[(30)] = inst_30994);

(statearr_31103[(20)] = inst_31002);

(statearr_31103[(21)] = inst_31000);

(statearr_31103[(11)] = inst_31001);

(statearr_31103[(12)] = inst_31003);

return statearr_31103;
})();
var statearr_31104_31170 = state_31060__$1;
(statearr_31104_31170[(2)] = null);

(statearr_31104_31170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (28))){
var inst_31000 = (state_31060[(21)]);
var inst_31019 = (state_31060[(25)]);
var inst_31019__$1 = cljs.core.seq.call(null,inst_31000);
var state_31060__$1 = (function (){var statearr_31105 = state_31060;
(statearr_31105[(25)] = inst_31019__$1);

return statearr_31105;
})();
if(inst_31019__$1){
var statearr_31106_31171 = state_31060__$1;
(statearr_31106_31171[(1)] = (33));

} else {
var statearr_31107_31172 = state_31060__$1;
(statearr_31107_31172[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (25))){
var inst_31002 = (state_31060[(20)]);
var inst_31003 = (state_31060[(12)]);
var inst_31005 = (inst_31003 < inst_31002);
var inst_31006 = inst_31005;
var state_31060__$1 = state_31060;
if(cljs.core.truth_(inst_31006)){
var statearr_31108_31173 = state_31060__$1;
(statearr_31108_31173[(1)] = (27));

} else {
var statearr_31109_31174 = state_31060__$1;
(statearr_31109_31174[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (34))){
var state_31060__$1 = state_31060;
var statearr_31110_31175 = state_31060__$1;
(statearr_31110_31175[(2)] = null);

(statearr_31110_31175[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (17))){
var state_31060__$1 = state_31060;
var statearr_31111_31176 = state_31060__$1;
(statearr_31111_31176[(2)] = null);

(statearr_31111_31176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (3))){
var inst_31058 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31060__$1,inst_31058);
} else {
if((state_val_31061 === (12))){
var inst_30987 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31112_31177 = state_31060__$1;
(statearr_31112_31177[(2)] = inst_30987);

(statearr_31112_31177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (2))){
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,(4),ch);
} else {
if((state_val_31061 === (23))){
var state_31060__$1 = state_31060;
var statearr_31113_31178 = state_31060__$1;
(statearr_31113_31178[(2)] = null);

(statearr_31113_31178[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (35))){
var inst_31042 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31114_31179 = state_31060__$1;
(statearr_31114_31179[(2)] = inst_31042);

(statearr_31114_31179[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (19))){
var inst_30959 = (state_31060[(7)]);
var inst_30963 = cljs.core.chunk_first.call(null,inst_30959);
var inst_30964 = cljs.core.chunk_rest.call(null,inst_30959);
var inst_30965 = cljs.core.count.call(null,inst_30963);
var inst_30937 = inst_30964;
var inst_30938 = inst_30963;
var inst_30939 = inst_30965;
var inst_30940 = (0);
var state_31060__$1 = (function (){var statearr_31115 = state_31060;
(statearr_31115[(14)] = inst_30938);

(statearr_31115[(15)] = inst_30937);

(statearr_31115[(16)] = inst_30939);

(statearr_31115[(17)] = inst_30940);

return statearr_31115;
})();
var statearr_31116_31180 = state_31060__$1;
(statearr_31116_31180[(2)] = null);

(statearr_31116_31180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (11))){
var inst_30937 = (state_31060[(15)]);
var inst_30959 = (state_31060[(7)]);
var inst_30959__$1 = cljs.core.seq.call(null,inst_30937);
var state_31060__$1 = (function (){var statearr_31117 = state_31060;
(statearr_31117[(7)] = inst_30959__$1);

return statearr_31117;
})();
if(inst_30959__$1){
var statearr_31118_31181 = state_31060__$1;
(statearr_31118_31181[(1)] = (16));

} else {
var statearr_31119_31182 = state_31060__$1;
(statearr_31119_31182[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (9))){
var inst_30989 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31120_31183 = state_31060__$1;
(statearr_31120_31183[(2)] = inst_30989);

(statearr_31120_31183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (5))){
var inst_30935 = cljs.core.deref.call(null,cs);
var inst_30936 = cljs.core.seq.call(null,inst_30935);
var inst_30937 = inst_30936;
var inst_30938 = null;
var inst_30939 = (0);
var inst_30940 = (0);
var state_31060__$1 = (function (){var statearr_31121 = state_31060;
(statearr_31121[(14)] = inst_30938);

(statearr_31121[(15)] = inst_30937);

(statearr_31121[(16)] = inst_30939);

(statearr_31121[(17)] = inst_30940);

return statearr_31121;
})();
var statearr_31122_31184 = state_31060__$1;
(statearr_31122_31184[(2)] = null);

(statearr_31122_31184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (14))){
var state_31060__$1 = state_31060;
var statearr_31123_31185 = state_31060__$1;
(statearr_31123_31185[(2)] = null);

(statearr_31123_31185[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (45))){
var inst_31050 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31124_31186 = state_31060__$1;
(statearr_31124_31186[(2)] = inst_31050);

(statearr_31124_31186[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (26))){
var inst_30992 = (state_31060[(29)]);
var inst_31046 = (state_31060[(2)]);
var inst_31047 = cljs.core.seq.call(null,inst_30992);
var state_31060__$1 = (function (){var statearr_31125 = state_31060;
(statearr_31125[(31)] = inst_31046);

return statearr_31125;
})();
if(inst_31047){
var statearr_31126_31187 = state_31060__$1;
(statearr_31126_31187[(1)] = (42));

} else {
var statearr_31127_31188 = state_31060__$1;
(statearr_31127_31188[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (16))){
var inst_30959 = (state_31060[(7)]);
var inst_30961 = cljs.core.chunked_seq_QMARK_.call(null,inst_30959);
var state_31060__$1 = state_31060;
if(inst_30961){
var statearr_31128_31189 = state_31060__$1;
(statearr_31128_31189[(1)] = (19));

} else {
var statearr_31129_31190 = state_31060__$1;
(statearr_31129_31190[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (38))){
var inst_31039 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31130_31191 = state_31060__$1;
(statearr_31130_31191[(2)] = inst_31039);

(statearr_31130_31191[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (30))){
var state_31060__$1 = state_31060;
var statearr_31131_31192 = state_31060__$1;
(statearr_31131_31192[(2)] = null);

(statearr_31131_31192[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (10))){
var inst_30938 = (state_31060[(14)]);
var inst_30940 = (state_31060[(17)]);
var inst_30948 = cljs.core._nth.call(null,inst_30938,inst_30940);
var inst_30949 = cljs.core.nth.call(null,inst_30948,(0),null);
var inst_30950 = cljs.core.nth.call(null,inst_30948,(1),null);
var state_31060__$1 = (function (){var statearr_31132 = state_31060;
(statearr_31132[(26)] = inst_30949);

return statearr_31132;
})();
if(cljs.core.truth_(inst_30950)){
var statearr_31133_31193 = state_31060__$1;
(statearr_31133_31193[(1)] = (13));

} else {
var statearr_31134_31194 = state_31060__$1;
(statearr_31134_31194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (18))){
var inst_30985 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31135_31195 = state_31060__$1;
(statearr_31135_31195[(2)] = inst_30985);

(statearr_31135_31195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (42))){
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,(45),dchan);
} else {
if((state_val_31061 === (37))){
var inst_30928 = (state_31060[(9)]);
var inst_31028 = (state_31060[(23)]);
var inst_31019 = (state_31060[(25)]);
var inst_31028__$1 = cljs.core.first.call(null,inst_31019);
var inst_31029 = cljs.core.async.put_BANG_.call(null,inst_31028__$1,inst_30928,done);
var state_31060__$1 = (function (){var statearr_31136 = state_31060;
(statearr_31136[(23)] = inst_31028__$1);

return statearr_31136;
})();
if(cljs.core.truth_(inst_31029)){
var statearr_31137_31196 = state_31060__$1;
(statearr_31137_31196[(1)] = (39));

} else {
var statearr_31138_31197 = state_31060__$1;
(statearr_31138_31197[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (8))){
var inst_30939 = (state_31060[(16)]);
var inst_30940 = (state_31060[(17)]);
var inst_30942 = (inst_30940 < inst_30939);
var inst_30943 = inst_30942;
var state_31060__$1 = state_31060;
if(cljs.core.truth_(inst_30943)){
var statearr_31139_31198 = state_31060__$1;
(statearr_31139_31198[(1)] = (10));

} else {
var statearr_31140_31199 = state_31060__$1;
(statearr_31140_31199[(1)] = (11));

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
});})(c__30326__auto___31145,cs,m,dchan,dctr,done))
;
return ((function (switch__30231__auto__,c__30326__auto___31145,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30232__auto__ = null;
var cljs$core$async$mult_$_state_machine__30232__auto____0 = (function (){
var statearr_31141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31141[(0)] = cljs$core$async$mult_$_state_machine__30232__auto__);

(statearr_31141[(1)] = (1));

return statearr_31141;
});
var cljs$core$async$mult_$_state_machine__30232__auto____1 = (function (state_31060){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_31060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e31142){if((e31142 instanceof Object)){
var ex__30235__auto__ = e31142;
var statearr_31143_31200 = state_31060;
(statearr_31143_31200[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31201 = state_31060;
state_31060 = G__31201;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30232__auto__ = function(state_31060){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30232__auto____1.call(this,state_31060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30232__auto____0;
cljs$core$async$mult_$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30232__auto____1;
return cljs$core$async$mult_$_state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto___31145,cs,m,dchan,dctr,done))
})();
var state__30328__auto__ = (function (){var statearr_31144 = f__30327__auto__.call(null);
(statearr_31144[(6)] = c__30326__auto___31145);

return statearr_31144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___31145,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31203 = arguments.length;
switch (G__31203) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31215 = arguments.length;
var i__4731__auto___31216 = (0);
while(true){
if((i__4731__auto___31216 < len__4730__auto___31215)){
args__4736__auto__.push((arguments[i__4731__auto___31216]));

var G__31217 = (i__4731__auto___31216 + (1));
i__4731__auto___31216 = G__31217;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31209){
var map__31210 = p__31209;
var map__31210__$1 = (((((!((map__31210 == null))))?(((((map__31210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31210):map__31210);
var opts = map__31210__$1;
var statearr_31212_31218 = state;
(statearr_31212_31218[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__31210,map__31210__$1,opts){
return (function (val){
var statearr_31213_31219 = state;
(statearr_31213_31219[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31210,map__31210__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_31214_31220 = state;
(statearr_31214_31220[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31205){
var G__31206 = cljs.core.first.call(null,seq31205);
var seq31205__$1 = cljs.core.next.call(null,seq31205);
var G__31207 = cljs.core.first.call(null,seq31205__$1);
var seq31205__$2 = cljs.core.next.call(null,seq31205__$1);
var G__31208 = cljs.core.first.call(null,seq31205__$2);
var seq31205__$3 = cljs.core.next.call(null,seq31205__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31206,G__31207,G__31208,seq31205__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31221 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31221 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31222){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31222 = meta31222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31223,meta31222__$1){
var self__ = this;
var _31223__$1 = this;
return (new cljs.core.async.t_cljs$core$async31221(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31222__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31223){
var self__ = this;
var _31223__$1 = this;
return self__.meta31222;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31221.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31221.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31222","meta31222",-1259991936,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31221";

cljs.core.async.t_cljs$core$async31221.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31221");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31221.
 */
cljs.core.async.__GT_t_cljs$core$async31221 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31221(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31222){
return (new cljs.core.async.t_cljs$core$async31221(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31222));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31221(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30326__auto___31385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___31385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto___31385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31325){
var state_val_31326 = (state_31325[(1)]);
if((state_val_31326 === (7))){
var inst_31240 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
var statearr_31327_31386 = state_31325__$1;
(statearr_31327_31386[(2)] = inst_31240);

(statearr_31327_31386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (20))){
var inst_31252 = (state_31325[(7)]);
var state_31325__$1 = state_31325;
var statearr_31328_31387 = state_31325__$1;
(statearr_31328_31387[(2)] = inst_31252);

(statearr_31328_31387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (27))){
var state_31325__$1 = state_31325;
var statearr_31329_31388 = state_31325__$1;
(statearr_31329_31388[(2)] = null);

(statearr_31329_31388[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (1))){
var inst_31227 = (state_31325[(8)]);
var inst_31227__$1 = calc_state.call(null);
var inst_31229 = (inst_31227__$1 == null);
var inst_31230 = cljs.core.not.call(null,inst_31229);
var state_31325__$1 = (function (){var statearr_31330 = state_31325;
(statearr_31330[(8)] = inst_31227__$1);

return statearr_31330;
})();
if(inst_31230){
var statearr_31331_31389 = state_31325__$1;
(statearr_31331_31389[(1)] = (2));

} else {
var statearr_31332_31390 = state_31325__$1;
(statearr_31332_31390[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (24))){
var inst_31285 = (state_31325[(9)]);
var inst_31299 = (state_31325[(10)]);
var inst_31276 = (state_31325[(11)]);
var inst_31299__$1 = inst_31276.call(null,inst_31285);
var state_31325__$1 = (function (){var statearr_31333 = state_31325;
(statearr_31333[(10)] = inst_31299__$1);

return statearr_31333;
})();
if(cljs.core.truth_(inst_31299__$1)){
var statearr_31334_31391 = state_31325__$1;
(statearr_31334_31391[(1)] = (29));

} else {
var statearr_31335_31392 = state_31325__$1;
(statearr_31335_31392[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (4))){
var inst_31243 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
if(cljs.core.truth_(inst_31243)){
var statearr_31336_31393 = state_31325__$1;
(statearr_31336_31393[(1)] = (8));

} else {
var statearr_31337_31394 = state_31325__$1;
(statearr_31337_31394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (15))){
var inst_31270 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
if(cljs.core.truth_(inst_31270)){
var statearr_31338_31395 = state_31325__$1;
(statearr_31338_31395[(1)] = (19));

} else {
var statearr_31339_31396 = state_31325__$1;
(statearr_31339_31396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (21))){
var inst_31275 = (state_31325[(12)]);
var inst_31275__$1 = (state_31325[(2)]);
var inst_31276 = cljs.core.get.call(null,inst_31275__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31277 = cljs.core.get.call(null,inst_31275__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31278 = cljs.core.get.call(null,inst_31275__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31325__$1 = (function (){var statearr_31340 = state_31325;
(statearr_31340[(13)] = inst_31277);

(statearr_31340[(11)] = inst_31276);

(statearr_31340[(12)] = inst_31275__$1);

return statearr_31340;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31325__$1,(22),inst_31278);
} else {
if((state_val_31326 === (31))){
var inst_31307 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
if(cljs.core.truth_(inst_31307)){
var statearr_31341_31397 = state_31325__$1;
(statearr_31341_31397[(1)] = (32));

} else {
var statearr_31342_31398 = state_31325__$1;
(statearr_31342_31398[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (32))){
var inst_31284 = (state_31325[(14)]);
var state_31325__$1 = state_31325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31325__$1,(35),out,inst_31284);
} else {
if((state_val_31326 === (33))){
var inst_31275 = (state_31325[(12)]);
var inst_31252 = inst_31275;
var state_31325__$1 = (function (){var statearr_31343 = state_31325;
(statearr_31343[(7)] = inst_31252);

return statearr_31343;
})();
var statearr_31344_31399 = state_31325__$1;
(statearr_31344_31399[(2)] = null);

(statearr_31344_31399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (13))){
var inst_31252 = (state_31325[(7)]);
var inst_31259 = inst_31252.cljs$lang$protocol_mask$partition0$;
var inst_31260 = (inst_31259 & (64));
var inst_31261 = inst_31252.cljs$core$ISeq$;
var inst_31262 = (cljs.core.PROTOCOL_SENTINEL === inst_31261);
var inst_31263 = ((inst_31260) || (inst_31262));
var state_31325__$1 = state_31325;
if(cljs.core.truth_(inst_31263)){
var statearr_31345_31400 = state_31325__$1;
(statearr_31345_31400[(1)] = (16));

} else {
var statearr_31346_31401 = state_31325__$1;
(statearr_31346_31401[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (22))){
var inst_31285 = (state_31325[(9)]);
var inst_31284 = (state_31325[(14)]);
var inst_31283 = (state_31325[(2)]);
var inst_31284__$1 = cljs.core.nth.call(null,inst_31283,(0),null);
var inst_31285__$1 = cljs.core.nth.call(null,inst_31283,(1),null);
var inst_31286 = (inst_31284__$1 == null);
var inst_31287 = cljs.core._EQ_.call(null,inst_31285__$1,change);
var inst_31288 = ((inst_31286) || (inst_31287));
var state_31325__$1 = (function (){var statearr_31347 = state_31325;
(statearr_31347[(9)] = inst_31285__$1);

(statearr_31347[(14)] = inst_31284__$1);

return statearr_31347;
})();
if(cljs.core.truth_(inst_31288)){
var statearr_31348_31402 = state_31325__$1;
(statearr_31348_31402[(1)] = (23));

} else {
var statearr_31349_31403 = state_31325__$1;
(statearr_31349_31403[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (36))){
var inst_31275 = (state_31325[(12)]);
var inst_31252 = inst_31275;
var state_31325__$1 = (function (){var statearr_31350 = state_31325;
(statearr_31350[(7)] = inst_31252);

return statearr_31350;
})();
var statearr_31351_31404 = state_31325__$1;
(statearr_31351_31404[(2)] = null);

(statearr_31351_31404[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (29))){
var inst_31299 = (state_31325[(10)]);
var state_31325__$1 = state_31325;
var statearr_31352_31405 = state_31325__$1;
(statearr_31352_31405[(2)] = inst_31299);

(statearr_31352_31405[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (6))){
var state_31325__$1 = state_31325;
var statearr_31353_31406 = state_31325__$1;
(statearr_31353_31406[(2)] = false);

(statearr_31353_31406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (28))){
var inst_31295 = (state_31325[(2)]);
var inst_31296 = calc_state.call(null);
var inst_31252 = inst_31296;
var state_31325__$1 = (function (){var statearr_31354 = state_31325;
(statearr_31354[(15)] = inst_31295);

(statearr_31354[(7)] = inst_31252);

return statearr_31354;
})();
var statearr_31355_31407 = state_31325__$1;
(statearr_31355_31407[(2)] = null);

(statearr_31355_31407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (25))){
var inst_31321 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
var statearr_31356_31408 = state_31325__$1;
(statearr_31356_31408[(2)] = inst_31321);

(statearr_31356_31408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (34))){
var inst_31319 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
var statearr_31357_31409 = state_31325__$1;
(statearr_31357_31409[(2)] = inst_31319);

(statearr_31357_31409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (17))){
var state_31325__$1 = state_31325;
var statearr_31358_31410 = state_31325__$1;
(statearr_31358_31410[(2)] = false);

(statearr_31358_31410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (3))){
var state_31325__$1 = state_31325;
var statearr_31359_31411 = state_31325__$1;
(statearr_31359_31411[(2)] = false);

(statearr_31359_31411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (12))){
var inst_31323 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31325__$1,inst_31323);
} else {
if((state_val_31326 === (2))){
var inst_31227 = (state_31325[(8)]);
var inst_31232 = inst_31227.cljs$lang$protocol_mask$partition0$;
var inst_31233 = (inst_31232 & (64));
var inst_31234 = inst_31227.cljs$core$ISeq$;
var inst_31235 = (cljs.core.PROTOCOL_SENTINEL === inst_31234);
var inst_31236 = ((inst_31233) || (inst_31235));
var state_31325__$1 = state_31325;
if(cljs.core.truth_(inst_31236)){
var statearr_31360_31412 = state_31325__$1;
(statearr_31360_31412[(1)] = (5));

} else {
var statearr_31361_31413 = state_31325__$1;
(statearr_31361_31413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (23))){
var inst_31284 = (state_31325[(14)]);
var inst_31290 = (inst_31284 == null);
var state_31325__$1 = state_31325;
if(cljs.core.truth_(inst_31290)){
var statearr_31362_31414 = state_31325__$1;
(statearr_31362_31414[(1)] = (26));

} else {
var statearr_31363_31415 = state_31325__$1;
(statearr_31363_31415[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (35))){
var inst_31310 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
if(cljs.core.truth_(inst_31310)){
var statearr_31364_31416 = state_31325__$1;
(statearr_31364_31416[(1)] = (36));

} else {
var statearr_31365_31417 = state_31325__$1;
(statearr_31365_31417[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (19))){
var inst_31252 = (state_31325[(7)]);
var inst_31272 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31252);
var state_31325__$1 = state_31325;
var statearr_31366_31418 = state_31325__$1;
(statearr_31366_31418[(2)] = inst_31272);

(statearr_31366_31418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (11))){
var inst_31252 = (state_31325[(7)]);
var inst_31256 = (inst_31252 == null);
var inst_31257 = cljs.core.not.call(null,inst_31256);
var state_31325__$1 = state_31325;
if(inst_31257){
var statearr_31367_31419 = state_31325__$1;
(statearr_31367_31419[(1)] = (13));

} else {
var statearr_31368_31420 = state_31325__$1;
(statearr_31368_31420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (9))){
var inst_31227 = (state_31325[(8)]);
var state_31325__$1 = state_31325;
var statearr_31369_31421 = state_31325__$1;
(statearr_31369_31421[(2)] = inst_31227);

(statearr_31369_31421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (5))){
var state_31325__$1 = state_31325;
var statearr_31370_31422 = state_31325__$1;
(statearr_31370_31422[(2)] = true);

(statearr_31370_31422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (14))){
var state_31325__$1 = state_31325;
var statearr_31371_31423 = state_31325__$1;
(statearr_31371_31423[(2)] = false);

(statearr_31371_31423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (26))){
var inst_31285 = (state_31325[(9)]);
var inst_31292 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31285);
var state_31325__$1 = state_31325;
var statearr_31372_31424 = state_31325__$1;
(statearr_31372_31424[(2)] = inst_31292);

(statearr_31372_31424[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (16))){
var state_31325__$1 = state_31325;
var statearr_31373_31425 = state_31325__$1;
(statearr_31373_31425[(2)] = true);

(statearr_31373_31425[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (38))){
var inst_31315 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
var statearr_31374_31426 = state_31325__$1;
(statearr_31374_31426[(2)] = inst_31315);

(statearr_31374_31426[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (30))){
var inst_31277 = (state_31325[(13)]);
var inst_31285 = (state_31325[(9)]);
var inst_31276 = (state_31325[(11)]);
var inst_31302 = cljs.core.empty_QMARK_.call(null,inst_31276);
var inst_31303 = inst_31277.call(null,inst_31285);
var inst_31304 = cljs.core.not.call(null,inst_31303);
var inst_31305 = ((inst_31302) && (inst_31304));
var state_31325__$1 = state_31325;
var statearr_31375_31427 = state_31325__$1;
(statearr_31375_31427[(2)] = inst_31305);

(statearr_31375_31427[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (10))){
var inst_31227 = (state_31325[(8)]);
var inst_31248 = (state_31325[(2)]);
var inst_31249 = cljs.core.get.call(null,inst_31248,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31250 = cljs.core.get.call(null,inst_31248,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31251 = cljs.core.get.call(null,inst_31248,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31252 = inst_31227;
var state_31325__$1 = (function (){var statearr_31376 = state_31325;
(statearr_31376[(16)] = inst_31251);

(statearr_31376[(17)] = inst_31249);

(statearr_31376[(7)] = inst_31252);

(statearr_31376[(18)] = inst_31250);

return statearr_31376;
})();
var statearr_31377_31428 = state_31325__$1;
(statearr_31377_31428[(2)] = null);

(statearr_31377_31428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (18))){
var inst_31267 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
var statearr_31378_31429 = state_31325__$1;
(statearr_31378_31429[(2)] = inst_31267);

(statearr_31378_31429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (37))){
var state_31325__$1 = state_31325;
var statearr_31379_31430 = state_31325__$1;
(statearr_31379_31430[(2)] = null);

(statearr_31379_31430[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (8))){
var inst_31227 = (state_31325[(8)]);
var inst_31245 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31227);
var state_31325__$1 = state_31325;
var statearr_31380_31431 = state_31325__$1;
(statearr_31380_31431[(2)] = inst_31245);

(statearr_31380_31431[(1)] = (10));


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
});})(c__30326__auto___31385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30231__auto__,c__30326__auto___31385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30232__auto__ = null;
var cljs$core$async$mix_$_state_machine__30232__auto____0 = (function (){
var statearr_31381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31381[(0)] = cljs$core$async$mix_$_state_machine__30232__auto__);

(statearr_31381[(1)] = (1));

return statearr_31381;
});
var cljs$core$async$mix_$_state_machine__30232__auto____1 = (function (state_31325){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_31325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e31382){if((e31382 instanceof Object)){
var ex__30235__auto__ = e31382;
var statearr_31383_31432 = state_31325;
(statearr_31383_31432[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31433 = state_31325;
state_31325 = G__31433;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30232__auto__ = function(state_31325){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30232__auto____1.call(this,state_31325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30232__auto____0;
cljs$core$async$mix_$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30232__auto____1;
return cljs$core$async$mix_$_state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto___31385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30328__auto__ = (function (){var statearr_31384 = f__30327__auto__.call(null);
(statearr_31384[(6)] = c__30326__auto___31385);

return statearr_31384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___31385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31435 = arguments.length;
switch (G__31435) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__31439 = arguments.length;
switch (G__31439) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__31437_SHARP_){
if(cljs.core.truth_(p1__31437_SHARP_.call(null,topic))){
return p1__31437_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31437_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31440 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31441){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31441 = meta31441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31442,meta31441__$1){
var self__ = this;
var _31442__$1 = this;
return (new cljs.core.async.t_cljs$core$async31440(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31441__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31440.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31442){
var self__ = this;
var _31442__$1 = this;
return self__.meta31441;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31440.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31440.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31440.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31440.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31440.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31440.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31440.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31440.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31441","meta31441",-1192371797,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31440";

cljs.core.async.t_cljs$core$async31440.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31440");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31440.
 */
cljs.core.async.__GT_t_cljs$core$async31440 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31440(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31441){
return (new cljs.core.async.t_cljs$core$async31440(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31441));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31440(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30326__auto___31560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___31560,mults,ensure_mult,p){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto___31560,mults,ensure_mult,p){
return (function (state_31514){
var state_val_31515 = (state_31514[(1)]);
if((state_val_31515 === (7))){
var inst_31510 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31516_31561 = state_31514__$1;
(statearr_31516_31561[(2)] = inst_31510);

(statearr_31516_31561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (20))){
var state_31514__$1 = state_31514;
var statearr_31517_31562 = state_31514__$1;
(statearr_31517_31562[(2)] = null);

(statearr_31517_31562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (1))){
var state_31514__$1 = state_31514;
var statearr_31518_31563 = state_31514__$1;
(statearr_31518_31563[(2)] = null);

(statearr_31518_31563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (24))){
var inst_31493 = (state_31514[(7)]);
var inst_31502 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31493);
var state_31514__$1 = state_31514;
var statearr_31519_31564 = state_31514__$1;
(statearr_31519_31564[(2)] = inst_31502);

(statearr_31519_31564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (4))){
var inst_31445 = (state_31514[(8)]);
var inst_31445__$1 = (state_31514[(2)]);
var inst_31446 = (inst_31445__$1 == null);
var state_31514__$1 = (function (){var statearr_31520 = state_31514;
(statearr_31520[(8)] = inst_31445__$1);

return statearr_31520;
})();
if(cljs.core.truth_(inst_31446)){
var statearr_31521_31565 = state_31514__$1;
(statearr_31521_31565[(1)] = (5));

} else {
var statearr_31522_31566 = state_31514__$1;
(statearr_31522_31566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (15))){
var inst_31487 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31523_31567 = state_31514__$1;
(statearr_31523_31567[(2)] = inst_31487);

(statearr_31523_31567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (21))){
var inst_31507 = (state_31514[(2)]);
var state_31514__$1 = (function (){var statearr_31524 = state_31514;
(statearr_31524[(9)] = inst_31507);

return statearr_31524;
})();
var statearr_31525_31568 = state_31514__$1;
(statearr_31525_31568[(2)] = null);

(statearr_31525_31568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (13))){
var inst_31469 = (state_31514[(10)]);
var inst_31471 = cljs.core.chunked_seq_QMARK_.call(null,inst_31469);
var state_31514__$1 = state_31514;
if(inst_31471){
var statearr_31526_31569 = state_31514__$1;
(statearr_31526_31569[(1)] = (16));

} else {
var statearr_31527_31570 = state_31514__$1;
(statearr_31527_31570[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (22))){
var inst_31499 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
if(cljs.core.truth_(inst_31499)){
var statearr_31528_31571 = state_31514__$1;
(statearr_31528_31571[(1)] = (23));

} else {
var statearr_31529_31572 = state_31514__$1;
(statearr_31529_31572[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (6))){
var inst_31495 = (state_31514[(11)]);
var inst_31445 = (state_31514[(8)]);
var inst_31493 = (state_31514[(7)]);
var inst_31493__$1 = topic_fn.call(null,inst_31445);
var inst_31494 = cljs.core.deref.call(null,mults);
var inst_31495__$1 = cljs.core.get.call(null,inst_31494,inst_31493__$1);
var state_31514__$1 = (function (){var statearr_31530 = state_31514;
(statearr_31530[(11)] = inst_31495__$1);

(statearr_31530[(7)] = inst_31493__$1);

return statearr_31530;
})();
if(cljs.core.truth_(inst_31495__$1)){
var statearr_31531_31573 = state_31514__$1;
(statearr_31531_31573[(1)] = (19));

} else {
var statearr_31532_31574 = state_31514__$1;
(statearr_31532_31574[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (25))){
var inst_31504 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31533_31575 = state_31514__$1;
(statearr_31533_31575[(2)] = inst_31504);

(statearr_31533_31575[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (17))){
var inst_31469 = (state_31514[(10)]);
var inst_31478 = cljs.core.first.call(null,inst_31469);
var inst_31479 = cljs.core.async.muxch_STAR_.call(null,inst_31478);
var inst_31480 = cljs.core.async.close_BANG_.call(null,inst_31479);
var inst_31481 = cljs.core.next.call(null,inst_31469);
var inst_31455 = inst_31481;
var inst_31456 = null;
var inst_31457 = (0);
var inst_31458 = (0);
var state_31514__$1 = (function (){var statearr_31534 = state_31514;
(statearr_31534[(12)] = inst_31456);

(statearr_31534[(13)] = inst_31458);

(statearr_31534[(14)] = inst_31480);

(statearr_31534[(15)] = inst_31457);

(statearr_31534[(16)] = inst_31455);

return statearr_31534;
})();
var statearr_31535_31576 = state_31514__$1;
(statearr_31535_31576[(2)] = null);

(statearr_31535_31576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (3))){
var inst_31512 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31514__$1,inst_31512);
} else {
if((state_val_31515 === (12))){
var inst_31489 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31536_31577 = state_31514__$1;
(statearr_31536_31577[(2)] = inst_31489);

(statearr_31536_31577[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (2))){
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31514__$1,(4),ch);
} else {
if((state_val_31515 === (23))){
var state_31514__$1 = state_31514;
var statearr_31537_31578 = state_31514__$1;
(statearr_31537_31578[(2)] = null);

(statearr_31537_31578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (19))){
var inst_31495 = (state_31514[(11)]);
var inst_31445 = (state_31514[(8)]);
var inst_31497 = cljs.core.async.muxch_STAR_.call(null,inst_31495);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31514__$1,(22),inst_31497,inst_31445);
} else {
if((state_val_31515 === (11))){
var inst_31469 = (state_31514[(10)]);
var inst_31455 = (state_31514[(16)]);
var inst_31469__$1 = cljs.core.seq.call(null,inst_31455);
var state_31514__$1 = (function (){var statearr_31538 = state_31514;
(statearr_31538[(10)] = inst_31469__$1);

return statearr_31538;
})();
if(inst_31469__$1){
var statearr_31539_31579 = state_31514__$1;
(statearr_31539_31579[(1)] = (13));

} else {
var statearr_31540_31580 = state_31514__$1;
(statearr_31540_31580[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (9))){
var inst_31491 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31541_31581 = state_31514__$1;
(statearr_31541_31581[(2)] = inst_31491);

(statearr_31541_31581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (5))){
var inst_31452 = cljs.core.deref.call(null,mults);
var inst_31453 = cljs.core.vals.call(null,inst_31452);
var inst_31454 = cljs.core.seq.call(null,inst_31453);
var inst_31455 = inst_31454;
var inst_31456 = null;
var inst_31457 = (0);
var inst_31458 = (0);
var state_31514__$1 = (function (){var statearr_31542 = state_31514;
(statearr_31542[(12)] = inst_31456);

(statearr_31542[(13)] = inst_31458);

(statearr_31542[(15)] = inst_31457);

(statearr_31542[(16)] = inst_31455);

return statearr_31542;
})();
var statearr_31543_31582 = state_31514__$1;
(statearr_31543_31582[(2)] = null);

(statearr_31543_31582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (14))){
var state_31514__$1 = state_31514;
var statearr_31547_31583 = state_31514__$1;
(statearr_31547_31583[(2)] = null);

(statearr_31547_31583[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (16))){
var inst_31469 = (state_31514[(10)]);
var inst_31473 = cljs.core.chunk_first.call(null,inst_31469);
var inst_31474 = cljs.core.chunk_rest.call(null,inst_31469);
var inst_31475 = cljs.core.count.call(null,inst_31473);
var inst_31455 = inst_31474;
var inst_31456 = inst_31473;
var inst_31457 = inst_31475;
var inst_31458 = (0);
var state_31514__$1 = (function (){var statearr_31548 = state_31514;
(statearr_31548[(12)] = inst_31456);

(statearr_31548[(13)] = inst_31458);

(statearr_31548[(15)] = inst_31457);

(statearr_31548[(16)] = inst_31455);

return statearr_31548;
})();
var statearr_31549_31584 = state_31514__$1;
(statearr_31549_31584[(2)] = null);

(statearr_31549_31584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (10))){
var inst_31456 = (state_31514[(12)]);
var inst_31458 = (state_31514[(13)]);
var inst_31457 = (state_31514[(15)]);
var inst_31455 = (state_31514[(16)]);
var inst_31463 = cljs.core._nth.call(null,inst_31456,inst_31458);
var inst_31464 = cljs.core.async.muxch_STAR_.call(null,inst_31463);
var inst_31465 = cljs.core.async.close_BANG_.call(null,inst_31464);
var inst_31466 = (inst_31458 + (1));
var tmp31544 = inst_31456;
var tmp31545 = inst_31457;
var tmp31546 = inst_31455;
var inst_31455__$1 = tmp31546;
var inst_31456__$1 = tmp31544;
var inst_31457__$1 = tmp31545;
var inst_31458__$1 = inst_31466;
var state_31514__$1 = (function (){var statearr_31550 = state_31514;
(statearr_31550[(12)] = inst_31456__$1);

(statearr_31550[(13)] = inst_31458__$1);

(statearr_31550[(15)] = inst_31457__$1);

(statearr_31550[(17)] = inst_31465);

(statearr_31550[(16)] = inst_31455__$1);

return statearr_31550;
})();
var statearr_31551_31585 = state_31514__$1;
(statearr_31551_31585[(2)] = null);

(statearr_31551_31585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (18))){
var inst_31484 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31552_31586 = state_31514__$1;
(statearr_31552_31586[(2)] = inst_31484);

(statearr_31552_31586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (8))){
var inst_31458 = (state_31514[(13)]);
var inst_31457 = (state_31514[(15)]);
var inst_31460 = (inst_31458 < inst_31457);
var inst_31461 = inst_31460;
var state_31514__$1 = state_31514;
if(cljs.core.truth_(inst_31461)){
var statearr_31553_31587 = state_31514__$1;
(statearr_31553_31587[(1)] = (10));

} else {
var statearr_31554_31588 = state_31514__$1;
(statearr_31554_31588[(1)] = (11));

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
});})(c__30326__auto___31560,mults,ensure_mult,p))
;
return ((function (switch__30231__auto__,c__30326__auto___31560,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30232__auto__ = null;
var cljs$core$async$state_machine__30232__auto____0 = (function (){
var statearr_31555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31555[(0)] = cljs$core$async$state_machine__30232__auto__);

(statearr_31555[(1)] = (1));

return statearr_31555;
});
var cljs$core$async$state_machine__30232__auto____1 = (function (state_31514){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_31514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e31556){if((e31556 instanceof Object)){
var ex__30235__auto__ = e31556;
var statearr_31557_31589 = state_31514;
(statearr_31557_31589[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31590 = state_31514;
state_31514 = G__31590;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$state_machine__30232__auto__ = function(state_31514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30232__auto____1.call(this,state_31514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30232__auto____0;
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30232__auto____1;
return cljs$core$async$state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto___31560,mults,ensure_mult,p))
})();
var state__30328__auto__ = (function (){var statearr_31558 = f__30327__auto__.call(null);
(statearr_31558[(6)] = c__30326__auto___31560);

return statearr_31558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___31560,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31592 = arguments.length;
switch (G__31592) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31595 = arguments.length;
switch (G__31595) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__31598 = arguments.length;
switch (G__31598) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30326__auto___31665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___31665,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto___31665,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31637){
var state_val_31638 = (state_31637[(1)]);
if((state_val_31638 === (7))){
var state_31637__$1 = state_31637;
var statearr_31639_31666 = state_31637__$1;
(statearr_31639_31666[(2)] = null);

(statearr_31639_31666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (1))){
var state_31637__$1 = state_31637;
var statearr_31640_31667 = state_31637__$1;
(statearr_31640_31667[(2)] = null);

(statearr_31640_31667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (4))){
var inst_31601 = (state_31637[(7)]);
var inst_31603 = (inst_31601 < cnt);
var state_31637__$1 = state_31637;
if(cljs.core.truth_(inst_31603)){
var statearr_31641_31668 = state_31637__$1;
(statearr_31641_31668[(1)] = (6));

} else {
var statearr_31642_31669 = state_31637__$1;
(statearr_31642_31669[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (15))){
var inst_31633 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
var statearr_31643_31670 = state_31637__$1;
(statearr_31643_31670[(2)] = inst_31633);

(statearr_31643_31670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (13))){
var inst_31626 = cljs.core.async.close_BANG_.call(null,out);
var state_31637__$1 = state_31637;
var statearr_31644_31671 = state_31637__$1;
(statearr_31644_31671[(2)] = inst_31626);

(statearr_31644_31671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (6))){
var state_31637__$1 = state_31637;
var statearr_31645_31672 = state_31637__$1;
(statearr_31645_31672[(2)] = null);

(statearr_31645_31672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (3))){
var inst_31635 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31637__$1,inst_31635);
} else {
if((state_val_31638 === (12))){
var inst_31623 = (state_31637[(8)]);
var inst_31623__$1 = (state_31637[(2)]);
var inst_31624 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31623__$1);
var state_31637__$1 = (function (){var statearr_31646 = state_31637;
(statearr_31646[(8)] = inst_31623__$1);

return statearr_31646;
})();
if(cljs.core.truth_(inst_31624)){
var statearr_31647_31673 = state_31637__$1;
(statearr_31647_31673[(1)] = (13));

} else {
var statearr_31648_31674 = state_31637__$1;
(statearr_31648_31674[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (2))){
var inst_31600 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31601 = (0);
var state_31637__$1 = (function (){var statearr_31649 = state_31637;
(statearr_31649[(7)] = inst_31601);

(statearr_31649[(9)] = inst_31600);

return statearr_31649;
})();
var statearr_31650_31675 = state_31637__$1;
(statearr_31650_31675[(2)] = null);

(statearr_31650_31675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (11))){
var inst_31601 = (state_31637[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31637,(10),Object,null,(9));
var inst_31610 = chs__$1.call(null,inst_31601);
var inst_31611 = done.call(null,inst_31601);
var inst_31612 = cljs.core.async.take_BANG_.call(null,inst_31610,inst_31611);
var state_31637__$1 = state_31637;
var statearr_31651_31676 = state_31637__$1;
(statearr_31651_31676[(2)] = inst_31612);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31637__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (9))){
var inst_31601 = (state_31637[(7)]);
var inst_31614 = (state_31637[(2)]);
var inst_31615 = (inst_31601 + (1));
var inst_31601__$1 = inst_31615;
var state_31637__$1 = (function (){var statearr_31652 = state_31637;
(statearr_31652[(10)] = inst_31614);

(statearr_31652[(7)] = inst_31601__$1);

return statearr_31652;
})();
var statearr_31653_31677 = state_31637__$1;
(statearr_31653_31677[(2)] = null);

(statearr_31653_31677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (5))){
var inst_31621 = (state_31637[(2)]);
var state_31637__$1 = (function (){var statearr_31654 = state_31637;
(statearr_31654[(11)] = inst_31621);

return statearr_31654;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31637__$1,(12),dchan);
} else {
if((state_val_31638 === (14))){
var inst_31623 = (state_31637[(8)]);
var inst_31628 = cljs.core.apply.call(null,f,inst_31623);
var state_31637__$1 = state_31637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31637__$1,(16),out,inst_31628);
} else {
if((state_val_31638 === (16))){
var inst_31630 = (state_31637[(2)]);
var state_31637__$1 = (function (){var statearr_31655 = state_31637;
(statearr_31655[(12)] = inst_31630);

return statearr_31655;
})();
var statearr_31656_31678 = state_31637__$1;
(statearr_31656_31678[(2)] = null);

(statearr_31656_31678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (10))){
var inst_31605 = (state_31637[(2)]);
var inst_31606 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31637__$1 = (function (){var statearr_31657 = state_31637;
(statearr_31657[(13)] = inst_31605);

return statearr_31657;
})();
var statearr_31658_31679 = state_31637__$1;
(statearr_31658_31679[(2)] = inst_31606);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31637__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (8))){
var inst_31619 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
var statearr_31659_31680 = state_31637__$1;
(statearr_31659_31680[(2)] = inst_31619);

(statearr_31659_31680[(1)] = (5));


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
});})(c__30326__auto___31665,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30231__auto__,c__30326__auto___31665,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30232__auto__ = null;
var cljs$core$async$state_machine__30232__auto____0 = (function (){
var statearr_31660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31660[(0)] = cljs$core$async$state_machine__30232__auto__);

(statearr_31660[(1)] = (1));

return statearr_31660;
});
var cljs$core$async$state_machine__30232__auto____1 = (function (state_31637){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_31637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e31661){if((e31661 instanceof Object)){
var ex__30235__auto__ = e31661;
var statearr_31662_31681 = state_31637;
(statearr_31662_31681[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31682 = state_31637;
state_31637 = G__31682;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$state_machine__30232__auto__ = function(state_31637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30232__auto____1.call(this,state_31637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30232__auto____0;
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30232__auto____1;
return cljs$core$async$state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto___31665,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30328__auto__ = (function (){var statearr_31663 = f__30327__auto__.call(null);
(statearr_31663[(6)] = c__30326__auto___31665);

return statearr_31663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___31665,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31685 = arguments.length;
switch (G__31685) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30326__auto___31739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___31739,out){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto___31739,out){
return (function (state_31717){
var state_val_31718 = (state_31717[(1)]);
if((state_val_31718 === (7))){
var inst_31696 = (state_31717[(7)]);
var inst_31697 = (state_31717[(8)]);
var inst_31696__$1 = (state_31717[(2)]);
var inst_31697__$1 = cljs.core.nth.call(null,inst_31696__$1,(0),null);
var inst_31698 = cljs.core.nth.call(null,inst_31696__$1,(1),null);
var inst_31699 = (inst_31697__$1 == null);
var state_31717__$1 = (function (){var statearr_31719 = state_31717;
(statearr_31719[(7)] = inst_31696__$1);

(statearr_31719[(8)] = inst_31697__$1);

(statearr_31719[(9)] = inst_31698);

return statearr_31719;
})();
if(cljs.core.truth_(inst_31699)){
var statearr_31720_31740 = state_31717__$1;
(statearr_31720_31740[(1)] = (8));

} else {
var statearr_31721_31741 = state_31717__$1;
(statearr_31721_31741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (1))){
var inst_31686 = cljs.core.vec.call(null,chs);
var inst_31687 = inst_31686;
var state_31717__$1 = (function (){var statearr_31722 = state_31717;
(statearr_31722[(10)] = inst_31687);

return statearr_31722;
})();
var statearr_31723_31742 = state_31717__$1;
(statearr_31723_31742[(2)] = null);

(statearr_31723_31742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (4))){
var inst_31687 = (state_31717[(10)]);
var state_31717__$1 = state_31717;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31717__$1,(7),inst_31687);
} else {
if((state_val_31718 === (6))){
var inst_31713 = (state_31717[(2)]);
var state_31717__$1 = state_31717;
var statearr_31724_31743 = state_31717__$1;
(statearr_31724_31743[(2)] = inst_31713);

(statearr_31724_31743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (3))){
var inst_31715 = (state_31717[(2)]);
var state_31717__$1 = state_31717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31717__$1,inst_31715);
} else {
if((state_val_31718 === (2))){
var inst_31687 = (state_31717[(10)]);
var inst_31689 = cljs.core.count.call(null,inst_31687);
var inst_31690 = (inst_31689 > (0));
var state_31717__$1 = state_31717;
if(cljs.core.truth_(inst_31690)){
var statearr_31726_31744 = state_31717__$1;
(statearr_31726_31744[(1)] = (4));

} else {
var statearr_31727_31745 = state_31717__$1;
(statearr_31727_31745[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (11))){
var inst_31687 = (state_31717[(10)]);
var inst_31706 = (state_31717[(2)]);
var tmp31725 = inst_31687;
var inst_31687__$1 = tmp31725;
var state_31717__$1 = (function (){var statearr_31728 = state_31717;
(statearr_31728[(10)] = inst_31687__$1);

(statearr_31728[(11)] = inst_31706);

return statearr_31728;
})();
var statearr_31729_31746 = state_31717__$1;
(statearr_31729_31746[(2)] = null);

(statearr_31729_31746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (9))){
var inst_31697 = (state_31717[(8)]);
var state_31717__$1 = state_31717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31717__$1,(11),out,inst_31697);
} else {
if((state_val_31718 === (5))){
var inst_31711 = cljs.core.async.close_BANG_.call(null,out);
var state_31717__$1 = state_31717;
var statearr_31730_31747 = state_31717__$1;
(statearr_31730_31747[(2)] = inst_31711);

(statearr_31730_31747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (10))){
var inst_31709 = (state_31717[(2)]);
var state_31717__$1 = state_31717;
var statearr_31731_31748 = state_31717__$1;
(statearr_31731_31748[(2)] = inst_31709);

(statearr_31731_31748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (8))){
var inst_31696 = (state_31717[(7)]);
var inst_31687 = (state_31717[(10)]);
var inst_31697 = (state_31717[(8)]);
var inst_31698 = (state_31717[(9)]);
var inst_31701 = (function (){var cs = inst_31687;
var vec__31692 = inst_31696;
var v = inst_31697;
var c = inst_31698;
return ((function (cs,vec__31692,v,c,inst_31696,inst_31687,inst_31697,inst_31698,state_val_31718,c__30326__auto___31739,out){
return (function (p1__31683_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31683_SHARP_);
});
;})(cs,vec__31692,v,c,inst_31696,inst_31687,inst_31697,inst_31698,state_val_31718,c__30326__auto___31739,out))
})();
var inst_31702 = cljs.core.filterv.call(null,inst_31701,inst_31687);
var inst_31687__$1 = inst_31702;
var state_31717__$1 = (function (){var statearr_31732 = state_31717;
(statearr_31732[(10)] = inst_31687__$1);

return statearr_31732;
})();
var statearr_31733_31749 = state_31717__$1;
(statearr_31733_31749[(2)] = null);

(statearr_31733_31749[(1)] = (2));


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
});})(c__30326__auto___31739,out))
;
return ((function (switch__30231__auto__,c__30326__auto___31739,out){
return (function() {
var cljs$core$async$state_machine__30232__auto__ = null;
var cljs$core$async$state_machine__30232__auto____0 = (function (){
var statearr_31734 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31734[(0)] = cljs$core$async$state_machine__30232__auto__);

(statearr_31734[(1)] = (1));

return statearr_31734;
});
var cljs$core$async$state_machine__30232__auto____1 = (function (state_31717){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_31717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e31735){if((e31735 instanceof Object)){
var ex__30235__auto__ = e31735;
var statearr_31736_31750 = state_31717;
(statearr_31736_31750[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31751 = state_31717;
state_31717 = G__31751;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$state_machine__30232__auto__ = function(state_31717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30232__auto____1.call(this,state_31717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30232__auto____0;
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30232__auto____1;
return cljs$core$async$state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto___31739,out))
})();
var state__30328__auto__ = (function (){var statearr_31737 = f__30327__auto__.call(null);
(statearr_31737[(6)] = c__30326__auto___31739);

return statearr_31737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___31739,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31753 = arguments.length;
switch (G__31753) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30326__auto___31798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___31798,out){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto___31798,out){
return (function (state_31777){
var state_val_31778 = (state_31777[(1)]);
if((state_val_31778 === (7))){
var inst_31759 = (state_31777[(7)]);
var inst_31759__$1 = (state_31777[(2)]);
var inst_31760 = (inst_31759__$1 == null);
var inst_31761 = cljs.core.not.call(null,inst_31760);
var state_31777__$1 = (function (){var statearr_31779 = state_31777;
(statearr_31779[(7)] = inst_31759__$1);

return statearr_31779;
})();
if(inst_31761){
var statearr_31780_31799 = state_31777__$1;
(statearr_31780_31799[(1)] = (8));

} else {
var statearr_31781_31800 = state_31777__$1;
(statearr_31781_31800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (1))){
var inst_31754 = (0);
var state_31777__$1 = (function (){var statearr_31782 = state_31777;
(statearr_31782[(8)] = inst_31754);

return statearr_31782;
})();
var statearr_31783_31801 = state_31777__$1;
(statearr_31783_31801[(2)] = null);

(statearr_31783_31801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (4))){
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31777__$1,(7),ch);
} else {
if((state_val_31778 === (6))){
var inst_31772 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31784_31802 = state_31777__$1;
(statearr_31784_31802[(2)] = inst_31772);

(statearr_31784_31802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (3))){
var inst_31774 = (state_31777[(2)]);
var inst_31775 = cljs.core.async.close_BANG_.call(null,out);
var state_31777__$1 = (function (){var statearr_31785 = state_31777;
(statearr_31785[(9)] = inst_31774);

return statearr_31785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31777__$1,inst_31775);
} else {
if((state_val_31778 === (2))){
var inst_31754 = (state_31777[(8)]);
var inst_31756 = (inst_31754 < n);
var state_31777__$1 = state_31777;
if(cljs.core.truth_(inst_31756)){
var statearr_31786_31803 = state_31777__$1;
(statearr_31786_31803[(1)] = (4));

} else {
var statearr_31787_31804 = state_31777__$1;
(statearr_31787_31804[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (11))){
var inst_31754 = (state_31777[(8)]);
var inst_31764 = (state_31777[(2)]);
var inst_31765 = (inst_31754 + (1));
var inst_31754__$1 = inst_31765;
var state_31777__$1 = (function (){var statearr_31788 = state_31777;
(statearr_31788[(10)] = inst_31764);

(statearr_31788[(8)] = inst_31754__$1);

return statearr_31788;
})();
var statearr_31789_31805 = state_31777__$1;
(statearr_31789_31805[(2)] = null);

(statearr_31789_31805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (9))){
var state_31777__$1 = state_31777;
var statearr_31790_31806 = state_31777__$1;
(statearr_31790_31806[(2)] = null);

(statearr_31790_31806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (5))){
var state_31777__$1 = state_31777;
var statearr_31791_31807 = state_31777__$1;
(statearr_31791_31807[(2)] = null);

(statearr_31791_31807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (10))){
var inst_31769 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31792_31808 = state_31777__$1;
(statearr_31792_31808[(2)] = inst_31769);

(statearr_31792_31808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (8))){
var inst_31759 = (state_31777[(7)]);
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31777__$1,(11),out,inst_31759);
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
});})(c__30326__auto___31798,out))
;
return ((function (switch__30231__auto__,c__30326__auto___31798,out){
return (function() {
var cljs$core$async$state_machine__30232__auto__ = null;
var cljs$core$async$state_machine__30232__auto____0 = (function (){
var statearr_31793 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31793[(0)] = cljs$core$async$state_machine__30232__auto__);

(statearr_31793[(1)] = (1));

return statearr_31793;
});
var cljs$core$async$state_machine__30232__auto____1 = (function (state_31777){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_31777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e31794){if((e31794 instanceof Object)){
var ex__30235__auto__ = e31794;
var statearr_31795_31809 = state_31777;
(statearr_31795_31809[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31810 = state_31777;
state_31777 = G__31810;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$state_machine__30232__auto__ = function(state_31777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30232__auto____1.call(this,state_31777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30232__auto____0;
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30232__auto____1;
return cljs$core$async$state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto___31798,out))
})();
var state__30328__auto__ = (function (){var statearr_31796 = f__30327__auto__.call(null);
(statearr_31796[(6)] = c__30326__auto___31798);

return statearr_31796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___31798,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31812 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31812 = (function (f,ch,meta31813){
this.f = f;
this.ch = ch;
this.meta31813 = meta31813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31814,meta31813__$1){
var self__ = this;
var _31814__$1 = this;
return (new cljs.core.async.t_cljs$core$async31812(self__.f,self__.ch,meta31813__$1));
});

cljs.core.async.t_cljs$core$async31812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31814){
var self__ = this;
var _31814__$1 = this;
return self__.meta31813;
});

cljs.core.async.t_cljs$core$async31812.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31812.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31812.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31812.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31812.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31815 = (function (f,ch,meta31813,_,fn1,meta31816){
this.f = f;
this.ch = ch;
this.meta31813 = meta31813;
this._ = _;
this.fn1 = fn1;
this.meta31816 = meta31816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31817,meta31816__$1){
var self__ = this;
var _31817__$1 = this;
return (new cljs.core.async.t_cljs$core$async31815(self__.f,self__.ch,self__.meta31813,self__._,self__.fn1,meta31816__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31817){
var self__ = this;
var _31817__$1 = this;
return self__.meta31816;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31815.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31815.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31811_SHARP_){
return f1.call(null,(((p1__31811_SHARP_ == null))?null:self__.f.call(null,p1__31811_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31815.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31813","meta31813",2139716427,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31812","cljs.core.async/t_cljs$core$async31812",-1599172076,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31816","meta31816",-1217275374,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31815";

cljs.core.async.t_cljs$core$async31815.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31815");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31815.
 */
cljs.core.async.__GT_t_cljs$core$async31815 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31815(f__$1,ch__$1,meta31813__$1,___$2,fn1__$1,meta31816){
return (new cljs.core.async.t_cljs$core$async31815(f__$1,ch__$1,meta31813__$1,___$2,fn1__$1,meta31816));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31815(self__.f,self__.ch,self__.meta31813,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31812.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31812.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31813","meta31813",2139716427,null)], null);
});

cljs.core.async.t_cljs$core$async31812.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31812";

cljs.core.async.t_cljs$core$async31812.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31812");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31812.
 */
cljs.core.async.__GT_t_cljs$core$async31812 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31812(f__$1,ch__$1,meta31813){
return (new cljs.core.async.t_cljs$core$async31812(f__$1,ch__$1,meta31813));
});

}

return (new cljs.core.async.t_cljs$core$async31812(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31818 = (function (f,ch,meta31819){
this.f = f;
this.ch = ch;
this.meta31819 = meta31819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31820,meta31819__$1){
var self__ = this;
var _31820__$1 = this;
return (new cljs.core.async.t_cljs$core$async31818(self__.f,self__.ch,meta31819__$1));
});

cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31820){
var self__ = this;
var _31820__$1 = this;
return self__.meta31819;
});

cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31819","meta31819",1636520486,null)], null);
});

cljs.core.async.t_cljs$core$async31818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31818";

cljs.core.async.t_cljs$core$async31818.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31818");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31818.
 */
cljs.core.async.__GT_t_cljs$core$async31818 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31818(f__$1,ch__$1,meta31819){
return (new cljs.core.async.t_cljs$core$async31818(f__$1,ch__$1,meta31819));
});

}

return (new cljs.core.async.t_cljs$core$async31818(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31821 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31821 = (function (p,ch,meta31822){
this.p = p;
this.ch = ch;
this.meta31822 = meta31822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31823,meta31822__$1){
var self__ = this;
var _31823__$1 = this;
return (new cljs.core.async.t_cljs$core$async31821(self__.p,self__.ch,meta31822__$1));
});

cljs.core.async.t_cljs$core$async31821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31823){
var self__ = this;
var _31823__$1 = this;
return self__.meta31822;
});

cljs.core.async.t_cljs$core$async31821.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31821.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31821.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31821.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31821.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31821.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31821.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31822","meta31822",1638918833,null)], null);
});

cljs.core.async.t_cljs$core$async31821.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31821";

cljs.core.async.t_cljs$core$async31821.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31821");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31821.
 */
cljs.core.async.__GT_t_cljs$core$async31821 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31821(p__$1,ch__$1,meta31822){
return (new cljs.core.async.t_cljs$core$async31821(p__$1,ch__$1,meta31822));
});

}

return (new cljs.core.async.t_cljs$core$async31821(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31825 = arguments.length;
switch (G__31825) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30326__auto___31865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___31865,out){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto___31865,out){
return (function (state_31846){
var state_val_31847 = (state_31846[(1)]);
if((state_val_31847 === (7))){
var inst_31842 = (state_31846[(2)]);
var state_31846__$1 = state_31846;
var statearr_31848_31866 = state_31846__$1;
(statearr_31848_31866[(2)] = inst_31842);

(statearr_31848_31866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (1))){
var state_31846__$1 = state_31846;
var statearr_31849_31867 = state_31846__$1;
(statearr_31849_31867[(2)] = null);

(statearr_31849_31867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (4))){
var inst_31828 = (state_31846[(7)]);
var inst_31828__$1 = (state_31846[(2)]);
var inst_31829 = (inst_31828__$1 == null);
var state_31846__$1 = (function (){var statearr_31850 = state_31846;
(statearr_31850[(7)] = inst_31828__$1);

return statearr_31850;
})();
if(cljs.core.truth_(inst_31829)){
var statearr_31851_31868 = state_31846__$1;
(statearr_31851_31868[(1)] = (5));

} else {
var statearr_31852_31869 = state_31846__$1;
(statearr_31852_31869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (6))){
var inst_31828 = (state_31846[(7)]);
var inst_31833 = p.call(null,inst_31828);
var state_31846__$1 = state_31846;
if(cljs.core.truth_(inst_31833)){
var statearr_31853_31870 = state_31846__$1;
(statearr_31853_31870[(1)] = (8));

} else {
var statearr_31854_31871 = state_31846__$1;
(statearr_31854_31871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (3))){
var inst_31844 = (state_31846[(2)]);
var state_31846__$1 = state_31846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31846__$1,inst_31844);
} else {
if((state_val_31847 === (2))){
var state_31846__$1 = state_31846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31846__$1,(4),ch);
} else {
if((state_val_31847 === (11))){
var inst_31836 = (state_31846[(2)]);
var state_31846__$1 = state_31846;
var statearr_31855_31872 = state_31846__$1;
(statearr_31855_31872[(2)] = inst_31836);

(statearr_31855_31872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (9))){
var state_31846__$1 = state_31846;
var statearr_31856_31873 = state_31846__$1;
(statearr_31856_31873[(2)] = null);

(statearr_31856_31873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (5))){
var inst_31831 = cljs.core.async.close_BANG_.call(null,out);
var state_31846__$1 = state_31846;
var statearr_31857_31874 = state_31846__$1;
(statearr_31857_31874[(2)] = inst_31831);

(statearr_31857_31874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (10))){
var inst_31839 = (state_31846[(2)]);
var state_31846__$1 = (function (){var statearr_31858 = state_31846;
(statearr_31858[(8)] = inst_31839);

return statearr_31858;
})();
var statearr_31859_31875 = state_31846__$1;
(statearr_31859_31875[(2)] = null);

(statearr_31859_31875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (8))){
var inst_31828 = (state_31846[(7)]);
var state_31846__$1 = state_31846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31846__$1,(11),out,inst_31828);
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
});})(c__30326__auto___31865,out))
;
return ((function (switch__30231__auto__,c__30326__auto___31865,out){
return (function() {
var cljs$core$async$state_machine__30232__auto__ = null;
var cljs$core$async$state_machine__30232__auto____0 = (function (){
var statearr_31860 = [null,null,null,null,null,null,null,null,null];
(statearr_31860[(0)] = cljs$core$async$state_machine__30232__auto__);

(statearr_31860[(1)] = (1));

return statearr_31860;
});
var cljs$core$async$state_machine__30232__auto____1 = (function (state_31846){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_31846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e31861){if((e31861 instanceof Object)){
var ex__30235__auto__ = e31861;
var statearr_31862_31876 = state_31846;
(statearr_31862_31876[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31877 = state_31846;
state_31846 = G__31877;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$state_machine__30232__auto__ = function(state_31846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30232__auto____1.call(this,state_31846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30232__auto____0;
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30232__auto____1;
return cljs$core$async$state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto___31865,out))
})();
var state__30328__auto__ = (function (){var statearr_31863 = f__30327__auto__.call(null);
(statearr_31863[(6)] = c__30326__auto___31865);

return statearr_31863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___31865,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31879 = arguments.length;
switch (G__31879) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto__){
return (function (state_31942){
var state_val_31943 = (state_31942[(1)]);
if((state_val_31943 === (7))){
var inst_31938 = (state_31942[(2)]);
var state_31942__$1 = state_31942;
var statearr_31944_31982 = state_31942__$1;
(statearr_31944_31982[(2)] = inst_31938);

(statearr_31944_31982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (20))){
var inst_31908 = (state_31942[(7)]);
var inst_31919 = (state_31942[(2)]);
var inst_31920 = cljs.core.next.call(null,inst_31908);
var inst_31894 = inst_31920;
var inst_31895 = null;
var inst_31896 = (0);
var inst_31897 = (0);
var state_31942__$1 = (function (){var statearr_31945 = state_31942;
(statearr_31945[(8)] = inst_31897);

(statearr_31945[(9)] = inst_31896);

(statearr_31945[(10)] = inst_31894);

(statearr_31945[(11)] = inst_31895);

(statearr_31945[(12)] = inst_31919);

return statearr_31945;
})();
var statearr_31946_31983 = state_31942__$1;
(statearr_31946_31983[(2)] = null);

(statearr_31946_31983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (1))){
var state_31942__$1 = state_31942;
var statearr_31947_31984 = state_31942__$1;
(statearr_31947_31984[(2)] = null);

(statearr_31947_31984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (4))){
var inst_31883 = (state_31942[(13)]);
var inst_31883__$1 = (state_31942[(2)]);
var inst_31884 = (inst_31883__$1 == null);
var state_31942__$1 = (function (){var statearr_31948 = state_31942;
(statearr_31948[(13)] = inst_31883__$1);

return statearr_31948;
})();
if(cljs.core.truth_(inst_31884)){
var statearr_31949_31985 = state_31942__$1;
(statearr_31949_31985[(1)] = (5));

} else {
var statearr_31950_31986 = state_31942__$1;
(statearr_31950_31986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (15))){
var state_31942__$1 = state_31942;
var statearr_31954_31987 = state_31942__$1;
(statearr_31954_31987[(2)] = null);

(statearr_31954_31987[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (21))){
var state_31942__$1 = state_31942;
var statearr_31955_31988 = state_31942__$1;
(statearr_31955_31988[(2)] = null);

(statearr_31955_31988[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (13))){
var inst_31897 = (state_31942[(8)]);
var inst_31896 = (state_31942[(9)]);
var inst_31894 = (state_31942[(10)]);
var inst_31895 = (state_31942[(11)]);
var inst_31904 = (state_31942[(2)]);
var inst_31905 = (inst_31897 + (1));
var tmp31951 = inst_31896;
var tmp31952 = inst_31894;
var tmp31953 = inst_31895;
var inst_31894__$1 = tmp31952;
var inst_31895__$1 = tmp31953;
var inst_31896__$1 = tmp31951;
var inst_31897__$1 = inst_31905;
var state_31942__$1 = (function (){var statearr_31956 = state_31942;
(statearr_31956[(8)] = inst_31897__$1);

(statearr_31956[(9)] = inst_31896__$1);

(statearr_31956[(10)] = inst_31894__$1);

(statearr_31956[(14)] = inst_31904);

(statearr_31956[(11)] = inst_31895__$1);

return statearr_31956;
})();
var statearr_31957_31989 = state_31942__$1;
(statearr_31957_31989[(2)] = null);

(statearr_31957_31989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (22))){
var state_31942__$1 = state_31942;
var statearr_31958_31990 = state_31942__$1;
(statearr_31958_31990[(2)] = null);

(statearr_31958_31990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (6))){
var inst_31883 = (state_31942[(13)]);
var inst_31892 = f.call(null,inst_31883);
var inst_31893 = cljs.core.seq.call(null,inst_31892);
var inst_31894 = inst_31893;
var inst_31895 = null;
var inst_31896 = (0);
var inst_31897 = (0);
var state_31942__$1 = (function (){var statearr_31959 = state_31942;
(statearr_31959[(8)] = inst_31897);

(statearr_31959[(9)] = inst_31896);

(statearr_31959[(10)] = inst_31894);

(statearr_31959[(11)] = inst_31895);

return statearr_31959;
})();
var statearr_31960_31991 = state_31942__$1;
(statearr_31960_31991[(2)] = null);

(statearr_31960_31991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (17))){
var inst_31908 = (state_31942[(7)]);
var inst_31912 = cljs.core.chunk_first.call(null,inst_31908);
var inst_31913 = cljs.core.chunk_rest.call(null,inst_31908);
var inst_31914 = cljs.core.count.call(null,inst_31912);
var inst_31894 = inst_31913;
var inst_31895 = inst_31912;
var inst_31896 = inst_31914;
var inst_31897 = (0);
var state_31942__$1 = (function (){var statearr_31961 = state_31942;
(statearr_31961[(8)] = inst_31897);

(statearr_31961[(9)] = inst_31896);

(statearr_31961[(10)] = inst_31894);

(statearr_31961[(11)] = inst_31895);

return statearr_31961;
})();
var statearr_31962_31992 = state_31942__$1;
(statearr_31962_31992[(2)] = null);

(statearr_31962_31992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (3))){
var inst_31940 = (state_31942[(2)]);
var state_31942__$1 = state_31942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31942__$1,inst_31940);
} else {
if((state_val_31943 === (12))){
var inst_31928 = (state_31942[(2)]);
var state_31942__$1 = state_31942;
var statearr_31963_31993 = state_31942__$1;
(statearr_31963_31993[(2)] = inst_31928);

(statearr_31963_31993[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (2))){
var state_31942__$1 = state_31942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31942__$1,(4),in$);
} else {
if((state_val_31943 === (23))){
var inst_31936 = (state_31942[(2)]);
var state_31942__$1 = state_31942;
var statearr_31964_31994 = state_31942__$1;
(statearr_31964_31994[(2)] = inst_31936);

(statearr_31964_31994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (19))){
var inst_31923 = (state_31942[(2)]);
var state_31942__$1 = state_31942;
var statearr_31965_31995 = state_31942__$1;
(statearr_31965_31995[(2)] = inst_31923);

(statearr_31965_31995[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (11))){
var inst_31908 = (state_31942[(7)]);
var inst_31894 = (state_31942[(10)]);
var inst_31908__$1 = cljs.core.seq.call(null,inst_31894);
var state_31942__$1 = (function (){var statearr_31966 = state_31942;
(statearr_31966[(7)] = inst_31908__$1);

return statearr_31966;
})();
if(inst_31908__$1){
var statearr_31967_31996 = state_31942__$1;
(statearr_31967_31996[(1)] = (14));

} else {
var statearr_31968_31997 = state_31942__$1;
(statearr_31968_31997[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (9))){
var inst_31930 = (state_31942[(2)]);
var inst_31931 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31942__$1 = (function (){var statearr_31969 = state_31942;
(statearr_31969[(15)] = inst_31930);

return statearr_31969;
})();
if(cljs.core.truth_(inst_31931)){
var statearr_31970_31998 = state_31942__$1;
(statearr_31970_31998[(1)] = (21));

} else {
var statearr_31971_31999 = state_31942__$1;
(statearr_31971_31999[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (5))){
var inst_31886 = cljs.core.async.close_BANG_.call(null,out);
var state_31942__$1 = state_31942;
var statearr_31972_32000 = state_31942__$1;
(statearr_31972_32000[(2)] = inst_31886);

(statearr_31972_32000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (14))){
var inst_31908 = (state_31942[(7)]);
var inst_31910 = cljs.core.chunked_seq_QMARK_.call(null,inst_31908);
var state_31942__$1 = state_31942;
if(inst_31910){
var statearr_31973_32001 = state_31942__$1;
(statearr_31973_32001[(1)] = (17));

} else {
var statearr_31974_32002 = state_31942__$1;
(statearr_31974_32002[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (16))){
var inst_31926 = (state_31942[(2)]);
var state_31942__$1 = state_31942;
var statearr_31975_32003 = state_31942__$1;
(statearr_31975_32003[(2)] = inst_31926);

(statearr_31975_32003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (10))){
var inst_31897 = (state_31942[(8)]);
var inst_31895 = (state_31942[(11)]);
var inst_31902 = cljs.core._nth.call(null,inst_31895,inst_31897);
var state_31942__$1 = state_31942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31942__$1,(13),out,inst_31902);
} else {
if((state_val_31943 === (18))){
var inst_31908 = (state_31942[(7)]);
var inst_31917 = cljs.core.first.call(null,inst_31908);
var state_31942__$1 = state_31942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31942__$1,(20),out,inst_31917);
} else {
if((state_val_31943 === (8))){
var inst_31897 = (state_31942[(8)]);
var inst_31896 = (state_31942[(9)]);
var inst_31899 = (inst_31897 < inst_31896);
var inst_31900 = inst_31899;
var state_31942__$1 = state_31942;
if(cljs.core.truth_(inst_31900)){
var statearr_31976_32004 = state_31942__$1;
(statearr_31976_32004[(1)] = (10));

} else {
var statearr_31977_32005 = state_31942__$1;
(statearr_31977_32005[(1)] = (11));

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
});})(c__30326__auto__))
;
return ((function (switch__30231__auto__,c__30326__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30232__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30232__auto____0 = (function (){
var statearr_31978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31978[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30232__auto__);

(statearr_31978[(1)] = (1));

return statearr_31978;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30232__auto____1 = (function (state_31942){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_31942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e31979){if((e31979 instanceof Object)){
var ex__30235__auto__ = e31979;
var statearr_31980_32006 = state_31942;
(statearr_31980_32006[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32007 = state_31942;
state_31942 = G__32007;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30232__auto__ = function(state_31942){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30232__auto____1.call(this,state_31942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30232__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30232__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto__))
})();
var state__30328__auto__ = (function (){var statearr_31981 = f__30327__auto__.call(null);
(statearr_31981[(6)] = c__30326__auto__);

return statearr_31981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__))
);

return c__30326__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32009 = arguments.length;
switch (G__32009) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32012 = arguments.length;
switch (G__32012) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32015 = arguments.length;
switch (G__32015) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30326__auto___32062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___32062,out){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto___32062,out){
return (function (state_32039){
var state_val_32040 = (state_32039[(1)]);
if((state_val_32040 === (7))){
var inst_32034 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32041_32063 = state_32039__$1;
(statearr_32041_32063[(2)] = inst_32034);

(statearr_32041_32063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (1))){
var inst_32016 = null;
var state_32039__$1 = (function (){var statearr_32042 = state_32039;
(statearr_32042[(7)] = inst_32016);

return statearr_32042;
})();
var statearr_32043_32064 = state_32039__$1;
(statearr_32043_32064[(2)] = null);

(statearr_32043_32064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (4))){
var inst_32019 = (state_32039[(8)]);
var inst_32019__$1 = (state_32039[(2)]);
var inst_32020 = (inst_32019__$1 == null);
var inst_32021 = cljs.core.not.call(null,inst_32020);
var state_32039__$1 = (function (){var statearr_32044 = state_32039;
(statearr_32044[(8)] = inst_32019__$1);

return statearr_32044;
})();
if(inst_32021){
var statearr_32045_32065 = state_32039__$1;
(statearr_32045_32065[(1)] = (5));

} else {
var statearr_32046_32066 = state_32039__$1;
(statearr_32046_32066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (6))){
var state_32039__$1 = state_32039;
var statearr_32047_32067 = state_32039__$1;
(statearr_32047_32067[(2)] = null);

(statearr_32047_32067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (3))){
var inst_32036 = (state_32039[(2)]);
var inst_32037 = cljs.core.async.close_BANG_.call(null,out);
var state_32039__$1 = (function (){var statearr_32048 = state_32039;
(statearr_32048[(9)] = inst_32036);

return statearr_32048;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32039__$1,inst_32037);
} else {
if((state_val_32040 === (2))){
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32039__$1,(4),ch);
} else {
if((state_val_32040 === (11))){
var inst_32019 = (state_32039[(8)]);
var inst_32028 = (state_32039[(2)]);
var inst_32016 = inst_32019;
var state_32039__$1 = (function (){var statearr_32049 = state_32039;
(statearr_32049[(10)] = inst_32028);

(statearr_32049[(7)] = inst_32016);

return statearr_32049;
})();
var statearr_32050_32068 = state_32039__$1;
(statearr_32050_32068[(2)] = null);

(statearr_32050_32068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (9))){
var inst_32019 = (state_32039[(8)]);
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32039__$1,(11),out,inst_32019);
} else {
if((state_val_32040 === (5))){
var inst_32019 = (state_32039[(8)]);
var inst_32016 = (state_32039[(7)]);
var inst_32023 = cljs.core._EQ_.call(null,inst_32019,inst_32016);
var state_32039__$1 = state_32039;
if(inst_32023){
var statearr_32052_32069 = state_32039__$1;
(statearr_32052_32069[(1)] = (8));

} else {
var statearr_32053_32070 = state_32039__$1;
(statearr_32053_32070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (10))){
var inst_32031 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32054_32071 = state_32039__$1;
(statearr_32054_32071[(2)] = inst_32031);

(statearr_32054_32071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (8))){
var inst_32016 = (state_32039[(7)]);
var tmp32051 = inst_32016;
var inst_32016__$1 = tmp32051;
var state_32039__$1 = (function (){var statearr_32055 = state_32039;
(statearr_32055[(7)] = inst_32016__$1);

return statearr_32055;
})();
var statearr_32056_32072 = state_32039__$1;
(statearr_32056_32072[(2)] = null);

(statearr_32056_32072[(1)] = (2));


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
});})(c__30326__auto___32062,out))
;
return ((function (switch__30231__auto__,c__30326__auto___32062,out){
return (function() {
var cljs$core$async$state_machine__30232__auto__ = null;
var cljs$core$async$state_machine__30232__auto____0 = (function (){
var statearr_32057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32057[(0)] = cljs$core$async$state_machine__30232__auto__);

(statearr_32057[(1)] = (1));

return statearr_32057;
});
var cljs$core$async$state_machine__30232__auto____1 = (function (state_32039){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_32039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e32058){if((e32058 instanceof Object)){
var ex__30235__auto__ = e32058;
var statearr_32059_32073 = state_32039;
(statearr_32059_32073[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32074 = state_32039;
state_32039 = G__32074;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$state_machine__30232__auto__ = function(state_32039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30232__auto____1.call(this,state_32039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30232__auto____0;
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30232__auto____1;
return cljs$core$async$state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto___32062,out))
})();
var state__30328__auto__ = (function (){var statearr_32060 = f__30327__auto__.call(null);
(statearr_32060[(6)] = c__30326__auto___32062);

return statearr_32060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___32062,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32076 = arguments.length;
switch (G__32076) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30326__auto___32142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___32142,out){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto___32142,out){
return (function (state_32114){
var state_val_32115 = (state_32114[(1)]);
if((state_val_32115 === (7))){
var inst_32110 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32116_32143 = state_32114__$1;
(statearr_32116_32143[(2)] = inst_32110);

(statearr_32116_32143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (1))){
var inst_32077 = (new Array(n));
var inst_32078 = inst_32077;
var inst_32079 = (0);
var state_32114__$1 = (function (){var statearr_32117 = state_32114;
(statearr_32117[(7)] = inst_32078);

(statearr_32117[(8)] = inst_32079);

return statearr_32117;
})();
var statearr_32118_32144 = state_32114__$1;
(statearr_32118_32144[(2)] = null);

(statearr_32118_32144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (4))){
var inst_32082 = (state_32114[(9)]);
var inst_32082__$1 = (state_32114[(2)]);
var inst_32083 = (inst_32082__$1 == null);
var inst_32084 = cljs.core.not.call(null,inst_32083);
var state_32114__$1 = (function (){var statearr_32119 = state_32114;
(statearr_32119[(9)] = inst_32082__$1);

return statearr_32119;
})();
if(inst_32084){
var statearr_32120_32145 = state_32114__$1;
(statearr_32120_32145[(1)] = (5));

} else {
var statearr_32121_32146 = state_32114__$1;
(statearr_32121_32146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (15))){
var inst_32104 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32122_32147 = state_32114__$1;
(statearr_32122_32147[(2)] = inst_32104);

(statearr_32122_32147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (13))){
var state_32114__$1 = state_32114;
var statearr_32123_32148 = state_32114__$1;
(statearr_32123_32148[(2)] = null);

(statearr_32123_32148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (6))){
var inst_32079 = (state_32114[(8)]);
var inst_32100 = (inst_32079 > (0));
var state_32114__$1 = state_32114;
if(cljs.core.truth_(inst_32100)){
var statearr_32124_32149 = state_32114__$1;
(statearr_32124_32149[(1)] = (12));

} else {
var statearr_32125_32150 = state_32114__$1;
(statearr_32125_32150[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (3))){
var inst_32112 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32114__$1,inst_32112);
} else {
if((state_val_32115 === (12))){
var inst_32078 = (state_32114[(7)]);
var inst_32102 = cljs.core.vec.call(null,inst_32078);
var state_32114__$1 = state_32114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32114__$1,(15),out,inst_32102);
} else {
if((state_val_32115 === (2))){
var state_32114__$1 = state_32114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32114__$1,(4),ch);
} else {
if((state_val_32115 === (11))){
var inst_32094 = (state_32114[(2)]);
var inst_32095 = (new Array(n));
var inst_32078 = inst_32095;
var inst_32079 = (0);
var state_32114__$1 = (function (){var statearr_32126 = state_32114;
(statearr_32126[(7)] = inst_32078);

(statearr_32126[(8)] = inst_32079);

(statearr_32126[(10)] = inst_32094);

return statearr_32126;
})();
var statearr_32127_32151 = state_32114__$1;
(statearr_32127_32151[(2)] = null);

(statearr_32127_32151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (9))){
var inst_32078 = (state_32114[(7)]);
var inst_32092 = cljs.core.vec.call(null,inst_32078);
var state_32114__$1 = state_32114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32114__$1,(11),out,inst_32092);
} else {
if((state_val_32115 === (5))){
var inst_32082 = (state_32114[(9)]);
var inst_32078 = (state_32114[(7)]);
var inst_32079 = (state_32114[(8)]);
var inst_32087 = (state_32114[(11)]);
var inst_32086 = (inst_32078[inst_32079] = inst_32082);
var inst_32087__$1 = (inst_32079 + (1));
var inst_32088 = (inst_32087__$1 < n);
var state_32114__$1 = (function (){var statearr_32128 = state_32114;
(statearr_32128[(12)] = inst_32086);

(statearr_32128[(11)] = inst_32087__$1);

return statearr_32128;
})();
if(cljs.core.truth_(inst_32088)){
var statearr_32129_32152 = state_32114__$1;
(statearr_32129_32152[(1)] = (8));

} else {
var statearr_32130_32153 = state_32114__$1;
(statearr_32130_32153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (14))){
var inst_32107 = (state_32114[(2)]);
var inst_32108 = cljs.core.async.close_BANG_.call(null,out);
var state_32114__$1 = (function (){var statearr_32132 = state_32114;
(statearr_32132[(13)] = inst_32107);

return statearr_32132;
})();
var statearr_32133_32154 = state_32114__$1;
(statearr_32133_32154[(2)] = inst_32108);

(statearr_32133_32154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (10))){
var inst_32098 = (state_32114[(2)]);
var state_32114__$1 = state_32114;
var statearr_32134_32155 = state_32114__$1;
(statearr_32134_32155[(2)] = inst_32098);

(statearr_32134_32155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32115 === (8))){
var inst_32078 = (state_32114[(7)]);
var inst_32087 = (state_32114[(11)]);
var tmp32131 = inst_32078;
var inst_32078__$1 = tmp32131;
var inst_32079 = inst_32087;
var state_32114__$1 = (function (){var statearr_32135 = state_32114;
(statearr_32135[(7)] = inst_32078__$1);

(statearr_32135[(8)] = inst_32079);

return statearr_32135;
})();
var statearr_32136_32156 = state_32114__$1;
(statearr_32136_32156[(2)] = null);

(statearr_32136_32156[(1)] = (2));


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
});})(c__30326__auto___32142,out))
;
return ((function (switch__30231__auto__,c__30326__auto___32142,out){
return (function() {
var cljs$core$async$state_machine__30232__auto__ = null;
var cljs$core$async$state_machine__30232__auto____0 = (function (){
var statearr_32137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32137[(0)] = cljs$core$async$state_machine__30232__auto__);

(statearr_32137[(1)] = (1));

return statearr_32137;
});
var cljs$core$async$state_machine__30232__auto____1 = (function (state_32114){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_32114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e32138){if((e32138 instanceof Object)){
var ex__30235__auto__ = e32138;
var statearr_32139_32157 = state_32114;
(statearr_32139_32157[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32158 = state_32114;
state_32114 = G__32158;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$state_machine__30232__auto__ = function(state_32114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30232__auto____1.call(this,state_32114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30232__auto____0;
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30232__auto____1;
return cljs$core$async$state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto___32142,out))
})();
var state__30328__auto__ = (function (){var statearr_32140 = f__30327__auto__.call(null);
(statearr_32140[(6)] = c__30326__auto___32142);

return statearr_32140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___32142,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32160 = arguments.length;
switch (G__32160) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30326__auto___32230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___32230,out){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto___32230,out){
return (function (state_32202){
var state_val_32203 = (state_32202[(1)]);
if((state_val_32203 === (7))){
var inst_32198 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
var statearr_32204_32231 = state_32202__$1;
(statearr_32204_32231[(2)] = inst_32198);

(statearr_32204_32231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (1))){
var inst_32161 = [];
var inst_32162 = inst_32161;
var inst_32163 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32202__$1 = (function (){var statearr_32205 = state_32202;
(statearr_32205[(7)] = inst_32162);

(statearr_32205[(8)] = inst_32163);

return statearr_32205;
})();
var statearr_32206_32232 = state_32202__$1;
(statearr_32206_32232[(2)] = null);

(statearr_32206_32232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (4))){
var inst_32166 = (state_32202[(9)]);
var inst_32166__$1 = (state_32202[(2)]);
var inst_32167 = (inst_32166__$1 == null);
var inst_32168 = cljs.core.not.call(null,inst_32167);
var state_32202__$1 = (function (){var statearr_32207 = state_32202;
(statearr_32207[(9)] = inst_32166__$1);

return statearr_32207;
})();
if(inst_32168){
var statearr_32208_32233 = state_32202__$1;
(statearr_32208_32233[(1)] = (5));

} else {
var statearr_32209_32234 = state_32202__$1;
(statearr_32209_32234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (15))){
var inst_32192 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
var statearr_32210_32235 = state_32202__$1;
(statearr_32210_32235[(2)] = inst_32192);

(statearr_32210_32235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (13))){
var state_32202__$1 = state_32202;
var statearr_32211_32236 = state_32202__$1;
(statearr_32211_32236[(2)] = null);

(statearr_32211_32236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (6))){
var inst_32162 = (state_32202[(7)]);
var inst_32187 = inst_32162.length;
var inst_32188 = (inst_32187 > (0));
var state_32202__$1 = state_32202;
if(cljs.core.truth_(inst_32188)){
var statearr_32212_32237 = state_32202__$1;
(statearr_32212_32237[(1)] = (12));

} else {
var statearr_32213_32238 = state_32202__$1;
(statearr_32213_32238[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (3))){
var inst_32200 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32202__$1,inst_32200);
} else {
if((state_val_32203 === (12))){
var inst_32162 = (state_32202[(7)]);
var inst_32190 = cljs.core.vec.call(null,inst_32162);
var state_32202__$1 = state_32202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32202__$1,(15),out,inst_32190);
} else {
if((state_val_32203 === (2))){
var state_32202__$1 = state_32202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32202__$1,(4),ch);
} else {
if((state_val_32203 === (11))){
var inst_32170 = (state_32202[(10)]);
var inst_32166 = (state_32202[(9)]);
var inst_32180 = (state_32202[(2)]);
var inst_32181 = [];
var inst_32182 = inst_32181.push(inst_32166);
var inst_32162 = inst_32181;
var inst_32163 = inst_32170;
var state_32202__$1 = (function (){var statearr_32214 = state_32202;
(statearr_32214[(11)] = inst_32182);

(statearr_32214[(7)] = inst_32162);

(statearr_32214[(8)] = inst_32163);

(statearr_32214[(12)] = inst_32180);

return statearr_32214;
})();
var statearr_32215_32239 = state_32202__$1;
(statearr_32215_32239[(2)] = null);

(statearr_32215_32239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (9))){
var inst_32162 = (state_32202[(7)]);
var inst_32178 = cljs.core.vec.call(null,inst_32162);
var state_32202__$1 = state_32202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32202__$1,(11),out,inst_32178);
} else {
if((state_val_32203 === (5))){
var inst_32170 = (state_32202[(10)]);
var inst_32163 = (state_32202[(8)]);
var inst_32166 = (state_32202[(9)]);
var inst_32170__$1 = f.call(null,inst_32166);
var inst_32171 = cljs.core._EQ_.call(null,inst_32170__$1,inst_32163);
var inst_32172 = cljs.core.keyword_identical_QMARK_.call(null,inst_32163,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32173 = ((inst_32171) || (inst_32172));
var state_32202__$1 = (function (){var statearr_32216 = state_32202;
(statearr_32216[(10)] = inst_32170__$1);

return statearr_32216;
})();
if(cljs.core.truth_(inst_32173)){
var statearr_32217_32240 = state_32202__$1;
(statearr_32217_32240[(1)] = (8));

} else {
var statearr_32218_32241 = state_32202__$1;
(statearr_32218_32241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (14))){
var inst_32195 = (state_32202[(2)]);
var inst_32196 = cljs.core.async.close_BANG_.call(null,out);
var state_32202__$1 = (function (){var statearr_32220 = state_32202;
(statearr_32220[(13)] = inst_32195);

return statearr_32220;
})();
var statearr_32221_32242 = state_32202__$1;
(statearr_32221_32242[(2)] = inst_32196);

(statearr_32221_32242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (10))){
var inst_32185 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
var statearr_32222_32243 = state_32202__$1;
(statearr_32222_32243[(2)] = inst_32185);

(statearr_32222_32243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (8))){
var inst_32162 = (state_32202[(7)]);
var inst_32170 = (state_32202[(10)]);
var inst_32166 = (state_32202[(9)]);
var inst_32175 = inst_32162.push(inst_32166);
var tmp32219 = inst_32162;
var inst_32162__$1 = tmp32219;
var inst_32163 = inst_32170;
var state_32202__$1 = (function (){var statearr_32223 = state_32202;
(statearr_32223[(14)] = inst_32175);

(statearr_32223[(7)] = inst_32162__$1);

(statearr_32223[(8)] = inst_32163);

return statearr_32223;
})();
var statearr_32224_32244 = state_32202__$1;
(statearr_32224_32244[(2)] = null);

(statearr_32224_32244[(1)] = (2));


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
});})(c__30326__auto___32230,out))
;
return ((function (switch__30231__auto__,c__30326__auto___32230,out){
return (function() {
var cljs$core$async$state_machine__30232__auto__ = null;
var cljs$core$async$state_machine__30232__auto____0 = (function (){
var statearr_32225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32225[(0)] = cljs$core$async$state_machine__30232__auto__);

(statearr_32225[(1)] = (1));

return statearr_32225;
});
var cljs$core$async$state_machine__30232__auto____1 = (function (state_32202){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_32202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e32226){if((e32226 instanceof Object)){
var ex__30235__auto__ = e32226;
var statearr_32227_32245 = state_32202;
(statearr_32227_32245[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32246 = state_32202;
state_32202 = G__32246;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
cljs$core$async$state_machine__30232__auto__ = function(state_32202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30232__auto____1.call(this,state_32202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30232__auto____0;
cljs$core$async$state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30232__auto____1;
return cljs$core$async$state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto___32230,out))
})();
var state__30328__auto__ = (function (){var statearr_32228 = f__30327__auto__.call(null);
(statearr_32228[(6)] = c__30326__auto___32230);

return statearr_32228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___32230,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1554200927904
