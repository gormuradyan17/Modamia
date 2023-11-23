"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[714],{4555:(e,n,a)=>{a.r(n),a.d(n,{default:()=>y});var l=a(370),t=a(1726),s=a(2791),i=a(5820),r=a(971),o=a(7959),c=a(7098),u=a(2201),d=a(9434),m=a(8779),v=a(8942),x=a(9153);const p=e=>{(0,u.Km)().then((n=>{e((0,x.go)(n))})).catch((e=>console.log(e)))};var h=a(4437),j=a(7093),g=a(5168),b=a(184);const f=e=>{var n,a,l,i,o;let{callback:u,closePopup:d,mannequin:x,setMannequin:p,errors:f,mannequinInfo:k}=e;const[w,N]=(0,s.useState)({}),q=(e,n)=>{p({...x,[n]:URL.createObjectURL(e[0])})},y=(e,n)=>{let a={};return null===e||void 0===e||e.map((e=>{const l={[n]:null===e||void 0===e?void 0:e.name};a=(0,m.n)(l,v.E9)})),Object.keys(a).length?(N(a),!1):(Object.keys(w).length&&N({}),!0)};return(0,b.jsxs)("div",{className:"new-mannequin",children:[(0,b.jsx)(r.Z,{text:"Edit ".concat(k.name," mannequin"),align:"center",color:"#aa8a75"}),(0,b.jsx)("div",{className:"new-mannequin-inputs",children:(0,b.jsx)(h.Z,{placeholder:"Name",value:null===x||void 0===x?void 0:x.name,label:"Name*",name:"name",error:(null===f||void 0===f||null===(n=f.name)||void 0===n?void 0:n.message)||"",callback:e=>{const{target:{name:n,value:a}}=e;p({...x,[n]:a})}})}),(0,b.jsxs)("div",{className:"new-mannequin-zone",children:[(0,b.jsx)(r.Z,{text:"Front image",size:"18px",color:j.ue}),(0,b.jsx)(g.Z,{width:"480px",height:"260px",name:"fronturl",classN:"new-mannequin-dropzone",validationCallback:e=>y(e,"fronturl"),error:(null===w||void 0===w||null===(a=w.fronturl)||void 0===a?void 0:a.message)||"",onChange:e=>q(e,"fronturl"),defaultFiles:[{...x,preview:null!==(l=x.fronturl)&&void 0!==l&&l.includes("blob")?x.fronturl:"".concat(c.jV).concat(x.fronturl)}]})]}),(0,b.jsxs)("div",{className:"new-mannequin-zone",children:[(0,b.jsx)(r.Z,{text:"Back image",size:"18px",color:j.ue}),(0,b.jsx)(g.Z,{width:"480px",height:"260px",name:"backurl",classN:"new-mannequin-dropzone",onChange:e=>q(e,"backurl"),validationCallback:e=>y(e,"backurl"),error:(null===w||void 0===w||null===(i=w.backurl)||void 0===i?void 0:i.message)||"",defaultFiles:[{...x,preview:null!==(o=x.backurl)&&void 0!==o&&o.includes("blob")?x.backurl:"".concat(c.uW).concat(x.backurl)}]})]}),(0,b.jsxs)("div",{className:"new-mannequin-actions",children:[(0,b.jsx)(t.o,{onClick:()=>d(),version:"gray",children:"Discard"}),(0,b.jsx)(t.o,{onClick:()=>u(),children:"Save"})]})]})};var k=a(9806),w=a(1632);const N=e=>{let{mannequins:n}=e;const[a,l]=(0,s.useState)(!1),[t,i]=(0,s.useState)({}),[x,h]=(0,s.useState)({}),[j,g]=(0,s.useState)({}),[N,q]=(0,s.useState)("front"),y=(0,d.I0)(),C=()=>{l(!1),i({}),h({}),g({})},z=()=>{q("front"===N?"back":"front")};return(0,b.jsxs)("div",{className:"mannequin-list",children:[null===n||void 0===n?void 0:n.map((e=>(0,b.jsxs)("div",{className:"mannequins-list-mannequin",children:[(0,b.jsx)(r.Z,{classN:"mannequin-list-text _ellipsis",text:e.name,size:"16px"}),(0,b.jsxs)("div",{className:"mannequin-list-image",children:[(0,b.jsx)("img",{src:"front"===N?"".concat(c.jV).concat(e.fronturl):"".concat(c.uW).concat(e.backurl),className:"mannequin-list-img",alt:e.name}),(0,b.jsx)("button",{type:"button",className:"mannequin-list-rotate",onClick:z,children:(0,b.jsx)(k.G,{icon:w.QHR})}),(0,b.jsx)("button",{type:"button",className:"mannequin-list-edit",onClick:()=>{var n;(n=e)&&(i(n),h(n),l(!0))},children:(0,b.jsx)(k.G,{icon:w.TzT})})]})]},e._id))),a&&(0,b.jsx)(o.Z,{callback:C,children:(0,b.jsx)(f,{callback:async()=>{var e,n;const a=(0,m.n)(t,v.mX);if(a)return g(a);async function l(e){const n=await fetch(e),a=await n.blob();return new File([a],"image.jpg",{type:a.type})}Object.keys(j).length&&g({});const s=JSON.parse(JSON.stringify(t));if(null!==t&&void 0!==t&&null!==(e=t.fronturl)&&void 0!==e&&e.includes("blob")){const e=await l(t.fronturl);s.fronturl=e}if(null!==t&&void 0!==t&&null!==(n=t.backurl)&&void 0!==n&&n.includes("blob")){const e=await l(t.backurl);s.backurl=e}const i=new FormData;Object.keys(s).forEach((e=>{i.append(e,s[e])})),await(0,u.Be)(i),await p(y),C()},closePopup:C,mannequin:t,errors:j,setMannequin:i,mannequinInfo:x})})]})},q=e=>{var n,a,l;let{closePopup:i}=e;const o=(0,d.I0)(),[c,x]=(0,s.useState)({name:"",fronturl:"",backurl:""}),[f,k]=(0,s.useState)({}),[w,N]=(0,s.useState)({}),q=(e,n)=>{x({...c,[n]:e[0]})},y=(e,n)=>{let a={};return null===e||void 0===e||e.map((e=>{const l={[n]:null===e||void 0===e?void 0:e.name};a=(0,m.n)(l,v.mX)})),Object.keys(a).length?(N(a),!1):(Object.keys(w).length&&N({}),!0)};return(0,b.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const n=(0,m.n)(c,v.mX);if(n)return k(n);Object.keys(n).length&&k({});const a=new FormData;Object.keys(c).forEach((e=>{a.append(e,c[e])})),await(0,u.xs)(a),await p(o),i()},className:"new-mannequin",children:[(0,b.jsx)(r.Z,{text:"Add new mannequin",align:"center",color:j.ue}),(0,b.jsxs)("div",{className:"new-mannequin-inputs",children:[(0,b.jsx)(h.Z,{placeholder:"Name",value:null===c||void 0===c?void 0:c.name,label:"Name*",name:"name",error:(null===f||void 0===f||null===(n=f.name)||void 0===n?void 0:n.message)||"",callback:e=>{const{target:{name:n,value:a}}=e;x({...c,[n]:a})}}),(0,b.jsxs)("div",{className:"new-mannequin-zone",children:[(0,b.jsx)(r.Z,{text:"Front image",size:"18px",color:j.ue}),(0,b.jsx)(g.Z,{width:"480px",height:"160px",name:"fronturl",validationCallback:e=>y(e,"fronturl"),error:(null===w||void 0===w||null===(a=w.fronturl)||void 0===a?void 0:a.message)||"",onChange:e=>q(e,"fronturl")})]}),(0,b.jsxs)("div",{className:"new-mannequin-zone",children:[(0,b.jsx)(r.Z,{text:"Back image",size:"18px",color:j.ue}),(0,b.jsx)(g.Z,{width:"480px",height:"160px",name:"backurl",validationCallback:e=>y(e,"backurl"),error:(null===w||void 0===w||null===(l=w.backurl)||void 0===l?void 0:l.message)||"",onChange:e=>q(e,"backurl")})]})]}),(0,b.jsxs)("div",{className:"new-mannequin-actions",children:[(0,b.jsx)(t.o,{onClick:()=>i(),version:"gray",children:"Close"}),(0,b.jsx)(t.o,{type:"submit",children:"Add"})]})]})},y=()=>{const[e,n]=(0,s.useState)(!1),a=(0,d.v9)(x.wm),c=(0,d.I0)(),[u,m]=(0,s.useState)({});(0,s.useEffect)((()=>{p(c)}),[]);const v=()=>{n(!1),m({})};return(0,b.jsxs)("div",{children:[(0,b.jsx)(l.Z,{text:"Customize Mannequins"}),(0,b.jsx)(t.o,{classN:"add-button",onClick:()=>n(!0),type:"button",children:"New Mannequin"}),(0,b.jsxs)(i.Z,{children:[(0,b.jsxs)("div",{className:"colors-pallette-list",children:[(0,b.jsx)(r.Z,{text:"Mannequins List",size:"22px"}),null!==a&&void 0!==a&&a.length?(0,b.jsx)(N,{mannequins:a}):null]}),e&&(0,b.jsx)(o.Z,{callback:v,children:(0,b.jsx)(q,{closePopup:v})})]})]})}},7093:(e,n,a)=>{a.d(n,{Df:()=>r,X6:()=>o,ue:()=>t,wM:()=>i,yr:()=>s});var l=a(7098);const t="#aa8a75",s=[{id:"top",text:"Top",value:"Top"},{id:"bottom",text:"Bottom",value:"Bottom"},{id:"sleeve",text:"Sleeve",value:"Sleeve"}],i=[{id:"front",text:"Front",value:"Front"},{id:"back",text:"Back",value:"Back"}],r=e=>{switch(e.toLowerCase()){case"top":return l.vj;case"bottom":return l.LB;case"sleeve":return l.Ex}},o=e=>null!==e&&void 0!==e&&e.length?e.reduce(((e,n)=>(e.push({id:null===n||void 0===n?void 0:n._id,text:null===n||void 0===n?void 0:n.name,value:null===n||void 0===n?void 0:n.name}),e)),[]):[]},5168:(e,n,a)=>{a.d(n,{Z:()=>c});var l=a(2791),t=a(9806),s=a(1632),i=a(971),r=a(3083),o=a(184);const c=e=>{let{multiple:n=!1,width:a="400px",height:c="400px",onChange:u=r.R,defaultFiles:d,name:m,validationCallback:v=null,error:x="",classN:p}=e;const[h,j]=(0,l.useState)([]),g=(0,l.useRef)(null),b=(0,l.useRef)(null);(0,l.useEffect)((()=>{null!==d&&void 0!==d&&d.length&&j(d)}),[d]);const f=x?"red":"silver";return(0,o.jsxs)(o.Fragment,{children:[x&&(0,o.jsx)("span",{className:"error-message",children:x}),(0,o.jsxs)("div",{className:"DropzoneUI ".concat(p),style:{width:a,height:c,backgroundImage:"linear-gradient(90deg, ".concat(f," 50%, transparent 50%), linear-gradient(90deg, ").concat(f," 50%, transparent 50%), linear-gradient(0deg, ").concat(f," 50%, transparent 50%), linear-gradient(0deg, ").concat(f," 50%, transparent 50%)")},onDrop:e=>{var a;e.preventDefault();const l=Array.from(e.dataTransfer.files);if(l.forEach((e=>{e.preview=URL.createObjectURL(e)})),n)return j([...h,...l]),u([...h,...l]);null!==l&&void 0!==l&&l.length&&(j(l),u(l)),null===b||void 0===b||null===(a=b.current)||void 0===a||a.classList.remove("_drag")},onDragOver:e=>{var n;e.preventDefault(),null===b||void 0===b||null===(n=b.current)||void 0===n||n.classList.add("_drag")},onDragLeave:e=>{var n;e.preventDefault(),null===b||void 0===b||null===(n=b.current)||void 0===n||n.classList.remove("_drag")},ref:b,children:[(0,o.jsx)("div",{className:"DropzoneUI__body",onClick:()=>{g.current&&g.current.click()},children:(0,o.jsx)(i.Z,{text:"Drag & drop some file".concat(n?"s":""," here, or click to select file").concat(n?"s":""),size:"14px",align:"center"})}),(0,o.jsx)("input",{type:"file",ref:g,style:{display:"none"},onChange:async e=>{const a=Array.from(e.target.files);if(!v||await v(a)){if(a.forEach((e=>{e.preview=URL.createObjectURL(e)})),n)return j([...h,...a]),u([...h,...a]);null!==a&&void 0!==a&&a.length&&(j(a),u(a))}},multiple:n,name:m}),(0,o.jsx)("div",{className:"DropzoneUI__files",style:{maxHeight:+c.replace("px","")-30+"px"},children:h.map(((e,n)=>(0,o.jsxs)("div",{className:"DropzoneUI__file",children:[(0,o.jsx)("img",{src:e.preview,alt:"Preview ".concat(n),className:"DropzoneUI__preview"}),(0,o.jsx)("button",{className:"DropzoneUI__remove",onClick:()=>(e=>{const n=[...h];n.splice(e,1),j(n)})(n),type:"button",children:(0,o.jsx)(t.G,{icon:s.EOp})})]},n)))})]})]})}}}]);
//# sourceMappingURL=714.e0bdddd1.chunk.js.map