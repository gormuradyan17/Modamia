"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[941],{3884:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var l=s(370),i=s(1726),a=s(5820),o=s(7959),n=s(5931),c=s(9434),u=s(2791),r=s(5227),h=s(6317),d=s(1717),x=s(558),v=s(184);const j=()=>{const[e,t]=(0,u.useState)(!1),s=(0,c.I0)(),j=()=>{t(!1),s((0,d.G$)())};return(0,u.useEffect)((()=>{(0,r.T)(s),(0,x.R)(s)}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)(l.Z,{text:"Sleeve Silhouettes"}),(0,v.jsx)(i.o,{classN:"add-button",onClick:()=>t(!0),type:"button",children:"New Sleeve Silhouette"}),(0,v.jsxs)(a.Z,{children:[(0,v.jsx)(h.Z,{}),e&&(0,v.jsx)(o.Z,{callback:j,children:(0,v.jsx)(n.Z,{selectedType:"Sleeve",closePopup:j})})]})]})}},6317:(e,t,s)=>{s.d(t,{Z:()=>b});var l=s(2791),i=s(9434),a=s(1717),o=s(7098),n=s(7093),c=s(1726),u=s(971),r=s(7959),h=s(6901),d=s(8779),x=s(8942),v=s(8587),j=s(9806),p=s(1632),m=s(8180),S=s(184);const b=()=>{const e=(0,i.v9)(a.Q3),[t,s]=(0,l.useState)({}),[b,f]=(0,l.useState)({}),[k,y]=(0,l.useState)(!1),[N,g]=(0,l.useState)({}),Z=(0,i.I0)(),[w,C]=(0,l.useState)(!1),[D,O]=(0,l.useState)({}),[E,F]=(0,l.useState)(0),[$,z]=(0,l.useState)([]);(0,l.useMemo)((()=>{const t=e.filter((e=>"Sleeve"===e.type));z(t)}),[e]);const I=()=>{y(!1),s({}),f({}),g({})},R=()=>{C(!1),O({})},_=e=>{e.preventDefault()};return(0,S.jsxs)("div",{className:"silhouettes-items",children:[(0,S.jsx)(u.Z,{text:"Sleeve Silhouettes",size:"20px"}),(0,S.jsx)("div",{className:"silhouettes-items-body customXScrollbar",children:null!==$&&void 0!==$&&$.length?$.map(((e,t)=>(0,S.jsxs)("div",{className:"silhouettes-list-silhouette",draggable:!0,onDragStart:e=>((e,t)=>{F(t)})(0,t),onDragOver:_,onDrop:e=>(async(e,t)=>{e.preventDefault();const s=$[E],l=$[t];if(s&&l&&t!==E){const e=structuredClone($);e[t]=s,e[E]=l,z(e)}})(e,t),children:[(0,S.jsx)(u.Z,{classN:"silhouettes-list-text _ellipsis",text:e.name,color:n.ue,size:"16px"}),(0,S.jsx)("div",{className:"silhouettes-list-image",children:(0,S.jsx)("img",{src:"".concat(o.Ex).concat(e.silhouetteurl),className:"silhouettes-list-img",alt:e.name})}),(0,S.jsxs)("div",{className:"silhouettes-list-buttons",children:[(0,S.jsx)(c.o,{classN:"silhouettes-list-button",onClick:()=>(e=>{e&&(s(e),f(e),y(!0))})(e),children:"Edit"}),(0,S.jsx)(c.o,{classN:"silhouettes-list-button",onClick:()=>(O(e),void C(!0)),children:(0,S.jsx)(j.G,{icon:p.$aW})})]})]},e._id))):(0,S.jsx)(u.Z,{text:"Nothing found",color:n.ue,size:"16px"})}),k&&(0,S.jsx)(r.Z,{callback:I,children:(0,S.jsx)(h.Z,{callback:async()=>{var e;const s=(0,d.n)(t,x.Vu);if(s)return g(s);Object.keys(N).length&&g({});const l=JSON.parse(JSON.stringify(t));if(null!==t&&void 0!==t&&null!==(e=t.silhouetteurl)&&void 0!==e&&e.includes("blob")){const e=await async function(e){const t=await fetch(e),s=await t.blob();return new File([s],"image.jpg",{type:s.type})}(t.silhouetteurl);l.silhouetteurl=e}const i=new FormData;Object.keys(l).forEach((e=>{i.append(e,l[e])})),await(0,v.RV)(i).then((e=>{Z((0,a.$F)(e))})),I()},closePopup:I,silhouette:t,errors:N,setSilhouette:s,silhouetteInfo:b})}),w&&(0,S.jsx)(r.Z,{callback:R,children:(0,S.jsx)(m.Z,{header:"Remove Sleeve Silhouette",text:"Do you want to remove the sleeve silhouette <span> ".concat(null===D||void 0===D?void 0:D.name," ?</span>"),discardCallback:R,removeCallback:async()=>{null!==D&&void 0!==D&&D._id&&(await(0,v.l1)(D).then((e=>{Z((0,a.$F)(e))})),C(!1))}})})]})}}}]);
//# sourceMappingURL=941.3f610287.chunk.js.map