webpackJsonp([31],{1061:function(t,e,n){var r=n(956);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(301)("08719517",r,!0)},1224:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"employee-holder"},[n("create")],1)},staticRenderFns:[]}},306:function(t,e,n){n(1061);var r=n(113)(n(783),n(1224),"data-v-91437432",null);t.exports=r.exports},351:function(t,e,n){"use strict";function r(t){return"[object Array]"===x.call(t)}function o(t){return"[object ArrayBuffer]"===x.call(t)}function a(t){return"undefined"!=typeof FormData&&t instanceof FormData}function i(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function s(t){return"string"==typeof t}function u(t){return"number"==typeof t}function c(t){return void 0===t}function l(t){return null!==t&&"object"==typeof t}function f(t){return"[object Date]"===x.call(t)}function p(t){return"[object File]"===x.call(t)}function d(t){return"[object Blob]"===x.call(t)}function m(t){return"[object Function]"===x.call(t)}function h(t){return l(t)&&m(t.pipe)}function v(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function g(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function C(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.call(null,t[a],a,t)}function b(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=b(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)C(arguments[n],t);return e}function w(t,e,n){return C(e,function(e,r){t[r]=n&&"function"==typeof e?A(e,n):e}),t}var A=n(360),_=n(381),x=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:o,isBuffer:_,isFormData:a,isArrayBufferView:i,isString:s,isNumber:u,isObject:l,isUndefined:c,isDate:f,isFile:p,isBlob:d,isFunction:m,isStream:h,isURLSearchParams:v,isStandardBrowserEnv:y,forEach:C,merge:b,extend:w,trim:g}},353:function(t,e,n){t.exports=n(364)},355:function(t,e,n){"use strict";(function(e){function r(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=n(351),a=n(378),i={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(356):void 0!==e&&(t=n(356)),t}(),transformRequest:[function(t,e){return a(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){s.headers[t]={}}),o.forEach(["post","put","patch"],function(t){s.headers[t]=o.merge(i)}),t.exports=s}).call(e,n(114))},356:function(t,e,n){"use strict";var r=n(351),o=n(370),a=n(373),i=n(379),s=n(377),u=n(359),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(372);t.exports=function(t){return new Promise(function(e,l){var f=t.data,p=t.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest,m="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(t.url)||(d=new window.XDomainRequest,m="onload",h=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var v=t.auth.username||"",g=t.auth.password||"";p.Authorization="Basic "+c(v+":"+g)}if(d.open(t.method.toUpperCase(),a(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[m]=function(){if(d&&(4===d.readyState||h)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?d.response:d.responseText,a={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};o(e,l,a),d=null}},d.onerror=function(){l(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){l(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=n(375),C=(t.withCredentials||s(t.url))&&t.xsrfCookieName?y.read(t.xsrfCookieName):void 0;C&&(p[t.xsrfHeaderName]=C)}if("setRequestHeader"in d&&r.forEach(p,function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),l(t),d=null)}),void 0===f&&(f=null),d.send(f)})}},357:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},358:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},359:function(t,e,n){"use strict";var r=n(369);t.exports=function(t,e,n,o,a){var i=new Error(t);return r(i,e,n,o,a)}},360:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},364:function(t,e,n){"use strict";function r(t){var e=new i(t),n=a(i.prototype.request,e);return o.extend(n,i.prototype,e),o.extend(n,e),n}var o=n(351),a=n(360),i=n(366),s=n(355),u=r(s);u.Axios=i,u.create=function(t){return r(o.merge(s,t))},u.Cancel=n(357),u.CancelToken=n(365),u.isCancel=n(358),u.all=function(t){return Promise.all(t)},u.spread=n(380),t.exports=u,t.exports.default=u},365:function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(357);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},366:function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new i,response:new i}}var o=n(355),a=n(351),i=n(367),s=n(368);r.prototype.request=function(t){"string"==typeof t&&(t=a.merge({url:arguments[0]},arguments[1])),t=a.merge(o,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase();var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},a.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(a.merge(n||{},{method:t,url:e}))}}),a.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(a.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},367:function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(351);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},368:function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(351),a=n(371),i=n(358),s=n(355),u=n(376),c=n(374);t.exports=function(t){return r(t),t.baseURL&&!u(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=a(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return r(t),e.data=a(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(r(t),e&&e.response&&(e.response.data=a(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},369:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},370:function(t,e,n){"use strict";var r=n(359);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},371:function(t,e,n){"use strict";var r=n(351);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},372:function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function o(t){for(var e,n,o=String(t),i="",s=0,u=a;o.charAt(0|s)||(u="=",s%1);i+=u.charAt(63&e>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new r;e=e<<8|n}return i}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=o},373:function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(351);t.exports=function(t,e,n){if(!e)return t;var a;if(n)a=n(e);else if(o.isURLSearchParams(e))a=e.toString();else{var i=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),i.push(r(e)+"="+r(t))}))}),a=i.join("&")}return a&&(t+=(-1===t.indexOf("?")?"?":"&")+a),t}},374:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},375:function(t,e,n){"use strict";var r=n(351);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,a,i){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},376:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},377:function(t,e,n){"use strict";var r=n(351);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},378:function(t,e,n){"use strict";var r=n(351);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},379:function(t,e,n){"use strict";var r=n(351),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,a,i={};return t?(r.forEach(t.split("\n"),function(t){if(a=t.indexOf(":"),e=r.trim(t.substr(0,a)).toLowerCase(),n=r.trim(t.substr(a+1)),e){if(i[e]&&o.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([n]):i[e]?i[e]+", "+n:n}}),i):i}},380:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},381:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},696:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),o=n(33),a=n(27),i=n(353),s=n.n(i);e.default={data:function(){return{user:o.a.user,config:a.default,errorMessage:null,templates:null,newEntry:{front_template:null,back_template:null,account_id:null,columns:null,status:"not_verified"},columns:null,file:null,fileIndex:null,sync:!0}},methods:{redirect:function(t){r.a.push(t)},modal:function(){this.retrieveTemplates()},hideModal:function(){$("#createEmployeeModal").modal("hide")},retrieveTemplates:function(){var t=this,e={condition:[{value:this.user.userID,column:"account_id",clause:"="}]};this.APIRequest("templates/retrieve_templates_only",e).then(function(e){e.data.length>0&&(t.templates=e.data,$("#createEmployeeModal").modal({backdrop:"static",show:!0,keyboard:!1}))})},reset:function(){this.sync=!0},getColumns:function(){var t=this,e={front:this.newEntry.front_template?this.newEntry.front_template:null,back:this.newEntry.back_template?this.newEntry.back_template:null};this.APIRequest("objects/retrieve_dynamic_without_attributes",e).done(function(e){t.sync=!0,e.data.length>0?t.columns=e.data:t.columns=null})},addNewColumn:function(){var t={employee_id:null,type:"text",column:null,value:null,delete:!0};null===this.columns&&(this.columns=[]),this.columns.push(t)},removeColumn:function(t){this.columns.splice(t,1)},addImage:function(t,e){$("#"+t)[0].click(),this.fileIndex=e},createFile:function(t){(new FileReader).readAsDataURL(event.target.files[0]),this.upload()},setUpFileUpload:function(t){var e=t.target.files||t.dataTransfer.files;if(!e.length)return!1;this.file=e[0],this.createFile(e[0])},upload:function(){var t=this,e=new FormData;e.append("file",this.file),e.append("file_url",this.file.name),e.append("account_id",this.user.userID),$("#loading").css({display:"block"}),s.a.post(this.config.BACKEND_URL+"/employees/upload",e).then(function(e){$("#loading").css({display:"none"}),null!==e.data&&(t.columns[t.fileIndex].value=e.data.data,t.fileIndex=null)})},submit:function(){var t=this;if(this.newEntry.account_id=this.user.userID,this.validateColumns()){this.newEntry.columns=this.columns;var e={employee:this.newEntry};$("#loading").css({display:"block"}),this.APIRequest("employees/create",e).then(function(e){$("#loading").css({display:"none"}),null!==e.data&&(t.columns=null,t.newEntry.front_template=null,t.newEntry.back_template=null,t.newEntry.account_id=null,t.newEntry.columns=null,t.$parent.retrieve(),$("#createEmployeeModal").modal("hide"))})}},validateColumns:function(){return!0}}}},700:function(t,e,n){e=t.exports=n(300)(),e.push([t.i,".form-control[data-v-0822e7b4]{height:45px!important}.input-group[data-v-0822e7b4]{margin-bottom:10px!important}.input-group-addon[data-v-0822e7b4]{width:100px!important;background:#22b173!important;color:#fff!important}.upload-image[data-v-0822e7b4]{height:45px}.upload-image[data-v-0822e7b4]:hover{cursor:pointer}.upload-image input[data-v-0822e7b4]{display:none}.preview[data-v-0822e7b4]{height:100px;width:100%;float:left}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/entry/Create.vue"],names:[],mappings:"AACA,+BACE,qBAAwB,CACzB,AACD,8BACE,4BAA+B,CAChC,AACD,oCACE,sBAAwB,AACxB,6BAA+B,AAC/B,oBAAuB,CACxB,AACD,+BACE,WAAa,CACd,AACD,qCACE,cAAgB,CACjB,AACD,qCACE,YAAc,CACf,AACD,0BACE,aAAc,AACd,WAAY,AACZ,UAAY,CACb",file:"Create.vue",sourcesContent:["\n.form-control[data-v-0822e7b4]{\r\n  height: 45px !important;\n}\n.input-group[data-v-0822e7b4]{\r\n  margin-bottom: 10px !important;\n}\n.input-group-addon[data-v-0822e7b4]{\r\n  width: 100px !important;\r\n  background: #22b173 !important;\r\n  color: #fff !important;\n}\n.upload-image[data-v-0822e7b4]{\r\n  height: 45px;\n}\n.upload-image[data-v-0822e7b4]:hover{\r\n  cursor: pointer;\n}\n.upload-image input[data-v-0822e7b4]{\r\n  display: none;\n}\n.preview[data-v-0822e7b4]{\r\n  height: 100px;\r\n  width: 100%;\r\n  float: left;\n}\r\n"],sourceRoot:""}])},718:function(t,e,n){var r=n(700);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(301)("265cb44c",r,!0)},750:function(t,e,n){n(718);var r=n(113)(n(696),n(754),"data-v-0822e7b4",null);t.exports=r.exports},754:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn btn-primary pull-right",on:{click:function(e){t.modal()}}},[n("i",{staticClass:"fa fa-plus"}),t._v(" New Entry")]),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"createEmployeeModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-md",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header bg-primary"},[n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Add Entry")]),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){t.hideModal()}}},[n("span",{staticClass:"text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"modal-body"},[null!==t.errorMessage?n("span",{staticClass:"text-danger text-center"},[n("label",[n("b",[t._v("Opps! ")]),t._v(t._s(t.errorMessage))])]):t._e(),t._v(" "),null!==t.errorMessage?n("br"):t._e(),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Front Template")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.newEntry.front_template,expression:"newEntry.front_template"}],staticClass:"form-control",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.newEntry,"front_template",e.target.multiple?n:n[0])},function(e){t.getColumns()}]}},t._l(t.templates,function(e,r){return null!==t.templates&&"front"===e.settings?n("option",{domProps:{value:e.id}},[t._v(t._s(e.title))]):t._e()}))]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Back Template")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.newEntry.back_template,expression:"newEntry.back_template"}],staticClass:"form-control",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.newEntry,"back_template",e.target.multiple?n:n[0])},function(e){t.getColumns()}]}},t._l(t.templates,function(e,r){return null!==t.templates&&"back"===e.settings?n("option",{domProps:{value:e.id}},[t._v(t._s(e.title))]):t._e()}))]),t._v(" "),!1===t.sync?n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary",on:{click:function(e){t.getColumns()}}},[n("i",{staticClass:"fa fa-sync"}),t._v(" Sync")])]):t._e(),t._v(" "),!0===t.sync?n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary",on:{click:function(e){t.addNewColumn()}}},[n("i",{staticClass:"fa fa-plus"}),t._v(" New Column")])]):t._e(),t._v(" "),t._l(t.columns,function(e,r){return null!==t.columns?n("div",[n("div",{staticClass:"input-group"},[n("span",{staticClass:"input-group-addon"},[t._v("Name")]),t._v(" "),!1===e.delete?n("input",{directives:[{name:"model",rawName:"v-model",value:e.column,expression:"item.column"}],staticClass:"form-control",attrs:{type:"text",placeholder:"*first_name",disabled:""},domProps:{value:e.column},on:{input:function(n){n.target.composing||t.$set(e,"column",n.target.value)}}}):t._e(),t._v(" "),!0===e.delete?n("input",{directives:[{name:"model",rawName:"v-model",value:e.column,expression:"item.column"}],staticClass:"form-control",attrs:{type:"text",placeholder:"*first_name"},domProps:{value:e.column},on:{input:function(n){n.target.composing||t.$set(e,"column",n.target.value)}}}):t._e(),t._v(" "),n("span",{staticClass:"input-group-addon"},[t._v("Value")]),t._v(" "),"photo"===e.type?n("span",{staticClass:"form-control upload-image",on:{click:function(e){t.addImage("image"+r,r)}}},[n("label",[t._v("Click to add image")]),t._v(" "),n("input",{staticClass:"form-control",attrs:{type:"file",id:"image"+r,accept:"image/*"},on:{change:function(e){t.setUpFileUpload(e)}}})]):t._e(),t._v(" "),"photo"!==e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Type value here..."},domProps:{value:e.value},on:{input:function(n){n.target.composing||t.$set(e,"value",n.target.value)}}}):t._e(),t._v(" "),!0===e.delete?n("button",{staticClass:"btn btn-danger",staticStyle:{"margin-top":"5px","margin-left":"5px"},on:{click:function(e){t.removeColumn(r)}}},[n("i",{staticClass:"fa fa-trash"})]):t._e()]),t._v(" "),"photo"===e.type&&null!==e.value?n("div",{staticClass:"input-group preview"},[n("img",{attrs:{src:t.config.BACKEND_URL+e.value,height:"100%"}})]):t._e()]):t._e()})],2),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.hideModal()}}},[t._v("Close")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.submit()}}},[t._v("Submit")])])])])])])},staticRenderFns:[]}},783:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),o=n(33),a=n(27),i=n(353);n.n(i);e.default={mounted:function(){},data:function(){return{user:o.a.user,config:a.default,errorMessage:null}},components:{create:n(750)},methods:{redirect:function(t){r.a.push(t)},submit:function(){this.validate()},validate:function(){}}}},956:function(t,e,n){e=t.exports=n(300)(),e.push([t.i,".employee-holder[data-v-91437432]{width:100%;float:left;height:100%}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/billing/Billings.vue"],names:[],mappings:"AACA,kCACC,WAAY,AACZ,WAAY,AACZ,WAAa,CACb",file:"Billings.vue",sourcesContent:["\n.employee-holder[data-v-91437432]{\r\n\twidth: 100%;\r\n\tfloat: left;\r\n\theight: 100%;\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=31.7d153586111e0a24480d.js.map