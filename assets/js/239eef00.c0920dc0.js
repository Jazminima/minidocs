"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4027],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:11},i="Archive nodes",s={unversionedId:"learn/minima/aboutarchivenodes",id:"learn/minima/aboutarchivenodes",title:"Archive nodes",description:"Overview",source:"@site/docs/learn/minima/aboutarchivenodes.md",sourceDirName:"learn/minima",slug:"/learn/minima/aboutarchivenodes",permalink:"/docs/learn/minima/aboutarchivenodes",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/learn/minima/aboutarchivenodes.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Quantum Security",permalink:"/docs/learn/minima/quantumsecurity"},next:{title:"About",permalink:"/docs/learn/maxima/maximaintro"}},c={},l=[{value:"Overview",id:"overview",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"archive-nodes"},"Archive nodes"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"All Minima nodes have a ",(0,a.kt)("strong",{parentName:"p"},"txpow database")," and an ",(0,a.kt)("strong",{parentName:"p"},"archive database"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"txpow database")," contains full blocks, which includes complete information about all transactions. This is limited to the most recent blocks from the unpruned section of the chain - approximately the last 24 hours worth."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"archive database")," contains the last 2 months of ",(0,a.kt)("strong",{parentName:"p"},"sync blocks"),", which do not include transaction details but do hold all the MMR proofs for coins spent or created in the block. Sync blocks older than 2 months are not stored unless the node is set up as an archive node."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Archive nodes")," store ",(0,a.kt)("strong",{parentName:"p"},"all")," the ",(0,a.kt)("strong",{parentName:"p"},"sync blocks")," from after the archive node is started, no pruning is done after 2 months. "),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"An archive node can only be used to recover users who created their nodes after your archive node was created. If you wish to be able to recover ",(0,a.kt)("em",{parentName:"p"},"any")," Minima user, you must perform a chain re-sync from an archive node that holds the entire blockchain since genesis.")))}u.isMDXComponent=!0}}]);