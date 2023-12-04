"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8033],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:e},c),{},{components:n})):r.createElement(f,o({ref:e},c))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},431:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},l="Start",u={unversionedId:"buildonminima/txntutorial/start",id:"buildonminima/txntutorial/start",title:"Start",description:"Here we will go through and explain how to create some basic transactions that use custom scripts. This will show how to use the Minima commands to construct, sign and post transactions. To test scripts and play with different transactions or constructions it is recommended that you use a private chain. Then none of your funds are at risk!",source:"@site/docs/buildonminima/txntutorial/start.md",sourceDirName:"buildonminima/txntutorial",slug:"/buildonminima/txntutorial/start",permalink:"/docs/buildonminima/txntutorial/start",editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MiniDapp Stores",permalink:"/docs/buildonminima/dapptutorial/minidappstores"},next:{title:"Pruning",permalink:"/docs/buildonminima/txntutorial/pruning"}},c={},p=[],m={toc:p};function d(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"start"},"Start"),(0,a.kt)("p",null,"Here we will go through and explain how to create some basic transactions that use custom scripts. This will show how to use the Minima commands to construct, sign and post transactions. To test scripts and play with different transactions or constructions it is recommended that you use a private chain. Then none of your funds are at risk!"),(0,a.kt)("p",null,"First create a new folder and copy the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/minima-global/Minima/raw/master/jar/minima.jar"},"minima.jar")," into that folder. We will run everything from there."),(0,a.kt)("p",null,"From the command line cd into that folder."),(0,a.kt)("p",null,"To start a private chain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"java -jar minima.jar -data minidata1 -test -nop2p -genesis\n")),(0,a.kt)("p",null,"These parameters mean: ",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"-data")," : the data folder where all the config files for this node are stored. Default is a hidden .minima folder under the user's home directory. If you want to specify a folder not in the user's home directory, you must use the complete path.",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"-test")," : this uses test settings which have a faster blocktime and only keep a shorter chain in memory. If you are compiling Minima yourself you can edit these to your needs.",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"-nop2p")," : do not try and connect to other nodes in the p2p network",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"-genesis")," : delete all old data and create a new genesis block",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Once you start Minima in this way you will have your own private chain, you will be sent the genesis Minima to spend, and you can enter commands directly into the console. Check your balance with \u2018balance\u2019."),(0,a.kt)("p",null,"If you need to quit Minima and wish to restart it without deleting old data use :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"java -jar minima.jar -data minidata1 -test -nop2p\n")))}d.isMDXComponent=!0}}]);