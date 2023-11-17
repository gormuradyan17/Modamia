"use strict";(self.webpackChunkmodamia_app=self.webpackChunkmodamia_app||[]).push([[265],{265:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(791),s=a(98);async function o(e,t,a,n,s){const o=new Image;o.src=await async function(e,t,a,n){const s=new Image;s.src=e,await new Promise((e=>{s.onload=e}));const o=document.createElement("canvas").getContext("2d");if(!o)return"";if(o.canvas.width=a,o.canvas.height=n,o.clearRect(0,0,a,n),o.drawImage(s,0,0,a,n),t){const e=o.getImageData(0,0,a,n),s=e.data;let c=parseInt(t.substring(1),16);if(3===t.substring(1).length){let e="";for(let a=0;a<3;a++)e+=t.substring(1)[a]+t.substring(1)[a];c=parseInt(e,16)}const i=(16711680&c)>>16,r=(65280&c)>>8,l=255&c;let d;for(let t=0;t<s.length;t+=4)d=(s[t]/255+s[t+1]/255+s[t+2]/255+s[t+3]/255)/4,s[t]=i*d,s[t+1]=r*d,s[t+2]=l*d;o.putImageData(e,0,0)}return o.canvas.toDataURL("image/png")}(e,t,n,s),await new Promise((e=>{o.onload=e})),a.drawImage(o,0,0,n,s)}async function c(e,t,a,n,s,o){const c=new Image;if(c.src=t,await new Promise((e=>{c.onload=e})),!a)return a.drawImage(c,0,0,n,s);if(!e)return a.drawImage(c,0,0,n,s);const i=document.createElement("canvas").getContext("2d");if(!i)return a.drawImage(c,0,0,n,s);i.canvas.width=n,i.canvas.height=s,i.clearRect(0,0,n,s),i.drawImage(c,0,0,n,s);const r=i.getImageData(0,0,n,s).data;let l=new Image;l.src=e,await new Promise((e=>{l.onload=e})),l.crossOrigin="http://localhost:8001";const d=document.createElement("canvas").getContext("2d");if(!d)return a.drawImage(c,0,0,n,s);d.canvas.width=n,d.canvas.height=s,d.globalAlpha=1,d.globalCompositeOperation="multiply",i.clearRect(0,0,n,s),d.drawImage(c,0,0,n,s),d.drawImage(l,0,0,n,s);const g=d.getImageData(0,0,n,s),m=g.data;for(let h=0;h<r.length;h+=4)m[h+3]=r[h+3];d.putImageData(g,0,0);const u=new Image;return u.src=d.canvas.toDataURL("image/png"),await new Promise((e=>u.onload=e)),a.drawImage(u,0,0,n,s)}const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"color";return[{src:s.Di,color:e,printImageURL:null===t||void 0===t?void 0:t.highresurl,category:a},{src:s.QM,color:e,printImageURL:null===t||void 0===t?void 0:t.highresurl,category:a}]};var r=a(971),l=a(877),d=a(434),g=a(184);const m=e=>{let{tabs:t}=e;const a=(0,d.I0)(),[s,o]=(0,n.useState)("");return(0,n.useEffect)((()=>{t&&o(t[0].heading)}),[t]),(0,g.jsx)("div",{className:"TabUI",children:(0,g.jsxs)("div",{className:"TabUI-body",children:[(0,g.jsx)("div",{className:"TabUI-heads",children:t&&t.map(((e,t)=>(0,g.jsx)("div",{className:"TabUI-head ".concat(e.heading===s?"_active":""),onClick:()=>{o(e.heading);(e=>{a((0,l.Qr)(e))})("Color"===e.id?"color":"Print"===e.id?"print":"")},children:(0,g.jsx)(r.Z,{color:"#000",text:e.heading,size:"18px",align:"left"})},e.id||t)))}),(0,g.jsx)("div",{className:"TabUI-contents",children:t&&t.map(((e,t)=>(0,g.jsx)("div",{className:"TabUI-content ".concat(e.heading===s?"_active":""),children:e.content||(0,g.jsx)(r.Z,{color:"black",size:"16px",text:"Nothing to show"})},e.id||t)))})]})})},u=(0,n.lazy)((()=>a.e(293).then(a.bind(a,293)))),h=(0,n.lazy)((()=>a.e(416).then(a.bind(a,416)))),v=(0,n.lazy)((()=>a.e(301).then(a.bind(a,301)))),f=()=>{const[e,t]=(0,n.useState)([{id:"Silhouette",heading:"Silhouette",content:(0,g.jsx)(u,{})},{id:"Color",heading:"Color",content:(0,g.jsx)(h,{})},{id:"Print",heading:"Print",content:(0,g.jsx)(v,{})}]);return(0,g.jsxs)("div",{className:"customization-features",children:[(0,g.jsx)(r.Z,{text:"Customize",color:"#a57867",size:"20px"}),(0,g.jsx)(m,{tabs:e})]})},x=e=>{let{children:t}=e;return(0,g.jsx)("div",{className:"container",children:t})},w=e=>{let{infoData:t}=e;return(0,g.jsxs)("div",{className:"customization-info",children:[(0,g.jsx)(r.Z,{classN:"customization-info-name",text:t.name,size:"22px",color:"#a57867"}),(0,g.jsx)(r.Z,{text:"AMD ".concat(t.price),size:"18px",color:"#c37489"})]})};var I=a(201);const p=()=>{const[e,t]=(0,n.useState)([]),a=(0,d.v9)(l.wm),r=(0,d.v9)(l.DP),m=(0,d.v9)(l.N3),u=(0,d.v9)(l.qD),h=(0,d.I0)(),[v,p]=(0,n.useState)(i()),b=(0,n.useRef)(null),[j,C]=(0,n.useState)(.1),N=(e,t)=>{var n,i;if(!b.current)return;const r=b.current;r.width=s.bf,r.height=s.Cb;const l=null===(n=b.current)||void 0===n?void 0:n.getContext("2d"),d=new Image;d.src="".concat(s.jV).concat(null===a||void 0===a||null===(i=a[1])||void 0===i?void 0:i.fronturl),d.onload=async()=>{null===l||void 0===l||l.drawImage(d,0,0,s.bf,s.Cb);for(let e=0;e<t.length;e++)"color"===t[e].category?await o(t[e].src,t[e].color,l,s.bf,s.Cb):"print"===t[e].category?await c(t[e].printImageURL,t[e].src,l,s.bf,s.Cb):await o(t[e].src,"",l,s.bf,s.Cb)}};(0,n.useEffect)((()=>{(e=>{(0,I.Km)().then((t=>{e((0,l.go)(t))})).catch((e=>console.log(e)))})(h)}),[]),(0,n.useEffect)((()=>{null!==a&&void 0!==a&&a.length&&(N(0,v),console.log("+++++++++++"),console.log(v))}),[a,v]),(0,n.useEffect)((()=>{N(0,i(r,m,u)),p(i(r,m,u)),console.log("----------")}),[r,m,u]);return(0,g.jsx)(x,{children:(0,g.jsxs)("div",{className:"customization",children:[(0,g.jsx)("canvas",{className:"canvas",id:"canvas",ref:b}),(0,g.jsxs)("div",{className:"customization-body",children:[(0,g.jsx)(w,{infoData:{name:"the juliette dress",price:"59,775"}}),(0,g.jsx)(f,{})]})]})})}},971:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(184);const s=e=>{let{text:t,classN:a="",color:s="",size:o="",align:c="left"}=e;return(0,n.jsx)("h1",{className:"headingUI ".concat(a),style:{color:s||"#000",fontSize:o||"30px",textAlign:c},children:t})}}}]);
//# sourceMappingURL=265.2eee876d.chunk.js.map