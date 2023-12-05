"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[660],{8180:(e,s,r)=>{r.d(s,{Z:()=>t});var a=r(1726),i=r(971),l=r(184);const t=e=>{let{header:s,text:r,removeCallback:t,discardCallback:n}=e;return(0,l.jsxs)("div",{className:"remove-some",children:[(0,l.jsx)(i.Z,{text:s,align:"center",color:"#aa8a75"}),(0,l.jsx)("div",{className:"remove-some-text",dangerouslySetInnerHTML:{__html:r}}),(0,l.jsxs)("div",{className:"remove-some-actions",children:[(0,l.jsx)(a.o,{onClick:()=>n(),version:"gray",children:"Discard"}),(0,l.jsx)(a.o,{onClick:()=>t(),version:"red",children:"Remove"})]})]})}},5660:(e,s,r)=>{r.r(s),r.d(s,{default:()=>I});var a=r(5820),i=r(370),l=r(2791),t=r(9434),n=r(1723),c=r(8587);var o=r(1726),d=r(971),u=r(7959),m=r(8779),v=r(8942),h=r(4437),x=r(184);const p=e=>{var s;let{callback:r,errors:a,closePopup:i}=e;const l=(0,t.v9)(n.vf),c=(0,t.I0)();return(0,x.jsxs)("form",{onSubmit:r,className:"new-size",children:[(0,x.jsx)(d.Z,{text:"Add new size",align:"center",color:"#aa8a75"}),(0,x.jsx)("div",{className:"new-size-inputs",children:(0,x.jsx)(h.Z,{placeholder:"Name",value:null===l||void 0===l?void 0:l.name,label:"Name*",name:"name",error:(null===a||void 0===a||null===(s=a.name)||void 0===s?void 0:s.message)||"",callback:e=>{const{target:{name:s,value:r}}=e;c((0,n.gw)({name:s,value:r}))}})}),(0,x.jsxs)("div",{className:"new-size-actions",children:[(0,x.jsx)(o.o,{onClick:()=>i(),version:"gray",children:"Close"}),(0,x.jsx)(o.o,{type:"submit",children:"Add"})]})]})},b=e=>{var s;let{tabs:r}=e;const[a,i]=(0,l.useState)(null===(s=r[0])||void 0===s?void 0:s.heading);return(0,x.jsx)("div",{className:"TabUI",children:(0,x.jsxs)("div",{className:"TabUI-body",children:[(0,x.jsx)("div",{className:"TabUI-heads",children:r&&r.map(((e,s)=>(0,x.jsx)("div",{className:"TabUI-head ".concat(e.heading===a?"_active":""),onClick:()=>{i(e.heading)},children:(0,x.jsx)(d.Z,{color:"#000",text:e.heading,size:"18px",align:"left"})},e.id||s)))}),(0,x.jsx)("div",{className:"TabUI-contents",children:r&&r.map(((e,s)=>(0,x.jsx)("div",{className:"TabUI-content ".concat(e.heading===a?"_active":""),children:e.content||(0,x.jsx)(d.Z,{color:"black",size:"16px",text:"Nothing to show"})},e.id||s)))})]})})},j=e=>{let{size:s,callback:r}=e;return(0,x.jsxs)("div",{className:"size-options",children:[(0,x.jsx)(h.Z,{value:null===s||void 0===s?void 0:s.bust_in,label:"Bust (in)",name:"bust_in",callback:r,type:"number"}),(0,x.jsx)(h.Z,{value:null===s||void 0===s?void 0:s.waist_in,label:"Waist (in)",name:"waist_in",callback:r,type:"number"}),(0,x.jsx)(h.Z,{value:null===s||void 0===s?void 0:s.hips_in,label:"Hips (in)",name:"hips_in",callback:r,type:"number"})]})},g=e=>{let{size:s,callback:r}=e;return(0,x.jsxs)("div",{className:"size-options",children:[(0,x.jsx)(h.Z,{value:null===s||void 0===s?void 0:s.bust_cm,label:"Bust (cm)",name:"bust_cm",callback:r,type:"number"}),(0,x.jsx)(h.Z,{value:null===s||void 0===s?void 0:s.waist_cm,label:"Waist (cm)",name:"waist_cm",callback:r,type:"number"}),(0,x.jsx)(h.Z,{value:null===s||void 0===s?void 0:s.hips_cm,label:"Hips (cm)",name:"hips_cm",callback:r,type:"number"})]})},N=e=>{var s;let{callback:r,closePopup:a,size:i,setSize:l,errors:t,defaultSize:n}=e;const c=e=>{const{target:{name:s,value:r}}=e;l({...i,[s]:r})},u=[{id:"IN",heading:"Inch",content:(0,x.jsx)(j,{size:i,callback:c})},{id:"CM",heading:"CM",content:(0,x.jsx)(g,{size:i,callback:c})}];return(0,x.jsxs)("div",{className:"new-size",children:[(0,x.jsx)(d.Z,{text:"Edit size ".concat(null===n||void 0===n?void 0:n.size),align:"center",color:"#aa8a75"}),(0,x.jsxs)("div",{className:"new-size-inputs",children:[(0,x.jsx)(h.Z,{placeholder:"Name",value:null===i||void 0===i?void 0:i.size,label:"Name*",name:"size",error:(null===t||void 0===t||null===(s=t.name)||void 0===s?void 0:s.message)||"",callback:c}),(0,x.jsx)(b,{tabs:u})]}),(0,x.jsxs)("div",{className:"new-size-actions",children:[(0,x.jsx)(o.o,{onClick:()=>a(),version:"gray",type:"button",children:"Discard"}),(0,x.jsx)(o.o,{onClick:()=>r(),type:"button",children:"Save"})]})]})};var k=r(9806),z=r(1632),f=r(8180);const y=e=>{let{sizes:s}=e;const r=(0,t.I0)(),[a,i]=(0,l.useState)(!1),[h,p]=(0,l.useState)({}),[b,j]=(0,l.useState)({}),[g,y]=(0,l.useState)({}),[I,q]=(0,l.useState)(!1),[_,w]=(0,l.useState)({}),C=()=>{i(!1),p({}),j({}),y({})},Z=()=>{q(!1),w({})};return(0,x.jsxs)("div",{className:"sizes-list",children:[null===s||void 0===s?void 0:s.map((e=>(0,x.jsxs)("div",{className:"sizes-list-size",children:[(0,x.jsx)(d.Z,{classN:"size-text _ellipsis",text:e.size,size:"18px"}),(0,x.jsxs)("div",{className:"size-buttons",children:[(0,x.jsx)(o.o,{classN:"size-button",onClick:()=>(e=>{e&&(p(e),j(e),i(!0))})(e),children:(0,x.jsx)(k.G,{icon:z.TzT})}),(0,x.jsx)(o.o,{classN:"size-button",onClick:()=>(w(e),void q(!0)),children:(0,x.jsx)(k.G,{icon:z.$aW})})]})]},e._id))),a&&(0,x.jsx)(u.Z,{callback:C,children:(0,x.jsx)(N,{callback:async()=>{const e=(null===s||void 0===s?void 0:s.find((e=>e._id===h._id)))||void 0,a=(0,m.n)(h,v.vA);if(a)return y(a);Object.keys(a).length&&y({}),e&&JSON.stringify(h)!==JSON.stringify(e)&&await(0,c.xR)(h).then((e=>{r((0,n.lA)(e))})),C()},closePopup:C,size:h,defaultSize:b,errors:g,setSize:p})}),I&&(0,x.jsx)(u.Z,{callback:Z,children:(0,x.jsx)(f.Z,{header:"Remove Size",text:"Do you want to remove the size <span> ".concat(null===_||void 0===_?void 0:_.size," ?</span>"),discardCallback:Z,removeCallback:async()=>{null!==_&&void 0!==_&&_._id&&(await(0,c.ci)(_).then((e=>{r((0,n.lA)(e))})),q(!1))}})})]})},I=()=>{const e=(0,t.I0)(),s=(0,t.v9)(n.RC),[r,h]=(0,l.useState)(!1),b=(0,t.v9)(n.vf),[j,g]=(0,l.useState)({});(0,l.useEffect)((()=>{(e=>{(0,c.TQ)().then((s=>{e((0,n.lA)(s))})).catch((e=>console.log(e)))})(e)}),[]);const N=()=>{h(!1),e((0,n.bN)()),g({})};return(0,x.jsxs)("div",{className:"customize-size",children:[(0,x.jsx)(i.Z,{text:"Customize Sizes"}),(0,x.jsx)(o.o,{classN:"add-button",onClick:()=>h(!0),type:"button",children:"New Size"}),(0,x.jsxs)(a.Z,{children:[(0,x.jsxs)("div",{className:"sizes-default-list",children:[(0,x.jsx)(d.Z,{text:"Sizes List",size:"22px"}),null!==s&&void 0!==s&&s.length?(0,x.jsx)(y,{sizes:s}):null]}),r&&(0,x.jsx)(u.Z,{callback:N,children:(0,x.jsx)(p,{callback:async r=>{r.preventDefault();const a=(0,m.n)(b,v.vA);if(a)return g(a);Object.keys(a).length&&g({}),await(0,c.GY)(b).then((r=>{e((0,n.lA)([...s,r]))})),N()},closePopup:N,errors:j})})]})]})}},5820:(e,s,r)=>{r.d(s,{Z:()=>i});var a=r(184);const i=e=>{let{children:s}=e;return(0,a.jsx)("div",{className:"main-body",children:s})}},370:(e,s,r)=>{r.d(s,{Z:()=>v});var a=r(971),i=r(1726),l=r(9806),t=r(1632),n=r(1927),c=r(7093),o=r(9434),d=r(1727),u=r(7689),m=r(184);const v=e=>{let{text:s}=e;const r=(0,o.I0)(),v=(0,u.s0)();return(0,m.jsxs)("div",{className:"main-head",children:[(0,m.jsx)(a.Z,{text:s,color:"#aa8a75"}),(0,m.jsxs)(i.o,{classN:"main-head-logout",onClick:async()=>{try{await(0,n.Sr)()&&((0,c.Mz)("accessToken"),r((0,d.tR)(!1)),r((0,d.f4)({})),v("/login"))}catch(e){console.log(e)}},children:[(0,m.jsx)(l.G,{icon:t.jLD}),(0,m.jsx)("span",{children:"Sign out"})]})]})}},98:(e,s,r)=>{r.d(s,{Z:()=>t});var a=r(2791),i=r(4164);function l(e){const s=document.createElement("div");return s.setAttribute("id",e),document.body.appendChild(s),s}const t=function(e){let{children:s,wrapperId:r="react-portal-wrapper"}=e;const[t,n]=(0,a.useState)(null);(0,a.useLayoutEffect)((()=>{let e=document.getElementById(r),s=!1;return e||(s=!0,e=l(r)),n(e),()=>{s&&e.parentNode&&e.parentNode.removeChild(e)}}),[r]);let c=document.getElementById(r);return c||(c=l(r)),null===t?null:(0,i.createPortal)(s,t)}},3083:(e,s,r)=>{r.d(s,{R:()=>a});const a=()=>{}},1726:(e,s,r)=>{r.d(s,{o:()=>n});var a=r(3083),i=r(184);const l=e=>{let{classN:s}=e;return(0,i.jsx)("div",{className:"LoaderCircleUI ".concat(s)})},t={default:"default-btn",red:"red-btn",orange:"orange-btn",blue:"blue-btn",green:"green-btn",gray:"gray-btn"},n=e=>{let{children:s,type:r="button",version:n="default",classN:c="",disabled:o=!1,isLoading:d=!1,onClick:u=a.R,...m}=e;return(0,i.jsx)("button",{...m,className:"ButtonUI ".concat(c," ").concat(t[n]," ").concat(o?"_disabled":""),type:r,onClick:e=>!o&&!d&&u(e),children:d?(0,i.jsx)(l,{}):s})}},971:(e,s,r)=>{r.d(s,{Z:()=>i});var a=r(184);const i=e=>{let{text:s,classN:r="",color:i="",size:l="",align:t="left"}=e;return(0,a.jsx)("h1",{className:"headingUI ".concat(r),style:{color:i||"#000",fontSize:l||"30px",textAlign:t},children:s})}},4437:(e,s,r)=>{r.d(s,{Z:()=>i});var a=r(184);const i=e=>{let{value:s="",placeholder:r="",type:i="text",callback:l,label:t="",name:n,error:c,autoComplete:o="",classN:d="",disabled:u=!1,defaultChecked:m=!1}=e;return(0,a.jsxs)("div",{className:"InputUI ".concat(d),children:[t&&(0,a.jsx)("label",{className:"InputUI__label",htmlFor:"InputUI-".concat(n),children:t}),c&&(0,a.jsx)("span",{className:"error-message",children:c}),(0,a.jsx)("input",{className:"InputUI__input".concat(c?" _error":"").concat(u?" _disabled":""),id:"InputUI-".concat(n),name:n,type:i,onChange:e=>!u&&l(e),..."checkbox"===i?{checked:m}:{value:s},...o&&{autoComplete:o},...r&&{placeholder:r}})]})}},7959:(e,s,r)=>{r.d(s,{Z:()=>n});var a=r(98),i=r(9806),l=r(1632),t=r(184);const n=e=>{let{callback:s,children:r}=e;return(0,t.jsx)(a.Z,{children:(0,t.jsxs)("div",{className:"PopupUI",children:[(0,t.jsxs)("div",{className:"PopupUI__container",children:[(0,t.jsx)("div",{className:"PopupUI__body",children:r}),(0,t.jsx)("div",{className:"PopupUI__icon",onClick:()=>s(),children:(0,t.jsx)(i.G,{icon:l.g82,fontSize:"18px",color:"#fff"})})]}),(0,t.jsx)("div",{className:"PopupUI__BG",onClick:()=>s()})]})})}},8779:(e,s,r)=>{r.d(s,{n:()=>a});const a=(e,s)=>{const r=Object.keys(e).reduce(((r,a)=>{const i=s[a]||[],l=e[a];return i.forEach((e=>{const s=e.rule,i=e.error;void 0===s.required||l||(r[a]=i),void 0===s.test||s.test.test(l)||(r[a]=i)})),r}),{});return!!Object.keys(r).length&&r}},8942:(e,s,r)=>{r.d(s,{E9:()=>n,Vu:()=>c,hq:()=>u,ib:()=>o,mX:()=>t,o$:()=>a,uP:()=>i,un:()=>l,vA:()=>d,xj:()=>m});const a={name:[{rule:{required:!0},error:{message:"Name is required"}}],hexcode:[{rule:{required:!0},error:{message:"HexCode is required"}},{rule:{test:/^#(?:[0-9a-fA-F]{3}){1,2}$/},error:{message:"Incorrect format for HexCode"}}]},i={name:[{rule:{required:!0},error:{message:"Name is required"}}],price:[{rule:{required:!0},error:{message:"Price is required"}}]},l={highresurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Highres Url"}}],previewurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Preview Url"}}]},t={name:[{rule:{required:!0},error:{message:"Name is required"}}],width:[{rule:{required:!0},error:{message:"Width is required"}}],height:[{rule:{required:!0},error:{message:"Height is required"}}]},n={fronturl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Front Url"}}],backurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Back Url"}}]},c={name:[{rule:{required:!0},error:{message:"Name is required"}}],price:[{rule:{required:!0},error:{message:"Price is required"}}],type:[{rule:{required:!0},error:{message:"Type is required"}}],orientation:[{rule:{required:!0},error:{message:"Orientation is required"}}],width:[{rule:{required:!0},error:{message:"Width is required"}}],height:[{rule:{required:!0},error:{message:"Height is required"}}]},o={silhouetteurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Silhouette Url"}}]},d={name:[{rule:{required:!0},error:{message:"Name is required"}}]},u={name:[{rule:{required:!0},error:{message:"Name is required"}}]},m={email:[{rule:{required:!0},error:{message:"Email is required"}}],password:[{rule:{required:!0},error:{message:"Password is required"}}]}}}]);
//# sourceMappingURL=660.3e010e5e.chunk.js.map