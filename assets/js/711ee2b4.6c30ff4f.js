"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8450],{2296:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=e(5893),s=e(1151);const r={sidebar_position:9},a="Scripting",o={id:"learn/minima/scripting",title:"Scripting",description:"Minima has its own, Turing Complete, scripting language for creating Smart Contracts - KISS VM.",source:"@site/docs/learn/minima/scripting.md",sourceDirName:"learn/minima",slug:"/learn/minima/scripting",permalink:"/docs/learn/minima/scripting",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/learn/minima/scripting.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Keys and Digital Signatures",permalink:"/docs/learn/minima/keysandsignatures"},next:{title:"Quantum Security",permalink:"/docs/learn/minima/quantumsecurity"}},c={},l=[{value:"Types of contracts",id:"types-of-contracts",level:2},{value:"Token Scripts",id:"token-scripts",level:2}];function h(n){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"scripting",children:"Scripting"}),"\n",(0,t.jsxs)(i.p,{children:["Minima has its own, Turing Complete, scripting language for creating Smart Contracts - ",(0,t.jsx)(i.strong,{children:"KISS VM"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Minima, like Bitcoin, uses the ",(0,t.jsx)(i.a,{href:"/docs/learn/minima/coreconcepts#utxo-model",children:"UTxO model"})," so writing smart contracts on Minima is quite different to writing them on an Account based model like Ethereum."]}),"\n",(0,t.jsxs)(i.p,{children:["Every UTxO (coin) is associated with a Minima script i.e. contract which can either return ",(0,t.jsx)(i.strong,{children:"TRUE"})," or ",(0,t.jsx)(i.strong,{children:"FALSE"})," when used in a transaction. The default is return FALSE, so all scripts must explicitly return TRUE for the transaction to be valid."]}),"\n",(0,t.jsxs)(i.p,{children:["A ",(0,t.jsx)(i.strong,{children:"\u2018contract\u2019"})," is the script that locks the funds in a coin and is interchangeable with the word script."]}),"\n",(0,t.jsx)(i.p,{children:"The default script for a coin is"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"RETURN SIGNEDBY(0xFFEE67F7C..)\n"})}),"\n",(0,t.jsxs)(i.p,{children:["where ",(0,t.jsx)(i.code,{children:"0xFFEE67F7C.."})," is the public key of the owner of the coin."]}),"\n",(0,t.jsx)(i.p,{children:"This default script will only return TRUE when a transaction attempting to spend this coin has been signed by the coin's owner."}),"\n",(0,t.jsxs)(i.admonition,{title:"good to know",type:"tip",children:[(0,t.jsx)(i.p,{children:"The KISS VM scripting language supports SHA2-256 to allow cross-chain hash lock contracts with legacy chains."}),(0,t.jsx)(i.p,{children:"Contracts are inherently compatible with Layer 2."})]}),"\n",(0,t.jsxs)(i.p,{children:["The addition of the ",(0,t.jsx)(i.strong,{children:"state variables"})," in the MMR Proof DB, allow for complex scripts with knowledge of their past to be created. Minima uses a simple state mechanic for transactional history rather than a global state for ALL transactions."]}),"\n",(0,t.jsx)(i.p,{children:"Each user tracks the coins to an address they possess and all coins that have a public key or address they possess in the STATE or PREVSTATE."}),"\n",(0,t.jsx)(i.h2,{id:"types-of-contracts",children:"Types of contracts"}),"\n",(0,t.jsx)(i.p,{children:"Some of the types of contracts possible:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Basic Signed"}),"\n",(0,t.jsx)(i.li,{children:"Time Lock"}),"\n",(0,t.jsx)(i.li,{children:"Multi-sig"}),"\n",(0,t.jsx)(i.li,{children:"Complex multi-sig"}),"\n",(0,t.jsx)(i.li,{children:"M of N multi-sig"}),"\n",(0,t.jsx)(i.li,{children:"Hashed Time Lock (including cross-chain)"}),"\n",(0,t.jsx)(i.li,{children:"Exchange"}),"\n",(0,t.jsx)(i.li,{children:"FlashCash"}),"\n",(0,t.jsx)(i.li,{children:"MAST"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"token-scripts",children:"Token Scripts"}),"\n",(0,t.jsx)(i.p,{children:"Each token has a separate script that must also return TRUE when attempting to spend a UTxO."}),"\n",(0,t.jsx)(i.p,{children:"A token by default has RETURN TRUE as its script. This token structure is added to any transaction wishing to use that token so every user can know how many, what scripts, name etc of the Token is correct and valid."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Both the coin address script and the token script must return TRUE."})}),"\n",(0,t.jsxs)(i.p,{children:["For details about the KISS VM scripting language, see the ",(0,t.jsx)(i.a,{href:"/docs/buildonminima/contracts/scriptbasics",children:"Build"})," section."]})]})}function d(n={}){const{wrapper:i}={...(0,s.a)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},1151:(n,i,e)=>{e.d(i,{Z:()=>o,a:()=>a});var t=e(7294);const s={},r=t.createContext(s);function a(n){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function o(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(r.Provider,{value:i},n.children)}}}]);