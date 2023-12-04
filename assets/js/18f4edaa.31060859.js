"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8889],{3905:function(L,M,j){j.d(M,{Zo:function(){return i},kt:function(){return z}});var u=j(7294);function N(L,M,j){return M in L?Object.defineProperty(L,M,{value:j,enumerable:!0,configurable:!0,writable:!0}):L[M]=j,L}function t(L,M){var j=Object.keys(L);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(L);M&&(u=u.filter((function(M){return Object.getOwnPropertyDescriptor(L,M).enumerable}))),j.push.apply(j,u)}return j}function S(L){for(var M=1;M<arguments.length;M++){var j=null!=arguments[M]?arguments[M]:{};M%2?t(Object(j),!0).forEach((function(M){N(L,M,j[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(L,Object.getOwnPropertyDescriptors(j)):t(Object(j)).forEach((function(M){Object.defineProperty(L,M,Object.getOwnPropertyDescriptor(j,M))}))}return L}function s(L,M){if(null==L)return{};var j,u,N=function(L,M){if(null==L)return{};var j,u,N={},t=Object.keys(L);for(u=0;u<t.length;u++)j=t[u],M.indexOf(j)>=0||(N[j]=L[j]);return N}(L,M);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(L);for(u=0;u<t.length;u++)j=t[u],M.indexOf(j)>=0||Object.prototype.propertyIsEnumerable.call(L,j)&&(N[j]=L[j])}return N}var w=u.createContext({}),C=function(L){var M=u.useContext(w),j=M;return L&&(j="function"==typeof L?L(M):S(S({},M),L)),j},i=function(L){var M=C(L.components);return u.createElement(w.Provider,{value:M},L.children)},y={inlineCode:"code",wrapper:function(L){var M=L.children;return u.createElement(u.Fragment,{},M)}},x=u.forwardRef((function(L,M){var j=L.components,N=L.mdxType,t=L.originalType,w=L.parentName,i=s(L,["components","mdxType","originalType","parentName"]),x=C(j),z=N,e=x["".concat(w,".").concat(z)]||x[z]||y[z]||t;return j?u.createElement(e,S(S({ref:M},i),{},{components:j})):u.createElement(e,S({ref:M},i))}));function z(L,M){var j=arguments,N=M&&M.mdxType;if("string"==typeof L||N){var t=j.length,S=new Array(t);S[0]=x;var s={};for(var w in M)hasOwnProperty.call(M,w)&&(s[w]=M[w]);s.originalType=L,s.mdxType="string"==typeof L?L:N,S[1]=s;for(var C=2;C<t;C++)S[C]=j[C];return u.createElement.apply(null,S)}return u.createElement.apply(null,j)}x.displayName="MDXCreateElement"},9832:function(L,M,j){j.r(M),j.d(M,{assets:function(){return i},contentTitle:function(){return w},default:function(){return z},frontMatter:function(){return s},metadata:function(){return C},toc:function(){return y}});var u=j(7462),N=j(3366),t=(j(7294),j(3905)),S=["components"],s={sidebar_position:3},w="Messaging",C={unversionedId:"learn/maxima/maximamessaging",id:"learn/maxima/maximamessaging",title:"Messaging",description:"Maxima Hosts",source:"@site/docs/learn/maxima/maximamessaging.md",sourceDirName:"learn/maxima",slug:"/learn/maxima/maximamessaging",permalink:"/docs/learn/maxima/maximamessaging",editUrl:"https://github.com/minima-global/minidocs/docs/learn/maxima/maximamessaging.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Contacts",permalink:"/docs/learn/maxima/maximacontacts"},next:{title:"Maxima Location Service",permalink:"/docs/learn/maxima/mls"}},i={},y=[{value:"Maxima Hosts",id:"maxima-hosts",level:2},{value:"Sending Messages",id:"sending-messages",level:2}],x={toc:y};function z(L){var M=L.components,s=(0,N.Z)(L,S);return(0,t.kt)("wrapper",(0,u.Z)({},x,s,{components:M,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"messaging"},"Messaging"),(0,t.kt)("h2",{id:"maxima-hosts"},"Maxima Hosts"),(0,t.kt)("p",null,"Each user has a set of Maxima hosts which facilitate the relaying of messages to the user.\nMaxima hosts are randomly selected server nodes a user has previously connected to."),(0,t.kt)("p",null,"At any given time, only one Maxima host is responsible for forwarding a user\u2019s encrypted message."),(0,t.kt)("p",null,"You can see your Maxima hosts, including the one you are currently connected to, with the ",(0,t.kt)("inlineCode",{parentName:"p"},"maxima action:hosts")," command from the Minima Terminal."),(0,t.kt)("p",null,"The host you are connected to determines the ip:port shown in your contact address."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Example Contact Address")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G1JP0Y8WHVT0JJPGJ01YAQPCEU3PWF51V5J5UKA4RBHYUZFYTTH98KYHZ1K6MF3V6D30DCDD\nYAH34AJ1PZ4GWHCW7SEDQ0HQ9R4TU2G7NS8N816V13ERQ532PYWK9Z732RBZ7KFCQCENAMAJP9V7EH3R06493T25U9PY7HJAS0Z311WA6K24P0BZ82NTQNY2BQ\nTB5VUJRV6QYVK1060800712NCHC@187.220.305.194:9001\n")),(0,t.kt)("p",null,(0,t.kt)("img",{loading:"lazy",alt:"MaximaContacts",src:j(2673).Z+"#gh-light-mode-only-width50",width:"300",height:"85"}),(0,t.kt)("img",{loading:"lazy",alt:"MaximaContacts",src:j(8605).Z+"#gh-dark-mode-only-width50",width:"300",height:"85"})),(0,t.kt)("p",null,(0,t.kt)("img",{loading:"lazy",alt:"MaximaContacts",src:j(7978).Z+"#gh-light-mode-only-width50",width:"300",height:"100"}),(0,t.kt)("img",{loading:"lazy",alt:"MaximaContacts",src:j(7490).Z+"#gh-dark-mode-only-width50",width:"300",height:"85"})),(0,t.kt)("h2",{id:"sending-messages"},"Sending Messages"),(0,t.kt)("p",null,"Sending a message over Maxima has the following steps:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Connection")," - The user exchanges contact details with a friend and (optionally) adds them as a Maxima contact.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Create & Sign Message")," - The sender creates a message either via a Minima MiniDapp or using Terminal commands. On sending the message, the message is signed with the sender's Maxima private key, generating a signature for the message.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Encryption & Work")," - the Maxima data package containing the public key of the sender, the message and the signature is encrypted. Sending a message has no monetary cost, but it must be paid for in \u2018work\u2019. A TxPoW unit is created, mined and sent to the recipient\u2019s Maxima host with the signed, encrypted message.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Send: Sender to Host")," - the signed, encrypted message and mined TxPoW unit is sent to the recipient's Maxima host who checks whether the TxPoW is valid and the minimum amount of \u2018work\u2019 has been completed.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Send: Host to Recipient")," -  If the TxPoW is valid and the minimum amount of \u2018work\u2019 has been completed, the message will be forwarded to the recipient, else it is discarded (off-chain process).")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Block propagation")," - If the TxPoW unit is a block, it will be propagated to ALL nodes for processing, otherwise the TxPoW unit will be discarded (on-chain)."))),(0,t.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"All Maxima messages are encrypted end-to-end using asymmetric RSA encryption. Messages can only be decrypted and read by the recipient, other nodes involved in the relaying of the message cannot read the data."))),(0,t.kt)("p",null,(0,t.kt)("img",{loading:"lazy",alt:"MaximaContacts",src:j(8458).Z+"#gh-light-mode-only",width:"630",height:"165"}),(0,t.kt)("img",{loading:"lazy",alt:"MaximaContacts",src:j(6589).Z+"#gh-dark-mode-only",width:"630",height:"165"})),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Orange"),": A Maxima process",(0,t.kt)("br",null),"\n",(0,t.kt)("strong",{parentName:"p"},"Blue"),": A Minima process"))}z.isMDXComponent=!0},6589:function(L,M,j){M.Z=j.p+"assets/images/MaximaHowitworksDM-6a192a5ec9ff167e70c2010da80f5001.svg"},8458:function(L,M,j){M.Z=j.p+"assets/images/MaximaHowitworksLM-367873067902d85cc3103e901f6fe8da.svg"},7490:function(L,M){M.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgODUiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO30uY2xzLTJ7c3Ryb2tlOiM5MTkxOWQ7fS5jbHMtMiwuY2xzLTMsLmNscy00e3N0cm9rZS1taXRlcmxpbWl0OjEwO30uY2xzLTIsLmNscy0zLC5jbHMtNCwuY2xzLTV7ZmlsbDpub25lO30uY2xzLTMsLmNscy01e3N0cm9rZTojZmZmO30uY2xzLTR7c3Ryb2tlOiNmZjUxMmY7fS5jbHMtNXtzdHJva2Utd2lkdGg6Ljc1cHg7fTwvc3R5bGU+PC9kZWZzPjxnPjxsaW5lIGNsYXNzPSJjbHMtNSIgeDE9IjcyLjE4IiB5MT0iNDIuNSIgeDI9IjEyOS4yOCIgeTI9IjQyLjUiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTI4LjE2IDQ0LjEzIDEzNC4yNiA0Mi41IDEyOC4xNiA0MC44NyAxMjguMTYgNDQuMTMiLz48L2c+PGc+PGxpbmUgY2xhc3M9ImNscy01IiB4MT0iMjA0LjI4IiB5MT0iNDIuNSIgeDI9IjIyMi44MyIgeTI9IjQyLjUiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMjIxLjcyIDQ0LjEzIDIyNy44MiA0Mi41IDIyMS43MiA0MC44NyAyMjEuNzIgNDQuMTMiLz48L2c+PGc+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjAuMDEsNDUuOWMtLjc3LDAtMS40My0uMTctMS45Ny0uNTEtLjU0LS4zNC0uOTYtLjgxLTEuMjQtMS40MS0uMjktLjYtLjQzLTEuMy0uNDMtMi4xcy4xNC0xLjQ5LC40My0yLjFjLjI5LS42LC43LTEuMDcsMS4yNC0xLjQxLC41NC0uMzQsMS4yLS41MSwxLjk3LS41MSwuODksMCwxLjYyLC4yMiwyLjIxLC42N3MuOTksMS4wNSwxLjIyLDEuODFsLTEuMTQsLjMxYy0uMTUtLjU0LS40Mi0uOTYtLjgtMS4yNy0uMzgtLjMxLS44OC0uNDYtMS40OS0uNDYtLjU1LDAtMSwuMTItMS4zNywuMzctLjM2LC4yNS0uNjQsLjU5LS44MiwxLjAzcy0uMjgsLjk2LS4yOCwxLjU1YzAsLjU5LC4wOSwxLjExLC4yNywxLjU1cy40NiwuNzksLjgyLDEuMDNjLjM3LC4yNSwuODIsLjM3LDEuMzcsLjM3LC42MSwwLDEuMTEtLjE1LDEuNDktLjQ2LC4zOC0uMzEsLjY1LS43MywuOC0xLjI3bDEuMTQsLjMxYy0uMjMsLjc2LS42MywxLjM2LTEuMjIsMS44MXMtMS4zMiwuNjctMi4yMSwuNjdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjcuMTIsNDUuOWMtLjU4LDAtMS4wOC0uMTMtMS41LS4zOS0uNDItLjI2LS43NS0uNjItLjk4LTEuMDhzLS4zNC0uOTktLjM0LTEuNTksLjEyLTEuMTMsLjM1LTEuNTljLjI0LS40NiwuNTctLjgyLC45OS0xLjA3LC40Mi0uMjYsLjkyLS4zOCwxLjQ5LS4zOHMxLjA4LC4xMywxLjUsLjM5Yy40MiwuMjYsLjc1LC42MiwuOTksMS4wOCwuMjMsLjQ2LC4zNSwuOTgsLjM1LDEuNThzLS4xMiwxLjEzLS4zNSwxLjU5LS41NiwuODItLjk5LDEuMDhjLS40MiwuMjYtLjkyLC4zOS0xLjUsLjM5Wm0wLTEuMDVjLjU1LDAsLjk3LS4xOSwxLjI0LS41NiwuMjctLjM3LC40MS0uODUsLjQxLTEuNDRzLS4xNC0xLjA5LS40MS0xLjQ1Yy0uMjgtLjM2LS42OS0uNTQtMS4yMy0uNTQtLjM3LDAtLjY4LC4wOC0uOTMsLjI1LS4yNCwuMTctLjQyLC40LS41NCwuNy0uMTIsLjMtLjE4LC42NC0uMTgsMS4wNCwwLC42MSwuMTQsMS4wOSwuNDIsMS40NiwuMjgsLjM2LC42OSwuNTUsMS4yMywuNTVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzEuMTMsNDUuNzR2LTUuNzhoMXYxLjY3aC4xM3Y0LjExaC0xLjEzWm00LjA2LDB2LTIuODRjMC0uMjItLjAyLS40Ni0uMDYtLjY5cy0uMTEtLjQ2LS4yMS0uNjZjLS4xLS4yLS4yNS0uMzctLjQ0LS40OS0uMTktLjEyLS40NC0uMTktLjc1LS4xOS0uMiwwLS4zOSwuMDMtLjU3LC4xLS4xOCwuMDctLjMzLC4xNy0uNDcsLjMyLS4xMywuMTUtLjI0LC4zNC0uMzIsLjU4LS4wOCwuMjQtLjEyLC41My0uMTIsLjg3bC0uNy0uMjZjMC0uNTIsLjEtLjk5LC4yOS0xLjM5LC4yLS40LC40OC0uNzEsLjg1LS45NHMuODEtLjM0LDEuMzMtLjM0Yy40LDAsLjc0LC4wNiwxLjAxLC4xOSwuMjcsLjEzLC40OSwuMywuNjYsLjUxLC4xNywuMjEsLjMsLjQ0LC4zOSwuNjhzLjE1LC40OSwuMTgsLjcyYy4wMywuMjQsLjA1LC40NCwuMDUsLjYydjMuMjFoLTEuMTNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzcuMDgsNDAuODZ2LS45aDMuOTV2LjloLTMuOTVabTMuOTUsNC44OGMtLjM2LC4wNy0uNzIsLjEtMS4wNywuMDktLjM1LS4wMS0uNjYtLjA4LS45NC0uMi0uMjctLjEzLS40OC0uMzItLjYyLS41OS0uMTMtLjI0LS4xOS0uNDgtLjItLjczLDAtLjI1LS4wMS0uNTMtLjAxLS44NHYtNS4xMWgxLjEydjUuMDZjMCwuMjMsMCwuNDMsMCwuNiwwLC4xNywuMDQsLjMyLC4xMSwuNDMsLjEzLC4yMiwuMzMsLjM1LC42MSwuMzgsLjI4LC4wMywuNjEsLjAyLC45OS0uMDR2Ljk1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQzLjg4LDQ1LjljLS40MywwLS43OS0uMDgtMS4wOC0uMjQtLjI5LS4xNi0uNTEtLjM3LS42Ni0uNjMtLjE1LS4yNi0uMjItLjU1LS4yMi0uODYsMC0uMjksLjA1LS41NSwuMTYtLjc3LC4xLS4yMiwuMjYtLjQxLC40Ni0uNTYsLjItLjE2LC40NS0uMjgsLjc1LS4zOCwuMjYtLjA3LC41NS0uMTQsLjg3LS4yLC4zMi0uMDYsLjY3LS4xMSwxLjAzLS4xNiwuMzYtLjA1LC43MS0uMSwxLjA3LS4xNWwtLjQxLC4yMmMwLS40NS0uMDktLjc5LS4yOS0xLjAxLS4yLS4yMi0uNTQtLjMzLTEuMDItLjMzLS4zLDAtLjU4LC4wNy0uODMsLjIxLS4yNSwuMTQtLjQzLC4zNy0uNTMsLjdsLTEuMDQtLjMyYy4xNC0uNSwuNDEtLjg5LC44Mi0xLjE4LC40LS4yOSwuOTQtLjQ0LDEuNi0uNDQsLjUyLDAsLjk3LC4wOSwxLjM1LC4yN3MuNjcsLjQ2LC44NCwuODRjLjA5LC4xOSwuMTUsLjM5LC4xNywuNiwuMDIsLjIxLC4wMywuNDQsLjAzLC42OHYzLjU2aC0uOTl2LTEuMzJsLjE5LC4xN2MtLjI0LC40NC0uNTQsLjc3LS45MSwuOTktLjM3LC4yMi0uODIsLjMyLTEuMzYsLjMyWm0uMi0uOTJjLjMyLDAsLjU5LS4wNiwuODItLjE3LC4yMy0uMTEsLjQxLS4yNiwuNTUtLjQzcy4yMy0uMzYsLjI3LS41NWMuMDYtLjE3LC4xLS4zNiwuMS0uNTgsMC0uMjEsLjAxLS4zOSwuMDEtLjUxbC4zNiwuMTNjLS4zNSwuMDUtLjY3LC4xLS45NiwuMTQtLjI5LC4wNC0uNTUsLjA4LS43OCwuMTNzLS40NCwuMDktLjYyLC4xNWMtLjE1LC4wNS0uMjksLjEyLS40MSwuMTktLjEyLC4wOC0uMjEsLjE3LS4yOCwuMjdzLS4xLC4yNC0uMSwuMzksLjA0LC4yOSwuMTEsLjQxYy4wOCwuMTMsLjE5LC4yMywuMzQsLjMsLjE1LC4wNywuMzUsLjExLC41OSwuMTFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTAuODIsNDUuOWMtLjU5LDAtMS4xLS4xMy0xLjUxLS40LS40MS0uMjYtLjczLS42My0uOTUtMS4wOS0uMjItLjQ2LS4zMy0uOTgtLjMzLTEuNTcsMC0uNiwuMTItMS4xMiwuMzQtMS41OCwuMjItLjQ2LC41NS0uODIsLjk2LTEuMDgsLjQyLS4yNiwuOTItLjM5LDEuNS0uMzksLjYzLDAsMS4xNywuMTYsMS42MiwuNDcsLjQ1LC4zMSwuNzQsLjc0LC44OSwxLjI5bC0xLjExLC4zMmMtLjExLS4zMi0uMjktLjU4LS41NC0uNzYtLjI1LS4xOC0uNTQtLjI3LS44Ni0uMjctLjM3LDAtLjY3LC4wOS0uOSwuMjYtLjI0LC4xNy0uNDEsLjQxLS41MiwuNzEtLjExLC4zLS4xNywuNjQtLjE4LDEuMDMsMCwuNiwuMTQsMS4wOCwuNDEsMS40NSwuMjcsLjM3LC42NywuNTUsMS4yLC41NSwuMzYsMCwuNjUtLjA4LC44OC0uMjUsLjIyLS4xNywuMzktLjQsLjUxLS43MWwxLjE0LC4yN2MtLjE5LC41Ni0uNSwxLS45NCwxLjMtLjQ0LC4zLS45NiwuNDUtMS41OCwuNDVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTMuNzksNDAuODZ2LS45aDMuOTV2LjloLTMuOTVabTMuOTUsNC44OGMtLjM2LC4wNy0uNzIsLjEtMS4wNywuMDktLjM1LS4wMS0uNjYtLjA4LS45NC0uMi0uMjctLjEzLS40OC0uMzItLjYyLS41OS0uMTMtLjI0LS4xOS0uNDgtLjItLjczLDAtLjI1LS4wMS0uNTMtLjAxLS44NHYtNS4xMWgxLjEydjUuMDZjMCwuMjMsMCwuNDMsMCwuNiwwLC4xNywuMDQsLjMyLC4xMSwuNDMsLjEzLC4yMiwuMzMsLjM1LC42MSwuMzgsLjI4LC4wMywuNjEsLjAyLC45OS0uMDR2Ljk1WiIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0zNy40Niw3Ny4yM2MxOS4xOCwwLDM0LjczLTE1LjU1LDM0LjczLTM0LjczUzU2LjY0LDcuNzcsMzcuNDYsNy43NywyLjczLDIzLjMyLDIuNzMsNDIuNXMxNS41NSwzNC43MywzNC43MywzNC43M1oiLz48Zz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDguMDMsNDUuNzR2LTMuMTlsLTIuNjEtNC41MmgxLjMxbDEuODcsMy4yNCwxLjg3LTMuMjRoMS4zMWwtMi42MSw0LjUydjMuMTloLTEuMTNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTU0LjE4LDQ1LjljLS41OCwwLTEuMDgtLjEzLTEuNS0uMzktLjQyLS4yNi0uNzUtLjYyLS45OC0xLjA4cy0uMzQtLjk5LS4zNC0xLjU5LC4xMi0xLjEzLC4zNS0xLjU5Yy4yNC0uNDYsLjU3LS44MiwuOTktMS4wN3MuOTItLjM4LDEuNDktLjM4LDEuMDgsLjEzLDEuNSwuMzksLjc1LC42MiwuOTksMS4wOGMuMjMsLjQ2LC4zNSwuOTgsLjM1LDEuNThzLS4xMiwxLjEzLS4zNSwxLjU5Yy0uMjMsLjQ2LS41NiwuODItLjk5LDEuMDgtLjQyLC4yNi0uOTIsLjM5LTEuNSwuMzlabTAtMS4wNWMuNTUsMCwuOTctLjE5LDEuMjQtLjU2LC4yNy0uMzcsLjQxLS44NSwuNDEtMS40NHMtLjE0LTEuMDktLjQxLTEuNDVjLS4yOC0uMzYtLjY5LS41NC0xLjIzLS41NC0uMzcsMC0uNjgsLjA4LS45MywuMjUtLjI0LC4xNy0uNDIsLjQtLjU0LC43LS4xMiwuMy0uMTgsLjY0LS4xOCwxLjA0LDAsLjYxLC4xNCwxLjA5LC40MiwxLjQ2LC4yOCwuMzYsLjY5LC41NSwxLjIzLC41NVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNjAuMzgsNDUuODljLS40LDAtLjc0LS4wNi0xLjAxLS4xOXMtLjQ5LS4zLS42Ni0uNTFjLS4xNy0uMjEtLjMtLjQ0LS4zOS0uNjgtLjA5LS4yNS0uMTUtLjQ5LS4xOC0uNzJzLS4wNS0uNDQtLjA1LS42MnYtMy4yMWgxLjE0djIuODRjMCwuMjIsLjAyLC40NiwuMDYsLjY5LC4wNCwuMjQsLjExLC40NiwuMjEsLjY2LC4xLC4yLC4yNSwuMzcsLjQ0LC40OSwuMTksLjEyLC40NCwuMTksLjc1LC4xOSwuMiwwLC4zOS0uMDMsLjU3LS4xLC4xOC0uMDcsLjMzLS4xNywuNDctLjMyLC4xMy0uMTUsLjI0LS4zNCwuMzItLjU4LC4wOC0uMjQsLjExLS41MywuMTEtLjg3bC43LC4yNmMwLC41Mi0uMSwuOTktLjI5LDEuMzktLjIsLjQtLjQ4LC43MS0uODUsLjk0cy0uODEsLjM0LTEuMzMsLjM0Wm0xLjkxLS4xNnYtMS42N2gtLjEzdi00LjExaDEuMTN2NS43OGgtMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNjQuNzgsNDUuNzR2LTUuNzhoMXYxLjRsLS4xNC0uMThjLjA3LS4xOSwuMTYtLjM2LC4yOC0uNTFzLjI1LS4yOCwuNC0uMzhjLjE1LS4xMSwuMzEtLjE5LC40OS0uMjUsLjE4LS4wNiwuMzctLjA5LC41NS0uMTFzLjM3LDAsLjU1LC4wM3YxLjA1Yy0uMTktLjA1LS40LS4wNi0uNjMtLjA0LS4yMywuMDItLjQ0LC4wOS0uNjMsLjIyLS4xOCwuMTItLjMzLC4yNi0uNDMsLjQzLS4xMSwuMTctLjE4LC4zNS0uMjMsLjU2LS4wNSwuMjEtLjA3LC40Mi0uMDcsLjY1djIuOTJoLTEuMTNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTcxLjA2LDQ1Ljc0di03LjcxaDF2NC4xNmguMTN2My41NWgtMS4xM1ptNC4wNiwwdi0yLjg0YzAtLjIyLS4wMi0uNDYtLjA2LS42OXMtLjExLS40Ni0uMjEtLjY2Yy0uMS0uMi0uMjUtLjM3LS40NC0uNDktLjE5LS4xMi0uNDQtLjE5LS43NS0uMTktLjIsMC0uMzksLjAzLS41NywuMS0uMTgsLjA3LS4zMywuMTctLjQ3LC4zMi0uMTMsLjE1LS4yNCwuMzQtLjMyLC41OC0uMDgsLjI0LS4xMiwuNTMtLjEyLC44N2wtLjctLjI2YzAtLjUyLC4xLS45OSwuMjktMS4zOXMuNDgtLjcxLC44NS0uOTQsLjgxLS4zNCwxLjMzLS4zNGMuNCwwLC43NCwuMDYsMS4wMSwuMTlzLjQ5LC4zLC42NiwuNTFjLjE3LC4yMSwuMywuNDQsLjM5LC42OCwuMDksLjI1LC4xNSwuNDksLjE4LC43MiwuMDMsLjI0LC4wNSwuNDQsLjA1LC42MnYzLjIxaC0xLjEzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE4MC4xNiw0NS45Yy0uNTgsMC0xLjA4LS4xMy0xLjUtLjM5LS40Mi0uMjYtLjc1LS42Mi0uOTgtMS4wOHMtLjM0LS45OS0uMzQtMS41OSwuMTItMS4xMywuMzUtMS41OWMuMjQtLjQ2LC41Ny0uODIsLjk5LTEuMDdzLjkyLS4zOCwxLjQ5LS4zOCwxLjA4LC4xMywxLjUsLjM5LC43NSwuNjIsLjk5LDEuMDhjLjIzLC40NiwuMzUsLjk4LC4zNSwxLjU4cy0uMTIsMS4xMy0uMzUsMS41OWMtLjIzLC40Ni0uNTYsLjgyLS45OSwxLjA4LS40MiwuMjYtLjkyLC4zOS0xLjUsLjM5Wm0wLTEuMDVjLjU1LDAsLjk3LS4xOSwxLjI0LS41NiwuMjctLjM3LC40MS0uODUsLjQxLTEuNDRzLS4xNC0xLjA5LS40MS0xLjQ1Yy0uMjgtLjM2LS42OS0uNTQtMS4yMy0uNTQtLjM3LDAtLjY4LC4wOC0uOTMsLjI1LS4yNCwuMTctLjQyLC40LS41NCwuNy0uMTIsLjMtLjE4LC42NC0uMTgsMS4wNCwwLC42MSwuMTQsMS4wOSwuNDIsMS40NiwuMjgsLjM2LC42OSwuNTUsMS4yMywuNTVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTg2LjM4LDQ1Ljg5Yy0uNywwLTEuMjgtLjE2LTEuNzItLjQ3LS40NC0uMzEtLjcxLS43NS0uODEtMS4zMWwxLjE1LS4xOGMuMDcsLjMsLjI0LC41NCwuNSwuNzEsLjI2LC4xNywuNTgsLjI2LC45NywuMjYsLjM1LDAsLjYyLS4wNywuODItLjIxLC4yLS4xNCwuMy0uMzQsLjMtLjU5LDAtLjE1LS4wNC0uMjYtLjEtLjM2LS4wNy0uMDktLjIxLS4xOC0uNDQtLjI2LS4yMi0uMDgtLjU2LS4xOC0xLjAxLS4zMS0uNS0uMTMtLjg5LS4yNy0xLjE4LS40MS0uMjktLjE1LS41LS4zMi0uNjItLjUycy0uMTgtLjQ0LS4xOC0uNzJjMC0uMzUsLjA5LS42NSwuMjgtLjkyLC4xOS0uMjYsLjQ1LS40NiwuNzgtLjYsLjM0LS4xNCwuNzMtLjIxLDEuMTktLjIxcy44NCwuMDcsMS4xOCwuMjFjLjM1LC4xNCwuNjMsLjM0LC44NCwuNTksLjIxLC4yNiwuMzQsLjU1LC4zOSwuOWwtMS4xNSwuMjFjLS4wNC0uMjgtLjE3LS41LS4zOS0uNjYtLjIyLS4xNi0uNTEtLjI1LS44Ni0uMjYtLjM0LS4wMS0uNjEsLjA0LS44MiwuMTctLjIxLC4xMy0uMzIsLjMtLjMyLC41MiwwLC4xMywuMDQsLjI0LC4xMiwuMzMsLjA4LC4wOSwuMjQsLjE4LC40NywuMjZzLjU3LC4xOCwxLjAzLC4yOWMuNDksLjEyLC44NywuMjYsMS4xNiwuNDEsLjI5LC4xNSwuNDksLjMzLC42MSwuNTRzLjE4LC40NiwuMTgsLjc2YzAsLjU3LS4yMSwxLjAyLS42MiwxLjM0LS40MiwuMzItLjk5LC40OS0xLjcyLC40OVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xODkuMjcsNDAuODZ2LS45aDMuOTV2LjloLTMuOTVabTMuOTUsNC44OGMtLjM2LC4wNy0uNzIsLjEtMS4wNywuMDktLjM1LS4wMS0uNjYtLjA4LS45NC0uMi0uMjctLjEyLS40OC0uMzItLjYyLS41OS0uMTMtLjI0LS4xOS0uNDgtLjItLjczLDAtLjI1LS4wMS0uNTMtLjAxLS44NHYtNS4xMWgxLjEydjUuMDZjMCwuMjMsMCwuNDMsMCwuNnMuMDQsLjMyLC4xMSwuNDNjLjEzLC4yMiwuMzMsLjM1LC42MSwuMzgsLjI4LC4wMywuNjEsLjAyLC45OS0uMDN2Ljk1WiIvPjwvZz48cmVjdCBjbGFzcz0iY2xzLTMiIHg9IjEzNC44MyIgeT0iNy43NyIgd2lkdGg9IjY5LjQ1IiBoZWlnaHQ9IjY5LjQ1Ii8+PGc+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjU1LjQyLDQ1Ljc0di0zLjE5bC0yLjYxLTQuNTJoMS4zMWwxLjg3LDMuMjQsMS44Ny0zLjI0aDEuMzFsLTIuNjEsNC41MnYzLjE5aC0xLjEzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI2Mi40Miw0NS45Yy0uNTgsMC0xLjA4LS4xMy0xLjUtLjM5LS40Mi0uMjYtLjc1LS42Mi0uOTgtMS4wOHMtLjM0LS45OS0uMzQtMS41OSwuMTItMS4xMywuMzUtMS41OWMuMjQtLjQ2LC41Ny0uODIsLjk5LTEuMDcsLjQyLS4yNiwuOTItLjM4LDEuNDktLjM4czEuMDgsLjEzLDEuNSwuMzljLjQyLC4yNiwuNzUsLjYyLC45OSwxLjA4LC4yMywuNDYsLjM1LC45OCwuMzUsMS41OHMtLjEyLDEuMTMtLjM1LDEuNTktLjU2LC44Mi0uOTksMS4wOGMtLjQyLC4yNi0uOTIsLjM5LTEuNSwuMzlabTAtMS4wNWMuNTUsMCwuOTctLjE5LDEuMjQtLjU2LC4yNy0uMzcsLjQxLS44NSwuNDEtMS40NHMtLjE0LTEuMDktLjQxLTEuNDVjLS4yOC0uMzYtLjY5LS41NC0xLjIzLS41NC0uMzcsMC0uNjgsLjA4LS45MywuMjUtLjI0LC4xNy0uNDIsLjQtLjU0LC43LS4xMiwuMy0uMTgsLjY0LS4xOCwxLjA0LDAsLjYxLC4xNCwxLjA5LC40MiwxLjQ2LC4yOCwuMzYsLjY5LC41NSwxLjIzLC41NVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNjguNjIsNDUuODljLS40LDAtLjc0LS4wNi0xLjAxLS4xOS0uMjctLjEzLS40OS0uMy0uNjYtLjUxLS4xNy0uMjEtLjMtLjQ0LS4zOS0uNjgtLjA5LS4yNS0uMTUtLjQ5LS4xOC0uNzItLjAzLS4yNC0uMDUtLjQ0LS4wNS0uNjJ2LTMuMjFoMS4xNHYyLjg0YzAsLjIyLC4wMiwuNDYsLjA2LC42OSwuMDQsLjI0LC4xMSwuNDYsLjIxLC42NiwuMSwuMiwuMjUsLjM3LC40NCwuNDksLjE5LC4xMywuNDQsLjE5LC43NSwuMTksLjIsMCwuMzktLjAzLC41Ny0uMSwuMTgtLjA3LC4zMy0uMTcsLjQ3LS4zMiwuMTMtLjE1LC4yNC0uMzQsLjMyLS41OCwuMDgtLjI0LC4xMS0uNTMsLjExLS44N2wuNywuMjZjMCwuNTItLjEsLjk5LS4yOSwxLjM5cy0uNDgsLjcxLS44NSwuOTRjLS4zNywuMjItLjgxLC4zNC0xLjMzLC4zNFptMS45MS0uMTZ2LTEuNjdoLS4xM3YtNC4xMWgxLjEzdjUuNzhoLTFaIi8+PC9nPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI2Mi41NCw3Ny4yM2MxOS4xOCwwLDM0LjczLTE1LjU1LDM0LjczLTM0Ljczcy0xNS41NS0zNC43My0zNC43My0zNC43My0zNC43MywxNS41NS0zNC43MywzNC43MywxNS41NSwzNC43MywzNC43MywzNC43M1oiLz48L3N2Zz4="},7978:function(L,M){M.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTAwLjE2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzBkMGUxMDt9LmNscy0yLC5jbHMtMywuY2xzLTR7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5jbHMtMiwuY2xzLTMsLmNscy00LC5jbHMtNXtmaWxsOm5vbmU7fS5jbHMtMiwuY2xzLTV7c3Ryb2tlOiMwZDBlMTA7fS5jbHMtM3tzdHJva2U6IzkxOTE5ZDt9LmNscy00e3N0cm9rZTojZmY1MTJmO30uY2xzLTV7c3Ryb2tlLXdpZHRoOi43NXB4O308L3N0eWxlPjwvZGVmcz48Zz48bGluZSBjbGFzcz0iY2xzLTUiIHgxPSI3Mi4xOCIgeTE9IjUwLjA4IiB4Mj0iMTI5LjI4IiB5Mj0iNTAuMDgiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTI4LjE2IDUxLjcyIDEzNC4yNiA1MC4wOCAxMjguMTYgNDguNDUgMTI4LjE2IDUxLjcyIi8+PC9nPjxnPjxsaW5lIGNsYXNzPSJjbHMtNSIgeDE9IjIwNC4yOCIgeTE9IjUwLjA4IiB4Mj0iMjIyLjgzIiB5Mj0iNTAuMDgiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMjIxLjcyIDUxLjcyIDIyNy44MiA1MC4wOCAyMjEuNzIgNDguNDUgMjIxLjcyIDUxLjcyIi8+PC9nPjxnPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIwLjAxLDUzLjQ4Yy0uNzcsMC0xLjQzLS4xNy0xLjk3LS41MS0uNTQtLjM0LS45Ni0uODEtMS4yNC0xLjQxLS4yOS0uNi0uNDMtMS4zLS40My0yLjFzLjE0LTEuNDksLjQzLTIuMWMuMjktLjYsLjctMS4wNywxLjI0LTEuNDEsLjU0LS4zNCwxLjItLjUxLDEuOTctLjUxLC44OSwwLDEuNjIsLjIyLDIuMjEsLjY3cy45OSwxLjA1LDEuMjIsMS44MWwtMS4xNCwuMzFjLS4xNS0uNTQtLjQyLS45Ni0uOC0xLjI3LS4zOC0uMzEtLjg4LS40Ni0xLjQ5LS40Ni0uNTUsMC0xLC4xMi0xLjM3LC4zNy0uMzYsLjI1LS42NCwuNTktLjgyLDEuMDNzLS4yOCwuOTYtLjI4LDEuNTVjMCwuNTksLjA5LDEuMTEsLjI3LDEuNTVzLjQ2LC43OSwuODIsMS4wM2MuMzcsLjI1LC44MiwuMzcsMS4zNywuMzcsLjYxLDAsMS4xMS0uMTUsMS40OS0uNDYsLjM4LS4zMSwuNjUtLjczLC44LTEuMjdsMS4xNCwuMzFjLS4yMywuNzYtLjYzLDEuMzYtMS4yMiwxLjgxcy0xLjMyLC42Ny0yLjIxLC42N1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNy4xMiw1My40OGMtLjU4LDAtMS4wOC0uMTMtMS41LS4zOS0uNDItLjI2LS43NS0uNjItLjk4LTEuMDhzLS4zNC0uOTktLjM0LTEuNTksLjEyLTEuMTMsLjM1LTEuNTljLjI0LS40NiwuNTctLjgyLC45OS0xLjA3LC40Mi0uMjYsLjkyLS4zOCwxLjQ5LS4zOHMxLjA4LC4xMywxLjUsLjM5Yy40MiwuMjYsLjc1LC42MiwuOTksMS4wOCwuMjMsLjQ2LC4zNSwuOTgsLjM1LDEuNThzLS4xMiwxLjEzLS4zNSwxLjU5LS41NiwuODItLjk5LDEuMDhjLS40MiwuMjYtLjkyLC4zOS0xLjUsLjM5Wm0wLTEuMDVjLjU1LDAsLjk3LS4xOSwxLjI0LS41NiwuMjctLjM3LC40MS0uODUsLjQxLTEuNDRzLS4xNC0xLjA5LS40MS0xLjQ1Yy0uMjgtLjM2LS42OS0uNTQtMS4yMy0uNTQtLjM3LDAtLjY4LC4wOC0uOTMsLjI1LS4yNCwuMTctLjQyLC40LS41NCwuNy0uMTIsLjMtLjE4LC42NC0uMTgsMS4wNCwwLC42MSwuMTQsMS4wOSwuNDIsMS40NiwuMjgsLjM2LC42OSwuNTUsMS4yMywuNTVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzEuMTMsNTMuMzJ2LTUuNzhoMXYxLjY3aC4xM3Y0LjExaC0xLjEzWm00LjA2LDB2LTIuODRjMC0uMjItLjAyLS40Ni0uMDYtLjY5cy0uMTEtLjQ2LS4yMS0uNjZjLS4xLS4yLS4yNS0uMzctLjQ0LS40OS0uMTktLjEyLS40NC0uMTktLjc1LS4xOS0uMiwwLS4zOSwuMDMtLjU3LC4xLS4xOCwuMDctLjMzLC4xNy0uNDcsLjMyLS4xMywuMTUtLjI0LC4zNC0uMzIsLjU4LS4wOCwuMjQtLjEyLC41My0uMTIsLjg3bC0uNy0uMjZjMC0uNTIsLjEtLjk5LC4yOS0xLjM5LC4yLS40LC40OC0uNzEsLjg1LS45NHMuODEtLjM0LDEuMzMtLjM0Yy40LDAsLjc0LC4wNiwxLjAxLC4xOSwuMjcsLjEzLC40OSwuMywuNjYsLjUxLC4xNywuMjEsLjMsLjQ0LC4zOSwuNjhzLjE1LC40OSwuMTgsLjcyYy4wMywuMjQsLjA1LC40NCwuMDUsLjYydjMuMjFoLTEuMTNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzcuMDgsNDguNDR2LS45aDMuOTV2LjloLTMuOTVabTMuOTUsNC44OGMtLjM2LC4wNy0uNzIsLjEtMS4wNywuMDktLjM1LS4wMS0uNjYtLjA4LS45NC0uMi0uMjctLjEzLS40OC0uMzItLjYyLS41OS0uMTMtLjI0LS4xOS0uNDgtLjItLjczLDAtLjI1LS4wMS0uNTMtLjAxLS44NHYtNS4xMWgxLjEydjUuMDZjMCwuMjMsMCwuNDMsMCwuNiwwLC4xNywuMDQsLjMyLC4xMSwuNDMsLjEzLC4yMiwuMzMsLjM1LC42MSwuMzgsLjI4LC4wMywuNjEsLjAyLC45OS0uMDR2Ljk1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQzLjg4LDUzLjQ4Yy0uNDMsMC0uNzktLjA4LTEuMDgtLjI0LS4yOS0uMTYtLjUxLS4zNy0uNjYtLjYzLS4xNS0uMjYtLjIyLS41NS0uMjItLjg2LDAtLjI5LC4wNS0uNTUsLjE2LS43NywuMS0uMjIsLjI2LS40MSwuNDYtLjU2LC4yLS4xNiwuNDUtLjI4LC43NS0uMzgsLjI2LS4wNywuNTUtLjE0LC44Ny0uMiwuMzItLjA2LC42Ny0uMTEsMS4wMy0uMTYsLjM2LS4wNSwuNzEtLjEsMS4wNy0uMTVsLS40MSwuMjJjMC0uNDUtLjA5LS43OS0uMjktMS4wMS0uMi0uMjItLjU0LS4zMy0xLjAyLS4zMy0uMywwLS41OCwuMDctLjgzLC4yMS0uMjUsLjE0LS40MywuMzctLjUzLC43bC0xLjA0LS4zMmMuMTQtLjUsLjQxLS44OSwuODItMS4xOCwuNC0uMjksLjk0LS40NCwxLjYtLjQ0LC41MiwwLC45NywuMDksMS4zNSwuMjdzLjY3LC40NiwuODQsLjg0Yy4wOSwuMTksLjE1LC4zOSwuMTcsLjYsLjAyLC4yMSwuMDMsLjQ0LC4wMywuNjh2My41NmgtLjk5di0xLjMybC4xOSwuMTdjLS4yNCwuNDQtLjU0LC43Ny0uOTEsLjk5LS4zNywuMjItLjgyLC4zMi0xLjM2LC4zMlptLjItLjkyYy4zMiwwLC41OS0uMDYsLjgyLS4xNywuMjMtLjExLC40MS0uMjYsLjU1LS40M3MuMjMtLjM2LC4yNy0uNTVjLjA2LS4xNywuMS0uMzYsLjEtLjU4LDAtLjIxLC4wMS0uMzksLjAxLS41MWwuMzYsLjEzYy0uMzUsLjA1LS42NywuMS0uOTYsLjE0LS4yOSwuMDQtLjU1LC4wOC0uNzgsLjEzcy0uNDQsLjA5LS42MiwuMTVjLS4xNSwuMDUtLjI5LC4xMi0uNDEsLjE5LS4xMiwuMDgtLjIxLC4xNy0uMjgsLjI3cy0uMSwuMjQtLjEsLjM5LC4wNCwuMjksLjExLC40MWMuMDgsLjEzLC4xOSwuMjMsLjM0LC4zLC4xNSwuMDcsLjM1LC4xMSwuNTksLjExWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTUwLjgyLDUzLjQ4Yy0uNTksMC0xLjEtLjEzLTEuNTEtLjQtLjQxLS4yNi0uNzMtLjYzLS45NS0xLjA5LS4yMi0uNDYtLjMzLS45OC0uMzMtMS41NywwLS42LC4xMi0xLjEyLC4zNC0xLjU4LC4yMi0uNDYsLjU1LS44MiwuOTYtMS4wOCwuNDItLjI2LC45Mi0uMzksMS41LS4zOSwuNjMsMCwxLjE3LC4xNiwxLjYyLC40NywuNDUsLjMxLC43NCwuNzQsLjg5LDEuMjlsLTEuMTEsLjMyYy0uMTEtLjMyLS4yOS0uNTgtLjU0LS43Ni0uMjUtLjE4LS41NC0uMjctLjg2LS4yNy0uMzcsMC0uNjcsLjA5LS45LC4yNi0uMjQsLjE3LS40MSwuNDEtLjUyLC43MS0uMTEsLjMtLjE3LC42NC0uMTgsMS4wMywwLC42LC4xNCwxLjA4LC40MSwxLjQ1LC4yNywuMzcsLjY3LC41NSwxLjIsLjU1LC4zNiwwLC42NS0uMDgsLjg4LS4yNSwuMjItLjE3LC4zOS0uNCwuNTEtLjcxbDEuMTQsLjI3Yy0uMTksLjU2LS41LDEtLjk0LDEuMy0uNDQsLjMtLjk2LC40NS0xLjU4LC40NVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01My43OSw0OC40NHYtLjloMy45NXYuOWgtMy45NVptMy45NSw0Ljg4Yy0uMzYsLjA3LS43MiwuMS0xLjA3LC4wOS0uMzUtLjAxLS42Ni0uMDgtLjk0LS4yLS4yNy0uMTMtLjQ4LS4zMi0uNjItLjU5LS4xMy0uMjQtLjE5LS40OC0uMi0uNzMsMC0uMjUtLjAxLS41My0uMDEtLjg0di01LjExaDEuMTJ2NS4wNmMwLC4yMywwLC40MywwLC42LDAsLjE3LC4wNCwuMzIsLjExLC40MywuMTMsLjIyLC4zMywuMzUsLjYxLC4zOCwuMjgsLjAzLC42MSwuMDIsLjk5LS4wNHYuOTVaIi8+PC9nPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTM3LjQ2LDg0LjgxYzE5LjE4LDAsMzQuNzMtMTUuNTUsMzQuNzMtMzQuNzNTNTYuNjQsMTUuMzUsMzcuNDYsMTUuMzUsMi43MywzMC45LDIuNzMsNTAuMDhzMTUuNTUsMzQuNzMsMzQuNzMsMzQuNzNaIi8+PGc+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTQ4LjAzLDUzLjMydi0zLjE5bC0yLjYxLTQuNTJoMS4zMWwxLjg3LDMuMjQsMS44Ny0zLjI0aDEuMzFsLTIuNjEsNC41MnYzLjE5aC0xLjEzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1NC4xOCw1My40OGMtLjU4LDAtMS4wOC0uMTMtMS41LS4zOS0uNDItLjI2LS43NS0uNjItLjk4LTEuMDhzLS4zNC0uOTktLjM0LTEuNTksLjEyLTEuMTMsLjM1LTEuNTljLjI0LS40NiwuNTctLjgyLC45OS0xLjA3cy45Mi0uMzgsMS40OS0uMzgsMS4wOCwuMTMsMS41LC4zOSwuNzUsLjYyLC45OSwxLjA4Yy4yMywuNDYsLjM1LC45OCwuMzUsMS41OHMtLjEyLDEuMTMtLjM1LDEuNTljLS4yMywuNDYtLjU2LC44Mi0uOTksMS4wOC0uNDIsLjI2LS45MiwuMzktMS41LC4zOVptMC0xLjA1Yy41NSwwLC45Ny0uMTksMS4yNC0uNTYsLjI3LS4zNywuNDEtLjg1LC40MS0xLjQ0cy0uMTQtMS4wOS0uNDEtMS40NWMtLjI4LS4zNi0uNjktLjU0LTEuMjMtLjU0LS4zNywwLS42OCwuMDgtLjkzLC4yNS0uMjQsLjE3LS40MiwuNC0uNTQsLjctLjEyLC4zLS4xOCwuNjQtLjE4LDEuMDQsMCwuNjEsLjE0LDEuMDksLjQyLDEuNDYsLjI4LC4zNiwuNjksLjU1LDEuMjMsLjU1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE2MC4zOCw1My40OGMtLjQsMC0uNzQtLjA2LTEuMDEtLjE5cy0uNDktLjMtLjY2LS41MWMtLjE3LS4yMS0uMy0uNDQtLjM5LS42OC0uMDktLjI1LS4xNS0uNDktLjE4LS43MnMtLjA1LS40NC0uMDUtLjYydi0zLjIxaDEuMTR2Mi44NGMwLC4yMiwuMDIsLjQ2LC4wNiwuNjksLjA0LC4yNCwuMTEsLjQ2LC4yMSwuNjYsLjEsLjIsLjI1LC4zNywuNDQsLjQ5LC4xOSwuMTIsLjQ0LC4xOSwuNzUsLjE5LC4yLDAsLjM5LS4wMywuNTctLjEsLjE4LS4wNywuMzMtLjE3LC40Ny0uMzIsLjEzLS4xNSwuMjQtLjM0LC4zMi0uNTgsLjA4LS4yNCwuMTEtLjUzLC4xMS0uODdsLjcsLjI2YzAsLjUyLS4xLC45OS0uMjksMS4zOS0uMiwuNC0uNDgsLjcxLS44NSwuOTRzLS44MSwuMzQtMS4zMywuMzRabTEuOTEtLjE2di0xLjY3aC0uMTN2LTQuMTFoMS4xM3Y1Ljc4aC0xWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE2NC43OCw1My4zMnYtNS43OGgxdjEuNGwtLjE0LS4xOGMuMDctLjE5LC4xNi0uMzYsLjI4LS41MXMuMjUtLjI4LC40LS4zOGMuMTUtLjExLC4zMS0uMTksLjQ5LS4yNSwuMTgtLjA2LC4zNy0uMDksLjU1LS4xMXMuMzcsMCwuNTUsLjAzdjEuMDVjLS4xOS0uMDUtLjQtLjA2LS42My0uMDQtLjIzLC4wMi0uNDQsLjA5LS42MywuMjItLjE4LC4xMi0uMzMsLjI2LS40MywuNDMtLjExLC4xNy0uMTgsLjM1LS4yMywuNTYtLjA1LC4yMS0uMDcsLjQyLS4wNywuNjV2Mi45MmgtMS4xM1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNzEuMDYsNTMuMzJ2LTcuNzFoMXY0LjE2aC4xM3YzLjU1aC0xLjEzWm00LjA2LDB2LTIuODRjMC0uMjItLjAyLS40Ni0uMDYtLjY5cy0uMTEtLjQ2LS4yMS0uNjZjLS4xLS4yLS4yNS0uMzctLjQ0LS40OS0uMTktLjEyLS40NC0uMTktLjc1LS4xOS0uMiwwLS4zOSwuMDMtLjU3LC4xLS4xOCwuMDctLjMzLC4xNy0uNDcsLjMyLS4xMywuMTUtLjI0LC4zNC0uMzIsLjU4LS4wOCwuMjQtLjEyLC41My0uMTIsLjg3bC0uNy0uMjZjMC0uNTIsLjEtLjk5LC4yOS0xLjM5cy40OC0uNzEsLjg1LS45NCwuODEtLjM0LDEuMzMtLjM0Yy40LDAsLjc0LC4wNiwxLjAxLC4xOXMuNDksLjMsLjY2LC41MWMuMTcsLjIxLC4zLC40NCwuMzksLjY4LC4wOSwuMjUsLjE1LC40OSwuMTgsLjcyLC4wMywuMjQsLjA1LC40NCwuMDUsLjYydjMuMjFoLTEuMTNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTgwLjE2LDUzLjQ4Yy0uNTgsMC0xLjA4LS4xMy0xLjUtLjM5LS40Mi0uMjYtLjc1LS42Mi0uOTgtMS4wOHMtLjM0LS45OS0uMzQtMS41OSwuMTItMS4xMywuMzUtMS41OWMuMjQtLjQ2LC41Ny0uODIsLjk5LTEuMDdzLjkyLS4zOCwxLjQ5LS4zOCwxLjA4LC4xMywxLjUsLjM5LC43NSwuNjIsLjk5LDEuMDhjLjIzLC40NiwuMzUsLjk4LC4zNSwxLjU4cy0uMTIsMS4xMy0uMzUsMS41OWMtLjIzLC40Ni0uNTYsLjgyLS45OSwxLjA4LS40MiwuMjYtLjkyLC4zOS0xLjUsLjM5Wm0wLTEuMDVjLjU1LDAsLjk3LS4xOSwxLjI0LS41NiwuMjctLjM3LC40MS0uODUsLjQxLTEuNDRzLS4xNC0xLjA5LS40MS0xLjQ1Yy0uMjgtLjM2LS42OS0uNTQtMS4yMy0uNTQtLjM3LDAtLjY4LC4wOC0uOTMsLjI1LS4yNCwuMTctLjQyLC40LS41NCwuNy0uMTIsLjMtLjE4LC42NC0uMTgsMS4wNCwwLC42MSwuMTQsMS4wOSwuNDIsMS40NiwuMjgsLjM2LC42OSwuNTUsMS4yMywuNTVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTg2LjM4LDUzLjQ4Yy0uNywwLTEuMjgtLjE2LTEuNzItLjQ3LS40NC0uMzEtLjcxLS43NS0uODEtMS4zMWwxLjE1LS4xOGMuMDcsLjMsLjI0LC41NCwuNSwuNzEsLjI2LC4xNywuNTgsLjI2LC45NywuMjYsLjM1LDAsLjYyLS4wNywuODItLjIxLC4yLS4xNCwuMy0uMzQsLjMtLjU5LDAtLjE1LS4wNC0uMjYtLjEtLjM2LS4wNy0uMDktLjIxLS4xOC0uNDQtLjI2LS4yMi0uMDgtLjU2LS4xOC0xLjAxLS4zMS0uNS0uMTMtLjg5LS4yNy0xLjE4LS40MS0uMjktLjE1LS41LS4zMi0uNjItLjUycy0uMTgtLjQ0LS4xOC0uNzJjMC0uMzUsLjA5LS42NSwuMjgtLjkyLC4xOS0uMjYsLjQ1LS40NiwuNzgtLjYsLjM0LS4xNCwuNzMtLjIxLDEuMTktLjIxcy44NCwuMDcsMS4xOCwuMjFjLjM1LC4xNCwuNjMsLjM0LC44NCwuNTksLjIxLC4yNiwuMzQsLjU1LC4zOSwuOWwtMS4xNSwuMjFjLS4wNC0uMjgtLjE3LS41LS4zOS0uNjYtLjIyLS4xNi0uNTEtLjI1LS44Ni0uMjYtLjM0LS4wMS0uNjEsLjA0LS44MiwuMTctLjIxLC4xMy0uMzIsLjMtLjMyLC41MiwwLC4xMywuMDQsLjI0LC4xMiwuMzMsLjA4LC4wOSwuMjQsLjE4LC40NywuMjZzLjU3LC4xOCwxLjAzLC4yOWMuNDksLjEyLC44NywuMjYsMS4xNiwuNDEsLjI5LC4xNSwuNDksLjMzLC42MSwuNTRzLjE4LC40NiwuMTgsLjc2YzAsLjU3LS4yMSwxLjAyLS42MiwxLjM0LS40MiwuMzItLjk5LC40OS0xLjcyLC40OVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xODkuMjcsNDguNDR2LS45aDMuOTV2LjloLTMuOTVabTMuOTUsNC44OGMtLjM2LC4wNy0uNzIsLjEtMS4wNywuMDktLjM1LS4wMS0uNjYtLjA4LS45NC0uMi0uMjctLjEyLS40OC0uMzItLjYyLS41OS0uMTMtLjI0LS4xOS0uNDgtLjItLjczLDAtLjI1LS4wMS0uNTMtLjAxLS44NHYtNS4xMWgxLjEydjUuMDZjMCwuMjMsMCwuNDMsMCwuNnMuMDQsLjMyLC4xMSwuNDNjLjEzLC4yMiwuMzMsLjM1LC42MSwuMzgsLjI4LC4wMywuNjEsLjAyLC45OS0uMDN2Ljk1WiIvPjwvZz48cmVjdCBjbGFzcz0iY2xzLTIiIHg9IjEzNC44MyIgeT0iMTUuMzUiIHdpZHRoPSI2OS40NSIgaGVpZ2h0PSI2OS40NSIvPjxnPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI1NS40Miw1My4zMnYtMy4xOWwtMi42MS00LjUyaDEuMzFsMS44NywzLjI0LDEuODctMy4yNGgxLjMxbC0yLjYxLDQuNTJ2My4xOWgtMS4xM1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNjIuNDIsNTMuNDhjLS41OCwwLTEuMDgtLjEzLTEuNS0uMzktLjQyLS4yNi0uNzUtLjYyLS45OC0xLjA4cy0uMzQtLjk5LS4zNC0xLjU5LC4xMi0xLjEzLC4zNS0xLjU5Yy4yNC0uNDYsLjU3LS44MiwuOTktMS4wNywuNDItLjI2LC45Mi0uMzgsMS40OS0uMzhzMS4wOCwuMTMsMS41LC4zOWMuNDIsLjI2LC43NSwuNjIsLjk5LDEuMDgsLjIzLC40NiwuMzUsLjk4LC4zNSwxLjU4cy0uMTIsMS4xMy0uMzUsMS41OS0uNTYsLjgyLS45OSwxLjA4Yy0uNDIsLjI2LS45MiwuMzktMS41LC4zOVptMC0xLjA1Yy41NSwwLC45Ny0uMTksMS4yNC0uNTYsLjI3LS4zNywuNDEtLjg1LC40MS0xLjQ0cy0uMTQtMS4wOS0uNDEtMS40NWMtLjI4LS4zNi0uNjktLjU0LTEuMjMtLjU0LS4zNywwLS42OCwuMDgtLjkzLC4yNS0uMjQsLjE3LS40MiwuNC0uNTQsLjctLjEyLC4zLS4xOCwuNjQtLjE4LDEuMDQsMCwuNjEsLjE0LDEuMDksLjQyLDEuNDYsLjI4LC4zNiwuNjksLjU1LDEuMjMsLjU1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI2OC42Miw1My40OGMtLjQsMC0uNzQtLjA2LTEuMDEtLjE5LS4yNy0uMTMtLjQ5LS4zLS42Ni0uNTEtLjE3LS4yMS0uMy0uNDQtLjM5LS42OC0uMDktLjI1LS4xNS0uNDktLjE4LS43Mi0uMDMtLjI0LS4wNS0uNDQtLjA1LS42MnYtMy4yMWgxLjE0djIuODRjMCwuMjIsLjAyLC40NiwuMDYsLjY5LC4wNCwuMjQsLjExLC40NiwuMjEsLjY2LC4xLC4yLC4yNSwuMzcsLjQ0LC40OSwuMTksLjEzLC40NCwuMTksLjc1LC4xOSwuMiwwLC4zOS0uMDMsLjU3LS4xLC4xOC0uMDcsLjMzLS4xNywuNDctLjMyLC4xMy0uMTUsLjI0LS4zNCwuMzItLjU4LC4wOC0uMjQsLjExLS41MywuMTEtLjg3bC43LC4yNmMwLC41Mi0uMSwuOTktLjI5LDEuMzlzLS40OCwuNzEtLjg1LC45NGMtLjM3LC4yMi0uODEsLjM0LTEuMzMsLjM0Wm0xLjkxLS4xNnYtMS42N2gtLjEzdi00LjExaDEuMTN2NS43OGgtMVoiLz48L2c+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjYyLjU0LDg0LjgxYzE5LjE4LDAsMzQuNzMtMTUuNTUsMzQuNzMtMzQuNzNzLTE1LjU1LTM0LjczLTM0LjczLTM0LjczLTM0LjczLDE1LjU1LTM0LjczLDM0LjczLDE1LjU1LDM0LjczLDM0LjczLDM0LjczWiIvPjwvc3ZnPg=="},8605:function(L,M,j){M.Z=j.p+"assets/images/MaximaMessageDeliveryTopDM-10fd27f3105103716400729fe5e7ab96.svg"},2673:function(L,M,j){M.Z=j.p+"assets/images/MaximaMessageDeliveryTopLM-b6204257d7af605da1027d9edbf6a574.svg"}}]);