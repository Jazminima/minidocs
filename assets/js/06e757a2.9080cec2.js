"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4308],{4672:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>B,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=s(5893),t=s(1151);const r={sidebar_position:3},o="Advanced options",i={id:"userguides/usingmaxima/advancedoptions",title:"Advanced options",description:"There are several advanced options available to users with access to a second Minima node that runs on a server.",source:"@site/docs/userguides/usingmaxima/advancedoptions.md",sourceDirName:"userguides/usingmaxima",slug:"/userguides/usingmaxima/advancedoptions",permalink:"/docs/userguides/usingmaxima/advancedoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/userguides/usingmaxima/advancedoptions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Managing contacts",permalink:"/docs/userguides/usingmaxima/managingcontacts"},next:{title:"Recovery options",permalink:"/docs/userguides/recovery/recoveryoptions"}},d={},c=[{value:"Setting your Static MLS",id:"setting-your-static-mls",level:2},{value:"Permanent Addresses",id:"permanent-addresses",level:2},{value:"Setting up a Permanent Address:",id:"setting-up-a-permanent-address",level:3},{value:"Disabling contacts",id:"disabling-contacts",level:3},{value:"Whitelisting contacts",id:"whitelisting-contacts",level:3},{value:"Additional Help",id:"additional-help",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"advanced-options",children:"Advanced options"}),"\n",(0,a.jsx)(n.p,{children:"There are several advanced options available to users with access to a second Minima node that runs on a server."}),"\n",(0,a.jsxs)(n.p,{children:["It is possible to use a server node as a ",(0,a.jsx)(n.a,{href:"/docs/userguides/usingmaxima/advancedoptions#setting-your-static-mls",children:"static MLS"}),", your server node will be the host used to manage the connections with your contacts. If not configured, your connections will be managed by randomly selected hosts."]}),"\n",(0,a.jsxs)(n.p,{children:["When using a Static MLS, you can then create a ",(0,a.jsxs)(n.a,{href:"/docs/userguides/usingmaxima/advancedoptions#setting-up-a-permanent-address",children:["permanent ",(0,a.jsx)(n.strong,{children:"MAX#"})," address"]})," which can be shared instead of your contact address and allows anyone to message you or add you as a contact without worrying about your contact address expiring."]}),"\n",(0,a.jsxs)(n.p,{children:["If creating a permanent MAX# address, you can then ",(0,a.jsx)(n.a,{href:"/docs/userguides/usingmaxima/advancedoptions#disabling-contacts",children:"disable contacts"})," - this still allows people to message you via your permanent address but does not allow them to add you as a contact. Specific contacts can be allowed if you choose to ",(0,a.jsx)(n.a,{href:"/docs/userguides/usingmaxima/advancedoptions#whitelisting-contacts",children:"whitelist"})," them."]}),"\n",(0,a.jsx)(n.h2,{id:"setting-your-static-mls",children:"Setting your Static MLS"}),"\n",(0,a.jsx)(n.p,{children:"You may wish to become your own MLS or use another unchanging MLS to ensure a more stable with your contacts."}),"\n",(0,a.jsx)(n.p,{children:"You can set up your own MLS by running another Minima node on a server that is open on the main Minima port (default port 9001)."}),"\n",(0,a.jsx)(n.p,{children:"By running your own MLS, your online Contacts will always remain connected to you via your server node, instead of using a randomly selected server node that could go offline and changes every 12 hours."}),"\n",(0,a.jsxs)(n.p,{children:["To set your own static MLS host, from your ",(0,a.jsx)(n.strong,{children:"server-based Minima node"}),", find its ",(0,a.jsx)(n.code,{children:"P2P identity"})," using the ",(0,a.jsx)(n.code,{children:"maxima"})," command via the Minima Terminal."]}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsx)("summary",{children:"Expand for example output from server node"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'maxima\r\n{\r\n  "command":"maxima",\r\n  "status":true,\r\n  "pending":false,\r\n  "response":{\r\n    "logs":true,\r\n    "name":"mlsnode",\r\n    "publickey":"0x30819F300D06092A864886F70D010101050003818D00308189028181009570D2AB5CB494803D700ECA81D183140B3C3D255558864917592B40FD48BBE9F583FCBCF1E45DD353DCC74044F6013C86092AF453797003CECEDCFF3CB1690111F8C49B1C80CF994C0C8E1E78C1F45E67B4C4544A13BAC03F45F4B2004B6FB6E694583CC3BBDC38C2CC2518E054D7D810F84E0E59F233CECF21AFBDCFBA0A110203010001",\r\n    "staticmls":false,\r\n    "mls":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G1JG4Q2698U35U5QFQZUYM1QF5R9RC1ZHQKF0D5Z1UCAEVNE862R2B1FCN5N1E27AHNBEMZUWWCY986UF25DNNVZ4N8PHBV76W52BDFCDKBYAPYDAVN3E49RDTQ4JFFSJHKHZQ5F33Q32N5WRCHSCDTGCQ24ZNQQAM8QYW9B7TDMC7R37BD4UTNU04YT9PTYVQ99YJF1SPATJWS10608005NVBJB9@94.131.105.228:9001",\r\n    "localidentity":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@172.21.144.1:7001",\r\n    "p2pidentity":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001",\r\n    "contact":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G19DCGVJUKP4Y93Z8NBZE5YAVMTHBZHQ4E4JR04P3J4QJHYWNVFEP5Y1TU7DAJ7WK54KFEHCKNAAZPAV5GAW1GN85JGZHDQCNTE07QZJ43KAY01Y7DHHSG57VBE9NYS4QKTJ2BHS6GUA1AWNT6PZC3VFZV49NGCA48800C49T8TD7J03FASUM3H13QHA7VSFRKA3D0T2RWU9H34106080075P6AZ4@194.163.178.243:9001",\r\n    "poll":0\r\n  }\r\n}\n'})})]}),"\n",(0,a.jsx)(n.p,{children:"On the primary node being used to communicate with your contacts, set your static MLS by running:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"maxextra action:staticmls host:serverp2pidentity\n"})}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsx)("summary",{children:"Expand for example output from primary node"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'maxextra action:staticmls host:MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001\r\n{\r\n  "command":"maxextra",\r\n  "params":{\r\n    "action":"staticmls",\r\n    "host":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001"\r\n  },\r\n  "status":true,\r\n  "pending":false,\r\n  "response":{\r\n    "staticmls":true,\r\n    "mls":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001"\r\n  }\r\n}\n'})})]}),"\n",(0,a.jsx)(n.p,{children:"To subsequently stop using a static MLS and return to using a random host, use"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"maxextra action:staticmls host:clear\n"})}),"\n",(0,a.jsx)(n.h2,{id:"permanent-addresses",children:"Permanent Addresses"}),"\n",(0,a.jsxs)(n.p,{children:["For certain use cases where it is necessary to be ",(0,a.jsx)(n.strong,{children:"publicly contactable by someone who is not a contact"}),", you can create a ",(0,a.jsx)(n.strong,{children:"permanent address"})," for your node."]}),"\n",(0,a.jsx)(n.p,{children:'To enable a permanent address for your node, you must set the Maxima Public Key of your primary node as "permanent" on your static MLS node.'}),"\n",(0,a.jsx)(n.h3,{id:"setting-up-a-permanent-address",children:"Setting up a Permanent Address:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"On the primary node you use for communication"})," which you have already configured to use a static MLS, find your Maxima Public Key using the ",(0,a.jsx)(n.code,{children:"maxima"})," command."]}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsx)("summary",{children:"Expand for example output "}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'maxima\r\n{\r\n  "command":"maxima",\r\n  "status":true,\r\n  "pending":false,\r\n  "response":{\r\n    "logs":false,\r\n    "name":"yourname",\r\n    "publickey":"0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001",\r\n    "staticmls":true,\r\n    "mls":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001"\r\n    "localidentity":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G13YGKSTHJVZ77NAUBFHV1KPS0MHUZNSCFZQB3V2GN9AKFP12CB9SST1FY5DCN2FMM6MS5PB5RA6WQUM7UGQ9RMH1Q8ECU0YJAA6V271GR1HH7B84J1RT81W2QBWMWJSHRV0A2YVK91MYM6JQVAYSZF22P5U8SJSGTJTEZTS39V19B3KTQHVW9SR4J1T1BW1P6ZBF9K82QGQTBS10608004J5DQZ0@172.29.224.0:9001",\r\n    "p2pidentity":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G13YGKSTHJVZ77NAUBFHV1KPS0MHUZNSCFZQB3V2GN9AKFP12CB9SST1FY5DCN2FMM6MS5PB5RA6WQUM7UGQ9RMH1Q8ECU0YJAA6V271GR1HH7B84J1RT81W2QBWMWJSHRV0A2YVK91MYM6JQVAYSZF22P5U8SJSGTJTEZTS39V19B3KTQHVW9SR4J1T1BW1P6ZBF9K82QGQTBS10608004J5DQZ0@165.0.49.73:9001",\r\n    "contact":"MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G1FSDCR470HWPNA11N8DN9W2B15VYTRQS6WATHZ975GT1CVPMGDM439HHRUCMBRF3DJASTD8NPVW5EYV26HCGC2EB3N6JNPZF8QM4Q6Q393M049YQ0YB9CSE04Q4JCASWHQA54MMWWD8QARMUJGE1FAHKPF7CF7E87F0QCAU9PBVHT37AEB3MPAW9BGY6672NW12SHMVCS05JGK10608007RWBNFH@91.107.240.131:9001",\r\n    "poll":0\r\n  }\r\n}\n'})})]}),"\n",(0,a.jsxs)(n.p,{children:["Copy your Public Key, then ",(0,a.jsx)(n.strong,{children:"on the server static MLS node"})," enter the command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"maxextra action:addpermanent publickey:INSERTPUBKEY\n"})}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsx)("summary",{children:"Expand for example output "}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'maxextra action:addpermanent publickey:0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001\r\n{\r\n  "command":"maxextra",\r\n  "params":{\r\n    "action":"addpermanent",\r\n    "publickey":"0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001"\r\n  },\r\n  "status":true,\r\n  "pending":false,\r\n  "response":"Added Permanent Maxima ID : 0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001"\r\n}\n'})})]}),"\n",(0,a.jsx)(n.p,{children:"Now your primary node will be have a Permanent Address in the format"}),"\n",(0,a.jsxs)(n.p,{children:["**MAX#",(0,a.jsx)(n.strong,{children:"yourPubKey"}),"#**staticMLSAddress"]}),"\n",(0,a.jsx)(n.p,{children:"Example permanent address:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"MAX#0x30819F300D06092A864886F70D010101050003818D0030818902818100958DD8EA74BD3CBEE4D1D8F030781A665AA062ADDE749951BFD45BCA43A3A315BF46788B9BEF67472203893C996FEC2E35C974CD01CEDE3B3BBF62D5B6B00FB546FD77094F07022FBAF82E7766D92EBFBE14623D4A1B677CF2F7EB42A6CCFC5F82530B061914FA22BA0F9D2458B4E4FDC51C843B96F2F77E9617F42979EC240B0203010001#MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G16YEDA34PYMJS7MC82PYEHB2Q5G2SEKGYP5AA6YFABH6S6PKV63ER84ZGVV7TU2RZKHJYPZ5PZD2E7VE8EPR5S6547YAR38SNRPHR9B74QAVK5FEGYEB21QVNE3E28VBB6C46J6NC1JD80AG3T4JW49D7BKWT55GJQGU5FYKUQVBBDEF4GGNN779NTSBK5VRYS604N02BVGPDC10608004W3G98C@5.64.39.56:9001\n"})}),"\n",(0,a.jsx)(n.p,{children:"This permanent address can now be shared with others, for example on a public site."}),"\n",(0,a.jsx)(n.p,{children:"Anyone wishing to contact you over Maxima can send you a message via your permanent MAX# address using:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"maxima action:send to:MAX#yourPubKey#staticMLSAddress application: data:\n"})}),"\n",(0,a.jsx)(n.h3,{id:"disabling-contacts",children:"Disabling contacts"}),"\n",(0,a.jsx)(n.p,{children:"Having a permanent address means anyone who knows your MAX# address can add you as a contact which may not be desirable."}),"\n",(0,a.jsxs)(n.p,{children:["To prevent anyone from adding you as a contact, ",(0,a.jsx)(n.strong,{children:"from your primary node"})," run the following command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"maxextra action:allowallcontacts enable:false\n"})}),"\n",(0,a.jsx)(n.p,{children:"This will allow users who know your permanent MAX# address to send messages to your node, but will reject any requests to add you as a contact."}),"\n",(0,a.jsx)(n.h3,{id:"whitelisting-contacts",children:"Whitelisting contacts"}),"\n",(0,a.jsx)(n.p,{children:"You can choose to whitelist specific people to allow them to add you as a contact, despite disabling contacts."}),"\n",(0,a.jsx)(n.p,{children:"Once allowed, they can add you as a contact and vice versa provided they have not disabled contacts."}),"\n",(0,a.jsxs)(n.p,{children:["To whitelist someone, ",(0,a.jsx)(n.strong,{children:"from your primary node"})," run the following command, inserting their Maxima public key:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"maxextra action:addallowed publickey:INSERTPUBLICKEY\n"})}),"\n",(0,a.jsx)(n.h2,{id:"additional-help",children:"Additional Help"}),"\n",(0,a.jsx)(n.p,{children:"For additional help, please use the help commands from the Terminal:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"help command:maxima\r\nhelp command:maxcontacts\r\nhelp command:maxextra\n"})})]})}function B(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var a=s(7294);const t={},r=a.createContext(t);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);