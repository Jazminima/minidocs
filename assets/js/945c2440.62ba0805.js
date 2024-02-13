"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4168],{2414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=a(5893),i=a(1151);const s={sidebar_position:13},o="Block Size",r={id:"learn/minimawhitepaper/blocksize",title:"Block Size",description:"Blocks in Minima are small. As small as a transaction. All transactions are potential blocks. Blocks are just lucky transactions. Blocks only contain references to transactions (Compact blocks in Bitcoin), that have already been sent across the network, rather than the entire transaction. Minima also uses an adaptive block size. The maximum size is set by the chain as twice the average block size of the last n blocks. This allows the users themselves to determine the block size. By filling their blocks higher than the average they will make the maximum size greater, by filling them lower, the maximum will be made lower. Users can drag the maximum block size up or down depending on whether they need it, or whether enough traffic is going Lightning[3] and beyond.",source:"@site/docs/learn/minimawhitepaper/blocksize.md",sourceDirName:"learn/minimawhitepaper",slug:"/learn/minimawhitepaper/blocksize",permalink:"/docs/learn/minimawhitepaper/blocksize",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/learn/minimawhitepaper/blocksize.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Quantum Secure",permalink:"/docs/learn/minimawhitepaper/quantumsecure"},next:{title:"Block Speed",permalink:"/docs/learn/minimawhitepaper/blockspeed"}},l={},c=[];function h(e){const t={a:"a",h1:"h1",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"block-size",children:"Block Size"}),"\n",(0,n.jsxs)(t.p,{children:["Blocks in Minima are small. As small as a transaction. All transactions are potential blocks. Blocks are just lucky transactions. Blocks only contain references to transactions (Compact blocks in Bitcoin), that have already been sent across the network, rather than the entire transaction. Minima also uses an adaptive block size. The maximum size is set by the chain as twice the average block size of the last n blocks. This allows the users themselves to determine the block size. By filling their blocks higher than the average they will make the maximum size greater, by filling them lower, the maximum will be made lower. Users can drag the maximum block size up or down depending on whether they need it, or whether enough traffic is going Lightning",(0,n.jsx)(t.a,{href:"/docs/learn/minimawhitepaper/specialthanksto",children:"[3]"})," and beyond."]}),"\n",(0,n.jsx)(t.p,{children:"On a miner-centric chain, blocks must be full. If blocks are not full, there is no fee market for block space, and no requirement to pay any fees at all. If there are no fees there is no security, as the fees pay the miners and the miners secure the chain. Empty blocks are no good, half-full blocks are no good, only full blocks work. Block size must be restricted in some way to ensure this is the case."}),"\n",(0,n.jsx)(t.p,{children:"On a user-centric chain, blocks can be empty, half full, or full, with no effect on the security of the chain. The security is determined by the total PoW generated by all the users. There are no 'fees' required to pay miners to secure the network. There is no requirement to restrict block size, as long as the overall network can handle the on-chain transaction per second rate. The 'Burn' acts as congestion control, to limit traffic at times of heavy load. Each user can determine the load they face independently on their local device and use that knowledge to build a block with a manageable size."}),"\n",(0,n.jsx)(t.p,{children:"Minima uses a Cascading Chain that aggressively prunes almost all data, whilst keeping a record of total cumulative PoW and the complete MMR Database, so blocks are not an ongoing storage overhead but only a short-term bandwidth and processing concern."})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var n=a(7294);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);