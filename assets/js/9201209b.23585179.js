"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[6662],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(r),d=a,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7920:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6},i="PoW vs Distributed PoW",s={unversionedId:"learn/minimawhitepaper/powvsdistributedpow",id:"learn/minimawhitepaper/powvsdistributedpow",title:"PoW vs Distributed PoW",description:"Hash-rate does not equal security.",source:"@site/docs/learn/minimawhitepaper/powvsdistributedpow.md",sourceDirName:"learn/minimawhitepaper",slug:"/learn/minimawhitepaper/powvsdistributedpow",permalink:"/docs/learn/minimawhitepaper/powvsdistributedpow",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/learn/minimawhitepaper/powvsdistributedpow.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"The Pulse Network",permalink:"/docs/learn/minimawhitepaper/thepulsenetwork"},next:{title:"HashCash and Burn",permalink:"/docs/learn/minimawhitepaper/hashcashandburn"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pow-vs-distributed-pow"},"PoW vs Distributed PoW"),(0,a.kt)("p",null,"Hash-rate does ",(0,a.kt)("strong",{parentName:"p"},"not")," equal security."),(0,a.kt)("p",null,"Since if this were the case, 1 miner with infinite hash-rate, would imply a secure network. It\u2019s not. It\u2019s called PayPal (a completely centralized payment gateway . No resistance to censorship attacks at all."),(0,a.kt)("p",null,"What matters is the distribution of hash-rate. This is self-evident when we consider the dreaded 51% attack."),(0,a.kt)("p",null,"PoW blockchains are always fearful of a 51% attack. This is an attack where some person or group has access to over 50% of the hash-rate and as such can reverse transactions, hold the chain to ransom with empty blocks, or censor transactions, by creating a longer valid chain with more PoW. In miner-centric PoW networks, miners are paid to acquire hash-rate. It is guaranteed that a small group of miners can create a 51% cartel. Trust is not the issue. Miners have strong incentives to play by the rules and not attack the chain, for fear of losing income. Coercion is by far the more likely attack. Governmental coercion at a state level."),(0,a.kt)("p",null,"Minima, a distributed PoW blockchain, does not incentivise the acquisition of hash power, since there is no financial reward for finding a block and no advantages to doing more work than necessary. There is no small group or cartel of users that will have anywhere near 1% of the total hash-rate, let alone 51%. Hence coordinating this attack becomes very expensive as there is no use for the hardware required other than to attack the network, no mining rewards to recoup the initial investment. The cost of an attack must be less than the potential gains after all. "),(0,a.kt)("p",null,"There is, of course, a caveat to the Distributed PoW Model. You need a lot of users."))}u.isMDXComponent=!0}}]);