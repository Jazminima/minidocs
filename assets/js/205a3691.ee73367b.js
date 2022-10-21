"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[9518],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),N=p(a),k=r,g=N["".concat(m,".").concat(k)]||N[k]||f[k]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},1116:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return f}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={sidebar_position:11},m="Configuration",p={unversionedId:"learn/minima/configuration",id:"learn/minima/configuration",title:"Configuration",description:"Base Types",source:"@site/docs/learn/minima/configuration.md",sourceDirName:"learn/minima",slug:"/learn/minima/configuration",permalink:"/docs/learn/minima/configuration",editUrl:"https://github.com/minima-global/minidocs/docs/learn/minima/configuration.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Quantum Security",permalink:"/docs/learn/minima/quantumsecurity"},next:{title:"About",permalink:"/docs/learn/maxima/maximaintro"}},d={},f=[{value:"Base Types",id:"base-types",level:2},{value:"General Parameters",id:"general-parameters",level:2},{value:"Global Parameters",id:"global-parameters",level:2}],N={toc:f};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"configuration"},"Configuration"),(0,l.kt)("h2",{id:"base-types"},"Base Types"),(0,l.kt)("p",null,"Minima uses the following custom Base types:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Size (bytes)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MiniByte"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Integer, Byte or Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MiniData"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A Hex or Base 32 hash"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4 bytes (length) + Data length in bytes (Max 256MB)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MiniNumber"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A decimal number with maximum 20 digits in front of the decimal and 44 digits after"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1 byte (scale) + 1 byte (data length) + Data length in bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MiniString"),(0,l.kt)("td",{parentName:"tr",align:"left"},"UTF-8 String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"MiniData representation of a UTF-8 string")))),(0,l.kt)("h2",{id:"general-parameters"},"General Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"IS_MOBILE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Is this node running on mobile? Mainly for metrics")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"IS_ACCEPTING_IN_LINKS"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Can the node accept incoming connections?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PRIVATE_NETWORK"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Is this a private network? If TRUE, don't connect to any users.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"AUTOMINE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Are we automining a TxPoW every block?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GENESIS"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Are we creating the genesis block?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"CLEAN"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Are we wiping previous data?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DATA_FOLDER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"userhome",".","minima"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Where the database files are stored. This is set at startup.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MINIMA_HOST"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"127.0.0.1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Host IP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"IS_HOST_SET"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Is the HOST set from command line?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MINIMA_PORT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"9001"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The main Minima port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"RPC_PORT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"9005"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Minima RPC port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TEST_PARAMS"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Test Params or Main Params")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"P2P_ENABLED"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Is the P2P System Enabled?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"P2P_ROOTNODE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Host and IP of the first P2P node")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"CONNECT_LIST"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Manual list of Minima nodes to connect to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"NUMBER_DAYS_SQLTXPOWDB"),(0,l.kt)("td",{parentName:"tr",align:"left"},"long"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"How many days to keep the TxPoW in the SQL DB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"NUMBER_HOURS_RAMTXPOWDB"),(0,l.kt)("td",{parentName:"tr",align:"left"},"long"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"How many hours to keep the TxPOW in the RAM mempool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"NUMBER_DAYS_ARCHIVE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"long"),(0,l.kt)("td",{parentName:"tr",align:"left"},"90"),(0,l.kt)("td",{parentName:"tr",align:"left"},"How many days do you archive the TxBlocks to resync users")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"USER_PULSE_FREQ"),(0,l.kt)("td",{parentName:"tr",align:"left"},"long"),(0,l.kt)("td",{parentName:"tr",align:"left"},"100","*","60","*","10"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number of seconds before sending a pulse message - every 10 minutes")))),(0,l.kt)("h2",{id:"global-parameters"},"Global Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MINIMA_VERSION"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The client version of Minima")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MINIMA_BLOCK_SPEED"),(0,l.kt)("td",{parentName:"tr",align:"left"},"MiniNumber"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.02"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Speed in blocks per second 0.02 = 50 second block time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MINIMA_BLOCKS_SPEED_CALC"),(0,l.kt)("td",{parentName:"tr",align:"left"},"MiniNumber"),(0,l.kt)("td",{parentName:"tr",align:"left"},"256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of blocks back to consider when checking speed and difficulty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MINIMA_CONFIRM_DEPTH"),(0,l.kt)("td",{parentName:"tr",align:"left"},"MiniNumber"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of blocks deep before a block is considered confirmed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MINIMA_CASCADE_FREQUENCY"),(0,l.kt)("td",{parentName:"tr",align:"left"},"MiniNumber"),(0,l.kt)("td",{parentName:"tr",align:"left"},"100"),(0,l.kt)("td",{parentName:"tr",align:"left"},"How often (in blocks) the chain is Cascaded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MINIMA_CASCADE_START_DEPTH"),(0,l.kt)("td",{parentName:"tr",align:"left"},"MiniNumber"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1024"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Depth of heaviest chain before we cascade")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MINIMA_CASCADE_LEVEL_NODES"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number of blocks at each cascade level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MINIMA_CASCADE_LEVELS"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of Cascade levels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MINIMA_MMR_PROOF_HISTORY"),(0,l.kt)("td",{parentName:"tr",align:"left"},"MiniNumber"),(0,l.kt)("td",{parentName:"tr",align:"left"},"256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Max Proof History - how far back to use a proof of coin. If there is a re-organization of more than this the proof will be invalid.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MEDIAN_BLOCK_CALC"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The MEDIAN time block is taken from this many blocks back. When calculating the Difficulty of a block (both from the tip and the previous block). This smooths out the time fluctuations for different blocks and removes incorrect times.")))))}k.isMDXComponent=!0}}]);