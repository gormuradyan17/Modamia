"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[541],{3666:(e,n,l)=>{l.r(n),l.d(n,{default:()=>D});var t=l(5820),i=l(370),a=l(2791),s=l(9434),r=l(1726),o=l(971),c=l(7959),d=l(8151),u=l(2201),v=l(7093),p=l(5168),h=l(4437),x=l(8779),m=l(8942),g=l(1632),j=l(9806),b=l(184);const w=()=>{const[e,n]=(0,a.useState)(!1),[l,t]=(0,a.useState)(""),i=(0,s.I0)();return(0,b.jsxs)("div",{className:"new-item-variant",children:[(0,b.jsx)("button",{type:"button",onClick:()=>{n(!e),t("")},children:"Add new palette +"}),e&&(0,b.jsxs)("div",{className:"new-item-variant-save",children:[(0,b.jsx)(h.Z,{placeholder:"New palette",value:l,name:"newType",callback:e=>{const{target:{value:n}}=e;t(n)}}),(0,b.jsx)("button",{type:"button",onClick:async()=>{l&&(await(0,u.ql)({name:l}),await(0,d.hX)(i)),n(!e),t("")},children:(0,b.jsx)(j.G,{icon:g.r6l})})]})]})};var f=l(9158),k=l(4317);const N=e=>{var n,l,t,i;let{closePopup:c}=e;const g=(0,s.I0)(),j=(0,v.X6)((0,s.v9)(f.NB))||[{}],[N,_]=((0,s.v9)(f.ac),(0,a.useState)({name:"",price:"",tags:"",highresurl:"",previewurl:"",printsPalettes:[]})),[C,y]=(0,a.useState)({}),[Z,P]=(0,a.useState)({}),D=e=>{const{target:{name:n,value:l}}=e;_({...N,[n]:l})},S=(e,n)=>{_({...N,[n]:e[0]})},I=(e,n)=>{let l={};return null===e||void 0===e||e.map((e=>{const t={[n]:null===e||void 0===e?void 0:e.name};l=(0,x.n)(t,m.un)})),Object.keys(l).length?(P(l),!1):(Object.keys(Z).length&&P({}),!0)};return(0,b.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const n=(0,x.n)(N,m.uP);if(n)return y(n);Object.keys(n).length&&y({});const l=new FormData;Object.keys(N).forEach((e=>{"printsPalettes"===e?l.append(e,JSON.stringify(N[e])):l.append(e,N[e])})),await(0,u.eS)(l),await(0,d.QP)(g),c()},className:"new-print",children:[(0,b.jsx)(o.Z,{text:"Add new print",align:"center",color:v.ue}),(0,b.jsxs)("div",{className:"new-print-inputs",children:[(0,b.jsx)(h.Z,{placeholder:"Name",value:null===N||void 0===N?void 0:N.name,label:"Name*",name:"name",error:(null===C||void 0===C||null===(n=C.name)||void 0===n?void 0:n.message)||"",callback:D}),(0,b.jsx)(h.Z,{type:"number",placeholder:"Price",value:null===N||void 0===N?void 0:N.price,label:"Price*",name:"price",error:(null===C||void 0===C||null===(l=C.price)||void 0===l?void 0:l.message)||"",callback:D}),(0,b.jsx)(h.Z,{placeholder:"Tags",value:null===N||void 0===N?void 0:N.tags,label:"Tags",name:"tags",callback:D}),(0,b.jsxs)("div",{className:"new-color-variants",children:[(0,b.jsx)(w,{}),(0,b.jsx)(k.Z,{options:j,onChange:(e,n)=>((e,n)=>{const{target:{checked:l}}=e,{id:t}=n,i=[...null===N||void 0===N?void 0:N.printsPalettes];if(l)i.push(t);else{const e=i.findIndex((()=>t));-1!==e&&i.splice(e,1)}_({...N,printsPalettes:i})})(e,n),label:"Print palettes"})]}),(0,b.jsxs)("div",{className:"new-print-zone",children:[(0,b.jsx)(o.Z,{text:"High res image",size:"18px",color:v.ue}),(0,b.jsx)(p.Z,{width:"480px",height:"160px",name:"highresurl",validationCallback:e=>I(e,"highresurl"),error:(null===Z||void 0===Z||null===(t=Z.highresurl)||void 0===t?void 0:t.message)||"",onChange:e=>S(e,"highresurl")})]}),(0,b.jsxs)("div",{className:"new-print-zone",children:[(0,b.jsx)(o.Z,{text:"Preview image",size:"18px",color:v.ue}),(0,b.jsx)(p.Z,{width:"480px",height:"160px",name:"previewurl",validationCallback:e=>I(e,"previewurl"),error:(null===Z||void 0===Z||null===(i=Z.previewurl)||void 0===i?void 0:i.message)||"",onChange:e=>S(e,"previewurl")})]})]}),(0,b.jsxs)("div",{className:"new-print-actions",children:[(0,b.jsx)(r.o,{onClick:()=>c(),version:"gray",children:"Close"}),(0,b.jsx)(r.o,{type:"submit",children:"Add"})]})]})};var _=l(7098);const C=e=>{var n,l,t,i,c,d;let{callback:u,closePopup:g,print:j,setPrint:w,errors:k,printInfo:N}=e;const C=e=>{const{target:{name:n,value:l}}=e;w({...j,[n]:l})},[y,Z]=(0,a.useState)({}),P=((0,v.X6)((0,s.v9)(f.NB)),(e,n)=>{w({...j,[n]:URL.createObjectURL(e[0])})}),D=(e,n)=>{let l={};return null===e||void 0===e||e.map((e=>{const t={[n]:null===e||void 0===e?void 0:e.name};l=(0,x.n)(t,m.un)})),Object.keys(l).length?(Z(l),!1):(Object.keys(y).length&&Z({}),!0)};return(0,b.jsxs)("div",{className:"new-print",children:[(0,b.jsx)(o.Z,{text:"Edit ".concat(N.name," print"),align:"center",color:"#aa8a75"}),(0,b.jsxs)("div",{className:"new-print-inputs",children:[(0,b.jsx)(h.Z,{placeholder:"Name",value:null===j||void 0===j?void 0:j.name,label:"Name*",name:"name",error:(null===k||void 0===k||null===(n=k.name)||void 0===n?void 0:n.message)||"",callback:C}),(0,b.jsx)(h.Z,{type:"number",placeholder:"Price",value:null===j||void 0===j?void 0:j.price,label:"Price*",name:"price",error:(null===k||void 0===k||null===(l=k.price)||void 0===l?void 0:l.message)||"",callback:C}),(0,b.jsx)(h.Z,{placeholder:"Tags",value:null===j||void 0===j?void 0:j.tags,label:"Tags",name:"tags",callback:C})]}),(0,b.jsxs)("div",{className:"new-print-zone",children:[(0,b.jsx)(o.Z,{text:"High res image",size:"18px",color:v.ue}),(0,b.jsx)(p.Z,{width:"480px",height:"160px",name:"highresurl",validationCallback:e=>D(e,"highresurl"),error:(null===y||void 0===y||null===(t=y.highresurl)||void 0===t?void 0:t.message)||"",onChange:e=>P(e,"highresurl"),defaultFiles:[{...j,preview:null!==(i=j.highresurl)&&void 0!==i&&i.includes("blob")?j.highresurl:"".concat(_.ED).concat(j.highresurl)}]})]}),(0,b.jsxs)("div",{className:"new-print-zone",children:[(0,b.jsx)(o.Z,{text:"Preview image",size:"18px",color:v.ue}),(0,b.jsx)(p.Z,{width:"480px",height:"160px",name:"previewurl",onChange:e=>P(e,"previewurl"),validationCallback:e=>D(e,"previewurl"),error:(null===y||void 0===y||null===(c=y.previewurl)||void 0===c?void 0:c.message)||"",defaultFiles:[{...j,preview:null!==(d=j.previewurl)&&void 0!==d&&d.includes("blob")?j.previewurl:"".concat(_.Z7).concat(j.previewurl)}]})]}),(0,b.jsxs)("div",{className:"new-print-actions",children:[(0,b.jsx)(r.o,{onClick:()=>g(),version:"gray",children:"Discard"}),(0,b.jsx)(r.o,{onClick:()=>u(),children:"Save"})]})]})},y=e=>{let{options:n,onChange:l,activePrint:t}=e;const i=(0,s.v9)(f.MK);return(0,b.jsx)("div",{className:"palettes-list-content customYScrollbar",children:Boolean(null===n||void 0===n?void 0:n.length)&&(null===n||void 0===n?void 0:n.map(((e,n)=>{const{_id:a="",name:s=""}=e||{},r=i.find((e=>{const{grouped:n=[],_id:{variant_id:l=""}={}}=e||{};if(n.some((e=>(null===e||void 0===e?void 0:e.print_id)===(null===t||void 0===t?void 0:t._id)))&&l===a)return!0}));return(0,b.jsxs)("label",{htmlFor:a+n,className:"palettes-list-option",children:[s,(0,b.jsx)("input",{className:"palettes-list-checkbox",type:"checkbox",id:a+n,defaultChecked:r,onChange:n=>l(n,r,e)})]},a)})))})};var Z=l(7131);const P=e=>{let{prints:n}=e;const[l,t]=(0,a.useState)(!1),[i,v]=(0,a.useState)({}),[p,h]=(0,a.useState)(!1),[w,k]=(0,a.useState)({}),[N,P]=(0,a.useState)({}),D=(0,a.useRef)(null),S=(0,s.v9)(f.NB),I=(0,s.I0)();(0,Z.Z)([D],(()=>h(!1)),p);const z=()=>{t(!1),v({}),k({}),P({})};return(0,b.jsxs)("div",{className:"print-list",children:[null===n||void 0===n?void 0:n.map((e=>(0,b.jsxs)("div",{className:"prints-list-print",children:[(0,b.jsx)(o.Z,{classN:"print-list-text _ellipsis",text:e.name,size:"16px"}),(0,b.jsx)("div",{className:"print-list-image",children:(0,b.jsx)("img",{src:"".concat(_.Z7).concat(e.previewurl),className:"print-list-img",alt:e.name})}),(0,b.jsx)("span",{}),(0,b.jsxs)("div",{className:"palettes-list-buttons",children:[(0,b.jsx)(r.o,{classN:"print-list-button",onClick:()=>(e=>{e&&(v(e),k(e),t(!0))})(e),children:"Edit"}),(0,b.jsxs)("div",{...(null===e||void 0===e?void 0:e._id)===(null===i||void 0===i?void 0:i._id)&&{ref:D},children:[(0,b.jsx)(r.o,{classN:"print-button",onClick:()=>{return n=e,h(!p),void v(n);var n},children:(0,b.jsx)(j.G,{icon:g.q2v})}),p&&(null===e||void 0===e?void 0:e._id)===(null===i||void 0===i?void 0:i._id)&&(0,b.jsx)(y,{activePrint:i,onChange:(e,n,l)=>(async(e,n,l)=>{const{target:{checked:t}}=e,{grouped:a=[]}=n||{},{_id:s=""}=l||{};if(t&&s)await(0,u.FG)({print_id:null===i||void 0===i?void 0:i._id,variant_id:s});else{const e=null===a||void 0===a?void 0:a.find((e=>(null===e||void 0===e?void 0:e.print_id)===(null===i||void 0===i?void 0:i._id))),{_id:n=""}=e||{};n&&await(0,u.bT)({palette_id:n})}await(0,d.Ax)(I)})(e,n,l),options:S})]})]})]},e._id))),l&&(0,b.jsx)(c.Z,{callback:z,children:(0,b.jsx)(C,{callback:async()=>{var e,n;const l=(0,x.n)(i,m.uP);if(l)return P(l);async function t(e){const n=await fetch(e),l=await n.blob();return new File([l],"image.jpg",{type:l.type})}Object.keys(N).length&&P({});const a=JSON.parse(JSON.stringify(i));if(null!==i&&void 0!==i&&null!==(e=i.highresurl)&&void 0!==e&&e.includes("blob")){const e=await t(i.highresurl);a.highresurl=e}if(null!==i&&void 0!==i&&null!==(n=i.previewurl)&&void 0!==n&&n.includes("blob")){const e=await t(i.previewurl);a.previewurl=e}const s=new FormData;Object.keys(a).forEach((e=>{s.append(e,a[e])})),await(0,u.dt)(s),await(0,d.QP)(I),z()},closePopup:z,print:i,errors:N,setPrint:v,printInfo:w})})]})},D=()=>{const[e,n]=(0,a.useState)(!1),l=(0,s.v9)(f.s_),u=(0,s.I0)(),v=()=>{n(!1),u((0,f.uk)())};return(0,a.useEffect)((()=>{(0,d.QP)(u),(0,d.hX)(u),(0,d.Ax)(u)}),[]),(0,b.jsxs)("div",{children:[(0,b.jsx)(i.Z,{text:"Customize Prints"}),(0,b.jsx)(r.o,{classN:"add-button",onClick:()=>n(!0),type:"button",children:"New Print"}),(0,b.jsxs)(t.Z,{children:[(0,b.jsxs)("div",{className:"prints-pallette-list",children:[(0,b.jsx)(o.Z,{text:"Print List",size:"22px"}),null!==l&&void 0!==l&&l.length?(0,b.jsx)(P,{prints:l}):null]}),e&&(0,b.jsx)(c.Z,{callback:v,children:(0,b.jsx)(N,{closePopup:v})})]})]})}},8151:(e,n,l)=>{l.d(n,{Ax:()=>r,QP:()=>a,hX:()=>s});var t=l(9158),i=l(2201);const a=e=>{(0,i.yV)().then((n=>{e((0,t.rC)(n))})).catch((e=>console.log(e)))},s=e=>{(0,i.BT)().then((n=>{e((0,t.$u)(n))})).catch((e=>console.log(e)))},r=e=>{(0,i.qr)().then((n=>{e((0,t.cz)(n))})).catch((e=>console.log(e)))}},7093:(e,n,l)=>{l.d(n,{Df:()=>r,X6:()=>o,ue:()=>i,wM:()=>s,yr:()=>a});var t=l(7098);const i="#aa8a75",a=[{id:"top",text:"Top",value:"Top"},{id:"bottom",text:"Bottom",value:"Bottom"},{id:"sleeve",text:"Sleeve",value:"Sleeve"}],s=[{id:"front",text:"Front",value:"Front"},{id:"back",text:"Back",value:"Back"}],r=e=>{switch(e.toLowerCase()){case"top":return t.vj;case"bottom":return t.LB;case"sleeve":return t.Ex}},o=e=>null!==e&&void 0!==e&&e.length?e.reduce(((e,n)=>(e.push({id:null===n||void 0===n?void 0:n._id,text:null===n||void 0===n?void 0:n.name,value:null===n||void 0===n?void 0:n.name}),e)),[]):[]},4317:(e,n,l)=>{l.d(n,{Z:()=>c});var t=l(1632),i=l(9806),a=l(2791),s=l(7131),r=l(971),o=l(184);const c=e=>{let{text:n,options:l,onChange:c,classN:d="",label:u="",error:v,defaultValue:p,disabled:h=!1}=e;const[x,m]=(0,a.useState)(!1),[g,j]=(0,a.useState)(n),b=(0,a.useRef)(null),w=(0,a.useRef)(null);(0,s.Z)([b,w],(()=>m(!1)),x);return(0,o.jsxs)(o.Fragment,{children:[u&&(0,o.jsx)(r.Z,{size:"18px",color:"#aa8a75",text:u}),v&&(0,o.jsx)("span",{className:"error-message",children:v}),(0,o.jsxs)("div",{className:"DropdownCheckboxUI ".concat(d," ").concat(h?"_disabled":""),ref:b,children:[(0,o.jsxs)("div",{onClick:e=>h?e.preventDefault():void m(!x),className:"DropdownCheckboxUI__button".concat(x?" _active":"").concat(v?" _error":""),children:[p||g,x?(0,o.jsx)(i.G,{className:"DropdownCheckboxUI__icon",icon:t.l1h}):(0,o.jsx)(i.G,{className:"DropdownCheckboxUI__icon",icon:t.eW2})]}),(0,o.jsx)("div",{className:"DropdownCheckboxUI__content".concat(x?" _active":""),ref:w,children:Boolean(null===l||void 0===l?void 0:l.length)&&(null===l||void 0===l?void 0:l.map(((e,n)=>{const{id:l="",text:t="",value:i=""}=e||{};return(0,o.jsxs)("label",{htmlFor:l,className:"DropdownCheckboxUI__option",children:[t||i,(0,o.jsx)("input",{className:"DropdownCheckboxUI__checkbox",type:"checkbox",name:l,id:l,onChange:n=>c(n,e)})]},l)})))})]})]})}},5168:(e,n,l)=>{l.d(n,{Z:()=>c});var t=l(2791),i=l(9806),a=l(1632),s=l(971),r=l(3083),o=l(184);const c=e=>{let{multiple:n=!1,width:l="400px",height:c="400px",onChange:d=r.R,defaultFiles:u,name:v,validationCallback:p=null,error:h="",classN:x}=e;const[m,g]=(0,t.useState)([]),j=(0,t.useRef)(null),b=(0,t.useRef)(null);(0,t.useEffect)((()=>{null!==u&&void 0!==u&&u.length&&g(u)}),[u]);const w=h?"red":"silver";return(0,o.jsxs)(o.Fragment,{children:[h&&(0,o.jsx)("span",{className:"error-message",children:h}),(0,o.jsxs)("div",{className:"DropzoneUI ".concat(x),style:{width:l,height:c,backgroundImage:"linear-gradient(90deg, ".concat(w," 50%, transparent 50%), linear-gradient(90deg, ").concat(w," 50%, transparent 50%), linear-gradient(0deg, ").concat(w," 50%, transparent 50%), linear-gradient(0deg, ").concat(w," 50%, transparent 50%)")},onDrop:e=>{var l;e.preventDefault();const t=Array.from(e.dataTransfer.files);if(t.forEach((e=>{e.preview=URL.createObjectURL(e)})),n)return g([...m,...t]),d([...m,...t]);null!==t&&void 0!==t&&t.length&&(g(t),d(t)),null===b||void 0===b||null===(l=b.current)||void 0===l||l.classList.remove("_drag")},onDragOver:e=>{var n;e.preventDefault(),null===b||void 0===b||null===(n=b.current)||void 0===n||n.classList.add("_drag")},onDragLeave:e=>{var n;e.preventDefault(),null===b||void 0===b||null===(n=b.current)||void 0===n||n.classList.remove("_drag")},ref:b,children:[(0,o.jsx)("div",{className:"DropzoneUI__body",onClick:()=>{j.current&&j.current.click()},children:(0,o.jsx)(s.Z,{text:"Drag & drop some file".concat(n?"s":""," here, or click to select file").concat(n?"s":""),size:"14px",align:"center"})}),(0,o.jsx)("input",{type:"file",ref:j,style:{display:"none"},onChange:async e=>{const l=Array.from(e.target.files);if(!p||await p(l)){if(l.forEach((e=>{e.preview=URL.createObjectURL(e)})),n)return g([...m,...l]),d([...m,...l]);null!==l&&void 0!==l&&l.length&&(g(l),d(l))}},multiple:n,name:v}),(0,o.jsx)("div",{className:"DropzoneUI__files",style:{maxHeight:+c.replace("px","")-30+"px"},children:m.map(((e,n)=>(0,o.jsxs)("div",{className:"DropzoneUI__file",children:[(0,o.jsx)("img",{src:e.preview,alt:"Preview ".concat(n),className:"DropzoneUI__preview"}),(0,o.jsx)("button",{className:"DropzoneUI__remove",onClick:()=>(e=>{const n=[...m];n.splice(e,1),g(n)})(n),type:"button",children:(0,o.jsx)(i.G,{icon:a.EOp})})]},n)))})]})]})}},7131:(e,n,l)=>{l.d(n,{Z:()=>i});var t=l(2791);const i=function(e,n){let l=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,t.useEffect)((()=>{const l=l=>{let t=!0;(null===e||void 0===e?void 0:e.length)&&(null===e||void 0===e||e.forEach((e=>{e.current&&e.current.contains(l.target)&&(t=!1)}))),t&&n()};return document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}}),[l]),{}}}}]);
//# sourceMappingURL=541.065b59c1.chunk.js.map