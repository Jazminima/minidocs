"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[5954],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8623:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:3},l="Bi-Directional Channel",c={unversionedId:"buildonminima/txntutorial/layer2/bidirectionalpayment",id:"buildonminima/txntutorial/layer2/bidirectionalpayment",title:"Bi-Directional Channel",description:"We want to start up a two way payment channel with someone. So I can send them Minima and they can send coins back to me.",source:"@site/docs/buildonminima/txntutorial/layer2/bidirectionalpayment.md",sourceDirName:"buildonminima/txntutorial/layer2",slug:"/buildonminima/txntutorial/layer2/bidirectionalpayment",permalink:"/docs/buildonminima/txntutorial/layer2/bidirectionalpayment",editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/layer2/bidirectionalpayment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Uni-Directional Channel",permalink:"/docs/buildonminima/txntutorial/layer2/unidirectionalpayment"},next:{title:"ELTOO Channel",permalink:"/docs/buildonminima/txntutorial/layer2/eltoo"}},h={},u=[],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bi-directional-channel"},"Bi-Directional Channel"),(0,o.kt)("p",null,"We want to start up a two way payment channel with someone. So I can send them Minima and they can send coins back to me."),(0,o.kt)("p",null,"If we use the technique we have just demonstrated then what would happen?"),(0,o.kt)("p",null,"Two (or more) people set up a MultiSig where they send 10 Minima each to the contract. They create a new transaction every time there is an update."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"User1 sends User2 - 3 Minima. They create a new fully signed transaction that pays User1 - 7 Minima and User2 - 13 Minima."),(0,o.kt)("li",{parentName:"ol"},"User2 sends User1 - 1 Minima. They create a new fully signed transaction that pays User1 - 8 Minima and User2 - 12 Minima."),(0,o.kt)("li",{parentName:"ol"},"And so on.."),(0,o.kt)("li",{parentName:"ol"},"When they are finished they post the latest transaction and both collect their funds.")),(0,o.kt)("p",null,"Again - although this seems like it is working.. It is not."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The timelock part of the contract is more complicated. If one side does nothing for 30 days, how do both parties recover their initial 10 Minima funds? It is not as simple as one person spending the funds, trusting that person, what forces them to send back the correct amount to both parties?"),(0,o.kt)("li",{parentName:"ol"},"As before what stops someone posting an earlier transaction - one where they were receiving more funds than they are by the end ? Both parties now have a valid signed transaction whereas before only one party had the complete transaction.")),(0,o.kt)("p",null,"1 - Can be fixed by creating a valid fully signed transaction spending the MultiSig coin BEFORE it is even posted on chain."),(0,o.kt)("p",null,"So as before the 2 players create the MultiSig contract. Then they use a 10 Minima coin each and send 20 Minma to this script in a single transaction. But they do not sign it and they do not post it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"RETURN MULTISIG(2 0xMyKey 0xTheirKey)\n")),(0,o.kt)("p",null,"There is no timelock on this contract. Both parties must sign for the coin to be spent."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Now - some Minima low level info. All transactions reference the coins they use as inputs by their CoinID. This is a globally unique 32 byte value that each coin has. You can construct the coinid for an output coin by hashing the Transaction Hash + The Output number of the coin in the transaction. This means you can know the coinid of a coin before it is posted on chain. This means you can construct a transaction that spends a coin that does not exist yet!"))),(0,o.kt)("p",null,"And this is exactly what we do here.. The 2 parties create a transaction that spends the as-yet-unposted coin, and pays 10 Minima back to both, and they both sign that. Now both parties have a valid fully signed transaction that could be used to spend the MultiSig coin, once it is on chain. Then they both sign the initial transaction and post the full 20 Minima on chain to the MultiSig contract. If one of them should disappear and become unresponsive the other has a transaction that sends all the funds back to them. (This trick will be used more later on.. )"),(0,o.kt)("p",null,"2 - Unfortunately the previous pre-made spend transaction still does nothing to prevent either user sending the transaction in the sequence where they have the most. In fact.. It makes matters worse, since if by the end one of the Users has less than 10 Minima he can use the initial transaction to send the original funds back to everyone, and collect their initial 10 Minima."),(0,o.kt)("p",null,"What we need is some way of ordering the transactions so that only the latest transaction is recognised as the valid one. Some way of ensuring that the latest transaction in the sequence will always be the final outcome of the financial relationship.."),(0,o.kt)("p",null,"Enter ELTOO."))}p.isMDXComponent=!0}}]);