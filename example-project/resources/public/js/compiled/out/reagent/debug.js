// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__28724__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28725__i = 0, G__28725__a = new Array(arguments.length -  0);
while (G__28725__i < G__28725__a.length) {G__28725__a[G__28725__i] = arguments[G__28725__i + 0]; ++G__28725__i;}
  args = new cljs.core.IndexedSeq(G__28725__a,0,null);
} 
return G__28724__delegate.call(this,args);};
G__28724.cljs$lang$maxFixedArity = 0;
G__28724.cljs$lang$applyTo = (function (arglist__28726){
var args = cljs.core.seq(arglist__28726);
return G__28724__delegate(args);
});
G__28724.cljs$core$IFn$_invoke$arity$variadic = G__28724__delegate;
return G__28724;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28727__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28728__i = 0, G__28728__a = new Array(arguments.length -  0);
while (G__28728__i < G__28728__a.length) {G__28728__a[G__28728__i] = arguments[G__28728__i + 0]; ++G__28728__i;}
  args = new cljs.core.IndexedSeq(G__28728__a,0,null);
} 
return G__28727__delegate.call(this,args);};
G__28727.cljs$lang$maxFixedArity = 0;
G__28727.cljs$lang$applyTo = (function (arglist__28729){
var args = cljs.core.seq(arglist__28729);
return G__28727__delegate(args);
});
G__28727.cljs$core$IFn$_invoke$arity$variadic = G__28727__delegate;
return G__28727;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1554200924616
