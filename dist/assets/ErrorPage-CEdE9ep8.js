import{t as a,u as r,v as c,j as e,B as s}from"./index-B6ikHHBC.js";import{H as n}from"./house-COlC0-rc.js";/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],x=a("refresh-ccw",d);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],m=a("triangle-alert",i),f=()=>{const o=r(),t=c(),l=()=>window.location.reload();return e.jsxs("div",{className:"h-screen w-full flex flex-col items-center justify-center gap-8 px-4 md:px-8 bg-background relative",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-5",children:e.jsx(m,{className:"w-64 h-64 text-muted-foreground"})}),e.jsxs("div",{className:"z-10 text-center flex flex-col items-center gap-4 max-w-xl",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-foreground",children:"Oops! Something went wrong."}),e.jsx("p",{className:"text-muted-foreground text-lg md:text-xl",children:t?.statusText||t?.message||"An unexpected error occurred."}),t?.status&&e.jsxs("p",{className:"text-sm text-muted-foreground/70",children:["Error Code: ",e.jsx("span",{className:"font-mono",children:t.status})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-3 w-full md:w-auto justify-center mt-6",children:[e.jsxs(s,{variant:"outline",className:"rounded-full shadow-md",onClick:l,children:[e.jsx(x,{className:"h-4 w-4"}),"Retry"]}),e.jsxs(s,{className:"rounded-full bg-yellow-500 text-black hover:bg-yellow-400 shadow-md",onClick:()=>o("/"),children:[e.jsx(n,{className:"h-4 w-4"}),"Go Home"]})]})]})]})};export{f as default};
