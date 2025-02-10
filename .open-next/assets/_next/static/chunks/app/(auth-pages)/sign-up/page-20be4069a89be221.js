(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[367],{8335:(e,r,t)=>{Promise.resolve().then(t.bind(t,1920))},1920:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>m});var n=t(5155),s=t(2115),a=t(5828);let i=(0,a.createServerReference)("7fa9ab1d145d7760495b999b8cc05a600f0af06683",a.callServer,void 0,a.findSourceMapURL,"signUpAction");function o(e){let{message:r}=e;return(0,n.jsxs)("div",{className:"flex flex-col gap-2 w-full max-w-md text-sm",children:["success"in r&&(0,n.jsx)("div",{className:"text-foreground border-l-2 border-foreground px-4",children:r.success}),"error"in r&&(0,n.jsx)("div",{className:"text-destructive-foreground border-l-2 border-destructive-foreground px-4",children:r.error}),"message"in r&&(0,n.jsx)("div",{className:"text-foreground border-l-2 px-4",children:r.message})]})}var l=t(2729),d=t(2336),u=t(7011),c=t(8173),f=t.n(c);function m(e){let[r,t]=(0,s.useState)(null);if((0,s.useEffect)(()=>{(async function(){t(await e.searchParams)})()},[e.searchParams]),r&&"message"in r)return(0,n.jsx)("div",{className:"w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4",children:(0,n.jsx)(o,{message:r})});let a=async e=>{e.preventDefault();try{let r=new FormData(e.target);await i(r)}catch(e){console.error("An error occurred during sign-up:",e)}};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("form",{onSubmit:a,className:"flex flex-col min-w-64 max-w-64 mx-auto",children:[(0,n.jsx)("h1",{className:"text-2xl font-medium",children:"Sign up"}),(0,n.jsxs)("p",{className:"text-sm text text-foreground",children:["Already have an account?"," ",(0,n.jsx)(f(),{className:"text-primary font-medium underline",href:"/sign-in",children:"Sign in"})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-2 [&>input]:mb-3 mt-8",children:[(0,n.jsx)(u.Label,{htmlFor:"email",children:"Email"}),(0,n.jsx)(d.p,{name:"email",placeholder:"you@example.com",required:!0}),(0,n.jsx)(u.Label,{htmlFor:"password",children:"Password"}),(0,n.jsx)(d.p,{type:"password",name:"password",placeholder:"Your password",minLength:6,required:!0}),(0,n.jsx)(l.SubmitButton,{pendingText:"Signing up...",children:"Sign up"}),r&&(0,n.jsx)(o,{message:r})]})]})})}},2729:(e,r,t)=>{"use strict";t.d(r,{SubmitButton:()=>i});var n=t(5155),s=t(4085),a=t(7650);function i(e){let{children:r,pendingText:t="Submitting...",...i}=e,{pending:o}=(0,a.useFormStatus)();return(0,n.jsx)(s.$,{type:"submit","aria-disabled":o,...i,children:o?t:r})}},4085:(e,r,t)=>{"use strict";t.d(r,{$:()=>d});var n=t(5155),s=t(2115),a=t(1290),i=t(1027),o=t(9602);let l=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,r)=>{let{className:t,variant:s,size:i,asChild:d=!1,...u}=e,c=d?a.DX:"button";return(0,n.jsx)(c,{className:(0,o.cn)(l({variant:s,size:i,className:t})),ref:r,...u})});d.displayName="Button"},2336:(e,r,t)=>{"use strict";t.d(r,{p:()=>i});var n=t(5155),s=t(2115),a=t(9602);let i=s.forwardRef((e,r)=>{let{className:t,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...i})});i.displayName="Input"},7011:(e,r,t)=>{"use strict";t.d(r,{Label:()=>c});var n=t(5155),s=t(2115);t(7650);var a=t(1290),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=s.forwardRef((e,t)=>{let{asChild:s,...i}=e,o=s?a.DX:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,n.jsx)(o,{...i,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{}),o=s.forwardRef((e,r)=>(0,n.jsx)(i.label,{...e,ref:r,onMouseDown:r=>{var t;r.target.closest("button, input, select, textarea")||(null===(t=e.onMouseDown)||void 0===t||t.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));o.displayName="Label";var l=t(1027),d=t(9602);let u=(0,l.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(o,{ref:r,className:(0,d.cn)(u(),t),...s})});c.displayName=o.displayName},9602:(e,r,t)=>{"use strict";t.d(r,{cn:()=>a});var n=t(3463),s=t(9795);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.QP)((0,n.$)(r))}},5828:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{callServer:function(){return n.callServer},createServerReference:function(){return a},findSourceMapURL:function(){return s.findSourceMapURL}});let n=t(9603),s=t(3355),a=t(4979).createServerReference}},e=>{var r=r=>e(e.s=r);e.O(0,[181,398,441,517,358],()=>r(8335)),_N_E=e.O()}]);