"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[731],{6901:(e,t,l)=>{l.d(t,{Z:()=>h});var n=l(2791),o=l(1726),a=l(971),s=l(4437),i=(l(3388),l(7093)),r=l(5168),c=l(8942),u=l(8779),d=l(9467),v=l(184);const h=e=>{var t,l,h,p,m,x;let{callback:g,closePopup:j,silhouette:f,setSilhouette:b,errors:y,silhouetteInfo:w}=e;const k=e=>{const{target:{name:t,value:l}}=e;b({...f,[t]:l})},[N,Z]=(0,n.useState)({}),_=(e,t)=>{const l=e.value;b({...f,[t]:l})};return(0,v.jsxs)("div",{className:"new-print",children:[(0,v.jsx)(a.Z,{text:"Edit silhouette ".concat(w.name),align:"center",color:i.ue}),(0,v.jsxs)("div",{className:"new-silhouette-inputs",children:[(0,v.jsx)(s.Z,{placeholder:"Name",value:null===f||void 0===f?void 0:f.name,label:"Name*",name:"name",error:(null===y||void 0===y||null===(t=y.name)||void 0===t?void 0:t.message)||"",callback:k}),(0,v.jsx)(s.Z,{type:"number",placeholder:"Price",value:(null===f||void 0===f?void 0:f.price)>0?null===f||void 0===f?void 0:f.price:"",label:"Price*",name:"price",error:(null===y||void 0===y||null===(l=y.price)||void 0===l?void 0:l.message)||"",callback:k}),(0,v.jsx)(s.Z,{placeholder:"Tags",value:null===f||void 0===f?void 0:f.tags,label:"Tags",name:"tags",callback:k}),(0,v.jsx)(d.Z,{options:i.yr,onChange:e=>_(e,"type"),label:"Silhouette type*",error:(null===y||void 0===y||null===(h=y.type)||void 0===h?void 0:h.message)||"",defaultValue:null===f||void 0===f?void 0:f.type}),(0,v.jsx)(d.Z,{options:i.wM,onChange:e=>_(e,"orientation"),label:"Silhouette orientation*",error:(null===y||void 0===y||null===(p=y.orientation)||void 0===p?void 0:p.message)||"",defaultValue:null===f||void 0===f?void 0:f.orientation}),(0,v.jsxs)("div",{className:"new-silhouette-zone",children:[(0,v.jsx)(a.Z,{text:"Silhouette image",size:"18px",color:i.ue}),(0,v.jsx)(r.Z,{width:"480px",height:"160px",name:"silhouetteurl",validationCallback:e=>((e,t)=>{let l={};return null===e||void 0===e||e.map((e=>{const n={[t]:null===e||void 0===e?void 0:e.name};l=(0,u.n)(n,c.ib)})),Object.keys(l).length?(Z(l),!1):(Object.keys(N).length&&Z({}),!0)})(e,"silhouetteurl"),error:(null===N||void 0===N||null===(m=N.silhouetteurl)||void 0===m?void 0:m.message)||"",onChange:e=>(e=>{b({...f,silhouetteurl:URL.createObjectURL(e[0])})})(e),defaultFiles:[{...f,preview:null!==(x=f.silhouetteurl)&&void 0!==x&&x.includes("blob")?f.silhouetteurl:"".concat((0,i.Df)(w.type)).concat(f.silhouetteurl)}]})]})]}),(0,v.jsxs)("div",{className:"new-silhouette-actions",children:[(0,v.jsx)(o.o,{onClick:()=>j(),version:"gray",children:"Discard"}),(0,v.jsx)(o.o,{onClick:()=>g(),children:"Save"})]})]})}},5931:(e,t,l)=>{l.d(t,{Z:()=>g});var n=l(2791),o=l(9434),a=l(1717),s=l(7093),i=l(1726),r=l(9467),c=l(971),u=l(4437),d=l(8779),v=l(8942),h=l(5168),p=l(2201),m=l(5227),x=l(184);const g=e=>{var t,l,g,j,f;let{closePopup:b,selectedType:y=""}=e;const w=(0,o.I0)(),k=(0,o.v9)(a.tF),[N,Z]=(0,n.useState)({}),[_,S]=(0,n.useState)({}),[C,D]=(0,n.useState)(null),U=e=>{const{target:{name:t,value:l}}=e;w((0,a.l9)({name:t,value:l}))},I=(e,t)=>{const l=e.value;w((0,a.l9)({name:t,value:l}))};return(0,n.useEffect)((()=>{y&&w((0,a.l9)({name:"type",value:y}))}),[y]),(0,x.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const t=(0,d.n)(k,v.Vu);if(t)return Z(t);Object.keys(t).length&&Z({});const l=new FormData;Object.keys(k).forEach((e=>{l.append(e,k[e])})),l.append("silhouetteurl",C[0]),await(0,p.rq)(l),await(0,m.T)(w),b()},className:"new-silhouette",children:[(0,x.jsx)(c.Z,{text:"Add new silhouette",align:"center",color:s.ue}),(0,x.jsxs)("div",{className:"new-silhouette-inputs",children:[(0,x.jsx)(u.Z,{placeholder:"Name",value:null===k||void 0===k?void 0:k.name,label:"Name*",name:"name",error:(null===N||void 0===N||null===(t=N.name)||void 0===t?void 0:t.message)||"",callback:U}),(0,x.jsx)(u.Z,{type:"number",placeholder:"Price",value:(null===k||void 0===k?void 0:k.price)>0?null===k||void 0===k?void 0:k.price:"",label:"Price*",name:"price",error:(null===N||void 0===N||null===(l=N.price)||void 0===l?void 0:l.message)||"",callback:U}),(0,x.jsx)(u.Z,{placeholder:"Tags",value:null===k||void 0===k?void 0:k.tags,label:"Tags",name:"tags",callback:U}),(0,x.jsx)(r.Z,{options:s.yr,onChange:e=>I(e,"type"),label:"Silhouette type*",error:(null===N||void 0===N||null===(g=N.type)||void 0===g?void 0:g.message)||"",...y&&{defaultValue:y},disabled:!!y}),(0,x.jsx)(r.Z,{options:s.wM,onChange:e=>I(e,"orientation"),label:"Silhouette orientation*",error:(null===N||void 0===N||null===(j=N.orientation)||void 0===j?void 0:j.message)||""}),(0,x.jsxs)("div",{className:"new-silhouette-zone",children:[(0,x.jsx)(c.Z,{text:"Silhouette image",size:"18px",color:s.ue}),(0,x.jsx)(h.Z,{width:"480px",height:"160px",name:"silhouetteurl",validationCallback:e=>((e,t)=>{let l={};return null===e||void 0===e||e.map((e=>{const n={[t]:null===e||void 0===e?void 0:e.name};l=(0,d.n)(n,v.ib)})),Object.keys(l).length?(S(l),!1):(Object.keys(_).length&&S({}),!0)})(e,"silhouetteurl"),error:(null===_||void 0===_||null===(f=_.silhouetteurl)||void 0===f?void 0:f.message)||"",onChange:e=>{D(e)}})]})]}),(0,x.jsxs)("div",{className:"new-silhouette-actions",children:[(0,x.jsx)(i.o,{onClick:()=>b(),version:"gray",children:"Close"}),(0,x.jsx)(i.o,{type:"submit",children:"Add"})]})]})}},6317:(e,t,l)=>{l.d(t,{Z:()=>g});var n=l(2791),o=l(9434),a=l(1717),s=l(7098),i=l(7093),r=l(1726),c=l(971),u=l(7959),d=l(6901),v=l(8779),h=l(8942),p=l(2201),m=l(5227),x=l(184);const g=()=>{const e=(0,o.v9)(a.Q3),[t,l]=(0,n.useState)({}),[g,j]=(0,n.useState)({}),[f,b]=(0,n.useState)(!1),[y,w]=(0,n.useState)({}),k=(0,o.I0)(),N=(0,n.useMemo)((()=>e.filter((e=>"Sleeve"===(null===e||void 0===e?void 0:e.type)))),[e]),Z=()=>{b(!1),l({}),j({}),w({})};return(0,x.jsxs)("div",{className:"silhouettes-items",children:[(0,x.jsx)(c.Z,{text:"Sleeve Silhouettes",size:"20px"}),(0,x.jsx)("div",{className:"silhouettes-items-body customXScrollbar",children:null!==N&&void 0!==N&&N.length?N.map((e=>(0,x.jsxs)("div",{className:"silhouettes-list-silhouette",children:[(0,x.jsx)(c.Z,{classN:"silhouettes-list-text _ellipsis",text:e.name,color:i.ue,size:"16px"}),(0,x.jsx)("div",{className:"silhouettes-list-image",children:(0,x.jsx)("img",{src:"".concat(s.Ex).concat(e.silhouetteurl),className:"silhouettes-list-img",alt:e.name})}),(0,x.jsx)(r.o,{classN:"silhouettes-list-button",onClick:()=>(e=>{e&&(l(e),j(e),b(!0))})(e),children:"Edit"})]},e._id))):(0,x.jsx)(c.Z,{text:"Nothing found",color:i.ue,size:"16px"})}),f&&(0,x.jsx)(u.Z,{callback:Z,children:(0,x.jsx)(d.Z,{callback:async()=>{var e;const l=(0,v.n)(t,h.Vu);if(l)return w(l);Object.keys(y).length&&w({});const n=JSON.parse(JSON.stringify(t));if(null!==t&&void 0!==t&&null!==(e=t.silhouetteurl)&&void 0!==e&&e.includes("blob")){const e=await async function(e){const t=await fetch(e),l=await t.blob();return new File([l],"image.jpg",{type:l.type})}(t.silhouetteurl);n.silhouetteurl=e}const o=new FormData;Object.keys(n).forEach((e=>{o.append(e,n[e])})),await(0,p.RV)(o),await(0,m.T)(k),Z()},closePopup:Z,silhouette:t,errors:y,setSilhouette:l,silhouetteInfo:g})})]})}},5227:(e,t,l)=>{l.d(t,{T:()=>a});var n=l(1717),o=l(2201);const a=e=>{(0,o.Rc)().then((t=>{e((0,n.$F)(t))})).catch((e=>console.log(e)))}},7093:(e,t,l)=>{l.d(t,{Df:()=>i,X6:()=>r,ue:()=>o,wM:()=>s,yr:()=>a});var n=l(7098);const o="#aa8a75",a=[{id:"top",text:"Top",value:"Top"},{id:"bottom",text:"Bottom",value:"Bottom"},{id:"sleeve",text:"Sleeve",value:"Sleeve"}],s=[{id:"front",text:"Front",value:"Front"},{id:"back",text:"Back",value:"Back"}],i=e=>{switch(e.toLowerCase()){case"top":return n.vj;case"bottom":return n.LB;case"sleeve":return n.Ex}},r=e=>null!==e&&void 0!==e&&e.length?e.reduce(((e,t)=>(e.push({id:null===t||void 0===t?void 0:t._id,text:null===t||void 0===t?void 0:t.name,value:null===t||void 0===t?void 0:t.name}),e)),[]):[]},9467:(e,t,l)=>{l.d(t,{Z:()=>u});var n=l(1632),o=l(9806),a=l(2791),s=l(7131),i=l(971),r=l(98),c=l(184);const u=e=>{let{text:t,options:l,onChange:u,classN:d="",label:v="",error:h,defaultValue:p,disabled:m=!1}=e;const[x,g]=(0,a.useState)(!1),[j,f]=(0,a.useState)(t),b=(0,a.useRef)(null),y=(0,a.useRef)(null);(0,s.Z)([b],(()=>g(!1)),x);const w=()=>{if(null!==b&&void 0!==b&&b.current&&null!==y&&void 0!==y&&y.current){const e=b.current.getBoundingClientRect().top+60,t=b.current.getBoundingClientRect().left,l=b.current.offsetWidth-3;y.current.style.top="".concat(e,"px"),y.current.style.left="".concat(t,"px"),y.current.style.width="".concat(l,"px")}};return(0,a.useEffect)((()=>{w()}),[y,b]),(0,c.jsxs)(c.Fragment,{children:[v&&(0,c.jsx)(i.Z,{size:"18px",color:"#aa8a75",text:v}),h&&(0,c.jsx)("span",{className:"error-message",children:h}),(0,c.jsx)("div",{className:"DropdownUI ".concat(d," ").concat(m?"_disabled":""),ref:b,children:(0,c.jsxs)("div",{onClick:e=>m?e.preventDefault():(g(!x),void w()),className:"DropdownUI__button".concat(x?" _active":"").concat(h?" _error":""),children:[p||j,x?(0,c.jsx)(o.G,{className:"DropdownUI__icon",icon:n.l1h}):(0,c.jsx)(o.G,{className:"DropdownUI__icon",icon:n.eW2})]})}),!m&&(0,c.jsx)(r.Z,{children:(0,c.jsx)("div",{className:"DropdownUI__content".concat(x?" _active":""),ref:y,children:Boolean(null===l||void 0===l?void 0:l.length)&&(null===l||void 0===l?void 0:l.map(((e,t)=>{let{id:n,text:o,value:a}=e;return(0,c.jsx)("div",{onClick:e=>function(e,t){const n=e.target.textContent;n&&f(n),u(l[t]),g(!x)}(e,t),className:"DropdownUI__option",children:o||a},n)})))})})]})}},5168:(e,t,l)=>{l.d(t,{Z:()=>c});var n=l(2791),o=l(9806),a=l(1632),s=l(971),i=l(3083),r=l(184);const c=e=>{let{multiple:t=!1,width:l="400px",height:c="400px",onChange:u=i.R,defaultFiles:d,name:v,validationCallback:h=null,error:p="",classN:m}=e;const[x,g]=(0,n.useState)([]),j=(0,n.useRef)(null),f=(0,n.useRef)(null);(0,n.useEffect)((()=>{null!==d&&void 0!==d&&d.length&&g(d)}),[d]);const b=p?"red":"silver";return(0,r.jsxs)(r.Fragment,{children:[p&&(0,r.jsx)("span",{className:"error-message",children:p}),(0,r.jsxs)("div",{className:"DropzoneUI ".concat(m),style:{width:l,height:c,backgroundImage:"linear-gradient(90deg, ".concat(b," 50%, transparent 50%), linear-gradient(90deg, ").concat(b," 50%, transparent 50%), linear-gradient(0deg, ").concat(b," 50%, transparent 50%), linear-gradient(0deg, ").concat(b," 50%, transparent 50%)")},onDrop:e=>{var l;e.preventDefault();const n=Array.from(e.dataTransfer.files);if(n.forEach((e=>{e.preview=URL.createObjectURL(e)})),t)return g([...x,...n]),u([...x,...n]);null!==n&&void 0!==n&&n.length&&(g(n),u(n)),null===f||void 0===f||null===(l=f.current)||void 0===l||l.classList.remove("_drag")},onDragOver:e=>{var t;e.preventDefault(),null===f||void 0===f||null===(t=f.current)||void 0===t||t.classList.add("_drag")},onDragLeave:e=>{var t;e.preventDefault(),null===f||void 0===f||null===(t=f.current)||void 0===t||t.classList.remove("_drag")},ref:f,children:[(0,r.jsx)("div",{className:"DropzoneUI__body",onClick:()=>{j.current&&j.current.click()},children:(0,r.jsx)(s.Z,{text:"Drag & drop some file".concat(t?"s":""," here, or click to select file").concat(t?"s":""),size:"14px",align:"center"})}),(0,r.jsx)("input",{type:"file",ref:j,style:{display:"none"},onChange:async e=>{const l=Array.from(e.target.files);if(!h||await h(l)){if(l.forEach((e=>{e.preview=URL.createObjectURL(e)})),t)return g([...x,...l]),u([...x,...l]);null!==l&&void 0!==l&&l.length&&(g(l),u(l))}},multiple:t,name:v}),(0,r.jsx)("div",{className:"DropzoneUI__files",style:{maxHeight:+c.replace("px","")-30+"px"},children:x.map(((e,t)=>(0,r.jsxs)("div",{className:"DropzoneUI__file",children:[(0,r.jsx)("img",{src:e.preview,alt:"Preview ".concat(t),className:"DropzoneUI__preview"}),(0,r.jsx)("button",{className:"DropzoneUI__remove",onClick:()=>(e=>{const t=[...x];t.splice(e,1),g(t)})(t),type:"button",children:(0,r.jsx)(o.G,{icon:a.EOp})})]},t)))})]})]})}},7131:(e,t,l)=>{l.d(t,{Z:()=>o});var n=l(2791);const o=function(e,t){let l=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,n.useEffect)((()=>{const l=l=>{let n=!0;(null===e||void 0===e?void 0:e.length)&&(null===e||void 0===e||e.forEach((e=>{e.current&&e.current.contains(l.target)&&(n=!1)}))),n&&t()};return document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}}),[l]),{}}},3388:()=>{}}]);
//# sourceMappingURL=731.31ce7f74.chunk.js.map