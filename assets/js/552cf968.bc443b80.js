"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[723],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,m=u["".concat(l,".").concat(c)]||u[c]||h[c]||i;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2410:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return h}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],o={sidebar_position:8},l="Keys and Digital Signatures",d={unversionedId:"learn/minima/keysandsignatures",id:"learn/minima/keysandsignatures",title:"Keys and Digital Signatures",description:"Public-Private key pairs, combined with digital signatures, provide the mechanism required to hold coins securely and to independently prove ownership of them. Keys are held and controlled by a user\u2019s wallet.",source:"@site/docs/learn/minima/keysandsignatures.md",sourceDirName:"learn/minima",slug:"/learn/minima/keysandsignatures",permalink:"/docs/learn/minima/keysandsignatures",editUrl:"https://github.com/minima-global/minidocs/docs/learn/minima/keysandsignatures.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Coloured Coins",permalink:"/docs/learn/minima/colouredcoins"},next:{title:"Scripting",permalink:"/docs/learn/minima/scripting"}},p={},h=[{value:"Generating Public-Private Key Pairs",id:"generating-public-private-key-pairs",level:2},{value:"Digital Signature Schemes",id:"digital-signature-schemes",level:2},{value:"Merkle Signature Scheme",id:"merkle-signature-scheme",level:3},{value:"Trees of Keys",id:"trees-of-keys",level:2},{value:"Constructing a Tree of Trees",id:"constructing-a-tree-of-trees",level:2},{value:"Public Keys, Scripts and Addresses in Minima",id:"public-keys-scripts-and-addresses-in-minima",level:2},{value:"Signature Generation",id:"signature-generation",level:2}],u={toc:h};function c(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keys-and-digital-signatures"},"Keys and Digital Signatures"),(0,i.kt)("p",null,"Public-Private key pairs, combined with digital signatures, provide the mechanism required to hold coins securely and to independently prove ownership of them. Keys are held and controlled by a user\u2019s wallet."),(0,i.kt)("p",null,"A private key is intended to be known only to the owner of the coins, whereas the corresponding public key can be shared without risk of compromising the coins and is used to receive funds which then become secured by the associated private key."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can think of a public key as being your bank account number and the private key as your PIN number."))),(0,i.kt)("h2",{id:"generating-public-private-key-pairs"},"Generating Public-Private Key Pairs"),(0,i.kt)("p",null,"An essential property of Public-Private key pairs is that the private key should not be deducible from the public key. Various cryptographic algorithms are available for generating a public key from a private key, for example RSA or Elliptic Curve Cryptography. These are one-way functions which, using complex mathematics, ensure that the private key cannot be deduced from the public key."),(0,i.kt)("h2",{id:"digital-signature-schemes"},"Digital Signature Schemes"),(0,i.kt)("p",null,"Using a public-private key pair and a digital signature scheme, a user can digitally \u2018sign\u2019 some data e.g. a transaction, with their private key to create an unforgeable digital signature. Digital signatures are generated by applying the algorithm of the signature scheme to the private key and some data. Anyone can independently verify the validity of a signature knowing the user\u2019s public key, the data, and the check algorithm of the digital signature scheme."),(0,i.kt)("p",null,"Minima uses the ",(0,i.kt)("strong",{parentName:"p"},"Winternitz One-Time Signature Scheme (WOTSS)")," as its digital signature scheme which applies one algorithm for generating public keys from a private seed and another to compute a digital signature, with a given piece of data to be signed.\n",(0,i.kt)("strong",{parentName:"p"},"Winternitz is considered to be Quantum-resistant. ")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Not all Digital Signature Schemes are considered Quantum-resistant, for example RSA and Elliptic Curve Digital Signature Algorithm (ECDSA), used in Bitcoin and Ethereum. In the 90\u2019s, Shor published a Quantum algorithm which could be used to break these schemes, rendering them vulnerable to attack from Quantum-based computers in the future."))),(0,i.kt)("h3",{id:"merkle-signature-scheme"},"Merkle Signature Scheme"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Merkle Signature Scheme (MSS)"),", originally proposed by Ralph Merkle in the 70\u2019s, combines a Quantum-resistant, hash-based, but ",(0,i.kt)("strong",{parentName:"p"},"one-time-use"),", digital signature scheme with hash trees. "),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"one-time-use signature scheme")," means that each public-private key pair can only be used once, securely, to sign some data. Reusing the same key pair for multiple signatures increases the chances of the private key being deduced. To mitigate this inconvenience, many single-use key pairs can be stored as leaf nodes in a hash tree, with the root hash of the tree used as a ",(0,i.kt)("strong",{parentName:"p"},"multiple-use root public key.")),(0,i.kt)("p",null,"Minima uses a Merkle Signature Scheme by combining the ",(0,i.kt)("strong",{parentName:"p"},"Winternitz One Time Signature Scheme (WOTSS) with Merkle Mountain Range (MMR) hash trees.")," Winternitz is used to generate private/public key pairs and signatures which are stored as leaf nodes in an MMR, creating a Tree of Keys."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The cryptographic hash function used in Minima\u2019s implementation of the Merkle Signature Scheme is ",(0,i.kt)("strong",{parentName:"p"},"SHA3-256"),", which is considered Quantum-resistant. It takes an input message and produces a 256-bit message digest, from which the input message cannot be determined."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Minima also uses MMR trees for storing a user\u2019s coins. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/minima/mmrdatabase"},"MMR"),"."))),(0,i.kt)("h2",{id:"trees-of-keys"},"Trees of Keys"),(0,i.kt)("p",null,"A Tree of Keys enables a user to have many ",(0,i.kt)("strong",{parentName:"p"},"secure but one-time-use private keys")," all associated with the same root public key. This is useful because it allows a user to share a single public key for receiving funds but to sign each transaction with a different private key, ensuring maximum security."),(0,i.kt)("p",null,"This ",(0,i.kt)("strong",{parentName:"p"},"root public key")," can be used securely, the same number of times as there are private keys associated with it, i.e. the number of leaf nodes in the tree. By signing with a different private key for each transaction, and presenting a proof path with the signature which indicates the path through the MMR tree from the private key to the tree root, any external party can validate that the signature was generated by the rightful owner of the funds."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example of a single Tree of Keys")),(0,i.kt)("p",null,"A TreeKeyNode is a single MMR Tree with (a default) 64 single-use Winternitz public-private key pairs and a Root public key "),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Keys and Digital Signatures",src:a(8117).Z+"#gh-light-mode-only",width:"1112",height:"514"}),(0,i.kt)("img",{loading:"lazy",alt:"Keys and Digital Signatures",src:a(7854).Z+"#gh-dark-mode-only",width:"1112",height:"514"})),(0,i.kt)("p",null,"Each leaf node (Winternitz Key Pair & Signature) is generated using:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"a private seed")," - this is generated by concatenating  a number from 0-63 with the private seed of this TreeKeyNode. i.e. Hash(i, PrivateSeed) for i = 0-63."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"a hash function with specified digest size")," - Minima uses the SHA3 hash function with a 256 bit digest."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"a chosen Winternitz parameter")," - Minima uses a Winternitz parameter of 8.")),(0,i.kt)("p",null,"To find out more about Winternitz security, see ",(0,i.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2011/191.pdf"},"https://eprint.iacr.org/2011/191.pdf")),(0,i.kt)("p",null,"Therefore each leaf node corresponds to a Winternitz Key Pair and Signature:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"WOT Signature Scheme"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"WOTS Private Key"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Single use Winternitz private key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"WOTS Public Key"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Single use Winternitz public key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"WOTS Signature"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The one-time signature (of a given message/transaction) generated with the private key")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example TreeKeyNode with just 4 leaf nodes:")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Keys and Digital Signatures",src:a(9256).Z+"#gh-light-mode-only",width:"741",height:"564"}),(0,i.kt)("img",{loading:"lazy",alt:"Keys and Digital Signatures",src:a(7308).Z+"#gh-dark-mode-only",width:"741",height:"564"})),(0,i.kt)("p",null,"Once all 64 keys are generated, the root hash can be calculated. Clearly a public key which can only be used securely 64 times would not be sufficient. To get more uses from a single root public key, there needs to be more keys (leaf nodes). However,  the more Winternitz keys that exist, the longer it takes to generate them and the longer it takes to generate the root hash i.e. the root public key."),(0,i.kt)("p",null,"In order to efficiently scale the number of uses possible for a root public key, instead of simply generating a single large Tree of Keys with hundreds of thousands of leaf nodes, Minima constructs a ",(0,i.kt)("strong",{parentName:"p"},"Tree of Trees")," with multiple levels and a single top root. "),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Tree of Trees")," consists of (a default) 3 levels where the root of all level 2 and 3 trees are signed by a Winternitz key pair in the level above (as shown below).  The level 3 trees contain the Winternitz keys which are used to sign transactions."),(0,i.kt)("p",null,"Each individual Tree in Level 2 is connected to a leaf node key on Level 1 and will have its own ",(0,i.kt)("strong",{parentName:"p"},"private seed"),",  generated by hashing the Level 1 key number (0-63) with its private key. Likewise, each Level 3 tree is connected to a key from a Level 2 tree.  "),(0,i.kt)("p",null,"The private keys from level 1 and 2 are used to sign the root hash of the level 2 and 3 trees respectively, creating a Tree of Key Trees, connected through signatures. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Diagram showing a full Tree of Trees (with default 3 levels & 64 keys/tree)")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Keys and Digital Signatures",src:a(1162).Z+"#gh-light-mode-only",width:"1141",height:"1204"}),(0,i.kt)("img",{loading:"lazy",alt:"Keys and Digital Signatures",src:a(6).Z+"#gh-dark-mode-only",width:"1141",height:"1204"})),(0,i.kt)("p",null,"With each individual MMR tree containing 64 keys as leaf nodes; adding a second level of MMR trees provides 64",(0,i.kt)("sup",null,"2")," WOTS public-private key pairs."),(0,i.kt)("p",null,"The MMR tree grows logarithmically, with n levels providing a maximum of 64",(0,i.kt)("sup",null,"n")," one-time-use key pairs for the user to sign transactions with."),(0,i.kt)("p",null,"Minima uses a default 3 levels, providing a total of 64",(0,i.kt)("sup",null,"3"),"  = 262144 one-time-use keys."),(0,i.kt)("p",null,"The advantage of a \u2018tree of trees\u2019 over a single large tree is that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user's ",(0,i.kt)("strong",{parentName:"li"},"root public key")," is calculated efficiently - only requiring the top (level 1) tree to be generated; "),(0,i.kt)("li",{parentName:"ul"},"Each level of trees is connected via digital signatures which can be independently verified"),(0,i.kt)("li",{parentName:"ul"},"Each level 3 tree can be added on demand as the user requires more private keys for signing transactions. ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Single Tree (TreeKeyNode) properties")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"TreeKeyNode Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Size"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of leaf nodes in this MMR Tree. Default is 64."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Tree"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The MMR Tree structure of this TreeKeyNode"),(0,i.kt)("td",{parentName:"tr",align:"left"},"MMR")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Children"),(0,i.kt)("td",{parentName:"tr",align:"left"},"An array of the child Trees belonging to this Tree (default 64 for each level 1 and 2 tree, 0 for level 3 trees)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"TreeKeyNode array")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Keys"),(0,i.kt)("td",{parentName:"tr",align:"left"},"An array of the Winternitz Keys added as leaf nodes to this Tree (default 64)."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Winternitz Keys array")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ChildSeed"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The hash of the Private Seed that was used to generate this Tree i.e. Hash(PrivateSeed). This child seed will be used as the base to generate the private seeds for each child Tree (for level 1 & 2 trees only)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"MiniData")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"PublicKey"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The root hash of the tree. If this tree is Level 1, this will be the user\u2019s root public key."),(0,i.kt)("td",{parentName:"tr",align:"left"},"MiniData")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ParentChildSig"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The signature generated when the parent tree signed the root of this Tree (levels 2 and 3 only)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Signature Proof")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tree of Trees (TreeKey) properties")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"TreeKey Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Root"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The top tree of this tree of trees, generated from the user\u2019s Base Private Seed."),(0,i.kt)("td",{parentName:"tr",align:"left"},"TreeKeyNode")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Levels"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of levels of trees in this tree of trees (default 3)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"KeysPerLevel"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of keys per single tree (default 64)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Uses"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of times the root public key has been used"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Max Uses"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The maximum number of uses = (Keys/level)",(0,i.kt)("sup",null,"number of levels"),". Default is 64",(0,i.kt)("sup",null,"3"),"."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"PrivateSeed"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The PrivateSeed used to generate all the trees in this TreeKey."),(0,i.kt)("td",{parentName:"tr",align:"left"},"MiniData")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Public Key"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The root hash from the root tree."),(0,i.kt)("td",{parentName:"tr",align:"left"},"MiniData")))),(0,i.kt)("p",null,"Each TreeKey requires a private seed from which all the leaf node private keys are generated. This is covered in more detail next.  "),(0,i.kt)("h2",{id:"constructing-a-tree-of-trees"},"Constructing a Tree of Trees"),(0,i.kt)("p",null,"On creation of a new Minima node, a 32 byte ",(0,i.kt)("strong",{parentName:"p"},"Base Private Seed")," is created using a Pseudo Random Number Generator (PRNG).\nFrom this base private seed, further private seeds are generated by combining it with a ",(0,i.kt)("strong",{parentName:"p"},"modifier")," (another 32 byte random number)."),(0,i.kt)("p",null,"Each of these ",(0,i.kt)("strong",{parentName:"p"},"modified private seeds")," is used to create a Tree of Trees, the root of which becomes one of the user\u2019s multiple-use root public keys."),(0,i.kt)("p",null,"Executing the ",(0,i.kt)("strong",{parentName:"p"},"keys")," command shows us the ",(0,i.kt)("strong",{parentName:"p"},"root keys")," that have been created:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'keys\n{\n  "command":"keys",\n  "status":true,\n  "response":[{\n    "size":64,\n    "depth":3,\n    "uses":0,\n    "maxuses":262144,\n"modifier":"0x02984CB232D0C003F6681980689F45BA255522131882E1530D393518401A6CF8",\n"publickey":"0x9F9FBFD83D999D952BE4A6538252043987F3937F3BBC361F00D5AE708EF1A105",\n"privatekey":"0x28AF0DD826C1D49A74F6533920AFBCE5D2044AA822591B389E4A4518C483E672"\n  },\n')),(0,i.kt)("h2",{id:"public-keys-scripts-and-addresses-in-minima"},"Public Keys, Scripts and Addresses in Minima"),(0,i.kt)("p",null,"All 0x addresses in Minima, which can be shared publicly to receive funds, are ",(0,i.kt)("strong",{parentName:"p"},"Pay-to-Script-Hash (P2SH)"),". This means that all funds are sent to the hash of a script.\nA ",(0,i.kt)("strong",{parentName:"p"},"Script")," is a series of instructions which are executed when a transaction is validated and added to a block. A transaction is only valid if the script returns a value of TRUE."),(0,i.kt)("p",null,"Every user has a set of default addresses, and hence scripts. For each of their root public keys, there is an associated default script - ",(0,i.kt)("strong",{parentName:"p"},"RETURN(SIGNEDBY(RootPublicKey))"),", the hash of which is an address of the user which can be used to receive funds. "),(0,i.kt)("p",null,"Whenever a user receives funds to a specific address, a new coin is created containing that script, which must return a value of TRUE at the time of being spent in a transaction. This script will only return TRUE if the rightful owner of the coin has signed the transaction with one of the private keys for the given root public key - the one in the script - else it will return FALSE."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),(0,i.kt)("br",null),"\nWhen Alice sends funds to Bob\u2019s address, she is actually locking those funds into a new coin with a script which says RETURN(SIGNEDBY(Bob\u2019sPublicKey)). This coin can only be spent when a transaction, containing this coin as an input, is signed with a single-use private key of Bob\u2019sPublicKey. ",(0,i.kt)("br",null),"\nAssuming Bob is the only one holding his private keys, Bob is the only person who can spend this coin."),(0,i.kt)("h2",{id:"signature-generation"},"Signature Generation"),(0,i.kt)("p",null,"When choosing to sign a transaction with the root public key, the user must not only provide the ",(0,i.kt)("strong",{parentName:"p"},"WOT signature")," of the transaction, but also the ",(0,i.kt)("strong",{parentName:"p"},"Parent-Child signatures")," that connect the multiple levels of the tree, and the proof path from leaf node to root for each level. This provides the full path from the transaction signature to the root public key, which can be then validated by any other user in the network. "),(0,i.kt)("p",null,"A full signature, required for the transaction ",(0,i.kt)("strong",{parentName:"p"},"Witness")," therefore includes a list of ",(0,i.kt)("strong",{parentName:"p"},"MMR Proof paths")," and ",(0,i.kt)("strong",{parentName:"p"},"signatures")," from the bottom of the tree of trees, to the root public key at the top."),(0,i.kt)("p",null,"For example, a full signature proof in a transaction Witness would consist of:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"MMR Proof path from the root public key to a Level 1 Winternitz key leaf node",(0,i.kt)("br",null),"\nwith the ",(0,i.kt)("strong",{parentName:"p"},"ParentChildSignature connecting Level 1 to 2")," (as a result of using a level 1 key to sign a Level 2 root)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"MMR Proof path from the root of the first Level 2 tree to a Level 2 Winternitz key leaf node",(0,i.kt)("br",null),"\nwith the ",(0,i.kt)("strong",{parentName:"p"},"ParentChildSignature from Level 2 to 3")," (as a result of using a level 2 key to sign a Level 3 root)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"MMR Proof path from the root of a Level 3 tree to a Level 3 Winternitz key leaf node",(0,i.kt)("br",null),"\nwith the ",(0,i.kt)("strong",{parentName:"p"},"Signature of the transaction")," (as a result of using a level 3 key to sign the transaction)"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only the final signature is the signature generated from signing the transaction, the preceding signatures are the Parent-Child signatures that connect the multiple tree levels."))),(0,i.kt)("p",null,"To learn more about MMR proofs, see the section on ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/minima/mmrdatabase"},"MMR Database"),"."),(0,i.kt)("p",null,"The serialised data for each  MMR Signature Proof consists of:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Signature Proof Attribute"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Public Key"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Winternitz public key of the leaf node"),(0,i.kt)("td",{parentName:"tr",align:"left"},"64 byte hash (MiniData)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Proof"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A list of Proof Chunks (nodes in the MMR tree) which provide the path from leaf node to the root of the tree."),(0,i.kt)("td",{parentName:"tr",align:"left"},"MMR Proof")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Winternitz Signature"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A Winternitz Signature from signing either a child MMR key tree or some data e.g. a transaction"),(0,i.kt)("td",{parentName:"tr",align:"left"},"64 byte hash (MiniData)")))),(0,i.kt)("p",null,"In a transaction Witness, each Signature Proof also shows a root key which is the root hash of either the Level 1, 2 or 3 tree, where the Level 1 root hash is a multiple use root public key of the user."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example of a full signature for a transaction:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"signatures":[{\n          "signatures":[\n\n        {"publickey":"0xE574DE48114CE0C8B73B40BBA9069EE354C227EC0965123B458D2CB24EFD6A83",      "rootkey":"0xF9C0872B59932D11434CF3CCB23EDA1F7F189AC4438AD1D00AF94D7C28B6275B",\n            "proof":{\n              "blocktime":"0",\n              "proof":[{\n                "left":false,\n                "data":{\n                  "data":"0x51761AF1E1BD225EAED96916AC1317B9F47315B5155156B681B5DAA4B65EB699",\n                  "value":"0"}},\n            {"left":false,\n                "data":{                  "data":"0x6F612A1F62206489CF6F00C3B6424C2D54E02B72C11763E21EC0E0C3D85161B8",\n                  "value":"0"}},\n            {"left":false,\n                "data":{                  "data":"0x2E999787BFA586571880580CD7B99C748F18900D1CD207C9AC9538A30207285B",\n                  "value":"0"}},\n            {"left":false,\n                "data":{                  "data":"0xD36DBD6C4E23A75B55AFB813EF067CA25A661C8AB82F5288BD0D0B2DCF0CA140",\n                  "value":"0"}},\n            {"left":false,\n                "data":{                  "data":"0x4DDC92942DBCCBBC1C026ADC92715F8A021F16E6FE35810AAD30D6E698980E3D",\n                  "value":"0"}},\n            {"left":false,\n                "data":{                  "data":"0x840F1A656596F02F1B787605E131AA1E3CF93DE618FFFC0EB03DDF301E861741",\n                  "value":"0"}}],\n              "prooflength":6},\n            "signature":"0x\u2026"},\n\n        {"publickey":"0xC14C2C8B35E55A2DF25EA0BA8A528BEEF8BD3FE688885B176BEBB8E8D95FAE67",           "rootkey":"0x707BE4E4F280CC96F5972F66FCDFCFC78356ACD548EF74513E24257FFED8DE6C",\n            "proof":{\n              "blocktime":"0",\n            "proof":[{\n                "left":false,\n                "data":{                  "data":"0x4F13DDDA0847150B2427C8E477908C790C5E001378816041CB550185303B9319",\n                  "value":"0"}},\n            {"left":false,\n                "data":{                "data":"0xE3B4F5B1ADB6F71974C13AADDE8C26FAC61F6C0DAD76BA9C316740DA1B5480B2",\n                  "value":"0"}},\n            {"left":false,\n                "data":{                  "data":"0xE0B0051ED7B743EE466BF96D554B629B21A1588E09A18E6D2D02DBC77F26D473",\n                  "value":"0"}},\n            {"left":false,\n                "data":{                  "data":"0xD42055AFA35C85B98C92F1734956857816EB67BB4C16AEB12CFF3EDD0BC2488A",\n                  "value":"0"}},\n            {"left":false,\n                "data":{                  "data":"0xF1F986238938A8F82FD393E70F9226959FF115D3A4DC2AC7E13E40A58565B0E7",\n                  "value":"0"}},\n            {"left":false,\n                "data":{              "data":"0x1029171D8035E7461C5367987A6096A832F56C7558E6E859088718FC321F8DFA",                  "value":"0"}\n            }],\n              "prooflength":6},\n            "signature":"0x\u2026"}, \n\n            {"publickey":"0xA54B6673D6A890444A90EFBE64FBD8576D59E144BB7166DA83109C9C32CF93B2",            "rootkey":"0x15DF8CEA59E66D31762DB7F8D3A972CFF55F0E8DA25CA9C4222AAF93BBD7A31E",\n            "proof":{\n              "blocktime":"0",\n              "proof":[{\n                "left":false,\n                "data":{                  "data":"0x6E2A8A0201D45E5B21003FA39FC32CF78755028F670687145DF365788AB83BEF",\n                  "value":"0"}},\n            {"left":false,\n                "data":{                  "data":"0xB9975A60B1187FFDF8C5F82DE910D47186DBB72A3CB478CB6BE168AD5FCD6AFD",\n                  "value":"0"}},\n            {"left":false,\n                "data":{                  "data":"0x07197775FA938D76A4252E2DD010E4C6145DCBE4EFD362E68DBDE79745563853",\n                  "value":"0"}},\n            {"left":false,\n                "data":{                  "data":"0x2C923B177B0417AF1E9A89858980D544CC065004F361B1BE395EC60DF674781F",\n                  "value":"0"}},\n            {"left":false,\n                "data":{                  "data":"0x235B875C4E2A48248DE06079613724D982A96069AE86ADD26F772AC192DDC5A2",\n                  "value":"0"}},\n            {"left":false,\n                "data":{                  "data":"0x9B90AD45CAEC23926163E65CC838207CDE1D48B990602E8F4AF060116BBEDA36",\n                  "value":"0"}}],\n              "prooflength":6\n            },\n            "signature":"0x\u2026."  }\n            ]\n            }],\n')))}c.isMDXComponent=!0},7854:function(e,t,a){t.Z=a.p+"assets/images/PubPrivKeyDigSig_02_DM-6e9e8095cbba9f1e784c2b0ddca8e7f7.svg"},8117:function(e,t,a){t.Z=a.p+"assets/images/PubPrivKeyDigSig_02_LM-1cb860effd14ab0953fa8cda5f68a95c.svg"},6:function(e,t,a){t.Z=a.p+"assets/images/PubPrivKeyDigSig_03_DM-412bc84f757dc4bba3f73e689a0e7620.svg"},1162:function(e,t,a){t.Z=a.p+"assets/images/PubPrivKeyDigSig_03_LM-11c79d18042334a666026d39abdb5846.svg"},7308:function(e,t,a){t.Z=a.p+"assets/images/Single_Key_Tree-04Dm-facc34989aed083431061bb1c702960b.svg"},9256:function(e,t,a){t.Z=a.p+"assets/images/Single_Key_Tree-04Lm-bb5a5ed2664e7952b8602288fe0e17bd.svg"}}]);