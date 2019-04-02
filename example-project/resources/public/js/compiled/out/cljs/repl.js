// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39695){
var map__39696 = p__39695;
var map__39696__$1 = (((((!((map__39696 == null))))?(((((map__39696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39696):map__39696);
var m = map__39696__$1;
var n = cljs.core.get.call(null,map__39696__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39696__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39698_39730 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39699_39731 = null;
var count__39700_39732 = (0);
var i__39701_39733 = (0);
while(true){
if((i__39701_39733 < count__39700_39732)){
var f_39734 = cljs.core._nth.call(null,chunk__39699_39731,i__39701_39733);
cljs.core.println.call(null,"  ",f_39734);


var G__39735 = seq__39698_39730;
var G__39736 = chunk__39699_39731;
var G__39737 = count__39700_39732;
var G__39738 = (i__39701_39733 + (1));
seq__39698_39730 = G__39735;
chunk__39699_39731 = G__39736;
count__39700_39732 = G__39737;
i__39701_39733 = G__39738;
continue;
} else {
var temp__5720__auto___39739 = cljs.core.seq.call(null,seq__39698_39730);
if(temp__5720__auto___39739){
var seq__39698_39740__$1 = temp__5720__auto___39739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39698_39740__$1)){
var c__4550__auto___39741 = cljs.core.chunk_first.call(null,seq__39698_39740__$1);
var G__39742 = cljs.core.chunk_rest.call(null,seq__39698_39740__$1);
var G__39743 = c__4550__auto___39741;
var G__39744 = cljs.core.count.call(null,c__4550__auto___39741);
var G__39745 = (0);
seq__39698_39730 = G__39742;
chunk__39699_39731 = G__39743;
count__39700_39732 = G__39744;
i__39701_39733 = G__39745;
continue;
} else {
var f_39746 = cljs.core.first.call(null,seq__39698_39740__$1);
cljs.core.println.call(null,"  ",f_39746);


var G__39747 = cljs.core.next.call(null,seq__39698_39740__$1);
var G__39748 = null;
var G__39749 = (0);
var G__39750 = (0);
seq__39698_39730 = G__39747;
chunk__39699_39731 = G__39748;
count__39700_39732 = G__39749;
i__39701_39733 = G__39750;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39751 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39751);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39751)))?cljs.core.second.call(null,arglists_39751):arglists_39751));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39702_39752 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39703_39753 = null;
var count__39704_39754 = (0);
var i__39705_39755 = (0);
while(true){
if((i__39705_39755 < count__39704_39754)){
var vec__39716_39756 = cljs.core._nth.call(null,chunk__39703_39753,i__39705_39755);
var name_39757 = cljs.core.nth.call(null,vec__39716_39756,(0),null);
var map__39719_39758 = cljs.core.nth.call(null,vec__39716_39756,(1),null);
var map__39719_39759__$1 = (((((!((map__39719_39758 == null))))?(((((map__39719_39758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39719_39758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39719_39758):map__39719_39758);
var doc_39760 = cljs.core.get.call(null,map__39719_39759__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39761 = cljs.core.get.call(null,map__39719_39759__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39757);

cljs.core.println.call(null," ",arglists_39761);

if(cljs.core.truth_(doc_39760)){
cljs.core.println.call(null," ",doc_39760);
} else {
}


var G__39762 = seq__39702_39752;
var G__39763 = chunk__39703_39753;
var G__39764 = count__39704_39754;
var G__39765 = (i__39705_39755 + (1));
seq__39702_39752 = G__39762;
chunk__39703_39753 = G__39763;
count__39704_39754 = G__39764;
i__39705_39755 = G__39765;
continue;
} else {
var temp__5720__auto___39766 = cljs.core.seq.call(null,seq__39702_39752);
if(temp__5720__auto___39766){
var seq__39702_39767__$1 = temp__5720__auto___39766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39702_39767__$1)){
var c__4550__auto___39768 = cljs.core.chunk_first.call(null,seq__39702_39767__$1);
var G__39769 = cljs.core.chunk_rest.call(null,seq__39702_39767__$1);
var G__39770 = c__4550__auto___39768;
var G__39771 = cljs.core.count.call(null,c__4550__auto___39768);
var G__39772 = (0);
seq__39702_39752 = G__39769;
chunk__39703_39753 = G__39770;
count__39704_39754 = G__39771;
i__39705_39755 = G__39772;
continue;
} else {
var vec__39721_39773 = cljs.core.first.call(null,seq__39702_39767__$1);
var name_39774 = cljs.core.nth.call(null,vec__39721_39773,(0),null);
var map__39724_39775 = cljs.core.nth.call(null,vec__39721_39773,(1),null);
var map__39724_39776__$1 = (((((!((map__39724_39775 == null))))?(((((map__39724_39775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39724_39775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39724_39775):map__39724_39775);
var doc_39777 = cljs.core.get.call(null,map__39724_39776__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39778 = cljs.core.get.call(null,map__39724_39776__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39774);

cljs.core.println.call(null," ",arglists_39778);

if(cljs.core.truth_(doc_39777)){
cljs.core.println.call(null," ",doc_39777);
} else {
}


var G__39779 = cljs.core.next.call(null,seq__39702_39767__$1);
var G__39780 = null;
var G__39781 = (0);
var G__39782 = (0);
seq__39702_39752 = G__39779;
chunk__39703_39753 = G__39780;
count__39704_39754 = G__39781;
i__39705_39755 = G__39782;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__39726 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39727 = null;
var count__39728 = (0);
var i__39729 = (0);
while(true){
if((i__39729 < count__39728)){
var role = cljs.core._nth.call(null,chunk__39727,i__39729);
var temp__5720__auto___39783__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___39783__$1)){
var spec_39784 = temp__5720__auto___39783__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39784));
} else {
}


var G__39785 = seq__39726;
var G__39786 = chunk__39727;
var G__39787 = count__39728;
var G__39788 = (i__39729 + (1));
seq__39726 = G__39785;
chunk__39727 = G__39786;
count__39728 = G__39787;
i__39729 = G__39788;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__39726);
if(temp__5720__auto____$1){
var seq__39726__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39726__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39726__$1);
var G__39789 = cljs.core.chunk_rest.call(null,seq__39726__$1);
var G__39790 = c__4550__auto__;
var G__39791 = cljs.core.count.call(null,c__4550__auto__);
var G__39792 = (0);
seq__39726 = G__39789;
chunk__39727 = G__39790;
count__39728 = G__39791;
i__39729 = G__39792;
continue;
} else {
var role = cljs.core.first.call(null,seq__39726__$1);
var temp__5720__auto___39793__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___39793__$2)){
var spec_39794 = temp__5720__auto___39793__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39794));
} else {
}


var G__39795 = cljs.core.next.call(null,seq__39726__$1);
var G__39796 = null;
var G__39797 = (0);
var G__39798 = (0);
seq__39726 = G__39795;
chunk__39727 = G__39796;
count__39728 = G__39797;
i__39729 = G__39798;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__39799 = cljs.core.conj.call(null,via,t);
var G__39800 = cljs.core.ex_cause.call(null,t);
via = G__39799;
t = G__39800;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__39803 = datafied_throwable;
var map__39803__$1 = (((((!((map__39803 == null))))?(((((map__39803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39803):map__39803);
var via = cljs.core.get.call(null,map__39803__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__39803__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__39803__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39804 = cljs.core.last.call(null,via);
var map__39804__$1 = (((((!((map__39804 == null))))?(((((map__39804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39804):map__39804);
var type = cljs.core.get.call(null,map__39804__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__39804__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__39804__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39805 = data;
var map__39805__$1 = (((((!((map__39805 == null))))?(((((map__39805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39805):map__39805);
var problems = cljs.core.get.call(null,map__39805__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__39805__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__39805__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39806 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__39806__$1 = (((((!((map__39806 == null))))?(((((map__39806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39806):map__39806);
var top_data = map__39806__$1;
var source = cljs.core.get.call(null,map__39806__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__39811 = phase;
var G__39811__$1 = (((G__39811 instanceof cljs.core.Keyword))?G__39811.fqn:null);
switch (G__39811__$1) {
case "read-source":
var map__39812 = data;
var map__39812__$1 = (((((!((map__39812 == null))))?(((((map__39812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39812):map__39812);
var line = cljs.core.get.call(null,map__39812__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__39812__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39814 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__39814__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__39814,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39814);
var G__39814__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__39814__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39814__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__39814__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39814__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39815 = top_data;
var G__39815__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__39815,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39815);
var G__39815__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__39815__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39815__$1);
var G__39815__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__39815__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39815__$2);
var G__39815__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__39815__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39815__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__39815__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39815__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39816 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__39816,(0),null);
var method = cljs.core.nth.call(null,vec__39816,(1),null);
var file = cljs.core.nth.call(null,vec__39816,(2),null);
var line = cljs.core.nth.call(null,vec__39816,(3),null);
var G__39819 = top_data;
var G__39819__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__39819,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39819);
var G__39819__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__39819__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39819__$1);
var G__39819__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__39819__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39819__$2);
var G__39819__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__39819__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39819__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__39819__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39819__$4;
}

break;
case "execution":
var vec__39820 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__39820,(0),null);
var method = cljs.core.nth.call(null,vec__39820,(1),null);
var file = cljs.core.nth.call(null,vec__39820,(2),null);
var line = cljs.core.nth.call(null,vec__39820,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__39820,source__$1,method,file,line,G__39811,G__39811__$1,map__39803,map__39803__$1,via,trace,phase,map__39804,map__39804__$1,type,message,data,map__39805,map__39805__$1,problems,fn,caller,map__39806,map__39806__$1,top_data,source){
return (function (p1__39802_SHARP_){
var or__4131__auto__ = (p1__39802_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__39802_SHARP_);
}
});})(vec__39820,source__$1,method,file,line,G__39811,G__39811__$1,map__39803,map__39803__$1,via,trace,phase,map__39804,map__39804__$1,type,message,data,map__39805,map__39805__$1,problems,fn,caller,map__39806,map__39806__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__39823 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39823__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__39823,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39823);
var G__39823__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__39823__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39823__$1);
var G__39823__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__39823__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39823__$2);
var G__39823__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__39823__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39823__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__39823__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39823__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39811__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39827){
var map__39828 = p__39827;
var map__39828__$1 = (((((!((map__39828 == null))))?(((((map__39828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39828):map__39828);
var triage_data = map__39828__$1;
var phase = cljs.core.get.call(null,map__39828__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__39828__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__39828__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__39828__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__39828__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__39828__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__39828__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__39828__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39830 = phase;
var G__39830__$1 = (((G__39830 instanceof cljs.core.Keyword))?G__39830.fqn:null);
switch (G__39830__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39831_39840 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39832_39841 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39833_39842 = true;
var _STAR_print_fn_STAR__temp_val__39834_39843 = ((function (_STAR_print_newline_STAR__orig_val__39831_39840,_STAR_print_fn_STAR__orig_val__39832_39841,_STAR_print_newline_STAR__temp_val__39833_39842,sb__4661__auto__,G__39830,G__39830__$1,loc,class_name,simple_class,cause_type,format,map__39828,map__39828__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__39831_39840,_STAR_print_fn_STAR__orig_val__39832_39841,_STAR_print_newline_STAR__temp_val__39833_39842,sb__4661__auto__,G__39830,G__39830__$1,loc,class_name,simple_class,cause_type,format,map__39828,map__39828__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39833_39842;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39834_39843;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__39831_39840,_STAR_print_fn_STAR__orig_val__39832_39841,_STAR_print_newline_STAR__temp_val__39833_39842,_STAR_print_fn_STAR__temp_val__39834_39843,sb__4661__auto__,G__39830,G__39830__$1,loc,class_name,simple_class,cause_type,format,map__39828,map__39828__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__39831_39840,_STAR_print_fn_STAR__orig_val__39832_39841,_STAR_print_newline_STAR__temp_val__39833_39842,_STAR_print_fn_STAR__temp_val__39834_39843,sb__4661__auto__,G__39830,G__39830__$1,loc,class_name,simple_class,cause_type,format,map__39828,map__39828__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__39825_SHARP_){
return cljs.core.dissoc.call(null,p1__39825_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__39831_39840,_STAR_print_fn_STAR__orig_val__39832_39841,_STAR_print_newline_STAR__temp_val__39833_39842,_STAR_print_fn_STAR__temp_val__39834_39843,sb__4661__auto__,G__39830,G__39830__$1,loc,class_name,simple_class,cause_type,format,map__39828,map__39828__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__39831_39840,_STAR_print_fn_STAR__orig_val__39832_39841,_STAR_print_newline_STAR__temp_val__39833_39842,_STAR_print_fn_STAR__temp_val__39834_39843,sb__4661__auto__,G__39830,G__39830__$1,loc,class_name,simple_class,cause_type,format,map__39828,map__39828__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39832_39841;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39831_39840;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39835_39844 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39836_39845 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39837_39846 = true;
var _STAR_print_fn_STAR__temp_val__39838_39847 = ((function (_STAR_print_newline_STAR__orig_val__39835_39844,_STAR_print_fn_STAR__orig_val__39836_39845,_STAR_print_newline_STAR__temp_val__39837_39846,sb__4661__auto__,G__39830,G__39830__$1,loc,class_name,simple_class,cause_type,format,map__39828,map__39828__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__39835_39844,_STAR_print_fn_STAR__orig_val__39836_39845,_STAR_print_newline_STAR__temp_val__39837_39846,sb__4661__auto__,G__39830,G__39830__$1,loc,class_name,simple_class,cause_type,format,map__39828,map__39828__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39837_39846;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39838_39847;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__39835_39844,_STAR_print_fn_STAR__orig_val__39836_39845,_STAR_print_newline_STAR__temp_val__39837_39846,_STAR_print_fn_STAR__temp_val__39838_39847,sb__4661__auto__,G__39830,G__39830__$1,loc,class_name,simple_class,cause_type,format,map__39828,map__39828__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__39835_39844,_STAR_print_fn_STAR__orig_val__39836_39845,_STAR_print_newline_STAR__temp_val__39837_39846,_STAR_print_fn_STAR__temp_val__39838_39847,sb__4661__auto__,G__39830,G__39830__$1,loc,class_name,simple_class,cause_type,format,map__39828,map__39828__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__39826_SHARP_){
return cljs.core.dissoc.call(null,p1__39826_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__39835_39844,_STAR_print_fn_STAR__orig_val__39836_39845,_STAR_print_newline_STAR__temp_val__39837_39846,_STAR_print_fn_STAR__temp_val__39838_39847,sb__4661__auto__,G__39830,G__39830__$1,loc,class_name,simple_class,cause_type,format,map__39828,map__39828__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__39835_39844,_STAR_print_fn_STAR__orig_val__39836_39845,_STAR_print_newline_STAR__temp_val__39837_39846,_STAR_print_fn_STAR__temp_val__39838_39847,sb__4661__auto__,G__39830,G__39830__$1,loc,class_name,simple_class,cause_type,format,map__39828,map__39828__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39836_39845;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39835_39844;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39830__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1554200942249
