webpackJsonp([28],{1063:function(t,e,n){var r=n(958);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(301)("49ba6564",r,!0)},1226:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"holder"},[t._m(0),t._v(" "),null!==t.data?n("div",{staticClass:"results"},[n("table",{staticClass:"table table-bordered table-hover table-responsive",staticStyle:{"margin-top":"25px"}},[t._m(1),t._v(" "),n("tbody",t._l(t.data,function(e,r){return null!==t.data?n("tr",{staticClass:"item"},[n("td",[t._v(t._s(e.order_date))]),t._v(" "),n("td",[t._v(t._s(e.order_number))]),t._v(" "),n("td",[null!==e.account?n("label",[t._v(t._s(e.account.username))]):t._e()]),t._v(" "),n("td",[t._v(t._s(e.total))]),t._v(" "),n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.printing_status,expression:"item.printing_status"}],staticClass:"form-control",on:{change:[function(n){var r=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"printing_status",n.target.multiple?r:r[0])},function(n){t.updateStatus(e)}]}},[n("option",{attrs:{value:"added"}},[t._v("Added")]),t._v(" "),n("option",{attrs:{value:"printing"}},[t._v("Printing")]),t._v(" "),n("option",{attrs:{value:"shipping"}},[t._v("Shipping")]),t._v(" "),n("option",{attrs:{value:"completed"}},[t._v("Completed")])])]),t._v(" "),n("td",[n("i",{staticClass:"fa fa-shopping-cart text-primary",on:{click:function(n){t.redirect("/order_items/"+e.order_number)}}})])]):t._e()}))])]):t._e(),t._v(" "),null===t.data?n("empty",{attrs:{title:"Looks like you don't have order right now!",action:"Add your products so that customers can start engaging your business."}}):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("i",{staticClass:"fa fa-shopping-cart text-primary action-link",staticStyle:{"padding-right":"10px"}}),n("label",{staticClass:"text-primary"},[t._v("My Orders")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[t._v("Date")]),t._v(" "),n("td",[t._v("Order Number")]),t._v(" "),n("td",[t._v("Customer")]),t._v(" "),n("td",[t._v("Amount")]),t._v(" "),n("td",[t._v("Status")]),t._v(" "),n("td",[t._v("Action")])])])}]}},337:function(t,e,n){n(1063);var r=n(113)(n(838),n(1226),null,null);t.exports=r.exports},351:function(t,e,n){"use strict";function r(t){return"[object Array]"===b.call(t)}function o(t){return"[object ArrayBuffer]"===b.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function s(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function a(t){return"string"==typeof t}function u(t){return"number"==typeof t}function c(t){return void 0===t}function f(t){return null!==t&&"object"==typeof t}function p(t){return"[object Date]"===b.call(t)}function l(t){return"[object File]"===b.call(t)}function d(t){return"[object Blob]"===b.call(t)}function h(t){return"[object Function]"===b.call(t)}function m(t){return f(t)&&h(t.pipe)}function v(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function A(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function y(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function x(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=x(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)y(arguments[n],t);return e}function C(t,e,n){return y(e,function(e,r){t[r]=n&&"function"==typeof e?w(e,n):e}),t}var w=n(360),_=n(381),b=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:o,isBuffer:_,isFormData:i,isArrayBufferView:s,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:p,isFile:l,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:v,isStandardBrowserEnv:g,forEach:y,merge:x,extend:C,trim:A}},353:function(t,e,n){t.exports=n(364)},355:function(t,e,n){"use strict";(function(e){function r(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=n(351),i=n(378),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(356):void 0!==e&&(t=n(356)),t}(),transformRequest:[function(t,e){return i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){a.headers[t]={}}),o.forEach(["post","put","patch"],function(t){a.headers[t]=o.merge(s)}),t.exports=a}).call(e,n(114))},356:function(t,e,n){"use strict";var r=n(351),o=n(370),i=n(373),s=n(379),a=n(377),u=n(359),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(372);t.exports=function(t){return new Promise(function(e,f){var p=t.data,l=t.headers;r.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(t.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var v=t.auth.username||"",A=t.auth.password||"";l.Authorization="Basic "+c(v+":"+A)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?d.response:d.responseText,i={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};o(e,f,i),d=null}},d.onerror=function(){f(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){f(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var g=n(375),y=(t.withCredentials||a(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;y&&(l[t.xsrfHeaderName]=y)}if("setRequestHeader"in d&&r.forEach(l,function(t,e){void 0===p&&"content-type"===e.toLowerCase()?delete l[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===p&&(p=null),d.send(p)})}},357:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},358:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},359:function(t,e,n){"use strict";var r=n(369);t.exports=function(t,e,n,o,i){var s=new Error(t);return r(s,e,n,o,i)}},360:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},364:function(t,e,n){"use strict";function r(t){var e=new s(t),n=i(s.prototype.request,e);return o.extend(n,s.prototype,e),o.extend(n,e),n}var o=n(351),i=n(360),s=n(366),a=n(355),u=r(a);u.Axios=s,u.create=function(t){return r(o.merge(a,t))},u.Cancel=n(357),u.CancelToken=n(365),u.isCancel=n(358),u.all=function(t){return Promise.all(t)},u.spread=n(380),t.exports=u,t.exports.default=u},365:function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(357);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},366:function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var o=n(355),i=n(351),s=n(367),a=n(368);r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase();var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},367:function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(351);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},368:function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(351),i=n(371),s=n(358),a=n(355),u=n(376),c=n(374);t.exports=function(t){return r(t),t.baseURL&&!u(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return r(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(r(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},369:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},370:function(t,e,n){"use strict";var r=n(359);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},371:function(t,e,n){"use strict";var r=n(351);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},372:function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function o(t){for(var e,n,o=String(t),s="",a=0,u=i;o.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&e>>8-a%1*8)){if((n=o.charCodeAt(a+=.75))>255)throw new r;e=e<<8|n}return s}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=o},373:function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(351);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var s=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(r(e)+"="+r(t))}))}),i=s.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},374:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},375:function(t,e,n){"use strict";var r=n(351);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},376:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},377:function(t,e,n){"use strict";var r=n(351);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},378:function(t,e,n){"use strict";var r=n(351);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},379:function(t,e,n){"use strict";var r=n(351),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,s={};return t?(r.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}}),s):s}},380:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},381:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},386:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),o=n(33),i=n(27),s=n(353);n.n(s);e.default={data:function(){return{user:o.a.user,config:i.default}},props:["title","action"],methods:{redirect:function(t){r.a.push(t)}}}},387:function(t,e,n){e=t.exports=n(300)(),e.push([t.i,".empty{width:100%;margin-top:25px;margin-bottom:25px;float:left;min-height:450px;overflow-y:hidden;text-align:center;border:1px solid #ddd}.empty i{font-size:100px;padding-top:150px}.empty span{width:100%;float:left}.empty .description{font-size:24px}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/empty/Empty.vue"],names:[],mappings:"AACA,OACE,WAAY,AACZ,gBAAiB,AACjB,mBAAoB,AACpB,WAAY,AACZ,iBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AACnB,qBAAuB,CACxB,AACD,SACE,gBAAiB,AACjB,iBAAmB,CACpB,AACD,YACE,WAAY,AACZ,UAAY,CACb,AACD,oBACE,cAAgB,CACjB",file:"Empty.vue",sourcesContent:["\n.empty{\n  width: 100%;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  float: left;\n  min-height: 450px;\n  overflow-y: hidden;\n  text-align: center;\n  border: solid 1px #ddd;\n}\n.empty i{\n  font-size: 100px;\n  padding-top: 150px;\n}\n.empty span{\n  width: 100%;\n  float: left;\n}\n.empty .description{\n  font-size: 24px;\n}\n"],sourceRoot:""}])},388:function(t,e,n){var r=n(387);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(301)("883a3f96",r,!0)},389:function(t,e,n){n(388);var r=n(113)(n(386),n(390),null,null);t.exports=r.exports},390:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"empty"},[n("i",{staticClass:"fas fa-hourglass-start text-danger"}),t._v(" "),n("span",{staticClass:"description text-danger"},[n("b",[t._v(t._s(t.title))])]),t._v(" "),n("span",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.action))])])},staticRenderFns:[]}},838:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),o=n(33),i=n(27),s=n(353);n.n(s);e.default={mounted:function(){o.a.checkPlan(),this.retrieve()},data:function(){return{user:o.a.user,config:i.default,errorMessage:null,data:null}},components:{empty:n(389)},methods:{redirect:function(t){r.a.push(t)},retrieve:function(){var t=this,e={condition:[{value:this.user.userID,column:"partner",clause:"="},{value:"completed",column:"status",clause:"="}]};$("#loading").css({display:"block"}),this.APIRequest("orders/retrieve_orders",e).then(function(e){$("#loading").css({display:"none"}),e.data.length>0&&(t.data=e.data)})},updateStatus:function(t){var e=this,n={id:t.id,printing_status:t.printing_status};this.APIRequest("checkouts/update_status",n).then(function(t){!0===t.data&&e.retrieve()})}}}},958:function(t,e,n){e=t.exports=n(300)(),e.push([t.i,".holder{width:98%;float:left;margin-right:2%;margin-bottom:50px}.title{font-size:16px}.results,.title{width:100%;float:left}.item:hover{cursor:pointer}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/order/Orders.vue"],names:[],mappings:"AACA,QACE,UAAW,AACX,WAAY,AACZ,gBAAiB,AACjB,kBAAoB,CACrB,AACD,OAGE,cAAgB,CACjB,AACD,gBAJE,WAAY,AACZ,UAAY,CAMb,AACD,YACE,cAAgB,CACjB",file:"Orders.vue",sourcesContent:["\n.holder{  \n  width: 98%;\n  float: left;\n  margin-right: 2%;\n  margin-bottom: 50px;\n}\n.title{\n  width: 100%;\n  float: left;\n  font-size: 16px;\n}\n.results{\n  width: 100%;\n  float: left;\n}\n.item:hover{\n  cursor: pointer;\n}\n\n"],sourceRoot:""}])}});
//# sourceMappingURL=28.5749116619ffd743b41a.js.map