"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[490],{1179:(e,a,n)=>{n.r(a),n.d(a,{default:()=>m});var l=n(2791),s=n(4437),t=n(9434),c=n(1727),o=n(1726),r=n(971),i=n(7093),d=n(1927),u=n(7689),p=n(184);const m=()=>{const e=(0,t.v9)(c.jl),a=(0,t.v9)(c.UH),n=(0,t.I0)(),m=(0,u.s0)(),[v,h]=(0,l.useState)({password:"",email:""}),b=e=>{const{target:{name:a,value:l}}=e;n((0,c.N$)({name:a,value:l}))};return e?(0,p.jsx)(u.Fg,{to:"/"}):(0,p.jsx)("div",{className:"auth-signin",children:(0,p.jsxs)("form",{className:"auth-signin-form",onSubmit:async e=>{e.preventDefault();const l=await(0,d.JV)(a,h);null!==l&&void 0!==l&&l.accessToken&&((0,i.d8)("accessToken",l.accessToken,365),n((0,c.f4)(null===l||void 0===l?void 0:l.admin)),n((0,c.tR)(!0)),m("/"))},children:[(0,p.jsx)(r.Z,{classN:"auth-signin-title",size:"20px",color:i.ue,text:"Sign In to Super Admin Panel",align:"center"}),(0,p.jsx)(s.Z,{type:"text",name:"email",value:null===a||void 0===a?void 0:a.email,error:null===v||void 0===v?void 0:v.email,placeholder:"Email",callback:b}),(0,p.jsx)(s.Z,{type:"password",name:"password",value:null===a||void 0===a?void 0:a.password,error:null===v||void 0===v?void 0:v.password,placeholder:"Password",callback:b}),(0,p.jsx)(o.o,{type:"submit",classN:"auth-signin-buton",children:"Sign In"})]})})}},3083:(e,a,n)=>{n.d(a,{R:()=>l});const l=()=>{}},1726:(e,a,n)=>{n.d(a,{o:()=>o});var l=n(3083),s=n(184);const t=e=>{let{classN:a}=e;return(0,s.jsx)("div",{className:"LoaderCircleUI ".concat(a)})},c={default:"default-btn",red:"red-btn",orange:"orange-btn",blue:"blue-btn",green:"green-btn",gray:"gray-btn"},o=e=>{let{children:a,type:n="button",version:o="default",classN:r="",disabled:i=!1,isLoading:d=!1,onClick:u=l.R,...p}=e;return(0,s.jsx)("button",{...p,className:"ButtonUI ".concat(r," ").concat(c[o]," ").concat(i?"_disabled":""),type:n,onClick:e=>!i&&!d&&u(e),children:d?(0,s.jsx)(t,{}):a})}},971:(e,a,n)=>{n.d(a,{Z:()=>s});var l=n(184);const s=e=>{let{text:a,classN:n="",color:s="",size:t="",align:c="left"}=e;return(0,l.jsx)("h1",{className:"headingUI ".concat(n),style:{color:s||"#000",fontSize:t||"30px",textAlign:c},children:a})}},4437:(e,a,n)=>{n.d(a,{Z:()=>s});var l=n(184);const s=e=>{let{value:a="",placeholder:n="",type:s="text",callback:t,label:c="",name:o,error:r,autoComplete:i="",classN:d="",disabled:u=!1,defaultChecked:p=!1}=e;return(0,l.jsxs)("div",{className:"InputUI ".concat(d),children:[c&&(0,l.jsx)("label",{className:"InputUI__label",htmlFor:"InputUI-".concat(o),children:c}),r&&(0,l.jsx)("span",{className:"error-message",children:r}),(0,l.jsx)("input",{className:"InputUI__input".concat(r?" _error":"").concat(u?" _disabled":""),id:"InputUI-".concat(o),name:o,type:s,onChange:e=>!u&&t(e),..."checkbox"===s?{checked:p}:{value:a},autoComplete:i,...n&&{placeholder:n}})]})}}}]);
//# sourceMappingURL=490.0477aff1.chunk.js.map