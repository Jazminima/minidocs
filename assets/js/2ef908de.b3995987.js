"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8024],{7238:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(5893),r=n(1151);const o={sidebar_position:3},s="Time lock contract",c={id:"buildonminima/txntutorial/layer1/timelock",title:"Time lock contract",description:"A time lock contract is a script that can only be spent after a certain amount of time - in this case a certain block - has passed.",source:"@site/docs/buildonminima/txntutorial/layer1/timelock.md",sourceDirName:"buildonminima/txntutorial/layer1",slug:"/buildonminima/txntutorial/layer1/timelock",permalink:"/docs/buildonminima/txntutorial/layer1/timelock",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/layer1/timelock.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Simple Transaction",permalink:"/docs/buildonminima/txntutorial/layer1/simpletxn"},next:{title:"MultiSig Contract",permalink:"/docs/buildonminima/txntutorial/layer1/multisig"}},a={},l=[];function d(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"time-lock-contract",children:"Time lock contract"}),"\n",(0,i.jsxs)(e.p,{children:["A time lock contract is a script that can only be spent after a certain amount of time - in this case a certain block - has passed.",(0,i.jsx)("br",{}),"\r\nSo the script for that would be: ",(0,i.jsx)(e.code,{children:"RETURN (SIGNEDBY(0xFFEE67F7C..) AND @BLOCK GT 100)"})]}),"\n",(0,i.jsx)(e.p,{children:"This script will return TRUE if the transaction is signed by the correct public key and the blocktime is over 100. The @ symbol represents \u2018Global\u2019 variables that are set automatically and represent variables related to the transaction itself, the coin, and the current state of the blockchain, that you can then access in your scripts."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Global Variables"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"@BLOCK"})," - the current block number",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(e.code,{children:"@BLOCKMILLI"})," - the current block time in milliseconds since Jan 1 1970",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(e.code,{children:"@CREATED"})," - the block this coin was created in",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(e.code,{children:"@COINAGE"})," - the difference in @BLOCK and @CREATED.",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(e.code,{children:"@INPUT"})," - Input index of a coin used in the transaction. First input coin has an index of 0.",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(e.code,{children:"@COINID"})," - the coinid",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(e.code,{children:"@AMOUNT"})," - the amount",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(e.code,{children:"@ADDRESS"})," - the address",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(e.code,{children:"@TOKENID"})," - the tokenid",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(e.code,{children:"@SCRIPT"})," - the script of this coin",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(e.code,{children:"@TOTIN"}),"- the total number of input coins",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(e.code,{children:"@TOTOUT"})," - the total number of output coins",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(e.p,{children:"You can test your scripts without sending them on chain using the \u2018runscript\u2018 function. This allows you to set all the variables and globals as you see fit."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'runscript script:"RETURN SIGNEDBY(0xFF) AND @BLOCK GT 100" globals:{"@BLOCK":"101"} signatures:["0xFF"]\n'})}),"\n",(0,i.jsx)(e.p,{children:"You can use lowercase when entering the scripts and it will be \u2018cleaned\u2019 for you into the correct format."}),"\n",(0,i.jsx)(e.p,{children:"Now let's attempt another very useful contract, one that requires 2 signatures from different parties to be valid."})]})}function u(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>s});var i=n(7294);const r={},o=i.createContext(r);function s(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);