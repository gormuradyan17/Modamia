"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[385],{767:(e,t,l)=>{l.r(t),l.d(t,{default:()=>b});var a=l(5820),o=l(370),n=l(2791),s=l(9434),i=l(3944),d=l(1726),c=l(971),r=l(2201),v=l(7093),u=l(184);const x=e=>{let{palettes:t}=e;const l=(0,s.v9)(i.FG),a=(0,s.v9)(i.Vh),[o,d]=(0,n.useState)(0),[x,p]=(0,n.useState)(0),m=(0,s.I0)(),h=e=>{e.preventDefault()};return(0,u.jsx)("div",{className:"palettes-list",children:null===a||void 0===a?void 0:a.map(((e,a)=>{const{name:n="",_id:s=""}=e||{},j=null===t||void 0===t?void 0:t.findIndex((e=>{var t;return(null===e||void 0===e||null===(t=e._id)||void 0===t?void 0:t.variant_id)===s})),g=t[j],{grouped:f=[]}=g||{};return(0,u.jsxs)("div",{className:"palette-body",children:[(0,u.jsx)(c.Z,{classN:"palette-variantname",text:n,color:v.ue,size:"18px"}),(0,u.jsx)("div",{className:"palette-content customXScrollbar",children:null===f||void 0===f?void 0:f.map(((e,a)=>{const n=null===l||void 0===l?void 0:l.find((t=>t._id===(null===e||void 0===e?void 0:e.color_id))),{hexcode:s="",name:v=""}=n||{};return(0,u.jsx)("div",{style:{backgroundColor:s},className:"palette-elem",draggable:!0,onDragStart:e=>((e,t,l)=>{d(t),p(l)})(0,a,j),onDragOver:h,onDrop:e=>(async(e,l,a)=>{var n,s,d,c;e.preventDefault();const v=null===(n=t[a])||void 0===n||null===(s=n.grouped)||void 0===s?void 0:s[o],u=null===(d=t[a])||void 0===d||null===(c=d.grouped)||void 0===c?void 0:c[l];if(v&&u&&l!==o&&x===a){const e=await(0,r.b0)({fromElement:v,toElement:u});m((0,i.Bw)(e))}})(e,a,j),children:(0,u.jsx)(c.Z,{classN:"palette-elem-text",align:"center",text:v,size:"12px",color:"#fff"})},(null===e||void 0===e?void 0:e.color_id)+a)}))})]},(null===e||void 0===e?void 0:e._id)+a)}))})};var p=l(7959),m=l(5065),h=l(4437),j=l(8779),g=l(8942);const f=e=>{var t;let{closePopup:l}=e;const[a,o]=(0,n.useState)({name:""}),[i,v]=(0,n.useState)({}),x=(0,s.I0)();return(0,u.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const t=(0,j.n)(a,g.hq);if(t)return v(t);Object.keys(t).length&&v({}),await(0,r.aE)(a),await(0,m.Kc)(x),l()},className:"new-palette",children:[(0,u.jsx)(c.Z,{text:"Add new palette",align:"center",color:"#aa8a75"}),(0,u.jsx)("div",{className:"new-palette-inputs",children:(0,u.jsx)(h.Z,{placeholder:"Name",value:null===a||void 0===a?void 0:a.name,label:"Name*",name:"name",error:(null===i||void 0===i||null===(t=i.name)||void 0===t?void 0:t.message)||"",callback:e=>{const{target:{name:t,value:l}}=e;o({...a,[t]:l})}})}),(0,u.jsxs)("div",{className:"new-palette-actions",children:[(0,u.jsx)(d.o,{onClick:()=>l(),version:"gray",children:"Close"}),(0,u.jsx)(d.o,{type:"submit",children:"Add"})]})]})},b=()=>{const e=(0,s.v9)(i.Pn),t=(0,s.I0)(),[l,r]=(0,n.useState)(!1),v=()=>{r(!1)};return(0,n.useEffect)((()=>{(0,m.gx)(t),(0,m.Kc)(t),(0,m.x0)(t)}),[]),(0,u.jsxs)("div",{className:"color-palettes",children:[(0,u.jsx)(o.Z,{text:"Customize Palettes"}),(0,u.jsx)(d.o,{classN:"add-button",onClick:()=>r(!0),type:"button",children:"New Palette"}),(0,u.jsxs)(a.Z,{children:[(0,u.jsxs)("div",{className:"colors-palettes-list",children:[(0,u.jsx)(c.Z,{text:"Palettes List",size:"22px"}),null!==e&&void 0!==e&&e.length?(0,u.jsx)(x,{palettes:e}):null]}),l&&(0,u.jsx)(p.Z,{callback:v,children:(0,u.jsx)(f,{closePopup:v})})]})]})}},5065:(e,t,l)=>{l.d(t,{Kc:()=>s,gx:()=>i,x0:()=>n});var a=l(3944),o=l(2201);const n=e=>{(0,o.EC)().then((t=>{e((0,a.Ag)(t))})).catch((e=>console.log(e)))},s=e=>{(0,o.So)().then((t=>{e((0,a.Ys)(t))})).catch((e=>console.log(e)))},i=e=>{(0,o.i9)().then((t=>{e((0,a.Bw)(t))})).catch((e=>console.log(e)))}},7093:(e,t,l)=>{l.d(t,{Df:()=>i,X6:()=>d,ue:()=>o,wM:()=>s,yr:()=>n});var a=l(7098);const o="#aa8a75",n=[{id:"top",text:"Top",value:"Top"},{id:"bottom",text:"Bottom",value:"Bottom"},{id:"sleeve",text:"Sleeve",value:"Sleeve"}],s=[{id:"front",text:"Front",value:"Front"},{id:"back",text:"Back",value:"Back"}],i=e=>{switch(e.toLowerCase()){case"top":return a.vj;case"bottom":return a.LB;case"sleeve":return a.Ex}},d=e=>null!==e&&void 0!==e&&e.length?e.reduce(((e,t)=>(e.push({id:null===t||void 0===t?void 0:t._id,text:null===t||void 0===t?void 0:t.name,value:null===t||void 0===t?void 0:t.name}),e)),[]):[]}}]);
//# sourceMappingURL=385.20d742f5.chunk.js.map