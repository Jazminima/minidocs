"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[9050],{1548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(5893),i=t(1151);const r={sidebar_position:11},s="Smart Contracts, Tokens and Transactions",o={id:"learn/minimawhitepaper/smartcontractstokensandtransactions",title:"Smart Contracts, Tokens and Transactions",description:"Minima operates a validatory network, like Bitcoin, rather than a computational network, like Ethereum[18]. Computational networks require far greater resources to operate than validatory networks. In fact, the computational resources required far exceed those available to the majority of network participants, hence these networks centralize around larger more powerful nodes. Minima must allow everyone to run a Complete node.",source:"@site/docs/learn/minimawhitepaper/smartcontractstokensandtransactions.md",sourceDirName:"learn/minimawhitepaper",slug:"/learn/minimawhitepaper/smartcontractstokensandtransactions",permalink:"/docs/learn/minimawhitepaper/smartcontractstokensandtransactions",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/learn/minimawhitepaper/smartcontractstokensandtransactions.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Storage-less MMR UTXO",permalink:"/docs/learn/minimawhitepaper/storagelessmmrutxo"},next:{title:"Quantum Secure",permalink:"/docs/learn/minimawhitepaper/quantumsecure"}},c={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"smart-contracts-tokens-and-transactions",children:"Smart Contracts, Tokens and Transactions"}),"\n",(0,a.jsxs)(n.p,{children:["Minima operates a validatory network, like Bitcoin, rather than a computational network, like Ethereum",(0,a.jsx)(n.a,{href:"/docs/learn/minimawhitepaper/specialthanksto",children:"[18]"}),". Computational networks require far greater resources to operate than validatory networks. In fact, the computational resources required far exceed those available to the majority of network participants, hence these networks centralize around larger more powerful nodes. Minima must allow everyone to run a Complete node."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Validation is the minimum amount of useful computation."}),"\n",(0,a.jsx)(n.li,{children:"Logic can be computed off-chain and validated on-chain."}),"\n",(0,a.jsx)(n.li,{children:"Everyone computing or validating everything does not scale."}),"\n",(0,a.jsx)(n.li,{children:"Everyone validating a manageable amount on-chain to enable near-limitless capacity off-chain does scale."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Unlike Bitcoin, Minima natively supports Tokens. Unlike Ethereum, no efficiency is sacrificed when processing tokens. As far as the network is concerned, token transactions are the same as Minima transactions, are stored in the MMR Proof DB and do not increase storage requirements. You prove their existence like you prove your Minima holdings. Tokens can be created by colouring a certain fractional amount of Minima. All scripts applicable to Minima are equally applicable to Tokens."}),"\n",(0,a.jsx)(n.p,{children:"Transactions on Minima are similar to Bitcoin transactions, yet upgraded in functionality and power. They include a list of inputs, a list of outputs, and some data registers for storing custom data. The sum of the outputs must be less than or equal to the sum of the inputs. Each input has an Address, Amount, TokenID, CoinID and can have various user-defined parameters. Each address is actually a Smart Contract, represented as the hash of a Minima Script. This entire transaction can then be signed by 1 or more Public Keys. When sending a transaction, a user adds the MMR proofs showing that the inputs exist and are unspent, spends ~10 seconds mining, before sending the complete Tx-PoW message across the network. Each transaction is a self contained cryptographic unit that can be verified independently with just the recent MMR root hash found in memory. Very fast and efficient."}),"\n",(0,a.jsx)(n.p,{children:"Minima uses a simple yet powerful scripting language. A script will return TRUE or FALSE as to whether an output can or cannot be spent. An empty script returns FALSE."}),"\n",(0,a.jsx)(n.p,{children:"A standard transaction:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"RETURN SIGNEDBY ( 0xEFDC56DCA87F )\n"})}),"\n",(0,a.jsx)(n.p,{children:"An HTLC (Hashed Time Locked Contract) :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"IF @BLOCK GT 102453 AND SIGNEDBY ( 0xEFDC56DCA87F ) THEN\r\n                RETURN TRUE\r\nELSEIF SIGNEDBY ( 0x12345678 ) AND SHA3 ( STATE(0) ) EQ 0x87654321 THEN\r\n                RETURN TRUE\r\nENDIF\n"})}),"\n",(0,a.jsx)(n.p,{children:"Many powerful functions including :"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"MAST"})," \u2013 Merklized Abstract Syntax Tree, large scripts with short execution paths.."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"VERIFYOUTPUT"})," \u2013 check transaction Outputs, Covenants.."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"VERIFYINPUT"})," \u2013  check input data, complex multi-token scripts, Dividend payouts.."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"ADDRESS"})," \u2013  create scripts in script. Recursive Covenants, Vault addresses.."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"CHECKSIG"})," \u2013 check a signature in script, Oracles.."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"PROOF"})," \u2013 Efficient Merkle proof checking.."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Minima also includes simple state variables per transaction, accessible to input scripts, so that a sequence of transactions can occur whilst keeping track of changing variables. This allows for more complex \u2018stateful\u2019 smart contracts, like Ethereum, whilst maintaining and even increasing the speed and efficiency of Bitcoins\u2019 UTXO model transactions."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var a=t(7294);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);