"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[542],{7030:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=s(5893),t=s(1151);const o={sidebar_position:5},a="Events",r={id:"buildonminima/dapps/events",title:"Events",description:"Minima Events can be listened for, so that users can be notified when specific on-chain events occur.",source:"@site/docs/buildonminima/dapps/events.md",sourceDirName:"buildonminima/dapps",slug:"/buildonminima/dapps/events",permalink:"/docs/buildonminima/dapps/events",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/dapps/events.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"mds.js library",permalink:"/docs/buildonminima/dapps/mdsjs"},next:{title:"MiniBrowser",permalink:"/docs/buildonminima/dapps/minibrowser"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"events",children:"Events"}),"\n",(0,i.jsx)(n.p,{children:"Minima Events can be listened for, so that users can be notified when specific on-chain events occur."}),"\n",(0,i.jsx)(n.p,{children:"The following events exist:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"inited"}),": MDS has been initialised."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NEWBALANCE"}),": The balance of the node has changed."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NEWBLOCK"}),": The chain tip has changed (i.e. a new block has been added to the chain). JSON data returned: The TxPoW object of the last block is returned as a JSON Object."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MINING"}),": Mining has started or ended.\r\nJSON data returned: The TxPoW Object, true (if started)/false (if ended)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MINIMALOG"}),": A new log message is available"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MAXIMA"})," : A Maxima message has been received."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MDS_TIMER_1HOUR"})," : A one hour timer."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MDS_TIMER_10SECONDS"})," : A 10 second timer."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MDS_SHUTDOWN"})," : A message which is sent when the MiniDapp system is about to be shutdown. Shuts down 2 seconds after the message is posted."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'MDS.init(function(msg) {\r\n    console.log(msg);\r\n    // inited means Minima API is ready to be used\r\n    switch(msg.event) {\r\n      case "inited":\r\n        // do Minima dependent initializations\r\n        break;\r\n      case "NEWBLOCK":\r\n        // new block message event\r\n        console.log(msg);\r\n        // new block message data\r\n        console.log(msg.data);\r\n        break;\r\n      case "MINING":\r\n        // mining message event\r\n        console.log(msg);\r\n        // mining message data\r\n        console.log(msg.data);\r\n        break;\r\n      case "NEWBALANCE":\r\n        // new balance message event\r\n        console.log(msg);\r\n        // there is no data for a new balance event, but you can\r\n        // call MDS.cmd(\'balance\') to retrieve the balance changes\r\n        MDS.cmd(\'balance\', function (msg) {\r\n          console.log(msg.response);\r\n        });\r\n    }\r\n});\n'})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var i=s(7294);const t={},o=i.createContext(t);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);