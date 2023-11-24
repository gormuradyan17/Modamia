"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[660],{5660:(e,s,r)=>{r.r(s),r.d(s,{default:()=>y});var a=r(5820),l=r(370),i=r(2791),t=r(9434),n=r(1723),c=r(8587);const o=e=>{(0,c.TQ)().then((s=>{e((0,n.lA)(s))})).catch((e=>console.log(e)))};var d=r(1726),u=r(971),m=r(7959),p=r(8779),v=r(8942),x=r(4437),b=r(184);const h=e=>{var s;let{callback:r,errors:a,closePopup:l}=e;const i=(0,t.v9)(n.vf),c=(0,t.I0)();return(0,b.jsxs)("form",{onSubmit:r,className:"new-size",children:[(0,b.jsx)(u.Z,{text:"Add new size",align:"center",color:"#aa8a75"}),(0,b.jsx)("div",{className:"new-size-inputs",children:(0,b.jsx)(x.Z,{placeholder:"Name",value:null===i||void 0===i?void 0:i.name,label:"Name*",name:"name",error:(null===a||void 0===a||null===(s=a.name)||void 0===s?void 0:s.message)||"",callback:e=>{const{target:{name:s,value:r}}=e;c((0,n.gw)({name:s,value:r}))}})}),(0,b.jsxs)("div",{className:"new-size-actions",children:[(0,b.jsx)(d.o,{onClick:()=>l(),version:"gray",children:"Close"}),(0,b.jsx)(d.o,{type:"submit",children:"Add"})]})]})},j=e=>{var s;let{tabs:r}=e;const[a,l]=(0,i.useState)(null===(s=r[0])||void 0===s?void 0:s.heading);return(0,b.jsx)("div",{className:"TabUI",children:(0,b.jsxs)("div",{className:"TabUI-body",children:[(0,b.jsx)("div",{className:"TabUI-heads",children:r&&r.map(((e,s)=>(0,b.jsx)("div",{className:"TabUI-head ".concat(e.heading===a?"_active":""),onClick:()=>{l(e.heading)},children:(0,b.jsx)(u.Z,{color:"#000",text:e.heading,size:"18px",align:"left"})},e.id||s)))}),(0,b.jsx)("div",{className:"TabUI-contents",children:r&&r.map(((e,s)=>(0,b.jsx)("div",{className:"TabUI-content ".concat(e.heading===a?"_active":""),children:e.content||(0,b.jsx)(u.Z,{color:"black",size:"16px",text:"Nothing to show"})},e.id||s)))})]})})},g=e=>{let{size:s,callback:r}=e;return(0,b.jsxs)("div",{className:"size-options",children:[(0,b.jsx)(x.Z,{value:null===s||void 0===s?void 0:s.bust_in,label:"Bust (in)",name:"bust_in",callback:r,type:"number"}),(0,b.jsx)(x.Z,{value:null===s||void 0===s?void 0:s.waist_in,label:"Waist (in)",name:"waist_in",callback:r,type:"number"}),(0,b.jsx)(x.Z,{value:null===s||void 0===s?void 0:s.hips_in,label:"Hips (in)",name:"hips_in",callback:r,type:"number"})]})},N=e=>{let{size:s,callback:r}=e;return(0,b.jsxs)("div",{className:"size-options",children:[(0,b.jsx)(x.Z,{value:null===s||void 0===s?void 0:s.bust_cm,label:"Bust (cm)",name:"bust_cm",callback:r,type:"number"}),(0,b.jsx)(x.Z,{value:null===s||void 0===s?void 0:s.waist_cm,label:"Waist (cm)",name:"waist_cm",callback:r,type:"number"}),(0,b.jsx)(x.Z,{value:null===s||void 0===s?void 0:s.hips_cm,label:"Hips (cm)",name:"hips_cm",callback:r,type:"number"})]})},f=e=>{var s;let{callback:r,closePopup:a,size:l,setSize:i,errors:t,defaultSize:n}=e;const c=e=>{const{target:{name:s,value:r}}=e;i({...l,[s]:r})},o=[{id:"IN",heading:"Inch",content:(0,b.jsx)(g,{size:l,callback:c})},{id:"CM",heading:"CM",content:(0,b.jsx)(N,{size:l,callback:c})}];return(0,b.jsxs)("div",{className:"new-size",children:[(0,b.jsx)(u.Z,{text:"Edit size ".concat(null===n||void 0===n?void 0:n.size),align:"center",color:"#aa8a75"}),(0,b.jsxs)("div",{className:"new-size-inputs",children:[(0,b.jsx)(x.Z,{placeholder:"Name",value:null===l||void 0===l?void 0:l.size,label:"Name*",name:"size",error:(null===t||void 0===t||null===(s=t.name)||void 0===s?void 0:s.message)||"",callback:c}),(0,b.jsx)(j,{tabs:o})]}),(0,b.jsxs)("div",{className:"new-size-actions",children:[(0,b.jsx)(d.o,{onClick:()=>a(),version:"gray",type:"button",children:"Discard"}),(0,b.jsx)(d.o,{onClick:()=>r(),type:"button",children:"Save"})]})]})};var z=r(9806),k=r(1632);const I=e=>{let{sizes:s}=e;const r=(0,t.I0)(),[a,l]=(0,i.useState)(!1),[n,x]=(0,i.useState)({}),[h,j]=(0,i.useState)({}),[g,N]=(0,i.useState)({}),I=()=>{l(!1),x({}),j({}),N({})};return(0,b.jsxs)("div",{className:"sizes-list",children:[null===s||void 0===s?void 0:s.map((e=>(0,b.jsxs)("div",{className:"sizes-list-size",children:[(0,b.jsx)(u.Z,{classN:"size-text _ellipsis",text:e.size,size:"18px"}),(0,b.jsx)(d.o,{classN:"size-button",onClick:()=>(e=>{e&&(x(e),j(e),l(!0))})(e),children:(0,b.jsx)(z.G,{icon:k.TzT})})]},e._id))),a&&(0,b.jsx)(m.Z,{callback:I,children:(0,b.jsx)(f,{callback:async()=>{const e=(null===s||void 0===s?void 0:s.find((e=>e._id===n._id)))||void 0,a=(0,p.n)(n,v.vA);if(a)return N(a);Object.keys(a).length&&N({}),e&&JSON.stringify(n)!==JSON.stringify(e)&&(await(0,c.xR)(n),await o(r)),I()},closePopup:I,size:n,defaultSize:h,errors:g,setSize:x})})]})},y=()=>{const e=(0,t.I0)(),s=(0,t.v9)(n.RC),[r,x]=(0,i.useState)(!1),j=(0,t.v9)(n.vf),[g,N]=(0,i.useState)({});(0,i.useEffect)((()=>{o(e)}),[]);const f=()=>{x(!1),e((0,n.bN)()),N({})};return(0,b.jsxs)("div",{className:"customize-size",children:[(0,b.jsx)(l.Z,{text:"Customize Sizes"}),(0,b.jsx)(d.o,{classN:"add-button",onClick:()=>x(!0),type:"button",children:"New Size"}),(0,b.jsxs)(a.Z,{children:[(0,b.jsxs)("div",{className:"sizes-default-list",children:[(0,b.jsx)(u.Z,{text:"Sizes List",size:"22px"}),null!==s&&void 0!==s&&s.length?(0,b.jsx)(I,{sizes:s}):null]}),r&&(0,b.jsx)(m.Z,{callback:f,children:(0,b.jsx)(h,{callback:async s=>{s.preventDefault();const r=(0,p.n)(j,v.vA);if(r)return N(r);Object.keys(r).length&&N({}),await(0,c.GY)(j),await o(e),f()},closePopup:f,errors:g})})]})]})}},5820:(e,s,r)=>{r.d(s,{Z:()=>l});var a=r(184);const l=e=>{let{children:s}=e;return(0,a.jsx)("div",{className:"main-body",children:s})}},370:(e,s,r)=>{r.d(s,{Z:()=>p});var a=r(971),l=r(1726),i=r(9806),t=r(1632),n=r(1927),c=r(7093),o=r(9434),d=r(1727),u=r(7689),m=r(184);const p=e=>{let{text:s}=e;const r=(0,o.I0)(),p=(0,u.s0)();return(0,m.jsxs)("div",{className:"main-head",children:[(0,m.jsx)(a.Z,{text:s,color:"#aa8a75"}),(0,m.jsxs)(l.o,{classN:"main-head-logout",onClick:async()=>{try{await(0,n.Sr)()&&((0,c.Mz)("accessToken"),r((0,d.tR)(!1)),r((0,d.f4)({})),p("/login"))}catch(e){console.log(e)}},children:[(0,m.jsx)(i.G,{icon:t.jLD}),(0,m.jsx)("span",{children:"Sign out"})]})]})}},98:(e,s,r)=>{r.d(s,{Z:()=>t});var a=r(2791),l=r(4164);function i(e){const s=document.createElement("div");return s.setAttribute("id",e),document.body.appendChild(s),s}const t=function(e){let{children:s,wrapperId:r="react-portal-wrapper"}=e;const[t,n]=(0,a.useState)(null);(0,a.useLayoutEffect)((()=>{let e=document.getElementById(r),s=!1;return e||(s=!0,e=i(r)),n(e),()=>{s&&e.parentNode&&e.parentNode.removeChild(e)}}),[r]);let c=document.getElementById(r);return c||(c=i(r)),null===t?null:(0,l.createPortal)(s,t)}},3083:(e,s,r)=>{r.d(s,{R:()=>a});const a=()=>{}},1726:(e,s,r)=>{r.d(s,{o:()=>n});var a=r(3083),l=r(184);const i=e=>{let{classN:s}=e;return(0,l.jsx)("div",{className:"LoaderCircleUI ".concat(s)})},t={default:"default-btn",red:"red-btn",orange:"orange-btn",blue:"blue-btn",green:"green-btn",gray:"gray-btn"},n=e=>{let{children:s,type:r="button",version:n="default",classN:c="",disabled:o=!1,isLoading:d=!1,onClick:u=a.R,...m}=e;return(0,l.jsx)("button",{...m,className:"ButtonUI ".concat(c," ").concat(t[n]," ").concat(o?"_disabled":""),type:r,onClick:e=>!o&&!d&&u(e),children:d?(0,l.jsx)(i,{}):s})}},971:(e,s,r)=>{r.d(s,{Z:()=>l});var a=r(184);const l=e=>{let{text:s,classN:r="",color:l="",size:i="",align:t="left"}=e;return(0,a.jsx)("h1",{className:"headingUI ".concat(r),style:{color:l||"#000",fontSize:i||"30px",textAlign:t},children:s})}},4437:(e,s,r)=>{r.d(s,{Z:()=>l});var a=r(184);const l=e=>{let{value:s,placeholder:r="",type:l="text",callback:i,label:t="",name:n,error:c,autoComplete:o=""}=e;return(0,a.jsxs)("div",{className:"InputUI",children:[t&&(0,a.jsx)("label",{className:"InputUI__label",htmlFor:"InputUI-".concat(n),children:t}),c&&(0,a.jsx)("span",{className:"error-message",children:c}),(0,a.jsx)("input",{className:"InputUI__input".concat(c?" _error":""),id:"InputUI-".concat(n),name:n,type:l,defaultValue:s,onChange:i,...o&&{autoComplete:o},...r&&{placeholder:r}})]})}},7959:(e,s,r)=>{r.d(s,{Z:()=>n});var a=r(98),l=r(9806),i=r(1632),t=r(184);const n=e=>{let{callback:s,children:r}=e;return(0,t.jsx)(a.Z,{children:(0,t.jsxs)("div",{className:"PopupUI",children:[(0,t.jsxs)("div",{className:"PopupUI__container",children:[(0,t.jsx)("div",{className:"PopupUI__body",children:r}),(0,t.jsx)("div",{className:"PopupUI__icon",onClick:()=>s(),children:(0,t.jsx)(l.G,{icon:i.g82,fontSize:"18px",color:"#fff"})})]}),(0,t.jsx)("div",{className:"PopupUI__BG",onClick:()=>s()})]})})}},8779:(e,s,r)=>{r.d(s,{n:()=>a});const a=(e,s)=>{const r=Object.keys(e).reduce(((r,a)=>{const l=s[a]||[],i=e[a];return l.forEach((e=>{const s=e.rule,l=e.error;void 0===s.required||i||(r[a]=l),void 0===s.test||s.test.test(i)||(r[a]=l)})),r}),{});return!!Object.keys(r).length&&r}},8942:(e,s,r)=>{r.d(s,{E9:()=>n,Vu:()=>c,hq:()=>u,ib:()=>o,mX:()=>t,o$:()=>a,uP:()=>l,un:()=>i,vA:()=>d,xj:()=>m});const a={name:[{rule:{required:!0},error:{message:"Name is required"}}],hexcode:[{rule:{required:!0},error:{message:"HexCode is required"}},{rule:{test:/^#(?:[0-9a-fA-F]{3}){1,2}$/},error:{message:"Incorrect format for HexCode"}}]},l={name:[{rule:{required:!0},error:{message:"Name is required"}}],price:[{rule:{required:!0},error:{message:"Price is required"}}]},i={highresurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Highres Url"}}],previewurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Preview Url"}}]},t={name:[{rule:{required:!0},error:{message:"Name is required"}}]},n={fronturl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Front Url"}}],backurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Back Url"}}]},c={name:[{rule:{required:!0},error:{message:"Name is required"}}],price:[{rule:{required:!0},error:{message:"Price is required"}}],type:[{rule:{required:!0},error:{message:"Type is required"}}],orientation:[{rule:{required:!0},error:{message:"Orientation is required"}}]},o={silhouetteurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Silhouette Url"}}]},d={name:[{rule:{required:!0},error:{message:"Name is required"}}]},u={name:[{rule:{required:!0},error:{message:"Name is required"}}]},m={email:[{rule:{required:!0},error:{message:"Email is required"}}],password:[{rule:{required:!0},error:{message:"Password is required"}}]}}}]);
//# sourceMappingURL=660.6453df05.chunk.js.map