// Compiled by ClojureScript 1.10.520 {}
goog.provide('com.kaicode.wocket.client');
goog.require('cljs.core');
goog.require('chord.client');
goog.require('cljs.core.async');
goog.require('com.kaicode.mercury');
goog.require('com.kaicode.teleport');
goog.require('taoensso.timbre');
com.kaicode.wocket.client.server_websocket_channel = cljs.core.atom.call(null,null);
if((typeof com !== 'undefined') && (typeof com.kaicode !== 'undefined') && (typeof com.kaicode.wocket !== 'undefined') && (typeof com.kaicode.wocket.client !== 'undefined') && (typeof com.kaicode.wocket.client.process_msg !== 'undefined')){
} else {
com.kaicode.wocket.client.process_msg = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"com.kaicode.wocket.client","process-msg"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (p__37598){
var vec__37599 = p__37598;
var kw = cljs.core.nth.call(null,vec__37599,(0),null);
var val = cljs.core.nth.call(null,vec__37599,(1),null);
return kw;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
com.kaicode.wocket.client.connect_to_websocket_server = (function com$kaicode$wocket$client$connect_to_websocket_server(p__37602){
var map__37603 = p__37602;
var map__37603__$1 = (((((!((map__37603 == null))))?(((((map__37603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37603):map__37603);
var host = cljs.core.get.call(null,map__37603__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.call(null,map__37603__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var uri = cljs.core.get.call(null,map__37603__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var c__34821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34821__auto__,map__37603,map__37603__$1,host,port,uri){
return (function (){
var f__34822__auto__ = (function (){var switch__34798__auto__ = ((function (c__34821__auto__,map__37603,map__37603__$1,host,port,uri){
return (function (state_37731){
var state_val_37732 = (state_37731[(1)]);
if((state_val_37732 === (7))){
var state_37731__$1 = state_37731;
var statearr_37733_37807 = state_37731__$1;
(statearr_37733_37807[(2)] = host);

(statearr_37733_37807[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (20))){
var inst_37644 = (state_37731[(7)]);
var inst_37649 = inst_37644.cljs$lang$protocol_mask$partition0$;
var inst_37650 = (inst_37649 & (64));
var inst_37651 = inst_37644.cljs$core$ISeq$;
var inst_37652 = (cljs.core.PROTOCOL_SENTINEL === inst_37651);
var inst_37653 = ((inst_37650) || (inst_37652));
var state_37731__$1 = state_37731;
if(cljs.core.truth_(inst_37653)){
var statearr_37734_37808 = state_37731__$1;
(statearr_37734_37808[(1)] = (23));

} else {
var statearr_37735_37809 = state_37731__$1;
(statearr_37735_37809[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (27))){
var inst_37644 = (state_37731[(7)]);
var state_37731__$1 = state_37731;
var statearr_37736_37810 = state_37731__$1;
(statearr_37736_37810[(2)] = inst_37644);

(statearr_37736_37810[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (1))){
var state_37731__$1 = state_37731;
var statearr_37737_37811 = state_37731__$1;
(statearr_37737_37811[(2)] = null);

(statearr_37737_37811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (24))){
var state_37731__$1 = state_37731;
var statearr_37738_37812 = state_37731__$1;
(statearr_37738_37812[(2)] = false);

(statearr_37738_37812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (39))){
var inst_37688 = (state_37731[(8)]);
var inst_37695 = inst_37688.cljs$lang$protocol_mask$partition0$;
var inst_37696 = (inst_37695 & (64));
var inst_37697 = inst_37688.cljs$core$ISeq$;
var inst_37698 = (cljs.core.PROTOCOL_SENTINEL === inst_37697);
var inst_37699 = ((inst_37696) || (inst_37698));
var state_37731__$1 = state_37731;
if(cljs.core.truth_(inst_37699)){
var statearr_37739_37813 = state_37731__$1;
(statearr_37739_37813[(1)] = (42));

} else {
var statearr_37740_37814 = state_37731__$1;
(statearr_37740_37814[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (46))){
var inst_37688 = (state_37731[(8)]);
var state_37731__$1 = state_37731;
var statearr_37741_37815 = state_37731__$1;
(statearr_37741_37815[(2)] = inst_37688);

(statearr_37741_37815[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (4))){
var state_37731__$1 = state_37731;
var statearr_37742_37816 = state_37731__$1;
(statearr_37742_37816[(2)] = "ws://");

(statearr_37742_37816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (15))){
var inst_37633 = (state_37731[(2)]);
var state_37731__$1 = (function (){var statearr_37743 = state_37731;
(statearr_37743[(9)] = inst_37633);

return statearr_37743;
})();
if(cljs.core.truth_(uri)){
var statearr_37744_37817 = state_37731__$1;
(statearr_37744_37817[(1)] = (16));

} else {
var statearr_37745_37818 = state_37731__$1;
(statearr_37745_37818[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (21))){
var state_37731__$1 = state_37731;
var statearr_37746_37819 = state_37731__$1;
(statearr_37746_37819[(2)] = false);

(statearr_37746_37819[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (31))){
var inst_37727 = (state_37731[(2)]);
var state_37731__$1 = state_37731;
var statearr_37747_37820 = state_37731__$1;
(statearr_37747_37820[(2)] = inst_37727);

(statearr_37747_37820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (32))){
var inst_37675 = (state_37731[(2)]);
var state_37731__$1 = (function (){var statearr_37748 = state_37731;
(statearr_37748[(10)] = inst_37675);

return statearr_37748;
})();
var statearr_37749_37821 = state_37731__$1;
(statearr_37749_37821[(2)] = null);

(statearr_37749_37821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (40))){
var state_37731__$1 = state_37731;
var statearr_37750_37822 = state_37731__$1;
(statearr_37750_37822[(2)] = false);

(statearr_37750_37822[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (33))){
var inst_37666 = (state_37731[(11)]);
var state_37731__$1 = state_37731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37731__$1,(35),inst_37666);
} else {
if((state_val_37732 === (13))){
var state_37731__$1 = state_37731;
var statearr_37751_37823 = state_37731__$1;
(statearr_37751_37823[(2)] = "");

(statearr_37751_37823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (22))){
var inst_37660 = (state_37731[(2)]);
var state_37731__$1 = state_37731;
if(cljs.core.truth_(inst_37660)){
var statearr_37752_37824 = state_37731__$1;
(statearr_37752_37824[(1)] = (26));

} else {
var statearr_37753_37825 = state_37731__$1;
(statearr_37753_37825[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (36))){
var inst_37688 = (state_37731[(8)]);
var inst_37692 = (inst_37688 == null);
var inst_37693 = cljs.core.not.call(null,inst_37692);
var state_37731__$1 = state_37731;
if(inst_37693){
var statearr_37754_37826 = state_37731__$1;
(statearr_37754_37826[(1)] = (39));

} else {
var statearr_37755_37827 = state_37731__$1;
(statearr_37755_37827[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (41))){
var inst_37706 = (state_37731[(2)]);
var state_37731__$1 = state_37731;
if(cljs.core.truth_(inst_37706)){
var statearr_37756_37828 = state_37731__$1;
(statearr_37756_37828[(1)] = (45));

} else {
var statearr_37757_37829 = state_37731__$1;
(statearr_37757_37829[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (43))){
var state_37731__$1 = state_37731;
var statearr_37758_37830 = state_37731__$1;
(statearr_37758_37830[(2)] = false);

(statearr_37758_37830[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (29))){
var inst_37633 = (state_37731[(9)]);
var inst_37613 = (state_37731[(12)]);
var inst_37637 = (state_37731[(13)]);
var inst_37619 = (state_37731[(14)]);
var inst_37667 = (state_37731[(15)]);
var inst_37638 = (state_37731[(16)]);
var inst_37666 = (state_37731[(11)]);
var inst_37665 = (state_37731[(17)]);
var inst_37669 = cljs.core.reset_BANG_.call(null,com.kaicode.wocket.client.server_websocket_channel,null);
var inst_37670 = (function (){var protocol = inst_37613;
var host__$1 = inst_37619;
var port__$1 = inst_37633;
var uri__$1 = inst_37637;
var url = inst_37638;
var map__37606 = inst_37665;
var ws_channel = inst_37666;
var error = inst_37667;
return ((function (protocol,host__$1,port__$1,uri__$1,url,map__37606,ws_channel,error,inst_37633,inst_37613,inst_37637,inst_37619,inst_37667,inst_37638,inst_37666,inst_37665,inst_37669,state_val_37732,c__34821__auto__,map__37603,map__37603__$1,host,port,uri){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket error",error], null);
});
;})(protocol,host__$1,port__$1,uri__$1,url,map__37606,ws_channel,error,inst_37633,inst_37613,inst_37637,inst_37619,inst_37667,inst_37638,inst_37666,inst_37665,inst_37669,state_val_37732,c__34821__auto__,map__37603,map__37603__$1,host,port,uri))
})();
var inst_37671 = (new cljs.core.Delay(inst_37670,null));
var inst_37672 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.kaicode.wocket.client","*cider-repl wocket/example-project:localhost:64629(clj)*",36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37671,null,-615741209);
var inst_37673 = cljs.core.async.timeout.call(null,(5000));
var state_37731__$1 = (function (){var statearr_37759 = state_37731;
(statearr_37759[(18)] = inst_37672);

(statearr_37759[(19)] = inst_37669);

return statearr_37759;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37731__$1,(32),inst_37673);
} else {
if((state_val_37732 === (44))){
var inst_37703 = (state_37731[(2)]);
var state_37731__$1 = state_37731;
var statearr_37760_37831 = state_37731__$1;
(statearr_37760_37831[(2)] = inst_37703);

(statearr_37760_37831[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (6))){
var inst_37613 = (state_37731[(2)]);
var state_37731__$1 = (function (){var statearr_37761 = state_37731;
(statearr_37761[(12)] = inst_37613);

return statearr_37761;
})();
if(cljs.core.truth_(host)){
var statearr_37762_37832 = state_37731__$1;
(statearr_37762_37832[(1)] = (7));

} else {
var statearr_37763_37833 = state_37731__$1;
(statearr_37763_37833[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (28))){
var inst_37667 = (state_37731[(15)]);
var inst_37665 = (state_37731[(17)]);
var inst_37665__$1 = (state_37731[(2)]);
var inst_37666 = cljs.core.get.call(null,inst_37665__$1,new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174));
var inst_37667__$1 = cljs.core.get.call(null,inst_37665__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var state_37731__$1 = (function (){var statearr_37764 = state_37731;
(statearr_37764[(15)] = inst_37667__$1);

(statearr_37764[(11)] = inst_37666);

(statearr_37764[(17)] = inst_37665__$1);

return statearr_37764;
})();
if(cljs.core.truth_(inst_37667__$1)){
var statearr_37765_37834 = state_37731__$1;
(statearr_37765_37834[(1)] = (29));

} else {
var statearr_37766_37835 = state_37731__$1;
(statearr_37766_37835[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (25))){
var inst_37657 = (state_37731[(2)]);
var state_37731__$1 = state_37731;
var statearr_37767_37836 = state_37731__$1;
(statearr_37767_37836[(2)] = inst_37657);

(statearr_37767_37836[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (34))){
var inst_37724 = (state_37731[(2)]);
var state_37731__$1 = (function (){var statearr_37768 = state_37731;
(statearr_37768[(20)] = inst_37724);

return statearr_37768;
})();
var statearr_37769_37837 = state_37731__$1;
(statearr_37769_37837[(2)] = null);

(statearr_37769_37837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (17))){
var state_37731__$1 = state_37731;
var statearr_37770_37838 = state_37731__$1;
(statearr_37770_37838[(2)] = "/ws");

(statearr_37770_37838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (3))){
var inst_37729 = (state_37731[(2)]);
var state_37731__$1 = state_37731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37731__$1,inst_37729);
} else {
if((state_val_37732 === (12))){
var inst_37625 = (state_37731[(21)]);
var inst_37625__$1 = (state_37731[(2)]);
var inst_37626 = cljs.core._EQ_.call(null,"80",inst_37625__$1);
var inst_37627 = cljs.core._EQ_.call(null,"",inst_37625__$1);
var inst_37628 = ((inst_37626) || (inst_37627));
var state_37731__$1 = (function (){var statearr_37771 = state_37731;
(statearr_37771[(21)] = inst_37625__$1);

return statearr_37771;
})();
if(cljs.core.truth_(inst_37628)){
var statearr_37772_37839 = state_37731__$1;
(statearr_37772_37839[(1)] = (13));

} else {
var statearr_37773_37840 = state_37731__$1;
(statearr_37773_37840[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (2))){
var inst_37607 = window.location;
var inst_37608 = inst_37607.protocol;
var inst_37609 = cljs.core._EQ_.call(null,inst_37608,"http:");
var state_37731__$1 = state_37731;
if(inst_37609){
var statearr_37774_37841 = state_37731__$1;
(statearr_37774_37841[(1)] = (4));

} else {
var statearr_37775_37842 = state_37731__$1;
(statearr_37775_37842[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (23))){
var state_37731__$1 = state_37731;
var statearr_37776_37843 = state_37731__$1;
(statearr_37776_37843[(2)] = true);

(statearr_37776_37843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (47))){
var inst_37711 = (state_37731[(2)]);
var inst_37712 = cljs.core.get.call(null,inst_37711,new cljs.core.Keyword(null,"message","message",-406056002));
var inst_37713 = com.kaicode.teleport.deserialize.call(null,inst_37712);
var inst_37714 = com.kaicode.wocket.client.process_msg.call(null,inst_37713);
var state_37731__$1 = (function (){var statearr_37777 = state_37731;
(statearr_37777[(22)] = inst_37714);

return statearr_37777;
})();
var statearr_37778_37844 = state_37731__$1;
(statearr_37778_37844[(2)] = null);

(statearr_37778_37844[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (35))){
var inst_37688 = (state_37731[(8)]);
var inst_37688__$1 = (state_37731[(2)]);
var state_37731__$1 = (function (){var statearr_37779 = state_37731;
(statearr_37779[(8)] = inst_37688__$1);

return statearr_37779;
})();
if(cljs.core.truth_(inst_37688__$1)){
var statearr_37780_37845 = state_37731__$1;
(statearr_37780_37845[(1)] = (36));

} else {
var statearr_37781_37846 = state_37731__$1;
(statearr_37781_37846[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (19))){
var inst_37644 = (state_37731[(7)]);
var inst_37644__$1 = (state_37731[(2)]);
var inst_37646 = (inst_37644__$1 == null);
var inst_37647 = cljs.core.not.call(null,inst_37646);
var state_37731__$1 = (function (){var statearr_37782 = state_37731;
(statearr_37782[(7)] = inst_37644__$1);

return statearr_37782;
})();
if(inst_37647){
var statearr_37783_37847 = state_37731__$1;
(statearr_37783_37847[(1)] = (20));

} else {
var statearr_37784_37848 = state_37731__$1;
(statearr_37784_37848[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (11))){
var inst_37622 = window.location;
var inst_37623 = inst_37622.port;
var state_37731__$1 = state_37731;
var statearr_37785_37849 = state_37731__$1;
(statearr_37785_37849[(2)] = inst_37623);

(statearr_37785_37849[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (9))){
var inst_37619 = (state_37731[(2)]);
var state_37731__$1 = (function (){var statearr_37786 = state_37731;
(statearr_37786[(14)] = inst_37619);

return statearr_37786;
})();
if(cljs.core.truth_(port)){
var statearr_37787_37850 = state_37731__$1;
(statearr_37787_37850[(1)] = (10));

} else {
var statearr_37788_37851 = state_37731__$1;
(statearr_37788_37851[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (5))){
var state_37731__$1 = state_37731;
var statearr_37789_37852 = state_37731__$1;
(statearr_37789_37852[(2)] = "wss://");

(statearr_37789_37852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (14))){
var inst_37625 = (state_37731[(21)]);
var inst_37631 = [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37625)].join('');
var state_37731__$1 = state_37731;
var statearr_37790_37853 = state_37731__$1;
(statearr_37790_37853[(2)] = inst_37631);

(statearr_37790_37853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (45))){
var inst_37688 = (state_37731[(8)]);
var inst_37708 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37688);
var state_37731__$1 = state_37731;
var statearr_37791_37854 = state_37731__$1;
(statearr_37791_37854[(2)] = inst_37708);

(statearr_37791_37854[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (26))){
var inst_37644 = (state_37731[(7)]);
var inst_37662 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37644);
var state_37731__$1 = state_37731;
var statearr_37792_37855 = state_37731__$1;
(statearr_37792_37855[(2)] = inst_37662);

(statearr_37792_37855[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (16))){
var state_37731__$1 = state_37731;
var statearr_37793_37856 = state_37731__$1;
(statearr_37793_37856[(2)] = uri);

(statearr_37793_37856[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (38))){
var inst_37722 = (state_37731[(2)]);
var state_37731__$1 = state_37731;
var statearr_37794_37857 = state_37731__$1;
(statearr_37794_37857[(2)] = inst_37722);

(statearr_37794_37857[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (30))){
var inst_37633 = (state_37731[(9)]);
var inst_37613 = (state_37731[(12)]);
var inst_37637 = (state_37731[(13)]);
var inst_37619 = (state_37731[(14)]);
var inst_37667 = (state_37731[(15)]);
var inst_37638 = (state_37731[(16)]);
var inst_37666 = (state_37731[(11)]);
var inst_37665 = (state_37731[(17)]);
var inst_37678 = (function (){var protocol = inst_37613;
var host__$1 = inst_37619;
var port__$1 = inst_37633;
var uri__$1 = inst_37637;
var url = inst_37638;
var map__37606 = inst_37665;
var ws_channel = inst_37666;
var error = inst_37667;
return ((function (protocol,host__$1,port__$1,uri__$1,url,map__37606,ws_channel,error,inst_37633,inst_37613,inst_37637,inst_37619,inst_37667,inst_37638,inst_37666,inst_37665,state_val_37732,c__34821__auto__,map__37603,map__37603__$1,host,port,uri){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket connected"], null);
});
;})(protocol,host__$1,port__$1,uri__$1,url,map__37606,ws_channel,error,inst_37633,inst_37613,inst_37637,inst_37619,inst_37667,inst_37638,inst_37666,inst_37665,state_val_37732,c__34821__auto__,map__37603,map__37603__$1,host,port,uri))
})();
var inst_37679 = (new cljs.core.Delay(inst_37678,null));
var inst_37680 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.kaicode.wocket.client","*cider-repl wocket/example-project:localhost:64629(clj)*",40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37679,null,829577650);
var inst_37681 = cljs.core.reset_BANG_.call(null,com.kaicode.wocket.client.server_websocket_channel,inst_37666);
var inst_37682 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37683 = [new cljs.core.Keyword("websocket","connected","websocket/connected",1045426566),true];
var inst_37684 = (new cljs.core.PersistentVector(null,2,(5),inst_37682,inst_37683,null));
var inst_37685 = com.kaicode.mercury.broadcast.call(null,inst_37684);
var state_37731__$1 = (function (){var statearr_37795 = state_37731;
(statearr_37795[(23)] = inst_37685);

(statearr_37795[(24)] = inst_37680);

(statearr_37795[(25)] = inst_37681);

return statearr_37795;
})();
var statearr_37796_37858 = state_37731__$1;
(statearr_37796_37858[(2)] = null);

(statearr_37796_37858[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (10))){
var state_37731__$1 = state_37731;
var statearr_37797_37859 = state_37731__$1;
(statearr_37797_37859[(2)] = port);

(statearr_37797_37859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (18))){
var inst_37633 = (state_37731[(9)]);
var inst_37613 = (state_37731[(12)]);
var inst_37637 = (state_37731[(13)]);
var inst_37619 = (state_37731[(14)]);
var inst_37638 = (state_37731[(16)]);
var inst_37637__$1 = (state_37731[(2)]);
var inst_37638__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37613),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37619),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37633),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37637__$1)].join('');
var inst_37639 = [new cljs.core.Keyword(null,"format","format",-1306924766)];
var inst_37640 = [new cljs.core.Keyword(null,"str","str",1089608819)];
var inst_37641 = cljs.core.PersistentHashMap.fromArrays(inst_37639,inst_37640);
var inst_37642 = chord.client.ws_ch.call(null,inst_37638__$1,inst_37641);
var state_37731__$1 = (function (){var statearr_37798 = state_37731;
(statearr_37798[(13)] = inst_37637__$1);

(statearr_37798[(16)] = inst_37638__$1);

return statearr_37798;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37731__$1,(19),inst_37642);
} else {
if((state_val_37732 === (42))){
var state_37731__$1 = state_37731;
var statearr_37799_37860 = state_37731__$1;
(statearr_37799_37860[(2)] = true);

(statearr_37799_37860[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (37))){
var inst_37633 = (state_37731[(9)]);
var inst_37613 = (state_37731[(12)]);
var inst_37688 = (state_37731[(8)]);
var inst_37637 = (state_37731[(13)]);
var inst_37619 = (state_37731[(14)]);
var inst_37667 = (state_37731[(15)]);
var inst_37638 = (state_37731[(16)]);
var inst_37666 = (state_37731[(11)]);
var inst_37665 = (state_37731[(17)]);
var inst_37717 = cljs.core.reset_BANG_.call(null,com.kaicode.wocket.client.server_websocket_channel,null);
var inst_37718 = (function (){var uri__$1 = inst_37637;
var protocol = inst_37613;
var temp__5718__auto__ = inst_37688;
var ws_channel = inst_37666;
var port__$1 = inst_37633;
var host__$1 = inst_37619;
var map__37606 = inst_37665;
var url = inst_37638;
var error = inst_37667;
return ((function (uri__$1,protocol,temp__5718__auto__,ws_channel,port__$1,host__$1,map__37606,url,error,inst_37633,inst_37613,inst_37688,inst_37637,inst_37619,inst_37667,inst_37638,inst_37666,inst_37665,inst_37717,state_val_37732,c__34821__auto__,map__37603,map__37603__$1,host,port,uri){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trying reconnect..."], null);
});
;})(uri__$1,protocol,temp__5718__auto__,ws_channel,port__$1,host__$1,map__37606,url,error,inst_37633,inst_37613,inst_37688,inst_37637,inst_37619,inst_37667,inst_37638,inst_37666,inst_37665,inst_37717,state_val_37732,c__34821__auto__,map__37603,map__37603__$1,host,port,uri))
})();
var inst_37719 = (new cljs.core.Delay(inst_37718,null));
var inst_37720 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.kaicode.wocket.client","*cider-repl wocket/example-project:localhost:64629(clj)*",50,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37719,null,14144071);
var state_37731__$1 = (function (){var statearr_37800 = state_37731;
(statearr_37800[(26)] = inst_37717);

return statearr_37800;
})();
var statearr_37801_37861 = state_37731__$1;
(statearr_37801_37861[(2)] = inst_37720);

(statearr_37801_37861[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (8))){
var inst_37616 = window.location;
var inst_37617 = inst_37616.hostname;
var state_37731__$1 = state_37731;
var statearr_37802_37862 = state_37731__$1;
(statearr_37802_37862[(2)] = inst_37617);

(statearr_37802_37862[(1)] = (9));


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
}
}
});})(c__34821__auto__,map__37603,map__37603__$1,host,port,uri))
;
return ((function (switch__34798__auto__,c__34821__auto__,map__37603,map__37603__$1,host,port,uri){
return (function() {
var com$kaicode$wocket$client$connect_to_websocket_server_$_state_machine__34799__auto__ = null;
var com$kaicode$wocket$client$connect_to_websocket_server_$_state_machine__34799__auto____0 = (function (){
var statearr_37803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37803[(0)] = com$kaicode$wocket$client$connect_to_websocket_server_$_state_machine__34799__auto__);

(statearr_37803[(1)] = (1));

return statearr_37803;
});
var com$kaicode$wocket$client$connect_to_websocket_server_$_state_machine__34799__auto____1 = (function (state_37731){
while(true){
var ret_value__34800__auto__ = (function (){try{while(true){
var result__34801__auto__ = switch__34798__auto__.call(null,state_37731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34801__auto__;
}
break;
}
}catch (e37804){if((e37804 instanceof Object)){
var ex__34802__auto__ = e37804;
var statearr_37805_37863 = state_37731;
(statearr_37805_37863[(5)] = ex__34802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37864 = state_37731;
state_37731 = G__37864;
continue;
} else {
return ret_value__34800__auto__;
}
break;
}
});
com$kaicode$wocket$client$connect_to_websocket_server_$_state_machine__34799__auto__ = function(state_37731){
switch(arguments.length){
case 0:
return com$kaicode$wocket$client$connect_to_websocket_server_$_state_machine__34799__auto____0.call(this);
case 1:
return com$kaicode$wocket$client$connect_to_websocket_server_$_state_machine__34799__auto____1.call(this,state_37731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$kaicode$wocket$client$connect_to_websocket_server_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$0 = com$kaicode$wocket$client$connect_to_websocket_server_$_state_machine__34799__auto____0;
com$kaicode$wocket$client$connect_to_websocket_server_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$1 = com$kaicode$wocket$client$connect_to_websocket_server_$_state_machine__34799__auto____1;
return com$kaicode$wocket$client$connect_to_websocket_server_$_state_machine__34799__auto__;
})()
;})(switch__34798__auto__,c__34821__auto__,map__37603,map__37603__$1,host,port,uri))
})();
var state__34823__auto__ = (function (){var statearr_37806 = f__34822__auto__.call(null);
(statearr_37806[(6)] = c__34821__auto__);

return statearr_37806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34823__auto__);
});})(c__34821__auto__,map__37603,map__37603__$1,host,port,uri))
);

return c__34821__auto__;
});
com.kaicode.wocket.client.send_BANG_ = (function com$kaicode$wocket$client$send_BANG_(msg){
var c__34821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34821__auto__){
return (function (){
var f__34822__auto__ = (function (){var switch__34798__auto__ = ((function (c__34821__auto__){
return (function (state_37951){
var state_val_37952 = (state_37951[(1)]);
if((state_val_37952 === (7))){
var inst_37878 = (state_37951[(7)]);
var inst_37878__$1 = (state_37951[(2)]);
var state_37951__$1 = (function (){var statearr_37953 = state_37951;
(statearr_37953[(7)] = inst_37878__$1);

return statearr_37953;
})();
if(cljs.core.truth_(inst_37878__$1)){
var statearr_37954_38002 = state_37951__$1;
(statearr_37954_38002[(1)] = (8));

} else {
var statearr_37955_38003 = state_37951__$1;
(statearr_37955_38003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (20))){
var inst_37911 = (state_37951[(8)]);
var inst_37913 = cljs.core.chunked_seq_QMARK_.call(null,inst_37911);
var state_37951__$1 = state_37951;
if(inst_37913){
var statearr_37956_38004 = state_37951__$1;
(statearr_37956_38004[(1)] = (23));

} else {
var statearr_37957_38005 = state_37951__$1;
(statearr_37957_38005[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (1))){
var inst_37867 = ("send-queue" == null);
var state_37951__$1 = state_37951;
if(cljs.core.truth_(inst_37867)){
var statearr_37958_38006 = state_37951__$1;
(statearr_37958_38006[(1)] = (2));

} else {
var statearr_37959_38007 = state_37951__$1;
(statearr_37959_38007[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (24))){
var inst_37911 = (state_37951[(8)]);
var inst_37894 = (state_37951[(9)]);
var inst_37895 = (state_37951[(10)]);
var inst_37893 = (state_37951[(11)]);
var inst_37884 = (state_37951[(12)]);
var inst_37920 = cljs.core.first.call(null,inst_37911);
var inst_37921 = (function (){var send_queue = inst_37884;
var seq__37887 = inst_37911;
var chunk__37888 = inst_37893;
var count__37889 = inst_37894;
var i__37890 = inst_37895;
var temp__5720__auto__ = inst_37911;
var m = inst_37920;
return ((function (send_queue,seq__37887,chunk__37888,count__37889,i__37890,temp__5720__auto__,m,inst_37911,inst_37894,inst_37895,inst_37893,inst_37884,inst_37920,state_val_37952,c__34821__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sending ",m], null);
});
;})(send_queue,seq__37887,chunk__37888,count__37889,i__37890,temp__5720__auto__,m,inst_37911,inst_37894,inst_37895,inst_37893,inst_37884,inst_37920,state_val_37952,c__34821__auto__))
})();
var inst_37922 = (new cljs.core.Delay(inst_37921,null));
var inst_37923 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.kaicode.wocket.client","*cider-repl wocket/example-project:localhost:64629(clj)*",59,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37922,null,-2146155925);
var inst_37924 = cljs.core.deref.call(null,com.kaicode.wocket.client.server_websocket_channel);
var inst_37925 = com.kaicode.teleport.serialize.call(null,inst_37920);
var state_37951__$1 = (function (){var statearr_37960 = state_37951;
(statearr_37960[(13)] = inst_37923);

return statearr_37960;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37951__$1,(26),inst_37924,inst_37925);
} else {
if((state_val_37952 === (4))){
var inst_37872 = (state_37951[(14)]);
var inst_37872__$1 = (state_37951[(2)]);
var inst_37873 = (inst_37872__$1 == null);
var state_37951__$1 = (function (){var statearr_37961 = state_37951;
(statearr_37961[(14)] = inst_37872__$1);

return statearr_37961;
})();
if(cljs.core.truth_(inst_37873)){
var statearr_37962_38008 = state_37951__$1;
(statearr_37962_38008[(1)] = (5));

} else {
var statearr_37963_38009 = state_37951__$1;
(statearr_37963_38009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (15))){
var inst_37938 = (state_37951[(2)]);
var inst_37939 = localStorage.setItem("send-queue",null);
var state_37951__$1 = (function (){var statearr_37964 = state_37951;
(statearr_37964[(15)] = inst_37938);

return statearr_37964;
})();
var statearr_37965_38010 = state_37951__$1;
(statearr_37965_38010[(2)] = inst_37939);

(statearr_37965_38010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (21))){
var state_37951__$1 = state_37951;
var statearr_37966_38011 = state_37951__$1;
(statearr_37966_38011[(2)] = null);

(statearr_37966_38011[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (13))){
var inst_37949 = (state_37951[(2)]);
var state_37951__$1 = state_37951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37951__$1,inst_37949);
} else {
if((state_val_37952 === (22))){
var inst_37934 = (state_37951[(2)]);
var state_37951__$1 = state_37951;
var statearr_37967_38012 = state_37951__$1;
(statearr_37967_38012[(2)] = inst_37934);

(statearr_37967_38012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (6))){
var inst_37872 = (state_37951[(14)]);
var inst_37876 = com.kaicode.teleport.deserialize.call(null,inst_37872);
var state_37951__$1 = state_37951;
var statearr_37968_38013 = state_37951__$1;
(statearr_37968_38013[(2)] = inst_37876);

(statearr_37968_38013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (25))){
var inst_37931 = (state_37951[(2)]);
var state_37951__$1 = state_37951;
var statearr_37969_38014 = state_37951__$1;
(statearr_37969_38014[(2)] = inst_37931);

(statearr_37969_38014[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (17))){
var inst_37892 = (state_37951[(16)]);
var inst_37911 = (state_37951[(8)]);
var inst_37911__$1 = cljs.core.seq.call(null,inst_37892);
var state_37951__$1 = (function (){var statearr_37970 = state_37951;
(statearr_37970[(8)] = inst_37911__$1);

return statearr_37970;
})();
if(inst_37911__$1){
var statearr_37971_38015 = state_37951__$1;
(statearr_37971_38015[(1)] = (20));

} else {
var statearr_37972_38016 = state_37951__$1;
(statearr_37972_38016[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (3))){
var inst_37870 = localStorage.getItem("send-queue");
var state_37951__$1 = state_37951;
var statearr_37973_38017 = state_37951__$1;
(statearr_37973_38017[(2)] = inst_37870);

(statearr_37973_38017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (12))){
var inst_37884 = (state_37951[(12)]);
var inst_37941 = (function (){var send_queue = inst_37884;
return ((function (send_queue,inst_37884,state_val_37952,c__34821__auto__){
return (function (p1__37865_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pong","pong",-172484958),cljs.core.first.call(null,p1__37865_SHARP_));
});
;})(send_queue,inst_37884,state_val_37952,c__34821__auto__))
})();
var inst_37942 = cljs.core.remove.call(null,inst_37941,inst_37884);
var inst_37943 = (function (){var send_queue = inst_37942;
return ((function (send_queue,inst_37884,inst_37941,inst_37942,state_val_37952,c__34821__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket disconnected. queuing msg ",send_queue], null);
});
;})(send_queue,inst_37884,inst_37941,inst_37942,state_val_37952,c__34821__auto__))
})();
var inst_37944 = (new cljs.core.Delay(inst_37943,null));
var inst_37945 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.kaicode.wocket.client","*cider-repl wocket/example-project:localhost:64629(clj)*",63,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37944,null,1083356925);
var inst_37946 = com.kaicode.teleport.serialize.call(null,inst_37942);
var inst_37947 = localStorage.setItem("send-queue",inst_37946);
var state_37951__$1 = (function (){var statearr_37974 = state_37951;
(statearr_37974[(17)] = inst_37945);

return statearr_37974;
})();
var statearr_37975_38018 = state_37951__$1;
(statearr_37975_38018[(2)] = inst_37947);

(statearr_37975_38018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (2))){
var state_37951__$1 = state_37951;
var statearr_37979_38019 = state_37951__$1;
(statearr_37979_38019[(2)] = null);

(statearr_37979_38019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (23))){
var inst_37911 = (state_37951[(8)]);
var inst_37915 = cljs.core.chunk_first.call(null,inst_37911);
var inst_37916 = cljs.core.chunk_rest.call(null,inst_37911);
var inst_37917 = cljs.core.count.call(null,inst_37915);
var inst_37892 = inst_37916;
var inst_37893 = inst_37915;
var inst_37894 = inst_37917;
var inst_37895 = (0);
var state_37951__$1 = (function (){var statearr_37980 = state_37951;
(statearr_37980[(16)] = inst_37892);

(statearr_37980[(9)] = inst_37894);

(statearr_37980[(10)] = inst_37895);

(statearr_37980[(11)] = inst_37893);

return statearr_37980;
})();
var statearr_37981_38020 = state_37951__$1;
(statearr_37981_38020[(2)] = null);

(statearr_37981_38020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (19))){
var inst_37892 = (state_37951[(16)]);
var inst_37894 = (state_37951[(9)]);
var inst_37895 = (state_37951[(10)]);
var inst_37893 = (state_37951[(11)]);
var inst_37907 = (state_37951[(2)]);
var inst_37908 = (inst_37895 + (1));
var tmp37976 = inst_37892;
var tmp37977 = inst_37894;
var tmp37978 = inst_37893;
var inst_37892__$1 = tmp37976;
var inst_37893__$1 = tmp37978;
var inst_37894__$1 = tmp37977;
var inst_37895__$1 = inst_37908;
var state_37951__$1 = (function (){var statearr_37982 = state_37951;
(statearr_37982[(16)] = inst_37892__$1);

(statearr_37982[(18)] = inst_37907);

(statearr_37982[(9)] = inst_37894__$1);

(statearr_37982[(10)] = inst_37895__$1);

(statearr_37982[(11)] = inst_37893__$1);

return statearr_37982;
})();
var statearr_37983_38021 = state_37951__$1;
(statearr_37983_38021[(2)] = null);

(statearr_37983_38021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (11))){
var inst_37884 = (state_37951[(12)]);
var inst_37891 = cljs.core.seq.call(null,inst_37884);
var inst_37892 = inst_37891;
var inst_37893 = null;
var inst_37894 = (0);
var inst_37895 = (0);
var state_37951__$1 = (function (){var statearr_37984 = state_37951;
(statearr_37984[(16)] = inst_37892);

(statearr_37984[(9)] = inst_37894);

(statearr_37984[(10)] = inst_37895);

(statearr_37984[(11)] = inst_37893);

return statearr_37984;
})();
var statearr_37985_38022 = state_37951__$1;
(statearr_37985_38022[(2)] = null);

(statearr_37985_38022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (9))){
var inst_37881 = cljs.core.PersistentVector.EMPTY;
var state_37951__$1 = state_37951;
var statearr_37986_38023 = state_37951__$1;
(statearr_37986_38023[(2)] = inst_37881);

(statearr_37986_38023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (5))){
var state_37951__$1 = state_37951;
var statearr_37987_38024 = state_37951__$1;
(statearr_37987_38024[(2)] = null);

(statearr_37987_38024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (14))){
var inst_37894 = (state_37951[(9)]);
var inst_37895 = (state_37951[(10)]);
var inst_37897 = (inst_37895 < inst_37894);
var inst_37898 = inst_37897;
var state_37951__$1 = state_37951;
if(cljs.core.truth_(inst_37898)){
var statearr_37988_38025 = state_37951__$1;
(statearr_37988_38025[(1)] = (16));

} else {
var statearr_37989_38026 = state_37951__$1;
(statearr_37989_38026[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (26))){
var inst_37911 = (state_37951[(8)]);
var inst_37927 = (state_37951[(2)]);
var inst_37928 = cljs.core.next.call(null,inst_37911);
var inst_37892 = inst_37928;
var inst_37893 = null;
var inst_37894 = (0);
var inst_37895 = (0);
var state_37951__$1 = (function (){var statearr_37990 = state_37951;
(statearr_37990[(16)] = inst_37892);

(statearr_37990[(19)] = inst_37927);

(statearr_37990[(9)] = inst_37894);

(statearr_37990[(10)] = inst_37895);

(statearr_37990[(11)] = inst_37893);

return statearr_37990;
})();
var statearr_37991_38027 = state_37951__$1;
(statearr_37991_38027[(2)] = null);

(statearr_37991_38027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (16))){
var inst_37892 = (state_37951[(16)]);
var inst_37894 = (state_37951[(9)]);
var inst_37895 = (state_37951[(10)]);
var inst_37893 = (state_37951[(11)]);
var inst_37884 = (state_37951[(12)]);
var inst_37900 = cljs.core._nth.call(null,inst_37893,inst_37895);
var inst_37901 = (function (){var send_queue = inst_37884;
var seq__37887 = inst_37892;
var chunk__37888 = inst_37893;
var count__37889 = inst_37894;
var i__37890 = inst_37895;
var m = inst_37900;
return ((function (send_queue,seq__37887,chunk__37888,count__37889,i__37890,m,inst_37892,inst_37894,inst_37895,inst_37893,inst_37884,inst_37900,state_val_37952,c__34821__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sending ",m], null);
});
;})(send_queue,seq__37887,chunk__37888,count__37889,i__37890,m,inst_37892,inst_37894,inst_37895,inst_37893,inst_37884,inst_37900,state_val_37952,c__34821__auto__))
})();
var inst_37902 = (new cljs.core.Delay(inst_37901,null));
var inst_37903 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.kaicode.wocket.client","*cider-repl wocket/example-project:localhost:64629(clj)*",59,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37902,null,-900972818);
var inst_37904 = cljs.core.deref.call(null,com.kaicode.wocket.client.server_websocket_channel);
var inst_37905 = com.kaicode.teleport.serialize.call(null,inst_37900);
var state_37951__$1 = (function (){var statearr_37992 = state_37951;
(statearr_37992[(20)] = inst_37903);

return statearr_37992;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37951__$1,(19),inst_37904,inst_37905);
} else {
if((state_val_37952 === (10))){
var inst_37883 = (state_37951[(2)]);
var inst_37884 = cljs.core.conj.call(null,inst_37883,msg);
var inst_37885 = cljs.core.deref.call(null,com.kaicode.wocket.client.server_websocket_channel);
var state_37951__$1 = (function (){var statearr_37993 = state_37951;
(statearr_37993[(12)] = inst_37884);

return statearr_37993;
})();
if(cljs.core.truth_(inst_37885)){
var statearr_37994_38028 = state_37951__$1;
(statearr_37994_38028[(1)] = (11));

} else {
var statearr_37995_38029 = state_37951__$1;
(statearr_37995_38029[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (18))){
var inst_37936 = (state_37951[(2)]);
var state_37951__$1 = state_37951;
var statearr_37996_38030 = state_37951__$1;
(statearr_37996_38030[(2)] = inst_37936);

(statearr_37996_38030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37952 === (8))){
var inst_37878 = (state_37951[(7)]);
var state_37951__$1 = state_37951;
var statearr_37997_38031 = state_37951__$1;
(statearr_37997_38031[(2)] = inst_37878);

(statearr_37997_38031[(1)] = (10));


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
});})(c__34821__auto__))
;
return ((function (switch__34798__auto__,c__34821__auto__){
return (function() {
var com$kaicode$wocket$client$send_BANG__$_state_machine__34799__auto__ = null;
var com$kaicode$wocket$client$send_BANG__$_state_machine__34799__auto____0 = (function (){
var statearr_37998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37998[(0)] = com$kaicode$wocket$client$send_BANG__$_state_machine__34799__auto__);

(statearr_37998[(1)] = (1));

return statearr_37998;
});
var com$kaicode$wocket$client$send_BANG__$_state_machine__34799__auto____1 = (function (state_37951){
while(true){
var ret_value__34800__auto__ = (function (){try{while(true){
var result__34801__auto__ = switch__34798__auto__.call(null,state_37951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34801__auto__;
}
break;
}
}catch (e37999){if((e37999 instanceof Object)){
var ex__34802__auto__ = e37999;
var statearr_38000_38032 = state_37951;
(statearr_38000_38032[(5)] = ex__34802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38033 = state_37951;
state_37951 = G__38033;
continue;
} else {
return ret_value__34800__auto__;
}
break;
}
});
com$kaicode$wocket$client$send_BANG__$_state_machine__34799__auto__ = function(state_37951){
switch(arguments.length){
case 0:
return com$kaicode$wocket$client$send_BANG__$_state_machine__34799__auto____0.call(this);
case 1:
return com$kaicode$wocket$client$send_BANG__$_state_machine__34799__auto____1.call(this,state_37951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$kaicode$wocket$client$send_BANG__$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$0 = com$kaicode$wocket$client$send_BANG__$_state_machine__34799__auto____0;
com$kaicode$wocket$client$send_BANG__$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$1 = com$kaicode$wocket$client$send_BANG__$_state_machine__34799__auto____1;
return com$kaicode$wocket$client$send_BANG__$_state_machine__34799__auto__;
})()
;})(switch__34798__auto__,c__34821__auto__))
})();
var state__34823__auto__ = (function (){var statearr_38001 = f__34822__auto__.call(null);
(statearr_38001[(6)] = c__34821__auto__);

return statearr_38001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34823__auto__);
});})(c__34821__auto__))
);

return c__34821__auto__;
});
cljs.core._add_method.call(null,com.kaicode.wocket.client.process_msg,new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p__38034){
var vec__38035 = p__38034;
var _ = cljs.core.nth.call(null,vec__38035,(0),null);
var timestamp = cljs.core.nth.call(null,vec__38035,(1),null);
return com.kaicode.wocket.client.send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pong","pong",-172484958),(new Date())], null));
}));

//# sourceMappingURL=client.js.map?rel=1554201130894
