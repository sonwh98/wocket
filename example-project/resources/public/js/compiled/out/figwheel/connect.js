// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__41720__delegate = function (x__41699__auto__){
if(cljs.core.truth_(chat.jsload)){
return cljs.core.apply.call(null,chat.jsload,x__41699__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","chat.jsload","' is missing"].join(''));
}
};
var G__41720 = function (var_args){
var x__41699__auto__ = null;
if (arguments.length > 0) {
var G__41721__i = 0, G__41721__a = new Array(arguments.length -  0);
while (G__41721__i < G__41721__a.length) {G__41721__a[G__41721__i] = arguments[G__41721__i + 0]; ++G__41721__i;}
  x__41699__auto__ = new cljs.core.IndexedSeq(G__41721__a,0,null);
} 
return G__41720__delegate.call(this,x__41699__auto__);};
G__41720.cljs$lang$maxFixedArity = 0;
G__41720.cljs$lang$applyTo = (function (arglist__41722){
var x__41699__auto__ = cljs.core.seq(arglist__41722);
return G__41720__delegate(x__41699__auto__);
});
G__41720.cljs$core$IFn$_invoke$arity$variadic = G__41720__delegate;
return G__41720;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1554201137087
