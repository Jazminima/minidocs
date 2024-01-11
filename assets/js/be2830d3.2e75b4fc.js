"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[3101],{4398:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=i(5893),t=i(1151);const o={sidebar_position:4},a="MiniDapp Hub",r={id:"buildonminima/dapptutorial/accesshub",title:"MiniDapp Hub",description:"The MiniDapp hub is where you will access all the MiniDapps you have installed on your node.",source:"@site/docs/buildonminima/dapptutorial/accesshub.md",sourceDirName:"buildonminima/dapptutorial",slug:"/buildonminima/dapptutorial/accesshub",permalink:"/docs/buildonminima/dapptutorial/accesshub",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/dapptutorial/accesshub.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Start a Private Node",permalink:"/docs/buildonminima/dapptutorial/startaprivatenode"},next:{title:"Basic MiniDapp",permalink:"/docs/buildonminima/dapptutorial/basicminidapp"}},d={},c=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"minidapp-hub",children:"MiniDapp Hub"}),"\n",(0,s.jsx)(n.p,{children:"The MiniDapp hub is where you will access all the MiniDapps you have installed on your node."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MDS",src:i(542).Z+"",width:"1410",height:"758"})}),"\n",(0,s.jsxs)(n.p,{children:["To access your node\u2019s MiniDapps, the MiniDapp System (mds) must be enabled. To check whether it is enabled, run the ",(0,s.jsx)(n.code,{children:"mds"})," command in the Minima Command Line Interface (CLI)."]}),"\n",(0,s.jsxs)(n.p,{children:["You should see a password for logging into your MiniDapp hub, if the password value is null, mds is disabled and you should stop your node and restart it with the ",(0,s.jsx)(n.code,{children:"-mdsenable"})," flag (or ",(0,s.jsx)(n.code,{children:"-e minima_mdsenable=true"})," if using Docker)."]}),"\n",(0,s.jsx)(n.p,{children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'mds\r\n{\r\n  "command":"mds",\r\n  "status":true,\r\n  "pending":false,\r\n  "response":{\r\n    "password":"H8NW-7NZ9-TV63",\r\n    "minidapps":[...\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Each node runner has access to their MiniDapp hub via ",(0,s.jsx)(n.a,{href:"https://127.0.0.1:9003",children:"https://127.0.0.1:9003"})," (or ",(0,s.jsx)(n.a,{href:"https://localhost:9003",children:"https://localhost:9003"}),").\r\nOr if accessing on a remote server, ",(0,s.jsx)(n.a,{href:"https://YourServerIP:9003",children:"https://YourServerIP:9003"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If running your node on a mobile device, you can interact with your node from a Desktop on the same WiFi as the mobile, to find the URL and password you need, go to the ",(0,s.jsx)(n.strong,{children:"Settings > Desktop Connect"})," section in the Android app."]}),"\n",(0,s.jsx)(n.admonition,{title:"Browser WARNING",type:"note",children:(0,s.jsxs)(n.p,{children:["Minima uses self-signed certificates. For this reason you may be shown a security certificate warning when accessing Minima, to which you can click on ",(0,s.jsx)(n.strong,{children:"Advanced"}),", then ",(0,s.jsx)(n.strong,{children:"Proceed"}),".\r\nThis may be different depending on the browser and OS you are using."]})})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},542:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/mds_hub-e429af1a1392a0fa88a77ab116b39514.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var s=i(7294);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);