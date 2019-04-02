// Compiled by ClojureScript 1.10.520 {}
goog.provide('com.kaicode.mercury');
goog.require('cljs.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof com !== 'undefined') && (typeof com.kaicode !== 'undefined') && (typeof com.kaicode.mercury !== 'undefined') && (typeof com.kaicode.mercury.message_bus !== 'undefined')){
} else {
com.kaicode.mercury.message_bus = cljs.core.async.chan.call(null,(10));
}
if((typeof com !== 'undefined') && (typeof com.kaicode !== 'undefined') && (typeof com.kaicode.mercury !== 'undefined') && (typeof com.kaicode.mercury.message_publication !== 'undefined')){
} else {
com.kaicode.mercury.message_publication = cljs.core.async.pub.call(null,com.kaicode.mercury.message_bus,(function (msg){
if(cljs.core.vector_QMARK_.call(null,msg)){
return cljs.core.first.call(null,msg);
} else {
return new cljs.core.Keyword(null,"no-topic","no-topic",1531731282);
}
}));
}
com.kaicode.mercury.broadcast = (function com$kaicode$mercury$broadcast(msg){
return cljs.core.async.put_BANG_.call(null,com.kaicode.mercury.message_bus,msg);
});
com.kaicode.mercury.subscribe_to = (function com$kaicode$mercury$subscribe_to(topic){
var channel = cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,(10)));
cljs.core.async.sub.call(null,com.kaicode.mercury.message_publication,topic,channel);

return channel;
});
com.kaicode.mercury.unsubscribe = (function com$kaicode$mercury$unsubscribe(channel,topic){
return cljs.core.async.unsub.call(null,com.kaicode.mercury.message_publication,topic,channel);
});
com.kaicode.mercury.on = (function com$kaicode$mercury$on(topic,call_back_fn){
var topic_chan = com.kaicode.mercury.subscribe_to.call(null,topic);
var c__30326__auto___32285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___32285,topic_chan){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto___32285,topic_chan){
return (function (state_32276){
var state_val_32277 = (state_32276[(1)]);
if((state_val_32277 === (1))){
var state_32276__$1 = state_32276;
var statearr_32278_32286 = state_32276__$1;
(statearr_32278_32286[(2)] = null);

(statearr_32278_32286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32277 === (2))){
var state_32276__$1 = state_32276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32276__$1,(4),topic_chan);
} else {
if((state_val_32277 === (3))){
var inst_32274 = (state_32276[(2)]);
var state_32276__$1 = state_32276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32276__$1,inst_32274);
} else {
if((state_val_32277 === (4))){
var inst_32270 = (state_32276[(2)]);
var inst_32271 = call_back_fn.call(null,inst_32270);
var state_32276__$1 = (function (){var statearr_32279 = state_32276;
(statearr_32279[(7)] = inst_32271);

return statearr_32279;
})();
var statearr_32280_32287 = state_32276__$1;
(statearr_32280_32287[(2)] = null);

(statearr_32280_32287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__30326__auto___32285,topic_chan))
;
return ((function (switch__30231__auto__,c__30326__auto___32285,topic_chan){
return (function() {
var com$kaicode$mercury$on_$_state_machine__30232__auto__ = null;
var com$kaicode$mercury$on_$_state_machine__30232__auto____0 = (function (){
var statearr_32281 = [null,null,null,null,null,null,null,null];
(statearr_32281[(0)] = com$kaicode$mercury$on_$_state_machine__30232__auto__);

(statearr_32281[(1)] = (1));

return statearr_32281;
});
var com$kaicode$mercury$on_$_state_machine__30232__auto____1 = (function (state_32276){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_32276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e32282){if((e32282 instanceof Object)){
var ex__30235__auto__ = e32282;
var statearr_32283_32288 = state_32276;
(statearr_32283_32288[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32289 = state_32276;
state_32276 = G__32289;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
com$kaicode$mercury$on_$_state_machine__30232__auto__ = function(state_32276){
switch(arguments.length){
case 0:
return com$kaicode$mercury$on_$_state_machine__30232__auto____0.call(this);
case 1:
return com$kaicode$mercury$on_$_state_machine__30232__auto____1.call(this,state_32276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$kaicode$mercury$on_$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = com$kaicode$mercury$on_$_state_machine__30232__auto____0;
com$kaicode$mercury$on_$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = com$kaicode$mercury$on_$_state_machine__30232__auto____1;
return com$kaicode$mercury$on_$_state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto___32285,topic_chan))
})();
var state__30328__auto__ = (function (){var statearr_32284 = f__30327__auto__.call(null);
(statearr_32284[(6)] = c__30326__auto___32285);

return statearr_32284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___32285,topic_chan))
);


return topic_chan;
});
/**
 * returns a closure that takes a call-back-fn which is executed when ever the topic message been broadcasted
 */
com.kaicode.mercury.whenever = (function com$kaicode$mercury$whenever(topic){
var topic_message = cljs.core.atom.call(null,null);
com.kaicode.mercury.on.call(null,topic,((function (topic_message){
return (function (p1__32290_SHARP_){
return cljs.core.reset_BANG_.call(null,topic_message,p1__32290_SHARP_);
});})(topic_message))
);

return ((function (topic_message){
return (function (call_back_fn){
if(cljs.core.truth_(cljs.core.deref.call(null,topic_message))){
return call_back_fn.call(null,cljs.core.deref.call(null,topic_message));
} else {
return com.kaicode.mercury.on.call(null,topic,((function (topic_message){
return (function (this_topic_message){
cljs.core.reset_BANG_.call(null,topic_message,this_topic_message);

return call_back_fn.call(null,this_topic_message);
});})(topic_message))
);
}
});
;})(topic_message))
});
com.kaicode.mercury.postpone = (function com$kaicode$mercury$postpone(execute_fn,ms){
var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__){
return (function (){
var f__30327__auto__ = (function (){var switch__30231__auto__ = ((function (c__30326__auto__){
return (function (state_32296){
var state_val_32297 = (state_32296[(1)]);
if((state_val_32297 === (1))){
var inst_32291 = cljs.core.async.timeout.call(null,ms);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32296__$1,(2),inst_32291);
} else {
if((state_val_32297 === (2))){
var inst_32293 = (state_32296[(2)]);
var inst_32294 = execute_fn.call(null);
var state_32296__$1 = (function (){var statearr_32298 = state_32296;
(statearr_32298[(7)] = inst_32293);

return statearr_32298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32296__$1,inst_32294);
} else {
return null;
}
}
});})(c__30326__auto__))
;
return ((function (switch__30231__auto__,c__30326__auto__){
return (function() {
var com$kaicode$mercury$postpone_$_state_machine__30232__auto__ = null;
var com$kaicode$mercury$postpone_$_state_machine__30232__auto____0 = (function (){
var statearr_32299 = [null,null,null,null,null,null,null,null];
(statearr_32299[(0)] = com$kaicode$mercury$postpone_$_state_machine__30232__auto__);

(statearr_32299[(1)] = (1));

return statearr_32299;
});
var com$kaicode$mercury$postpone_$_state_machine__30232__auto____1 = (function (state_32296){
while(true){
var ret_value__30233__auto__ = (function (){try{while(true){
var result__30234__auto__ = switch__30231__auto__.call(null,state_32296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30234__auto__;
}
break;
}
}catch (e32300){if((e32300 instanceof Object)){
var ex__30235__auto__ = e32300;
var statearr_32301_32303 = state_32296;
(statearr_32301_32303[(5)] = ex__30235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32304 = state_32296;
state_32296 = G__32304;
continue;
} else {
return ret_value__30233__auto__;
}
break;
}
});
com$kaicode$mercury$postpone_$_state_machine__30232__auto__ = function(state_32296){
switch(arguments.length){
case 0:
return com$kaicode$mercury$postpone_$_state_machine__30232__auto____0.call(this);
case 1:
return com$kaicode$mercury$postpone_$_state_machine__30232__auto____1.call(this,state_32296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$kaicode$mercury$postpone_$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$0 = com$kaicode$mercury$postpone_$_state_machine__30232__auto____0;
com$kaicode$mercury$postpone_$_state_machine__30232__auto__.cljs$core$IFn$_invoke$arity$1 = com$kaicode$mercury$postpone_$_state_machine__30232__auto____1;
return com$kaicode$mercury$postpone_$_state_machine__30232__auto__;
})()
;})(switch__30231__auto__,c__30326__auto__))
})();
var state__30328__auto__ = (function (){var statearr_32302 = f__30327__auto__.call(null);
(statearr_32302[(6)] = c__30326__auto__);

return statearr_32302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__))
);

return c__30326__auto__;
});

//# sourceMappingURL=mercury.js.map?rel=1554200928279
