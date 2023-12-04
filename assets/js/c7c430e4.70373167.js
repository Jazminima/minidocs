"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[1811],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6217:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={sidebar_position:6},p="Interactive MiniDapp",s={unversionedId:"buildonminima/dapptutorial/interactiveminidapp",id:"buildonminima/dapptutorial/interactiveminidapp",title:"Interactive MiniDapp",description:"In this tutorial, we will build a MiniDapp that interacts with Minima blockchain.",source:"@site/docs/buildonminima/dapptutorial/interactiveminidapp.md",sourceDirName:"buildonminima/dapptutorial",slug:"/buildonminima/dapptutorial/interactiveminidapp",permalink:"/docs/buildonminima/dapptutorial/interactiveminidapp",editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/dapptutorial/interactiveminidapp.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Basic MiniDapp",permalink:"/docs/buildonminima/dapptutorial/basicminidapp"},next:{title:"React MiniDapp",permalink:"/docs/buildonminima/dapptutorial/reactminidapp"}},c={},u=[{value:"Using mds.js",id:"using-mdsjs",level:2},{value:"Packaging your MiniDapp",id:"packaging-your-minidapp",level:2},{value:"Installing your MiniDapp",id:"installing-your-minidapp",level:2},{value:"MiniDapp Downloads",id:"minidapp-downloads",level:2},{value:"Next Steps",id:"next-steps",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interactive-minidapp"},"Interactive MiniDapp"),(0,o.kt)("p",null,"In this tutorial, we will build a MiniDapp that interacts with Minima blockchain."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This tutorial uses JavaScript to create a web application. If you are not using JavaScript, you can still communicate with Minima using http to make secure RPC Get Requests. ",(0,o.kt)("br",null),"\nYou can see which Minima commands are available by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"help")," on your node\u2019s CLI.  "))),(0,o.kt)("p",null,"Create a new folder for a new MiniDapp - ",(0,o.kt)("inlineCode",{parentName:"p"},"helloworld2"),"."),(0,o.kt)("p",null,"Using your basic ",(0,o.kt)("inlineCode",{parentName:"p"},"helloworld")," MiniDapp as a template, add the following files to your new folder, changing the name, version and description in the config file as you wish."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"dapp.conf"),(0,o.kt)("li",{parentName:"ol"},"favicon.ico"),(0,o.kt)("li",{parentName:"ol"},"index.html"),(0,o.kt)("li",{parentName:"ol"},"styling.css (optional)")),(0,o.kt)("p",null,"Next, we will go into how to use the MiniDapp System (MDS) and JavaScript to create a MiniDapp that interacts with the Minima blockchain."),(0,o.kt)("p",null,"To learn about MDS.js, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/buildonminima/dapps/mdsjs"},"MDS JS Library"),"."),(0,o.kt)("h2",{id:"using-mdsjs"},"Using mds.js"),(0,o.kt)("p",null,"To simplify development, a script is provided which gives you access to an MDS object that allows you to access useful properties which we will look at next.  "),(0,o.kt)("p",null,"Download mds.js from GitHub ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/minima-global/Minima/master/mds/mds.js"},"here"),"."),(0,o.kt)("p",null,"Add the mds.js file to your ",(0,o.kt)("strong",{parentName:"p"},"helloworld2")," folder."),(0,o.kt)("p",null,"Add the mds.js file as a script into the head of your ",(0,o.kt)("strong",{parentName:"p"},"index.html")," file to get access to the MDS object."),(0,o.kt)("p",null,"It should look something like the below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<head>\n    \x3c!--   The MINIMA MDS JavaScript Library --\x3e\n    <script type="text/javascript" src="mds.js"><\/script>\n    <link rel="icon" type="image/x-icon" href="favicon.ico">\n    <title>Hello World 2</title>\n</head>\n')),(0,o.kt)("p",null,"The example ",(0,o.kt)("strong",{parentName:"p"},"index.html")," file below provides a simple example of returning the latest block number from the node and querying the node's status, using the Minima ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," command."),(0,o.kt)("p",null,"Copy and paste the code into your ",(0,o.kt)("strong",{parentName:"p"},"index.html")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<html>\n<head>\n    \x3c!--   The MINIMA MDS JavaScript Library --\x3e\n    <script type="text/javascript" src="mds.js"><\/script>\n    <link rel="icon" type="image/x-icon" href="favicon.ico">\n    <title>Hello World 2</title>\n</head>\n<body>\n<style></style>\n\n<h2>Hello World!</h2>\n<p>Current Minima Block Height: <span id="block-height"></span></p>\n<p>Current Node Status: <span id="node-status"></span></p>\n\n<button onclick=\'runStatus();\'>CHECK STATUS</button>\n\n<script type="text/javascript">\n\n    function runStatus(){\n        \n        // run the Minima status command to return information about the node\'s current state\n        MDS.cmd("status", function(res) {\n            \n            //if the response status is true\n            if (res.status) {\n                //  convert the JSON object response to a string and format it\n                const nodeStatus = JSON.stringify(res.response, " ", \'\\t\');\n                \n                // show the response on the page\n                document.getElementById("node-status").innerText = nodeStatus;\n\n            //if the response status is false\n            }else{\n                \n                document.getElementById("node-status").innerText = "Could not retrieve current node Status";    \n    \n            }})\n        }\n    \n        //Initialise web socket \n        MDS.init(function(msg){\n            if(msg.event == "inited") {\n                // READY TO RUN CMDS!\n                // run the Minima status command to return information about the node\'s current state\n                MDS.cmd("status", function(res) {\n    \n                    if (res.status) {\n                        \n                        // get the block number from the Status object returned\n                        const blockHeight = res.response.chain.block;\n    \n                        document.getElementById("block-height").innerText = blockHeight;    \n    \n                    }\n                })          \n    \n            }else if(msg.event == "NEWBLOCK"){\n            // the chain tip has changed\n    \n            }else if(msg.event == "NEWBALANCE"){\n            // user\'s balance has changed \n            \n            }else if(msg.event == "MINING"){    \n            // mining has started or ended\n    \n            }else if(msg.event == "MINIMALOG"){\n            // new Minima log message\n    \n            }else{\n    \n                \n            }\n        });\n         \n        \n    <\/script>\n</body>\n</html>\n')),(0,o.kt)("h2",{id:"packaging-your-minidapp"},"Packaging your MiniDapp"),(0,o.kt)("p",null,"We now have a complete helloworld2 folder containing: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"dapp.conf"),(0,o.kt)("li",{parentName:"ol"},"favicon.ico"),(0,o.kt)("li",{parentName:"ol"},"index.html"),(0,o.kt)("li",{parentName:"ol"},"styling.css (optional)"),(0,o.kt)("li",{parentName:"ol"},"mds.js")),(0,o.kt)("p",null,"Zip up the contents of this folder (not the folder itself)."),(0,o.kt)("p",null,"Rename the folder to ",(0,o.kt)("strong",{parentName:"p"},"helloworld2.mds.zip")," or if you are using a zip library through your CLI run "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zip -r helloworld2.mds.zip \n")),(0,o.kt)("h2",{id:"installing-your-minidapp"},"Installing your MiniDapp"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/buildonminima/dapptutorial/basicminidapp#installing-your-minidapp"},"Installing your MiniDapp")," section."),(0,o.kt)("h2",{id:"minidapp-downloads"},"MiniDapp Downloads"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"HelloWorld2")," MiniDapp can also be downloaded from GitHub ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/minima-global/innovation-challenge/tree/main/Resources"},"here")),(0,o.kt)("p",null,"Minima\u2019s official MiniDapps can be downloaded from the ",(0,o.kt)("a",{parentName:"p",href:"https://minidapps.minima.global/"},"MiniDapps website"),"."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"The most powerful MiniDapps will use Smart Contracts, written in Minima's scripting language. ",(0,o.kt)("br",null),"\nPlease follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/buildonminima/txntutorial/start"},"Smart Contract Tutorial")," to learn more about writing Scripts on Minima."))}m.isMDXComponent=!0}}]);