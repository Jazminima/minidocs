"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4308],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>B});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,B=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return t?a.createElement(B,s(s({ref:n},c),{},{components:t})):a.createElement(B,s({ref:n},c))}));function B(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:3},s="Advanced options",i={unversionedId:"userguides/usingmaxima/advancedoptions",id:"userguides/usingmaxima/advancedoptions",title:"Advanced options",description:"There are several advanced options available to users with access to a second Minima node that runs on a server.",source:"@site/docs/userguides/usingmaxima/advancedoptions.md",sourceDirName:"userguides/usingmaxima",slug:"/userguides/usingmaxima/advancedoptions",permalink:"/docs/userguides/usingmaxima/advancedoptions",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/userguides/usingmaxima/advancedoptions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Managing contacts",permalink:"/docs/userguides/usingmaxima/managingcontacts"},next:{title:"Recovery options",permalink:"/docs/userguides/recovery/recoveryoptions"}},l={},d=[{value:"Setting your Static MLS",id:"setting-your-static-mls",level:2},{value:"Permanent Addresses",id:"permanent-addresses",level:2},{value:"Setting up a Permanent Address:",id:"setting-up-a-permanent-address",level:3},{value:"Disabling contacts",id:"disabling-contacts",level:3},{value:"Whitelisting contacts",id:"whitelisting-contacts",level:3},{value:"Additional Help",id:"additional-help",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-options"},"Advanced options"),(0,o.kt)("p",null,"There are several advanced options available to users with access to a second Minima node that runs on a server."),(0,o.kt)("p",null,"It is possible to use a server node as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/userguides/usingmaxima/advancedoptions#setting-your-static-mls"},"static MLS"),", your server node will be the host used to manage the connections with your contacts. If not configured, your connections will be managed by randomly selected hosts."),(0,o.kt)("p",null,"When using a Static MLS, you can then create a ",(0,o.kt)("a",{parentName:"p",href:"/docs/userguides/usingmaxima/advancedoptions#setting-up-a-permanent-address"},"permanent ",(0,o.kt)("strong",{parentName:"a"},"MAX#")," address")," which can be shared instead of your contact address and allows anyone to message you or add you as a contact without worrying about your contact address expiring."),(0,o.kt)("p",null,"If creating a permanent MAX# address, you can then ",(0,o.kt)("a",{parentName:"p",href:"/docs/userguides/usingmaxima/advancedoptions#disabling-contacts"},"disable contacts")," - this still allows people to message you via your permanent address but does not allow them to add you as a contact. Specific contacts can be allowed if you choose to ",(0,o.kt)("a",{parentName:"p",href:"/docs/userguides/usingmaxima/advancedoptions#whitelisting-contacts"},"whitelist")," them."),(0,o.kt)("h2",{id:"setting-your-static-mls"},"Setting your Static MLS"),(0,o.kt)("p",null,"You may wish to become your own MLS or use another unchanging MLS to ensure a more stable with your contacts."),(0,o.kt)("p",null,"You can set up your own MLS by running another Minima node on a server that is open on the main Minima port (default port 9001)."),(0,o.kt)("p",null,"By running your own MLS, your online Contacts will always remain connected to you via your server node, instead of using a randomly selected server node that could go offline and changes every 12 hours."),(0,o.kt)("p",null,"To set your own static MLS host, from your ",(0,o.kt)("strong",{parentName:"p"},"server-based Minima node"),", find its ",(0,o.kt)("inlineCode",{parentName:"p"},"P2P identity")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxima")," command via the Minima Terminal. "),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand for example output from server node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'maxima\n{\n  "command":"maxima",\n  "status":true,\n  "pending":false,\n  "response":{\n    "logs":true,\n    "name":"mlsnode",\n    "publickey":"0x30819F300D06092A864886F70D010101050003818D00308189028181009570D2AB5CB494803D700ECA81D183140B3C3D255558864917592B40FD48BBE9F583FCBCF1E45DD353DCC74044F6013C86092AF453797003CECEDCFF3CB1690111F8C49B1C80CF994C0C8E1E78C1F45E67B4C4544A13BAC03F45F4B2004B6FB6E694583CC3BBDC38C2CC2518E054D7D810F84E0E59F233CECF21AFBDCFBA0A110203010001",\n    "staticmls":false,\n    "mls":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G1JG4Q2698U35U5QFQZUYM1QF5R9RC1ZHQKF0D5Z1UCAEVNE862R2B1FCN5N1E27AHNBEMZUWWCY986UF25DNNVZ4N8PHBV76W52BDFCDKBYAPYDAVN3E49RDTQ4JFFSJHKHZQ5F33Q32N5WRCHSCDTGCQ24ZNQQAM8QYW9B7TDMC7R37BD4UTNU04YT9PTYVQ99YJF1SPATJWS10608005NVBJB9@94.131.105.228:9001",\n    "localidentity":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@172.21.144.1:7001",\n    "p2pidentity":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001",\n    "contact":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G19DCGVJUKP4Y93Z8NBZE5YAVMTHBZHQ4E4JR04P3J4QJHYWNVFEP5Y1TU7DAJ7WK54KFEHCKNAAZPAV5GAW1GN85JGZHDQCNTE07QZJ43KAY01Y7DHHSG57VBE9NYS4QKTJ2BHS6GUA1AWNT6PZC3VFZV49NGCA48800C49T8TD7J03FASUM3H13QHA7VSFRKA3D0T2RWU9H34106080075P6AZ4@194.163.178.243:9001",\n    "poll":0\n  }\n}\n'))),(0,o.kt)("p",null,"On the primary node being used to communicate with your contacts, set your static MLS by running: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"maxextra action:staticmls host:serverp2pidentity\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand for example output from primary node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'maxextra action:staticmls host:MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001\n{\n  "command":"maxextra",\n  "params":{\n    "action":"staticmls",\n    "host":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001"\n  },\n  "status":true,\n  "pending":false,\n  "response":{\n    "staticmls":true,\n    "mls":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001"\n  }\n}\n'))),(0,o.kt)("p",null,"To subsequently stop using a static MLS and return to using a random host, use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"maxextra action:staticmls host:clear\n")),(0,o.kt)("h2",{id:"permanent-addresses"},"Permanent Addresses"),(0,o.kt)("p",null,"For certain use cases where it is necessary to be ",(0,o.kt)("strong",{parentName:"p"},"publicly contactable by someone who is not a contact"),", you can create a ",(0,o.kt)("strong",{parentName:"p"},"permanent address")," for your node. "),(0,o.kt)("p",null,'To enable a permanent address for your node, you must set the Maxima Public Key of your primary node as "permanent" on your static MLS node. '),(0,o.kt)("h3",{id:"setting-up-a-permanent-address"},"Setting up a Permanent Address:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On the primary node you use for communication")," which you have already configured to use a static MLS, find your Maxima Public Key using the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxima")," command."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand for example output "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'maxima\n{\n  "command":"maxima",\n  "status":true,\n  "pending":false,\n  "response":{\n    "logs":false,\n    "name":"yourname",\n    "publickey":"0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001",\n    "staticmls":true,\n    "mls":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001"\n    "localidentity":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G13YGKSTHJVZ77NAUBFHV1KPS0MHUZNSCFZQB3V2GN9AKFP12CB9SST1FY5DCN2FMM6MS5PB5RA6WQUM7UGQ9RMH1Q8ECU0YJAA6V271GR1HH7B84J1RT81W2QBWMWJSHRV0A2YVK91MYM6JQVAYSZF22P5U8SJSGTJTEZTS39V19B3KTQHVW9SR4J1T1BW1P6ZBF9K82QGQTBS10608004J5DQZ0@172.29.224.0:9001",\n    "p2pidentity":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G13YGKSTHJVZ77NAUBFHV1KPS0MHUZNSCFZQB3V2GN9AKFP12CB9SST1FY5DCN2FMM6MS5PB5RA6WQUM7UGQ9RMH1Q8ECU0YJAA6V271GR1HH7B84J1RT81W2QBWMWJSHRV0A2YVK91MYM6JQVAYSZF22P5U8SJSGTJTEZTS39V19B3KTQHVW9SR4J1T1BW1P6ZBF9K82QGQTBS10608004J5DQZ0@165.0.49.73:9001",\n    "contact":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G1FSDCR470HWPNA11N8DN9W2B15VYTRQS6WATHZ975GT1CVPMGDM439HHRUCMBRF3DJASTD8NPVW5EYV26HCGC2EB3N6JNPZF8QM4Q6Q393M049YQ0YB9CSE04Q4JCASWHQA54MMWWD8QARMUJGE1FAHKPF7CF7E87F0QCAU9PBVHT37AEB3MPAW9BGY6672NW12SHMVCS05JGK10608007RWBNFH@91.107.240.131:9001",\n    "poll":0\n  }\n}\n'))),(0,o.kt)("p",null,"Copy your Public Key, then ",(0,o.kt)("strong",{parentName:"p"},"on the server static MLS node")," enter the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"maxextra action:addpermanent publickey:INSERTPUBKEY\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand for example output "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'maxextra action:addpermanent publickey:0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001\n{\n  "command":"maxextra",\n  "params":{\n    "action":"addpermanent",\n    "publickey":"0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001"\n  },\n  "status":true,\n  "pending":false,\n  "response":"Added Permanent Maxima ID : 0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001"\n}\n'))),(0,o.kt)("p",null,"Now your primary node will be have a Permanent Address in the format "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MAX#"),"yourPubKey",(0,o.kt)("strong",{parentName:"p"},"#"),"staticMLSAddress"),(0,o.kt)("p",null,"Example permanent address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MAX#0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001#MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001\n")),(0,o.kt)("p",null,"This permanent address can now be shared with others, for example on a public site."),(0,o.kt)("p",null,"Anyone wishing to contact you over Maxima can send you a message via your permanent MAX# address using: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"maxima action:send to:MAX#yourPubKey#staticMLSAddress application: data:\n")),(0,o.kt)("h3",{id:"disabling-contacts"},"Disabling contacts"),(0,o.kt)("p",null,"Having a permanent address means anyone who knows your MAX# address can add you as a contact which may not be desirable."),(0,o.kt)("p",null,"To prevent anyone from adding you as a contact, ",(0,o.kt)("strong",{parentName:"p"},"from your primary node")," run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"maxextra action:allowallcontacts enable:false\n")),(0,o.kt)("p",null,"This will allow users who know your permanent MAX# address to send messages to your node, but will reject any requests to add you as a contact. "),(0,o.kt)("h3",{id:"whitelisting-contacts"},"Whitelisting contacts"),(0,o.kt)("p",null,"You can choose to whitelist specific people to allow them to add you as a contact, despite disabling contacts."),(0,o.kt)("p",null,"Once allowed, they can add you as a contact and vice versa provided they have not disabled contacts."),(0,o.kt)("p",null,"To whitelist someone, ",(0,o.kt)("strong",{parentName:"p"},"from your primary node")," run the following command, inserting their Maxima public key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"maxextra action:addallowed publickey:INSERTPUBLICKEY\n")),(0,o.kt)("h2",{id:"additional-help"},"Additional Help"),(0,o.kt)("p",null,"For additional help, please use the help commands from the Terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"help command:maxima\nhelp command:maxcontacts\nhelp command:maxextra\n")))}p.isMDXComponent=!0}}]);