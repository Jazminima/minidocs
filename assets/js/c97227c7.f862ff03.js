"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[9225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(k,i(i({ref:t},p),{},{components:n})):o.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:4},i="Log Messages",s={unversionedId:"userguides/usingyournode/logs",id:"userguides/usingyournode/logs",title:"Log Messages",description:"The logs for your node are an audit of the recent events and processes occurring on your node.",source:"@site/docs/userguides/usingyournode/logs.md",sourceDirName:"userguides/usingyournode",slug:"/userguides/usingyournode/logs",permalink:"/docs/userguides/usingyournode/logs",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/userguides/usingyournode/logs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Managing MiniDapps",permalink:"/docs/userguides/usingyournode/managingdapps"},next:{title:"Terminal Commands",permalink:"/docs/userguides/usingyournode/terminal_commands"}},l={},c=[{value:"Minima connection logs",id:"minima-connection-logs",level:2},{value:"Chain logs",id:"chain-logs",level:2},{value:"Maxima logs",id:"maxima-logs",level:2},{value:"Script logs",id:"script-logs",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"log-messages"},"Log Messages"),(0,a.kt)("p",null,"The logs for your node are an audit of the recent events and processes occurring on your node. "),(0,a.kt)("p",null,"It is useful to understand some of the most commonly shown logs for troubleshooting purposes."),(0,a.kt)("p",null,"Detailed logs can be turned on for scripts, mining, maxima, blocks, networking and ibd (initial blockchain download) using the ",(0,a.kt)("inlineCode",{parentName:"p"},"logs")," command."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"logs scripts:true\n")),(0,a.kt)("h2",{id:"minima-connection-logs"},"Minima connection logs"),(0,a.kt)("details",null," ",(0,a.kt)("summary",null," Connected attempt success to ... "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," Your node has successfully connected to another node at the specified host:port."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Log Level:")," Info"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," No ")),(0,a.kt)("details",null," ",(0,a.kt)("summary",null," [+] Connected to the blockchain Initial Block Download received. size:x bytes blocks:x "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," Your node has received an IBD (Initial Blockchain Download) after connecting to another node. If your node is not up to date with the top block in the chain, you will receive the blocks your node is missing."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Log Level:")," Info"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," No")),(0,a.kt)("h2",{id:"chain-logs"},"Chain logs"),(0,a.kt)("details",null," ",(0,a.kt)("summary",null,"Your chain tip is up to date - no TxBlocks accepted - only FULL TxPoW"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," Your top block is up to date so your node does not need to accept archive blocks."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Log Level:")," Info"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," No")),(0,a.kt)("details",null," ",(0,a.kt)("summary",null,"Warning : Chain tip hasn't changed in 180 seconds 0x.. x"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," Your top block has not changed in 3 minutes. Top block txpowid and block number is provided."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Log Level:")," Info"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," Maybe, although it is normal to see this message several times in a day."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Suggested action:")," Check to see if your node is showing other log messages that suggest you are not connected to the network, this could be a lot of disconnecting/could not connect messages. If so, check your internet connection and if running a node on a server, check that your firewall is not blocking connections on port 9001.")),(0,a.kt)("details",null," ",(0,a.kt)("summary",null,"[!] No Crossover found whilst syncing with new node. They are on a different chain. Please check you are on the correct chain.. disconnecting from ..."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," No intersection of blocks was found with a new connection so either you or they are on the wrong chain. Your node will disconnect from them."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Log Level:")," Warning"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," Maybe"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Suggested action:")," Check to see if your node is showing other log messages that suggest you are on the wrong chain, e.g. CONNECTED TO HEAVIER CHAIN / failed block check / We are Too old to sync new user! / Invalid TxPoW Superparents")),(0,a.kt)("details",null," ",(0,a.kt)("summary",null," [!] CONNECTED TO HEAVIER CHAIN.. from ... "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," You connected to a node that in on a heavier chain. The client uid of the other node is provided."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Log Level:")," Warning"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," Yes - if the message persists"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Suggested action:")," If the message persists, then attempt the following steps to re-sync your chain:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Restart your node and allow 10-15 minutes for your node to attempt to re-sync"),(0,a.kt)("li",{parentName:"ol"},"If your node is too far behind the top block, you will need to perform a chain re-sync using an archive node or archive file. This can be done from the Security MiniDapp or using one of the following commands ",(0,a.kt)("inlineCode",{parentName:"li"},"archive action:import file:")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"reset archivefile: action:chainsync")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"archive action:resync host:")))),(0,a.kt)("details",null," ",(0,a.kt)("summary",null," We are Too old to sync new user! greetroot:x mytip:x "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," You connected to a new node but are too far behind so cannot provide any blocks to sync the user. The ",(0,a.kt)("inlineCode",{parentName:"p"},"greetroot")," is the user's root block of their chain, ",(0,a.kt)("inlineCode",{parentName:"p"},"mytip")," is your top block."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Log Level:")," Warning"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," Yes - if the message persists"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Suggested action:")," If the message persists, then attempt the following steps to re-sync your chain:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Restart your node and allow 10-15 minutes for your node to attempt to re-sync"),(0,a.kt)("li",{parentName:"ol"},"If your node is too far behind the top block, you will need to perform a chain re-sync using an archive node or archive file. This can be done from the Security MiniDapp or using one of the following commands ",(0,a.kt)("inlineCode",{parentName:"li"},"archive action:import file:")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"reset archivefile: action:chainsync")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"archive action:resync host:")))),(0,a.kt)("details",null," ",(0,a.kt)("summary",null," [!] Failed block check @ x txpowid:x root:x tip:x "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," Your node could not complete the block check"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Log Level:")," Warning"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," Yes - if the message persists"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Suggested action:")," If the message persists, then attempt the following steps to re-sync your chain:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Restart your node and allow 10-15 minutes for your node to attempt to re-sync"),(0,a.kt)("li",{parentName:"ol"},"If your node is too far behind the top block, you will need to perform a chain re-sync using an archive node or archive file. This can be done from the Security MiniDapp or using one of the following commands ",(0,a.kt)("inlineCode",{parentName:"li"},"archive action:import file:")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"reset archivefile: action:chainsync")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"archive action:resync host:")))),(0,a.kt)("details",null," ",(0,a.kt)("summary",null," Invalid TxPoW Super Parents "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," The TxPoW being validated does not have valid Super Parents in the cascade."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Log Level:")," Warning"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," Yes - if the message persists, this suggests there is an error with your cascade."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Suggested action:")," If the message persists, then attempt the following steps to re-sync your chain:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Restart your node and allow 10-15 minutes for your node to attempt to re-sync"),(0,a.kt)("li",{parentName:"ol"},"If your node is too far behind the top block, you will need to perform a chain re-sync using an archive node or archive file. This can be done from the Security MiniDapp or using one of the following commands ",(0,a.kt)("inlineCode",{parentName:"li"},"archive action:import file:")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"reset archivefile: action:chainsync")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"archive action:resync host:")))),(0,a.kt)("details",null," ",(0,a.kt)("summary",null," [!] Received IBD with cascade even though we have one.. from "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," You connected to a node which sent you a cascade"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Log Level:")," Warning"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," No")),(0,a.kt)("h2",{id:"maxima-logs"},"Maxima logs"),(0,a.kt)("details",null," ",(0,a.kt)("summary",null,"MAXIMA NEW connection : ..."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," You have connected to and added this node as a new Maxima Host."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Level:")," Info"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," No")),(0,a.kt)("details",null," ",(0,a.kt)("summary",null,"MAXIMA EXISTING connection"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," You have connected to a node which is one of your existing Maxima Hosts."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Level:")," Info"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," No")),(0,a.kt)("details",null," ",(0,a.kt)("summary",null,"MAXIMA Check if connected : ..."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," Before sending a message to one of your Maxima hosts, the connection is checked."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Level:")," Info"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," No")),(0,a.kt)("details",null," ",(0,a.kt)("summary",null," TIMED Maxima connect as no chain yet.. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," The node does not have any blocks yet so will not attempt to connect to a Maxima host. Will reattempt in 10 seconds."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Level:")," Info"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," Maybe, if it persists."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Suggested action:"),"  If the message persists, this suggests your node has no connections and has no chain. Check your internet connection and ensure your node is not running with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-nop2p")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-noconnect")," parameter. If using a VPN, ensure the connection is not being blocked.")),(0,a.kt)("details",null," ",(0,a.kt)("summary",null," MAXIMA disconnecting from 185.103.110.69:9001 reconnecting to random host "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," A connection could not be established with the host and a new connection will be made."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Level:")," Info"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," No")),(0,a.kt)("h2",{id:"script-logs"},"Script logs"),(0,a.kt)("details",null," ",(0,a.kt)("summary",null,"Script FAIL input:x ..."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," A transaction being validated contained a coin with a script that failed to return TRUE. The input coin index and failed script is provided."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Level:")," Error"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," No, if the transaction is not yours. Yes, if you posted the transaction."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action:")," If the transaction is yours, "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"turn on additional logs for scripts by running ",(0,a.kt)("inlineCode",{parentName:"li"},"logs scripts:true")," in the Terminal, then repost the same transaction to see which instruction caused the script to fail,"),(0,a.kt)("li",{parentName:"ul"},"ensure that the conditions specified for spending the coin in the contract have been met. The transaction will not complete and will need to be reposted."))),(0,a.kt)("details",null," ",(0,a.kt)("summary",null,"Token Script FAIL input:x ..."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," A transaction being validated contained a custom token with a token script that failed to return TRUE. The input coin index and failed script is provided."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Level:")," Error"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," ",(0,a.kt)("strong",{parentName:"p"},"No")," - if the transaction is not yours. ",(0,a.kt)("strong",{parentName:"p"},"Yes")," - if you posted the transaction."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Suggested action:")," If the transaction is yours, "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"turn on additional logs for scripts by running ",(0,a.kt)("inlineCode",{parentName:"li"},"logs scripts:true")," in the Terminal, then repost the same transaction to see which instruction caused the script to fail,"),(0,a.kt)("li",{parentName:"ul"},"ensure that the conditions specified for spending the custom token in the contract have been met. The transaction will not complete and will need to be reposted."))),(0,a.kt)("details",null," ",(0,a.kt)("summary",null,"Error Monotonic TxPoW failed script check from Client: ..."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," Your node received a txpow that contained a monotonic transaction with a script that failed to return TRUE. The client uid and txpowid is provided. If a monotonic transaction fails, it will always fail as it does not depend on any varying state e.g. block time. The txpow will not be forwarded to peer nodes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Level:")," Error"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," No")),(0,a.kt)("details",null," ",(0,a.kt)("summary",null,"NON-Monotonic TxPoW failed script check from Client ..."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Details:")," Your node received a txpow that contained a non-monotonic transaction with a script that failed to return TRUE. The client uid and txpowid is provided. The validity of non-monotonic transactions depends on varying conditions e.g. block time, so may pass successfully at a later point in time. The txpow will not be forwarded to peer nodes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Level:")," Error"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action required?:")," No")))}d.isMDXComponent=!0}}]);