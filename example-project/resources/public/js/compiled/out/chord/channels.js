// Compiled by ClojureScript 1.10.520 {}
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
chord.channels.read_from_ws_BANG_ = (function chord$channels$read_from_ws_BANG_(ws,ch){
return ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
});
});
chord.channels.write_to_ws_BANG_ = (function chord$channels$write_to_ws_BANG_(ws,ch){
var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto__){
return (function (state_32615){
var state_val_32616 = (state_32615[(1)]);
if((state_val_32616 === (1))){
var state_32615__$1 = state_32615;
var statearr_32617_32629 = state_32615__$1;
(statearr_32617_32629[(2)] = null);

(statearr_32617_32629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32616 === (2))){
var state_32615__$1 = state_32615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32615__$1,(4),ch);
} else {
if((state_val_32616 === (3))){
var inst_32613 = (state_32615[(2)]);
var state_32615__$1 = state_32615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32615__$1,inst_32613);
} else {
if((state_val_32616 === (4))){
var inst_32605 = (state_32615[(7)]);
var inst_32605__$1 = (state_32615[(2)]);
var state_32615__$1 = (function (){var statearr_32618 = state_32615;
(statearr_32618[(7)] = inst_32605__$1);

return statearr_32618;
})();
if(cljs.core.truth_(inst_32605__$1)){
var statearr_32619_32630 = state_32615__$1;
(statearr_32619_32630[(1)] = (5));

} else {
var statearr_32620_32631 = state_32615__$1;
(statearr_32620_32631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32616 === (5))){
var inst_32605 = (state_32615[(7)]);
var inst_32607 = ws.send(inst_32605);
var state_32615__$1 = (function (){var statearr_32621 = state_32615;
(statearr_32621[(8)] = inst_32607);

return statearr_32621;
})();
var statearr_32622_32632 = state_32615__$1;
(statearr_32622_32632[(2)] = null);

(statearr_32622_32632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32616 === (6))){
var state_32615__$1 = state_32615;
var statearr_32623_32633 = state_32615__$1;
(statearr_32623_32633[(2)] = null);

(statearr_32623_32633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32616 === (7))){
var inst_32611 = (state_32615[(2)]);
var state_32615__$1 = state_32615;
var statearr_32624_32634 = state_32615__$1;
(statearr_32624_32634[(2)] = inst_32611);

(statearr_32624_32634[(1)] = (3));


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
});})(c__30326__auto__))
;
return ((function (switch__30231__auto__,c__30326__auto__){
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__30232__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__30232__auto____0 = (function (){
var statearr_32625 = [null,null,null,null,null,null,null,null,null];
(statearr_32625[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__30232__auto__);

(statearr_32625[(1)] = (1));

return statearr_32625;
});
var chord$channels$write_to_ws_BANG__$_state_machine__30232__auto____1 = (function (state_32615){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_32615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e32626){if((e32626 instanceof Object)){
var ex__30235__auto__ = e32626;
var statearr_32627_32635 = state_32615;
(statearr_32627_32635[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32636 = state_32615;
state_32615 = G__32636;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__30232__auto__ = function(state_32615){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__30232__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__30232__auto____1.call(this,state_32615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__30232__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__30232__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto__))
})();
var state__30328__auto__ = (function (){var statearr_32628 = f__30327__auto__.call(null);
(statearr_32628[(6)] = c__30326__auto__);

return statearr_32628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__))
);

return c__30326__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32649 = arguments.length;
var i__4731__auto___32650 = (0);
while(true){
if((i__4731__auto___32650 < len__4730__auto___32649)){
args__4736__auto__.push((arguments[i__4731__auto___32650]));

var G__32651 = (i__4731__auto___32650 + (1));
i__4731__auto___32650 = G__32651;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__32640){
var vec__32641 = p__32640;
var map__32644 = cljs.core.nth.call(null,vec__32641,(0),null);
var map__32644__$1 = (((((!((map__32644 == null))))?(((((map__32644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32644):map__32644);
var on_close = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if((typeof chord !== 'undefined') && (typeof chord.channels !== 'undefined') && (typeof chord.channels.t_chord$channels32646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels32646 = (function (read_ch,write_ch,p__32640,vec__32641,map__32644,on_close,meta32647){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__32640 = p__32640;
this.vec__32641 = vec__32641;
this.map__32644 = map__32644;
this.on_close = on_close;
this.meta32647 = meta32647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
chord.channels.t_chord$channels32646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__32641,map__32644,map__32644__$1,on_close){
return (function (_32648,meta32647__$1){
var self__ = this;
var _32648__$1 = this;
return (new chord.channels.t_chord$channels32646(self__.read_ch,self__.write_ch,self__.p__32640,self__.vec__32641,self__.map__32644,self__.on_close,meta32647__$1));
});})(vec__32641,map__32644,map__32644__$1,on_close))
;

chord.channels.t_chord$channels32646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__32641,map__32644,map__32644__$1,on_close){
return (function (_32648){
var self__ = this;
var _32648__$1 = this;
return self__.meta32647;
});})(vec__32641,map__32644,map__32644__$1,on_close))
;

chord.channels.t_chord$channels32646.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

chord.channels.t_chord$channels32646.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__32641,map__32644,map__32644__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__32641,map__32644,map__32644__$1,on_close))
;

chord.channels.t_chord$channels32646.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

chord.channels.t_chord$channels32646.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__32641,map__32644,map__32644__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});})(vec__32641,map__32644,map__32644__$1,on_close))
;

chord.channels.t_chord$channels32646.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

chord.channels.t_chord$channels32646.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__32641,map__32644,map__32644__$1,on_close){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return self__.on_close.call(null);
} else {
return null;
}
});})(vec__32641,map__32644,map__32644__$1,on_close))
;

chord.channels.t_chord$channels32646.getBasis = ((function (vec__32641,map__32644,map__32644__$1,on_close){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__32640","p__32640",2060212909,null),new cljs.core.Symbol(null,"vec__32641","vec__32641",-774894473,null),new cljs.core.Symbol(null,"map__32644","map__32644",1993105904,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta32647","meta32647",1371879281,null)], null);
});})(vec__32641,map__32644,map__32644__$1,on_close))
;

chord.channels.t_chord$channels32646.cljs$lang$type = true;

chord.channels.t_chord$channels32646.cljs$lang$ctorStr = "chord.channels/t_chord$channels32646";

chord.channels.t_chord$channels32646.cljs$lang$ctorPrWriter = ((function (vec__32641,map__32644,map__32644__$1,on_close){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"chord.channels/t_chord$channels32646");
});})(vec__32641,map__32644,map__32644__$1,on_close))
;

/**
 * Positional factory function for chord.channels/t_chord$channels32646.
 */
chord.channels.__GT_t_chord$channels32646 = ((function (vec__32641,map__32644,map__32644__$1,on_close){
return (function chord$channels$__GT_t_chord$channels32646(read_ch__$1,write_ch__$1,p__32640__$1,vec__32641__$1,map__32644__$2,on_close__$1,meta32647){
return (new chord.channels.t_chord$channels32646(read_ch__$1,write_ch__$1,p__32640__$1,vec__32641__$1,map__32644__$2,on_close__$1,meta32647));
});})(vec__32641,map__32644,map__32644__$1,on_close))
;

}

return (new chord.channels.t_chord$channels32646(read_ch,write_ch,p__32640,vec__32641,map__32644__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
});

chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq32637){
var G__32638 = cljs.core.first.call(null,seq32637);
var seq32637__$1 = cljs.core.next.call(null,seq32637);
var G__32639 = cljs.core.first.call(null,seq32637__$1);
var seq32637__$2 = cljs.core.next.call(null,seq32637__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32638,G__32639,seq32637__$2);
});


//# sourceMappingURL=channels.js.map?rel=1554200929453
