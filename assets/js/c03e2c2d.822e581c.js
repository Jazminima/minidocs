"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[1189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Introduction",l={unversionedId:"learn/minimawhitepaper/introduction",id:"learn/minimawhitepaper/introduction",title:"Introduction",description:"In 2008 Satoshi Nakamoto unleashed Bitcoin[1] and it changed the world. A revolutionary digital monetary system explicitly intended to be liberated from any overarching authority; a secure decentralized network where no one needed to trust a third party; the natural evolution of an antiquated monetary system so evidently fallible and easily abused.",source:"@site/docs/learn/minimawhitepaper/introduction.md",sourceDirName:"learn/minimawhitepaper",slug:"/learn/minimawhitepaper/introduction",permalink:"/docs/learn/minimawhitepaper/introduction",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/learn/minimawhitepaper/introduction.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Abstract",permalink:"/docs/learn/minimawhitepaper/abstract"},next:{title:"Tx-PoW",permalink:"/docs/learn/minimawhitepaper/txpow"}},s={},c=[{value:"The Problem",id:"the-problem",level:2},{value:"The Solution",id:"the-solution",level:2},{value:"Requirements",id:"requirements",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In 2008 Satoshi Nakamoto unleashed Bitcoin",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/minimawhitepaper/specialthanksto"},"[1]")," and it changed the world. A revolutionary digital monetary system explicitly intended to be liberated from any overarching authority; a secure decentralized network where no one needed to trust a third party; the natural evolution of an antiquated monetary system so evidently fallible and easily abused."),(0,a.kt)("h2",{id:"the-problem"},"The Problem"),(0,a.kt)("p",null,"Since then, many ingenious and powerful advancements have been made, but in our haste to build features, one single property, for some the most important property, is being side-lined in favour of scale and security: Decentralization. Bitcoins\u2019 original raison d\u2019etre was for there to be no overarching authority \u2018controlling\u2019 the network, no single points of failure and no avenues for censorship built on top of a network resilient to distributed attacks; both digital and physical. Every single cryptocurrency operating today has sacrificed some or all decentralization in their race for increased scale and supposed security. Centralization causes huge efficiency gains after all. But if 1 group of users is paid to perform any \u2018task\u2019 on the network for the rest of the users (finding blocks, resolving disputes, etc.) this inevitably leads to centralization, as is shown by all of the major crypto networks. In essence decentralization matters because centralized networks are so easy to attack."),(0,a.kt)("p",null,"Current miner-centric networks rely on a relatively small number of users running full validatory nodes that process every transaction, ensuring that no one cheats the system and no one accepts an invalid transaction. But they are not involved in the construction of the blockchain itself, just its validation. A much smaller group of users, normally referred to as miners, run a full validatory and mining node, otherwise known as a Complete node. Since only this small group of Complete nodes is involved in the construction of the chain, only this small group decides which valid transactions actually make it into a block or not, and only this small group is involved in ensuring the liveliness",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/minimawhitepaper/specialthanksto"},"[15]")," of the network and the prevention of censorship attacks. "),(0,a.kt)("p",null,"How many compromised or coerced human beings would it take to seriously disrupt a cryptocurrency, or worse - render it entirely useless?  To force mining operators to produce blank blocks or censor transactions, perform constant 51% attacks or stop DPoS delegates from confirming or resolving anything? The answer for almost all coins is surely less than 100, and for most far less than 21..."),(0,a.kt)("h2",{id:"the-solution"},"The Solution"),(0,a.kt)("p",null,"A network where every single user is an equal and Complete member. Where disrupting the network would require attacking, bribing or coercing 100\u2019s of millions, maybe billions of users. Orders of magnitude more than current crypto solutions. Total decentralization."),(0,a.kt)("p",null,"Can a secure, scalable, truly decentralized cryptocurrency be made with no overarching authority? Can every user be an equal on a cryptocurrency network? Can mining centralization be abolished? Can the need to outsource any critical aspects of the network to some third party become redundant?"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The protocol needs to be so resource-efficient that every user is able to run a Complete node at all times, as if it is of no consequence.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It must remove the paid miners. The miner-centric fee-paying model always leads to centralization.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It must be complete. Immutability of the protocol is a desired quality.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Since it must be complete, the Protocol must"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"scale from inception")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"be Quantum Secure"),(0,a.kt)("p",{parentName:"li"},"for a future where it might matter.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It must be small. It must be powerful. It must remain decentralized. It must be finished."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enter Minima.")))}p.isMDXComponent=!0}}]);