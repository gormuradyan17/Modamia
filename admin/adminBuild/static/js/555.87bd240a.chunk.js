"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[555],{4555:(e,n,a)=>{a.r(n),a.d(n,{default:()=>q});var r=a(370),t=a(1726),l=a(2791),s=a(5820),o=a(971),c=a(2143),i=a(7098),u=a(2201),d=a(9434),m=a(8779),p=a(8942),v=a(8877);const x=e=>{(0,u.Km)().then((n=>{e((0,v.go)(n))})).catch((e=>console.log(e)))};var h=a(4437),g=a(7093),b=a(5168),j=a(184);const f=e=>{var n,a,r,s,c;let{callback:u,closePopup:d,mannequin:v,setMannequin:x,errors:f,mannequinInfo:k}=e;const[N,w]=(0,l.useState)({}),y=(e,n)=>{x({...v,[n]:URL.createObjectURL(e[0])})},q=(e,n)=>{let a={};return null===e||void 0===e||e.map((e=>{const r={[n]:null===e||void 0===e?void 0:e.name};a=(0,m.n)(r,p.E9)})),Object.keys(a).length?(w(a),!1):(Object.keys(N).length&&w({}),!0)};return(0,j.jsxs)("div",{className:"new-mannequin",children:[(0,j.jsx)(o.Z,{text:"Edit ".concat(k.name," mannequin"),align:"center",color:"#aa8a75"}),(0,j.jsx)("div",{className:"new-mannequin-inputs",children:(0,j.jsx)(h.Z,{placeholder:"Name",value:null===v||void 0===v?void 0:v.name,label:"Name*",name:"name",error:(null===f||void 0===f||null===(n=f.name)||void 0===n?void 0:n.message)||"",callback:e=>{const{target:{name:n,value:a}}=e;x({...v,[n]:a})}})}),(0,j.jsxs)("div",{className:"new-mannequin-zone",children:[(0,j.jsx)(o.Z,{text:"Front image",size:"18px",color:g.ue}),(0,j.jsx)(b.Z,{width:"480px",height:"260px",name:"fronturl",classN:"new-mannequin-dropzone",validationCallback:e=>q(e,"fronturl"),error:(null===N||void 0===N||null===(a=N.fronturl)||void 0===a?void 0:a.message)||"",onChange:e=>y(e,"fronturl"),defaultFiles:[{...v,preview:null!==(r=v.fronturl)&&void 0!==r&&r.includes("blob")?v.fronturl:"".concat(i.jV).concat(v.fronturl)}]})]}),(0,j.jsxs)("div",{className:"new-mannequin-zone",children:[(0,j.jsx)(o.Z,{text:"Back image",size:"18px",color:g.ue}),(0,j.jsx)(b.Z,{width:"480px",height:"260px",name:"backurl",classN:"new-mannequin-dropzone",onChange:e=>y(e,"backurl"),validationCallback:e=>q(e,"backurl"),error:(null===N||void 0===N||null===(s=N.backurl)||void 0===s?void 0:s.message)||"",defaultFiles:[{...v,preview:null!==(c=v.backurl)&&void 0!==c&&c.includes("blob")?v.backurl:"".concat(i.uW).concat(v.backurl)}]})]}),(0,j.jsxs)("div",{className:"new-mannequin-actions",children:[(0,j.jsx)(t.o,{onClick:()=>d(),version:"gray",children:"Discard"}),(0,j.jsx)(t.o,{onClick:()=>u(),children:"Save"})]})]})};var k=a(9806),N=a(1632);const w=e=>{let{mannequins:n}=e;const[a,r]=(0,l.useState)(!1),[t,s]=(0,l.useState)({}),[v,h]=(0,l.useState)({}),[g,b]=(0,l.useState)({}),[w,y]=(0,l.useState)("front"),q=(0,d.I0)(),I=()=>{r(!1),s({}),h({}),b({})},C=()=>{y("front"===w?"back":"front")};return(0,j.jsxs)("div",{className:"mannequin-list",children:[null===n||void 0===n?void 0:n.map((e=>(0,j.jsxs)("div",{className:"mannequins-list-mannequin",children:[(0,j.jsx)(o.Z,{classN:"mannequin-list-text _ellipsis",text:e.name,size:"16px"}),(0,j.jsxs)("div",{className:"mannequin-list-image",children:[(0,j.jsx)("img",{src:"front"===w?"".concat(i.jV).concat(e.fronturl):"".concat(i.uW).concat(e.backurl),className:"mannequin-list-img",alt:e.name}),(0,j.jsx)("button",{type:"button",className:"mannequin-list-rotate",onClick:C,children:(0,j.jsx)(k.G,{icon:N.QHR})}),(0,j.jsx)("button",{type:"button",className:"mannequin-list-edit",onClick:()=>{var n;(n=e)&&(s(n),h(n),r(!0))},children:(0,j.jsx)(k.G,{icon:N.TzT})})]})]},e._id))),a&&(0,j.jsx)(c.Z,{callback:I,children:(0,j.jsx)(f,{callback:async()=>{var e,n;const a=(0,m.n)(t,p.mX);if(a)return b(a);async function r(e){const n=await fetch(e),a=await n.blob();return new File([a],"image.jpg",{type:a.type})}Object.keys(g).length&&b({});const l=JSON.parse(JSON.stringify(t));if(null!==t&&void 0!==t&&null!==(e=t.fronturl)&&void 0!==e&&e.includes("blob")){const e=await r(t.fronturl);l.fronturl=e}if(null!==t&&void 0!==t&&null!==(n=t.backurl)&&void 0!==n&&n.includes("blob")){const e=await r(t.backurl);l.backurl=e}const s=new FormData;Object.keys(l).forEach((e=>{s.append(e,l[e])})),await(0,u.Be)(s),await x(q),I()},closePopup:I,mannequin:t,errors:g,setMannequin:s,mannequinInfo:v})})]})},y=e=>{var n,a,r;let{closePopup:s}=e;const c=(0,d.I0)(),[i,v]=(0,l.useState)({name:"",fronturl:"",backurl:""}),[f,k]=(0,l.useState)({}),[N,w]=(0,l.useState)({}),y=(e,n)=>{v({...i,[n]:e[0]})},q=(e,n)=>{let a={};return null===e||void 0===e||e.map((e=>{const r={[n]:null===e||void 0===e?void 0:e.name};a=(0,m.n)(r,p.mX)})),Object.keys(a).length?(w(a),!1):(Object.keys(N).length&&w({}),!0)};return(0,j.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const n=(0,m.n)(i,p.mX);if(n)return k(n);Object.keys(n).length&&k({});const a=new FormData;Object.keys(i).forEach((e=>{a.append(e,i[e])})),await(0,u.xs)(a),await x(c),s()},className:"new-mannequin",children:[(0,j.jsx)(o.Z,{text:"Add new mannequin",align:"center",color:g.ue}),(0,j.jsxs)("div",{className:"new-mannequin-inputs",children:[(0,j.jsx)(h.Z,{placeholder:"Name",value:null===i||void 0===i?void 0:i.name,label:"Name*",name:"name",error:(null===f||void 0===f||null===(n=f.name)||void 0===n?void 0:n.message)||"",callback:e=>{const{target:{name:n,value:a}}=e;v({...i,[n]:a})}}),(0,j.jsxs)("div",{className:"new-mannequin-zone",children:[(0,j.jsx)(o.Z,{text:"Front image",size:"18px",color:g.ue}),(0,j.jsx)(b.Z,{width:"480px",height:"160px",name:"fronturl",validationCallback:e=>q(e,"fronturl"),error:(null===N||void 0===N||null===(a=N.fronturl)||void 0===a?void 0:a.message)||"",onChange:e=>y(e,"fronturl")})]}),(0,j.jsxs)("div",{className:"new-mannequin-zone",children:[(0,j.jsx)(o.Z,{text:"Back image",size:"18px",color:g.ue}),(0,j.jsx)(b.Z,{width:"480px",height:"160px",name:"backurl",validationCallback:e=>q(e,"backurl"),error:(null===N||void 0===N||null===(r=N.backurl)||void 0===r?void 0:r.message)||"",onChange:e=>y(e,"backurl")})]})]}),(0,j.jsxs)("div",{className:"new-mannequin-actions",children:[(0,j.jsx)(t.o,{onClick:()=>s(),version:"gray",children:"Close"}),(0,j.jsx)(t.o,{type:"submit",children:"Add"})]})]})},q=()=>{const[e,n]=(0,l.useState)(!1),a=(0,d.v9)(v.wm),i=(0,d.I0)(),[u,m]=(0,l.useState)({});(0,l.useEffect)((()=>{x(i)}),[]);const p=()=>{n(!1),m({})};return(0,j.jsxs)("div",{children:[(0,j.jsx)(r.Z,{text:"Customize Mannequins"}),(0,j.jsx)(t.o,{classN:"add-button",onClick:()=>n(!0),type:"button",children:"New Mannequin"}),(0,j.jsxs)(s.Z,{children:[(0,j.jsxs)("div",{className:"colors-pallette-list",children:[(0,j.jsx)(o.Z,{text:"Mannequins List",size:"22px"}),null!==a&&void 0!==a&&a.length?(0,j.jsx)(w,{mannequins:a}):null]}),e&&(0,j.jsx)(c.Z,{callback:p,children:(0,j.jsx)(y,{closePopup:p})})]})]})}},5820:(e,n,a)=>{a.d(n,{Z:()=>t});var r=a(184);const t=e=>{let{children:n}=e;return(0,r.jsx)("div",{className:"main-body",children:n})}},370:(e,n,a)=>{a.d(n,{Z:()=>l});var r=a(971),t=a(184);const l=e=>{let{text:n}=e;return(0,t.jsx)("div",{className:"main-head",children:(0,t.jsx)(r.Z,{text:n,color:"#aa8a75"})})}},7093:(e,n,a)=>{a.d(n,{ue:()=>r});const r="#aa8a75"},3083:(e,n,a)=>{a.d(n,{R:()=>r});const r=()=>{}},1726:(e,n,a)=>{a.d(n,{o:()=>o});var r=a(3083),t=a(184);const l=e=>{let{classN:n}=e;return(0,t.jsx)("div",{className:"LoaderCircleUI ".concat(n)})},s={default:"default-btn",red:"red-btn",orange:"orange-btn",blue:"blue-btn",green:"green-btn",gray:"gray-btn"},o=e=>{let{children:n,type:a="button",version:o="default",classN:c="",disabled:i=!1,isLoading:u=!1,onClick:d=r.R,...m}=e;return(0,t.jsx)("button",{...m,className:"ButtonUI ".concat(c," ").concat(s[o]," ").concat(i?"_disabled":""),type:a,onClick:e=>!i&&!u&&d(e),children:u?(0,t.jsx)(l,{}):n})}},5168:(e,n,a)=>{a.d(n,{Z:()=>i});var r=a(2791),t=a(9806),l=a(1632),s=a(971),o=a(3083),c=a(184);const i=e=>{let{multiple:n=!1,width:a="400px",height:i="400px",onChange:u=o.R,defaultFiles:d,name:m,validationCallback:p=null,error:v="",classN:x}=e;const[h,g]=(0,r.useState)([]),b=(0,r.useRef)(null),j=(0,r.useRef)(null);(0,r.useEffect)((()=>{null!==d&&void 0!==d&&d.length&&g(d)}),[d]);const f=v?"red":"silver";return(0,c.jsxs)(c.Fragment,{children:[v&&(0,c.jsx)("span",{className:"error-message",children:v}),(0,c.jsxs)("div",{className:"DropzoneUI ".concat(x),style:{width:a,height:i,backgroundImage:"linear-gradient(90deg, ".concat(f," 50%, transparent 50%), linear-gradient(90deg, ").concat(f," 50%, transparent 50%), linear-gradient(0deg, ").concat(f," 50%, transparent 50%), linear-gradient(0deg, ").concat(f," 50%, transparent 50%)")},onDrop:e=>{var a;e.preventDefault();const r=Array.from(e.dataTransfer.files);if(r.forEach((e=>{e.preview=URL.createObjectURL(e)})),n)return g([...h,...r]),u([...h,...r]);null!==r&&void 0!==r&&r.length&&(g(r),u(r)),null===j||void 0===j||null===(a=j.current)||void 0===a||a.classList.remove("_drag")},onDragOver:e=>{var n;e.preventDefault(),null===j||void 0===j||null===(n=j.current)||void 0===n||n.classList.add("_drag")},onDragLeave:e=>{var n;e.preventDefault(),null===j||void 0===j||null===(n=j.current)||void 0===n||n.classList.remove("_drag")},ref:j,children:[(0,c.jsx)("div",{className:"DropzoneUI__body",onClick:()=>{b.current&&b.current.click()},children:(0,c.jsx)(s.Z,{text:"Drag & drop some file".concat(n?"s":""," here, or click to select file").concat(n?"s":""),size:"14px",align:"center"})}),(0,c.jsx)("input",{type:"file",ref:b,style:{display:"none"},onChange:async e=>{const a=Array.from(e.target.files);if(!p||await p(a)){if(a.forEach((e=>{e.preview=URL.createObjectURL(e)})),n)return g([...h,...a]),u([...h,...a]);null!==a&&void 0!==a&&a.length&&(g(a),u(a))}},multiple:n,name:m}),(0,c.jsx)("div",{className:"DropzoneUI__files",style:{maxHeight:+i.replace("px","")-30+"px"},children:h.map(((e,n)=>(0,c.jsxs)("div",{className:"DropzoneUI__file",children:[(0,c.jsx)("img",{src:e.preview,alt:"Preview ".concat(n),className:"DropzoneUI__preview"}),(0,c.jsx)("button",{className:"DropzoneUI__remove",onClick:()=>(e=>{const n=[...h];n.splice(e,1),g(n)})(n),type:"button",children:(0,c.jsx)(t.G,{icon:l.EOp})})]},n)))})]})]})}},971:(e,n,a)=>{a.d(n,{Z:()=>t});var r=a(184);const t=e=>{let{text:n,classN:a="",color:t="",size:l="",align:s="left"}=e;return(0,r.jsx)("h1",{className:"headingUI ".concat(a),style:{color:t||"#000",fontSize:l||"30px",textAlign:s},children:n})}},4437:(e,n,a)=>{a.d(n,{Z:()=>t});var r=a(184);const t=e=>{let{value:n,placeholder:a="",type:t="text",callback:l,label:s="",name:o,error:c}=e;return(0,r.jsxs)("div",{className:"InputUI",children:[s&&(0,r.jsx)("label",{className:"InputUI__label",htmlFor:"InputUI-".concat(o),children:s}),c&&(0,r.jsx)("span",{className:"error-message",children:c}),(0,r.jsx)("input",{className:"InputUI__input".concat(c?" _error":""),id:"InputUI-".concat(o),name:o,type:t,defaultValue:n,onChange:l,...a&&{placeholder:a}})]})}},2143:(e,n,a)=>{a.d(n,{Z:()=>u});var r=a(2791),t=a(4164);function l(e){const n=document.createElement("div");return n.setAttribute("id",e),document.body.appendChild(n),n}const s=function(e){let{children:n,wrapperId:a="react-portal-wrapper"}=e;const[s,o]=(0,r.useState)(null);(0,r.useLayoutEffect)((()=>{let e=document.getElementById(a),n=!1;return e||(n=!0,e=l(a)),o(e),()=>{n&&e.parentNode&&e.parentNode.removeChild(e)}}),[a]);let c=document.getElementById(a);return c||(c=l(a)),null===s?null:(0,t.createPortal)(n,s)};var o=a(9806),c=a(1632),i=a(184);const u=e=>{let{callback:n,children:a}=e;return(0,i.jsx)(s,{children:(0,i.jsxs)("div",{className:"PopupUI",children:[(0,i.jsxs)("div",{className:"PopupUI__container",children:[(0,i.jsx)("div",{className:"PopupUI__body",children:a}),(0,i.jsx)("div",{className:"PopupUI__icon",onClick:()=>n(),children:(0,i.jsx)(o.G,{icon:c.g82,fontSize:"18px",color:"#fff"})})]}),(0,i.jsx)("div",{className:"PopupUI__BG",onClick:()=>n()})]})})}},8779:(e,n,a)=>{a.d(n,{n:()=>r});const r=(e,n)=>{const a=Object.keys(e).reduce(((a,r)=>{const t=n[r]||[],l=e[r];return t.forEach((e=>{const n=e.rule,t=e.error;void 0===n.required||l||(a[r]=t),void 0===n.test||n.test.test(l)||(a[r]=t)})),a}),{});return!!Object.keys(a).length&&a}},8942:(e,n,a)=>{a.d(n,{E9:()=>o,mX:()=>s,o$:()=>r,uP:()=>t,un:()=>l});const r={name:[{rule:{required:!0},error:{message:"Name is required"}}],hexcode:[{rule:{required:!0},error:{message:"HexCode is required"}},{rule:{test:/^#(?:[0-9a-fA-F]{3}){1,2}$/},error:{message:"Incorrect format for HexCode"}}]},t={name:[{rule:{required:!0},error:{message:"Name is required"}}],price:[{rule:{required:!0},error:{message:"Price is required"}}]},l={highresurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Highres Url"}}],previewurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Preview Url"}}]},s={name:[{rule:{required:!0},error:{message:"Name is required"}}]},o={fronturl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Front Url"}}],backurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Back Url"}}]}}}]);
//# sourceMappingURL=555.87bd240a.chunk.js.map