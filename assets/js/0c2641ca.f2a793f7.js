"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8771],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,h=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:14},i="Block Speed",s={unversionedId:"learn/minimawhitepaper/blockspeed",id:"learn/minimawhitepaper/blockspeed",title:"Block Speed",description:"The security of a transaction is not improved by a faster block speed, since the amount of security is a function of the cumulative PoW of the parent blocks (hash-rates being equal 1 BTC block is worth 4 LTC blocks, since LTC runs 4x faster). A faster chain does increase the granularity of information[6] and allows a user to know sooner when their transaction is secure enough. The longer you wait, the more secure.",source:"@site/docs/learn/minimawhitepaper/blockspeed.md",sourceDirName:"learn/minimawhitepaper",slug:"/learn/minimawhitepaper/blockspeed",permalink:"/docs/learn/minimawhitepaper/blockspeed",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/learn/minimawhitepaper/blockspeed.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Block Size",permalink:"/docs/learn/minimawhitepaper/blocksize"},next:{title:"Consensus, Forks and Immutable Protocols",permalink:"/docs/learn/minimawhitepaper/consensusforksandimmutableprotocols"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"block-speed"},"Block Speed"),(0,o.kt)("p",null,"The security of a transaction is not improved by a faster block speed, since the amount of security is a function of the cumulative PoW of the parent blocks (hash-rates being equal 1 BTC block is worth 4 LTC blocks, since LTC runs 4x faster). A faster chain does increase the granularity of information",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/minimawhitepaper/specialthanksto"},"[6]")," and allows a user to know sooner when their transaction is secure enough. The longer you wait, the more secure."),(0,o.kt)("p",null,"If the block speed is too fast you risk \u2018decoherence\u2019, when the chain cannot keep up with itself as too many blocks are found and multiple conflicting branches emerge, but if the block speed is too slow you ignore the benefits of higher information granularity. "),(0,o.kt)("p",null,"Block speed can be much faster on a GHOST",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/minimawhitepaper/specialthanksto"},"[7]")," chain and so Minima is aiming for a 50 second block time",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/minimawhitepaper/specialthanksto"},"[6]"),"."))}m.isMDXComponent=!0}}]);