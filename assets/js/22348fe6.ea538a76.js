"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8184],{2872:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(5893),i=t(1151);const r={sidebar_position:2},a="Transactions",c={id:"learn/minima/transactions",title:"Transactions",description:"Transaction Lifecycle",source:"@site/docs/learn/minima/transactions.md",sourceDirName:"learn/minima",slug:"/learn/minima/transactions",permalink:"/docs/learn/minima/transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/learn/minima/transactions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Core Concepts",permalink:"/docs/learn/minima/coreconcepts"},next:{title:"MMR Database",permalink:"/docs/learn/minima/mmrdatabase"}},o={},l=[{value:"Transaction Lifecycle",id:"transaction-lifecycle",level:3},{value:"Structure",id:"structure",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Outputs",id:"outputs",level:3},{value:"State Variables",id:"state-variables",level:3},{value:"Link Hash",id:"link-hash",level:3},{value:"Transaction ID",id:"transaction-id",level:3},{value:"Burn Transactions",id:"burn-transactions",level:2},{value:"Transaction Validity",id:"transaction-validity",level:2}];function d(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"transactions",children:"Transactions"}),"\n",(0,s.jsx)(e.h3,{id:"transaction-lifecycle",children:"Transaction Lifecycle"}),"\n",(0,s.jsxs)(e.p,{children:["The following diagram explains the basic process from a Transaction to ",(0,s.jsx)(e.a,{href:"/docs/learn/minima/txpowunits",children:"TxPoW unit"})," to Block."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"Transactions",src:t(9267).Z+"#gh-light-mode-only",width:"829",height:"1793"}),(0,s.jsx)(e.img,{alt:"Core Concepts",src:t(4650).Z+"#gh-dark-mode-only",width:"829",height:"1793"})]}),"\n",(0,s.jsx)(e.h2,{id:"structure",children:"Structure"}),"\n",(0,s.jsx)(e.p,{children:"All transactions have the following structure:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Inputs"}),"\n",(0,s.jsx)(e.li,{children:"Outputs"}),"\n",(0,s.jsx)(e.li,{children:"State variables"}),"\n",(0,s.jsx)(e.li,{children:"Link hash"}),"\n",(0,s.jsx)(e.li,{children:"Transaction ID"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"inputs",children:"Inputs"}),"\n",(0,s.jsx)(e.p,{children:"Transaction inputs are coins (UTxOs) that will be spent in the transaction, identified by the Coin ID. One or more coins may be required depending on the value of the coins owned by the user and the amount they wish to spend."}),"\n",(0,s.jsx)(e.p,{children:"Example:"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"If a user wishes to spend 100 Minima but they only have two coins worth 40 and 90 Minima, they must use both coins as inputs to the transaction and receive change of 30 as a new coin."})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Each coin is identifiable with a unique CoinID has the following attributes:"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Coin Attribute"}),(0,s.jsx)(e.th,{children:"Description"}),(0,s.jsx)(e.th,{children:"Type"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"CoinID"})}),(0,s.jsx)(e.td,{children:"The globally unique identifier for a coin. The coin id of a new UTxO is hash(first input coin in txn | output_num_in_txn)"}),(0,s.jsx)(e.td,{children:"64 byte hash (MiniData)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Amount"})}),(0,s.jsxs)(e.td,{children:["The amount of 'Minima'. Even custom token transactions are just amounts of coloured Minima (",(0,s.jsx)(e.a,{href:"/docs/learn/minima/colouredcoins",children:"see Coloured Coins"}),")"]}),(0,s.jsx)(e.td,{children:"MiniNumber"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Address"})}),(0,s.jsx)(e.td,{children:"The hash of a script. If no custom script is provided,the script will simply be RETURN(SIGNEDBY([PublicKey of coin owner]) i.e. the  transaction must be signed by the coin owner before it can be spent. All addresses are P2SH (Pay to Script Hash)."}),(0,s.jsx)(e.td,{children:"64 byte hash (MiniData)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Token ID"})}),(0,s.jsx)(e.td,{children:"The Token ID. Minima is 0x00. Everything else has a full 64 byte hash. Tokens are created by colouring Minima."}),(0,s.jsx)(e.td,{children:"64 byte hash (MiniData)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Token"})}),(0,s.jsxs)(e.td,{children:["Token Details (",(0,s.jsx)(e.a,{href:"/docs/learn/minima/colouredcoins",children:"see Coloured Coins"}),")"]}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Floating"})}),(0,s.jsx)(e.td,{children:"True or False. Set when you create a transaction. If True, the Coin ID is ignored so that any valid coin that has the same amount, address and Token ID can be used."}),(0,s.jsx)(e.td,{children:"Boolean"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Store State"})}),(0,s.jsx)(e.td,{children:"True or False, depending on whether the state is stored for this coin"}),(0,s.jsx)(e.td,{children:"Boolean"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"State"})}),(0,s.jsx)(e.td,{children:"The state variables (0-255) of the transaction this coin was created in. You can access this data from scripts."}),(0,s.jsx)(e.td,{children:"Integer"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"MMR Entry"})}),(0,s.jsx)(e.td,{children:"The MMR database entry number for this coin"}),(0,s.jsx)(e.td,{children:"MMREntryNumber"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Spent"})}),(0,s.jsx)(e.td,{children:"True or False, depending on whether this coin has been spent or not."}),(0,s.jsx)(e.td,{children:"Boolean"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Created"})}),(0,s.jsx)(e.td,{children:"The block number this coin was created in."}),(0,s.jsx)(e.td,{children:"Integer"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"Example coin details:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'coins relevant:true\r\n{\r\n  "command":"coins",\r\n  "params":{\r\n    "relevant":"true"\r\n  },\r\n  "status":true,\r\n  "response":[{\r\n    "coinid":"0xB76A17B0444D40A90697FCC7EFFFB1917F7B4AC7FD70D7E70323DC560B6A3CF2",\r\n    "amount":"98",\r\n    "address":"0x0B00C23C8B4DFBDEC76FEE908ADF1BD396A5E92DCC826D3ADD26E4140CFA1DC0",\r\n    "tokenid":"0x00",\r\n    "token":null,\r\n    "floating":false,\r\n    "storestate":true,\r\n    "state":[],\r\n    "mmrentry":"439",\r\n    "spent":false,\r\n    "created":"167764"\r\n  }]\r\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"outputs",children:"Outputs"}),"\n",(0,s.jsx)(e.p,{children:"Transaction outputs are new coins (UTxOs) created as a result of a transaction and include:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Amount to send to recipients:"})," One or more amounts with recipients' addresses specified."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Change to the sender:"})," When the amount being sent is less than the value of the coin inputs, change needs to be returned to the sender's address."]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{title:"burn",type:"note",children:(0,s.jsx)(e.p,{children:"Any difference between inputs and outputs will be burned, reducing the circulating supply of Minima."})}),"\n",(0,s.jsx)(e.h3,{id:"state-variables",children:"State Variables"}),"\n",(0,s.jsx)(e.p,{children:"Transactions include State Variables for storing public data and previous transaction states to retrieve information for scripts."}),"\n",(0,s.jsxs)(e.p,{children:["256 state variables are allowed per transaction, ",(0,s.jsx)(e.a,{href:"/docs/learn/minima/scripting",children:"(see Scripting)"}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"link-hash",children:"Link Hash"}),"\n",(0,s.jsx)(e.p,{children:"Each transaction has an associated Burn transaction, which may or may not have a value."}),"\n",(0,s.jsx)(e.p,{children:"A burn transaction uses the transaction ID of the transaction it relates to, as its link hash."}),"\n",(0,s.jsx)(e.p,{children:"This ensures the burn transaction can only be spent with the transaction it is linked to."}),"\n",(0,s.jsxs)(e.p,{children:["For main transactions, the link hash is set to ",(0,s.jsx)(e.code,{children:"0x00"}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"transaction-id",children:"Transaction ID"}),"\n",(0,s.jsxs)(e.p,{children:["The transaction ID is initially set to ",(0,s.jsx)(e.code,{children:"0x00"})," and is then calculated as the hash of the transaction object, including its inputs, outputs, state variables and linkhash."]}),"\n",(0,s.jsx)(e.h2,{id:"burn-transactions",children:"Burn Transactions"}),"\n",(0,s.jsx)(e.p,{children:"Burn transactions are created automatically and have the following structure compared to a main transaction:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Main transaction structure"})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsx)(e.tr,{children:(0,s.jsxs)(e.th,{style:{textAlign:"left"},children:[(0,s.jsx)(e.strong,{children:"Transaction ID:"})," ",(0,s.jsx)(e.em,{children:"Hash(Transaction object)"})]})})}),(0,s.jsx)(e.tbody,{children:(0,s.jsx)(e.tr,{children:(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,s.jsx)(e.em,{children:"Inputs"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(e.em,{children:"Outputs"}),(0,s.jsx)("br",{}),(0,s.jsx)(e.em,{children:"State Variables (0-255)"}),(0,s.jsx)("br",{}),(0,s.jsx)(e.em,{children:"Linkhash (0x00)"}),(0,s.jsx)("br",{}),(0,s.jsx)(e.em,{children:"Transaction ID"})]})})})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Burn transaction structure (automatically set)"})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsx)(e.tr,{children:(0,s.jsxs)(e.th,{style:{textAlign:"left"},children:[(0,s.jsx)(e.strong,{children:"Transaction ID:"})," ",(0,s.jsx)(e.em,{children:"Hash(Transaction object)"})]})})}),(0,s.jsx)(e.tbody,{children:(0,s.jsx)(e.tr,{children:(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,s.jsx)(e.em,{children:"Inputs (matching the main txn)"}),(0,s.jsx)("br",{}),(0,s.jsx)(e.em,{children:"Output (amount to burn)"}),(0,s.jsx)("br",{}),(0,s.jsx)(e.em,{children:"State Variables (matching the main txn)"}),(0,s.jsx)("br",{}),(0,s.jsx)(e.em,{children:"Linkhash (main txn ID)"}),(0,s.jsx)("br",{}),(0,s.jsx)(e.em,{children:"Transaction ID"})]})})})]}),"\n",(0,s.jsx)(e.h2,{id:"transaction-validity",children:"Transaction Validity"}),"\n",(0,s.jsx)(e.p,{children:"For a transaction to be valid:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"The sum of inputs must be greater than or equal to the sum of the outputs for each Token ID"}),"\n",(0,s.jsx)(e.li,{children:"All inputs and outputs must be valid Minima amounts (between 0-1 billion)"}),"\n",(0,s.jsx)(e.li,{children:"All inputs must have unique coin IDs"}),"\n",(0,s.jsx)(e.li,{children:"It must have no more than 256 state variables"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["When checking the validity of transactions, the ",(0,s.jsx)(e.em,{children:"monotonicity"})," is checked to determine whether a transaction needs to be checked more than once."]}),"\n",(0,s.jsxs)(e.p,{children:["Scripts of ",(0,s.jsx)(e.strong,{children:"Monotonic"})," transactions only need to be checked once i.e. they are either valid or not e.g. a simple RETURN(SIGNEDBY(..))"]}),"\n",(0,s.jsxs)(e.p,{children:["Scripts of ",(0,s.jsx)(e.strong,{children:"Non Monotonic"})," transactions need to be checked multiple times. Any script in a transaction that references global variables @BLOCK, @COINAGE or @CREATED is not monotonic as its validity will change depending on these variables."]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},4650:(n,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/transactionLifecycleSimpleDm-14065b945ba4573822a7485895036fc8.svg"},9267:(n,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/transactionLifecycleSimpleLm-2757b5806ca0d4b5f8c8f6c0253ad43c.svg"},1151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>a});var s=t(7294);const i={},r=s.createContext(i);function a(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);