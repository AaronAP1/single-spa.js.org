"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4349],{8665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(4848),i=t(8453);const o={},r="April 2024 Core Team Meeting",a={permalink:"/blog/2024/04/10/core-team-meeting-notes",source:"@site/blog/2024-04-10-core-team-meeting-notes.md",title:"April 2024 Core Team Meeting",description:"Attendees: Ian, Milan Kovacic",date:"2024-04-10T00:00:00.000Z",formattedDate:"April 10, 2024",tags:[],readingTime:1.305,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"June 2024 Core Team Meeting",permalink:"/blog/2024/06/08/core-team-meeting-notes"},nextItem:{title:"Top 5 Microfrontend Hosting Solutions",permalink:"/blog/2024/03/18/top-5-microfrontend-hosting-solutions"}},l={authorsImageUrls:[]},c=[{value:"Meeting Agenda",id:"meeting-agenda",level:2},{value:"Note from single-spa&#39;s creator",id:"note-from-single-spas-creator",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Attendees: Ian, Milan Kovacic"}),"\n",(0,s.jsx)(n.p,{children:"Date: 2024-04-10"}),"\n",(0,s.jsx)(n.h2,{id:"meeting-agenda",children:"Meeting Agenda"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Discussed ",(0,s.jsx)(n.a,{href:"https://github.com/single-spa/create-single-spa/pull/402",children:"create-single-spa PR 402"})]}),"\n",(0,s.jsxs)(n.li,{children:["Milan plans to introduce ",(0,s.jsx)(n.code,{children:"nx"})," to create-single-spa"]}),"\n",(0,s.jsx)(n.li,{children:"Ian will look into fixing the types in single-spa-layout"}),"\n",(0,s.jsx)(n.li,{children:"Joel will push towards single-spa@7"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"note-from-single-spas-creator",children:"Note from single-spa's creator"}),"\n",(0,s.jsx)(n.p,{children:"After releasing single-spa@7, I think my next priority for single-spa will be to push for native ES modules and native import maps."}),"\n",(0,s.jsx)(n.p,{children:"I lean against es-module-shims because I don't think we need those additional features, and am hesitant about in-browser parsing of the Javascript language being something that is encouraged in production (despite the performance metrics on the readme suggesting that it's negligible). I want single-spa to be as native to the browser as possible."}),"\n",(0,s.jsxs)(n.p,{children:["The recommendation should be to use a single inline import map, rather than multiple import maps or an external import map, for performance reasons. For cases where that isn't possible, I think ",(0,s.jsx)(n.a,{href:"https://github.com/single-spa/import-map-injector",children:"https://github.com/single-spa/import-map-injector"})," should be used, since it doesn't parse JS in the browser."]}),"\n",(0,s.jsx)(n.p,{children:"Regarding shared dependencies, I think we should discuss whether to support self hosting or just JSPM proxies. I imagine some users will insist on self-hosting, which means we could check if JSPM is open source or if there is a similar tool for converting npm packages to ES modules."}),"\n",(0,s.jsx)(n.p,{children:"Regarding module federation, I discussed it with Zack and module federation is still moving towards a runtime rather than native import maps. There might be possible collaboration on a service worker for module federation + native modules. I personally prefer no runtime whatsoever - just what the browser natively supports."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);