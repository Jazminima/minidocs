"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[2910],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},h="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),h=p(a),c=r,k=h["".concat(s,".").concat(c)]||h[c]||d[c]||i;return a?n.createElement(k,o(o({ref:e},m),{},{components:a})):n.createElement(k,o({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[h]="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2762:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},o="MMR Database",l={unversionedId:"learn/minima/mmrdatabase",id:"learn/minima/mmrdatabase",title:"MMR Database",description:"Overview",source:"@site/docs/learn/minima/mmrdatabase.md",sourceDirName:"learn/minima",slug:"/learn/minima/mmrdatabase",permalink:"/docs/learn/minima/mmrdatabase",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/learn/minima/mmrdatabase.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Transactions",permalink:"/docs/learn/minima/transactions"},next:{title:"TxPoW Units & Blocks",permalink:"/docs/learn/minima/txpowunits"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"MMR Data",id:"mmr-data",level:2},{value:"Proofs",id:"proofs",level:2},{value:"MMR Sets",id:"mmr-sets",level:2},{value:"Traversing the MMR",id:"traversing-the-mmr",level:2}],m={toc:p},h="wrapper";function d(t){let{components:e,...i}=t;return(0,r.kt)(h,(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mmr-database"},"MMR Database"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"As the blockchain is heavily pruned, users must store proof that their coins are unspent. "),(0,r.kt)("p",null,"This is the role of the Merkle Mountain Range (MMR) Proof database. The MMR is a ",(0,r.kt)("strong",{parentName:"p"},"hash sum tree")," containing the proofs for all Transaction Outputs (TxOs) i.e. coins in the system."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: these coins may be Spent Transaction Outputs (STxOs) or Unspent Transaction Outputs (UTxOs). ")),(0,r.kt)("p",null,"The tree is ",(0,r.kt)("strong",{parentName:"p"},"append-only")," and is updated as coins are spent and created. For each new UTxO created from a transaction output, a new leaf node is created in the MMR. "),(0,r.kt)("p",null,"Coins are hashed in pairs, building up the largest ",(0,r.kt)("strong",{parentName:"p"},"binary tree")," possible until a new tree is required. As new trees are required, they start to look like a range of mountains - giving the MMR its name."),(0,r.kt)("p",null,"When the total number of leaf nodes (Coins/TxOs) are not equal to ",(0,r.kt)("em",{parentName:"p"},"2 ",(0,r.kt)("sup",null,"n")," where n = int{"),"0,...,256",(0,r.kt)("em",{parentName:"p"},"}"),", there will be multiple trees of different heights, creating multiple peak nodes as shown below."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Diagram: Merkle Mountain Range (MMR) with 11 coins (green) and three peaks (blue)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MMR Database",src:a(5762).Z+"#gh-light-mode-only",width:"512",height:"216"}),(0,r.kt)("img",{alt:"MMR Database",src:a(8948).Z+"#gh-dark-mode-only",width:"512",height:"216"})),(0,r.kt)("p",null,"To create a single MMR tree, the peaks must be collected (or \u2018bagged\u2019) starting from left to right. Until a single root hash is found."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Diagram: A complete Merkle Mountain Range (MMR) with three peaks and root")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MMR Database",src:a(8268).Z+"#gh-light-mode-only",width:"512",height:"315"}),(0,r.kt)("img",{alt:"MMR Database",src:a(5316).Z+"#gh-dark-mode-only",width:"512",height:"315"})),(0,r.kt)("p",null,"Each node in the tree will have a globally unique reference to it by combining the row/level it is in and its entry number on the row. Using a hash table to track entries, each node can be identified through a reference ","[R,E]"," where R is the row number and E is the Entry number. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Diagram: A complete MMR with hash table references ","[row, entry number]")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MMR Database",src:a(4441).Z+"#gh-light-mode-only",width:"512",height:"315"}),(0,r.kt)("img",{alt:"MMR Database",src:a(7074).Z+"#gh-dark-mode-only",width:"512",height:"315"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For example, the second coin with entry number 1 will have a reference in the hash table of ","[0,1]"," (Row 0, Entry 1).")),(0,r.kt)("p",null,"The maximum possible number of rows in the MMR is set to 256, using the MAXROWS parameter. With each two new coins, a new parent node is added, therefore the maximum number of coins in the MMR would result in a perfect binary tree with one peak and 2",(0,r.kt)("sup",null,"256")," coins."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2",(0,r.kt)("sup",null,"256")," is the maximum number of coins (UTxOs) that can ever exist in Minima.")," "),(0,r.kt)("admonition",{title:"&nbsp;",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"Using the default parameters of 256 transactions per block, 50 second block times and assuming 3 UTxOs per transaction, it would take")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"5,737,098,536,063,750,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000 years to fill the MMR."))),(0,r.kt)("p",null,"However, users do not store the complete MMR for all the coins in the system, as this would be too burdensome, rather they only store the entries relevant to their own coins which must be provided as CoinProofs in the Transaction Witness when they wish to spend their coins."),(0,r.kt)("admonition",{title:"&nbsp;",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The MMR can be thought of as a book, where all users keep a copy of the spine (root and peaks) and their own page in the book (their CoinProofs). When a user wishes to spend their coins, they provide their page and the spine. Provided their page fits the spine and the spine matches that of the other nodes in the network, the user\u2019s coins can be proved to be valid. ")),(0,r.kt)("h2",{id:"mmr-data"},"MMR Data"),(0,r.kt)("p",null,"Each node in the MMR has unique MMR Data consisting of a hash and a value, defined as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"MMRData Object"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Leaf Nodes - TxOs (Row 0)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Parent Nodes (inc Peaks & Root)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Data (Hash)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hash(coin object)",(0,r.kt)("br",null),"The coin could be spent or unspent."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hash","[",(0,r.kt)("br",null),"Hash(left child data object),",(0,r.kt)("br",null),"Hash(right child data object),value object]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MiniData (32 byte hash)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Minima Value of coin, if",(0,r.kt)("br",null)," unspent,",(0,r.kt)("br",null),"Or 0, if spent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sum of the value of child nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MiniNumber")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Diagram: Example MMR Data for two coins and a parent node in the MMR.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MMR Database",src:a(2221).Z+"#gh-light-mode-only",width:"512",height:"261"}),(0,r.kt)("img",{alt:"MMR Database",src:a(7808).Z+"#gh-dark-mode-only",width:"512",height:"261"})),(0,r.kt)("p",null,"Each entry in an MMR is defined by its attributes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"MMREntry Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Row")),(0,r.kt)("td",{parentName:"tr",align:null},"The hash table row representing its level in the tree (where coins are Level 0)"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Entry Number")),(0,r.kt)("td",{parentName:"tr",align:null},"The index of the Entry on a specific row from left to right, starting from 0"),(0,r.kt)("td",{parentName:"tr",align:null},"MMREntryNumber")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Data")),(0,r.kt)("td",{parentName:"tr",align:null},"The MMR data (Hash and Value) of the entry"),(0,r.kt)("td",{parentName:"tr",align:null},"MMRData")))),(0,r.kt)("h2",{id:"proofs"},"Proofs"),(0,r.kt)("p",null,"When a user wishes to spend their coins, they must provide proof that their coins are unspent by providing a ",(0,r.kt)("strong",{parentName:"p"},"CoinProof")," for each coin they wish to spend. ",(0,r.kt)("strong",{parentName:"p"},"A CoinProof is a list of Proof Chunks")," that any other node can use to independently verify that someone else\u2019s coin exists and is unspent, without having to store the proofs for every coin in the network."),(0,r.kt)("p",null,"Given a CoinProof, any node verifying a transaction can calculate the path (i.e. the intermediate parent hashes), from another user's coin to a peak in the MMR. If the calculated peak hash matches the peak hash from their own MMR, the CoinProof is valid, otherwise the CoinProof and transaction are not valid."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Proof Chunks")," consist of the MMR Data (hash and value) for an MMR entry and a True/False flag indicating whether it is a left sibling or not. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Diagram: Example CoinProof for coin 7 (coin to peak)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MMR Database",src:a(9648).Z+"#gh-light-mode-only",width:"512",height:"356"}),(0,r.kt)("img",{alt:"MMR Database",src:a(4404).Z+"#gh-dark-mode-only",width:"512",height:"356"})),(0,r.kt)("p",null,"The CoinProof for coin 7 consists of the coin and the yellow Proof Chunks, i.e. entries ",(0,r.kt)("strong",{parentName:"p"},"{","[0,6]",",","[0,7]",",","[1,2]",",","[2,0]","}")," , so that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hashing ","[0,6]"," with ","[0,7]"," calculates parent ","[1,3]"),(0,r.kt)("li",{parentName:"ul"},"Hashing ","[1,2]"," with ","[1,3]"," calculates parent ","[2,1]"),(0,r.kt)("li",{parentName:"ul"},"Hashing ","[2,0]"," with ","[2,1]"," calculates peak ","[3,0]")),(0,r.kt)("p",null,"Any node receiving this CoinProof is able to calculate the parents and the peak node, and by comparing it to their own peaks, proving that Coin 7 is valid."),(0,r.kt)("h2",{id:"mmr-sets"},"MMR Sets"),(0,r.kt)("p",null,"When a coin is ",(0,r.kt)("strong",{parentName:"p"},"spent"),", the Spent flag of the coin changes from false to true, changing the hash of the coin."),(0,r.kt)("p",null,"When a new coin is ",(0,r.kt)("strong",{parentName:"p"},"created")," (as an output to a transaction), a new coin is added as a leaf node to the tree."),(0,r.kt)("p",null,"In both cases, the intermediate parent nodes, peaks and root will need to be calculated for the new hash of the coin. Therefore the CoinProofs for all coins in the system change with each new block and it is therefore essential for users to keep up to date with the latest block. "),(0,r.kt)("p",null,"Each block contains an ",(0,r.kt)("strong",{parentName:"p"},"MMR Set")," containing updated and new MMR Entries for all the spent and new coins of the main transaction in the block. "),(0,r.kt)("p",null,"Each block has its own set of MMR entries with the following attributes: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"MMR Attribute"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Block Time")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The blocktime for the MMR set"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MiniNumber")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Elen")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many entries in this MMR set"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MiniNumber")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Entry Number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The latest entry number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MMREntryNumber")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Set Entries")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("strong",{parentName:"td"},"hash table")," elements for all the MMR Entries in this set.",(0,r.kt)("br",null),"HashTable<0,1> is the entry on Row 0, Entry index 1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enumeration of MMR Entries")))),(0,r.kt)("h2",{id:"traversing-the-mmr"},"Traversing the MMR"),(0,r.kt)("p",null,"Starting from any node in the MMR, we can navigate through it as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Operation"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Row Operation"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Entry Number Operation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Right Sibling"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Left Sibling"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Minus 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Parent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add 1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Divide by 2, Round down to nearest integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Left Child"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Minus 1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Multiply by 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Right Child"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Minus 1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Multiply by 2, Add 1")))),(0,r.kt)("p",null,"Separate MMRs are also used to store Signature Proofs and Script Proofs."))}d.isMDXComponent=!0},8948:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mMRDatabase1Dm-8f2cdf2818a5d6f9d8f48de6d890aa87.svg"},5762:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mMRDatabase1Lm-b9e040404f972c4fa47448fade2c4950.svg"},5316:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mMRDatabase2Dm-d25ba25d2fc83b6dd3b1cd3af931a672.svg"},8268:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mMRDatabase2Lm-b7da3906a8267abd476b04cbc6ab0610.svg"},7074:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mMRDatabase3Dm-b172552a9b6a7df26f7cb9d9c739c83e.svg"},4441:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mMRDatabase3Lm-701bd67d8cd672cce7b4515c2d80a778.svg"},7808:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mMRDatabase4Dm-586a74261fe89a03a525ac7c7ddd747f.svg"},2221:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mMRDatabase4Lm-1bac5bfb295fae0f6d042ea7456155a1.svg"},4404:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mMRDatabase5Dm-3c6114e28e8123d2772dffbb01d69502.svg"},9648:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mMRDatabase5Lm-0c09900fe9ff690460b67876750c04f0.svg"}}]);