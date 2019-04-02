// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39686_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39686_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__39687 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39688 = null;
var count__39689 = (0);
var i__39690 = (0);
while(true){
if((i__39690 < count__39689)){
var n = cljs.core._nth.call(null,chunk__39688,i__39690);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__39691 = seq__39687;
var G__39692 = chunk__39688;
var G__39693 = count__39689;
var G__39694 = (i__39690 + (1));
seq__39687 = G__39691;
chunk__39688 = G__39692;
count__39689 = G__39693;
i__39690 = G__39694;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39687);
if(temp__5720__auto__){
var seq__39687__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39687__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39687__$1);
var G__39695 = cljs.core.chunk_rest.call(null,seq__39687__$1);
var G__39696 = c__4550__auto__;
var G__39697 = cljs.core.count.call(null,c__4550__auto__);
var G__39698 = (0);
seq__39687 = G__39695;
chunk__39688 = G__39696;
count__39689 = G__39697;
i__39690 = G__39698;
continue;
} else {
var n = cljs.core.first.call(null,seq__39687__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__39699 = cljs.core.next.call(null,seq__39687__$1);
var G__39700 = null;
var G__39701 = (0);
var G__39702 = (0);
seq__39687 = G__39699;
chunk__39688 = G__39700;
count__39689 = G__39701;
i__39690 = G__39702;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__39703){
var vec__39704 = p__39703;
var _ = cljs.core.nth.call(null,vec__39704,(0),null);
var v = cljs.core.nth.call(null,vec__39704,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__39707){
var vec__39708 = p__39707;
var k = cljs.core.nth.call(null,vec__39708,(0),null);
var v = cljs.core.nth.call(null,vec__39708,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__39720_39728 = cljs.core.seq.call(null,deps);
var chunk__39721_39729 = null;
var count__39722_39730 = (0);
var i__39723_39731 = (0);
while(true){
if((i__39723_39731 < count__39722_39730)){
var dep_39732 = cljs.core._nth.call(null,chunk__39721_39729,i__39723_39731);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_39732;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39732));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39732,(depth + (1)),state);
} else {
}


var G__39733 = seq__39720_39728;
var G__39734 = chunk__39721_39729;
var G__39735 = count__39722_39730;
var G__39736 = (i__39723_39731 + (1));
seq__39720_39728 = G__39733;
chunk__39721_39729 = G__39734;
count__39722_39730 = G__39735;
i__39723_39731 = G__39736;
continue;
} else {
var temp__5720__auto___39737 = cljs.core.seq.call(null,seq__39720_39728);
if(temp__5720__auto___39737){
var seq__39720_39738__$1 = temp__5720__auto___39737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39720_39738__$1)){
var c__4550__auto___39739 = cljs.core.chunk_first.call(null,seq__39720_39738__$1);
var G__39740 = cljs.core.chunk_rest.call(null,seq__39720_39738__$1);
var G__39741 = c__4550__auto___39739;
var G__39742 = cljs.core.count.call(null,c__4550__auto___39739);
var G__39743 = (0);
seq__39720_39728 = G__39740;
chunk__39721_39729 = G__39741;
count__39722_39730 = G__39742;
i__39723_39731 = G__39743;
continue;
} else {
var dep_39744 = cljs.core.first.call(null,seq__39720_39738__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_39744;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39744));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39744,(depth + (1)),state);
} else {
}


var G__39745 = cljs.core.next.call(null,seq__39720_39738__$1);
var G__39746 = null;
var G__39747 = (0);
var G__39748 = (0);
seq__39720_39728 = G__39745;
chunk__39721_39729 = G__39746;
count__39722_39730 = G__39747;
i__39723_39731 = G__39748;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39724){
var vec__39725 = p__39724;
var seq__39726 = cljs.core.seq.call(null,vec__39725);
var first__39727 = cljs.core.first.call(null,seq__39726);
var seq__39726__$1 = cljs.core.next.call(null,seq__39726);
var x = first__39727;
var xs = seq__39726__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39725,seq__39726,first__39727,seq__39726__$1,x,xs,get_deps__$1){
return (function (p1__39711_SHARP_){
return clojure.set.difference.call(null,p1__39711_SHARP_,x);
});})(vec__39725,seq__39726,first__39727,seq__39726__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__39749 = cljs.core.seq.call(null,provides);
var chunk__39750 = null;
var count__39751 = (0);
var i__39752 = (0);
while(true){
if((i__39752 < count__39751)){
var prov = cljs.core._nth.call(null,chunk__39750,i__39752);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39761_39769 = cljs.core.seq.call(null,requires);
var chunk__39762_39770 = null;
var count__39763_39771 = (0);
var i__39764_39772 = (0);
while(true){
if((i__39764_39772 < count__39763_39771)){
var req_39773 = cljs.core._nth.call(null,chunk__39762_39770,i__39764_39772);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39773,prov);


var G__39774 = seq__39761_39769;
var G__39775 = chunk__39762_39770;
var G__39776 = count__39763_39771;
var G__39777 = (i__39764_39772 + (1));
seq__39761_39769 = G__39774;
chunk__39762_39770 = G__39775;
count__39763_39771 = G__39776;
i__39764_39772 = G__39777;
continue;
} else {
var temp__5720__auto___39778 = cljs.core.seq.call(null,seq__39761_39769);
if(temp__5720__auto___39778){
var seq__39761_39779__$1 = temp__5720__auto___39778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39761_39779__$1)){
var c__4550__auto___39780 = cljs.core.chunk_first.call(null,seq__39761_39779__$1);
var G__39781 = cljs.core.chunk_rest.call(null,seq__39761_39779__$1);
var G__39782 = c__4550__auto___39780;
var G__39783 = cljs.core.count.call(null,c__4550__auto___39780);
var G__39784 = (0);
seq__39761_39769 = G__39781;
chunk__39762_39770 = G__39782;
count__39763_39771 = G__39783;
i__39764_39772 = G__39784;
continue;
} else {
var req_39785 = cljs.core.first.call(null,seq__39761_39779__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39785,prov);


var G__39786 = cljs.core.next.call(null,seq__39761_39779__$1);
var G__39787 = null;
var G__39788 = (0);
var G__39789 = (0);
seq__39761_39769 = G__39786;
chunk__39762_39770 = G__39787;
count__39763_39771 = G__39788;
i__39764_39772 = G__39789;
continue;
}
} else {
}
}
break;
}


var G__39790 = seq__39749;
var G__39791 = chunk__39750;
var G__39792 = count__39751;
var G__39793 = (i__39752 + (1));
seq__39749 = G__39790;
chunk__39750 = G__39791;
count__39751 = G__39792;
i__39752 = G__39793;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39749);
if(temp__5720__auto__){
var seq__39749__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39749__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39749__$1);
var G__39794 = cljs.core.chunk_rest.call(null,seq__39749__$1);
var G__39795 = c__4550__auto__;
var G__39796 = cljs.core.count.call(null,c__4550__auto__);
var G__39797 = (0);
seq__39749 = G__39794;
chunk__39750 = G__39795;
count__39751 = G__39796;
i__39752 = G__39797;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39749__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39765_39798 = cljs.core.seq.call(null,requires);
var chunk__39766_39799 = null;
var count__39767_39800 = (0);
var i__39768_39801 = (0);
while(true){
if((i__39768_39801 < count__39767_39800)){
var req_39802 = cljs.core._nth.call(null,chunk__39766_39799,i__39768_39801);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39802,prov);


var G__39803 = seq__39765_39798;
var G__39804 = chunk__39766_39799;
var G__39805 = count__39767_39800;
var G__39806 = (i__39768_39801 + (1));
seq__39765_39798 = G__39803;
chunk__39766_39799 = G__39804;
count__39767_39800 = G__39805;
i__39768_39801 = G__39806;
continue;
} else {
var temp__5720__auto___39807__$1 = cljs.core.seq.call(null,seq__39765_39798);
if(temp__5720__auto___39807__$1){
var seq__39765_39808__$1 = temp__5720__auto___39807__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39765_39808__$1)){
var c__4550__auto___39809 = cljs.core.chunk_first.call(null,seq__39765_39808__$1);
var G__39810 = cljs.core.chunk_rest.call(null,seq__39765_39808__$1);
var G__39811 = c__4550__auto___39809;
var G__39812 = cljs.core.count.call(null,c__4550__auto___39809);
var G__39813 = (0);
seq__39765_39798 = G__39810;
chunk__39766_39799 = G__39811;
count__39767_39800 = G__39812;
i__39768_39801 = G__39813;
continue;
} else {
var req_39814 = cljs.core.first.call(null,seq__39765_39808__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39814,prov);


var G__39815 = cljs.core.next.call(null,seq__39765_39808__$1);
var G__39816 = null;
var G__39817 = (0);
var G__39818 = (0);
seq__39765_39798 = G__39815;
chunk__39766_39799 = G__39816;
count__39767_39800 = G__39817;
i__39768_39801 = G__39818;
continue;
}
} else {
}
}
break;
}


var G__39819 = cljs.core.next.call(null,seq__39749__$1);
var G__39820 = null;
var G__39821 = (0);
var G__39822 = (0);
seq__39749 = G__39819;
chunk__39750 = G__39820;
count__39751 = G__39821;
i__39752 = G__39822;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__39823_39827 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39824_39828 = null;
var count__39825_39829 = (0);
var i__39826_39830 = (0);
while(true){
if((i__39826_39830 < count__39825_39829)){
var ns_39831 = cljs.core._nth.call(null,chunk__39824_39828,i__39826_39830);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39831);


var G__39832 = seq__39823_39827;
var G__39833 = chunk__39824_39828;
var G__39834 = count__39825_39829;
var G__39835 = (i__39826_39830 + (1));
seq__39823_39827 = G__39832;
chunk__39824_39828 = G__39833;
count__39825_39829 = G__39834;
i__39826_39830 = G__39835;
continue;
} else {
var temp__5720__auto___39836 = cljs.core.seq.call(null,seq__39823_39827);
if(temp__5720__auto___39836){
var seq__39823_39837__$1 = temp__5720__auto___39836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39823_39837__$1)){
var c__4550__auto___39838 = cljs.core.chunk_first.call(null,seq__39823_39837__$1);
var G__39839 = cljs.core.chunk_rest.call(null,seq__39823_39837__$1);
var G__39840 = c__4550__auto___39838;
var G__39841 = cljs.core.count.call(null,c__4550__auto___39838);
var G__39842 = (0);
seq__39823_39827 = G__39839;
chunk__39824_39828 = G__39840;
count__39825_39829 = G__39841;
i__39826_39830 = G__39842;
continue;
} else {
var ns_39843 = cljs.core.first.call(null,seq__39823_39837__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39843);


var G__39844 = cljs.core.next.call(null,seq__39823_39837__$1);
var G__39845 = null;
var G__39846 = (0);
var G__39847 = (0);
seq__39823_39827 = G__39844;
chunk__39824_39828 = G__39845;
count__39825_39829 = G__39846;
i__39826_39830 = G__39847;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__39848__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39849__i = 0, G__39849__a = new Array(arguments.length -  0);
while (G__39849__i < G__39849__a.length) {G__39849__a[G__39849__i] = arguments[G__39849__i + 0]; ++G__39849__i;}
  args = new cljs.core.IndexedSeq(G__39849__a,0,null);
} 
return G__39848__delegate.call(this,args);};
G__39848.cljs$lang$maxFixedArity = 0;
G__39848.cljs$lang$applyTo = (function (arglist__39850){
var args = cljs.core.seq(arglist__39850);
return G__39848__delegate(args);
});
G__39848.cljs$core$IFn$_invoke$arity$variadic = G__39848__delegate;
return G__39848;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__39851_SHARP_,p2__39852_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39851_SHARP_)),p2__39852_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__39853_SHARP_,p2__39854_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39853_SHARP_),p2__39854_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__39855 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__39855.addCallback(((function (G__39855){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__39855))
);

G__39855.addErrback(((function (G__39855){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__39855))
);

return G__39855;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e39856){if((e39856 instanceof Error)){
var e = e39856;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39856;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39857){if((e39857 instanceof Error)){
var e = e39857;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39857;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39858 = cljs.core._EQ_;
var expr__39859 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39858.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39859))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__39858.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39859))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__39858.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__39859))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__39858,expr__39859){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39858,expr__39859))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39861,callback){
var map__39862 = p__39861;
var map__39862__$1 = (((((!((map__39862 == null))))?(((((map__39862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39862):map__39862);
var file_msg = map__39862__$1;
var request_url = cljs.core.get.call(null,map__39862__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__39862,map__39862__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39862,map__39862__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34821__auto__){
return (function (){
var f__34822__auto__ = (function (){var switch__34798__auto__ = ((function (c__34821__auto__){
return (function (state_39900){
var state_val_39901 = (state_39900[(1)]);
if((state_val_39901 === (7))){
var inst_39896 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
var statearr_39902_39928 = state_39900__$1;
(statearr_39902_39928[(2)] = inst_39896);

(statearr_39902_39928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (1))){
var state_39900__$1 = state_39900;
var statearr_39903_39929 = state_39900__$1;
(statearr_39903_39929[(2)] = null);

(statearr_39903_39929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (4))){
var inst_39866 = (state_39900[(7)]);
var inst_39866__$1 = (state_39900[(2)]);
var state_39900__$1 = (function (){var statearr_39904 = state_39900;
(statearr_39904[(7)] = inst_39866__$1);

return statearr_39904;
})();
if(cljs.core.truth_(inst_39866__$1)){
var statearr_39905_39930 = state_39900__$1;
(statearr_39905_39930[(1)] = (5));

} else {
var statearr_39906_39931 = state_39900__$1;
(statearr_39906_39931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (15))){
var inst_39879 = (state_39900[(8)]);
var inst_39881 = (state_39900[(9)]);
var inst_39883 = inst_39881.call(null,inst_39879);
var state_39900__$1 = state_39900;
var statearr_39907_39932 = state_39900__$1;
(statearr_39907_39932[(2)] = inst_39883);

(statearr_39907_39932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (13))){
var inst_39890 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
var statearr_39908_39933 = state_39900__$1;
(statearr_39908_39933[(2)] = inst_39890);

(statearr_39908_39933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (6))){
var state_39900__$1 = state_39900;
var statearr_39909_39934 = state_39900__$1;
(statearr_39909_39934[(2)] = null);

(statearr_39909_39934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (17))){
var inst_39887 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
var statearr_39910_39935 = state_39900__$1;
(statearr_39910_39935[(2)] = inst_39887);

(statearr_39910_39935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (3))){
var inst_39898 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39900__$1,inst_39898);
} else {
if((state_val_39901 === (12))){
var state_39900__$1 = state_39900;
var statearr_39911_39936 = state_39900__$1;
(statearr_39911_39936[(2)] = null);

(statearr_39911_39936[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (2))){
var state_39900__$1 = state_39900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39900__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39901 === (11))){
var inst_39871 = (state_39900[(10)]);
var inst_39877 = figwheel.client.file_reloading.blocking_load.call(null,inst_39871);
var state_39900__$1 = state_39900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39900__$1,(14),inst_39877);
} else {
if((state_val_39901 === (9))){
var inst_39871 = (state_39900[(10)]);
var state_39900__$1 = state_39900;
if(cljs.core.truth_(inst_39871)){
var statearr_39912_39937 = state_39900__$1;
(statearr_39912_39937[(1)] = (11));

} else {
var statearr_39913_39938 = state_39900__$1;
(statearr_39913_39938[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (5))){
var inst_39872 = (state_39900[(11)]);
var inst_39866 = (state_39900[(7)]);
var inst_39871 = cljs.core.nth.call(null,inst_39866,(0),null);
var inst_39872__$1 = cljs.core.nth.call(null,inst_39866,(1),null);
var state_39900__$1 = (function (){var statearr_39914 = state_39900;
(statearr_39914[(10)] = inst_39871);

(statearr_39914[(11)] = inst_39872__$1);

return statearr_39914;
})();
if(cljs.core.truth_(inst_39872__$1)){
var statearr_39915_39939 = state_39900__$1;
(statearr_39915_39939[(1)] = (8));

} else {
var statearr_39916_39940 = state_39900__$1;
(statearr_39916_39940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (14))){
var inst_39871 = (state_39900[(10)]);
var inst_39881 = (state_39900[(9)]);
var inst_39879 = (state_39900[(2)]);
var inst_39880 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39881__$1 = cljs.core.get.call(null,inst_39880,inst_39871);
var state_39900__$1 = (function (){var statearr_39917 = state_39900;
(statearr_39917[(8)] = inst_39879);

(statearr_39917[(9)] = inst_39881__$1);

return statearr_39917;
})();
if(cljs.core.truth_(inst_39881__$1)){
var statearr_39918_39941 = state_39900__$1;
(statearr_39918_39941[(1)] = (15));

} else {
var statearr_39919_39942 = state_39900__$1;
(statearr_39919_39942[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (16))){
var inst_39879 = (state_39900[(8)]);
var inst_39885 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39879);
var state_39900__$1 = state_39900;
var statearr_39920_39943 = state_39900__$1;
(statearr_39920_39943[(2)] = inst_39885);

(statearr_39920_39943[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (10))){
var inst_39892 = (state_39900[(2)]);
var state_39900__$1 = (function (){var statearr_39921 = state_39900;
(statearr_39921[(12)] = inst_39892);

return statearr_39921;
})();
var statearr_39922_39944 = state_39900__$1;
(statearr_39922_39944[(2)] = null);

(statearr_39922_39944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (8))){
var inst_39872 = (state_39900[(11)]);
var inst_39874 = eval(inst_39872);
var state_39900__$1 = state_39900;
var statearr_39923_39945 = state_39900__$1;
(statearr_39923_39945[(2)] = inst_39874);

(statearr_39923_39945[(1)] = (10));


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
});})(c__34821__auto__))
;
return ((function (switch__34798__auto__,c__34821__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34799__auto__ = null;
var figwheel$client$file_reloading$state_machine__34799__auto____0 = (function (){
var statearr_39924 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39924[(0)] = figwheel$client$file_reloading$state_machine__34799__auto__);

(statearr_39924[(1)] = (1));

return statearr_39924;
});
var figwheel$client$file_reloading$state_machine__34799__auto____1 = (function (state_39900){
while(true){
var ret_value__34800__auto__ = (function (){try{while(true){
var result__34801__auto__ = switch__34798__auto__.call(null,state_39900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34801__auto__;
}
break;
}
}catch (e39925){if((e39925 instanceof Object)){
var ex__34802__auto__ = e39925;
var statearr_39926_39946 = state_39900;
(statearr_39926_39946[(5)] = ex__34802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39947 = state_39900;
state_39900 = G__39947;
continue;
} else {
return ret_value__34800__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34799__auto__ = function(state_39900){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34799__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34799__auto____1.call(this,state_39900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34799__auto____0;
figwheel$client$file_reloading$state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34799__auto____1;
return figwheel$client$file_reloading$state_machine__34799__auto__;
})()
;})(switch__34798__auto__,c__34821__auto__))
})();
var state__34823__auto__ = (function (){var statearr_39927 = f__34822__auto__.call(null);
(statearr_39927[(6)] = c__34821__auto__);

return statearr_39927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34823__auto__);
});})(c__34821__auto__))
);

return c__34821__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__39949 = arguments.length;
switch (G__39949) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39951,callback){
var map__39952 = p__39951;
var map__39952__$1 = (((((!((map__39952 == null))))?(((((map__39952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39952):map__39952);
var file_msg = map__39952__$1;
var namespace = cljs.core.get.call(null,map__39952__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39952,map__39952__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39952,map__39952__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__39954){
var map__39955 = p__39954;
var map__39955__$1 = (((((!((map__39955 == null))))?(((((map__39955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39955):map__39955);
var file_msg = map__39955__$1;
var namespace = cljs.core.get.call(null,map__39955__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39957){
var map__39958 = p__39957;
var map__39958__$1 = (((((!((map__39958 == null))))?(((((map__39958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39958):map__39958);
var file_msg = map__39958__$1;
var namespace = cljs.core.get.call(null,map__39958__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39960,callback){
var map__39961 = p__39960;
var map__39961__$1 = (((((!((map__39961 == null))))?(((((map__39961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39961):map__39961);
var file_msg = map__39961__$1;
var request_url = cljs.core.get.call(null,map__39961__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39961__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34821__auto___40011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34821__auto___40011,out){
return (function (){
var f__34822__auto__ = (function (){var switch__34798__auto__ = ((function (c__34821__auto___40011,out){
return (function (state_39996){
var state_val_39997 = (state_39996[(1)]);
if((state_val_39997 === (1))){
var inst_39970 = cljs.core.seq.call(null,files);
var inst_39971 = cljs.core.first.call(null,inst_39970);
var inst_39972 = cljs.core.next.call(null,inst_39970);
var inst_39973 = files;
var state_39996__$1 = (function (){var statearr_39998 = state_39996;
(statearr_39998[(7)] = inst_39973);

(statearr_39998[(8)] = inst_39971);

(statearr_39998[(9)] = inst_39972);

return statearr_39998;
})();
var statearr_39999_40012 = state_39996__$1;
(statearr_39999_40012[(2)] = null);

(statearr_39999_40012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39997 === (2))){
var inst_39973 = (state_39996[(7)]);
var inst_39979 = (state_39996[(10)]);
var inst_39978 = cljs.core.seq.call(null,inst_39973);
var inst_39979__$1 = cljs.core.first.call(null,inst_39978);
var inst_39980 = cljs.core.next.call(null,inst_39978);
var inst_39981 = (inst_39979__$1 == null);
var inst_39982 = cljs.core.not.call(null,inst_39981);
var state_39996__$1 = (function (){var statearr_40000 = state_39996;
(statearr_40000[(11)] = inst_39980);

(statearr_40000[(10)] = inst_39979__$1);

return statearr_40000;
})();
if(inst_39982){
var statearr_40001_40013 = state_39996__$1;
(statearr_40001_40013[(1)] = (4));

} else {
var statearr_40002_40014 = state_39996__$1;
(statearr_40002_40014[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39997 === (3))){
var inst_39994 = (state_39996[(2)]);
var state_39996__$1 = state_39996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39996__$1,inst_39994);
} else {
if((state_val_39997 === (4))){
var inst_39979 = (state_39996[(10)]);
var inst_39984 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39979);
var state_39996__$1 = state_39996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39996__$1,(7),inst_39984);
} else {
if((state_val_39997 === (5))){
var inst_39990 = cljs.core.async.close_BANG_.call(null,out);
var state_39996__$1 = state_39996;
var statearr_40003_40015 = state_39996__$1;
(statearr_40003_40015[(2)] = inst_39990);

(statearr_40003_40015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39997 === (6))){
var inst_39992 = (state_39996[(2)]);
var state_39996__$1 = state_39996;
var statearr_40004_40016 = state_39996__$1;
(statearr_40004_40016[(2)] = inst_39992);

(statearr_40004_40016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39997 === (7))){
var inst_39980 = (state_39996[(11)]);
var inst_39986 = (state_39996[(2)]);
var inst_39987 = cljs.core.async.put_BANG_.call(null,out,inst_39986);
var inst_39973 = inst_39980;
var state_39996__$1 = (function (){var statearr_40005 = state_39996;
(statearr_40005[(7)] = inst_39973);

(statearr_40005[(12)] = inst_39987);

return statearr_40005;
})();
var statearr_40006_40017 = state_39996__$1;
(statearr_40006_40017[(2)] = null);

(statearr_40006_40017[(1)] = (2));


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
});})(c__34821__auto___40011,out))
;
return ((function (switch__34798__auto__,c__34821__auto___40011,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34799__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34799__auto____0 = (function (){
var statearr_40007 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40007[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34799__auto__);

(statearr_40007[(1)] = (1));

return statearr_40007;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34799__auto____1 = (function (state_39996){
while(true){
var ret_value__34800__auto__ = (function (){try{while(true){
var result__34801__auto__ = switch__34798__auto__.call(null,state_39996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34801__auto__;
}
break;
}
}catch (e40008){if((e40008 instanceof Object)){
var ex__34802__auto__ = e40008;
var statearr_40009_40018 = state_39996;
(statearr_40009_40018[(5)] = ex__34802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40019 = state_39996;
state_39996 = G__40019;
continue;
} else {
return ret_value__34800__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34799__auto__ = function(state_39996){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34799__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34799__auto____1.call(this,state_39996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34799__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34799__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34799__auto__;
})()
;})(switch__34798__auto__,c__34821__auto___40011,out))
})();
var state__34823__auto__ = (function (){var statearr_40010 = f__34822__auto__.call(null);
(statearr_40010[(6)] = c__34821__auto___40011);

return statearr_40010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34823__auto__);
});})(c__34821__auto___40011,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40020,opts){
var map__40021 = p__40020;
var map__40021__$1 = (((((!((map__40021 == null))))?(((((map__40021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40021):map__40021);
var eval_body = cljs.core.get.call(null,map__40021__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40021__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40023){var e = e40023;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__40024_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40024_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__40025){
var vec__40026 = p__40025;
var k = cljs.core.nth.call(null,vec__40026,(0),null);
var v = cljs.core.nth.call(null,vec__40026,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40029){
var vec__40030 = p__40029;
var k = cljs.core.nth.call(null,vec__40030,(0),null);
var v = cljs.core.nth.call(null,vec__40030,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40036,p__40037){
var map__40038 = p__40036;
var map__40038__$1 = (((((!((map__40038 == null))))?(((((map__40038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40038):map__40038);
var opts = map__40038__$1;
var before_jsload = cljs.core.get.call(null,map__40038__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40038__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40038__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40039 = p__40037;
var map__40039__$1 = (((((!((map__40039 == null))))?(((((map__40039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40039):map__40039);
var msg = map__40039__$1;
var files = cljs.core.get.call(null,map__40039__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40039__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40039__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34822__auto__ = (function (){var switch__34798__auto__ = ((function (c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40193){
var state_val_40194 = (state_40193[(1)]);
if((state_val_40194 === (7))){
var inst_40054 = (state_40193[(7)]);
var inst_40055 = (state_40193[(8)]);
var inst_40056 = (state_40193[(9)]);
var inst_40053 = (state_40193[(10)]);
var inst_40061 = cljs.core._nth.call(null,inst_40054,inst_40056);
var inst_40062 = figwheel.client.file_reloading.eval_body.call(null,inst_40061,opts);
var inst_40063 = (inst_40056 + (1));
var tmp40195 = inst_40054;
var tmp40196 = inst_40055;
var tmp40197 = inst_40053;
var inst_40053__$1 = tmp40197;
var inst_40054__$1 = tmp40195;
var inst_40055__$1 = tmp40196;
var inst_40056__$1 = inst_40063;
var state_40193__$1 = (function (){var statearr_40198 = state_40193;
(statearr_40198[(7)] = inst_40054__$1);

(statearr_40198[(11)] = inst_40062);

(statearr_40198[(8)] = inst_40055__$1);

(statearr_40198[(9)] = inst_40056__$1);

(statearr_40198[(10)] = inst_40053__$1);

return statearr_40198;
})();
var statearr_40199_40282 = state_40193__$1;
(statearr_40199_40282[(2)] = null);

(statearr_40199_40282[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (20))){
var inst_40096 = (state_40193[(12)]);
var inst_40104 = figwheel.client.file_reloading.sort_files.call(null,inst_40096);
var state_40193__$1 = state_40193;
var statearr_40200_40283 = state_40193__$1;
(statearr_40200_40283[(2)] = inst_40104);

(statearr_40200_40283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (27))){
var state_40193__$1 = state_40193;
var statearr_40201_40284 = state_40193__$1;
(statearr_40201_40284[(2)] = null);

(statearr_40201_40284[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (1))){
var inst_40045 = (state_40193[(13)]);
var inst_40042 = before_jsload.call(null,files);
var inst_40043 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40044 = (function (){return ((function (inst_40045,inst_40042,inst_40043,state_val_40194,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40033_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40033_SHARP_);
});
;})(inst_40045,inst_40042,inst_40043,state_val_40194,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40045__$1 = cljs.core.filter.call(null,inst_40044,files);
var inst_40046 = cljs.core.not_empty.call(null,inst_40045__$1);
var state_40193__$1 = (function (){var statearr_40202 = state_40193;
(statearr_40202[(14)] = inst_40042);

(statearr_40202[(13)] = inst_40045__$1);

(statearr_40202[(15)] = inst_40043);

return statearr_40202;
})();
if(cljs.core.truth_(inst_40046)){
var statearr_40203_40285 = state_40193__$1;
(statearr_40203_40285[(1)] = (2));

} else {
var statearr_40204_40286 = state_40193__$1;
(statearr_40204_40286[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (24))){
var state_40193__$1 = state_40193;
var statearr_40205_40287 = state_40193__$1;
(statearr_40205_40287[(2)] = null);

(statearr_40205_40287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (39))){
var inst_40146 = (state_40193[(16)]);
var state_40193__$1 = state_40193;
var statearr_40206_40288 = state_40193__$1;
(statearr_40206_40288[(2)] = inst_40146);

(statearr_40206_40288[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (46))){
var inst_40188 = (state_40193[(2)]);
var state_40193__$1 = state_40193;
var statearr_40207_40289 = state_40193__$1;
(statearr_40207_40289[(2)] = inst_40188);

(statearr_40207_40289[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (4))){
var inst_40090 = (state_40193[(2)]);
var inst_40091 = cljs.core.List.EMPTY;
var inst_40092 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40091);
var inst_40093 = (function (){return ((function (inst_40090,inst_40091,inst_40092,state_val_40194,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40034_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40034_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40034_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__40034_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_40090,inst_40091,inst_40092,state_val_40194,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40094 = cljs.core.filter.call(null,inst_40093,files);
var inst_40095 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40096 = cljs.core.concat.call(null,inst_40094,inst_40095);
var state_40193__$1 = (function (){var statearr_40208 = state_40193;
(statearr_40208[(12)] = inst_40096);

(statearr_40208[(17)] = inst_40090);

(statearr_40208[(18)] = inst_40092);

return statearr_40208;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40209_40290 = state_40193__$1;
(statearr_40209_40290[(1)] = (16));

} else {
var statearr_40210_40291 = state_40193__$1;
(statearr_40210_40291[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (15))){
var inst_40080 = (state_40193[(2)]);
var state_40193__$1 = state_40193;
var statearr_40211_40292 = state_40193__$1;
(statearr_40211_40292[(2)] = inst_40080);

(statearr_40211_40292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (21))){
var inst_40106 = (state_40193[(19)]);
var inst_40106__$1 = (state_40193[(2)]);
var inst_40107 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40106__$1);
var state_40193__$1 = (function (){var statearr_40212 = state_40193;
(statearr_40212[(19)] = inst_40106__$1);

return statearr_40212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40193__$1,(22),inst_40107);
} else {
if((state_val_40194 === (31))){
var inst_40191 = (state_40193[(2)]);
var state_40193__$1 = state_40193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40193__$1,inst_40191);
} else {
if((state_val_40194 === (32))){
var inst_40146 = (state_40193[(16)]);
var inst_40151 = inst_40146.cljs$lang$protocol_mask$partition0$;
var inst_40152 = (inst_40151 & (64));
var inst_40153 = inst_40146.cljs$core$ISeq$;
var inst_40154 = (cljs.core.PROTOCOL_SENTINEL === inst_40153);
var inst_40155 = ((inst_40152) || (inst_40154));
var state_40193__$1 = state_40193;
if(cljs.core.truth_(inst_40155)){
var statearr_40213_40293 = state_40193__$1;
(statearr_40213_40293[(1)] = (35));

} else {
var statearr_40214_40294 = state_40193__$1;
(statearr_40214_40294[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (40))){
var inst_40168 = (state_40193[(20)]);
var inst_40167 = (state_40193[(2)]);
var inst_40168__$1 = cljs.core.get.call(null,inst_40167,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40169 = cljs.core.get.call(null,inst_40167,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40170 = cljs.core.not_empty.call(null,inst_40168__$1);
var state_40193__$1 = (function (){var statearr_40215 = state_40193;
(statearr_40215[(21)] = inst_40169);

(statearr_40215[(20)] = inst_40168__$1);

return statearr_40215;
})();
if(cljs.core.truth_(inst_40170)){
var statearr_40216_40295 = state_40193__$1;
(statearr_40216_40295[(1)] = (41));

} else {
var statearr_40217_40296 = state_40193__$1;
(statearr_40217_40296[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (33))){
var state_40193__$1 = state_40193;
var statearr_40218_40297 = state_40193__$1;
(statearr_40218_40297[(2)] = false);

(statearr_40218_40297[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (13))){
var inst_40066 = (state_40193[(22)]);
var inst_40070 = cljs.core.chunk_first.call(null,inst_40066);
var inst_40071 = cljs.core.chunk_rest.call(null,inst_40066);
var inst_40072 = cljs.core.count.call(null,inst_40070);
var inst_40053 = inst_40071;
var inst_40054 = inst_40070;
var inst_40055 = inst_40072;
var inst_40056 = (0);
var state_40193__$1 = (function (){var statearr_40219 = state_40193;
(statearr_40219[(7)] = inst_40054);

(statearr_40219[(8)] = inst_40055);

(statearr_40219[(9)] = inst_40056);

(statearr_40219[(10)] = inst_40053);

return statearr_40219;
})();
var statearr_40220_40298 = state_40193__$1;
(statearr_40220_40298[(2)] = null);

(statearr_40220_40298[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (22))){
var inst_40109 = (state_40193[(23)]);
var inst_40106 = (state_40193[(19)]);
var inst_40110 = (state_40193[(24)]);
var inst_40114 = (state_40193[(25)]);
var inst_40109__$1 = (state_40193[(2)]);
var inst_40110__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40109__$1);
var inst_40111 = (function (){var all_files = inst_40106;
var res_SINGLEQUOTE_ = inst_40109__$1;
var res = inst_40110__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40109,inst_40106,inst_40110,inst_40114,inst_40109__$1,inst_40110__$1,state_val_40194,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40035_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40035_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40109,inst_40106,inst_40110,inst_40114,inst_40109__$1,inst_40110__$1,state_val_40194,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40112 = cljs.core.filter.call(null,inst_40111,inst_40109__$1);
var inst_40113 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40114__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40113);
var inst_40115 = cljs.core.not_empty.call(null,inst_40114__$1);
var state_40193__$1 = (function (){var statearr_40221 = state_40193;
(statearr_40221[(26)] = inst_40112);

(statearr_40221[(23)] = inst_40109__$1);

(statearr_40221[(24)] = inst_40110__$1);

(statearr_40221[(25)] = inst_40114__$1);

return statearr_40221;
})();
if(cljs.core.truth_(inst_40115)){
var statearr_40222_40299 = state_40193__$1;
(statearr_40222_40299[(1)] = (23));

} else {
var statearr_40223_40300 = state_40193__$1;
(statearr_40223_40300[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (36))){
var state_40193__$1 = state_40193;
var statearr_40224_40301 = state_40193__$1;
(statearr_40224_40301[(2)] = false);

(statearr_40224_40301[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (41))){
var inst_40168 = (state_40193[(20)]);
var inst_40172 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40173 = cljs.core.map.call(null,inst_40172,inst_40168);
var inst_40174 = cljs.core.pr_str.call(null,inst_40173);
var inst_40175 = ["figwheel-no-load meta-data: ",inst_40174].join('');
var inst_40176 = figwheel.client.utils.log.call(null,inst_40175);
var state_40193__$1 = state_40193;
var statearr_40225_40302 = state_40193__$1;
(statearr_40225_40302[(2)] = inst_40176);

(statearr_40225_40302[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (43))){
var inst_40169 = (state_40193[(21)]);
var inst_40179 = (state_40193[(2)]);
var inst_40180 = cljs.core.not_empty.call(null,inst_40169);
var state_40193__$1 = (function (){var statearr_40226 = state_40193;
(statearr_40226[(27)] = inst_40179);

return statearr_40226;
})();
if(cljs.core.truth_(inst_40180)){
var statearr_40227_40303 = state_40193__$1;
(statearr_40227_40303[(1)] = (44));

} else {
var statearr_40228_40304 = state_40193__$1;
(statearr_40228_40304[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (29))){
var inst_40112 = (state_40193[(26)]);
var inst_40109 = (state_40193[(23)]);
var inst_40106 = (state_40193[(19)]);
var inst_40146 = (state_40193[(16)]);
var inst_40110 = (state_40193[(24)]);
var inst_40114 = (state_40193[(25)]);
var inst_40142 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40145 = (function (){var all_files = inst_40106;
var res_SINGLEQUOTE_ = inst_40109;
var res = inst_40110;
var files_not_loaded = inst_40112;
var dependencies_that_loaded = inst_40114;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40112,inst_40109,inst_40106,inst_40146,inst_40110,inst_40114,inst_40142,state_val_40194,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40144){
var map__40229 = p__40144;
var map__40229__$1 = (((((!((map__40229 == null))))?(((((map__40229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40229):map__40229);
var namespace = cljs.core.get.call(null,map__40229__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40112,inst_40109,inst_40106,inst_40146,inst_40110,inst_40114,inst_40142,state_val_40194,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40146__$1 = cljs.core.group_by.call(null,inst_40145,inst_40112);
var inst_40148 = (inst_40146__$1 == null);
var inst_40149 = cljs.core.not.call(null,inst_40148);
var state_40193__$1 = (function (){var statearr_40231 = state_40193;
(statearr_40231[(28)] = inst_40142);

(statearr_40231[(16)] = inst_40146__$1);

return statearr_40231;
})();
if(inst_40149){
var statearr_40232_40305 = state_40193__$1;
(statearr_40232_40305[(1)] = (32));

} else {
var statearr_40233_40306 = state_40193__$1;
(statearr_40233_40306[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (44))){
var inst_40169 = (state_40193[(21)]);
var inst_40182 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40169);
var inst_40183 = cljs.core.pr_str.call(null,inst_40182);
var inst_40184 = ["not required: ",inst_40183].join('');
var inst_40185 = figwheel.client.utils.log.call(null,inst_40184);
var state_40193__$1 = state_40193;
var statearr_40234_40307 = state_40193__$1;
(statearr_40234_40307[(2)] = inst_40185);

(statearr_40234_40307[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (6))){
var inst_40087 = (state_40193[(2)]);
var state_40193__$1 = state_40193;
var statearr_40235_40308 = state_40193__$1;
(statearr_40235_40308[(2)] = inst_40087);

(statearr_40235_40308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (28))){
var inst_40112 = (state_40193[(26)]);
var inst_40139 = (state_40193[(2)]);
var inst_40140 = cljs.core.not_empty.call(null,inst_40112);
var state_40193__$1 = (function (){var statearr_40236 = state_40193;
(statearr_40236[(29)] = inst_40139);

return statearr_40236;
})();
if(cljs.core.truth_(inst_40140)){
var statearr_40237_40309 = state_40193__$1;
(statearr_40237_40309[(1)] = (29));

} else {
var statearr_40238_40310 = state_40193__$1;
(statearr_40238_40310[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (25))){
var inst_40110 = (state_40193[(24)]);
var inst_40126 = (state_40193[(2)]);
var inst_40127 = cljs.core.not_empty.call(null,inst_40110);
var state_40193__$1 = (function (){var statearr_40239 = state_40193;
(statearr_40239[(30)] = inst_40126);

return statearr_40239;
})();
if(cljs.core.truth_(inst_40127)){
var statearr_40240_40311 = state_40193__$1;
(statearr_40240_40311[(1)] = (26));

} else {
var statearr_40241_40312 = state_40193__$1;
(statearr_40241_40312[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (34))){
var inst_40162 = (state_40193[(2)]);
var state_40193__$1 = state_40193;
if(cljs.core.truth_(inst_40162)){
var statearr_40242_40313 = state_40193__$1;
(statearr_40242_40313[(1)] = (38));

} else {
var statearr_40243_40314 = state_40193__$1;
(statearr_40243_40314[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (17))){
var state_40193__$1 = state_40193;
var statearr_40244_40315 = state_40193__$1;
(statearr_40244_40315[(2)] = recompile_dependents);

(statearr_40244_40315[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (3))){
var state_40193__$1 = state_40193;
var statearr_40245_40316 = state_40193__$1;
(statearr_40245_40316[(2)] = null);

(statearr_40245_40316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (12))){
var inst_40083 = (state_40193[(2)]);
var state_40193__$1 = state_40193;
var statearr_40246_40317 = state_40193__$1;
(statearr_40246_40317[(2)] = inst_40083);

(statearr_40246_40317[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (2))){
var inst_40045 = (state_40193[(13)]);
var inst_40052 = cljs.core.seq.call(null,inst_40045);
var inst_40053 = inst_40052;
var inst_40054 = null;
var inst_40055 = (0);
var inst_40056 = (0);
var state_40193__$1 = (function (){var statearr_40247 = state_40193;
(statearr_40247[(7)] = inst_40054);

(statearr_40247[(8)] = inst_40055);

(statearr_40247[(9)] = inst_40056);

(statearr_40247[(10)] = inst_40053);

return statearr_40247;
})();
var statearr_40248_40318 = state_40193__$1;
(statearr_40248_40318[(2)] = null);

(statearr_40248_40318[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (23))){
var inst_40112 = (state_40193[(26)]);
var inst_40109 = (state_40193[(23)]);
var inst_40106 = (state_40193[(19)]);
var inst_40110 = (state_40193[(24)]);
var inst_40114 = (state_40193[(25)]);
var inst_40117 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40119 = (function (){var all_files = inst_40106;
var res_SINGLEQUOTE_ = inst_40109;
var res = inst_40110;
var files_not_loaded = inst_40112;
var dependencies_that_loaded = inst_40114;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40112,inst_40109,inst_40106,inst_40110,inst_40114,inst_40117,state_val_40194,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40118){
var map__40249 = p__40118;
var map__40249__$1 = (((((!((map__40249 == null))))?(((((map__40249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40249):map__40249);
var request_url = cljs.core.get.call(null,map__40249__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40112,inst_40109,inst_40106,inst_40110,inst_40114,inst_40117,state_val_40194,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40120 = cljs.core.reverse.call(null,inst_40114);
var inst_40121 = cljs.core.map.call(null,inst_40119,inst_40120);
var inst_40122 = cljs.core.pr_str.call(null,inst_40121);
var inst_40123 = figwheel.client.utils.log.call(null,inst_40122);
var state_40193__$1 = (function (){var statearr_40251 = state_40193;
(statearr_40251[(31)] = inst_40117);

return statearr_40251;
})();
var statearr_40252_40319 = state_40193__$1;
(statearr_40252_40319[(2)] = inst_40123);

(statearr_40252_40319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (35))){
var state_40193__$1 = state_40193;
var statearr_40253_40320 = state_40193__$1;
(statearr_40253_40320[(2)] = true);

(statearr_40253_40320[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (19))){
var inst_40096 = (state_40193[(12)]);
var inst_40102 = figwheel.client.file_reloading.expand_files.call(null,inst_40096);
var state_40193__$1 = state_40193;
var statearr_40254_40321 = state_40193__$1;
(statearr_40254_40321[(2)] = inst_40102);

(statearr_40254_40321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (11))){
var state_40193__$1 = state_40193;
var statearr_40255_40322 = state_40193__$1;
(statearr_40255_40322[(2)] = null);

(statearr_40255_40322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (9))){
var inst_40085 = (state_40193[(2)]);
var state_40193__$1 = state_40193;
var statearr_40256_40323 = state_40193__$1;
(statearr_40256_40323[(2)] = inst_40085);

(statearr_40256_40323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (5))){
var inst_40055 = (state_40193[(8)]);
var inst_40056 = (state_40193[(9)]);
var inst_40058 = (inst_40056 < inst_40055);
var inst_40059 = inst_40058;
var state_40193__$1 = state_40193;
if(cljs.core.truth_(inst_40059)){
var statearr_40257_40324 = state_40193__$1;
(statearr_40257_40324[(1)] = (7));

} else {
var statearr_40258_40325 = state_40193__$1;
(statearr_40258_40325[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (14))){
var inst_40066 = (state_40193[(22)]);
var inst_40075 = cljs.core.first.call(null,inst_40066);
var inst_40076 = figwheel.client.file_reloading.eval_body.call(null,inst_40075,opts);
var inst_40077 = cljs.core.next.call(null,inst_40066);
var inst_40053 = inst_40077;
var inst_40054 = null;
var inst_40055 = (0);
var inst_40056 = (0);
var state_40193__$1 = (function (){var statearr_40259 = state_40193;
(statearr_40259[(32)] = inst_40076);

(statearr_40259[(7)] = inst_40054);

(statearr_40259[(8)] = inst_40055);

(statearr_40259[(9)] = inst_40056);

(statearr_40259[(10)] = inst_40053);

return statearr_40259;
})();
var statearr_40260_40326 = state_40193__$1;
(statearr_40260_40326[(2)] = null);

(statearr_40260_40326[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (45))){
var state_40193__$1 = state_40193;
var statearr_40261_40327 = state_40193__$1;
(statearr_40261_40327[(2)] = null);

(statearr_40261_40327[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (26))){
var inst_40112 = (state_40193[(26)]);
var inst_40109 = (state_40193[(23)]);
var inst_40106 = (state_40193[(19)]);
var inst_40110 = (state_40193[(24)]);
var inst_40114 = (state_40193[(25)]);
var inst_40129 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40131 = (function (){var all_files = inst_40106;
var res_SINGLEQUOTE_ = inst_40109;
var res = inst_40110;
var files_not_loaded = inst_40112;
var dependencies_that_loaded = inst_40114;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40112,inst_40109,inst_40106,inst_40110,inst_40114,inst_40129,state_val_40194,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40130){
var map__40262 = p__40130;
var map__40262__$1 = (((((!((map__40262 == null))))?(((((map__40262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40262):map__40262);
var namespace = cljs.core.get.call(null,map__40262__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40262__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40112,inst_40109,inst_40106,inst_40110,inst_40114,inst_40129,state_val_40194,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40132 = cljs.core.map.call(null,inst_40131,inst_40110);
var inst_40133 = cljs.core.pr_str.call(null,inst_40132);
var inst_40134 = figwheel.client.utils.log.call(null,inst_40133);
var inst_40135 = (function (){var all_files = inst_40106;
var res_SINGLEQUOTE_ = inst_40109;
var res = inst_40110;
var files_not_loaded = inst_40112;
var dependencies_that_loaded = inst_40114;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40112,inst_40109,inst_40106,inst_40110,inst_40114,inst_40129,inst_40131,inst_40132,inst_40133,inst_40134,state_val_40194,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40112,inst_40109,inst_40106,inst_40110,inst_40114,inst_40129,inst_40131,inst_40132,inst_40133,inst_40134,state_val_40194,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40136 = setTimeout(inst_40135,(10));
var state_40193__$1 = (function (){var statearr_40264 = state_40193;
(statearr_40264[(33)] = inst_40129);

(statearr_40264[(34)] = inst_40134);

return statearr_40264;
})();
var statearr_40265_40328 = state_40193__$1;
(statearr_40265_40328[(2)] = inst_40136);

(statearr_40265_40328[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (16))){
var state_40193__$1 = state_40193;
var statearr_40266_40329 = state_40193__$1;
(statearr_40266_40329[(2)] = reload_dependents);

(statearr_40266_40329[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (38))){
var inst_40146 = (state_40193[(16)]);
var inst_40164 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40146);
var state_40193__$1 = state_40193;
var statearr_40267_40330 = state_40193__$1;
(statearr_40267_40330[(2)] = inst_40164);

(statearr_40267_40330[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (30))){
var state_40193__$1 = state_40193;
var statearr_40268_40331 = state_40193__$1;
(statearr_40268_40331[(2)] = null);

(statearr_40268_40331[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (10))){
var inst_40066 = (state_40193[(22)]);
var inst_40068 = cljs.core.chunked_seq_QMARK_.call(null,inst_40066);
var state_40193__$1 = state_40193;
if(inst_40068){
var statearr_40269_40332 = state_40193__$1;
(statearr_40269_40332[(1)] = (13));

} else {
var statearr_40270_40333 = state_40193__$1;
(statearr_40270_40333[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (18))){
var inst_40100 = (state_40193[(2)]);
var state_40193__$1 = state_40193;
if(cljs.core.truth_(inst_40100)){
var statearr_40271_40334 = state_40193__$1;
(statearr_40271_40334[(1)] = (19));

} else {
var statearr_40272_40335 = state_40193__$1;
(statearr_40272_40335[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (42))){
var state_40193__$1 = state_40193;
var statearr_40273_40336 = state_40193__$1;
(statearr_40273_40336[(2)] = null);

(statearr_40273_40336[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (37))){
var inst_40159 = (state_40193[(2)]);
var state_40193__$1 = state_40193;
var statearr_40274_40337 = state_40193__$1;
(statearr_40274_40337[(2)] = inst_40159);

(statearr_40274_40337[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40194 === (8))){
var inst_40053 = (state_40193[(10)]);
var inst_40066 = (state_40193[(22)]);
var inst_40066__$1 = cljs.core.seq.call(null,inst_40053);
var state_40193__$1 = (function (){var statearr_40275 = state_40193;
(statearr_40275[(22)] = inst_40066__$1);

return statearr_40275;
})();
if(inst_40066__$1){
var statearr_40276_40338 = state_40193__$1;
(statearr_40276_40338[(1)] = (10));

} else {
var statearr_40277_40339 = state_40193__$1;
(statearr_40277_40339[(1)] = (11));

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
}
});})(c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34798__auto__,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34799__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34799__auto____0 = (function (){
var statearr_40278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40278[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34799__auto__);

(statearr_40278[(1)] = (1));

return statearr_40278;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34799__auto____1 = (function (state_40193){
while(true){
var ret_value__34800__auto__ = (function (){try{while(true){
var result__34801__auto__ = switch__34798__auto__.call(null,state_40193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34801__auto__;
}
break;
}
}catch (e40279){if((e40279 instanceof Object)){
var ex__34802__auto__ = e40279;
var statearr_40280_40340 = state_40193;
(statearr_40280_40340[(5)] = ex__34802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40341 = state_40193;
state_40193 = G__40341;
continue;
} else {
return ret_value__34800__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34799__auto__ = function(state_40193){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34799__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34799__auto____1.call(this,state_40193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34799__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34799__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34799__auto__;
})()
;})(switch__34798__auto__,c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34823__auto__ = (function (){var statearr_40281 = f__34822__auto__.call(null);
(statearr_40281[(6)] = c__34821__auto__);

return statearr_40281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34823__auto__);
});})(c__34821__auto__,map__40038,map__40038__$1,opts,before_jsload,on_jsload,reload_dependents,map__40039,map__40039__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34821__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40344,link){
var map__40345 = p__40344;
var map__40345__$1 = (((((!((map__40345 == null))))?(((((map__40345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40345):map__40345);
var file = cljs.core.get.call(null,map__40345__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__40345,map__40345__$1,file){
return (function (p1__40342_SHARP_,p2__40343_SHARP_){
if(cljs.core._EQ_.call(null,p1__40342_SHARP_,p2__40343_SHARP_)){
return p1__40342_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__40345,map__40345__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40348){
var map__40349 = p__40348;
var map__40349__$1 = (((((!((map__40349 == null))))?(((((map__40349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40349):map__40349);
var match_length = cljs.core.get.call(null,map__40349__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40349__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40347_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40347_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40351_SHARP_,p2__40352_SHARP_){
return cljs.core.assoc.call(null,p1__40351_SHARP_,cljs.core.get.call(null,p2__40352_SHARP_,key),p2__40352_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_40353 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_40353);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_40353);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40354,p__40355){
var map__40356 = p__40354;
var map__40356__$1 = (((((!((map__40356 == null))))?(((((map__40356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40356):map__40356);
var on_cssload = cljs.core.get.call(null,map__40356__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__40357 = p__40355;
var map__40357__$1 = (((((!((map__40357 == null))))?(((((map__40357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40357):map__40357);
var files_msg = map__40357__$1;
var files = cljs.core.get.call(null,map__40357__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1554201135680
