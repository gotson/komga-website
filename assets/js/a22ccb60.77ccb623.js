"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1598],{8434:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api/deprecation","title":"Deprecation","description":"To be removed in 2.0.0","source":"@site/docs/api/deprecation.md","sourceDirName":"api","slug":"/api/deprecation","permalink":"/docs/api/deprecation","draft":false,"unlisted":false,"editUrl":"https://github.com/gotson/komga-website/tree/master/docs/api/deprecation.md","tags":[],"version":"current","lastUpdatedAt":1735785136000,"frontMatter":{},"sidebar":"api","previous":{"title":"REST API","permalink":"/docs/api/rest"}}');var s=n(2540),t=n(3023);const a={},d="Deprecation",o={},c=[{value:"To be removed in 2.0.0",id:"to-be-removed-in-200",level:2},{value:"PUT /api/v1/libraries/{libraryId}",id:"put-apiv1librarieslibraryid",level:3},{value:"GET /api/v1/series",id:"get-apiv1series",level:3},{value:"GET /api/v1/alphabetical-groups",id:"get-apiv1alphabetical-groups",level:3}];function l(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"deprecation",children:"Deprecation"})}),"\n",(0,s.jsx)(i.h2,{id:"to-be-removed-in-200",children:"To be removed in 2.0.0"}),"\n",(0,s.jsxs)(i.p,{children:["The following API endpoints will be removed in version ",(0,s.jsx)(i.code,{children:"2.0.0"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"put-apiv1librarieslibraryid",children:"PUT /api/v1/libraries/{libraryId}"}),"\n",(0,s.jsxs)(i.p,{children:["Deprecated since version: ",(0,s.jsx)(i.code,{children:"1.3.0"})]}),"\n",(0,s.jsxs)(i.p,{children:["Use ",(0,s.jsx)(i.code,{children:"PATCH /api/v1/libraries/{libraryId}"})," instead, without any change needed. The ",(0,s.jsx)(i.code,{children:"PUT"})," endpoint redirects to the ",(0,s.jsx)(i.code,{children:"PATCH"})," endpoint internally."]}),"\n",(0,s.jsx)(i.p,{children:"The endpoint now accepts a partial DTO, and will only update fields that are present."}),"\n",(0,s.jsx)(i.h3,{id:"get-apiv1series",children:"GET /api/v1/series"}),"\n",(0,s.jsxs)(i.p,{children:["Deprecated since version: ",(0,s.jsx)(i.code,{children:"1.15.0"})]}),"\n",(0,s.jsxs)(i.p,{children:["Use ",(0,s.jsx)(i.code,{children:"GET /api/v1/series/list"})," instead."]}),"\n",(0,s.jsx)(i.h3,{id:"get-apiv1alphabetical-groups",children:"GET /api/v1/alphabetical-groups"}),"\n",(0,s.jsxs)(i.p,{children:["Deprecated since version: ",(0,s.jsx)(i.code,{children:"1.15.0"})]}),"\n",(0,s.jsxs)(i.p,{children:["Use ",(0,s.jsx)(i.code,{children:"GET /api/v1/series/list/alphabetical-groups"})," instead."]})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3023:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>d});var r=n(3696);const s={},t=r.createContext(s);function a(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);