var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,f,e){a instanceof String&&(a=String(a));for(var l=a.length,b=0;b<l;b++){var g=a[b];if(f.call(e,g,b,a))return{i:b,v:g}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,f,e){if(a==Array.prototype||a==Object.prototype)return a;a[f]=e.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var f=0;f<a.length;++f){var e=a[f];if(e&&e.Math==Math)return e}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,f){var e=$jscomp.propertyToPolyfillSymbol[f];if(null==e)return a[f];e=a[e];return void 0!==e?e:a[f]};
$jscomp.polyfill=function(a,f,e,l){f&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,f,e,l):$jscomp.polyfillUnisolated(a,f,e,l))};$jscomp.polyfillUnisolated=function(a,f,e,l){e=$jscomp.global;a=a.split(".");for(l=0;l<a.length-1;l++){var b=a[l];if(!(b in e))return;e=e[b]}a=a[a.length-1];l=e[a];f=f(l);f!=l&&null!=f&&$jscomp.defineProperty(e,a,{configurable:!0,writable:!0,value:f})};
$jscomp.polyfillIsolated=function(a,f,e,l){var b=a.split(".");a=1===b.length;l=b[0];l=!a&&l in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var g=0;g<b.length-1;g++){var c=b[g];if(!(c in l))return;l=l[c]}b=b[b.length-1];e=$jscomp.IS_SYMBOL_NATIVE&&"es6"===e?l[b]:null;f=f(e);null!=f&&(a?$jscomp.defineProperty($jscomp.polyfills,b,{configurable:!0,writable:!0,value:f}):f!==e&&($jscomp.propertyToPolyfillSymbol[b]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(b):$jscomp.POLYFILL_PREFIX+b,b=
$jscomp.propertyToPolyfillSymbol[b],$jscomp.defineProperty(l,b,{configurable:!0,writable:!0,value:f})))};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(f,e){return $jscomp.findInternal(this,f,e).v}},"es6","es3");$jscomp.arrayIteratorImpl=function(a){var f=0;return function(){return f<a.length?{done:!1,value:a[f++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.initSymbol=function(){};
$jscomp.polyfill("Symbol",function(a){if(a)return a;var f=function(b,g){this.$jscomp$symbol$id_=b;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:g})};f.prototype.toString=function(){return this.$jscomp$symbol$id_};var e=0,l=function(b){if(this instanceof l)throw new TypeError("Symbol is not a constructor");return new f("jscomp_symbol_"+(b||"")+"_"+e++,b)};return l},"es6","es3");$jscomp.initSymbolIterator=function(){};
$jscomp.polyfill("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var f="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),e=0;e<f.length;e++){var l=$jscomp.global[f[e]];"function"===typeof l&&"function"!=typeof l.prototype[a]&&$jscomp.defineProperty(l.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return a},"es6",
"es3");$jscomp.initSymbolAsyncIterator=function(){};$jscomp.iteratorPrototype=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a};$jscomp.iteratorFromArray=function(a,f){a instanceof String&&(a+="");var e=0,l=!1,b={next:function(){if(!l&&e<a.length){var g=e++;return{value:f(g,a[g]),done:!1}}l=!0;return{done:!0,value:void 0}}};b[Symbol.iterator]=function(){return b};return b};
$jscomp.polyfill("Array.prototype.values",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(f,e){return e})}},"es8","es3");
define(["jquery","jquery-ui-modules/widget","Eloom_AjaxLayeredNav/js/slider"],function(a,f,e){!function(b){if(b.support.touch="ontouchend"in document,b.support.touch){var g=function(h,k){if(!(1<h.originalEvent.touches.length)){h.preventDefault();var u=h.originalEvent.changedTouches[0],r=document.createEvent("MouseEvents");r.initMouseEvent(k,!0,!0,window,1,u.screenX,u.screenY,u.clientX,u.clientY,!1,!1,!1,!1,0,null);h.target.dispatchEvent(r)}},c,m=b.ui.mouse.prototype,d=m._mouseInit,n=m._mouseDestroy;
m._touchStart=function(h){!c&&this._mouseCapture(h.originalEvent.changedTouches[0])&&(c=!0,this._touchMoved=!1,g(h,"mouseover"),g(h,"mousemove"),g(h,"mousedown"))};m._touchMove=function(h){c&&(this._touchMoved=!0,g(h,"mousemove"))};m._touchEnd=function(h){c&&(g(h,"mouseup"),g(h,"mouseout"),this._touchMoved||g(h,"click"),c=!1)};m._mouseInit=function(){this.element.bind({touchstart:b.proxy(this,"_touchStart"),touchmove:b.proxy(this,"_touchMove"),touchend:b.proxy(this,"_touchEnd")});d.call(this)};m._mouseDestroy=
function(){this.element.unbind({touchstart:b.proxy(this,"_touchStart"),touchmove:b.proxy(this,"_touchMove"),touchend:b.proxy(this,"_touchEnd")});n.call(this)}}}(a);var l=a("body");a.widget("eloom.ajaxlayerednav",{options:{ajaxSelector:".swatch-option-link-layered, .block-content.filter-content a.action.remove, .filter-options-content a, a.action.clear.filter-clear, .toolbar-products .pages-items a, .sidebar #layered-filter-block .options .items .item a"},_create:function(){var b=this;this.isProcessing=
!1;this.initRange={};this._prepareHtml();this._attacheEvents();setTimeout(function(){b._modifyFunction()},500)},_getUrlParams:function(b){b=b.split("?");b=b[1]?b[1].split("&"):[];var g={},c,m=window.decodeURIComponent;for(c=0;c<b.length;c++){var d=b[c].split("=");g[m(d[0])]=void 0!==d[1]?m(d[1].replace(/\+/g,"%20")):""}return g},_prepareHtml:function(){var b=this;a("[data-role=filter-slider-container]").each(function(){var c=a(this),m=c.find("[data-role=filter-slider]"),d=c.data("filter"),n=c.find("[data-role=min-value]"),
h=c.find("[data-role=max-value]"),k,u;e({range:d.range,min:0,max:d.valuesRange.length-1,values:[1*d.min,1*d.max],slide:function(r,q){k=Math.round(q.values[0]/1);u=Math.round(q.values[1]/1);n.text(d.valuesRange[k].label);h.text(d.valuesRange[u].label)},stop:function(r,q){k=Math.round(q.values[0]/1);u=Math.round(q.values[1]/1);r=d.action;q=[];for(var t=k;t<=u;t++)q.push(d.valuesRange[t].value);q.length&&(q=q.join(","),r+=-1!=r.search(/\?/)?"&":"?",r+=d.code+"="+q);b.activeCode=d.code;b._ajaxLoad(r)}},
m)});a("[data-role=filter-dropdown]").on("change",function(){var c=a(this),m=c.val();b.activeCode=c.data("code");b._ajaxLoad(m)});a("[data-role=filter-checkbox-container] [type=checkbox]").on("change",function(){var c=a(this),m=c.parents("[data-role=filter-checkbox-container]").first(),d=m.data("filter"),n=[],h=d.action;d.multiSelect?m.find("[type=checkbox]:checked").each(function(){n.push(a(this).val())}):c.is(":checked")&&(n.push(c.val()),m.find("[type=checkbox]:checked").each(function(){var k=
a(this);k.is(c)||k.prop("checked",!1)}));n.length&&(n=n.join(","),h+=-1!=h.search(/\?/)?"&":"?",h+=d.code+"="+n);b.activeCode=d.code;b._ajaxLoad(h)});a("[data-role=rating-slider-container]").each(function(){var c=a(this),m=c.find("[data-role=rating-slider]"),d=c.find("[data-role=rating-form]").first(),n=d.data("code"),h=d.find("[name="+n+"]"),k=c.find("[data-role=text]").show(),u=c.find("[data-role=count]"),r=c.find("[data-role=slider-handle]").first(),q=c.find("[data-role=rating-bar]").first(),t=
parseInt(h.val()),v=c.data("filter"),z={};a.each(v.itemsData,function(p,w){z[w.value]=w});var A=function(p){var w=0<p?p:v.allText,y=100*parseInt(p)/5;r.text(w);h.val(p);q.css({width:y+"%"});z[p]?(k.text(z[p].label),u.show().text(z[p].count)):(k.text(v.allText),u.hide().text(""))};c={min:v.min,max:v.max,step:1,range:!1,value:t,create:function(){A(t)},slide:function(p,w){A(w.value)},stop:function(p,w){A(w.value);parseInt(w.value)!=t&&d.submit()}};d.on("submit",function(p){p.preventDefault();d.valid()&&
(t=parseInt(h.val()),p=d.attr("action"),0<t&&(p+=-1!=p.search(/\?/)?"&":"?",p+=n+"="+t),d.validation(),b.activeCode=n,b._ajaxLoad(p))});e(c,m)});var g=function(c,m,d){c=b._getUrlParams(c);return c[m]?(m=c[m].split("-"),m[d]?parseFloat(m[d]):parseFloat(m[0])):!1};a("[data-role=price-slider-container]").each(function(){var c=a(this).removeClass("hidden"),m=c.find("[data-role=price-slider]"),d=c.find("[data-role=min_price]"),n=c.find("[data-role=max_price]"),h=c.find("[data-role=price-form]").first(),
k=h.data("code"),u=h.find("[name="+k+"]"),r=g(document.URL,k,0),q=g(document.URL,k,1),t,v,z,A;c=c.data("filter");m.parents(".filter-options-item").first().addClass("has-prslider");if("string"==typeof c.minValue){var p=g(c.maxValue,k,1);c.maxValue=isNaN(p)?g(c.maxValue,k,0)+g(c.minValue,k,1):p;p=g(c.minValue,k,0);c.minValue=isNaN(p)?0:p}p={min:c.minValue,max:c.maxValue};b.initRange[k]?(b.initRange[k].min=Math.min(b.initRange[k].min,p.min),b.initRange[k].max=Math.max(b.initRange[k].max,p.max)):b.initRange[k]=
p;r=!1===r||isNaN(r)?b.initRange[k].min:r;q=!1===q||isNaN(q)?b.initRange[k].max:q;b.initRange[k].max<q&&(b.initRange[k].max=q);var w=parseFloat(c.rate),y=function(x){return Math.round(parseFloat(x)*w)};d.val(y(r));n.val(y(q));u.val(r+"-"+q);var C=r,D=q;c={range:!0,min:100*b.initRange[k].min,max:100*b.initRange[k].max,values:[100*r,100*q],create:function(){var x=a(".ui-slider-handle",m).html('<span class="ph"><span class="pval"></span></span>');z=x.first().find(".pval").text(r*w);A=x.last().find(".pval").text(q*
w)},slide:function(x,B){t=B.values[0]/100;v=B.values[1]/100;d.val(y(t));n.val(y(v));z.text(y(t));A.text(y(v));u.val(t+"-"+v)},stop:function(x,B){t=B.values[0]/100;v=B.values[1]/100;d.val(y(t));n.val(y(v));u.val(t+"-"+v);t==C&&v==D||h.submit()}};h.on("submit",function(x){x.preventDefault();h.valid()&&(t=parseFloat(d.val())/w,v=parseFloat(n.val())/w,u.val(t+"-"+v),x=h.attr("action"),x+=-1!=x.search(/\?/)?"&":"?",x+=k+"="+u.val(),h.validation(),b.activeCode=k,b._ajaxLoad(x))});e(c,m)})},_modifyFunction:function(){var b=
this;a("#layered-filter-block").off("dimensionsChanged");a(".toolbar.toolbar-products").each(function(){var g=a(this).data("mageProductListToolbarForm");g&&(g.changeUrl=function(c,m,d){if(b.isProcessing)return!0;var n=this.options.url.split("?"),h=n[0];n[1]&&n[1].split("&");n=b._getUrlParams(this.options.url);n[c]=m;m==d&&delete n[c];n=a.param(n);b._ajaxLoad(h+(n.length?"?"+n:""),!0)})});setTimeout(function(){l.trigger("layeredNavLoaded")},500)},_attacheEvents:function(){var b=this;a(this.options.ajaxSelector).on("click",
function(g){g.preventDefault();g=a(this);b._ajaxLoad(g.attr("href"),g.parents(".toolbar-products").length)})},_ajaxLoad:function(b,g){var c=this;c.isProcessing=!0;if(b&&0!=b.search("javascript:")&&0!=b.search("#")){g||(g=!1);var m=l.hasClass("filter-active");a.ajax({url:b,type:"GET",data:{ajax_nav:1},cache:!0,showLoader:!0,success:function(d){d.catalog_leftnav&&(a(".block.filter").first().replaceWith(d.catalog_leftnav),m&&(a(".block.filter").first().addClass("active"),l.addClass("filter-active"),
setTimeout(function(){a("#layered-filter-block").data("mageCollapsible")._open()},1E3)));if(d.category_products){var n=a("#product-list-container").html(d.category_products);g&&a(window).scrollTop(n.offset().top-60)}d.page_main_title&&a(".page-title-wrapper").first().replaceWith(d.page_main_title);d.updated_url?window.history.replaceState(d.updated_url,document.title,d.updated_url):window.history.replaceState(b,document.title,b);l.trigger("contentUpdated");c._prepareHtml();c._attacheEvents();a(".swatch-option-tooltip:visible").remove();
if(a(".toolbar.toolbar-products").length){var h=!1,k=0;h=setInterval(function(){if("undefined"!=typeof a(".toolbar.toolbar-products").first().data("mageProductListToolbarForm")||20==k)clearInterval(h),c._modifyFunction();k++},100)}768<=window.innerWidth&&setTimeout(function(){c.activeCode&&a(".filter-options-item").each(function(u,r){if(a(this).hasClass(c.activeCode))return a("#narrow-by-list").data("mageAccordion")?a("#narrow-by-list").data("mageAccordion").activate(u):null,!1})},100)}}).always(function(){c.isProcessing=
!1})}}});return a.eloom.ajaxlayerednav});
