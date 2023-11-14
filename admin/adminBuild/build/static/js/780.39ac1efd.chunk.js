"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[780],{6780:(e,r,l)=>{l.r(r),l.d(r,{default:()=>k});var n=l(5820),a=l(370),t=l(2791),s=l(9434),i=l(1726),c=l(971),o=l(2143),d=l(2614),u=l(2201);const p=e=>{(0,u.yV)().then((r=>{e((0,d.rC)(r))})).catch((e=>console.log(e)))};var v=l(7093),m=l(5168),h=l(4437),g=l(8779),x=l(8942),j=l(184);const b=e=>{var r,l,n,a;let{closePopup:o}=e;const d=(0,s.I0)(),[b,f]=(0,t.useState)({name:"",price:"",tags:"",highresurl:"",previewurl:""}),[w,N]=(0,t.useState)({}),[k,y]=(0,t.useState)({}),I=e=>{const{target:{name:r,value:l}}=e;f({...b,[r]:l})},C=(e,r)=>{f({...b,[r]:e[0]})},Z=(e,r)=>{let l={};return null===e||void 0===e||e.map((e=>{const n={[r]:null===e||void 0===e?void 0:e.name};l=(0,g.n)(n,x.un)})),Object.keys(l).length?(y(l),!1):(Object.keys(k).length&&y({}),!0)};return(0,j.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const r=(0,g.n)(b,x.uP);if(r)return N(r);Object.keys(r).length&&N({});const l=new FormData;Object.keys(b).forEach((e=>{l.append(e,b[e])})),await(0,u.eS)(l),await p(d),o()},className:"new-print",children:[(0,j.jsx)(c.Z,{text:"Add new print",align:"center",color:v.ue}),(0,j.jsxs)("div",{className:"new-print-inputs",children:[(0,j.jsx)(h.Z,{placeholder:"Name",value:null===b||void 0===b?void 0:b.name,label:"Name*",name:"name",error:(null===w||void 0===w||null===(r=w.name)||void 0===r?void 0:r.message)||"",callback:I}),(0,j.jsx)(h.Z,{type:"number",placeholder:"Price",value:null===b||void 0===b?void 0:b.price,label:"Price*",name:"price",error:(null===w||void 0===w||null===(l=w.price)||void 0===l?void 0:l.message)||"",callback:I}),(0,j.jsx)(h.Z,{placeholder:"Tags",value:null===b||void 0===b?void 0:b.tags,label:"Tags",name:"tags",callback:I}),(0,j.jsxs)("div",{className:"new-print-zone",children:[(0,j.jsx)(c.Z,{text:"High res image",size:"18px",color:v.ue}),(0,j.jsx)(m.Z,{width:"480px",height:"160px",name:"highresurl",validationCallback:e=>Z(e,"highresurl"),error:(null===k||void 0===k||null===(n=k.highresurl)||void 0===n?void 0:n.message)||"",onChange:e=>C(e,"highresurl")})]}),(0,j.jsxs)("div",{className:"new-print-zone",children:[(0,j.jsx)(c.Z,{text:"Preview image",size:"18px",color:v.ue}),(0,j.jsx)(m.Z,{width:"480px",height:"160px",name:"previewurl",validationCallback:e=>Z(e,"previewurl"),error:(null===k||void 0===k||null===(a=k.previewurl)||void 0===a?void 0:a.message)||"",onChange:e=>C(e,"previewurl")})]})]}),(0,j.jsxs)("div",{className:"new-print-actions",children:[(0,j.jsx)(i.o,{onClick:()=>o(),version:"gray",children:"Close"}),(0,j.jsx)(i.o,{type:"submit",children:"Add"})]})]})};var f=l(7098);const w=e=>{var r,l,n,a,s,o;let{callback:d,closePopup:u,print:p,setPrint:b,errors:w,printInfo:N}=e;const k=e=>{const{target:{name:r,value:l}}=e;b({...p,[r]:l})},[y,I]=(0,t.useState)({}),C=(e,r)=>{b({...p,[r]:URL.createObjectURL(e[0])})},Z=(e,r)=>{let l={};return null===e||void 0===e||e.map((e=>{const n={[r]:null===e||void 0===e?void 0:e.name};l=(0,g.n)(n,x.un)})),Object.keys(l).length?(I(l),!1):(Object.keys(y).length&&I({}),!0)};return(0,j.jsxs)("div",{className:"new-print",children:[(0,j.jsx)(c.Z,{text:"Edit ".concat(N.name," print"),align:"center",color:"#aa8a75"}),(0,j.jsxs)("div",{className:"new-print-inputs",children:[(0,j.jsx)(h.Z,{placeholder:"Name",value:null===p||void 0===p?void 0:p.name,label:"Name*",name:"name",error:(null===w||void 0===w||null===(r=w.name)||void 0===r?void 0:r.message)||"",callback:k}),(0,j.jsx)(h.Z,{type:"number",placeholder:"Price",value:null===p||void 0===p?void 0:p.price,label:"Price*",name:"price",error:(null===w||void 0===w||null===(l=w.price)||void 0===l?void 0:l.message)||"",callback:k}),(0,j.jsx)(h.Z,{placeholder:"Tags",value:null===p||void 0===p?void 0:p.tags,label:"Tags",name:"tags",callback:k})]}),(0,j.jsxs)("div",{className:"new-print-zone",children:[(0,j.jsx)(c.Z,{text:"High res image",size:"18px",color:v.ue}),(0,j.jsx)(m.Z,{width:"480px",height:"160px",name:"highresurl",validationCallback:e=>Z(e,"highresurl"),error:(null===y||void 0===y||null===(n=y.highresurl)||void 0===n?void 0:n.message)||"",onChange:e=>C(e,"highresurl"),defaultFiles:[{...p,preview:null!==(a=p.highresurl)&&void 0!==a&&a.includes("blob")?p.highresurl:"".concat(f.ED).concat(p.highresurl)}]})]}),(0,j.jsxs)("div",{className:"new-print-zone",children:[(0,j.jsx)(c.Z,{text:"Preview image",size:"18px",color:v.ue}),(0,j.jsx)(m.Z,{width:"480px",height:"160px",name:"previewurl",onChange:e=>C(e,"previewurl"),validationCallback:e=>Z(e,"previewurl"),error:(null===y||void 0===y||null===(s=y.previewurl)||void 0===s?void 0:s.message)||"",defaultFiles:[{...p,preview:null!==(o=p.previewurl)&&void 0!==o&&o.includes("blob")?p.previewurl:"".concat(f.Z7).concat(p.previewurl)}]})]}),(0,j.jsxs)("div",{className:"new-print-actions",children:[(0,j.jsx)(i.o,{onClick:()=>u(),version:"gray",children:"Discard"}),(0,j.jsx)(i.o,{onClick:()=>d(),children:"Save"})]})]})},N=e=>{let{prints:r}=e;const[l,n]=(0,t.useState)(!1),[a,d]=(0,t.useState)({}),[v,m]=(0,t.useState)({}),[h,b]=(0,t.useState)({}),N=(0,s.I0)(),k=()=>{n(!1),d({}),m({}),b({})};return(0,j.jsxs)("div",{className:"print-list",children:[null===r||void 0===r?void 0:r.map((e=>(0,j.jsxs)("div",{className:"prints-list-print",children:[(0,j.jsx)(c.Z,{classN:"print-list-text _ellipsis",text:e.name,size:"16px"}),(0,j.jsx)("div",{className:"print-list-image",children:(0,j.jsx)("img",{src:"".concat(f.Z7).concat(e.previewurl),className:"print-list-img",alt:e.name})}),(0,j.jsx)("span",{}),(0,j.jsx)(i.o,{classN:"print-list-button",onClick:()=>(e=>{e&&(d(e),m(e),n(!0))})(e),children:"Edit"})]},e._id))),l&&(0,j.jsx)(o.Z,{callback:k,children:(0,j.jsx)(w,{callback:async()=>{var e,r;const l=(0,g.n)(a,x.uP);if(l)return b(l);async function n(e){const r=await fetch(e),l=await r.blob();return new File([l],"image.jpg",{type:l.type})}Object.keys(h).length&&b({});const t=JSON.parse(JSON.stringify(a));if(null!==a&&void 0!==a&&null!==(e=a.highresurl)&&void 0!==e&&e.includes("blob")){const e=await n(a.highresurl);t.highresurl=e}if(null!==a&&void 0!==a&&null!==(r=a.previewurl)&&void 0!==r&&r.includes("blob")){const e=await n(a.previewurl);t.previewurl=e}const s=new FormData;Object.keys(t).forEach((e=>{s.append(e,t[e])})),await(0,u.dt)(s),await p(N),k()},closePopup:k,print:a,errors:h,setPrint:d,printInfo:v})})]})},k=()=>{const[e,r]=(0,t.useState)(!1),l=(0,s.v9)(d.s_),u=(0,s.I0)(),v=()=>{r(!1),u((0,d.uk)())};return(0,t.useEffect)((()=>{p(u)}),[]),(0,j.jsxs)("div",{children:[(0,j.jsx)(a.Z,{text:"Customize Prints"}),(0,j.jsx)(i.o,{classN:"add-button",onClick:()=>r(!0),type:"button",children:"New Print"}),(0,j.jsxs)(n.Z,{children:[(0,j.jsxs)("div",{className:"prints-pallette-list",children:[(0,j.jsx)(c.Z,{text:"Print List",size:"22px"}),null!==l&&void 0!==l&&l.length?(0,j.jsx)(N,{prints:l}):null]}),e&&(0,j.jsx)(o.Z,{callback:v,children:(0,j.jsx)(b,{closePopup:v})})]})]})}},5820:(e,r,l)=>{l.d(r,{Z:()=>a});var n=l(184);const a=e=>{let{children:r}=e;return(0,n.jsx)("div",{className:"main-body",children:r})}},370:(e,r,l)=>{l.d(r,{Z:()=>t});var n=l(971),a=l(184);const t=e=>{let{text:r}=e;return(0,a.jsx)("div",{className:"main-head",children:(0,a.jsx)(n.Z,{text:r,color:"#aa8a75"})})}},7093:(e,r,l)=>{l.d(r,{ue:()=>n});const n="#aa8a75"},3083:(e,r,l)=>{l.d(r,{R:()=>n});const n=()=>{}},1726:(e,r,l)=>{l.d(r,{o:()=>i});var n=l(3083),a=l(184);const t=e=>{let{classN:r}=e;return(0,a.jsx)("div",{className:"LoaderCircleUI ".concat(r)})},s={default:"default-btn",red:"red-btn",orange:"orange-btn",blue:"blue-btn",green:"green-btn",gray:"gray-btn"},i=e=>{let{children:r,type:l="button",version:i="default",classN:c="",disabled:o=!1,isLoading:d=!1,onClick:u=n.R,...p}=e;return(0,a.jsx)("button",{...p,className:"ButtonUI ".concat(c," ").concat(s[i]," ").concat(o?"_disabled":""),type:l,onClick:e=>!o&&!d&&u(e),children:d?(0,a.jsx)(t,{}):r})}},5168:(e,r,l)=>{l.d(r,{Z:()=>o});var n=l(2791),a=l(9806),t=l(1632),s=l(971),i=l(3083),c=l(184);const o=e=>{let{multiple:r=!1,width:l="400px",height:o="400px",onChange:d=i.R,defaultFiles:u,name:p,validationCallback:v=null,error:m="",classN:h}=e;const[g,x]=(0,n.useState)([]),j=(0,n.useRef)(null),b=(0,n.useRef)(null);(0,n.useEffect)((()=>{null!==u&&void 0!==u&&u.length&&x(u)}),[u]);const f=m?"red":"silver";return(0,c.jsxs)(c.Fragment,{children:[m&&(0,c.jsx)("span",{className:"error-message",children:m}),(0,c.jsxs)("div",{className:"DropzoneUI ".concat(h),style:{width:l,height:o,backgroundImage:"linear-gradient(90deg, ".concat(f," 50%, transparent 50%), linear-gradient(90deg, ").concat(f," 50%, transparent 50%), linear-gradient(0deg, ").concat(f," 50%, transparent 50%), linear-gradient(0deg, ").concat(f," 50%, transparent 50%)")},onDrop:e=>{var l;e.preventDefault();const n=Array.from(e.dataTransfer.files);if(n.forEach((e=>{e.preview=URL.createObjectURL(e)})),r)return x([...g,...n]),d([...g,...n]);null!==n&&void 0!==n&&n.length&&(x(n),d(n)),null===b||void 0===b||null===(l=b.current)||void 0===l||l.classList.remove("_drag")},onDragOver:e=>{var r;e.preventDefault(),null===b||void 0===b||null===(r=b.current)||void 0===r||r.classList.add("_drag")},onDragLeave:e=>{var r;e.preventDefault(),null===b||void 0===b||null===(r=b.current)||void 0===r||r.classList.remove("_drag")},ref:b,children:[(0,c.jsx)("div",{className:"DropzoneUI__body",onClick:()=>{j.current&&j.current.click()},children:(0,c.jsx)(s.Z,{text:"Drag & drop some file".concat(r?"s":""," here, or click to select file").concat(r?"s":""),size:"14px",align:"center"})}),(0,c.jsx)("input",{type:"file",ref:j,style:{display:"none"},onChange:async e=>{const l=Array.from(e.target.files);if(!v||await v(l)){if(l.forEach((e=>{e.preview=URL.createObjectURL(e)})),r)return x([...g,...l]),d([...g,...l]);null!==l&&void 0!==l&&l.length&&(x(l),d(l))}},multiple:r,name:p}),(0,c.jsx)("div",{className:"DropzoneUI__files",style:{maxHeight:+o.replace("px","")-30+"px"},children:g.map(((e,r)=>(0,c.jsxs)("div",{className:"DropzoneUI__file",children:[(0,c.jsx)("img",{src:e.preview,alt:"Preview ".concat(r),className:"DropzoneUI__preview"}),(0,c.jsx)("button",{className:"DropzoneUI__remove",onClick:()=>(e=>{const r=[...g];r.splice(e,1),x(r)})(r),type:"button",children:(0,c.jsx)(a.G,{icon:t.EOp})})]},r)))})]})]})}},971:(e,r,l)=>{l.d(r,{Z:()=>a});var n=l(184);const a=e=>{let{text:r,classN:l="",color:a="",size:t="",align:s="left"}=e;return(0,n.jsx)("h1",{className:"headingUI ".concat(l),style:{color:a||"#000",fontSize:t||"30px",textAlign:s},children:r})}},4437:(e,r,l)=>{l.d(r,{Z:()=>a});var n=l(184);const a=e=>{let{value:r,placeholder:l="",type:a="text",callback:t,label:s="",name:i,error:c}=e;return(0,n.jsxs)("div",{className:"InputUI",children:[s&&(0,n.jsx)("label",{className:"InputUI__label",htmlFor:"InputUI-".concat(i),children:s}),c&&(0,n.jsx)("span",{className:"error-message",children:c}),(0,n.jsx)("input",{className:"InputUI__input".concat(c?" _error":""),id:"InputUI-".concat(i),name:i,type:a,defaultValue:r,onChange:t,...l&&{placeholder:l}})]})}},2143:(e,r,l)=>{l.d(r,{Z:()=>d});var n=l(2791),a=l(4164);function t(e){const r=document.createElement("div");return r.setAttribute("id",e),document.body.appendChild(r),r}const s=function(e){let{children:r,wrapperId:l="react-portal-wrapper"}=e;const[s,i]=(0,n.useState)(null);(0,n.useLayoutEffect)((()=>{let e=document.getElementById(l),r=!1;return e||(r=!0,e=t(l)),i(e),()=>{r&&e.parentNode&&e.parentNode.removeChild(e)}}),[l]);let c=document.getElementById(l);return c||(c=t(l)),null===s?null:(0,a.createPortal)(r,s)};var i=l(9806),c=l(1632),o=l(184);const d=e=>{let{callback:r,children:l}=e;return(0,o.jsx)(s,{children:(0,o.jsxs)("div",{className:"PopupUI",children:[(0,o.jsxs)("div",{className:"PopupUI__container",children:[(0,o.jsx)("div",{className:"PopupUI__body",children:l}),(0,o.jsx)("div",{className:"PopupUI__icon",onClick:()=>r(),children:(0,o.jsx)(i.G,{icon:c.g82,fontSize:"18px",color:"#fff"})})]}),(0,o.jsx)("div",{className:"PopupUI__BG",onClick:()=>r()})]})})}},8779:(e,r,l)=>{l.d(r,{n:()=>n});const n=(e,r)=>{const l=Object.keys(e).reduce(((l,n)=>{const a=r[n]||[],t=e[n];return a.forEach((e=>{const r=e.rule,a=e.error;void 0===r.required||t||(l[n]=a),void 0===r.test||r.test.test(t)||(l[n]=a)})),l}),{});return!!Object.keys(l).length&&l}},8942:(e,r,l)=>{l.d(r,{E9:()=>i,mX:()=>s,o$:()=>n,uP:()=>a,un:()=>t});const n={name:[{rule:{required:!0},error:{message:"Name is required"}}],hexcode:[{rule:{required:!0},error:{message:"HexCode is required"}},{rule:{test:/^#(?:[0-9a-fA-F]{3}){1,2}$/},error:{message:"Incorrect format for HexCode"}}]},a={name:[{rule:{required:!0},error:{message:"Name is required"}}],price:[{rule:{required:!0},error:{message:"Price is required"}}]},t={highresurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Highres Url"}}],previewurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Preview Url"}}]},s={name:[{rule:{required:!0},error:{message:"Name is required"}}]},i={fronturl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Front Url"}}],backurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Back Url"}}]}}}]);
//# sourceMappingURL=780.39ac1efd.chunk.js.map