// Compiled by ClojureScript 1.10.520 {}
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cognitect.transit');

/**
 * @interface
 */
chord.format.ChordFormatter = function(){};

chord.format.freeze = (function chord$format$freeze(_,obj){
if((((!((_ == null)))) && ((!((_.chord$format$ChordFormatter$freeze$arity$2 == null)))))){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (chord.format.freeze[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,obj);
} else {
var m__4431__auto__ = (chord.format.freeze["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.freeze",_);
}
}
}
});

chord.format.thaw = (function chord$format$thaw(_,s){
if((((!((_ == null)))) && ((!((_.chord$format$ChordFormatter$thaw$arity$2 == null)))))){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (chord.format.thaw[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,s);
} else {
var m__4431__auto__ = (chord.format.thaw["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.thaw",_);
}
}
}
});

if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.formatter_STAR_ !== 'undefined')){
} else {
chord.format.formatter_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format34908 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format34908 = (function (_,meta34909){
this._ = _;
this.meta34909 = meta34909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
chord.format.t_chord$format34908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34910,meta34909__$1){
var self__ = this;
var _34910__$1 = this;
return (new chord.format.t_chord$format34908(self__._,meta34909__$1));
});

chord.format.t_chord$format34908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34910){
var self__ = this;
var _34910__$1 = this;
return self__.meta34909;
});

chord.format.t_chord$format34908.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format34908.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.call(null,obj);
});

chord.format.t_chord$format34908.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.call(null,s);
});

chord.format.t_chord$format34908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta34909","meta34909",-1112851749,null)], null);
});

chord.format.t_chord$format34908.cljs$lang$type = true;

chord.format.t_chord$format34908.cljs$lang$ctorStr = "chord.format/t_chord$format34908";

chord.format.t_chord$format34908.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"chord.format/t_chord$format34908");
});

/**
 * Positional factory function for chord.format/t_chord$format34908.
 */
chord.format.__GT_t_chord$format34908 = (function chord$format$__GT_t_chord$format34908(___$1,meta34909){
return (new chord.format.t_chord$format34908(___$1,meta34909));
});

}

return (new chord.format.t_chord$format34908(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format34911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format34911 = (function (_,meta34912){
this._ = _;
this.meta34912 = meta34912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
chord.format.t_chord$format34911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34913,meta34912__$1){
var self__ = this;
var _34913__$1 = this;
return (new chord.format.t_chord$format34911(self__._,meta34912__$1));
});

chord.format.t_chord$format34911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34913){
var self__ = this;
var _34913__$1 = this;
return self__.meta34912;
});

chord.format.t_chord$format34911.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format34911.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,obj));
});

chord.format.t_chord$format34911.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.call(null,JSON.parse(s));
});

chord.format.t_chord$format34911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta34912","meta34912",-1395141530,null)], null);
});

chord.format.t_chord$format34911.cljs$lang$type = true;

chord.format.t_chord$format34911.cljs$lang$ctorStr = "chord.format/t_chord$format34911";

chord.format.t_chord$format34911.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"chord.format/t_chord$format34911");
});

/**
 * Positional factory function for chord.format/t_chord$format34911.
 */
chord.format.__GT_t_chord$format34911 = (function chord$format$__GT_t_chord$format34911(___$1,meta34912){
return (new chord.format.t_chord$format34911(___$1,meta34912));
});

}

return (new chord.format.t_chord$format34911(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = chord.format.formatter_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)));
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format34914 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format34914 = (function (opts,json_formatter,meta34915){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta34915 = meta34915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
chord.format.t_chord$format34914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (json_formatter){
return (function (_34916,meta34915__$1){
var self__ = this;
var _34916__$1 = this;
return (new chord.format.t_chord$format34914(self__.opts,self__.json_formatter,meta34915__$1));
});})(json_formatter))
;

chord.format.t_chord$format34914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (json_formatter){
return (function (_34916){
var self__ = this;
var _34916__$1 = this;
return self__.meta34915;
});})(json_formatter))
;

chord.format.t_chord$format34914.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format34914.prototype.chord$format$ChordFormatter$freeze$arity$2 = ((function (json_formatter){
return (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze.call(null,self__.json_formatter,obj);
});})(json_formatter))
;

chord.format.t_chord$format34914.prototype.chord$format$ChordFormatter$thaw$arity$2 = ((function (json_formatter){
return (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys.call(null,chord.format.thaw.call(null,self__.json_formatter,s));
});})(json_formatter))
;

chord.format.t_chord$format34914.getBasis = ((function (json_formatter){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta34915","meta34915",1749391850,null)], null);
});})(json_formatter))
;

chord.format.t_chord$format34914.cljs$lang$type = true;

chord.format.t_chord$format34914.cljs$lang$ctorStr = "chord.format/t_chord$format34914";

chord.format.t_chord$format34914.cljs$lang$ctorPrWriter = ((function (json_formatter){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"chord.format/t_chord$format34914");
});})(json_formatter))
;

/**
 * Positional factory function for chord.format/t_chord$format34914.
 */
chord.format.__GT_t_chord$format34914 = ((function (json_formatter){
return (function chord$format$__GT_t_chord$format34914(opts__$1,json_formatter__$1,meta34915){
return (new chord.format.t_chord$format34914(opts__$1,json_formatter__$1,meta34915));
});})(json_formatter))
;

}

return (new chord.format.t_chord$format34914(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format34917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format34917 = (function (_,meta34918){
this._ = _;
this.meta34918 = meta34918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
chord.format.t_chord$format34917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34919,meta34918__$1){
var self__ = this;
var _34919__$1 = this;
return (new chord.format.t_chord$format34917(self__._,meta34918__$1));
});

chord.format.t_chord$format34917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34919){
var self__ = this;
var _34919__$1 = this;
return self__.meta34918;
});

chord.format.t_chord$format34917.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format34917.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),obj);
});

chord.format.t_chord$format34917.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
});

chord.format.t_chord$format34917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta34918","meta34918",1406142567,null)], null);
});

chord.format.t_chord$format34917.cljs$lang$type = true;

chord.format.t_chord$format34917.cljs$lang$ctorStr = "chord.format/t_chord$format34917";

chord.format.t_chord$format34917.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"chord.format/t_chord$format34917");
});

/**
 * Positional factory function for chord.format/t_chord$format34917.
 */
chord.format.__GT_t_chord$format34917 = (function chord$format$__GT_t_chord$format34917(___$1,meta34918){
return (new chord.format.t_chord$format34917(___$1,meta34918));
});

}

return (new chord.format.t_chord$format34917(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format34920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format34920 = (function (_,meta34921){
this._ = _;
this.meta34921 = meta34921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
chord.format.t_chord$format34920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34922,meta34921__$1){
var self__ = this;
var _34922__$1 = this;
return (new chord.format.t_chord$format34920(self__._,meta34921__$1));
});

chord.format.t_chord$format34920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34922){
var self__ = this;
var _34922__$1 = this;
return self__.meta34921;
});

chord.format.t_chord$format34920.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format34920.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
});

chord.format.t_chord$format34920.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
});

chord.format.t_chord$format34920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta34921","meta34921",815239243,null)], null);
});

chord.format.t_chord$format34920.cljs$lang$type = true;

chord.format.t_chord$format34920.cljs$lang$ctorStr = "chord.format/t_chord$format34920";

chord.format.t_chord$format34920.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"chord.format/t_chord$format34920");
});

/**
 * Positional factory function for chord.format/t_chord$format34920.
 */
chord.format.__GT_t_chord$format34920 = (function chord$format$__GT_t_chord$format34920(___$1,meta34921){
return (new chord.format.t_chord$format34920(___$1,meta34921));
});

}

return (new chord.format.t_chord$format34920(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
return chord.format.formatter_STAR_.call(null,(((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__34924,p__34925){
var map__34926 = p__34924;
var map__34926__$1 = (((((!((map__34926 == null))))?(((((map__34926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34926):map__34926);
var read_ch = cljs.core.get.call(null,map__34926__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__34926__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__34927 = p__34925;
var map__34927__$1 = (((((!((map__34927 == null))))?(((((map__34927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34927):map__34927);
var opts = map__34927__$1;
var format = cljs.core.get.call(null,map__34927__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter.call(null,(cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,((function (fmtr,map__34926,map__34926__$1,read_ch,write_ch,map__34927,map__34927__$1,opts,format){
return (function (p__34930){
var map__34931 = p__34930;
var map__34931__$1 = (((((!((map__34931 == null))))?(((((map__34931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34931):map__34931);
var message = cljs.core.get.call(null,map__34931__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{if(cljs.core.truth_(message)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw.call(null,fmtr,message)], null);
} else {
return null;
}
}catch (e34933){if((e34933 instanceof Error)){
var e = e34933;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e34933;

}
}});})(fmtr,map__34926,map__34926__$1,read_ch,write_ch,map__34927,map__34927__$1,opts,format))
,read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,((function (fmtr,map__34926,map__34926__$1,read_ch,write_ch,map__34927,map__34927__$1,opts,format){
return (function (p1__34923_SHARP_){
if(cljs.core.truth_(p1__34923_SHARP_)){
return chord.format.freeze.call(null,fmtr,p1__34923_SHARP_);
} else {
return null;
}
});})(fmtr,map__34926,map__34926__$1,read_ch,write_ch,map__34927,map__34927__$1,opts,format))
,write_ch)], null);
});

//# sourceMappingURL=format.js.map?rel=1554201124678
