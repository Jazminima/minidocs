"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[5437],{3905:function(t,n,e){e.d(n,{Zo:function(){return p},kt:function(){return d}});var a=e(7294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,a,i=function(t,n){if(null==t)return{};var e,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var c=a.createContext({}),l=function(t){var n=a.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},p=function(t){var n=l(t.components);return a.createElement(c.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=l(e),d=i,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return e?a.createElement(h,o(o({ref:n},p),{},{components:e})):a.createElement(h,o({ref:n},p))}));function d(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var r=e.length,o=new Array(r);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var l=2;l<r;l++)o[l]=e[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},1141:function(t,n,e){e.r(n),e.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=e(7462),i=e(3366),r=(e(7294),e(3905)),o=["components"],s={sidebar_position:1},c="Transaction Basics",l={unversionedId:"buildonminima/contracts/txnbasics",id:"buildonminima/contracts/txnbasics",title:"Transaction Basics",description:"At its core Minima keeps track of Coins. That's all it does. Not users, not balances, coins.",source:"@site/docs/buildonminima/contracts/txnbasics.md",sourceDirName:"buildonminima/contracts",slug:"/buildonminima/contracts/txnbasics",permalink:"/docs/buildonminima/contracts/txnbasics",editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/contracts/txnbasics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MiniBrowser",permalink:"/docs/buildonminima/dapps/minibrowser"},next:{title:"Scripting Basics",permalink:"/docs/buildonminima/contracts/scriptbasics"}},p={},u=[{value:"Coins",id:"coins",level:2},{value:"Transactions",id:"transactions",level:2},{value:"State",id:"state",level:2},{value:"Burning Minima",id:"burning-minima",level:2}],m={toc:u};function d(t){var n=t.components,e=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transaction-basics"},"Transaction Basics"),(0,r.kt)("p",null,"At its core Minima keeps track of Coins. That's all it does. Not users, not balances, ",(0,r.kt)("strong",{parentName:"p"},"coins"),". "),(0,r.kt)("h2",{id:"coins"},"Coins"),(0,r.kt)("p",null,"A coin says - ",(0,r.kt)("em",{parentName:"p"},'"You can spend me if you can unlock the script conditions, and when you spend me, you can send the funds in full to other coins".')," This is a ",(0,r.kt)("strong",{parentName:"p"},"transaction"),". "),(0,r.kt)("p",null,"Each coin has an ",(0,r.kt)("strong",{parentName:"p"},"amount"),", ",(0,r.kt)("strong",{parentName:"p"},"address"),", ",(0,r.kt)("strong",{parentName:"p"},"token id")," and ",(0,r.kt)("strong",{parentName:"p"},"coin id"),". The coin address is the ",(0,r.kt)("strong",{parentName:"p"},"hash of the script"),". "),(0,r.kt)("p",null,"You create a coin when you send funds to a script address, and it can be spent - in full - if the script returns TRUE when run. "),(0,r.kt)("p",null,"Users only keep track of coins that are relevant to them, and provide an MMR (Merkle Mountain Range) proof of their validity when they spend them. "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can think of a coin as some unit of Smart Value controlled by a Smart Contract (i.e. a script)."),(0,r.kt)("p",{parentName:"div"},"A ",(0,r.kt)("strong",{parentName:"p"},"\u2018contract\u2019")," is the script that locks the funds in a coin and is interchangeable with the word 'script'."))),(0,r.kt)("h2",{id:"transactions"},"Transactions"),(0,r.kt)("p",null,"A transaction reallocates value from some coins to other coins. "),(0,r.kt)("p",null,"A transaction in Minima is a set of ",(0,r.kt)("strong",{parentName:"p"},"input coins"),", a set of ",(0,r.kt)("strong",{parentName:"p"},"output coins")," and a ",(0,r.kt)("strong",{parentName:"p"},"state variable list from 0-255"),". An analogue logic gate - Smart Circuitry. "),(0,r.kt)("p",null,"A transaction can be ",(0,r.kt)("strong",{parentName:"p"},"signed")," by 1 or more ",(0,r.kt)("strong",{parentName:"p"},"public keys")," (signatures can even be added as state variables if you want oracle style contracts)."),(0,r.kt)("h2",{id:"state"},"State"),(0,r.kt)("p",null,"Each coin can store the transaction state variables along with its details in an MMR database. These can be referenced in scripts using the PREVSTATE command allowing for a basic memory mechanic. "),(0,r.kt)("p",null,"A coin remembers the state of the previous transaction it was in. This way, sequences, counters and far more interesting scripts can be achieved."),(0,r.kt)("h2",{id:"burning-minima"},"Burning Minima"),(0,r.kt)("p",null,"A transaction can 'burn' Minima, when the ",(0,r.kt)("strong",{parentName:"p"},"sum of the outputs is less than the sum of the inputs"),", and this is how the ordering of transactions in the mempool is achieved. This is how precedence is given to transactions. You burn more, you are added sooner, as the coins that are left in the system will be proportionally more. That's the incentive to add them first. "),(0,r.kt)("p",null,"Unlike other chains - these burnt coins are NOT given to the User who finds the block - which happens randomly when they are mining TxPoW transactions. This is important as it removes the incentive to mine for profit and ergo - centralise consensus."))}d.isMDXComponent=!0}}]);