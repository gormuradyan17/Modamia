"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[46],{7040:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var l=s(2863),i=s(370),o=s(1726),a=s(5820),c=s(7959),n=s(5931),u=s(9434),r=s(2791),h=s(5227),d=s(184);const p=()=>{const[e,t]=(0,r.useState)(!1),s=(0,u.I0)(),p=()=>{t(!1)};return(0,r.useEffect)((()=>{(0,h.T)(s)}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(i.Z,{text:"Top Silhouettes"}),(0,d.jsx)(o.o,{classN:"add-button",onClick:()=>t(!0),type:"button",children:"New Top Silhouette"}),(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(l.Z,{}),e&&(0,d.jsx)(c.Z,{callback:p,children:(0,d.jsx)(n.Z,{selectedType:"Top",closePopup:p})})]})]})}},2863:(e,t,s)=>{s.d(t,{Z:()=>b});var l=s(2791),i=s(9434),o=s(1717),a=s(7098),c=s(7093),n=s(1726),u=s(971),r=s(7959),h=s(6901),d=s(8779),p=s(8942),x=s(8587),j=s(5227),m=s(184);const b=()=>{const e=(0,i.v9)(o.Q3),[t,s]=(0,l.useState)({}),[b,f]=(0,l.useState)({}),[v,N]=(0,l.useState)(!1),[S,k]=(0,l.useState)({}),y=(0,i.I0)(),Z=(0,l.useMemo)((()=>e.filter((e=>"Top"===e.type))),[e]),w=()=>{N(!1),s({}),f({}),k({})};return(0,m.jsxs)("div",{className:"silhouettes-items",children:[(0,m.jsx)(u.Z,{text:"Top Silhouettes",size:"20px"}),(0,m.jsx)("div",{className:"silhouettes-items-body customXScrollbar",children:null!==Z&&void 0!==Z&&Z.length?Z.map((e=>(0,m.jsxs)("div",{className:"silhouettes-list-silhouette",children:[(0,m.jsx)(u.Z,{classN:"silhouettes-list-text _ellipsis",text:e.name,color:c.ue,size:"16px"}),(0,m.jsx)("div",{className:"silhouettes-list-image",children:(0,m.jsx)("img",{src:"".concat(a.vj).concat(e.silhouetteurl),className:"silhouettes-list-img",alt:e.name})}),(0,m.jsx)(n.o,{classN:"silhouettes-list-button",onClick:()=>(e=>{e&&(s(e),f(e),N(!0))})(e),children:"Edit"})]},e._id))):(0,m.jsx)(u.Z,{text:"Nothing found",color:c.ue,size:"16px"})}),v&&(0,m.jsx)(r.Z,{callback:w,children:(0,m.jsx)(h.Z,{callback:async()=>{var e;const s=(0,d.n)(t,p.Vu);if(s)return k(s);Object.keys(S).length&&k({});const l=JSON.parse(JSON.stringify(t));if(null!==t&&void 0!==t&&null!==(e=t.silhouetteurl)&&void 0!==e&&e.includes("blob")){const e=await async function(e){const t=await fetch(e),s=await t.blob();return new File([s],"image.jpg",{type:s.type})}(t.silhouetteurl);l.silhouetteurl=e}const i=new FormData;Object.keys(l).forEach((e=>{i.append(e,l[e])})),await(0,x.RV)(i),await(0,j.T)(y),w()},closePopup:w,silhouette:t,errors:S,setSilhouette:s,silhouetteInfo:b})})]})}}}]);
//# sourceMappingURL=46.a908a508.chunk.js.map