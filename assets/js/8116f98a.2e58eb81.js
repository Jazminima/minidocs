"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[7721],{6391:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var a=i(5893),r=i(1151);const t={sidebar_position:7},l="React MiniDapp",o={id:"buildonminima/dapptutorial/reactminidapp",title:"React MiniDapp",description:"In this tutorial, we will build a MiniDapp using React.",source:"@site/docs/buildonminima/dapptutorial/reactminidapp.md",sourceDirName:"buildonminima/dapptutorial",slug:"/buildonminima/dapptutorial/reactminidapp",permalink:"/docs/buildonminima/dapptutorial/reactminidapp",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/dapptutorial/reactminidapp.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Interactive MiniDapp",permalink:"/docs/buildonminima/dapptutorial/interactiveminidapp"},next:{title:"MiniDapp Stores",permalink:"/docs/buildonminima/dapptutorial/minidappstores"}},s={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Getting Started with Create Minima App",id:"getting-started-with-create-minima-app",level:2},{value:"How to build and install your app",id:"how-to-build-and-install-your-app",level:2},{value:"Installing on a Desktop node",id:"installing-on-a-desktop-node",level:3},{value:"Installing on Android",id:"installing-on-android",level:3},{value:"Do I have to reinstall after every change?",id:"do-i-have-to-reinstall-after-every-change",level:2},{value:"Balance Tutorial",id:"balance-tutorial",level:2},{value:"Showing the balance with the Create Minima App",id:"showing-the-balance-with-the-create-minima-app",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"react-minidapp",children:"React MiniDapp"}),"\n",(0,a.jsx)(n.p,{children:"In this tutorial, we will build a MiniDapp using React."}),"\n",(0,a.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Node.js ",(0,a.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"https://nodejs.org/en/download/"})]}),"\n",(0,a.jsxs)(n.li,{children:["A Code Editor, we recommend Visual Studio code ",(0,a.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"https://code.visualstudio.com/"})]}),"\n",(0,a.jsx)(n.li,{children:"A running Minima node"}),"\n",(0,a.jsxs)(n.li,{children:["Download the create-react-minidapp boilerplate ",(0,a.jsx)(n.a,{href:"https://github.com/minima-global/awesome-minima/tree/main/boilerplates/react/create-react-minidapp",children:"here"})]}),"\n",(0,a.jsxs)(n.li,{children:["Download the latest mds.js file ",(0,a.jsx)(n.a,{href:"https://github.com/minima-global/Minima/blob/master/mds/mds.js",children:"here"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"getting-started-with-create-minima-app",children:"Getting Started with Create Minima App"}),"\n",(0,a.jsxs)(n.p,{children:["This boilerplate has been created with ",(0,a.jsx)(n.code,{children:"Create React App"}),". You can use this boilerplate to build Minima MiniDapps."]}),"\n",(0,a.jsxs)(n.p,{children:["To create your application, unzip and the open the folder in your code editor. We will edit the files in the ",(0,a.jsx)(n.code,{children:"/src"})," folder."]}),"\n",(0,a.jsxs)(n.p,{children:["If you need some guidance, please follow the ",(0,a.jsx)(n.a,{href:"/docs/buildonminima/dapptutorial/reactminidapp#balance-tutorial",children:"Balance tutorial"})," below."]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-build-and-install-your-app",children:"How to build and install your app"}),"\n",(0,a.jsxs)(n.p,{children:["To build your app, open the Terminal and run the following commands in the ",(0,a.jsx)(n.code,{children:"create-minima-app"})," directory:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm i\n"})}),"\n",(0,a.jsx)(n.p,{children:"and then run"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm run build\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Once the app has been built, you can run the following to create a ",(0,a.jsx)(n.strong,{children:"my-minima-app.mds.zip"})," file in the ",(0,a.jsx)(n.code,{children:"/minidapp"})," folder. This is the zipped minidapp that can be installed onto a node."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm run zip\n"})}),"\n",(0,a.jsx)(n.h3,{id:"installing-on-a-desktop-node",children:"Installing on a Desktop node"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Login to Minima by going to ",(0,a.jsx)(n.code,{children:"https://localhost:9003"})," (9003 is the default MiniDapp System port). Use the password you set when starting the node or run ",(0,a.jsx)(n.code,{children:"mds"})," in the Minima Terminal to check the password."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Once logged in, click on the ",(0,a.jsx)(n.code,{children:"+"})," in the top right, locate your ",(0,a.jsx)(n.strong,{children:"my-minima-app.mds.zip"})," zip file and click the ",(0,a.jsx)(n.code,{children:"install"})," button. Your app should be installed."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Click on your app to open it."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"installing-on-android",children:"Installing on Android"}),"\n",(0,a.jsx)(n.p,{children:"Either connect to your Android node using the Desktop connect feature and continue to install the MiniDapp as above, or transfer your app to your phone's storage and open the Minima app."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Click on the ",(0,a.jsx)(n.code,{children:"+"})," button at the top right of the screen."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Locate and select the zip file on your phone and tap install."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"You should now see your app in the list. Tap on your app to open it."}),"\n",(0,a.jsx)(n.h2,{id:"do-i-have-to-reinstall-after-every-change",children:"Do I have to reinstall after every change?"}),"\n",(0,a.jsxs)(n.p,{children:["No, we have a solution that allows you to get around the issue to take advantage of ",(0,a.jsx)(n.code,{children:"Create React App"}),"'s automatic reloading on file changes."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Ensure you have installed the app using the instructions above on desktop"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Duplicate the ",(0,a.jsx)(n.code,{children:".env.example"})," file and rename it to ",(0,a.jsx)(n.code,{children:".env"})," (this is your project root)"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Configure the environment values, you can leave everything default unless you are running Minima on a custom port. If connecting to a phone node, change the IP address to that as shown in Settings > Desktop Connect in your Minima app."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Open your MiniDapp on Desktop, your url will look something like: ",(0,a.jsx)(n.code,{children:"https://127.0.0.1:9003/{APP_ID}/index.html?uid=YOUR_UID"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Copy the value at the end where YOUR_UID is in the URL e.g. ",(0,a.jsx)(n.code,{children:"0xD497A626EF65C24417D4F7AE0CC48289BCB1062FB9763D47A20326984E099299"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Replace ",(0,a.jsx)(n.code,{children:"REACT_APP_DEBUG_UID"})," in the env file with the uid you copied"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Ensure the following code is included in ",(0,a.jsx)(n.strong,{children:"mds.js"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"mds.js:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"// env overrides\r\nif (window.DEBUG) {\r\n   host = window.DEBUG_HOST;\r\n   port = Math.floor(window.DEBUG_PORT);\r\n   MDS.minidappuid = window.DEBUG_UID;\r\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"the above code should be added directly below this existing code"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'//HARD SET if debug mode - running from a file\r\nif(MDS.DEBUG_HOST != null){\r\n\tMDS.log("DEBUG Settings Found..");\r\n\thost=MDS.DEBUG_HOST;\r\n\tport=MDS.DEBUG_PORT;\t\r\n}\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"8",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["From the Terminal, run ",(0,a.jsx)(n.code,{children:"npm run start"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Edit ",(0,a.jsx)(n.code,{children:"/src/App.jsx"})," and the browser window will automatically reload and should be connected to Minima"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"balance-tutorial",children:"Balance Tutorial"}),"\n",(0,a.jsx)(n.h3,{id:"showing-the-balance-with-the-create-minima-app",children:"Showing the balance with the Create Minima App"}),"\n",(0,a.jsx)(n.p,{children:"Let's dive into a short tutorial that will show you how to show the balance of your wallet in the app."}),"\n",(0,a.jsxs)(n.p,{children:["Open ",(0,a.jsx)(n.code,{children:"/src/App.jsx"}),", this is the main application file."]}),"\n",(0,a.jsxs)(n.p,{children:["The first thing we have to do is call the MDS ",(0,a.jsx)(n.code,{children:"balance"})," command. The full list of commands can be found ",(0,a.jsx)(n.a,{href:"/docs/userguides/usingyournode/terminal_commands",children:"here"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The first step is to create a new component file, lets call it ",(0,a.jsx)(n.code,{children:"Balance.jsx"})," in the ",(0,a.jsx)(n.code,{children:"/src"})," folder."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Balance.jsx:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\r\n\r\nconst Balance = () => {\r\n  return <div>Balance Tutorial</div>\r\n}\r\n\r\nexport default Balance;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Now let's import this component in our ",(0,a.jsx)(n.code,{children:"App.jsx"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["We need to add ",(0,a.jsx)(n.code,{children:"import Balance from './Balance';"})," and ",(0,a.jsx)(n.code,{children:"<Balance />"})," in the return, feel free to put it anywhere you like, we have just put it after the ",(0,a.jsx)(n.code,{children:"<p>"})," tag."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"App.jsx:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import React, { useEffect } from 'react';\r\nimport minimaLogo from './minima_logo.png';\r\nimport './App.css';\r\nimport Balance from './Balance';\r\n\r\nfunction App() {\r\n  useEffect(() => {\r\n      window.MDS.init();\r\n  }, []);\r\n\r\n  return (\r\n    <div className=\"App\">\r\n      <section className=\"container\">\r\n        <img src={minimaLogo} className=\"logo\" alt=\"logo\" />\r\n        <Balance />\r\n      </section>\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default App;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You should now see ",(0,a.jsx)(n.code,{children:"Balance Tutorial"})," printed in the browser window."]}),"\n",(0,a.jsxs)(n.p,{children:["Now let's go back to the ",(0,a.jsx)(n.code,{children:"/src/Balance.jsx"})," and add the following inside ",(0,a.jsx)(n.code,{children:"const Balance"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"const getBalance = React.useCallback(() => {\r\n  //run the balance command\r\n  window.MDS.cmd('balance', function (balance) {\r\n    console.log(balance.response);\r\n  })\r\n}, []);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Our file should now look like this:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Balance.jsx:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\r\n\r\nconst Balance = () => {\r\n  const getBalance = React.useCallback(() => {\r\n    window.MDS.cmd('balance', function (balance) {\r\n      console.log(balance.response);\r\n    })\r\n  }, []);\r\n\r\n  return <div>Balance Tutorial</div>\r\n}\r\n\r\nexport default Balance;\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"React.useCallback"})," ensures the function is not re-run unless one of the dependencies change, you can read more about it in the React documentation: ",(0,a.jsx)(n.a,{href:"https://react.dev/reference/react/useCallback",children:"https://react.dev/reference/react/useCallback"})]})}),"\n",(0,a.jsxs)(n.p,{children:["To run our function we need to add a ",(0,a.jsx)(n.code,{children:"useEffect"}),", this is a function that is called when the component is rendered to the screen."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"React.useEffect(() => {\r\n  getBalance();\r\n}, [getBalance]);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Our file should now look like this:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Balance.jsx:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\r\n\r\nconst Balance = () => {\r\n  const getBalance = React.useCallback(() => {\r\n    window.MDS.cmd('balance', function (balance) {\r\n      console.log(balance.response);\r\n    })\r\n  }, []);\r\n\r\n  React.useEffect(() => {\r\n    getBalance();\r\n  }, [getBalance]);\r\n\r\n  return <div>Balance Tutorial</div>\r\n}\r\n\r\nexport default Balance;\r\n\r\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Now go to the browser and open the developer tools, open the ",(0,a.jsx)(n.code,{children:"Console"})," tab and reload the page to refresh the logs. You should see an array being printed to the logs."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[{\r\n  coins: "1",\r\n  confirmed: "100",\r\n  sendable: "100",\r\n  token: "Minima",\r\n  tokenid: "0x00",\r\n  total: "1000000000",\r\n  unconfirmed: "0"\r\n}]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Now we need to update our component so that we can store the balance for it to show up on the screen, we can use ",(0,a.jsx)(n.code,{children:"React.useState"})," for this."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"const [balance, setBalance] = React.useState(null);\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"React.useState"})," allows us to create a value that will cause React to re-render when the value changes. ",(0,a.jsx)("br",{}),"\r\nWe can use ",(0,a.jsx)(n.code,{children:"setBalance"})," in this case to change the value of ",(0,a.jsx)(n.code,{children:"balance"}),"."]})}),"\n",(0,a.jsx)(n.p,{children:"Our file should now look like this:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Balance.jsx:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\r\n\r\nconst Balance = () => {\r\n  const [balance, setBalance] = React.useState(null);\r\n\r\n  const getBalance = React.useCallback(() => {\r\n    window.MDS.cmd('balance', function (balance) {\r\n      console.log(balance.response);\r\n    })\r\n  }, []);\r\n\r\n  React.useEffect(() => {\r\n    getBalance();\r\n  }, [getBalance]);\r\n\r\n  return <div>Balance Tutorial</div>\r\n}\r\n\r\nexport default Balance;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Now let's remove the ",(0,a.jsx)(n.code,{children:"console.log"})," and use the setter that we have just created"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"const getBalance = React.useCallback(() => {\r\n  window.MDS.cmd('balance', function (balance) {\r\n    if (balance.response) {\r\n      const minimaToken = balance.response.find(token => token.token === 'Minima');\r\n      setBalance(minimaToken.confirmed);\r\n    }\r\n  })\r\n}, []);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Our file should now look like this:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Balance.jsx:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\r\n\r\nconst Balance = () => {\r\n  const [balance, setBalance] = React.useState(null);\r\n\r\n  const getBalance = React.useCallback(() => {\r\n    window.MDS.cmd('balance', function (balance) {\r\n      if (balance.response) {\r\n        const minimaToken = balance.response.find(token => token.token === 'Minima');\r\n        setBalance(minimaToken.confirmed);\r\n      }\r\n    })\r\n  }, []);\r\n\r\n  React.useEffect(() => {\r\n    getBalance();\r\n  }, [getBalance]);\r\n\r\n  return <div>Balance Tutorial</div>\r\n}\r\n\r\nexport default Balance;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now we can use the getter to print the value to the screen:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"return <div>Balance Tutorial <br/> Your confirmed balance is: {balance}</div>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Our file should now look like this:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Balance.jsx:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\r\n\r\nconst Balance = () => {\r\n  const [balance, setBalance] = React.useState(null);\r\n\r\n  const getBalance = React.useCallback(() => {\r\n    window.MDS.cmd('balance', function (balance) {\r\n      if (balance.response) {\r\n        const minimaToken = balance.response.find(token => token.token === 'Minima');\r\n        setBalance(minimaToken.confirmed);\r\n      }\r\n    })\r\n  }, []);\r\n\r\n  React.useEffect(() => {\r\n    getBalance();\r\n  }, [getBalance]);\r\n\r\n  return <div>Balance Tutorial <br/> Your confirmed balance is: {balance}</div>\r\n}\r\n\r\nexport default Balance;\n"})}),"\n",(0,a.jsx)(n.p,{children:"And that's it!"}),"\n",(0,a.jsx)(n.p,{children:"Feel free to look at the rest of the Minima documentation and start building."}),"\n",(0,a.jsxs)(n.p,{children:["We also advise looking at the React documentation which can be found here: ",(0,a.jsx)(n.a,{href:"https://react.dev/reference/react",children:"https://react.dev/reference/react"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var a=i(7294);const r={},t=a.createContext(r);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);