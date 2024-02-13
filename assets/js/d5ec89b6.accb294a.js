"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8033],{1576:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(5893),a=n(1151);const o={sidebar_position:1},r="Start",s={id:"buildonminima/txntutorial/start",title:"Start",description:"Here we will go through and explain how to create some basic transactions that use custom scripts. This will show how to use the Minima commands to construct, sign and post transactions. To test scripts and play with different transactions or constructions it is recommended that you use a private chain. Then none of your funds are at risk!",source:"@site/docs/buildonminima/txntutorial/start.md",sourceDirName:"buildonminima/txntutorial",slug:"/buildonminima/txntutorial/start",permalink:"/docs/buildonminima/txntutorial/start",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MiniDapp Stores",permalink:"/docs/buildonminima/dapptutorial/minidappstores"},next:{title:"Pruning",permalink:"/docs/buildonminima/txntutorial/pruning"}},c={},d=[];function l(t){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"start",children:"Start"}),"\n",(0,i.jsx)(e.p,{children:"Here we will go through and explain how to create some basic transactions that use custom scripts. This will show how to use the Minima commands to construct, sign and post transactions. To test scripts and play with different transactions or constructions it is recommended that you use a private chain. Then none of your funds are at risk!"}),"\n",(0,i.jsxs)(e.p,{children:["First create a new folder and copy the ",(0,i.jsx)(e.a,{href:"https://github.com/minima-global/Minima/raw/master/jar/minima.jar",children:"minima.jar"})," into that folder. We will run everything from there."]}),"\n",(0,i.jsx)(e.p,{children:"From the command line cd into that folder."}),"\n",(0,i.jsx)(e.p,{children:"To start a private chain:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"java -jar minima.jar -data minidata1 -test -nop2p -genesis\n"})}),"\n",(0,i.jsxs)(e.p,{children:["These parameters mean: ",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(e.code,{children:"-data"})," : the data folder where all the config files for this node are stored. Default is a hidden .minima folder under the user's home directory. If you want to specify a folder not in the user's home directory, you must use the complete path.",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(e.code,{children:"-test"})," : this uses test settings which have a faster blocktime and only keep a shorter chain in memory. If you are compiling Minima yourself you can edit these to your needs.",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(e.code,{children:"-nop2p"})," : do not try and connect to other nodes in the p2p network",(0,i.jsx)("br",{}),"\r\n",(0,i.jsx)(e.code,{children:"-genesis"})," : delete all old data and create a new genesis block",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(e.p,{children:"Once you start Minima in this way you will have your own private chain, you will be sent the genesis Minima to spend, and you can enter commands directly into the console. Check your balance with \u2018balance\u2019."}),"\n",(0,i.jsx)(e.p,{children:"If you need to quit Minima and wish to restart it without deleting old data use :"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"java -jar minima.jar -data minidata1 -test -nop2p\n"})})]})}function h(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(l,{...t})}):l(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>r});var i=n(7294);const a={},o=i.createContext(a);function r(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:r(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);