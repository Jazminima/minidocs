"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4027],{1927:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(5893),i=t(1151);const s={sidebar_position:11},r="Archive nodes",a={id:"learn/minima/aboutarchivenodes",title:"Archive nodes",description:"Overview",source:"@site/docs/learn/minima/aboutarchivenodes.md",sourceDirName:"learn/minima",slug:"/learn/minima/aboutarchivenodes",permalink:"/docs/learn/minima/aboutarchivenodes",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/learn/minima/aboutarchivenodes.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Quantum Security",permalink:"/docs/learn/minima/quantumsecurity"},next:{title:"About",permalink:"/docs/learn/maxima/maximaintro"}},c={},d=[{value:"Overview",id:"overview",level:2}];function h(e){const n={admonition:"admonition",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"archive-nodes",children:"Archive nodes"}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(n.p,{children:["All Minima nodes have a ",(0,o.jsx)(n.strong,{children:"txpow database"})," and an ",(0,o.jsx)(n.strong,{children:"archive database"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"txpow database"})," contains full blocks, which includes complete information about all transactions. This is limited to the most recent blocks from the unpruned section of the chain - approximately the last 24 hours worth."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"archive database"})," contains the last 2 months of ",(0,o.jsx)(n.strong,{children:"sync blocks"}),", which do not include transaction details but do hold all the MMR proofs for coins spent or created in the block. Sync blocks older than 2 months are not stored unless the node is set up as an archive node."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Archive nodes"})," store ",(0,o.jsx)(n.strong,{children:"all"})," the ",(0,o.jsx)(n.strong,{children:"sync blocks"})," from after the archive node is started, no pruning is done after 2 months."]}),"\n",(0,o.jsx)(n.admonition,{type:"important",children:(0,o.jsxs)(n.p,{children:["An archive node can only be used to recover users who created their nodes after your archive node was created. If you wish to be able to recover ",(0,o.jsx)(n.em,{children:"any"})," Minima user, you must perform a chain re-sync from an archive node that holds the entire blockchain since genesis."]})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(7294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);