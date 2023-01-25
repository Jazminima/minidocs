"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8024],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=i,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(b,o(o({ref:e},u),{},{components:n})):r.createElement(b,o({ref:e},u))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1132:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:3},o="Time lock contract",l={unversionedId:"buildonminima/txntutorial/layer1/timelock",id:"buildonminima/txntutorial/layer1/timelock",title:"Time lock contract",description:"A time lock contract is a script that can only be spent after a certain amount of time - in this case a certain block - has passed.",source:"@site/docs/buildonminima/txntutorial/layer1/timelock.md",sourceDirName:"buildonminima/txntutorial/layer1",slug:"/buildonminima/txntutorial/layer1/timelock",permalink:"/docs/buildonminima/txntutorial/layer1/timelock",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/layer1/timelock.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Simple Transaction",permalink:"/docs/buildonminima/txntutorial/layer1/simpletxn"},next:{title:"MultiSig Contract",permalink:"/docs/buildonminima/txntutorial/layer1/multisig"}},c={},s=[],u={toc:s};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"time-lock-contract"},"Time lock contract"),(0,i.kt)("p",null,"A time lock contract is a script that can only be spent after a certain amount of time - in this case a certain block - has passed.",(0,i.kt)("br",null),"\nSo the script for that would be: ",(0,i.kt)("inlineCode",{parentName:"p"},"RETURN (SIGNEDBY(0xFFEE67F7C..) AND @BLOCK GT 100)")),(0,i.kt)("p",null,"This script will return TRUE if the transaction is signed by the correct public key and the blocktime is over 100. The @ symbol represents \u2018Global\u2019 variables that are set automatically and represent variables related to the transaction itself, the coin, and the current state of the blockchain, that you can then access in your scripts."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Global Variables")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@BLOCK")," - the current block number",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@BLOCKMILLI")," - the current block time in milliseconds since Jan 1 1970",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@CREATED")," - the block this coin was created in",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@COINAGE")," - the difference in @BLOCK and @CREATED.",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@INPUT")," - Input index of a coin used in the transaction. First input coin has an index of 0.",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@COINID")," - the coinid",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@AMOUNT")," - the amount",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@ADDRESS")," - the address",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@TOKENID")," - the tokenid",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@SCRIPT")," - the script of this coin",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@TOTIN"),"- the total number of input coins",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@TOTOUT")," - the total number of output coins",(0,i.kt)("br",null)),(0,i.kt)("p",null,"You can test your scripts without sending them on chain using the \u2018runscript\u2018 function. This allows you to set all the variables and globals as you see fit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'runscript script:"RETURN SIGNEDBY(0xFF) AND @BLOCK GT 100" globals:{"@BLOCK":"101"} signatures:["0xFF"]\n')),(0,i.kt)("p",null,"You can use lowercase when entering the scripts and it will be \u2018cleaned\u2019 for you into the correct format."),(0,i.kt)("p",null,"Now let's attempt another very useful contract, one that requires 2 signatures from different parties to be valid."))}p.isMDXComponent=!0}}]);