"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4103],{7234:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"installation/https","title":"Expose your server","description":"HTTPS","source":"@site/docs/installation/https.md","sourceDirName":"installation","slug":"/installation/https","permalink":"/docs/installation/https","draft":false,"unlisted":false,"editUrl":"https://github.com/gotson/komga-website/tree/master/docs/installation/https.md","tags":[],"version":"current","lastUpdatedAt":1735785136000,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Configuration options","permalink":"/docs/installation/configuration"},"next":{"title":"Social login","permalink":"/docs/installation/oauth2"}}');var r=o(2540),s=o(3023);const i={},a="Expose your server",c={},d=[{value:"HTTPS",id:"https",level:2},{value:"Reverse proxy",id:"reverse-proxy",level:2},{value:"Caddy",id:"caddy",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"expose-your-server",children:"Expose your server"})}),"\n",(0,r.jsx)(t.h2,{id:"https",children:"HTTPS"}),"\n",(0,r.jsxs)(t.p,{children:["If you want to open your Komga server outside your local network, it is strongly advised to secure it with ",(0,r.jsx)(t.code,{children:"https"})," (especially due to the use of http basic authentication)."]}),"\n",(0,r.jsxs)(t.p,{children:["Spring Boot supports ",(0,r.jsx)(t.code,{children:"https"})," out of the box, but you will have to configure it, and ",(0,r.jsx)(t.code,{children:"https"})," is most useful only with valid certificates (not self-signed), which most people don't readily have available."]}),"\n",(0,r.jsxs)(t.p,{children:["I recommend using ",(0,r.jsx)(t.a,{href:"https://caddyserver.com/",children:"Caddy"})," as a reverse proxy, as it supports the automatic generation of ",(0,r.jsx)(t.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"})," certificates."]}),"\n",(0,r.jsx)(t.h2,{id:"reverse-proxy",children:"Reverse proxy"}),"\n",(0,r.jsx)(t.p,{children:"Here are some sample configuration on how to configure reverse proxy for Komga."}),"\n",(0,r.jsx)(t.h3,{id:"caddy",children:"Caddy"}),"\n",(0,r.jsx)(t.p,{children:"Without a base URL configured in Komga, using a subdomain:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"komga.yourdomain.com {\n  reverse_proxy http://your-komga-server:25600\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"With a base URL configured in Komga:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"yourdomain.com {\n  reverse_proxy /komga/* http://your-komga-server:25600\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3023:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>a});var n=o(3696);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);