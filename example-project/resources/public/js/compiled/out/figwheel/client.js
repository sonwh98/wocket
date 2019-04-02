// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e41217){if((e41217 instanceof Error)){
var e = e41217;
return "Error: Unable to stringify";
} else {
throw e41217;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__41220 = arguments.length;
switch (G__41220) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__41218_SHARP_){
if(typeof p1__41218_SHARP_ === 'string'){
return p1__41218_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__41218_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41223 = arguments.length;
var i__4731__auto___41224 = (0);
while(true){
if((i__4731__auto___41224 < len__4730__auto___41223)){
args__4736__auto__.push((arguments[i__4731__auto___41224]));

var G__41225 = (i__4731__auto___41224 + (1));
i__4731__auto___41224 = G__41225;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41222){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41222));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41227 = arguments.length;
var i__4731__auto___41228 = (0);
while(true){
if((i__4731__auto___41228 < len__4730__auto___41227)){
args__4736__auto__.push((arguments[i__4731__auto___41228]));

var G__41229 = (i__4731__auto___41228 + (1));
i__4731__auto___41228 = G__41229;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41226){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41226));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41230){
var map__41231 = p__41230;
var map__41231__$1 = (((((!((map__41231 == null))))?(((((map__41231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41231):map__41231);
var message = cljs.core.get.call(null,map__41231__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41231__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34821__auto___41310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34821__auto___41310,ch){
return (function (){
var f__34822__auto__ = (function (){var switch__34798__auto__ = ((function (c__34821__auto___41310,ch){
return (function (state_41282){
var state_val_41283 = (state_41282[(1)]);
if((state_val_41283 === (7))){
var inst_41278 = (state_41282[(2)]);
var state_41282__$1 = state_41282;
var statearr_41284_41311 = state_41282__$1;
(statearr_41284_41311[(2)] = inst_41278);

(statearr_41284_41311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41283 === (1))){
var state_41282__$1 = state_41282;
var statearr_41285_41312 = state_41282__$1;
(statearr_41285_41312[(2)] = null);

(statearr_41285_41312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41283 === (4))){
var inst_41235 = (state_41282[(7)]);
var inst_41235__$1 = (state_41282[(2)]);
var state_41282__$1 = (function (){var statearr_41286 = state_41282;
(statearr_41286[(7)] = inst_41235__$1);

return statearr_41286;
})();
if(cljs.core.truth_(inst_41235__$1)){
var statearr_41287_41313 = state_41282__$1;
(statearr_41287_41313[(1)] = (5));

} else {
var statearr_41288_41314 = state_41282__$1;
(statearr_41288_41314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41283 === (15))){
var inst_41242 = (state_41282[(8)]);
var inst_41257 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41242);
var inst_41258 = cljs.core.first.call(null,inst_41257);
var inst_41259 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41258);
var inst_41260 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41259)].join('');
var inst_41261 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41260);
var state_41282__$1 = state_41282;
var statearr_41289_41315 = state_41282__$1;
(statearr_41289_41315[(2)] = inst_41261);

(statearr_41289_41315[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41283 === (13))){
var inst_41266 = (state_41282[(2)]);
var state_41282__$1 = state_41282;
var statearr_41290_41316 = state_41282__$1;
(statearr_41290_41316[(2)] = inst_41266);

(statearr_41290_41316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41283 === (6))){
var state_41282__$1 = state_41282;
var statearr_41291_41317 = state_41282__$1;
(statearr_41291_41317[(2)] = null);

(statearr_41291_41317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41283 === (17))){
var inst_41264 = (state_41282[(2)]);
var state_41282__$1 = state_41282;
var statearr_41292_41318 = state_41282__$1;
(statearr_41292_41318[(2)] = inst_41264);

(statearr_41292_41318[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41283 === (3))){
var inst_41280 = (state_41282[(2)]);
var state_41282__$1 = state_41282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41282__$1,inst_41280);
} else {
if((state_val_41283 === (12))){
var inst_41241 = (state_41282[(9)]);
var inst_41255 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41241,opts);
var state_41282__$1 = state_41282;
if(inst_41255){
var statearr_41293_41319 = state_41282__$1;
(statearr_41293_41319[(1)] = (15));

} else {
var statearr_41294_41320 = state_41282__$1;
(statearr_41294_41320[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41283 === (2))){
var state_41282__$1 = state_41282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41282__$1,(4),ch);
} else {
if((state_val_41283 === (11))){
var inst_41242 = (state_41282[(8)]);
var inst_41247 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41248 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41242);
var inst_41249 = cljs.core.async.timeout.call(null,(1000));
var inst_41250 = [inst_41248,inst_41249];
var inst_41251 = (new cljs.core.PersistentVector(null,2,(5),inst_41247,inst_41250,null));
var state_41282__$1 = state_41282;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41282__$1,(14),inst_41251);
} else {
if((state_val_41283 === (9))){
var inst_41242 = (state_41282[(8)]);
var inst_41268 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41269 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41242);
var inst_41270 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41269);
var inst_41271 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41270)].join('');
var inst_41272 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41271);
var state_41282__$1 = (function (){var statearr_41295 = state_41282;
(statearr_41295[(10)] = inst_41268);

return statearr_41295;
})();
var statearr_41296_41321 = state_41282__$1;
(statearr_41296_41321[(2)] = inst_41272);

(statearr_41296_41321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41283 === (5))){
var inst_41235 = (state_41282[(7)]);
var inst_41237 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41238 = (new cljs.core.PersistentArrayMap(null,2,inst_41237,null));
var inst_41239 = (new cljs.core.PersistentHashSet(null,inst_41238,null));
var inst_41240 = figwheel.client.focus_msgs.call(null,inst_41239,inst_41235);
var inst_41241 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41240);
var inst_41242 = cljs.core.first.call(null,inst_41240);
var inst_41243 = figwheel.client.autoload_QMARK_.call(null);
var state_41282__$1 = (function (){var statearr_41297 = state_41282;
(statearr_41297[(9)] = inst_41241);

(statearr_41297[(8)] = inst_41242);

return statearr_41297;
})();
if(cljs.core.truth_(inst_41243)){
var statearr_41298_41322 = state_41282__$1;
(statearr_41298_41322[(1)] = (8));

} else {
var statearr_41299_41323 = state_41282__$1;
(statearr_41299_41323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41283 === (14))){
var inst_41253 = (state_41282[(2)]);
var state_41282__$1 = state_41282;
var statearr_41300_41324 = state_41282__$1;
(statearr_41300_41324[(2)] = inst_41253);

(statearr_41300_41324[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41283 === (16))){
var state_41282__$1 = state_41282;
var statearr_41301_41325 = state_41282__$1;
(statearr_41301_41325[(2)] = null);

(statearr_41301_41325[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41283 === (10))){
var inst_41274 = (state_41282[(2)]);
var state_41282__$1 = (function (){var statearr_41302 = state_41282;
(statearr_41302[(11)] = inst_41274);

return statearr_41302;
})();
var statearr_41303_41326 = state_41282__$1;
(statearr_41303_41326[(2)] = null);

(statearr_41303_41326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41283 === (8))){
var inst_41241 = (state_41282[(9)]);
var inst_41245 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41241,opts);
var state_41282__$1 = state_41282;
if(cljs.core.truth_(inst_41245)){
var statearr_41304_41327 = state_41282__$1;
(statearr_41304_41327[(1)] = (11));

} else {
var statearr_41305_41328 = state_41282__$1;
(statearr_41305_41328[(1)] = (12));

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
});})(c__34821__auto___41310,ch))
;
return ((function (switch__34798__auto__,c__34821__auto___41310,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34799__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34799__auto____0 = (function (){
var statearr_41306 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41306[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34799__auto__);

(statearr_41306[(1)] = (1));

return statearr_41306;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34799__auto____1 = (function (state_41282){
while(true){
var ret_value__34800__auto__ = (function (){try{while(true){
var result__34801__auto__ = switch__34798__auto__.call(null,state_41282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34801__auto__;
}
break;
}
}catch (e41307){if((e41307 instanceof Object)){
var ex__34802__auto__ = e41307;
var statearr_41308_41329 = state_41282;
(statearr_41308_41329[(5)] = ex__34802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41330 = state_41282;
state_41282 = G__41330;
continue;
} else {
return ret_value__34800__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34799__auto__ = function(state_41282){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34799__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34799__auto____1.call(this,state_41282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34799__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34799__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34799__auto__;
})()
;})(switch__34798__auto__,c__34821__auto___41310,ch))
})();
var state__34823__auto__ = (function (){var statearr_41309 = f__34822__auto__.call(null);
(statearr_41309[(6)] = c__34821__auto___41310);

return statearr_41309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34823__auto__);
});})(c__34821__auto___41310,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41331_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41331_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_41337 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41337){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41333 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41334 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41335 = true;
var _STAR_print_fn_STAR__temp_val__41336 = ((function (_STAR_print_newline_STAR__orig_val__41333,_STAR_print_fn_STAR__orig_val__41334,_STAR_print_newline_STAR__temp_val__41335,sb,base_path_41337){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__41333,_STAR_print_fn_STAR__orig_val__41334,_STAR_print_newline_STAR__temp_val__41335,sb,base_path_41337))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41335;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41336;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41334;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41333;
}}catch (e41332){if((e41332 instanceof Error)){
var e = e41332;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41337], null));
} else {
var e = e41332;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_41337))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41338){
var map__41339 = p__41338;
var map__41339__$1 = (((((!((map__41339 == null))))?(((((map__41339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41339):map__41339);
var opts = map__41339__$1;
var build_id = cljs.core.get.call(null,map__41339__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41339,map__41339__$1,opts,build_id){
return (function (p__41341){
var vec__41342 = p__41341;
var seq__41343 = cljs.core.seq.call(null,vec__41342);
var first__41344 = cljs.core.first.call(null,seq__41343);
var seq__41343__$1 = cljs.core.next.call(null,seq__41343);
var map__41345 = first__41344;
var map__41345__$1 = (((((!((map__41345 == null))))?(((((map__41345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41345):map__41345);
var msg = map__41345__$1;
var msg_name = cljs.core.get.call(null,map__41345__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41343__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41342,seq__41343,first__41344,seq__41343__$1,map__41345,map__41345__$1,msg,msg_name,_,map__41339,map__41339__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41342,seq__41343,first__41344,seq__41343__$1,map__41345,map__41345__$1,msg,msg_name,_,map__41339,map__41339__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41339,map__41339__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41347){
var vec__41348 = p__41347;
var seq__41349 = cljs.core.seq.call(null,vec__41348);
var first__41350 = cljs.core.first.call(null,seq__41349);
var seq__41349__$1 = cljs.core.next.call(null,seq__41349);
var map__41351 = first__41350;
var map__41351__$1 = (((((!((map__41351 == null))))?(((((map__41351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41351):map__41351);
var msg = map__41351__$1;
var msg_name = cljs.core.get.call(null,map__41351__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41349__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41353){
var map__41354 = p__41353;
var map__41354__$1 = (((((!((map__41354 == null))))?(((((map__41354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41354):map__41354);
var on_compile_warning = cljs.core.get.call(null,map__41354__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41354__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41354,map__41354__$1,on_compile_warning,on_compile_fail){
return (function (p__41356){
var vec__41357 = p__41356;
var seq__41358 = cljs.core.seq.call(null,vec__41357);
var first__41359 = cljs.core.first.call(null,seq__41358);
var seq__41358__$1 = cljs.core.next.call(null,seq__41358);
var map__41360 = first__41359;
var map__41360__$1 = (((((!((map__41360 == null))))?(((((map__41360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41360):map__41360);
var msg = map__41360__$1;
var msg_name = cljs.core.get.call(null,map__41360__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41358__$1;
var pred__41362 = cljs.core._EQ_;
var expr__41363 = msg_name;
if(cljs.core.truth_(pred__41362.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41363))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41362.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41363))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41354,map__41354__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34821__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34822__auto__ = (function (){var switch__34798__auto__ = ((function (c__34821__auto__,msg_hist,msg_names,msg){
return (function (state_41452){
var state_val_41453 = (state_41452[(1)]);
if((state_val_41453 === (7))){
var inst_41372 = (state_41452[(2)]);
var state_41452__$1 = state_41452;
if(cljs.core.truth_(inst_41372)){
var statearr_41454_41501 = state_41452__$1;
(statearr_41454_41501[(1)] = (8));

} else {
var statearr_41455_41502 = state_41452__$1;
(statearr_41455_41502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (20))){
var inst_41446 = (state_41452[(2)]);
var state_41452__$1 = state_41452;
var statearr_41456_41503 = state_41452__$1;
(statearr_41456_41503[(2)] = inst_41446);

(statearr_41456_41503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (27))){
var inst_41442 = (state_41452[(2)]);
var state_41452__$1 = state_41452;
var statearr_41457_41504 = state_41452__$1;
(statearr_41457_41504[(2)] = inst_41442);

(statearr_41457_41504[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (1))){
var inst_41365 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41452__$1 = state_41452;
if(cljs.core.truth_(inst_41365)){
var statearr_41458_41505 = state_41452__$1;
(statearr_41458_41505[(1)] = (2));

} else {
var statearr_41459_41506 = state_41452__$1;
(statearr_41459_41506[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (24))){
var inst_41444 = (state_41452[(2)]);
var state_41452__$1 = state_41452;
var statearr_41460_41507 = state_41452__$1;
(statearr_41460_41507[(2)] = inst_41444);

(statearr_41460_41507[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (4))){
var inst_41450 = (state_41452[(2)]);
var state_41452__$1 = state_41452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41452__$1,inst_41450);
} else {
if((state_val_41453 === (15))){
var inst_41448 = (state_41452[(2)]);
var state_41452__$1 = state_41452;
var statearr_41461_41508 = state_41452__$1;
(statearr_41461_41508[(2)] = inst_41448);

(statearr_41461_41508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (21))){
var inst_41401 = (state_41452[(2)]);
var inst_41402 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41403 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41402);
var state_41452__$1 = (function (){var statearr_41462 = state_41452;
(statearr_41462[(7)] = inst_41401);

return statearr_41462;
})();
var statearr_41463_41509 = state_41452__$1;
(statearr_41463_41509[(2)] = inst_41403);

(statearr_41463_41509[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (31))){
var inst_41431 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41452__$1 = state_41452;
if(inst_41431){
var statearr_41464_41510 = state_41452__$1;
(statearr_41464_41510[(1)] = (34));

} else {
var statearr_41465_41511 = state_41452__$1;
(statearr_41465_41511[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (32))){
var inst_41440 = (state_41452[(2)]);
var state_41452__$1 = state_41452;
var statearr_41466_41512 = state_41452__$1;
(statearr_41466_41512[(2)] = inst_41440);

(statearr_41466_41512[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (33))){
var inst_41427 = (state_41452[(2)]);
var inst_41428 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41429 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41428);
var state_41452__$1 = (function (){var statearr_41467 = state_41452;
(statearr_41467[(8)] = inst_41427);

return statearr_41467;
})();
var statearr_41468_41513 = state_41452__$1;
(statearr_41468_41513[(2)] = inst_41429);

(statearr_41468_41513[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (13))){
var inst_41386 = figwheel.client.heads_up.clear.call(null);
var state_41452__$1 = state_41452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41452__$1,(16),inst_41386);
} else {
if((state_val_41453 === (22))){
var inst_41407 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41408 = figwheel.client.heads_up.append_warning_message.call(null,inst_41407);
var state_41452__$1 = state_41452;
var statearr_41469_41514 = state_41452__$1;
(statearr_41469_41514[(2)] = inst_41408);

(statearr_41469_41514[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (36))){
var inst_41438 = (state_41452[(2)]);
var state_41452__$1 = state_41452;
var statearr_41470_41515 = state_41452__$1;
(statearr_41470_41515[(2)] = inst_41438);

(statearr_41470_41515[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (29))){
var inst_41418 = (state_41452[(2)]);
var inst_41419 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41420 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41419);
var state_41452__$1 = (function (){var statearr_41471 = state_41452;
(statearr_41471[(9)] = inst_41418);

return statearr_41471;
})();
var statearr_41472_41516 = state_41452__$1;
(statearr_41472_41516[(2)] = inst_41420);

(statearr_41472_41516[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (6))){
var inst_41367 = (state_41452[(10)]);
var state_41452__$1 = state_41452;
var statearr_41473_41517 = state_41452__$1;
(statearr_41473_41517[(2)] = inst_41367);

(statearr_41473_41517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (28))){
var inst_41414 = (state_41452[(2)]);
var inst_41415 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41416 = figwheel.client.heads_up.display_warning.call(null,inst_41415);
var state_41452__$1 = (function (){var statearr_41474 = state_41452;
(statearr_41474[(11)] = inst_41414);

return statearr_41474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41452__$1,(29),inst_41416);
} else {
if((state_val_41453 === (25))){
var inst_41412 = figwheel.client.heads_up.clear.call(null);
var state_41452__$1 = state_41452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41452__$1,(28),inst_41412);
} else {
if((state_val_41453 === (34))){
var inst_41433 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41452__$1 = state_41452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41452__$1,(37),inst_41433);
} else {
if((state_val_41453 === (17))){
var inst_41392 = (state_41452[(2)]);
var inst_41393 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41394 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41393);
var state_41452__$1 = (function (){var statearr_41475 = state_41452;
(statearr_41475[(12)] = inst_41392);

return statearr_41475;
})();
var statearr_41476_41518 = state_41452__$1;
(statearr_41476_41518[(2)] = inst_41394);

(statearr_41476_41518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (3))){
var inst_41384 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41452__$1 = state_41452;
if(inst_41384){
var statearr_41477_41519 = state_41452__$1;
(statearr_41477_41519[(1)] = (13));

} else {
var statearr_41478_41520 = state_41452__$1;
(statearr_41478_41520[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (12))){
var inst_41380 = (state_41452[(2)]);
var state_41452__$1 = state_41452;
var statearr_41479_41521 = state_41452__$1;
(statearr_41479_41521[(2)] = inst_41380);

(statearr_41479_41521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (2))){
var inst_41367 = (state_41452[(10)]);
var inst_41367__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41452__$1 = (function (){var statearr_41480 = state_41452;
(statearr_41480[(10)] = inst_41367__$1);

return statearr_41480;
})();
if(cljs.core.truth_(inst_41367__$1)){
var statearr_41481_41522 = state_41452__$1;
(statearr_41481_41522[(1)] = (5));

} else {
var statearr_41482_41523 = state_41452__$1;
(statearr_41482_41523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (23))){
var inst_41410 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41452__$1 = state_41452;
if(inst_41410){
var statearr_41483_41524 = state_41452__$1;
(statearr_41483_41524[(1)] = (25));

} else {
var statearr_41484_41525 = state_41452__$1;
(statearr_41484_41525[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (35))){
var state_41452__$1 = state_41452;
var statearr_41485_41526 = state_41452__$1;
(statearr_41485_41526[(2)] = null);

(statearr_41485_41526[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (19))){
var inst_41405 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41452__$1 = state_41452;
if(inst_41405){
var statearr_41486_41527 = state_41452__$1;
(statearr_41486_41527[(1)] = (22));

} else {
var statearr_41487_41528 = state_41452__$1;
(statearr_41487_41528[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (11))){
var inst_41376 = (state_41452[(2)]);
var state_41452__$1 = state_41452;
var statearr_41488_41529 = state_41452__$1;
(statearr_41488_41529[(2)] = inst_41376);

(statearr_41488_41529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (9))){
var inst_41378 = figwheel.client.heads_up.clear.call(null);
var state_41452__$1 = state_41452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41452__$1,(12),inst_41378);
} else {
if((state_val_41453 === (5))){
var inst_41369 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41452__$1 = state_41452;
var statearr_41489_41530 = state_41452__$1;
(statearr_41489_41530[(2)] = inst_41369);

(statearr_41489_41530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (14))){
var inst_41396 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41452__$1 = state_41452;
if(inst_41396){
var statearr_41490_41531 = state_41452__$1;
(statearr_41490_41531[(1)] = (18));

} else {
var statearr_41491_41532 = state_41452__$1;
(statearr_41491_41532[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (26))){
var inst_41422 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41452__$1 = state_41452;
if(inst_41422){
var statearr_41492_41533 = state_41452__$1;
(statearr_41492_41533[(1)] = (30));

} else {
var statearr_41493_41534 = state_41452__$1;
(statearr_41493_41534[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (16))){
var inst_41388 = (state_41452[(2)]);
var inst_41389 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41390 = figwheel.client.heads_up.display_exception.call(null,inst_41389);
var state_41452__$1 = (function (){var statearr_41494 = state_41452;
(statearr_41494[(13)] = inst_41388);

return statearr_41494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41452__$1,(17),inst_41390);
} else {
if((state_val_41453 === (30))){
var inst_41424 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41425 = figwheel.client.heads_up.display_warning.call(null,inst_41424);
var state_41452__$1 = state_41452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41452__$1,(33),inst_41425);
} else {
if((state_val_41453 === (10))){
var inst_41382 = (state_41452[(2)]);
var state_41452__$1 = state_41452;
var statearr_41495_41535 = state_41452__$1;
(statearr_41495_41535[(2)] = inst_41382);

(statearr_41495_41535[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (18))){
var inst_41398 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41399 = figwheel.client.heads_up.display_exception.call(null,inst_41398);
var state_41452__$1 = state_41452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41452__$1,(21),inst_41399);
} else {
if((state_val_41453 === (37))){
var inst_41435 = (state_41452[(2)]);
var state_41452__$1 = state_41452;
var statearr_41496_41536 = state_41452__$1;
(statearr_41496_41536[(2)] = inst_41435);

(statearr_41496_41536[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41453 === (8))){
var inst_41374 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41452__$1 = state_41452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41452__$1,(11),inst_41374);
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
});})(c__34821__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34798__auto__,c__34821__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34799__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34799__auto____0 = (function (){
var statearr_41497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41497[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34799__auto__);

(statearr_41497[(1)] = (1));

return statearr_41497;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34799__auto____1 = (function (state_41452){
while(true){
var ret_value__34800__auto__ = (function (){try{while(true){
var result__34801__auto__ = switch__34798__auto__.call(null,state_41452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34801__auto__;
}
break;
}
}catch (e41498){if((e41498 instanceof Object)){
var ex__34802__auto__ = e41498;
var statearr_41499_41537 = state_41452;
(statearr_41499_41537[(5)] = ex__34802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41538 = state_41452;
state_41452 = G__41538;
continue;
} else {
return ret_value__34800__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34799__auto__ = function(state_41452){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34799__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34799__auto____1.call(this,state_41452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34799__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34799__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34799__auto__;
})()
;})(switch__34798__auto__,c__34821__auto__,msg_hist,msg_names,msg))
})();
var state__34823__auto__ = (function (){var statearr_41500 = f__34822__auto__.call(null);
(statearr_41500[(6)] = c__34821__auto__);

return statearr_41500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34823__auto__);
});})(c__34821__auto__,msg_hist,msg_names,msg))
);

return c__34821__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34821__auto___41567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34821__auto___41567,ch){
return (function (){
var f__34822__auto__ = (function (){var switch__34798__auto__ = ((function (c__34821__auto___41567,ch){
return (function (state_41553){
var state_val_41554 = (state_41553[(1)]);
if((state_val_41554 === (1))){
var state_41553__$1 = state_41553;
var statearr_41555_41568 = state_41553__$1;
(statearr_41555_41568[(2)] = null);

(statearr_41555_41568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41554 === (2))){
var state_41553__$1 = state_41553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41553__$1,(4),ch);
} else {
if((state_val_41554 === (3))){
var inst_41551 = (state_41553[(2)]);
var state_41553__$1 = state_41553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41553__$1,inst_41551);
} else {
if((state_val_41554 === (4))){
var inst_41541 = (state_41553[(7)]);
var inst_41541__$1 = (state_41553[(2)]);
var state_41553__$1 = (function (){var statearr_41556 = state_41553;
(statearr_41556[(7)] = inst_41541__$1);

return statearr_41556;
})();
if(cljs.core.truth_(inst_41541__$1)){
var statearr_41557_41569 = state_41553__$1;
(statearr_41557_41569[(1)] = (5));

} else {
var statearr_41558_41570 = state_41553__$1;
(statearr_41558_41570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41554 === (5))){
var inst_41541 = (state_41553[(7)]);
var inst_41543 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41541);
var state_41553__$1 = state_41553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41553__$1,(8),inst_41543);
} else {
if((state_val_41554 === (6))){
var state_41553__$1 = state_41553;
var statearr_41559_41571 = state_41553__$1;
(statearr_41559_41571[(2)] = null);

(statearr_41559_41571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41554 === (7))){
var inst_41549 = (state_41553[(2)]);
var state_41553__$1 = state_41553;
var statearr_41560_41572 = state_41553__$1;
(statearr_41560_41572[(2)] = inst_41549);

(statearr_41560_41572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41554 === (8))){
var inst_41545 = (state_41553[(2)]);
var state_41553__$1 = (function (){var statearr_41561 = state_41553;
(statearr_41561[(8)] = inst_41545);

return statearr_41561;
})();
var statearr_41562_41573 = state_41553__$1;
(statearr_41562_41573[(2)] = null);

(statearr_41562_41573[(1)] = (2));


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
});})(c__34821__auto___41567,ch))
;
return ((function (switch__34798__auto__,c__34821__auto___41567,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34799__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34799__auto____0 = (function (){
var statearr_41563 = [null,null,null,null,null,null,null,null,null];
(statearr_41563[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34799__auto__);

(statearr_41563[(1)] = (1));

return statearr_41563;
});
var figwheel$client$heads_up_plugin_$_state_machine__34799__auto____1 = (function (state_41553){
while(true){
var ret_value__34800__auto__ = (function (){try{while(true){
var result__34801__auto__ = switch__34798__auto__.call(null,state_41553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34801__auto__;
}
break;
}
}catch (e41564){if((e41564 instanceof Object)){
var ex__34802__auto__ = e41564;
var statearr_41565_41574 = state_41553;
(statearr_41565_41574[(5)] = ex__34802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41575 = state_41553;
state_41553 = G__41575;
continue;
} else {
return ret_value__34800__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34799__auto__ = function(state_41553){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34799__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34799__auto____1.call(this,state_41553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34799__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34799__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34799__auto__;
})()
;})(switch__34798__auto__,c__34821__auto___41567,ch))
})();
var state__34823__auto__ = (function (){var statearr_41566 = f__34822__auto__.call(null);
(statearr_41566[(6)] = c__34821__auto___41567);

return statearr_41566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34823__auto__);
});})(c__34821__auto___41567,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34821__auto__){
return (function (){
var f__34822__auto__ = (function (){var switch__34798__auto__ = ((function (c__34821__auto__){
return (function (state_41581){
var state_val_41582 = (state_41581[(1)]);
if((state_val_41582 === (1))){
var inst_41576 = cljs.core.async.timeout.call(null,(3000));
var state_41581__$1 = state_41581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41581__$1,(2),inst_41576);
} else {
if((state_val_41582 === (2))){
var inst_41578 = (state_41581[(2)]);
var inst_41579 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41581__$1 = (function (){var statearr_41583 = state_41581;
(statearr_41583[(7)] = inst_41578);

return statearr_41583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41581__$1,inst_41579);
} else {
return null;
}
}
});})(c__34821__auto__))
;
return ((function (switch__34798__auto__,c__34821__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34799__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34799__auto____0 = (function (){
var statearr_41584 = [null,null,null,null,null,null,null,null];
(statearr_41584[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34799__auto__);

(statearr_41584[(1)] = (1));

return statearr_41584;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34799__auto____1 = (function (state_41581){
while(true){
var ret_value__34800__auto__ = (function (){try{while(true){
var result__34801__auto__ = switch__34798__auto__.call(null,state_41581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34801__auto__;
}
break;
}
}catch (e41585){if((e41585 instanceof Object)){
var ex__34802__auto__ = e41585;
var statearr_41586_41588 = state_41581;
(statearr_41586_41588[(5)] = ex__34802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41589 = state_41581;
state_41581 = G__41589;
continue;
} else {
return ret_value__34800__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34799__auto__ = function(state_41581){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34799__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34799__auto____1.call(this,state_41581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34799__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34799__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34799__auto__;
})()
;})(switch__34798__auto__,c__34821__auto__))
})();
var state__34823__auto__ = (function (){var statearr_41587 = f__34822__auto__.call(null);
(statearr_41587[(6)] = c__34821__auto__);

return statearr_41587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34823__auto__);
});})(c__34821__auto__))
);

return c__34821__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34821__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__34822__auto__ = (function (){var switch__34798__auto__ = ((function (c__34821__auto__,figwheel_version,temp__5720__auto__){
return (function (state_41596){
var state_val_41597 = (state_41596[(1)]);
if((state_val_41597 === (1))){
var inst_41590 = cljs.core.async.timeout.call(null,(2000));
var state_41596__$1 = state_41596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41596__$1,(2),inst_41590);
} else {
if((state_val_41597 === (2))){
var inst_41592 = (state_41596[(2)]);
var inst_41593 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_41594 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_41593);
var state_41596__$1 = (function (){var statearr_41598 = state_41596;
(statearr_41598[(7)] = inst_41592);

return statearr_41598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41596__$1,inst_41594);
} else {
return null;
}
}
});})(c__34821__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__34798__auto__,c__34821__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34799__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34799__auto____0 = (function (){
var statearr_41599 = [null,null,null,null,null,null,null,null];
(statearr_41599[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34799__auto__);

(statearr_41599[(1)] = (1));

return statearr_41599;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34799__auto____1 = (function (state_41596){
while(true){
var ret_value__34800__auto__ = (function (){try{while(true){
var result__34801__auto__ = switch__34798__auto__.call(null,state_41596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34801__auto__;
}
break;
}
}catch (e41600){if((e41600 instanceof Object)){
var ex__34802__auto__ = e41600;
var statearr_41601_41603 = state_41596;
(statearr_41601_41603[(5)] = ex__34802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41604 = state_41596;
state_41596 = G__41604;
continue;
} else {
return ret_value__34800__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34799__auto__ = function(state_41596){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34799__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34799__auto____1.call(this,state_41596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34799__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34799__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34799__auto__;
})()
;})(switch__34798__auto__,c__34821__auto__,figwheel_version,temp__5720__auto__))
})();
var state__34823__auto__ = (function (){var statearr_41602 = f__34822__auto__.call(null);
(statearr_41602[(6)] = c__34821__auto__);

return statearr_41602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34823__auto__);
});})(c__34821__auto__,figwheel_version,temp__5720__auto__))
);

return c__34821__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__41605){
var map__41606 = p__41605;
var map__41606__$1 = (((((!((map__41606 == null))))?(((((map__41606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41606):map__41606);
var file = cljs.core.get.call(null,map__41606__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41606__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41606__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__41608 = "";
var G__41608__$1 = (cljs.core.truth_(file)?[G__41608,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__41608);
var G__41608__$2 = (cljs.core.truth_(line)?[G__41608__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__41608__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__41608__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__41608__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41609){
var map__41610 = p__41609;
var map__41610__$1 = (((((!((map__41610 == null))))?(((((map__41610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41610):map__41610);
var ed = map__41610__$1;
var exception_data = cljs.core.get.call(null,map__41610__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41610__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_41613 = (function (){var G__41612 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41612)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__41612;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_41613);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41614){
var map__41615 = p__41614;
var map__41615__$1 = (((((!((map__41615 == null))))?(((((map__41615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41615):map__41615);
var w = map__41615__$1;
var message = cljs.core.get.call(null,map__41615__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__41617 = cljs.core.seq.call(null,plugins);
var chunk__41618 = null;
var count__41619 = (0);
var i__41620 = (0);
while(true){
if((i__41620 < count__41619)){
var vec__41627 = cljs.core._nth.call(null,chunk__41618,i__41620);
var k = cljs.core.nth.call(null,vec__41627,(0),null);
var plugin = cljs.core.nth.call(null,vec__41627,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41633 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41617,chunk__41618,count__41619,i__41620,pl_41633,vec__41627,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41633.call(null,msg_hist);
});})(seq__41617,chunk__41618,count__41619,i__41620,pl_41633,vec__41627,k,plugin))
);
} else {
}


var G__41634 = seq__41617;
var G__41635 = chunk__41618;
var G__41636 = count__41619;
var G__41637 = (i__41620 + (1));
seq__41617 = G__41634;
chunk__41618 = G__41635;
count__41619 = G__41636;
i__41620 = G__41637;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__41617);
if(temp__5720__auto__){
var seq__41617__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41617__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41617__$1);
var G__41638 = cljs.core.chunk_rest.call(null,seq__41617__$1);
var G__41639 = c__4550__auto__;
var G__41640 = cljs.core.count.call(null,c__4550__auto__);
var G__41641 = (0);
seq__41617 = G__41638;
chunk__41618 = G__41639;
count__41619 = G__41640;
i__41620 = G__41641;
continue;
} else {
var vec__41630 = cljs.core.first.call(null,seq__41617__$1);
var k = cljs.core.nth.call(null,vec__41630,(0),null);
var plugin = cljs.core.nth.call(null,vec__41630,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41642 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41617,chunk__41618,count__41619,i__41620,pl_41642,vec__41630,k,plugin,seq__41617__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41642.call(null,msg_hist);
});})(seq__41617,chunk__41618,count__41619,i__41620,pl_41642,vec__41630,k,plugin,seq__41617__$1,temp__5720__auto__))
);
} else {
}


var G__41643 = cljs.core.next.call(null,seq__41617__$1);
var G__41644 = null;
var G__41645 = (0);
var G__41646 = (0);
seq__41617 = G__41643;
chunk__41618 = G__41644;
count__41619 = G__41645;
i__41620 = G__41646;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__41648 = arguments.length;
switch (G__41648) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__41649_41654 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__41650_41655 = null;
var count__41651_41656 = (0);
var i__41652_41657 = (0);
while(true){
if((i__41652_41657 < count__41651_41656)){
var msg_41658 = cljs.core._nth.call(null,chunk__41650_41655,i__41652_41657);
figwheel.client.socket.handle_incoming_message.call(null,msg_41658);


var G__41659 = seq__41649_41654;
var G__41660 = chunk__41650_41655;
var G__41661 = count__41651_41656;
var G__41662 = (i__41652_41657 + (1));
seq__41649_41654 = G__41659;
chunk__41650_41655 = G__41660;
count__41651_41656 = G__41661;
i__41652_41657 = G__41662;
continue;
} else {
var temp__5720__auto___41663 = cljs.core.seq.call(null,seq__41649_41654);
if(temp__5720__auto___41663){
var seq__41649_41664__$1 = temp__5720__auto___41663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41649_41664__$1)){
var c__4550__auto___41665 = cljs.core.chunk_first.call(null,seq__41649_41664__$1);
var G__41666 = cljs.core.chunk_rest.call(null,seq__41649_41664__$1);
var G__41667 = c__4550__auto___41665;
var G__41668 = cljs.core.count.call(null,c__4550__auto___41665);
var G__41669 = (0);
seq__41649_41654 = G__41666;
chunk__41650_41655 = G__41667;
count__41651_41656 = G__41668;
i__41652_41657 = G__41669;
continue;
} else {
var msg_41670 = cljs.core.first.call(null,seq__41649_41664__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_41670);


var G__41671 = cljs.core.next.call(null,seq__41649_41664__$1);
var G__41672 = null;
var G__41673 = (0);
var G__41674 = (0);
seq__41649_41654 = G__41671;
chunk__41650_41655 = G__41672;
count__41651_41656 = G__41673;
i__41652_41657 = G__41674;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41679 = arguments.length;
var i__4731__auto___41680 = (0);
while(true){
if((i__4731__auto___41680 < len__4730__auto___41679)){
args__4736__auto__.push((arguments[i__4731__auto___41680]));

var G__41681 = (i__4731__auto___41680 + (1));
i__4731__auto___41680 = G__41681;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41676){
var map__41677 = p__41676;
var map__41677__$1 = (((((!((map__41677 == null))))?(((((map__41677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41677):map__41677);
var opts = map__41677__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41675){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41675));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e41682){if((e41682 instanceof Error)){
var e = e41682;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e41682;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__41683){
var map__41684 = p__41683;
var map__41684__$1 = (((((!((map__41684 == null))))?(((((map__41684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41684):map__41684);
var msg_name = cljs.core.get.call(null,map__41684__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1554201136953
