"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[617],{7145:(e,n,t)=>{t.d(n,{Z:()=>o});var l=t(2791),s=t(971),a=t(184);const o=e=>{let{options:n,onChange:t,label:o="",error:c,details:i,type:d}=e;const r=(0,l.useRef)(null),u=(0,l.useRef)(null);return(0,a.jsxs)("div",{className:"GarmentDropdownCheckbox",ref:r,children:[c&&(0,a.jsx)("span",{className:"error-message",children:c}),o&&(0,a.jsx)(s.Z,{size:"18px",color:"#aa8a75",text:o}),(0,a.jsx)("div",{className:"GarmentDropdownCheckbox__content customYScrollbar",ref:u,children:Boolean(null===n||void 0===n?void 0:n.length)&&(null===n||void 0===n?void 0:n.map(((e,n)=>{var l,s;const{id:o="",name:c="",colors:r=null}=e||{},u=(null===i||void 0===i||null===(l=i.palettes)||void 0===l||null===(s=l[d])||void 0===s?void 0:s.some((e=>e===o)))||!1;return(0,a.jsxs)("label",{htmlFor:o,className:"GarmentDropdownCheckbox__option",children:[c,(0,a.jsx)("input",{className:"GarmentDropdownCheckbox__checkbox",type:"checkbox",name:o,id:o,checked:u,onChange:n=>t(n,e)})]},o)})))})]})}},4459:(e,n,t)=>{t.d(n,{Z:()=>d});var l=t(9434),s=t(9153),a=t(7098),o=t(971),c=t(4437),i=t(184);const d=e=>{let{details:n,callback:t}=e;const d=(0,l.v9)(s.wm);return(0,i.jsx)("div",{className:"mannequin-list customXScrollbar",children:null===d||void 0===d?void 0:d.map((e=>{const l=(null===n||void 0===n?void 0:n.mannequin_id)&&(null===n||void 0===n?void 0:n.mannequin_id)!==(null===e||void 0===e?void 0:e._id);return(0,i.jsxs)("div",{className:"mannequins-list-mannequin".concat(l?" _disabled":""),children:[(0,i.jsx)(o.Z,{classN:"mannequin-list-text _ellipsis",text:e.name,size:"16px"}),(0,i.jsx)("div",{className:"mannequin-list-image",children:(0,i.jsx)("img",{src:"".concat(a.jV).concat(e.fronturl),className:"mannequin-list-img",alt:e.name})}),(0,i.jsx)(c.Z,{classN:"garment-input",type:"checkbox",callback:n=>t(n,null===e||void 0===e?void 0:e._id),defaultChecked:(null===n||void 0===n?void 0:n.mannequin_id)===(null===e||void 0===e?void 0:e._id),name:"",disabled:l})]},e._id)}))})}},1227:(e,n,t)=>{t.d(n,{Z:()=>m});var l=t(7093),s=t(971),a=t(4437),o=t(1632),c=t(9806),i=t(2791),d=t(7131),r=t(1726),u=t(184);const v=e=>{let{text:n,options:t,onChange:l,classN:s="",error:a,defaultValue:v}=e;const[m,h]=(0,i.useState)(!1),[x,p]=(0,i.useState)(n),g=(0,i.useRef)(null);(0,d.Z)([g],(()=>h(!1)),m);return(0,u.jsxs)(u.Fragment,{children:[a&&(0,u.jsx)("span",{className:"error-message",children:a}),(0,u.jsxs)("div",{className:"GarmentDropdown ".concat(s),ref:g,children:[(0,u.jsx)(r.o,{classN:"GarmentDropdown__button",onClick:()=>{h(!m)},children:(0,u.jsx)(c.G,{icon:o.Krp})}),(0,u.jsx)("div",{className:"GarmentDropdown__content".concat(m?" _active":""),children:Boolean(null===t||void 0===t?void 0:t.length)&&(null===t||void 0===t?void 0:t.map(((e,n)=>{let{id:s,text:a,value:o}=e;return(0,u.jsx)("div",{onClick:e=>function(e,n){const s=e.target.textContent;s&&p(s),l(t[n]),h(!m)}(e,n),className:"GarmentDropdown__option".concat(v===o?" _selected":""),children:a||o},s)})))})]})]})},m=e=>{let{header:n,content:t,srcBase:o,callback:c,callbackDropdown:d,type:r,details:m}=e;const h=(0,l.uH)(),[x,p]=(0,i.useState)(0),[g,b]=(0,i.useState)([]);(0,i.useMemo)((()=>{b(t)}),[t]);const j=e=>{e.preventDefault()};return(0,u.jsxs)("div",{className:"silhouettes-items",children:[(0,u.jsx)(s.Z,{text:n,size:"20px"}),(0,u.jsx)("div",{className:"silhouettes-items-body customXScrollbar",children:null!==g&&void 0!==g&&g.length?g.map(((e,n)=>{var t;const i=null===m||void 0===m||null===(t=m[r])||void 0===t?void 0:t.find((n=>n.id===(null===e||void 0===e?void 0:e._id)));return(0,u.jsxs)("div",{className:"silhouettes-list-silhouette",draggable:!0,onDragStart:e=>((e,n)=>{p(n)})(0,n),onDragOver:j,onDrop:e=>(async(e,n)=>{e.preventDefault();const t=g[x],l=g[n];if(t&&l&&n!==x){const e=structuredClone(g);e[n]=t,e[x]=l,b(e)}})(e,n),children:[(0,u.jsx)(s.Z,{classN:"silhouettes-list-text _ellipsis",text:e.name,color:l.ue,size:"16px"}),(0,u.jsx)("div",{className:"silhouettes-list-image",children:(0,u.jsx)("img",{src:"".concat(o).concat(e.silhouetteurl),className:"silhouettes-list-img",alt:e.name})}),(0,u.jsxs)("div",{className:"silhouettes-list-actions",children:[(0,u.jsx)(a.Z,{classN:"garment-input",type:"checkbox",callback:()=>c(null===e||void 0===e?void 0:e._id),defaultChecked:i,name:""}),i&&(0,u.jsx)(v,{options:h,defaultValue:null===i||void 0===i?void 0:i.order,onChange:n=>d(n,null===e||void 0===e?void 0:e._id,r)})]})]},e._id)})):(0,u.jsx)(s.Z,{text:"Nothing found",color:l.ue,size:"16px"})})]})}},9617:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var l=t(5820),s=t(370),a=t(2791),o=t(9434),c=t(5227),i=t(558),d=t(4459),r=t(6100),u=t(1726),v=t(8587),m=t(4437),h=t(1227),x=t(7098),p=t(1717),g=t(7093),b=t(7689),j=t(7145),k=t(3944),N=t(9158),f=t(5065),_=t(8151),C=t(184);const y=()=>{const e=(0,o.I0)(),n=(0,o.v9)(r.vf),t=(0,b.s0)();(0,a.useEffect)((()=>((0,c.T)(e),(0,i.R)(e),(0,f.gx)(e),(0,_.Ax)(e),()=>{e((0,r.O_)())})),[]);const y=(0,o.v9)(p.Q3),Z=(0,a.useMemo)((()=>y.filter((e=>"Top"===e.type))),[y]),w=(0,a.useMemo)((()=>y.filter((e=>"Bottom"===e.type))),[y]),D=(0,a.useMemo)((()=>y.filter((e=>"Sleeve"===(null===e||void 0===e?void 0:e.type)))),[y]),I=(0,o.v9)(k.Pn),S=(0,g.zr)(I)||[{}],q=(0,o.v9)(N.MK),B=(0,g.zr)(q)||[{}],G=(t,l)=>{if(t){const s=structuredClone(n)[l],a=null===s||void 0===s?void 0:s.findIndex((e=>e.id===t));-1!==a?s.splice(a,1):s.push({id:t,order:1}),e((0,r.kw)({name:l,value:s}))}},z=(t,l,s)=>{if(l){const{value:a}=t,o=structuredClone(n)[s],c=null===o||void 0===o?void 0:o.findIndex((e=>e.id===l));-1!==c&&(o[c].order=a),e((0,r.kw)({name:s,value:o}))}},R=(t,l,s)=>{const{target:{checked:a}}=t,{id:o}=l;if(o){const t=structuredClone(n),l=null===t||void 0===t?void 0:t.palettes;if(a)null===l||void 0===l||l[s].push(o);else{const e=null===l||void 0===l?void 0:l[s].findIndex((e=>e===o));-1!==e&&(null===l||void 0===l||l[s].splice(e,1))}e((0,r.kw)({name:"palettes",value:l}))}},U=(0,g.W_)(n);return(0,C.jsxs)("div",{children:[(0,C.jsx)(s.Z,{text:"New Garment"}),(0,C.jsx)(l.Z,{children:(0,C.jsxs)("div",{className:"garments-list-content",children:[(0,C.jsx)(u.o,{classN:"add-garment-button",onClick:async()=>{null!==n&&void 0!==n&&n.mannequin_id&&null!==n&&void 0!==n&&n.name&&(await(0,v.Ct)(n),e((0,r.O_)()),t("/garments"))},type:"button",disabled:!U,children:"Add Garment"}),(0,C.jsx)(m.Z,{classN:"add-garment-input",callback:n=>{const{target:{name:t,value:l}}=n;e((0,r.kw)({name:t,value:l}))},value:null===n||void 0===n?void 0:n.name,name:"name",label:"Name*"}),(0,C.jsxs)("div",{className:"garments-list-top",children:[(0,C.jsx)(d.Z,{details:n,callback:(n,t)=>((n,t)=>{const{target:{checked:l}}=n;t&&e((0,r.kw)({name:"mannequin_id",value:l?t:""}))})(n,t)}),(0,C.jsxs)("div",{className:"garments-list-dropdowns",children:[(0,C.jsx)(j.Z,{options:S,onChange:(e,n)=>R(e,n,"colors"),label:"Color palettes",details:n,type:"colors"}),(0,C.jsx)(j.Z,{options:B,onChange:(e,n)=>R(e,n,"prints"),label:"Print palettes",details:n,type:"prints"})]})]}),(0,C.jsx)(h.Z,{header:"Top Silhouettes",content:Z,srcBase:x.vj,callback:e=>G(e,"tops"),callbackDropdown:z,type:"tops",details:n}),(0,C.jsx)(h.Z,{header:"Bottom Silhouettes",content:w,srcBase:x.LB,callback:e=>G(e,"bottoms"),callbackDropdown:z,type:"bottoms",details:n}),(0,C.jsx)(h.Z,{header:"Sleeve Silhouettes",content:D,srcBase:x.Ex,callback:e=>G(e,"sleeves"),callbackDropdown:z,type:"sleeves",details:n})]})})]})}},5820:(e,n,t)=>{t.d(n,{Z:()=>s});var l=t(184);const s=e=>{let{children:n}=e;return(0,l.jsx)("div",{className:"main-body",children:n})}},370:(e,n,t)=>{t.d(n,{Z:()=>m});var l=t(971),s=t(1726),a=t(9806),o=t(1632),c=t(1927),i=t(7093),d=t(9434),r=t(1727),u=t(7689),v=t(184);const m=e=>{let{text:n}=e;const t=(0,d.I0)(),m=(0,u.s0)();return(0,v.jsxs)("div",{className:"main-head",children:[(0,v.jsx)(l.Z,{text:n,color:"#aa8a75"}),(0,v.jsxs)(s.o,{classN:"main-head-logout",onClick:async()=>{try{await(0,c.Sr)()&&((0,i.Mz)("accessToken"),t((0,r.tR)(!1)),t((0,r.f4)({})),m("/login"))}catch(e){console.log(e)}},children:[(0,v.jsx)(a.G,{icon:o.jLD}),(0,v.jsx)("span",{children:"Sign out"})]})]})}},5065:(e,n,t)=>{t.d(n,{Kc:()=>o,gx:()=>c,x0:()=>a});var l=t(3944),s=t(8587);const a=e=>{(0,s.EC)().then((n=>{e((0,l.Ag)(n))})).catch((e=>console.log(e)))},o=e=>{(0,s.So)().then((n=>{e((0,l.Ys)(n))})).catch((e=>console.log(e)))},c=e=>{(0,s.i9)().then((n=>{e((0,l.Bw)(n))})).catch((e=>console.log(e)))}},558:(e,n,t)=>{t.d(n,{R:()=>a});var l=t(9153),s=t(8587);const a=e=>{(0,s.Km)().then((n=>{e((0,l.go)(n))})).catch((e=>console.log(e)))}},8151:(e,n,t)=>{t.d(n,{Ax:()=>c,QP:()=>a,hX:()=>o});var l=t(9158),s=t(8587);const a=e=>{(0,s.yV)().then((n=>{e((0,l.rC)(n))})).catch((e=>console.log(e)))},o=e=>{(0,s.BT)().then((n=>{e((0,l.$u)(n))})).catch((e=>console.log(e)))},c=e=>{(0,s.qr)().then((n=>{e((0,l.cz)(n))})).catch((e=>console.log(e)))}},5227:(e,n,t)=>{t.d(n,{T:()=>a});var l=t(1717),s=t(8587);const a=e=>{(0,s.Rc)().then((n=>{e((0,l.$F)(n))})).catch((e=>console.log(e)))}},3083:(e,n,t)=>{t.d(n,{R:()=>l});const l=()=>{}},1726:(e,n,t)=>{t.d(n,{o:()=>c});var l=t(3083),s=t(184);const a=e=>{let{classN:n}=e;return(0,s.jsx)("div",{className:"LoaderCircleUI ".concat(n)})},o={default:"default-btn",red:"red-btn",orange:"orange-btn",blue:"blue-btn",green:"green-btn",gray:"gray-btn"},c=e=>{let{children:n,type:t="button",version:c="default",classN:i="",disabled:d=!1,isLoading:r=!1,onClick:u=l.R,...v}=e;return(0,s.jsx)("button",{...v,className:"ButtonUI ".concat(i," ").concat(o[c]," ").concat(d?"_disabled":""),type:t,onClick:e=>!d&&!r&&u(e),children:r?(0,s.jsx)(a,{}):n})}},971:(e,n,t)=>{t.d(n,{Z:()=>s});var l=t(184);const s=e=>{let{text:n,classN:t="",color:s="",size:a="",align:o="left"}=e;return(0,l.jsx)("h1",{className:"headingUI ".concat(t),style:{color:s||"#000",fontSize:a||"30px",textAlign:o},children:n})}},4437:(e,n,t)=>{t.d(n,{Z:()=>s});var l=t(184);const s=e=>{let{value:n="",placeholder:t="",type:s="text",callback:a,label:o="",name:c,error:i,autoComplete:d="",classN:r="",disabled:u=!1,defaultChecked:v=!1}=e;return(0,l.jsxs)("div",{className:"InputUI ".concat(r),children:[o&&(0,l.jsx)("label",{className:"InputUI__label",htmlFor:"InputUI-".concat(c),children:o}),i&&(0,l.jsx)("span",{className:"error-message",children:i}),(0,l.jsx)("input",{className:"InputUI__input".concat(i?" _error":"").concat(u?" _disabled":""),id:"InputUI-".concat(c),name:c,type:s,onChange:e=>!u&&a(e),..."checkbox"===s?{checked:v}:{value:n},...d&&{autoComplete:d},...t&&{placeholder:t}})]})}},7131:(e,n,t)=>{t.d(n,{Z:()=>s});var l=t(2791);const s=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,l.useEffect)((()=>{const t=t=>{let l=!0;(null===e||void 0===e?void 0:e.length)&&(null===e||void 0===e||e.forEach((e=>{e.current&&e.current.contains(t.target)&&(l=!1)}))),l&&n()};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}}),[t]),{}}}}]);
//# sourceMappingURL=617.73d67848.chunk.js.map