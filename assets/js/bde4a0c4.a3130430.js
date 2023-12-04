"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[3958],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6170:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:6},l="Login to Minima",p={unversionedId:"runanode/login",id:"runanode/login",title:"Login to Minima",description:"Desktop",source:"@site/docs/runanode/login.md",sourceDirName:"runanode",slug:"/runanode/login",permalink:"/docs/runanode/login",editUrl:"https://github.com/minima-global/minidocs/docs/runanode/login.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Desktop Command Line",permalink:"/docs/runanode/selectplatform/manualnode"},next:{title:"Join the network",permalink:"/docs/runanode/jointhenetwork"}},c={},u=[{value:"Desktop",id:"desktop",level:2},{value:"Server",id:"server",level:2},{value:"Android - Desktop connect",id:"android---desktop-connect",level:2},{value:"Set your own password",id:"set-your-own-password",level:3}],d={toc:u};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"login-to-minima"},"Login to Minima"),(0,a.kt)("h2",{id:"desktop"},"Desktop"),(0,a.kt)("p",null,"If you are using the JNLP on desktop, simply click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Launch MinimaOS")," button or go to ",(0,a.kt)("a",{parentName:"p",href:"https://127.0.0.1:9003/"},"https://127.0.0.1:9003/")," in your web browser. If you have any trouble logging in, close the window and restart Minima. "),(0,a.kt)("p",null,"Similarly, if using docker desktop go to ",(0,a.kt)("a",{parentName:"p",href:"https://127.0.0.1:9003/"},"https://127.0.0.1:9003/")," "),(0,a.kt)("p",null,"If you installed Minima on a different port to 9001, your login page can be accessed from this base port +2. "),(0,a.kt)("h2",{id:"server"},"Server"),(0,a.kt)("p",null,"Access your login screen by going to https://YourserverIP:9003/"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"We recommend configuring your server's firewall to only having the mds port (9003) accessible from your home IP address.")),(0,a.kt)("h2",{id:"android---desktop-connect"},"Android - Desktop connect"),(0,a.kt)("p",null,"Android users can connect to their phone node from a computer that is connected to the same WiFi network. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Minima and find ",(0,a.kt)("strong",{parentName:"li"},"Settings")," ")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"settings",src:n(8842).Z+"#width10",width:"116",height:"152"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Desktop connect")),(0,a.kt)("li",{parentName:"ol"},"If you have recently joined a WiFi network, refresh the URL"),(0,a.kt)("li",{parentName:"ol"},"From your computer's web browser, go to the URL shown")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"desktopconnect",src:n(3032).Z+"#width30",width:"1060",height:"2010"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Accept the security warning shown "),(0,a.kt)("li",{parentName:"ol"},"Enter the password shown to login ")),(0,a.kt)("p",null,"Voila! You can now use your node on your computer!"),(0,a.kt)("h3",{id:"set-your-own-password"},"Set your own password"),(0,a.kt)("p",null,"To set your own password for Desktop Connect:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the Minima app on your phone"),(0,a.kt)("li",{parentName:"ol"},"Tap at the top of the screen to show the MinimaOS title bar"),(0,a.kt)("li",{parentName:"ol"},"Tap on the 3 dots and select ",(0,a.kt)("strong",{parentName:"li"},"Startup Params")),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("inlineCode",{parentName:"li"},"-mdspassword yOurp@ssw0rdhere")," to set your own password"),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Save")),(0,a.kt)("li",{parentName:"ol"},"Tap at the top of the screen to show the MinimaOS title bar again"),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Shutdown")," to restart Minima")),(0,a.kt)("p",null,"When you reopen Minima, go to ",(0,a.kt)("strong",{parentName:"p"},"Settings > Desktop Connect")," to confirm your password has been set."))}m.isMDXComponent=!0},3032:function(e,t,n){t.Z=n.p+"assets/images/desktopconnect-efc77441713c59a0b0a738ad2a386839.png"},8842:function(e,t,n){t.Z=n.p+"assets/images/settingsicon-882226046ee121dcc991181bd2164849.png"}}]);