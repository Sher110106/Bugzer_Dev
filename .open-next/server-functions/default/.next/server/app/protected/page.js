(()=>{var e={};e.id=379,e.ids=[379],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79428:e=>{"use strict";e.exports=require("buffer")},55511:e=>{"use strict";e.exports=require("crypto")},94735:e=>{"use strict";e.exports=require("events")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},91645:e=>{"use strict";e.exports=require("net")},33873:e=>{"use strict";e.exports=require("path")},11997:e=>{"use strict";e.exports=require("punycode")},27910:e=>{"use strict";e.exports=require("stream")},34631:e=>{"use strict";e.exports=require("tls")},79551:e=>{"use strict";e.exports=require("url")},74075:e=>{"use strict";e.exports=require("zlib")},44604:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>u.a,__next_app__:()=>c,pages:()=>l,routeModule:()=>f,tree:()=>d});var o=r(70260),n=r(28203),i=r(25155),u=r.n(i),s=r(67292),a={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(a[e]=()=>s[e]);r.d(t,a);let d=["",{children:["protected",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,83741)),"/Users/sher/project/ai/bugzer/app/protected/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,19611)),"/Users/sher/project/ai/bugzer/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["/Users/sher/project/ai/bugzer/app/protected/page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},f=new o.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/protected/page",pathname:"/protected",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},96487:()=>{},78335:()=>{},83741:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var o=r(62740),n=r(23253),i=r(31831);async function u(){let e=await (0,n.U)(),{data:{user:t}}=await e.auth.getUser();return t||(0,i.redirect)("/sign-in"),(0,o.jsx)("div",{children:"Hello"})}},31831:(e,t,r)=>{"use strict";var o=r(67359);r.o(o,"redirect")&&r.d(t,{redirect:function(){return o.redirect}})},46347:(e,t,r)=>{"use strict";function o(){throw Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled.")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"forbidden",{enumerable:!0,get:function(){return o}}),r(26003).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},11271:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isNextRouterError",{enumerable:!0,get:function(){return i}});let o=r(26003),n=r(23543);function i(e){return(0,n.isRedirectError)(e)||(0,o.isHTTPAccessFallbackError)(e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},67359:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return l},RedirectType:function(){return n.RedirectType},forbidden:function(){return u.forbidden},notFound:function(){return i.notFound},permanentRedirect:function(){return o.permanentRedirect},redirect:function(){return o.redirect},unauthorized:function(){return s.unauthorized},unstable_rethrow:function(){return a.unstable_rethrow}});let o=r(26552),n=r(23543),i=r(39274),u=r(46347),s=r(10590),a=r(51370);class d extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class l extends URLSearchParams{append(){throw new d}delete(){throw new d}set(){throw new d}sort(){throw new d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},39274:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"notFound",{enumerable:!0,get:function(){return n}});let o=""+r(26003).HTTP_ERROR_FALLBACK_ERROR_CODE+";404";function n(){let e=Error(o);throw e.digest=o,e}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},23543:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{REDIRECT_ERROR_CODE:function(){return n},RedirectType:function(){return i},isRedirectError:function(){return u}});let o=r(11541),n="NEXT_REDIRECT";var i=function(e){return e.push="push",e.replace="replace",e}({});function u(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let t=e.digest.split(";"),[r,i]=t,u=t.slice(2,-2).join(";"),s=Number(t.at(-2));return r===n&&("replace"===i||"push"===i)&&"string"==typeof u&&!isNaN(s)&&s in o.RedirectStatusCode}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},11541:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}});var r=function(e){return e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e}({});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},26552:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRedirectError:function(){return u},getRedirectStatusCodeFromError:function(){return c},getRedirectTypeFromError:function(){return l},getURLFromRedirectError:function(){return d},permanentRedirect:function(){return a},redirect:function(){return s}});let o=r(19121),n=r(11541),i=r(23543);function u(e,t,r){void 0===r&&(r=n.RedirectStatusCode.TemporaryRedirect);let o=Error(i.REDIRECT_ERROR_CODE);return o.digest=i.REDIRECT_ERROR_CODE+";"+t+";"+e+";"+r+";",o}function s(e,t){let r=o.actionAsyncStorage.getStore();throw u(e,t||((null==r?void 0:r.isAction)?i.RedirectType.push:i.RedirectType.replace),n.RedirectStatusCode.TemporaryRedirect)}function a(e,t){throw void 0===t&&(t=i.RedirectType.replace),u(e,t,n.RedirectStatusCode.PermanentRedirect)}function d(e){return(0,i.isRedirectError)(e)?e.digest.split(";").slice(2,-2).join(";"):null}function l(e){if(!(0,i.isRedirectError)(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function c(e){if(!(0,i.isRedirectError)(e))throw Error("Not a redirect error");return Number(e.digest.split(";").at(-2))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},10590:(e,t,r)=>{"use strict";function o(){throw Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled.")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unauthorized",{enumerable:!0,get:function(){return o}}),r(26003).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},51370:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return function e(t){if((0,u.isNextRouterError)(t)||(0,i.isBailoutToCSRError)(t)||(0,o.isDynamicUsageError)(t)||(0,n.isPostpone)(t))throw t;t instanceof Error&&"cause"in t&&e(t.cause)}}});let o=r(62349),n=r(67418),i=r(40627),u=r(11271);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},62349:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicUsageError",{enumerable:!0,get:function(){return s}});let o=r(42490),n=r(40627),i=r(11271),u=r(10436),s=e=>(0,o.isDynamicServerError)(e)||(0,n.isBailoutToCSRError)(e)||(0,i.isNextRouterError)(e)||(0,u.isDynamicPostpone)(e)},67418:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isPostpone",{enumerable:!0,get:function(){return o}});let r=Symbol.for("react.postpone");function o(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}},40627:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{BailoutToCSRError:function(){return o},isBailoutToCSRError:function(){return n}});let r="BAILOUT_TO_CLIENT_SIDE_RENDERING";class o extends Error{constructor(e){super("Bail out to client-side rendering: "+e),this.reason=e,this.digest=r}}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}},23253:(e,t,r)=>{"use strict";r.d(t,{U:()=>i});var o=r(18563),n=r(44512);let i=async()=>{let e=await (0,n.UL)();return(0,o.createServerClient)("https://xfholgmbmwejohgtzuih.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmaG9sZ21ibXdlam9oZ3R6dWloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNTUwNTcsImV4cCI6MjA1MzgzMTA1N30.tzgMvhhcCLtE_tRfQmk-5BvzF8GBez-P7ebcAY3LKKU",{cookies:{getAll:()=>e.getAll(),setAll(t){try{t.forEach(({name:t,value:r,options:o})=>{e.set(t,r,o)})}catch(e){}}}})}},46055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var o=r(88077);let n=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,o.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[638,681,77,758,371],()=>r(44604));module.exports=o})();