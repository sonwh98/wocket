// Compiled by ClojureScript 1.10.520 {}
goog.provide('com.kaicode.teleport');
goog.require('cljs.core');
goog.require('cognitect.transit');
com.kaicode.teleport.serialize = (function com$kaicode$teleport$serialize(val){
var w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.write.call(null,w,val);
});
com.kaicode.teleport.deserialize = (function com$kaicode$teleport$deserialize(a_string){
var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 1, ["f",(function (value){
return (new Number(value));
})], null)], null));
return cognitect.transit.read.call(null,r,a_string);
});

//# sourceMappingURL=teleport.js.map?rel=1554200935048
