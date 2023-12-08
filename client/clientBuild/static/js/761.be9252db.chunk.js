"use strict";(self.webpackChunkmodamia_app=self.webpackChunkmodamia_app||[]).push([[761],{5590:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Z});var o=s(2791),i=s(555),n=s(971),a=s(9153),r=s(9434),l=s(3944),c=s(1632),d=s(9806),h=s(7131),u=s(184);const v=e=>{let{text:t,options:s,onChange:i,classN:a="",label:r="",error:l,defaultValue:v,disabled:g=!1}=e;const[p,m]=(0,o.useState)(!1),[x,f]=(0,o.useState)(t),j=(0,o.useRef)(null),b=(0,o.useRef)(null);(0,h.Z)(j,(()=>m(!1)),p);return(0,u.jsxs)(u.Fragment,{children:[r&&(0,u.jsx)(n.Z,{size:"18px",color:"#aa8a75",text:r}),l&&(0,u.jsx)("span",{className:"error-message",children:l}),(0,u.jsxs)("div",{className:"DropdownUI ".concat(a," ").concat(g?"_disabled":""),ref:j,children:[(0,u.jsxs)("div",{onClick:e=>g?e.preventDefault():void m(!p),className:"DropdownUI__button".concat(p?" _active":"").concat(l?" _error":""),children:[v||x,p?(0,u.jsx)(d.G,{className:"DropdownUI__icon",icon:c.l1h}):(0,u.jsx)(d.G,{className:"DropdownUI__icon",icon:c.eW2})]}),(0,u.jsx)("div",{className:"DropdownUI__content customYScrollbar".concat(p?" _active":""),ref:b,children:Boolean(null===s||void 0===s?void 0:s.length)&&(null===s||void 0===s?void 0:s.map(((e,t)=>{let{id:o,text:n,value:a}=e;return(0,u.jsx)("div",{onClick:e=>function(e,t){const o=e.target.textContent;o&&f(o),i(s[t]),m(!p)}(e,t),className:"DropdownUI__option",children:n||a},o)})))})]})]})};s(4111);var g=s(6037),p=s(6100);const m=()=>{const e=(0,r.v9)(l.Pn),t=(0,r.I0)(),s=(0,r.v9)(l.lU),i=(0,r.v9)(l.Vh),n=(0,r.v9)(p.vf),a=(0,o.useMemo)((()=>{const{palettes:{colors:e=[]}={}}=n||{};return(0,g.ky)(i,e)}),[n]),c=s=>{const o=(0,g.ln)(e,s,"colors");null!==o&&void 0!==o&&o._id&&t((0,l.ls)({name:null===o||void 0===o?void 0:o.name,colors:null===o||void 0===o?void 0:o.colors,_id:null===o||void 0===o?void 0:o._id}))};return(0,o.useEffect)((()=>{var e;a.length&&c((null===a||void 0===a||null===(e=a[0])||void 0===e?void 0:e.text)||"")}),[a]),(0,u.jsx)(v,{options:a,onChange:e=>(e=>{const{text:t=""}=e;c(t)})(e),defaultValue:null===s||void 0===s?void 0:s.name,classN:"color-dropdown-styles"})};s(3049);var x=s(9158);const f=()=>{const e=(0,r.v9)(x.MK),t=(0,r.I0)(),s=(0,r.v9)(x.lU),i=(0,r.v9)(x.NB),n=(0,r.v9)(p.vf),a=(0,o.useMemo)((()=>{const{palettes:{prints:e=[]}={}}=n||{};return(0,g.ky)(i,e)}),[n]),l=s=>{if("All"===s){const o=null===e||void 0===e?void 0:e.reduce((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;const{grouped:s=[],_id:{variant_id:o=""}={}}=t||{},{palettes:{prints:i=[]}={}}=n;return null===s||void 0===s||s.map((t=>{(null===i||void 0===i?void 0:i.find((e=>e===o)))&&e.push(t)})),e}),[]);t((0,x.ls)({name:s,prints:o,_id:"All"}))}else{const o=(0,g.ln)(e,s,"prints");o&&t((0,x.ls)({name:s,prints:null===o||void 0===o?void 0:o.prints,_id:null===o||void 0===o?void 0:o._id}))}};return(0,o.useEffect)((()=>{var e;a.length&&l((null===a||void 0===a||null===(e=a[0])||void 0===e?void 0:e.text)||"")}),[a]),(0,u.jsx)(v,{options:[{id:"All",text:"All",value:"All"},...a],onChange:e=>(e=>{const{text:t=""}=e;l(t)})(e),defaultValue:null===s||void 0===s?void 0:s.name,classN:"print-dropdown-styles"})},j=e=>{let{tabs:t}=e;const s=(0,r.I0)(),[i,l]=(0,o.useState)("");(0,o.useEffect)((()=>{t&&l(t[0].heading)}),[t]);const c=e=>e.heading===i&&"Color"===i?(0,u.jsx)(m,{}):e.heading===i&&"Print"===i?(0,u.jsx)(f,{}):(0,u.jsx)(n.Z,{color:"#000",text:e.heading,size:"18px",align:"left"});return(0,u.jsx)("div",{className:"CustomizationTabs",children:(0,u.jsxs)("div",{className:"CustomizationTabs-body",children:[(0,u.jsx)("div",{className:"CustomizationTabs-heads",children:t&&t.map(((e,t)=>(0,u.jsx)("div",{className:"CustomizationTabs-head ".concat(e.heading===i?"_active":""),onClick:()=>{l(e.heading);const t="Color"===e.heading?"color":"Print"===e.heading?"print":"Silhouette"===e.heading?"silhouette":"";"Color"===e.heading||"Print"===e.heading?s((0,a.GB)("all")):s((0,a.GB)("fronts")),(e=>{s((0,a.Qr)(e))})(t)},children:c(e)},e.id||t)))}),(0,u.jsx)("div",{className:"CustomizationTabs-contents",children:t&&t.map(((e,t)=>(0,u.jsx)("div",{className:"CustomizationTabs-content ".concat(e.heading===i?"_active":""),children:e.content||(0,u.jsx)(n.Z,{color:"black",size:"16px",text:"Nothing to show"})},e.id||t)))})]})})},b=(0,o.lazy)((()=>s.e(166).then(s.bind(s,9166)))),w=(0,o.lazy)((()=>s.e(275).then(s.bind(s,8275)))),y=(0,o.lazy)((()=>s.e(73).then(s.bind(s,6073)))),N=e=>{let{range:t,setRange:s}=e;const[i]=(0,o.useState)([{id:1,heading:"Silhouette",content:(0,u.jsx)(b,{})},{id:2,heading:"Color",content:(0,u.jsx)(w,{})},{id:3,heading:"Print",content:(0,u.jsx)(y,{})}]);return(0,u.jsxs)("div",{className:"customization-features",children:[(0,u.jsxs)("div",{className:"customization-features-tops",children:[(0,u.jsx)(n.Z,{text:"Customize",color:"#a57867",size:"20px"}),(0,u.jsx)("input",{className:"customization-features-range",type:"range",min:"0.01",max:"1",step:"0.01",value:t,onChange:e=>{s(Number(e.target.value))}})]}),(0,u.jsx)(j,{tabs:i})]})};var S=s(4504);const k=e=>{let{infoData:t}=e;return(0,u.jsxs)("div",{className:"customization-info",children:[(0,u.jsx)(n.Z,{classN:"customization-info-name",text:t.name,size:"22px",color:"#a57867"}),(0,u.jsx)(n.Z,{text:"AMD ".concat(t.price),size:"18px",color:"#c37489"})]})},C=()=>(0,u.jsx)("div",{className:"customization-body-loader",children:(0,u.jsx)("svg",{fill:"none",className:"customization-body-svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)("circle",{className:"circle",cx:"50",cy:"50",r:"45"})})}),_=()=>{const[e,t]=(0,o.useState)("fronts"),s=(0,r.I0)();return(0,o.useEffect)((()=>{s((0,a.cu)(e))}),[e]),(0,u.jsxs)("div",{className:"positionBtns",children:[(0,u.jsx)("span",{onClick:()=>t("fronts"),children:"Front"}),(0,u.jsx)("span",{onClick:()=>t("backs"),children:"Back"})]})},z=()=>{const[e,t]=(0,o.useState)(!1);return(0,u.jsxs)("div",{className:"customSizes_container",children:[(0,u.jsx)("ul",{className:"customSizes_data",children:[{id:1,placeholder:"Bust"},{id:2,placeholder:"Wast"},{id:3,placeholder:"Hip"},{id:4,placeholder:"Height"}].map((e=>(0,u.jsx)("li",{children:(0,u.jsx)("input",{type:"number",placeholder:e.placeholder})},e.id)))}),(0,u.jsx)("div",{children:(0,u.jsxs)("label",{className:"label_for_switch",children:[(0,u.jsx)("span",{className:"switch_opt",children:"IN"}),(0,u.jsx)("input",{checked:e,type:"checkbox",onChange:e=>{t(e.target.checked)},className:"switch_inp"}),(0,u.jsx)("div",{className:"switch_btn"}),(0,u.jsx)("span",{className:"switch_opt",children:"CM"})]})})]})};var U=s(5838),I=s(1723),R=s(2201);const A=()=>{const e=(0,r.v9)(I.RC),[t,s]=(0,o.useState)(""),i=(0,r.I0)(),n=(0,g.VV)(e);(0,o.useEffect)((()=>{(e=>{(0,R.TQ)().then((t=>{e((0,I.lA)(t))})).catch((e=>console.log(e)))})(i)}),[]),(0,o.useEffect)((()=>{var t;e.length&&s(null===(t=e[0])||void 0===t?void 0:t.size)}),[e]);return(0,u.jsx)("div",{children:Boolean(e.length)&&(0,u.jsx)(v,{options:n,onChange:e=>{i((0,U.$f)(e.value)),s(e.size)},defaultValue:t})})},T=()=>{const[e,t]=(0,o.useState)("Fit Issue");return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(v,{options:[{id:1,text:"Tight in Bust"},{id:2,text:"Loose in Bust"},{id:3,text:"Tight in Waist"},{id:4,text:"Loose in Waist"}],onChange:e=>{t(e.text)},defaultValue:e})})},P=()=>{const[e,t]=(0,o.useState)("Fit Preference");return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v,{options:[{id:1,text:"Tight"},{id:2,text:"Fitted"},{id:3,text:"Semi-Fitted"},{id:4,text:"Loose"}],onChange:e=>{t(e.text)},defaultValue:e}),(0,u.jsx)("textarea",{className:"textarea_fit",placeholder:"Anything we should know to give you a fabulous fit?",spellCheck:"false"})]})};var E=s(1087);const H=()=>(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"picture_guide",children:(0,u.jsx)(E.rU,{to:"/",children:"Picture Upload Guide"})}),(0,u.jsx)("div",{className:"upload_img",children:(0,u.jsxs)("label",{children:["A picture tells a thousand words. Upload a pic",(0,u.jsx)("input",{className:"custom_photo",type:"file"})]})})]}),L=()=>(0,u.jsxs)("div",{children:[(0,u.jsx)(T,{}),(0,u.jsx)(P,{}),(0,u.jsx)(H,{})]}),D=()=>{const[e,t]=(0,o.useState)(!1);return(0,u.jsxs)("div",{children:[(0,u.jsx)(n.Z,{text:"Create Custom size:",classN:"option_title",handleEvent:()=>t(!e)}),e&&(0,u.jsx)(z,{}),e&&(0,u.jsx)(L,{}),!e&&(0,u.jsx)(A,{})]})},B=()=>{const e=(0,r.v9)(U.wv);return(0,u.jsx)("div",{children:(0,u.jsx)("button",{className:"add_to_cart",onClick:()=>{const t=localStorage.hasOwnProperty("basket")?JSON.parse(localStorage.getItem("basket")||"[]"):[];t.push(e),localStorage.setItem("basket",JSON.stringify(t))},children:"Add to Cart"})})};var O=s(7689),q=s(5851),V=s(2320);const F=async(e,t)=>{const s={};try{const e=await(0,R.qs)({garment_id:t});for(let t in e.silhouettes){const o=Object.keys(e.silhouettes[t]);s[t]=o.map((s=>(0,g.q9)(e.silhouettes,t,s)))}}catch(o){console.error(o)}e((0,V.KY)(s))},Z=()=>{const e=(0,r.v9)(a.DP),t=(0,r.v9)(a.N3),s=(0,r.v9)(a.qD),n=(0,r.v9)(a.Xy),l=(0,r.v9)(a.Ep),c=(0,r.v9)(a.zf),d=(0,r.v9)(a.hE),h=(0,r.v9)(U.em),v=(0,r.v9)(a.iF),m=((0,r.v9)(U.wv),(0,r.v9)(p.vf)),x=(0,r.v9)(U.mt),f=(0,r.v9)(a.ap);let j=0;const{silhouettes:b={}}=m,[w,y]=(0,o.useState)({fronts:[{position:"bottom",src:"",color:"",printImageURL:"",activeCategory:s,price:200,width:"",height:"",order:""},{position:"top",src:"",color:"",printImageURL:"",activeCategory:s,price:300,width:"",height:"",order:""}],backs:[{position:"bottom",src:"",color:"",printImageURL:"",activeCategory:s,price:0,width:"",height:"",order:""},{position:"top",src:"",color:"",printImageURL:"",activeCategory:s,price:0,width:"",height:"",order:""}],sleeves:[{position:"top",src:"",color:"",printImageURL:"",activeCategory:s,price:0,width:"",height:"",order:""},{position:"bottom",src:"",color:"",printImageURL:"",activeCategory:s,price:0,width:"",height:"",order:""}]}),z=(0,O.UO)(),{id:I=""}=z,R=(0,r.I0)(),A=(0,o.useRef)(null),[T,P]=(0,o.useState)(.1);return(0,o.useEffect)((()=>{I&&(0,q.Cg)(R,I),R((0,a.F6)("")),R((0,a.Qr)("silhouette")),I&&F(R,I)}),[I]),(0,o.useEffect)((()=>{var o;const n={};for(let e in w){const t=w[e][0].position,s=w[e][1].position;n[e]=[{...w[e][0],...(0,g.q9)(b,e,t)},{...w[e][1],...(0,g.q9)(b,e,s)}]}if(null!==m&&void 0!==m&&null!==(o=m.mannequin)&&void 0!==o&&o._id){const{mannequin:o={}}=m;(async()=>{w[d].forEach(((o,i)=>{switch(w[d][1].activeCategory=s,w[d][0].activeCategory=s,c){case"tops":w[d][1].src=l,w[d][1].price=v,w[d][1].width=f.width,w[d][1].height=f.height;break;case"bottoms":w.fronts[0].src=l,w.backs[0].src=l,w.fronts[0].price=v,w.fronts[0].width=f.width,w.fronts[0].height=f.height;break;case"all":e&&(w.fronts[i].color=e,w.backs[i].color=e,w.sleeves[0].color=e),t&&(w.fronts[i].activeCategory=s,w.backs[i].activeCategory=s,w.sleeves[i].activeCategory=s,w.fronts[i].printImageURL=null===t||void 0===t?void 0:t.highresurl,w.backs[i].printImageURL=null===t||void 0===t?void 0:t.highresurl,w.sleeves[i].printImageURL=null===t||void 0===t?void 0:t.highresurl);break;case"sleeves":w.sleeves[0].src=l,w.sleeves[0].price=v,w.sleeves[0].width=f.width,w.sleeves[0].height=f.height;break;case"top":w[d][1].color=e,"sleeves"===d&&(w.fronts[1].color=e,w.sleeves[0].color=e,w.fronts[1].printImageURL=null===t||void 0===t?void 0:t.highresurl),t&&(w.sleeves[0].printImageURL=null===t||void 0===t?void 0:t.highresurl,w[d][1].printImageURL=null===t||void 0===t?void 0:t.highresurl);break;case"bottom":t&&(w[d][0].printImageURL=null===t||void 0===t?void 0:t.highresurl),"sleeves"===d?w.fronts[0].color=e:w[d][0].color=e}})),y({...w}),await(0,i.W$)(T,w,d,A,o,n,!1)})()}}),[m,I,e,t,s,l,c,d,b,T]),(0,o.useEffect)((()=>{const{mannequin:e={}}=m;for(const t in w)for(const e of w[t])j+=e.price,R((0,U.Do)(j));Object.keys(e).length&&R((0,U.lw)(e)),Object.keys(w).length&&(R((0,U.Pl)([{...w.fronts[1]},{...w.fronts[0]}])),R((0,U.XS)([{...w.backs[1]},{...w.backs[0]}])),R((0,U.BR)([{...w.sleeves[0]}])))}),[w]),(0,u.jsx)(S.Z,{children:(0,u.jsxs)("div",{className:"customization",children:[(0,u.jsx)(_,{}),(0,u.jsxs)("div",{className:"customization-body",children:[n&&(0,u.jsx)(C,{}),(0,u.jsx)("canvas",{className:"canvas",id:"canvas",ref:A})]}),(0,u.jsxs)("div",{className:"customization-body",children:[(0,u.jsx)(k,{infoData:{name:h,price:x}}),(0,u.jsx)(N,{range:T,setRange:P}),(0,u.jsx)(D,{}),(0,u.jsx)(B,{})]})]})})}},5851:(e,t,s)=>{s.d(t,{Cg:()=>a,l3:()=>r,x6:()=>n});var o=s(6100),i=s(2201);const n=e=>{(0,i.dm)().then((t=>{e((0,o.$V)(t))})).catch((e=>console.log(e)))},a=(e,t)=>{(0,i.qs)({garment_id:t}).then((t=>{e((0,o.DA)(t))})).catch((e=>console.log(e)))},r=(e,t)=>{(0,i.Q$)({criteria:t}).then((t=>{e((0,o.$V)(t))})).catch((e=>console.log(e)))}},2201:(e,t,s)=>{s.d(t,{i9:()=>h,So:()=>d,qs:()=>x,dm:()=>m,qr:()=>v,BT:()=>u,pW:()=>g,TQ:()=>p,Q$:()=>f});var o=s(7098);const i=[{name:"token",default:"",isJson:!1}],n=[];var a=function(e){return e.local="local",e.session="session",e}(a||{});const{localStorageSync:r,sessionStorageSync:l}=new class{constructor(){this.localStorageSync={},this.sessionStorageSync={},this.defineSyncProperties(i,a.local),this.defineSyncProperties(n,a.session)}defineSyncProperties(e,t){const s=this.getStorage(t);for(let o of e)Object.defineProperty(t===a.local?this.localStorageSync:this.sessionStorageSync,o.name,{get(){try{if("language"===o.name)return o.default;const e=s.getItem(o.name)||o.default;if(!o.isJson)return o.modifier?o.modifier(e):e;const t=e?JSON.parse(e):e;return o.modifier?o.modifier(t):t}catch(e){return o.default}},set(e){s.setItem(o.name,o.isJson?JSON.stringify(e):e)}})}getStorage(e){switch(e){case a.local:return localStorage;case a.session:return sessionStorage}}};class c{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o._n||"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.apiPrefix=e,this.baseUrl=t,this.headers=s,this.baseApi="",this.storeToken=l.privateToken,this.assocaiteToken=r.token,this.additionalHeaders=null,this.clearHeader=!0,this.baseApi=this.baseUrl+this.apiPrefix||""}getAuthHeader(){return this.headers||this.buildHeaders(this.storeToken,this.assocaiteToken)}setAdditionalHeaders(e){this.additionalHeaders=e}removeDefaultHeader(){this.clearHeader=!1}buildHeaders(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{"Content-Type":"application/json",...e&&{Authorization:"Bearer ".concat(e)},...t&&{"Associate-Authorization":"".concat(t)},...this.additionalHeaders}}getUrl(e){return"".concat(this.baseApi).concat(e)}handleResponse(e){if(!e.ok)throw console.error("Error response:",e),new Error("Network response was not ok");return e.json()}get(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getAuthHeader();return fetch(this.getUrl(e),{headers:t}).then(this.handleResponse)}post(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.getAuthHeader();return fetch(this.getUrl(e),{method:"POST",headers:s,redirect:"follow",cache:"no-cache",body:JSON.stringify(t)}).then(this.handleResponse).catch((e=>console.log(e)))}put(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.getAuthHeader();return fetch(this.getUrl(e),{method:"PUT",headers:s,redirect:"follow",cache:"no-cache",body:JSON.stringify(t)}).then(this.handleResponse)}delete(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getAuthHeader();return fetch(this.getUrl(e),{headers:t}).then(this.handleResponse)}}const d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new c("/api").get(o.YO,e)},h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new c("/api").get(o.Uc,e)},u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new c("/api").get(o.dE,e)},v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new c("/api").get(o.Tc,e)},g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new c("/api").get(o.R2,e)},p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new c("/api").get(o.Ic,e)},m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new c("/api").get(o.gY,e)},x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new c("/api").post(o.pS,e)},f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new c("/api").post(o.IU,e)}},971:(e,t,s)=>{s.d(t,{Z:()=>i});var o=s(184);const i=e=>{let{text:t,classN:s="",color:i="",size:n="",align:a="left",handleEvent:r}=e;return(0,o.jsx)("h2",{className:"headingUI ".concat(s),onClick:r,style:{color:i||"#000",fontSize:n||"30px",textAlign:a},children:t})}},4111:()=>{},3049:()=>{}}]);
//# sourceMappingURL=761.be9252db.chunk.js.map