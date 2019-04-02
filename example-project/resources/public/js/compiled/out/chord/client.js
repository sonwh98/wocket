// Compiled by ClojureScript 1.10.520 {}
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chord.channels');
goog.require('chord.format');
chord.client.close_event__GT_maybe_error = (function chord$client$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
chord.client.create_ws = (function chord$client$create_ws(url,opts){
if(cljs.core.truth_((function (){var and__4120__auto__ = (typeof require !== 'undefined');
if(and__4120__auto__){
try{return require("ws");
}catch (e35099){var e = e35099;
return false;
}} else {
return and__4120__auto__;
}
})())){
var ws = require("ws");
if(cljs.core.truth_(opts)){
return (new ws(url,cljs.core.clj__GT_js.call(null,opts)));
} else {
return (new ws(url));
}
} else {
return (new WebSocket(url));

}
});
/**
 * Creates websockets connection and returns a 2-sided channel when the websocket is opened.
 * Arguments:
 *  ws-url           - (required) link to websocket service
 *  opts             - (optional) map to configure reading/writing channels
 *    :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
 *    :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
 *    :format        - (optional) data format to use on the channel, (at the moment)
 *                                either :edn (default), :json, :json-kw or :str.
 *    :ws-opts       - (optional) Other options to be passed to the websocket constructor (NodeJS only)
 *                                see https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketaddress-protocols-options
 * 
 * Usage:
 *  (:require [cljs.core.async :as a])
 * 
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437"))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
 *                                        :write-ch (a/chan (a/dropping-buffer 10))}))
 */
chord.client.ws_ch = (function chord$client$ws_ch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35211 = arguments.length;
var i__4731__auto___35212 = (0);
while(true){
if((i__4731__auto___35212 < len__4730__auto___35211)){
args__4736__auto__.push((arguments[i__4731__auto___35212]));

var G__35213 = (i__4731__auto___35212 + (1));
i__4731__auto___35212 = G__35213;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__35104){
var vec__35105 = p__35104;
var map__35108 = cljs.core.nth.call(null,vec__35105,(0),null);
var map__35108__$1 = (((((!((map__35108 == null))))?(((((map__35108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35108):map__35108);
var opts = map__35108__$1;
var read_ch = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var ws_opts = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643));
var web_socket = chord.client.create_ws.call(null,ws_url,ws_opts);
var map__35110 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__4131__auto__ = read_ch;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__4131__auto__ = write_ch;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})()], null),opts);
var map__35110__$1 = (((((!((map__35110 == null))))?(((((map__35110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35110):map__35110);
var read_ch__$1 = cljs.core.get.call(null,map__35110__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.call(null,map__35110__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.call(null);
var close_ch = cljs.core.async.chan.call(null);
web_socket.binaryType = "arraybuffer";

chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);

web_socket.onopen = ((function (web_socket,map__35110,map__35110__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__35105,map__35108,map__35108__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (p1__35100_SHARP_){
return cljs.core.async.put_BANG_.call(null,open_ch,p1__35100_SHARP_);
});})(web_socket,map__35110,map__35110__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__35105,map__35108,map__35108__$1,opts,read_ch,write_ch,format,ws_opts))
;

web_socket.onclose = ((function (web_socket,map__35110,map__35110__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__35105,map__35108,map__35108__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (p1__35101_SHARP_){
return cljs.core.async.put_BANG_.call(null,close_ch,p1__35101_SHARP_);
});})(web_socket,map__35110,map__35110__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__35105,map__35108,map__35108__$1,opts,read_ch,write_ch,format,ws_opts))
;

var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (web_socket,map__35110,map__35110__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__35105,map__35108,map__35108__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (){
return web_socket.close();
});})(web_socket,map__35110,map__35110__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__35105,map__35108,map__35108__$1,opts,read_ch,write_ch,format,ws_opts))
], null));
var initial_ch = cljs.core.async.chan.call(null);
var c__34821__auto___35214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34821__auto___35214,ws_chan,initial_ch,web_socket,map__35110,map__35110__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__35105,map__35108,map__35108__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (){
var f__34822__auto__ = (function (){var switch__34798__auto__ = ((function (c__34821__auto___35214,ws_chan,initial_ch,web_socket,map__35110,map__35110__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__35105,map__35108,map__35108__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (state_35177){
var state_val_35178 = (state_35177[(1)]);
if((state_val_35178 === (7))){
var inst_35173 = (state_35177[(2)]);
var state_35177__$1 = state_35177;
var statearr_35179_35215 = state_35177__$1;
(statearr_35179_35215[(2)] = inst_35173);

(statearr_35179_35215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (20))){
var state_35177__$1 = state_35177;
var statearr_35180_35216 = state_35177__$1;
(statearr_35180_35216[(2)] = null);

(statearr_35180_35216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (1))){
var inst_35112 = false;
var state_35177__$1 = (function (){var statearr_35181 = state_35177;
(statearr_35181[(7)] = inst_35112);

return statearr_35181;
})();
var statearr_35182_35217 = state_35177__$1;
(statearr_35182_35217[(2)] = null);

(statearr_35182_35217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (4))){
var inst_35127 = (state_35177[(8)]);
var inst_35125 = (state_35177[(9)]);
var inst_35125__$1 = (state_35177[(2)]);
var inst_35126 = cljs.core.nth.call(null,inst_35125__$1,(0),null);
var inst_35127__$1 = cljs.core.nth.call(null,inst_35125__$1,(1),null);
var inst_35128 = cljs.core._EQ_.call(null,inst_35127__$1,open_ch);
var state_35177__$1 = (function (){var statearr_35183 = state_35177;
(statearr_35183[(10)] = inst_35126);

(statearr_35183[(8)] = inst_35127__$1);

(statearr_35183[(9)] = inst_35125__$1);

return statearr_35183;
})();
if(inst_35128){
var statearr_35184_35218 = state_35177__$1;
(statearr_35184_35218[(1)] = (5));

} else {
var statearr_35185_35219 = state_35177__$1;
(statearr_35185_35219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (15))){
var inst_35158 = (state_35177[(2)]);
var state_35177__$1 = state_35177;
var statearr_35186_35220 = state_35177__$1;
(statearr_35186_35220[(2)] = inst_35158);

(statearr_35186_35220[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (21))){
var inst_35169 = (state_35177[(2)]);
var state_35177__$1 = state_35177;
var statearr_35187_35221 = state_35177__$1;
(statearr_35187_35221[(2)] = inst_35169);

(statearr_35187_35221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (13))){
var state_35177__$1 = state_35177;
var statearr_35188_35222 = state_35177__$1;
(statearr_35188_35222[(2)] = null);

(statearr_35188_35222[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (6))){
var inst_35127 = (state_35177[(8)]);
var inst_35142 = cljs.core._EQ_.call(null,inst_35127,close_ch);
var state_35177__$1 = state_35177;
if(inst_35142){
var statearr_35189_35223 = state_35177__$1;
(statearr_35189_35223[(1)] = (9));

} else {
var statearr_35190_35224 = state_35177__$1;
(statearr_35190_35224[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (17))){
var state_35177__$1 = state_35177;
var statearr_35191_35225 = state_35177__$1;
(statearr_35191_35225[(2)] = initial_ch);

(statearr_35191_35225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (3))){
var inst_35175 = (state_35177[(2)]);
var state_35177__$1 = state_35177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35177__$1,inst_35175);
} else {
if((state_val_35178 === (12))){
var inst_35112 = (state_35177[(7)]);
var state_35177__$1 = state_35177;
if(cljs.core.truth_(inst_35112)){
var statearr_35192_35226 = state_35177__$1;
(statearr_35192_35226[(1)] = (16));

} else {
var statearr_35193_35227 = state_35177__$1;
(statearr_35193_35227[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (2))){
var inst_35121 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35122 = [open_ch,close_ch];
var inst_35123 = (new cljs.core.PersistentVector(null,2,(5),inst_35121,inst_35122,null));
var state_35177__$1 = state_35177;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35177__$1,(4),inst_35123);
} else {
if((state_val_35178 === (19))){
var inst_35126 = (state_35177[(10)]);
var state_35177__$1 = state_35177;
var statearr_35194_35228 = state_35177__$1;
(statearr_35194_35228[(2)] = inst_35126);

(statearr_35194_35228[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (11))){
var inst_35171 = (state_35177[(2)]);
var state_35177__$1 = state_35177;
var statearr_35195_35229 = state_35177__$1;
(statearr_35195_35229[(2)] = inst_35171);

(statearr_35195_35229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (9))){
var inst_35148 = (state_35177[(11)]);
var inst_35125 = (state_35177[(9)]);
var inst_35147 = cljs.core.nth.call(null,inst_35125,(0),null);
var inst_35148__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_35147);
var state_35177__$1 = (function (){var statearr_35196 = state_35177;
(statearr_35196[(11)] = inst_35148__$1);

return statearr_35196;
})();
if(cljs.core.truth_(inst_35148__$1)){
var statearr_35197_35230 = state_35177__$1;
(statearr_35197_35230[(1)] = (12));

} else {
var statearr_35198_35231 = state_35177__$1;
(statearr_35198_35231[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (5))){
var inst_35125 = (state_35177[(9)]);
var inst_35133 = cljs.core.nth.call(null,inst_35125,(0),null);
var inst_35134 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_35135 = [ws_chan];
var inst_35136 = cljs.core.PersistentHashMap.fromArrays(inst_35134,inst_35135);
var state_35177__$1 = (function (){var statearr_35199 = state_35177;
(statearr_35199[(12)] = inst_35133);

return statearr_35199;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35177__$1,(8),initial_ch,inst_35136);
} else {
if((state_val_35178 === (14))){
var inst_35161 = (state_35177[(2)]);
var inst_35162 = cljs.core.async.close_BANG_.call(null,ws_chan);
var inst_35163 = cljs.core.async.close_BANG_.call(null,initial_ch);
var state_35177__$1 = (function (){var statearr_35200 = state_35177;
(statearr_35200[(13)] = inst_35162);

(statearr_35200[(14)] = inst_35161);

return statearr_35200;
})();
var statearr_35201_35232 = state_35177__$1;
(statearr_35201_35232[(2)] = inst_35163);

(statearr_35201_35232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (16))){
var state_35177__$1 = state_35177;
var statearr_35202_35233 = state_35177__$1;
(statearr_35202_35233[(2)] = read_ch__$1);

(statearr_35202_35233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (10))){
var inst_35127 = (state_35177[(8)]);
var inst_35165 = cljs.core._EQ_.call(null,inst_35127,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_35177__$1 = state_35177;
if(inst_35165){
var statearr_35203_35234 = state_35177__$1;
(statearr_35203_35234[(1)] = (19));

} else {
var statearr_35204_35235 = state_35177__$1;
(statearr_35204_35235[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (18))){
var inst_35148 = (state_35177[(11)]);
var inst_35153 = (state_35177[(2)]);
var inst_35154 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_35155 = [inst_35148];
var inst_35156 = cljs.core.PersistentHashMap.fromArrays(inst_35154,inst_35155);
var state_35177__$1 = state_35177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35177__$1,(15),inst_35153,inst_35156);
} else {
if((state_val_35178 === (8))){
var inst_35138 = (state_35177[(2)]);
var inst_35139 = cljs.core.async.close_BANG_.call(null,initial_ch);
var inst_35112 = true;
var state_35177__$1 = (function (){var statearr_35205 = state_35177;
(statearr_35205[(15)] = inst_35139);

(statearr_35205[(16)] = inst_35138);

(statearr_35205[(7)] = inst_35112);

return statearr_35205;
})();
var statearr_35206_35236 = state_35177__$1;
(statearr_35206_35236[(2)] = null);

(statearr_35206_35236[(1)] = (2));


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
});})(c__34821__auto___35214,ws_chan,initial_ch,web_socket,map__35110,map__35110__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__35105,map__35108,map__35108__$1,opts,read_ch,write_ch,format,ws_opts))
;
return ((function (switch__34798__auto__,c__34821__auto___35214,ws_chan,initial_ch,web_socket,map__35110,map__35110__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__35105,map__35108,map__35108__$1,opts,read_ch,write_ch,format,ws_opts){
return (function() {
var chord$client$state_machine__34799__auto__ = null;
var chord$client$state_machine__34799__auto____0 = (function (){
var statearr_35207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35207[(0)] = chord$client$state_machine__34799__auto__);

(statearr_35207[(1)] = (1));

return statearr_35207;
});
var chord$client$state_machine__34799__auto____1 = (function (state_35177){
while(true){
var ret_value__34800__auto__ = (function (){try{while(true){
var result__34801__auto__ = switch__34798__auto__.call(null,state_35177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34801__auto__;
}
break;
}
}catch (e35208){if((e35208 instanceof Object)){
var ex__34802__auto__ = e35208;
var statearr_35209_35237 = state_35177;
(statearr_35209_35237[(5)] = ex__34802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35238 = state_35177;
state_35177 = G__35238;
continue;
} else {
return ret_value__34800__auto__;
}
break;
}
});
chord$client$state_machine__34799__auto__ = function(state_35177){
switch(arguments.length){
case 0:
return chord$client$state_machine__34799__auto____0.call(this);
case 1:
return chord$client$state_machine__34799__auto____1.call(this,state_35177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__34799__auto____0;
chord$client$state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__34799__auto____1;
return chord$client$state_machine__34799__auto__;
})()
;})(switch__34798__auto__,c__34821__auto___35214,ws_chan,initial_ch,web_socket,map__35110,map__35110__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__35105,map__35108,map__35108__$1,opts,read_ch,write_ch,format,ws_opts))
})();
var state__34823__auto__ = (function (){var statearr_35210 = f__34822__auto__.call(null);
(statearr_35210[(6)] = c__34821__auto___35214);

return statearr_35210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34823__auto__);
});})(c__34821__auto___35214,ws_chan,initial_ch,web_socket,map__35110,map__35110__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__35105,map__35108,map__35108__$1,opts,read_ch,write_ch,format,ws_opts))
);


return initial_ch;
});

chord.client.ws_ch.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
chord.client.ws_ch.cljs$lang$applyTo = (function (seq35102){
var G__35103 = cljs.core.first.call(null,seq35102);
var seq35102__$1 = cljs.core.next.call(null,seq35102);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35103,seq35102__$1);
});


//# sourceMappingURL=client.js.map?rel=1554201125048
