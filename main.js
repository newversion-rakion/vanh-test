(()=>{var e={669:(e,t,n)=>{e.exports=n(609)},448:(e,t,n)=>{"use strict";var o=n(867),r=n(26),i=n(372),a=n(327),s=n(97),c=n(109),u=n(985),p=n(61),l=n(655),d=n(263);e.exports=function(e){return new Promise((function(t,n){var f,m=e.data,h=e.headers,_=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}o.isFormData(m)&&delete h["Content-Type"];var v=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";h.Authorization="Basic "+btoa(b+":"+y)}var w=s(e.baseURL,e.url);function k(){if(v){var o="getAllResponseHeaders"in v?c(v.getAllResponseHeaders()):null,i={data:_&&"text"!==_&&"json"!==_?v.response:v.responseText,status:v.status,statusText:v.statusText,headers:o,config:e,request:v};r((function(e){t(e),g()}),(function(e){n(e),g()}),i),v=null}}if(v.open(e.method.toUpperCase(),a(w,e.params,e.paramsSerializer),!0),v.timeout=e.timeout,"onloadend"in v?v.onloadend=k:v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&setTimeout(k)},v.onabort=function(){v&&(n(p("Request aborted",e,"ECONNABORTED",v)),v=null)},v.onerror=function(){n(p("Network Error",e,null,v)),v=null},v.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",o=e.transitional||l.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(p(t,e,o.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",v)),v=null},o.isStandardBrowserEnv()){var x=(e.withCredentials||u(w))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;x&&(h[e.xsrfHeaderName]=x)}"setRequestHeader"in v&&o.forEach(h,(function(e,t){void 0===m&&"content-type"===t.toLowerCase()?delete h[t]:v.setRequestHeader(t,e)})),o.isUndefined(e.withCredentials)||(v.withCredentials=!!e.withCredentials),_&&"json"!==_&&(v.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&v.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&v.upload&&v.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(e){v&&(n(!e||e&&e.type?new d("canceled"):e),v.abort(),v=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),m||(m=null),v.send(m)}))}},609:(e,t,n)=>{"use strict";var o=n(867),r=n(849),i=n(321),a=n(185),s=function e(t){var n=new i(t),s=r(i.prototype.request,n);return o.extend(s,i.prototype,n),o.extend(s,n),s.create=function(n){return e(a(t,n))},s}(n(655));s.Axios=i,s.Cancel=n(263),s.CancelToken=n(972),s.isCancel=n(502),s.VERSION=n(288).version,s.all=function(e){return Promise.all(e)},s.spread=n(713),s.isAxiosError=n(268),e.exports=s,e.exports.default=s},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,n)=>{"use strict";var o=n(263);function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,o=n._listeners.length;for(t=0;t<o;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,o=new Promise((function(e){n.subscribe(e),t=e})).then(e);return o.cancel=function(){n.unsubscribe(t)},o},e((function(e){n.reason||(n.reason=new o(e),t(n.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},r.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var o=n(867),r=n(327),i=n(782),a=n(572),s=n(185),c=n(875),u=c.validators;function p(e){this.defaults=e,this.interceptors={request:new i,response:new i}}p.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&c.assertOptions(t,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(o=o&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var r,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!o){var p=[a,void 0];for(Array.prototype.unshift.apply(p,n),p=p.concat(i),r=Promise.resolve(e);p.length;)r=r.then(p.shift(),p.shift());return r}for(var l=e;n.length;){var d=n.shift(),f=n.shift();try{l=d(l)}catch(e){f(e);break}}try{r=a(l)}catch(e){return Promise.reject(e)}for(;i.length;)r=r.then(i.shift(),i.shift());return r},p.prototype.getUri=function(e){return e=s(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],(function(e){p.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),o.forEach(["post","put","patch"],(function(e){p.prototype[e]=function(t,n,o){return this.request(s(o||{},{method:e,url:t,data:n}))}})),e.exports=p},782:(e,t,n)=>{"use strict";var o=n(867);function r(){this.handlers=[]}r.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},97:(e,t,n)=>{"use strict";var o=n(793),r=n(303);e.exports=function(e,t){return e&&!o(t)?r(e,t):t}},61:(e,t,n)=>{"use strict";var o=n(481);e.exports=function(e,t,n,r,i){var a=new Error(e);return o(a,t,n,r,i)}},572:(e,t,n)=>{"use strict";var o=n(867),r=n(527),i=n(502),a=n(655),s=n(263);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s("canceled")}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=r.call(e,e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),o.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return c(e),t.data=r.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=r.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,n,o,r){return e.config=t,n&&(e.code=n),e.request=o,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},185:(e,t,n)=>{"use strict";var o=n(867);e.exports=function(e,t){t=t||{};var n={};function r(e,t){return o.isPlainObject(e)&&o.isPlainObject(t)?o.merge(e,t):o.isPlainObject(t)?o.merge({},t):o.isArray(t)?t.slice():t}function i(n){return o.isUndefined(t[n])?o.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function a(e){if(!o.isUndefined(t[e]))return r(void 0,t[e])}function s(n){return o.isUndefined(t[n])?o.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function c(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var u={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c};return o.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||i,r=t(e);o.isUndefined(r)&&t!==c||(n[e]=r)})),n}},26:(e,t,n)=>{"use strict";var o=n(61);e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(o("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},527:(e,t,n)=>{"use strict";var o=n(867),r=n(655);e.exports=function(e,t,n){var i=this||r;return o.forEach(n,(function(n){e=n.call(i,e,t)})),e}},655:(e,t,n)=>{"use strict";var o=n(867),r=n(16),i=n(481),a={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(c=n(448)),c),transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)||t&&"application/json"===t["Content-Type"]?(s(t,"application/json"),function(e,t,n){if(o.isString(e))try{return(0,JSON.parse)(e),o.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||u.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||r&&o.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(a){if("SyntaxError"===e.name)throw i(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};o.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),o.forEach(["post","put","patch"],(function(e){u.headers[e]=o.merge(a)})),e.exports=u},288:e=>{e.exports={version:"0.24.0"}},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return e.apply(t,n)}}},327:(e,t,n)=>{"use strict";var o=n(867);function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var a=[];o.forEach(t,(function(e,t){null!=e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,(function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,n)=>{"use strict";var o=n(867);e.exports=o.isStandardBrowserEnv()?{write:function(e,t,n,r,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),o.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),o.isString(r)&&s.push("path="+r),o.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:(e,t,n)=>{"use strict";var o=n(867);e.exports=o.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var o=e;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=o.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16:(e,t,n)=>{"use strict";var o=n(867);e.exports=function(e,t){o.forEach(e,(function(n,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[o])}))}},109:(e,t,n)=>{"use strict";var o=n(867),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(o.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=o.trim(e.substr(0,i)).toLowerCase(),n=o.trim(e.substr(i+1)),t){if(a[t]&&r.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:(e,t,n)=>{"use strict";var o=n(288).version,r={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){r[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var i={};r.transitional=function(e,t,n){function r(e,t){return"[Axios v"+o+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,o,a){if(!1===e)throw new Error(r(o," has been removed"+(t?" in "+t:"")));return t&&!i[o]&&(i[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var o=Object.keys(e),r=o.length;r-- >0;){var i=o[r],a=t[i];if(a){var s=e[i],c=void 0===s||a(s,i,e);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+i)}},validators:r}},867:(e,t,n)=>{"use strict";var o=n(849),r=Object.prototype.toString;function i(e){return"[object Array]"===r.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==r.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===r.call(e)}function p(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:a,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:p,merge:function e(){var t={};function n(n,o){c(t[o])&&c(n)?t[o]=e(t[o],n):c(n)?t[o]=e({},n):i(n)?t[o]=n.slice():t[o]=n}for(var o=0,r=arguments.length;o<r;o++)p(arguments[o],n);return t},extend:function(e,t,n){return p(t,(function(t,r){e[r]=n&&"function"==typeof t?o(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(669);const t=n.n(e)().create({baseURL:"https://dev-a-popup-api.kuzen.io/"}),o=({url:e,params:n,data:o,headers:a})=>(({url:e,method:n,params:o,data:a,headers:s={}})=>t({url:e,method:n,params:o,data:a,headers:{...s,"Access-Control-Allow-Origin":"*"}}).then((e=>r(e.data,e))).catch((e=>i(e))))({url:e,params:n,data:o,method:"POST",headers:a}),r=e=>Promise.resolve(e),i=e=>Promise.reject(e),a=(e,t)=>o({url:`/api/v1/popup_tag_action/${t}`,data:e}),s=/Macintosh/i.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>1,c=e=>{try{return document.currentScript.getAttribute(e)}catch{return""}},u=e=>{const t=d("displayedActionList")||{};t[e]=new Date,localStorage.setItem("displayedActionList",JSON.stringify(t))},p=e=>{localStorage.setItem("currentShowingPopup",e),u(e),document.getElementById("kz_popup_shadow").classList.add("show"),document.getElementById("kz_popup_content").classList.add("show"),a({action_info:{popup_id:localStorage.getItem("popup_id"),action_type:"show_popup",url:location.protocol+"//"+location.host+location.pathname,url_with_params:location.href}},localStorage.getItem("secretKey"))},l=e=>{const{popup_tag_display_conditions:{back_btn_clicked_mobile:t,back_btn_clicked_pc:n,back_btn_clicked_same_domain_mobile:o,back_btn_clicked_same_domain_pc:r,come_back_to_browser:i,come_back_from_other_tab:a,display_once:c,inactive_user_mobile:u,inactive_user_pc:l}}=e;/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||s?(t&&(()=>{let e=1;window.addEventListener("popstate",(function t(n){n&&m("back_btn_clicked_mobile")&&(n.preventDefault(),n.stopPropagation(),v()||1!==e||(p("back_btn_clicked_mobile"),e=2)),window.removeEventListener("popstate",t)}))})(),o&&(()=>{let e=1;window.addEventListener("popstate",(function t(n){n&&m("back_btn_clicked_same_domain_mobile")&&(n.preventDefault(),n.stopPropagation(),v()&&1===e&&(p("back_btn_clicked_same_domain_mobile"),e=2)),window.removeEventListener("popstate",t)}))})(),(i||a)&&document.addEventListener("visibilitychange",(function(){!document.hidden&&m("come_back_to_browser")&&p("come_back_to_browser")})),u&&u.is_active&&((e=60)=>{!function(){let t;function n(){m("inactive_user_mobile")?p("inactive_user_mobile"):o(h("inactive_user_mobile"))}function o(){clearTimeout(t),t=setTimeout(n,1e3*e)}o(),document.onmousemove=o,document.onkeypress=o,document.onscroll=o,setTimeout((()=>{const e=document.getElementById("kz_popup_close");e&&e.addEventListener("click",(function(){o()}))}),1e3)}()})(u.duration)):(n&&(()=>{let e=1;window.addEventListener("popstate",(function t(n){n&&m("back_btn_clicked_pc")&&(n.preventDefault(),n.stopPropagation(),v()||1!==e||(p("back_btn_clicked_pc"),e=2)),window.removeEventListener("popstate",t)}))})(),r&&(()=>{let e=1;window.addEventListener("popstate",(function t(n){n&&m("back_btn_clicked_same_domain_pc")&&(n.preventDefault(),n.stopPropagation(),v()&&1===e&&(p("back_btn_clicked_same_domain_pc"),e=2)),window.removeEventListener("popstate",t)}))})(),l&&l.is_active&&((e=60)=>{!function(){let t;function n(){m("inactive_user_pc")?p("inactive_user_pc"):o(h("inactive_user_pc"))}function o(){clearTimeout(t),t=setTimeout(n,1e3*e)}o(),document.onmousemove=o,document.onkeypress=o,setTimeout((()=>{const e=document.getElementById("kz_popup_close");e&&e.addEventListener("click",(function(){o()}))}),1e3)}()})(l.duration)),f(c),(t||o||n||r)&&x()},d=e=>e?JSON.parse(localStorage.getItem(e)):"",f=e=>{const t=d("display_multiple_time")?d("display_multiple_time"):{},n={duration:e.duration,isActive:e.is_active};t.isActive!==n.isActive&&localStorage.removeItem("displayedActionList"),localStorage.setItem("display_multiple_time",JSON.stringify(n))},m=e=>{if(localStorage.getItem("currentShowingPopup"))return!1;const t=d("display_multiple_time")?d("display_multiple_time"):{},n=d("displayedActionList")||{};return!(!t.isActive&&(o=n,o&&(0!==Object.keys(o).length||o.constructor!==Object))||t.isActive&&n[e]&&0!==t.duration&&!(_(new Date,new Date(n[e]))>6e4*t.duration));var o},h=e=>{const t=d("displayedActionList")||{},n=d("display_multiple_time")?d("display_multiple_time"):{};return localStorage.getItem("currentShowingPopup")?6e4*n.duration:6e4*n.duration-_(new Date,t[e]?new Date(t[e]):new Date)},_=(e,t)=>Math.abs(e.getTime()-t.getTime()),g=e=>e?new URL(e).hostname:"",v=()=>g(document.referrer)===g(window.location.href),b=window.navigator.userAgent,y=b.match(/iPad/i)||b.match(/iPhone/i),w=b.match(/WebKit/i),k=y&&w&&!b.match(/CriOS/i),x=()=>{document.getElementsByTagName("body")[0].style.minHeight="100vh";let e=1;document.body.addEventListener("click",(()=>{1===e&&(history.pushState({page:1},null,window.location.href),e=2)})),setTimeout((()=>{1===e&&(!k||k&&1===window.history.length)&&(history.pushState({page:1},null,window.location.href),e=2)}),100)};0===String(window.performance.getEntriesByType("navigation")[0].transferSize)&&window.location.reload(),(e=>{localStorage.removeItem("popupIsShowing"),localStorage.removeItem("currentShowingPopup");const t=c("data-secretKey")||c("secretKey");localStorage.getItem("secretKey")!==t&&(localStorage.setItem("secretKey",t),localStorage.removeItem("display_multiple_time")),(async(e,t,n)=>{try{const n=await o({url:`/api/v1/popup_tag/${e}`,data:{url:location.protocol+"//"+location.host+location.pathname,url_with_params:location.href}});n&&t&&t(n)}catch(e){}})(t,(e=>{const{popup:{id:t,image_url:n,image_map:{data_link:o}}}=e.popup_tag;localStorage.setItem("popup_tag",JSON.stringify(e.popup_tag)),localStorage.setItem("image_url",n),localStorage.setItem("popup_id",t),localStorage.setItem("data_link",o),l(e.popup_tag),(()=>{const e=document.createElement("style");e.innerHTML='\n    .kz_popup_content,.kz_popup_shadow{position:fixed;left:0;top:0;display:none}.kz_popup_shadow{z-index:998;background:rgba(0,0,0,.6509803922);width:100%;height:100%}.kz_popup_shadow.show{display:block}.kz_popup_content{box-sizing:border-box;height:100vh;z-index:999;padding:32px 64px;right:0;bottom:0;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.kz_popup_content.show{display:-webkit-box;display:-ms-flexbox;display:flex}.kz_popup_content img{width:100%;max-height:calc(100vh - 64px)} @media only screen and (max-width: 768px) {.kz_popup_content_inner {height: unset !important;} .kz_popup_content {padding:32px 16px;}} .kz_popup_content_inner{position:relative;max-width:640px;height:auto;}.kz_popup_content_inner .kz_popup_close{cursor:pointer;right:-16px;top:-16px;color:#fff;position:absolute;z-index:2;border:0;padding:0;width:32px;height:32px;background:rgba(58,55,56,.3215686275);border-radius:50%}.kz_popup_content_inner .kz_popup_close:after,.kz_popup_content_inner .kz_popup_close:before{content:"";position:absolute;top:16px;left:8px;right:8px;height:2px;background:#fff;border-radius:4px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.kz_popup_content_inner .kz_popup_close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}\n',document.body.appendChild(e);const t=document.createElement("div");t.innerHTML=`<div id="kz_popup_shadow" class="kz_popup kz_popup_shadow"></div>\n  <div id="kz_popup_content" class="kz_popup kz_popup_content">\n    <div class="kz_popup_content_inner">\n      <button type="button" id="kz_popup_close" class="kz_popup_close"></button>\n      <a id="kz_popup_img" class="kz_popup_img" href="${localStorage.getItem("data_link")}" target="_blank" >\n        <img src="${localStorage.getItem("image_url")}" alt="" />\n      </a>\n    </div>\n  </div>`,document.body.appendChild(t)})(),document.body&&document.body.getElementsByTagName&&(document.querySelectorAll("#kz_popup_close").forEach((e=>e.onclick=function(){document.getElementById("kz_popup_shadow").classList.remove("show"),document.getElementById("kz_popup_content").classList.remove("show"),u(localStorage.getItem("currentShowingPopup")),["back_btn_clicked_same_domain_pc","back_btn_clicked_pc","back_btn_clicked_same_domain_mobile","back_btn_clicked_mobile"].includes(localStorage.getItem("currentShowingPopup"))?(history.back(),setTimeout((()=>{setTimeout((()=>{history.pushState({page:1},document.title,window.location.href),l(d("popup_tag")),localStorage.removeItem("currentShowingPopup"),localStorage.removeItem("trackingBackBtnClicked")}),500),localStorage.setItem("taddaaaaa",111111),history.back()}),500)):localStorage.removeItem("currentShowingPopup")})),document.querySelectorAll("#kz_popup_img").forEach((e=>e.onclick=function(){a({action_info:{popup_id:localStorage.getItem("popup_id"),action_type:"click_to_popup",url:location.protocol+"//"+location.host+location.pathname,url_with_params:location.href}},localStorage.getItem("secretKey"))})))}))})()})()})();