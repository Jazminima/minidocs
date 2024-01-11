"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4926],{6902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(5893),o=n(1151);const i={sidebar_position:3},s="Tx-PoW",r={id:"learn/minimawhitepaper/txpow",title:"Tx-PoW",description:"Removing the miners requires the users themselves to secure the chain. User-based PoW security has been tried before. The DAG[3] style IOTA[8] allows users to perform a small amount of PoW work before they can send their transaction. Unlike Minima, IOTA does not use a blockchain, instead opting for a transaction DAG or Tangle. Whether the Tangle can converge in a decentralized fashion is still a topic of debate and recently IOTA switched to a new system, in an attempt to rectify their current solution, a centralized checkpoint server.",source:"@site/docs/learn/minimawhitepaper/txpow.md",sourceDirName:"learn/minimawhitepaper",slug:"/learn/minimawhitepaper/txpow",permalink:"/docs/learn/minimawhitepaper/txpow",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/learn/minimawhitepaper/txpow.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/learn/minimawhitepaper/introduction"},next:{title:"Maxima",permalink:"/docs/learn/minimawhitepaper/maxima"}},c={},l=[];function h(e){const t={a:"a",h1:"h1",p:"p",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"tx-pow",children:"Tx-PoW"}),"\n",(0,a.jsxs)(t.p,{children:["Removing the miners requires the users themselves to secure the chain. User-based PoW security has been tried before. The DAG",(0,a.jsx)(t.a,{href:"/docs/learn/minimawhitepaper/specialthanksto",children:"[3]"})," style IOTA",(0,a.jsx)(t.a,{href:"/docs/learn/minimawhitepaper/specialthanksto",children:"[8]"})," allows users to perform a small amount of PoW work before they can send their transaction. Unlike Minima, IOTA does not use a blockchain, instead opting for a transaction DAG or Tangle. Whether the Tangle can converge in a decentralized fashion is still a topic of debate and recently IOTA switched to a new system, in an attempt to rectify their current solution, a centralized checkpoint server."]}),"\n",(0,a.jsxs)(t.p,{children:["Minima uses a Tx-PoW blockchain, an idea first started with P2Pool",(0,a.jsx)(t.a,{href:"/docs/learn/minimawhitepaper/specialthanksto",children:"[10]"}),", a protocol that allows multiple users to trustlessly perform small amounts of work and then sum all of those pieces up into a full block's worth of PoW. With a single PoW value equal to the sum of the smaller parts. Everyone benefits from the total work done. This would work well in a transaction based security protocol. All the transactions could do a small amount of work, and then sum all of that up into single blocks. This way Minima removes the miners but keeps the blockchain as the single PoW-secured time-ordered list of events."]}),"\n",(0,a.jsx)(t.p,{children:"Each transaction in Minima is PoW mined. The process is very similar to searching for blocks on any other PoW blockchain. When you find a Tx-PoW that satisfies the network allowed difficulty, 10s average work per device, your transaction may be broadcast, relayed across the network, and added to blocks. The network can determine the minimum Tx-PoW by averaging recent transactions. But, this is also how the blockchain is constructed, since if by chance your Tx-PoW value is high enough, determined by the network to be 1 Tx-PoW every 50 seconds, you have not only mined your transaction but you have also mined a block, that users can add to the current chain. The more transactions being sent the higher this block difficulty will be. Users wanting to send transactions, construct a Tx-PoW header that is foremost a record of their own transaction and as an adjunct a block header that represents their current view of the network. Since blocks only store the hashes of transactions, like Compact blocks in Bitcoin, they are of negligible size. A 10KB block would hold about 330 transaction hashes. Finding a block is the most secure action a user can do to safeguard their coins and honest blocks help sustain the health of the network. For the user, this is all seamless. Whenever a user sends a transaction, sometimes they also find a block."}),"\n",(0,a.jsxs)(t.p,{children:["The Tx-PoW chain lends itself well to GHOST",(0,a.jsx)(t.a,{href:"/docs/learn/minimawhitepaper/specialthanksto",children:"[7]"})," as transactions are added to blocks even if they themselves are blocks. With a complete list of the last n blocks, it is independently possible to calculate the block tree created by all the stale blocks included as transactions in the main chain. GHOST allows for consensus to be reached, with much faster block times than a simple Longest Chain Rule."]}),"\n",(0,a.jsx)(t.p,{children:"This type of system means that if there are no transactions then there can be no blocks. Minima will need to reach a critical mass of transactions to sustain a secure blockchain. The transaction rate will need to be very high. Since all the security of Minima is derived from the number of transactions, the more transactions there are, the more secure the network. There will be a bootstrap period until Minima processes enough transactions to secure the network adequately."}),"\n",(0,a.jsx)(t.p,{children:"Now \u2013 every single user is involved in not only validating the entire chain but also in maintaining the liveliness of the network and in preventing censorship attacks. All Minima users perform both the validation and construction of the blockchain."})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(7294);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);