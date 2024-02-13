"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4484],{331:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(5893),a=t(1151);const o={sidebar_position:10},i="Flash Cash",r={id:"buildonminima/txntutorial/layer1/flashcash",title:"Flash Cash",description:"Flash loans - where you borrow a coin for a single transaction - allow for many arbitrage possibilities..",source:"@site/docs/buildonminima/txntutorial/layer1/flashcash.md",sourceDirName:"buildonminima/txntutorial/layer1",slug:"/buildonminima/txntutorial/layer1/flashcash",permalink:"/docs/buildonminima/txntutorial/layer1/flashcash",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/layer1/flashcash.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Exchange Contract",permalink:"/docs/buildonminima/txntutorial/layer1/exchangecontract"},next:{title:"MultiSig MultiCoin",permalink:"/docs/buildonminima/txntutorial/layer1/multisigmulticoin"}},c={},l=[];function u(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"flash-cash",children:"Flash Cash"}),"\n",(0,s.jsx)(e.p,{children:"Flash loans - where you borrow a coin for a single transaction - allow for many arbitrage possibilities.."}),"\n",(0,s.jsx)(e.p,{children:"If you want to allow people to use your coins as a flash loan.."}),"\n",(0,s.jsx)(e.p,{children:"How about sending your funds to this address:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"IF SIGNEDBY( PREVSTATE(1) ) THEN RETURN TRUE ENDIF\r\nASSERT SAMESTATE ( 1 1 )\r\nRETURN VERIFYOUT( @INPUT @ADDRESS @AMOUNT*1.01 @TOKENID TRUE )\n"})}),"\n",(0,s.jsx)(e.p,{children:"Again this is a generic contract, so users can spot them on chain - it doesn\u2019t have to be of course you could specify your public key - and have a unique address - but defeats the point as you want users to know this address."}),"\n",(0,s.jsx)(e.p,{children:"When sending funds to this contract, place your public key as state variable 1.."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"This says:"}),(0,s.jsx)("br",{}),"\r\nThe owner - ",(0,s.jsx)(e.code,{children:"PREVSTATE(1)"})," - can cancel at any time..",(0,s.jsx)("br",{}),"\r\nOr you can spend this coin if you send the same Tokens / Minima to the same address with 1% more.. ( AND make sure state 1 == prevstate 1 )"]}),"\n",(0,s.jsx)(e.p,{children:"Simple."}),"\n",(0,s.jsxs)(e.p,{children:["You could even specify the 1% increase as a state variable ( ",(0,s.jsx)(e.code,{children:"@AMOUNT*PREVSTATE(2)"})," ), to make it 0.1% or whatever you would like. Coupled with the exchange contracts, users can borrow coins when they see an opportunity and use them to construct a transaction, as long as they give you back all your coins + 1%, in the same transaction."]})]})}function d(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>i});var s=t(7294);const a={},o=s.createContext(a);function i(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);