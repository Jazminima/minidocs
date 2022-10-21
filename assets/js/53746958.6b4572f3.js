"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[5444],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(t),p=i,d=h["".concat(l,".").concat(p)]||h[p]||m[p]||r;return t?a.createElement(d,o(o({ref:n},u),{},{components:t})):a.createElement(d,o({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1696:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],s={sidebar_position:7},l="HashCash and Burn",c={unversionedId:"learn/minimawhitepaper/hashcashandburn",id:"learn/minimawhitepaper/hashcashandburn",title:"HashCash and Burn",description:"Adam Backs\u2019 HashCash[9] was the first weaponized version of PoW. A Denial-of-Service (DoS) counter-measure first deployed to prevent email spam. Sending millions of emails \u2018costs\u2019 nothing \u2013 hardware, processing, bandwidth, etc. A lone computer sitting on the internet can send millions of emails in almost no time, constantly. HashCash enforced that a PoW payment was included whenever an email was sent. To a single user sending emails every few minutes, this was utterly negligible, a background process that hummed for a few seconds after you press the \u2018Send\u2019 button. But to the spam-machine sitting on the internet trying to send millions of emails, this would require millions of seconds of work, an impossible task.",source:"@site/docs/learn/minimawhitepaper/hashcashandburn.md",sourceDirName:"learn/minimawhitepaper",slug:"/learn/minimawhitepaper/hashcashandburn",permalink:"/docs/learn/minimawhitepaper/hashcashandburn",editUrl:"https://github.com/minima-global/minidocs/docs/learn/minimawhitepaper/hashcashandburn.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"PoW vs Distributed PoW",permalink:"/docs/learn/minimawhitepaper/powvsdistributedpow"},next:{title:"Energy",permalink:"/docs/learn/minimawhitepaper/energy"}},u={},m=[],h={toc:m};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hashcash-and-burn"},"HashCash and Burn"),(0,r.kt)("p",null,"Adam Backs\u2019 HashCash",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/minimawhitepaper/specialthanksto"},"[9]")," was the first weaponized version of PoW. A Denial-of-Service (DoS) counter-measure first deployed to prevent email spam. Sending millions of emails \u2018costs\u2019 nothing \u2013 hardware, processing, bandwidth, etc. A lone computer sitting on the internet can send millions of emails in almost no time, constantly. HashCash enforced that a PoW payment was included whenever an email was sent. To a single user sending emails every few minutes, this was utterly negligible, a background process that hummed for a few seconds after you press the \u2018Send\u2019 button. But to the spam-machine sitting on the internet trying to send millions of emails, this would require millions of seconds of work, an impossible task."),(0,r.kt)("p",null,"Negligible PoW stops DoS. Negligible PoW does not stop DDoS."),(0,r.kt)("p",null,"This email attack is a DoS attack because there is only one machine sending the spam. A DDoS attack, a Distributed DoS attack, is when multiple machines are used. A 50,000 strong bot-net of mobile phones, could each send a message every few seconds. A million messages is now only a few minutes of distributed work.\nTo prevent a distributed spam attack on layer 1 of a decentralized P2P blockchain network a small amount of PoW per message is not enough. Small amounts of PoW, to the individual users, are effectively free. Yes, they pay in power usage on their mobile phone, there is a time delay, but you do not notice it. You do not feel it. To prevent a DDoS attack we need something that is not \u2018free\u2019 to users."),(0,r.kt)("p",null,"On miner-centric chains, this is the fee (which serves multiple purposes). The fee must be paid for a transaction to be valid. 1 million messages now require \u20181 million fees\u2019. The cost of the attack is now prohibitive \u2013 since the attacker must pay this, the bot-net only provides PoW. Should the attacker persist nonetheless, there is an ongoing and non-negligible cost to the attack, that cannot be sustained indefinitely."),(0,r.kt)("p",null,"On Minima this is the Burn (which also serves multiple purposes). A Burn, when the outputs of a transaction sum to less than the inputs, is equivalent to paying every other user a very small fee. Since \u2018burning\u2019 reduces the total number of Minima in circulation, since all coins are created at genesis, those coins that are left are more scarce and therefore more valuable. Unlike fees, the Burn has no minimum. There is no requirement for the total Burn to be large, and able to support the mining industry, that in turn secures the chain. The burn may be high during periods of heavy traffic or spam, and as it rises, traffic will decrease, and the system will self-regulate. The burn can be very low when traffic is at manageable levels as the total amount is not important, only the relative burn amounts in comparison to other transactions."),(0,r.kt)("p",null,"The Burn in Minima serves multiple purposes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A strong incentive to propagate and process a transaction."),(0,r.kt)("li",{parentName:"ul"},"A method for ordering transactions and regulating on-chain traffic."),(0,r.kt)("li",{parentName:"ul"},"A mechanism for spam prevention by making DDoS attacks expensive.")),(0,r.kt)("p",null,"HashCash is totally decentralized. Each user can independently perform the required PoW, by mining their own email, and every other user can independently verify the proof. No third parties are consulted, no miners are paid. Minima is the same, but users mine transactions instead of emails."),(0,r.kt)("p",null,"Constructively, from the maelstrom of transactions fired across the Minima network, a single time-ordered interlocking chain of blocks emerges revealing the complete transaction history."),(0,r.kt)("p",null,"Minima Consensus is driven by HashCash and Burn."))}p.isMDXComponent=!0}}]);