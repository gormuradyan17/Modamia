"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[214],{3884:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var l=s(370),i=s(1726),o=s(5820),a=s(7959),c=s(5931),n=s(9434),u=s(2791),r=s(5227),h=s(6317),d=s(184);const x=()=>{const[e,t]=(0,u.useState)(!1),s=(0,n.I0)(),x=()=>{t(!1)};return(0,u.useEffect)((()=>{(0,r.T)(s)}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(l.Z,{text:"Sleeve Silhouettes"}),(0,d.jsx)(i.o,{classN:"add-button",onClick:()=>t(!0),type:"button",children:"New Sleeve Silhouette"}),(0,d.jsxs)(o.Z,{children:[(0,d.jsx)(h.Z,{}),e&&(0,d.jsx)(a.Z,{callback:x,children:(0,d.jsx)(c.Z,{selectedType:"Sleeve",closePopup:x})})]})]})}},6317:(e,t,s)=>{s.d(t,{Z:()=>v});var l=s(2791),i=s(9434),o=s(5895),a=s(7098),c=s(7093),n=s(1726),u=s(971),r=s(7959),h=s(6901),d=s(8779),x=s(8942),j=s(2201),p=s(5227),m=s(184);const v=()=>{const e=(0,i.v9)(o.Q3),[t,s]=(0,l.useState)({}),[v,S]=(0,l.useState)({}),[b,f]=(0,l.useState)(!1),[N,k]=(0,l.useState)({}),y=(0,i.I0)(),Z=(0,l.useMemo)((()=>e.filter((e=>"Sleeve"===e.type))),[e]),w=()=>{f(!1),s({}),S({}),k({})};return(0,m.jsxs)("div",{className:"silhouettes-items",children:[(0,m.jsx)(u.Z,{text:"Sleeve Silhouettes",size:"20px"}),(0,m.jsx)("div",{className:"silhouettes-items-body customXScrollbar",children:null!==Z&&void 0!==Z&&Z.length?Z.map((e=>(0,m.jsxs)("div",{className:"silhouettes-list-silhouette",children:[(0,m.jsx)(u.Z,{classN:"silhouettes-list-text _ellipsis",text:e.name,color:c.ue,size:"16px"}),(0,m.jsx)("div",{className:"silhouettes-list-image",children:(0,m.jsx)("img",{src:"".concat(a.Ex).concat(e.silhouetteurl),className:"silhouettes-list-img",alt:e.name})}),(0,m.jsx)(n.o,{classN:"silhouettes-list-button",onClick:()=>(e=>{e&&(s(e),S(e),f(!0))})(e),children:"Edit"})]},e._id))):(0,m.jsx)(u.Z,{text:"Nothing found",color:c.ue,size:"16px"})}),b&&(0,m.jsx)(r.Z,{callback:w,children:(0,m.jsx)(h.Z,{callback:async()=>{var e;const s=(0,d.n)(t,x.Vu);if(s)return k(s);Object.keys(N).length&&k({});const l=JSON.parse(JSON.stringify(t));if(null!==t&&void 0!==t&&null!==(e=t.silhouetteurl)&&void 0!==e&&e.includes("blob")){const e=await async function(e){const t=await fetch(e),s=await t.blob();return new File([s],"image.jpg",{type:s.type})}(t.silhouetteurl);l.silhouetteurl=e}const i=new FormData;Object.keys(l).forEach((e=>{i.append(e,l[e])})),await(0,j.RV)(i),await(0,p.T)(y),w()},closePopup:w,silhouette:t,errors:N,setSilhouette:s,silhouetteInfo:v})})]})}}}]);
//# sourceMappingURL=214.c57e48aa.chunk.js.map