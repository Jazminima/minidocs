"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[7367],{9840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var o=n(5893),a=n(1151);const i={sidebar_position:8},s="Hashed Time Lock Contract",r={id:"buildonminima/txntutorial/layer1/hashtimelockcontract",title:"Hashed Time Lock Contract",description:"A VERY powerful variant on the time lock contract and the backbone and basis of the lightning network. This is a contract that has both a time lock and a hash lock. This means you can spend it at a certain time IF you know a secret. The preimage of a hash..",source:"@site/docs/buildonminima/txntutorial/layer1/hashtimelockcontract.md",sourceDirName:"buildonminima/txntutorial/layer1",slug:"/buildonminima/txntutorial/layer1/hashtimelockcontract",permalink:"/docs/buildonminima/txntutorial/layer1/hashtimelockcontract",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/layer1/hashtimelockcontract.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"SlowCash",permalink:"/docs/buildonminima/txntutorial/layer1/slowcash"},next:{title:"Exchange Contract",permalink:"/docs/buildonminima/txntutorial/layer1/exchangecontract"}},c={},h=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"hashed-time-lock-contract",children:"Hashed Time Lock Contract"}),"\n",(0,o.jsx)(t.p,{children:"A VERY powerful variant on the time lock contract and the backbone and basis of the lightning network. This is a contract that has both a time lock and a hash lock. This means you can spend it at a certain time IF you know a secret. The preimage of a hash.."}),"\n",(0,o.jsx)(t.p,{children:"Let\u2019s say you own the coin. And your public key is 0xFF."}),"\n",(0,o.jsx)(t.p,{children:"The other party you are sending the coin to is 0xEE"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"IF @BLOCK GT 1000 AND SIGNEDBY(0xFF) THEN RETURN TRUE\r\nENDIF\r\nRETURN ( SIGNEDBY(0xEE) AND SHA3(STATE(1)) EQ 0x546FCD56E.. )\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"What this does:"}),(0,o.jsx)("br",{}),"\r\nYou can cancel the contract after block 1000 ( you could use @COINAGE ) - but until then only the 0xEE user can claim the funds if they know the secret. They need to know the secret to claim before that."]}),"\n",(0,o.jsx)(t.p,{children:"Also - you will note we have used a state variable!.. This is where the value of the preimage is put."}),"\n",(0,o.jsx)(t.p,{children:"You could use this to perform an atomic cross chain exchange, The same contract would be written by the other party, using the same hash, on a different chain. Then you collect on the other chain, since you know the secret, show the preimage and they can then collect on Minima. Minima also has SHA2 and SHA3 as hash functions for this very purpose."}),"\n",(0,o.jsx)(t.p,{children:"You can use the 'hash' function to hash the data."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"hash data:0xFFEEDD\n"})}),"\n",(0,o.jsx)(t.p,{children:"And use that in your scripts.."}),"\n",(0,o.jsx)(t.p,{children:"One thing of note here.."}),"\n",(0,o.jsx)(t.p,{children:"If you were to use a String for the preimage, so:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'hash data:"this is my secret"\n'})}),"\n",(0,o.jsx)(t.p,{children:"You would get"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"0x1D63D6377EA45E6A5F410FCCED3066B80CA9FB391C346E74948FBB27C7617908\n"})}),"\n",(0,o.jsx)(t.p,{children:"as the hash of the data - the byte representation of the string. Also - this is the SHA3 hash, and you would probably want to use SHA2 or SHA3 for cross chain antics as that is what BTC and ETH support."}),"\n",(0,o.jsx)(t.p,{children:"Now to add this as a state variable you would need to enclose it in square brackets."}),"\n",(0,o.jsx)(t.p,{children:"So.."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'runscript script:"LET preimage=STATE(0) RETURN SHA3(preimage) EQ 0x1D63D6377EA45E6A5F410FCCED3066B80CA9FB391C346E74948FBB27C7617908" state:{"0":"[this is my secret]"}\n'})}),"\n",(0,o.jsx)(t.p,{children:'This is because Strings in KISSVM are enclosed in square brackets.. Not quotes - ".'}),"\n",(0,o.jsx)(t.p,{children:"Another already widely used case is in the Lightning Network on Bitcoin. HTLC contracts work just as well off chain as on chain.. You can set up cascading HTLC contracts that allow for payments to hop through multiple parties."}),"\n",(0,o.jsx)(t.p,{children:"For instance - imagine I have a channel with Bob and Bob has one with Alice. I want to pay Alice. I create an HTLC payment to Bob locked for 12 hours if he knows a secret that only I know. He then creates the same HTLC payment to Alice, locked for 6 hours. I then reveal the secret - give it to Alice, and she collects the payment from Bob. Bob now also knows the secret and collects his payment from me."}),"\n",(0,o.jsx)(t.p,{children:"This can be used in larger groups with more hops, so instead of only being able to pay people you know.. You can pay people who know people who know people you know. A much larger set - in fact at 6 hops you should theoretically be able to pay anyone in the network."})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var o=n(7294);const a={},i=o.createContext(a);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);