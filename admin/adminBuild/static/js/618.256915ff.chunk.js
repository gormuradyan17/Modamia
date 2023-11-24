"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[618],{6901:(e,r,t)=>{t.d(r,{Z:()=>p});var l=t(2791),n=t(1726),a=t(971),o=t(4437),s=(t(3388),t(7093)),i=t(5168),c=t(8942),u=t(8779),d=t(9467),v=t(184);const p=e=>{var r,t,p,m,h,g;let{callback:x,closePopup:f,silhouette:j,setSilhouette:b,errors:y,silhouetteInfo:N}=e;const w=e=>{const{target:{name:r,value:t}}=e;b({...j,[r]:t})},[k,I]=(0,l.useState)({}),_=(e,r)=>{const t=e.value;b({...j,[r]:t})};return(0,v.jsxs)("div",{className:"new-print",children:[(0,v.jsx)(a.Z,{text:"Edit silhouette ".concat(N.name),align:"center",color:s.ue}),(0,v.jsxs)("div",{className:"new-silhouette-inputs",children:[(0,v.jsx)(o.Z,{placeholder:"Name",value:null===j||void 0===j?void 0:j.name,label:"Name*",name:"name",error:(null===y||void 0===y||null===(r=y.name)||void 0===r?void 0:r.message)||"",callback:w}),(0,v.jsx)(o.Z,{type:"number",placeholder:"Price",value:(null===j||void 0===j?void 0:j.price)>0?null===j||void 0===j?void 0:j.price:"",label:"Price*",name:"price",error:(null===y||void 0===y||null===(t=y.price)||void 0===t?void 0:t.message)||"",callback:w}),(0,v.jsx)(o.Z,{placeholder:"Tags",value:null===j||void 0===j?void 0:j.tags,label:"Tags",name:"tags",callback:w}),(0,v.jsx)(d.Z,{options:s.yr,onChange:e=>_(e,"type"),label:"Silhouette type*",error:(null===y||void 0===y||null===(p=y.type)||void 0===p?void 0:p.message)||"",defaultValue:null===j||void 0===j?void 0:j.type}),(0,v.jsx)(d.Z,{options:s.wM,onChange:e=>_(e,"orientation"),label:"Silhouette orientation*",error:(null===y||void 0===y||null===(m=y.orientation)||void 0===m?void 0:m.message)||"",defaultValue:null===j||void 0===j?void 0:j.orientation}),(0,v.jsxs)("div",{className:"new-silhouette-zone",children:[(0,v.jsx)(a.Z,{text:"Silhouette image",size:"18px",color:s.ue}),(0,v.jsx)(i.Z,{width:"480px",height:"160px",name:"silhouetteurl",validationCallback:e=>((e,r)=>{let t={};return null===e||void 0===e||e.map((e=>{const l={[r]:null===e||void 0===e?void 0:e.name};t=(0,u.n)(l,c.ib)})),Object.keys(t).length?(I(t),!1):(Object.keys(k).length&&I({}),!0)})(e,"silhouetteurl"),error:(null===k||void 0===k||null===(h=k.silhouetteurl)||void 0===h?void 0:h.message)||"",onChange:e=>(e=>{b({...j,silhouetteurl:URL.createObjectURL(e[0])})})(e),defaultFiles:[{...j,preview:null!==(g=j.silhouetteurl)&&void 0!==g&&g.includes("blob")?j.silhouetteurl:"".concat((0,s.Df)(N.type)).concat(j.silhouetteurl)}]})]})]}),(0,v.jsxs)("div",{className:"new-silhouette-actions",children:[(0,v.jsx)(n.o,{onClick:()=>f(),version:"gray",children:"Discard"}),(0,v.jsx)(n.o,{onClick:()=>x(),children:"Save"})]})]})}},5931:(e,r,t)=>{t.d(r,{Z:()=>x});var l=t(2791),n=t(9434),a=t(1717),o=t(7093),s=t(1726),i=t(9467),c=t(971),u=t(4437),d=t(8779),v=t(8942),p=t(5168),m=t(8587),h=t(5227),g=t(184);const x=e=>{var r,t,x,f,j;let{closePopup:b,selectedType:y=""}=e;const N=(0,n.I0)(),w=(0,n.v9)(a.tF),[k,I]=(0,l.useState)({}),[_,C]=(0,l.useState)({}),[U,Z]=(0,l.useState)(null),q=e=>{const{target:{name:r,value:t}}=e;N((0,a.l9)({name:r,value:t}))},$=(e,r)=>{const t=e.value;N((0,a.l9)({name:r,value:t}))};return(0,l.useEffect)((()=>{y&&N((0,a.l9)({name:"type",value:y}))}),[y]),(0,g.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const r=(0,d.n)(w,v.Vu);if(r)return I(r);Object.keys(r).length&&I({});const t=new FormData;Object.keys(w).forEach((e=>{t.append(e,w[e])})),null!==U&&void 0!==U&&U[0]?(t.append("silhouetteurl",U[0]),await(0,m.rq)(t),await(0,h.T)(N),b()):(console.log("sadsadsadasasdsadadsdasd"),C({silhouetteurl:{message:"Incorrect format for Silhouette Url"}}))},className:"new-silhouette",children:[(0,g.jsx)(c.Z,{text:"Add new silhouette",align:"center",color:o.ue}),(0,g.jsxs)("div",{className:"new-silhouette-inputs",children:[(0,g.jsx)(u.Z,{placeholder:"Name",value:null===w||void 0===w?void 0:w.name,label:"Name*",name:"name",error:(null===k||void 0===k||null===(r=k.name)||void 0===r?void 0:r.message)||"",callback:q}),(0,g.jsx)(u.Z,{type:"number",placeholder:"Price",value:(null===w||void 0===w?void 0:w.price)>0?null===w||void 0===w?void 0:w.price:"",label:"Price*",name:"price",error:(null===k||void 0===k||null===(t=k.price)||void 0===t?void 0:t.message)||"",callback:q}),(0,g.jsx)(u.Z,{placeholder:"Tags",value:null===w||void 0===w?void 0:w.tags,label:"Tags",name:"tags",callback:q}),(0,g.jsx)(i.Z,{options:o.yr,onChange:e=>$(e,"type"),label:"Silhouette type*",error:(null===k||void 0===k||null===(x=k.type)||void 0===x?void 0:x.message)||"",...y&&{defaultValue:y},disabled:!!y}),(0,g.jsx)(i.Z,{options:o.wM,onChange:e=>$(e,"orientation"),label:"Silhouette orientation*",error:(null===k||void 0===k||null===(f=k.orientation)||void 0===f?void 0:f.message)||""}),(0,g.jsxs)("div",{className:"new-silhouette-zone",children:[(0,g.jsx)(c.Z,{text:"Silhouette image",size:"18px",color:o.ue}),(0,g.jsx)(p.Z,{width:"480px",height:"160px",name:"silhouetteurl",validationCallback:e=>((e,r)=>{let t={};return null===e||void 0===e||e.map((e=>{const l={[r]:null===e||void 0===e?void 0:e.name};t=(0,d.n)(l,v.ib)})),Object.keys(t).length?(C(t),!1):(Object.keys(_).length&&C({}),!0)})(e,"silhouetteurl"),error:(null===_||void 0===_||null===(j=_.silhouetteurl)||void 0===j?void 0:j.message)||"",onChange:e=>{Z(e)}})]})]}),(0,g.jsxs)("div",{className:"new-silhouette-actions",children:[(0,g.jsx)(s.o,{onClick:()=>b(),version:"gray",children:"Close"}),(0,g.jsx)(s.o,{type:"submit",children:"Add"})]})]})}},5820:(e,r,t)=>{t.d(r,{Z:()=>n});var l=t(184);const n=e=>{let{children:r}=e;return(0,l.jsx)("div",{className:"main-body",children:r})}},370:(e,r,t)=>{t.d(r,{Z:()=>p});var l=t(971),n=t(1726),a=t(9806),o=t(1632),s=t(1927),i=t(7093),c=t(9434),u=t(1727),d=t(7689),v=t(184);const p=e=>{let{text:r}=e;const t=(0,c.I0)(),p=(0,d.s0)();return(0,v.jsxs)("div",{className:"main-head",children:[(0,v.jsx)(l.Z,{text:r,color:"#aa8a75"}),(0,v.jsxs)(n.o,{classN:"main-head-logout",onClick:async()=>{try{await(0,s.Sr)()&&((0,i.Mz)("accessToken"),t((0,u.tR)(!1)),t((0,u.f4)({})),p("/login"))}catch(e){console.log(e)}},children:[(0,v.jsx)(a.G,{icon:o.jLD}),(0,v.jsx)("span",{children:"Sign out"})]})]})}},98:(e,r,t)=>{t.d(r,{Z:()=>o});var l=t(2791),n=t(4164);function a(e){const r=document.createElement("div");return r.setAttribute("id",e),document.body.appendChild(r),r}const o=function(e){let{children:r,wrapperId:t="react-portal-wrapper"}=e;const[o,s]=(0,l.useState)(null);(0,l.useLayoutEffect)((()=>{let e=document.getElementById(t),r=!1;return e||(r=!0,e=a(t)),s(e),()=>{r&&e.parentNode&&e.parentNode.removeChild(e)}}),[t]);let i=document.getElementById(t);return i||(i=a(t)),null===o?null:(0,n.createPortal)(r,o)}},5227:(e,r,t)=>{t.d(r,{T:()=>a});var l=t(1717),n=t(8587);const a=e=>{(0,n.Rc)().then((r=>{e((0,l.$F)(r))})).catch((e=>console.log(e)))}},3083:(e,r,t)=>{t.d(r,{R:()=>l});const l=()=>{}},1726:(e,r,t)=>{t.d(r,{o:()=>s});var l=t(3083),n=t(184);const a=e=>{let{classN:r}=e;return(0,n.jsx)("div",{className:"LoaderCircleUI ".concat(r)})},o={default:"default-btn",red:"red-btn",orange:"orange-btn",blue:"blue-btn",green:"green-btn",gray:"gray-btn"},s=e=>{let{children:r,type:t="button",version:s="default",classN:i="",disabled:c=!1,isLoading:u=!1,onClick:d=l.R,...v}=e;return(0,n.jsx)("button",{...v,className:"ButtonUI ".concat(i," ").concat(o[s]," ").concat(c?"_disabled":""),type:t,onClick:e=>!c&&!u&&d(e),children:u?(0,n.jsx)(a,{}):r})}},9467:(e,r,t)=>{t.d(r,{Z:()=>u});var l=t(1632),n=t(9806),a=t(2791),o=t(7131),s=t(971),i=t(98),c=t(184);const u=e=>{let{text:r,options:t,onChange:u,classN:d="",label:v="",error:p,defaultValue:m,disabled:h=!1}=e;const[g,x]=(0,a.useState)(!1),[f,j]=(0,a.useState)(r),b=(0,a.useRef)(null),y=(0,a.useRef)(null);(0,o.Z)([b],(()=>x(!1)),g);const N=()=>{if(null!==b&&void 0!==b&&b.current&&null!==y&&void 0!==y&&y.current){const e=b.current.getBoundingClientRect().top+60,r=b.current.getBoundingClientRect().left,t=b.current.offsetWidth-3;y.current.style.top="".concat(e,"px"),y.current.style.left="".concat(r,"px"),y.current.style.width="".concat(t,"px")}};return(0,a.useEffect)((()=>{N()}),[y,b]),(0,c.jsxs)(c.Fragment,{children:[v&&(0,c.jsx)(s.Z,{size:"18px",color:"#aa8a75",text:v}),p&&(0,c.jsx)("span",{className:"error-message",children:p}),(0,c.jsx)("div",{className:"DropdownUI ".concat(d," ").concat(h?"_disabled":""),ref:b,children:(0,c.jsxs)("div",{onClick:e=>h?e.preventDefault():(x(!g),void N()),className:"DropdownUI__button".concat(g?" _active":"").concat(p?" _error":""),children:[m||f,g?(0,c.jsx)(n.G,{className:"DropdownUI__icon",icon:l.l1h}):(0,c.jsx)(n.G,{className:"DropdownUI__icon",icon:l.eW2})]})}),!h&&(0,c.jsx)(i.Z,{children:(0,c.jsx)("div",{className:"DropdownUI__content".concat(g?" _active":""),ref:y,children:Boolean(null===t||void 0===t?void 0:t.length)&&(null===t||void 0===t?void 0:t.map(((e,r)=>{let{id:l,text:n,value:a}=e;return(0,c.jsx)("div",{onClick:e=>function(e,r){const l=e.target.textContent;l&&j(l),u(t[r]),x(!g)}(e,r),className:"DropdownUI__option",children:n||a},l)})))})})]})}},5168:(e,r,t)=>{t.d(r,{Z:()=>c});var l=t(2791),n=t(9806),a=t(1632),o=t(971),s=t(3083),i=t(184);const c=e=>{let{multiple:r=!1,width:t="400px",height:c="400px",onChange:u=s.R,defaultFiles:d,name:v,validationCallback:p=null,error:m="",classN:h}=e;const[g,x]=(0,l.useState)([]),f=(0,l.useRef)(null),j=(0,l.useRef)(null);(0,l.useEffect)((()=>{null!==d&&void 0!==d&&d.length&&x(d)}),[d]);const b=m?"red":"silver";return(0,i.jsxs)(i.Fragment,{children:[m&&(0,i.jsx)("span",{className:"error-message",children:m}),(0,i.jsxs)("div",{className:"DropzoneUI ".concat(h),style:{width:t,height:c,backgroundImage:"linear-gradient(90deg, ".concat(b," 50%, transparent 50%), linear-gradient(90deg, ").concat(b," 50%, transparent 50%), linear-gradient(0deg, ").concat(b," 50%, transparent 50%), linear-gradient(0deg, ").concat(b," 50%, transparent 50%)")},onDrop:e=>{var t;e.preventDefault();const l=Array.from(e.dataTransfer.files);if(l.forEach((e=>{e.preview=URL.createObjectURL(e)})),r)return x([...g,...l]),u([...g,...l]);null!==l&&void 0!==l&&l.length&&(x(l),u(l)),null===j||void 0===j||null===(t=j.current)||void 0===t||t.classList.remove("_drag")},onDragOver:e=>{var r;e.preventDefault(),null===j||void 0===j||null===(r=j.current)||void 0===r||r.classList.add("_drag")},onDragLeave:e=>{var r;e.preventDefault(),null===j||void 0===j||null===(r=j.current)||void 0===r||r.classList.remove("_drag")},ref:j,children:[(0,i.jsx)("div",{className:"DropzoneUI__body",onClick:()=>{f.current&&f.current.click()},children:(0,i.jsx)(o.Z,{text:"Drag & drop some file".concat(r?"s":""," here, or click to select file").concat(r?"s":""),size:"14px",align:"center"})}),(0,i.jsx)("input",{type:"file",ref:f,style:{display:"none"},onChange:async e=>{const t=Array.from(e.target.files);if(!p||await p(t)){if(t.forEach((e=>{e.preview=URL.createObjectURL(e)})),r)return x([...g,...t]),u([...g,...t]);null!==t&&void 0!==t&&t.length&&(x(t),u(t))}},multiple:r,name:v}),(0,i.jsx)("div",{className:"DropzoneUI__files",style:{maxHeight:+c.replace("px","")-30+"px"},children:g.map(((e,r)=>(0,i.jsxs)("div",{className:"DropzoneUI__file",children:[(0,i.jsx)("img",{src:e.preview,alt:"Preview ".concat(r),className:"DropzoneUI__preview"}),(0,i.jsx)("button",{className:"DropzoneUI__remove",onClick:()=>(e=>{const r=[...g];r.splice(e,1),x(r)})(r),type:"button",children:(0,i.jsx)(n.G,{icon:a.EOp})})]},r)))})]})]})}},971:(e,r,t)=>{t.d(r,{Z:()=>n});var l=t(184);const n=e=>{let{text:r,classN:t="",color:n="",size:a="",align:o="left"}=e;return(0,l.jsx)("h1",{className:"headingUI ".concat(t),style:{color:n||"#000",fontSize:a||"30px",textAlign:o},children:r})}},4437:(e,r,t)=>{t.d(r,{Z:()=>n});var l=t(184);const n=e=>{let{value:r,placeholder:t="",type:n="text",callback:a,label:o="",name:s,error:i,autoComplete:c=""}=e;return(0,l.jsxs)("div",{className:"InputUI",children:[o&&(0,l.jsx)("label",{className:"InputUI__label",htmlFor:"InputUI-".concat(s),children:o}),i&&(0,l.jsx)("span",{className:"error-message",children:i}),(0,l.jsx)("input",{className:"InputUI__input".concat(i?" _error":""),id:"InputUI-".concat(s),name:s,type:n,defaultValue:r,onChange:a,...c&&{autoComplete:c},...t&&{placeholder:t}})]})}},7959:(e,r,t)=>{t.d(r,{Z:()=>s});var l=t(98),n=t(9806),a=t(1632),o=t(184);const s=e=>{let{callback:r,children:t}=e;return(0,o.jsx)(l.Z,{children:(0,o.jsxs)("div",{className:"PopupUI",children:[(0,o.jsxs)("div",{className:"PopupUI__container",children:[(0,o.jsx)("div",{className:"PopupUI__body",children:t}),(0,o.jsx)("div",{className:"PopupUI__icon",onClick:()=>r(),children:(0,o.jsx)(n.G,{icon:a.g82,fontSize:"18px",color:"#fff"})})]}),(0,o.jsx)("div",{className:"PopupUI__BG",onClick:()=>r()})]})})}},7131:(e,r,t)=>{t.d(r,{Z:()=>n});var l=t(2791);const n=function(e,r){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,l.useEffect)((()=>{const t=t=>{let l=!0;(null===e||void 0===e?void 0:e.length)&&(null===e||void 0===e||e.forEach((e=>{e.current&&e.current.contains(t.target)&&(l=!1)}))),l&&r()};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}}),[t]),{}}},8779:(e,r,t)=>{t.d(r,{n:()=>l});const l=(e,r)=>{const t=Object.keys(e).reduce(((t,l)=>{const n=r[l]||[],a=e[l];return n.forEach((e=>{const r=e.rule,n=e.error;void 0===r.required||a||(t[l]=n),void 0===r.test||r.test.test(a)||(t[l]=n)})),t}),{});return!!Object.keys(t).length&&t}},8942:(e,r,t)=>{t.d(r,{E9:()=>s,Vu:()=>i,hq:()=>d,ib:()=>c,mX:()=>o,o$:()=>l,uP:()=>n,un:()=>a,vA:()=>u,xj:()=>v});const l={name:[{rule:{required:!0},error:{message:"Name is required"}}],hexcode:[{rule:{required:!0},error:{message:"HexCode is required"}},{rule:{test:/^#(?:[0-9a-fA-F]{3}){1,2}$/},error:{message:"Incorrect format for HexCode"}}]},n={name:[{rule:{required:!0},error:{message:"Name is required"}}],price:[{rule:{required:!0},error:{message:"Price is required"}}]},a={highresurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Highres Url"}}],previewurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Preview Url"}}]},o={name:[{rule:{required:!0},error:{message:"Name is required"}}]},s={fronturl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Front Url"}}],backurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Back Url"}}]},i={name:[{rule:{required:!0},error:{message:"Name is required"}}],price:[{rule:{required:!0},error:{message:"Price is required"}}],type:[{rule:{required:!0},error:{message:"Type is required"}}],orientation:[{rule:{required:!0},error:{message:"Orientation is required"}}]},c={silhouetteurl:[{rule:{test:/^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i},error:{message:"Incorrect format for Silhouette Url"}}]},u={name:[{rule:{required:!0},error:{message:"Name is required"}}]},d={name:[{rule:{required:!0},error:{message:"Name is required"}}]},v={email:[{rule:{required:!0},error:{message:"Email is required"}}],password:[{rule:{required:!0},error:{message:"Password is required"}}]}},3388:()=>{}}]);
//# sourceMappingURL=618.256915ff.chunk.js.map