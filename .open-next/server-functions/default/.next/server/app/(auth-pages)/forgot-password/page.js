(()=>{var e={};e.id=845,e.ids=[845],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79428:e=>{"use strict";e.exports=require("buffer")},55511:e=>{"use strict";e.exports=require("crypto")},94735:e=>{"use strict";e.exports=require("events")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},91645:e=>{"use strict";e.exports=require("net")},33873:e=>{"use strict";e.exports=require("path")},11997:e=>{"use strict";e.exports=require("punycode")},27910:e=>{"use strict";e.exports=require("stream")},34631:e=>{"use strict";e.exports=require("tls")},79551:e=>{"use strict";e.exports=require("url")},74075:e=>{"use strict";e.exports=require("zlib")},54440:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l});var s=t(70260),o=t(28203),i=t(25155),a=t.n(i),n=t(67292),d={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);t.d(r,d);let l=["",{children:["(auth-pages)",{children:["forgot-password",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,10145)),"/Users/sher/project/ai/bugzer/app/(auth-pages)/forgot-password/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,36654)),"/Users/sher/project/ai/bugzer/app/(auth-pages)/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,19611)),"/Users/sher/project/ai/bugzer/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/sher/project/ai/bugzer/app/(auth-pages)/forgot-password/page.tsx"],u={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/(auth-pages)/forgot-password/page",pathname:"/forgot-password",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},93245:(e,r,t)=>{"use strict";t.r(r),t.d(r,{"7f1318293ce4c34b4e8de3f710f9443b75ce3fac0c":()=>s.Lz,"7f1dfbf45e0aceeacf33671e7b86f6ba1afeb35f2f":()=>s.jN,"7f565efffb394c3f7f72106eacdcd2ef138bd8c39c":()=>s.hx,"7f9b9bdfb6b2208284a1f0711f33c92a13d61fb011":()=>s.Kd,"7fa9ab1d145d7760495b999b8cc05a600f0af06683":()=>s.RX});var s=t(6427)},55352:(e,r,t)=>{Promise.resolve().then(t.bind(t,36377)),Promise.resolve().then(t.bind(t,42591)),Promise.resolve().then(t.t.bind(t,59607,23))},39672:(e,r,t)=>{Promise.resolve().then(t.bind(t,77117)),Promise.resolve().then(t.bind(t,47699)),Promise.resolve().then(t.t.bind(t,28531,23))},96487:()=>{},78335:()=>{},77117:(e,r,t)=>{"use strict";t.d(r,{SubmitButton:()=>a});var s=t(45512),o=t(87021),i=t(55740);function a({children:e,pendingText:r="Submitting...",...t}){let{pending:a}=(0,i.useFormStatus)();return(0,s.jsx)(o.$,{type:"submit","aria-disabled":a,...t,children:a?r:e})}},47699:(e,r,t)=>{"use strict";t.d(r,{Label:()=>l});var s=t(45512),o=t(58009),i=t(5267),a=t(21643),n=t(59462);let d=(0,a.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),l=o.forwardRef(({className:e,...r},t)=>(0,s.jsx)(i.b,{ref:t,className:(0,n.cn)(d(),e),...r}));l.displayName=i.b.displayName},10145:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>u});var s=t(62740),o=t(6427),i=t(24618),a=t(36377),n=t(76648),d=t(42591),l=t(59607),c=t.n(l);async function u(e){let r=await e.searchParams;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("form",{className:"flex-1 flex flex-col w-full gap-2 text-foreground [&>input]:mb-6 min-w-64 max-w-64 mx-auto",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"text-2xl font-medium",children:"Reset Password"}),(0,s.jsxs)("p",{className:"text-sm text-secondary-foreground",children:["Already have an account?"," ",(0,s.jsx)(c(),{className:"text-primary underline",href:"/sign-in",children:"Sign in"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2 [&>input]:mb-3 mt-8",children:[(0,s.jsx)(d.Label,{htmlFor:"email",children:"Email"}),(0,s.jsx)(n.p,{name:"email",placeholder:"you@example.com",required:!0}),(0,s.jsx)(a.SubmitButton,{formAction:o.jN,children:"Reset Password"}),(0,s.jsx)(i.C,{message:r})]})]})})}},36654:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(62740);async function o({children:e}){return(0,s.jsx)("div",{className:"max-w-7xl flex flex-col gap-12 items-start",children:e})}},6427:(e,r,t)=>{"use strict";t.d(r,{jN:()=>p,hx:()=>f,Lz:()=>c,Kd:()=>u,RX:()=>l});var s=t(88977);t(98063);var o=t(31831);function i(e,r,t){return(0,o.redirect)(`${r}?${e}=${encodeURIComponent(t)}`)}var a=t(23253),n=t(44512),d=t(56215);let l=async e=>{let r=e.get("email")?.toString(),t=e.get("password")?.toString(),s=await (0,a.U)(),o=(await (0,n.b3)()).get("origin");if(!r||!t)return i("error","/sign-up","Email and password are required");let{error:d}=await s.auth.signUp({email:r,password:t,options:{emailRedirectTo:`${o}/sign-in`}});return d?i("error","/sign-up",d.message):i("success","/sign-in","Thanks for signing up! Please check your email for a verification link.")},c=async e=>{let r=e.get("email"),t=e.get("password"),s=await (0,a.U)(),{error:n}=await s.auth.signInWithPassword({email:r,password:t});return n?i("error","/sign-in",n.message):(0,o.redirect)("/protected")},u=async()=>{let e=await (0,a.U)();return await e.auth.signOut(),(0,o.redirect)("/sign-in")},p=async e=>{let r=e.get("email")?.toString(),t=await (0,a.U)(),s=(await (0,n.b3)()).get("origin");if(!r)return i("error","/forgot-password","Email is required");let{error:o}=await t.auth.resetPasswordForEmail(r,{redirectTo:`${s}/auth/callback?next=/sign-in`});return o?i("error","/forgot-password","Could not reset password"):i("success","/forgot-password","Check your email for a link to reset your password.")},f=async e=>{let r=await (0,a.U)(),t=e.get("password"),s=e.get("confirmPassword");if(!t||!s)return i("error","/protected/reset-password","Password and confirm password are required");if(t!==s)return i("error","/protected/reset-password","Passwords do not match");let{error:o}=await r.auth.updateUser({password:t});return o?i("error","/protected/reset-password","Password update failed"):i("success","/protected/reset-password","Password updated")};(0,d.D)([l,c,u,p,f]),(0,s.A)(l,"7fa9ab1d145d7760495b999b8cc05a600f0af06683",null),(0,s.A)(c,"7f1318293ce4c34b4e8de3f710f9443b75ce3fac0c",null),(0,s.A)(u,"7f9b9bdfb6b2208284a1f0711f33c92a13d61fb011",null),(0,s.A)(p,"7f1dfbf45e0aceeacf33671e7b86f6ba1afeb35f2f",null),(0,s.A)(f,"7f565efffb394c3f7f72106eacdcd2ef138bd8c39c",null)},24618:(e,r,t)=>{"use strict";t.d(r,{C:()=>o});var s=t(62740);function o({message:e}){return(0,s.jsxs)("div",{className:"flex flex-col gap-2 w-full max-w-md text-sm",children:["success"in e&&(0,s.jsx)("div",{className:"text-foreground border-l-2 border-foreground px-4",children:e.success}),"error"in e&&(0,s.jsx)("div",{className:"text-destructive-foreground border-l-2 border-destructive-foreground px-4",children:e.error}),"message"in e&&(0,s.jsx)("div",{className:"text-foreground border-l-2 px-4",children:e.message})]})}},36377:(e,r,t)=>{"use strict";t.d(r,{SubmitButton:()=>s});let s=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call SubmitButton() from the server but SubmitButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/sher/project/ai/bugzer/components/submit-button.tsx","SubmitButton")},76648:(e,r,t)=>{"use strict";t.d(r,{p:()=>n});var s=t(62740),o=t(76301),i=t(13673),a=t(47317);let n=o.forwardRef(({className:e,type:r,...t},o)=>(0,s.jsx)("input",{type:r,className:function(...e){return(0,a.QP)((0,i.$)(e))}("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:o,...t}));n.displayName="Input"},42591:(e,r,t)=>{"use strict";t.d(r,{Label:()=>s});let s=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call Label() from the server but Label is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/sher/project/ai/bugzer/components/ui/label.tsx","Label")},59607:(e,r,t)=>{let{createProxy:s}=t(73439);e.exports=s("/Users/sher/project/ai/bugzer/node_modules/next/dist/client/app-dir/link.js")},23253:(e,r,t)=>{"use strict";t.d(r,{U:()=>i});var s=t(18563),o=t(44512);let i=async()=>{let e=await (0,o.UL)();return(0,s.createServerClient)("https://xfholgmbmwejohgtzuih.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmaG9sZ21ibXdlam9oZ3R6dWloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNTUwNTcsImV4cCI6MjA1MzgzMTA1N30.tzgMvhhcCLtE_tRfQmk-5BvzF8GBez-P7ebcAY3LKKU",{cookies:{getAll:()=>e.getAll(),setAll(r){try{r.forEach(({name:r,value:t,options:s})=>{e.set(r,t,s)})}catch(e){}}}})}},46055:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(88077);let o=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,681,77,758,641,371],()=>t(54440));module.exports=s})();