// Compiled by ClojureScript 1.10.520 {}
goog.provide('chat.init');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('com.kaicode.wocket.client');
chat.init.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-msg","client-msg",-1756350031),"my chat window",new cljs.core.Keyword(null,"server-msg","server-msg",1588987286),"other's chat window"], null));
chat.init.chat_area = (function chat$init$chat_area(state){
var client_msg = reagent.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-msg","client-msg",-1756350031)], null));
var server_msg = reagent.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-msg","server-msg",1588987286)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),(200)], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,client_msg),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (client_msg,server_msg){
return (function (p1__41945_SHARP_){
return cljs.core.reset_BANG_.call(null,client_msg,p1__41945_SHARP_.target.value);
});})(client_msg,server_msg))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (client_msg,server_msg){
return (function (){
return com.kaicode.wocket.client.send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chat","chat",-518268339),cljs.core.deref.call(null,client_msg)], null));
});})(client_msg,server_msg))
], null),"Send Msg"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (client_msg,server_msg){
return (function (){
return cljs.core.reset_BANG_.call(null,client_msg,"");
});})(client_msg,server_msg))
], null),"Clear Msg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),(200)], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,server_msg),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null)], null);
});
chat.init.init = (function chat$init$init(){
return cljs.core.prn.call(null,"init");
});
cljs.core._add_method.call(null,com.kaicode.wocket.client.process_msg,new cljs.core.Keyword(null,"chat-broadcast","chat-broadcast",-2076914817),(function (p__41946){
var vec__41947 = p__41946;
var _ = cljs.core.nth.call(null,vec__41947,(0),null);
var msg = cljs.core.nth.call(null,vec__41947,(1),null);
cljs.core.prn.call(null,"from clj ",msg);

return cljs.core.swap_BANG_.call(null,chat.init.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"server-msg","server-msg",1588987286),msg);
}));
com.kaicode.wocket.client.connect_to_websocket_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port","port",1534937262),(3000)], null));
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chat.init.chat_area,chat.init.app_state], null),document.getElementById("app"));

//# sourceMappingURL=init.js.map?rel=1554202745862
