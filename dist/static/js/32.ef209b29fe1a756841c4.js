webpackJsonp([32],{1148:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-holder"},[n("div",{staticClass:"alert alert-success"},[e._v("\n      Hi "),n("b",[e._v(e._s(e.user.username)+"!")]),e._v(" Welcome to our import profiles. This will allow you to quickly sync or upload multiple profile.\n    ")]),e._v(" "),null!==e.errorMessage?n("div",{staticClass:"alert alert-danger"},[n("b",[e._v("Opps! ")]),e._v(e._s(e.errorMessage))]):e._e(),e._v(" "),null!==e.data?n("div",{staticClass:"item"},[n("div",{staticClass:"file bordered-hover-primary",on:{click:function(t){e.open(e.data.sheet)}}},[n("i",{staticClass:"far fa-file-excel text-green"}),e._v(" "),n("label",[e._v(e._s(e.data.title))])])]):e._e(),e._v(" "),null!==e.data?n("div",{staticClass:"item"},[e._v("\n      or\n    ")]):e._e(),e._v(" "),n("div",{staticClass:"item"},[n("button",{staticClass:"btn btn-primary custom-button",on:{click:function(t){e.createNewGSheet()}}},[e._v("Create New Google Sheet")])]),e._v(" "),n("div",{staticClass:"item"},[null!==e.data?n("button",{staticClass:"btn btn-primary",on:{click:function(t){e.sync(e.data.sheet)}}},[e._v("Sync")]):e._e()]),e._v(" "),null!==e.profiles?n("div",{staticClass:"item",staticStyle:{"margin-bottom":"100px"}},[n("table",{staticClass:"table table-bordered table-hover"},[e._m(0),e._v(" "),n("tbody",e._l(e.profiles,function(t,r){return n("tr",{class:{"bg-danger text-white":"created"!==t.status&&"updated"!==t.status}},[n("td",[e._v(e._s(t.email))]),e._v(" "),n("td",{staticStyle:{"text-transform":"capitalize"}},[e._v(e._s(t.last_name))]),e._v(" "),n("td",{staticStyle:{"text-transform":"capitalize"}},[e._v(e._s(t.first_name))]),e._v(" "),n("td",{class:{"text-primary":"created"===t.status,"text-danger":"updated"===t.status},staticStyle:{"text-transform":"capitalize"}},[e._v(e._s(t.status))])])}))])]):e._e()])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("td",[e._v("Email")]),e._v(" "),n("td",[e._v("Last Name")]),e._v(" "),n("td",[e._v("First Name")]),e._v(" "),n("td",[e._v("Status")])])])}]}},344:function(e,t,n){n(985);var r=n(113)(n(857),n(1148),"data-v-02c863ff",null);e.exports=r.exports},351:function(e,t,n){"use strict";function r(e){return"[object Array]"===_.call(e)}function o(e){return"[object ArrayBuffer]"===_.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===_.call(e)}function d(e){return"[object File]"===_.call(e)}function p(e){return"[object Blob]"===_.call(e)}function h(e){return"[object Function]"===_.call(e)}function m(e){return f(e)&&h(e.pipe)}function v(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function A(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function y(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function w(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)y(arguments[n],e);return t}function x(e,t,n){return y(t,function(t,r){e[r]=n&&"function"==typeof t?C(t,n):t}),e}var C=n(360),b=n(381),_=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:b,isFormData:i,isArrayBufferView:s,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:l,isFile:d,isBlob:p,isFunction:h,isStream:m,isURLSearchParams:v,isStandardBrowserEnv:A,forEach:y,merge:w,extend:x,trim:g}},353:function(e,t,n){e.exports=n(364)},355:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(351),i=n(378),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(356):void 0!==t&&(e=n(356)),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(s)}),e.exports=a}).call(t,n(114))},356:function(e,t,n){"use strict";var r=n(351),o=n(370),i=n(373),s=n(379),a=n(377),u=n(359),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(372);e.exports=function(e){return new Promise(function(t,f){var l=e.data,d=e.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(e.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var v=e.auth.username||"",g=e.auth.password||"";d.Authorization="Basic "+c(v+":"+g)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,i={data:r,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};o(t,f,i),p=null}},p.onerror=function(){f(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var A=n(375),y=(e.withCredentials||a(e.url))&&e.xsrfCookieName?A.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&r.forEach(d,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),f(e),p=null)}),void 0===l&&(l=null),p.send(l)})}},357:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},358:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},359:function(e,t,n){"use strict";var r=n(369);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},360:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},364:function(e,t,n){"use strict";function r(e){var t=new s(e),n=i(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var o=n(351),i=n(360),s=n(366),a=n(355),u=r(a);u.Axios=s,u.create=function(e){return r(o.merge(a,e))},u.Cancel=n(357),u.CancelToken=n(365),u.isCancel=n(358),u.all=function(e){return Promise.all(e)},u.spread=n(380),e.exports=u,e.exports.default=u},365:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(357);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},366:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(355),i=n(351),s=n(367),a=n(368);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase();var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},367:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(351);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},368:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(351),i=n(371),s=n(358),a=n(355),u=n(376),c=n(374);e.exports=function(e){return r(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},369:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},370:function(e,t,n){"use strict";var r=n(359);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},371:function(e,t,n){"use strict";var r=n(351);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},372:function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),s="",a=0,u=i;o.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&t>>8-a%1*8)){if((n=o.charCodeAt(a+=.75))>255)throw new r;t=t<<8|n}return s}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},373:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(351);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},374:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},375:function(e,t,n){"use strict";var r=n(351);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},376:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},377:function(e,t,n){"use strict";var r=n(351);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},378:function(e,t,n){"use strict";var r=n(351);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},379:function(e,t,n){"use strict";var r=n(351),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}}),s):s}},380:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},381:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},857:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(19),o=n(33),i=n(27),s=n(353);n.n(s);t.default={mounted:function(){o.a.checkPlan(),this.retrieve()},data:function(){return{user:o.a.user,config:i.default,google:o.a.google,errorMessage:null,data:null,profiles:null,profileHeader:null}},components:{},methods:{redirect:function(e){r.a.push(e)},retrieve:function(){var e=this,t={condition:[{value:this.user.userID,column:"account_id",clause:"="}]};this.APIRequest("account_gsheets/retrieve",t).then(function(t){t.data.length>0?e.data=t.data[0]:e.data=null})},createNewGSheet:function(){var e=this,t={code:o.a.google.code,scope:o.a.google.scope,account_id:this.user.userID};this.APIRequest("gsheets/create_file",t).then(function(t){e.errorMessage=t.error,null!==t.error&&setTimeout(function(){e.auth()},2e3)})},open:function(e){var t="https://docs.google.com/spreadsheets/d/"+e;window.open(t,"_blank")},sync:function(e){var t=this,n={code:o.a.google.code,scope:o.a.google.scope,sheet:e,account_id:this.user.userID};$("#loading").css({display:"block"}),this.APIRequest("gsheets/read_file",n).then(function(e){$("#loading").css({display:"none"}),t.profileHeader=e.dataHeader,t.profiles=e.data,t.errorMessage=e.error,null!==e.error&&setTimeout(function(){t.auth()},2e3)})},auth:function(){$("#loading").css({display:"block"});var e={GOOGLE_URL:this.config.GOOGLE_URL};this.APIRequest("gsheets/auth",e).then(function(e){$("#loading").css({display:"none"}),null!==e.redirect&&(window.location.href=e.redirect)})}}}},880:function(e,t,n){t=e.exports=n(300)(),t.push([e.i,".list-holder[data-v-02c863ff]{width:98%;float:left;margin-right:2%;margin-top:25px}.item[data-v-02c863ff]{width:100%;float:left;margin-bottom:10px}.file[data-v-02c863ff]{height:200px;width:175px;float:left;text-align:center;border:1px solid #ddd}.file i[data-v-02c863ff]{font-size:75px;line-height:170px;width:100%;float:left}.file label[data-v-02c863ff]{float:left;text-align:center;width:100%}.file[data-v-02c863ff]:hover,.file label[data-v-02c863ff]:hover{cursor:pointer}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/profiles/Import.vue"],names:[],mappings:"AACA,8BACE,UAAW,AACX,WAAY,AACZ,gBAAiB,AACjB,eAAiB,CAClB,AACD,uBACE,WAAY,AACZ,WAAY,AACZ,kBAAoB,CACrB,AACD,uBACE,aAAc,AACd,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,qBAAuB,CACxB,AACD,yBACE,eAAgB,AAChB,kBAAmB,AACnB,WAAY,AACZ,UAAY,CACb,AACD,6BACE,WAAY,AACZ,kBAAmB,AACnB,UAAY,CACb,AACD,gEACE,cAAgB,CACjB",file:"Import.vue",sourcesContent:["\n.list-holder[data-v-02c863ff]{\r\n  width: 98%;\r\n  float: left;\r\n  margin-right: 2%;\r\n  margin-top: 25px;\n}\n.item[data-v-02c863ff]{\r\n  width: 100%;\r\n  float: left;\r\n  margin-bottom: 10px;\n}\n.file[data-v-02c863ff]{\r\n  height: 200px;\r\n  width: 175px;\r\n  float: left;\r\n  text-align: center;\r\n  border: solid 1px #ddd;\n}\n.file i[data-v-02c863ff]{\r\n  font-size: 75px;\r\n  line-height: 170px;\r\n  width: 100%;\r\n  float: left;\n}\n.file label[data-v-02c863ff]{\r\n  float: left;\r\n  text-align: center;\r\n  width: 100%;\n}\n.file[data-v-02c863ff]:hover, .file label[data-v-02c863ff]:hover{\r\n  cursor: pointer;\n}\r\n"],sourceRoot:""}])},985:function(e,t,n){var r=n(880);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(301)("c87788ae",r,!0)}});
//# sourceMappingURL=32.ef209b29fe1a756841c4.js.map