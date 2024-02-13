"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[7627],{1491:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(5893),i=t(1151);const a={sidebar_position:9},o="Exchange Contract",r={id:"buildonminima/txntutorial/layer1/exchangecontract",title:"Exchange Contract",description:"Lets create a simple Layer 1 exchange contract for Minima and some tokens. Minima allows you to create tokens very easily - and tokens can have their own script. When sending a token the address script AND token script must return TRUE.",source:"@site/docs/buildonminima/txntutorial/layer1/exchangecontract.md",sourceDirName:"buildonminima/txntutorial/layer1",slug:"/buildonminima/txntutorial/layer1/exchangecontract",permalink:"/docs/buildonminima/txntutorial/layer1/exchangecontract",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/layer1/exchangecontract.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Hashed Time Lock Contract",permalink:"/docs/buildonminima/txntutorial/layer1/hashtimelockcontract"},next:{title:"Flash Cash",permalink:"/docs/buildonminima/txntutorial/layer1/flashcash"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"exchange-contract",children:"Exchange Contract"}),"\n",(0,s.jsx)(n.p,{children:"Lets create a simple Layer 1 exchange contract for Minima and some tokens. Minima allows you to create tokens very easily - and tokens can have their own script. When sending a token the address script AND token script must return TRUE."}),"\n",(0,s.jsx)(n.p,{children:"For now let\u2019s first create a simple token"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"tokencreate name:mytoken amount:1000\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will create a token with a globally unique tokenid."}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"balance"})," and you will see it there."]}),"\n",(0,s.jsxs)(n.p,{children:["Now create yourself a ",(0,s.jsx)(n.code,{children:"newaddress"}),", we will use the public key and address."]}),"\n",(0,s.jsx)(n.p,{children:"Use your key from before (or create a new one).. what does this script do.."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"IF SIGNEDBY(0xTheOwnerPublicKey) THEN RETURN TRUE ENDIF RETURN VERIFYOUT( @INPUT 0xYouAddress 10 0x00 TRUE )\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This contract says, the owner can cancel at any time, by signing with their key OR you can spend it if you send 10 Minima ",(0,s.jsx)(n.code,{children:"( tokenid 0x00 )"})," to ",(0,s.jsx)(n.code,{children:"0xYourAddress"})," at the opposite output in the transaction.\r\n",(0,s.jsx)(n.code,{children:"ASSERT"})," will do nothing if the expression is TRUE but RETURN FALSE if the expression is FALSE."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"VERIFYOUT"})," checks that an output exists of a certain address , amount and tokenid - at a certain position, and if you are keeping the state."]}),"\n",(0,s.jsxs)(n.p,{children:["By using ",(0,s.jsx)(n.code,{children:"@INPUT"})," you know the opposite output must be the desired one and multiple exchange contracts can take place in a single transaction."]}),"\n",(0,s.jsx)(n.p,{children:"You would need to add this as a script as before. But it\u2019s not so useful as it is specific to you.."}),"\n",(0,s.jsx)(n.p,{children:"A better contract would be.."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"IF SIGNEDBY( PREVSTATE(0) ) THEN RETURN TRUE ENDIF\r\nASSERT VERIFYOUT( @INPUT PREVSTATE(1) PREVSTATE(2) PREVSTATE(3) TRUE ) RETURN TRUE\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This contract is generic, the values would be entered as state variables in the initial transaction, you can set state variables in ",(0,s.jsx)(n.code,{children:"send"}),", when you send some tokens/ Minima to the address, and it allows you to specify how much of what token you want sent to a specific address."]}),"\n",(0,s.jsx)(n.p,{children:"You can find it's address with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'scripts action:clean script:"IF SIGNEDBY( PREVSTATE(0) THEN RETURN TRUE ENDIF ASSERT VERIFYOUT( @INPUT PREVSTATE(1) PREVSTATE(2) PREVSTATE(3) TRUE ) RETURN TRUE"\n'})}),"\n",(0,s.jsx)(n.p,{children:"In this case this is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"0xBB696A834B6FD91F62A28C9BDCF3754C77F03AFFFEE4EBA3A7485FDC8FD2F3C9\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can easily send funds with the state variables using the send function."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'send amount:1 address:0x39AC9C96DBC9E4A108E6EBB795003A53F11258BC47EECF0C03275C500CB8DDA1 state:{"0":"0xOwnerKey","1":"0xOwnerAddress","2":"0xDesiredAmount","3":"0xDesiredToken"}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"clean"})," takes your script and formats it correctly for use on Minima. You can use lowercase and spaces and these will all be removed / fixed."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(7294);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);