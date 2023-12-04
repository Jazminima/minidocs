"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[6481],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7604:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:12},l="Run an archive node",c={unversionedId:"runanode/archivenodes",id:"runanode/archivenodes",title:"Run an archive node",description:"Only available from Mainnet (v1.0) onwards",source:"@site/docs/runanode/archivenodes.md",sourceDirName:"runanode",slug:"/runanode/archivenodes",permalink:"/docs/runanode/archivenodes",editUrl:"https://github.com/minima-global/minidocs/docs/runanode/archivenodes.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Using Maxima",permalink:"/docs/runanode/usingmaxima"},next:{title:"Log Messages",permalink:"/docs/runanode/logs"}},d={},p=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Minimum Hardware Requirements",id:"minimum-hardware-requirements",level:3},{value:"Ports",id:"ports",level:3},{value:"Starting an archive Node",id:"starting-an-archive-node",level:2},{value:"Manual archive node (desktop)",id:"manual-archive-node-desktop",level:3},{value:"Examples",id:"examples",level:4},{value:"Windows",id:"windows",level:4},{value:"Mac",id:"mac",level:4},{value:"Linux",id:"linux",level:4},{value:"Docker archive node",id:"docker-archive-node",level:3},{value:"Examples: Starting a new archive node",id:"examples-starting-a-new-archive-node",level:4},{value:"Linux VPS",id:"linux-vps",level:4},{value:"Windows",id:"windows-1",level:4},{value:"Mac",id:"mac-1",level:4},{value:"Linux desktop",id:"linux-desktop",level:4},{value:"Check your archive data",id:"check-your-archive-data",level:2},{value:"Export your archive data to a file",id:"export-your-archive-data-to-a-file",level:2},{value:"MySQL workbench exports",id:"mysql-workbench-exports",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Minima - MySQL setup",id:"minima---mysql-setup",level:3},{value:"Update MySQL",id:"update-mysql",level:3},{value:"Check the integrity",id:"check-the-integrity",level:3},{value:"Export to an archive file",id:"export-to-an-archive-file",level:3},{value:".dat file export",id:"dat-file-export",level:4},{value:".gzip file export",id:"gzip-file-export",level:4},{value:"Resync from MySQL",id:"resync-from-mysql",level:3},{value:"To perform a chain re-sync",id:"to-perform-a-chain-re-sync",level:4},{value:"To perform a seed re-sync",id:"to-perform-a-seed-re-sync",level:4},{value:"Check an address history",id:"check-an-address-history",level:3},{value:"Create a coins table",id:"create-a-coins-table",level:3},{value:"Query the coins table",id:"query-the-coins-table",level:3},{value:"Export the tables from MySQL",id:"export-the-tables-from-mysql",level:3}],m={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-an-archive-node"},"Run an archive node"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Only available from Mainnet (v1.0) onwards")),(0,o.kt)("p",null,"To learn more about archive nodes, please see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/minima/aboutarchivenodes"},"archive nodes")," page."),(0,o.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,o.kt)("p",null,"Anyone can run an archive node from Android, desktop or server."),(0,o.kt)("h3",{id:"minimum-hardware-requirements"},"Minimum Hardware Requirements"),(0,o.kt)("p",null,"The following assumes that only Minima is running on the server, you should consider increasing the RAM and storage depending on the requirements for other software you install e.g. virus protection etc"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Processing:")," 2 CPU ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Memory:")," 4GB RAM",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Storage:")," 5GB*"),(0,o.kt)("p",null,"*This may change over time."),(0,o.kt)("h3",{id:"ports"},"Ports"),(0,o.kt)("p",null,"Archive nodes wishing to run as a service must be open to inbound connections on port 9001 (or the main custom Minima port you have chosen)."),(0,o.kt)("h2",{id:"starting-an-archive-node"},"Starting an archive Node"),(0,o.kt)("p",null,"When you start an archive node, you will start storing the archive data from that point onwards, therefore you can only re-sync coins for users that are created after this point."),(0,o.kt)("p",null,"It is possible to run an archive node from the Genesis block if you either start your archive node within 2 months of the Genesis block or by doing a chain re-sync for your archive node off an archive node that was started at Genesis."),(0,o.kt)("h3",{id:"manual-archive-node-desktop"},"Manual archive node (desktop)"),(0,o.kt)("p",null,"To start a Minima archive node manually, you need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"-archive")," parameter to the start up command. "),(0,o.kt)("p",null,"If you have an existing node that you wish to change to an archive node, you can ",(0,o.kt)("inlineCode",{parentName:"p"},"quit")," your current node from the Terminal and restart the same node, adding in the archive parameter on the start up line.",(0,o.kt)("br",null)," It is always a good idea to take a backup of your node before stopping it. "),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("h4",{id:"windows"},"Windows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java -jar C:\\Users\\INSERTUSERNAME\\Downloads\\minima.jar -mdsenable -archive\n")),(0,o.kt)("h4",{id:"mac"},"Mac"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo java -jar /Users/INSERTUSERNAME/Downloads/minima.jar -mdsenable -archive\n")),(0,o.kt)("h4",{id:"linux"},"Linux"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo java -jar /home/INSERTUSERNAME/minima.jar -mdsenable -archive\n")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you used the ",(0,o.kt)("inlineCode",{parentName:"p"},"-data")," parameter to specify a data folder when starting your existing node, you must make sure you start the archive node using the same data folder you chose originally."))),(0,o.kt)("h3",{id:"docker-archive-node"},"Docker archive node"),(0,o.kt)("p",null,"To start a Minima archive node container, you need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"-e minima_archive=true")," environment variable to the start up command. "),(0,o.kt)("p",null,"If you originally started your node without the ",(0,o.kt)("inlineCode",{parentName:"p"},"-e minima_archive=true")," environment variable, you can either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"start a new separate container for your archive node,"),(0,o.kt)("li",{parentName:"ul"},"backup your existing node, the restore it to a new archive container you create, "),(0,o.kt)("li",{parentName:"ul"},"backup your existing node, then stop and remove your existing Minima container and start a new Minima container including ",(0,o.kt)("inlineCode",{parentName:"li"},"-e minima_archive=true"),", using the ",(0,o.kt)("strong",{parentName:"li"},"SAME")," data folder as your old node e.g. minimadocker9001 or minimadocker8001")),(0,o.kt)("h4",{id:"examples-starting-a-new-archive-node"},"Examples: Starting a new archive node"),(0,o.kt)("h4",{id:"linux-vps"},"Linux VPS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_server=true -e minima_archive=true -v ~/minimadockerarchive:/home/minima/data -p 7001-7003:9001-9003 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest\n")),(0,o.kt)("h4",{id:"windows-1"},"Windows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -e minima_archive=true -v C:\\Users\\INSERTUSERNAME\\minimadockerarchive:/home/minima/data -p 7001-7003:9001-9003 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest\n")),(0,o.kt)("h4",{id:"mac-1"},"Mac"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -e minima_archive=true -v ~/minimadockerarchive:/home/minima/data -p 7001-7003:9001-9003 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest\n")),(0,o.kt)("h4",{id:"linux-desktop"},"Linux desktop"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -e minima_archive=true -v ~/minimadockerarchive:/home/minima/data -p 7001-7003:9001-9003 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest\n")),(0,o.kt)("h2",{id:"check-your-archive-data"},"Check your archive data"),(0,o.kt)("p",null,"From the Terminal MiniDapp or Docker CLI, you can check the integrity of your archive data by running the command:"),(0,o.kt)("p",null,"This checks your archive data for missing or broken blocks and tells you the first block you can sync from. If there is an error, you will need to re-sync from another archive node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"archive action:integrity\n")),(0,o.kt)("details",null," ",(0,o.kt)("summary",null," Example output "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'archive action:integrity\n{\n  "command":"archive",\n  "params":{\n    "action":"integrity"\n  },\n  "status":true,\n  "pending":false,\n  "response":{\n    "message":"Archive integrity check completed",\n    "start":1,\n    "blocks":6443,\n    "cascade":true,\n    "errors":0,\n    "recommend":"Your ArchiveDB is correct and has no errors."\n  }\n}\n'))),(0,o.kt)("h2",{id:"export-your-archive-data-to-a-file"},"Export your archive data to a file"),(0,o.kt)("p",null,"You can export your archive data to a .gzip file that can be used for resyncing a node with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/runanode/terminal_commands#backup"},"reset")," command (to either chain re-sync, import seed phrase or restore a backup with chain re-sync)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"archive action:export file:archiveexport-ddmmyy.gzip\n")),(0,o.kt)("h2",{id:"mysql-workbench-exports"},"MySQL workbench exports"),(0,o.kt)("p",null,"It is possible to export your node's archive blocks to an external MySQL database for storage. "),(0,o.kt)("p",null,"Using a MySQL database to hold a backup of your archive data means you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"update the MySQL db with the archive blocks from your node"),(0,o.kt)("li",{parentName:"ul"},"chain or seed re-sync directly from the MySQL database for any Minima node (if made publicly available);"),(0,o.kt)("li",{parentName:"ul"},"export the archive blocks from MySQL to a .dat or .gzip file to be shared for re-syncing purposes;"),(0,o.kt)("li",{parentName:"ul"},"execute SQL queries on all coins since the Genesis block (NEW for v 1.0.39);"),(0,o.kt)("li",{parentName:"ul"},"export the tables from MySQL to a SQL file;"),(0,o.kt)("li",{parentName:"ul"},"import the SQL file to another MySQL database")),(0,o.kt)("p",null,"This setup uses two Docker containers"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"a Minima archive node "),(0,o.kt)("li",{parentName:"ol"},"a MySQL database to hold the archive blocks and coins")),(0,o.kt)("p",null,"The archive database in MySQL will contain 3 tables:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"cascadedata - if your archive node does not start at the genesis block, there may be cascade data"),(0,o.kt)("li",{parentName:"ol"},"syncblocks - the archive blocks"),(0,o.kt)("li",{parentName:"ol"},"coins (NEW v1.0.39) - a coins table of all coins in the archive blocks")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An existing archive node running in Docker")),(0,o.kt)("h3",{id:"minima---mysql-setup"},"Minima - MySQL setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install MySQL Workbench from the ",(0,o.kt)("a",{parentName:"p",href:"https://dev.mysql.com/downloads/workbench/"},"official website"),", selecting the Operating System relevant to you")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open your Terminal/Command Line interface")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Setup a Docker network, this will allow you to connect your node to your MySQL database that we will create in the next step"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker network create -d bridge minimanetwork\n")),(0,o.kt)("p",null,"Now you should see ",(0,o.kt)("strong",{parentName:"p"},"minimanetwork")," listed if you run "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker network ls\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Start a MySQL database as a Docker container")),(0,o.kt)("p",null,"You will need to set your own values for the following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MYSQL_ROOT_PASSWORD : create a root password"),(0,o.kt)("li",{parentName:"ul"},"MYSQL_DATABASE : create a name for the archive database"),(0,o.kt)("li",{parentName:"ul"},"MYSQL_USER : create a user for the archive database"),(0,o.kt)("li",{parentName:"ul"},"MYSQL_PASSWORD : create a password for the MYSQL_USER")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d -p 3307:3306  -e MYSQL_ROOT_PASSWORD=yourrootpassword -e MYSQL_DATABASE=archivedb -e MYSQL_USER=archiveuser -e MYSQL_PASSWORD=youruserpassword --restart unless-stopped --network=minimanetwork --label=com.centurylinklabs.watchtower.enable=false --name minimysql mysql:8.0\n")),(0,o.kt)("p",null,"This will create a Docker container called ",(0,o.kt)("strong",{parentName:"p"},"minimySQL")," which runs your MySQL database called ",(0,o.kt)("strong",{parentName:"p"},"archivedb"),"."),(0,o.kt)("p",null,"It will run on your port 3307 (mapped to 3306 in Docker); create the user specified and give them access to the database; connect the MySQL db to the ",(0,o.kt)("strong",{parentName:"p"},"minimanetwork")," Docker network; and disable Watchtower updates for the container. "),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Connect your Minima archive node container to the ",(0,o.kt)("strong",{parentName:"li"},"minimanetwork")," Docker network")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker network connect minimanetwork minimaarchive\n")),(0,o.kt)("p",null,"You should now see your ",(0,o.kt)("strong",{parentName:"p"},"minimysql")," and ",(0,o.kt)("strong",{parentName:"p"},"minimaarchive")," containers in the same network if you run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker network inspect minimanetwork\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker network inspect minimanetwork\n[\n    {\n        "Name": "minimanetwork",\n...\n        },\n        "ConfigOnly": false,\n        "Containers": {\n            "182c4041ad365669b365ee6e0691e5488596ab1e974b791bba1306c74643bd03": {\n                "Name": "minimadev",\n...""\n            },\n            "38906df591a5ba642e755509e8c162e114b6dd56abc2ec2e76a0c673f5187b09": {\n                "Name": "minimysql",\n...\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Open MySQL Workbench and create a new connection with the following parameters")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connection name:")," minimaarchive",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Hostname:")," 127.0.0.1 (or your public IP if running on a server)",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Port:")," 3307",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Username:")," root",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Password:")," Click on \u201cStore in Vault\u201d and enter the root password you used in step 4 above. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"sql",src:a(8066).Z,width:"1919",height:"565"})," "),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"sql",src:a(2304).Z,width:"983",height:"616"})," "),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Click Test Connection, then OK.")),(0,o.kt)("p",null,"This will setup a connection to the MySQL database running in Docker."),(0,o.kt)("h3",{id:"update-mysql"},"Update MySQL"),(0,o.kt)("p",null,"To update the MySQL tables with the archive blocks from your node:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open Minima Docker CLI or Minima Terminal MiniDapp")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Optional - run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql action:info")," with your login details to check the current status "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql action:info host:minimysql database:archivedb user:archiveuser password:youruserpassword\n")),(0,o.kt)("details",null," ",(0,o.kt)("summary",null," Example output "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "command":"mysql",\n  "params":{\n    "host":"minimysql",\n    "database":"archivedb",\n    "user":"archiveuser",\n    "password":"youruserpassword",\n    "action":"info"\n  },\n  "status":true,\n  "pending":false,\n  "response":{\n    "archive":{\n      "archivestart":1,\n      "archiveend":72106,\n      "archivetotal":72105\n    },\n    "mysql":{\n      "mysqlstart":-1,\n      "mysqlend":-1,\n      "mysqltotal":0\n    }\n  }\n}\n')),(0,o.kt)("p",null,"In the above example, the Minima archive db contains 72105 blocks and the mysql has 0 blocks, as expected.")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"before updating")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before running an update, you must check your node is on the correct tip block. Run the ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," command to check your tip block is up to date."))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Update the MySQL database with the Minima archive data and wait for it to finish")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql action:update host:minimysql database:archivedb user:archiveuser password:youruserpassword\n")),(0,o.kt)("details",null," ",(0,o.kt)("summary",null," Example output "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "command":"mysql",\n  "params":{\n    "host":"minimysql",\n    "database":"archivedb",\n    "user":"archiveuser",\n    "password":"youruserpassword",\n    "action":"update"\n  },\n  "status":true,\n  "pending":false,\n  "response":{\n    "archive":{\n      "archivestart":1,\n      "archiveend":72206,\n      "archivetotal":72205\n    },\n    "mysql":{\n      "mysqlstart":1,\n      "mysqlend":72206,\n      "mysqltotal":72205\n    }\n  }\n}\n'))),(0,o.kt)("p",null,"Future updates will be incremental, only syncing the new blocks that are not already in the MySQL database."),(0,o.kt)("h3",{id:"check-the-integrity"},"Check the integrity"),(0,o.kt)("p",null,"To check that there are no missing blocks in the MySQL database, you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql action:integrity host:minimysql database:archivedb user:archiveuser password:youruserpassword\n")),(0,o.kt)("h3",{id:"export-to-an-archive-file"},"Export to an archive file"),(0,o.kt)("h4",{id:"dat-file-export"},".dat file export"),(0,o.kt)("p",null,"From v1.0.39 onwards, this raw ",(0,o.kt)("strong",{parentName:"p"},".dat")," export can be used by users to archive reset their node via the Security minidapp or with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/runanode/terminal_commands"},"reset")," command. This is the recommended method."),(0,o.kt)("p",null,"Optionally omit the ",(0,o.kt)("inlineCode",{parentName:"p"},"file")," parameter to use an autogenerated file name. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql action:rawexport file:archiveexport.raw.dat host:minimysql database:archivedb user:archiveuser password:youruserpassword\n")),(0,o.kt)("h4",{id:"gzip-file-export"},".gzip file export"),(0,o.kt)("p",null,"This .gzip export can be used by users to archive reset their node via the Security minidapp or with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/runanode/terminal_commands"},"reset")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql  action:h2export file:archiveexport.gzip host:minimysql database:archivedb user:archiveuser password:youruserpassword\n")),(0,o.kt)("h3",{id:"resync-from-mysql"},"Resync from MySQL"),(0,o.kt)("p",null,"If a user has been offline for too long and cannot resync to the chain from the IBD alone, or has lost access to their node, they can connect to a MySQL database to perform a chain or seed resync, provided it is publicly accessible."),(0,o.kt)("p",null,"This is an alternative option to re-syncing from an archive node."),(0,o.kt)("p",null,"As with archive nodes, there are two options when using a MySQL database to re-sync your a node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Chain re-sync:")," If a user has been offline for too long and their node is not on the correct tip block, they can re-sync to the latest block by performing a ",(0,o.kt)("a",{parentName:"p",href:"#to-perform-a-chain-re-sync"},"chain re-sync")," from a MySQL database. ",(0,o.kt)("strong",{parentName:"p"},"The node will NOT be wiped during this process."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Seed re-sync:")," If a user does not have a valid backup or has lost access to their node, they can restore access to their coins by performing a ",(0,o.kt)("a",{parentName:"p",href:"#to-perform-a-seed-re-sync"},"seed re-sync")," from a MySQL database using their 24 word seed phrase. ",(0,o.kt)("strong",{parentName:"p"},"The node will first be wiped before the re-sync begins.")))),(0,o.kt)("h4",{id:"to-perform-a-chain-re-sync"},"To perform a chain re-sync"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the node requiring a re-sync, check the connection to the MySQL database, changing the ip:port as required")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql host:127.0.0.1:3307 database:archivedb user:archiveuser password:youruserpassword action:info\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"To start the chain re-sync, run")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql host:mysqlhost:port database:archivedb user:archiveuser password:youruserpassword action:resync\n")),(0,o.kt)("p",null,"Your coins will remain safe throughout this process. Once complete, you will be on the correct tip block."),(0,o.kt)("h4",{id:"to-perform-a-seed-re-sync"},"To perform a seed re-sync"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the node requiring a re-sync, connect to check the MySQL archive database")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql host:127.0.0.1:3307 database:archivedb user:archiveuser password:youruserpassword action:info\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"To start the seed re-sync, run")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mysql host:mysqlhost:port database:archivedb user:archiveuser password:youruserpassword action:resync phrase:\\"24 WORDS HERE\\"\n')),(0,o.kt)("p",null,"Optionally set the number of keys and keyuses relevant to you. If not specified, the defaults are keys:80 and keyuses:1000"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mysql host:mysqlhost:port database:archivedb user:archiveuser password:youruserpassword action:resync phrase:\\"24 WORDS HERE\\" keys:90 keyuses:2000\n')),(0,o.kt)("h3",{id:"check-an-address-history"},"Check an address history"),(0,o.kt)("p",null,"To check the unspent and spent coins for an address, run "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql host:127.0.0.1:3307 database:archivedb user:archiveuser password:youruserpassword action:addresscheck address:0x79...\n")),(0,o.kt)("h3",{id:"create-a-coins-table"},"Create a coins table"),(0,o.kt)("p",null,"To create a table in your MySQL archive database for all spent and unspent coins, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"mysqlcoins")," command. "),(0,o.kt)("p",null,"The coins table will be populated from the syncblock table, so this must be populated first. You can then run any SQL command against it to query the coins. "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The coins database is large and will take a while to populate, optionally you can create a second database in mysql workbench to keep the coinsdb separate to your existing archivedb."))),(0,o.kt)("p",null,"To populate the coins table, you can choose to specify the number of coins to update in one go by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxcoins")," parameter. To update the table will all the coins, remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxcoins")," parameter."),(0,o.kt)("p",null,"The example below adds the first 100 coins to the database. Next time, it will start from where it left off. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"From any node")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysqlcoins action:update maxcoins:100 host:127.0.0.1:3307 database:archivedb user:archiveuser password:youruserpassword \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"From docker")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysqlcoins action:update maxcoins:100 host:minimysql database:archivedb user:archiveuser password:youruserpassword \n")),(0,o.kt)("h3",{id:"query-the-coins-table"},"Query the coins table"),(0,o.kt)("p",null,"To search for all coins at an address or with the address in a state variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysqlcoins action:search address: host:minimysql database:archivedb user:archiveuser password:youruserpassword \n")),(0,o.kt)("p",null,"To run a WHERE query on the coins table, string data MUST be in single quotes and you can use multiple parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysqlcoins action:search where: host:minimysql database:archivedb user:archiveuser password:youruserpassword \n")),(0,o.kt)("p",null,"To run a full SQL query on the coins table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysqlcoins action:search query: host:minimysql database:archivedb user:archiveuser password:youruserpassword \n")),(0,o.kt)("p",null,"For full help, use ",(0,o.kt)("inlineCode",{parentName:"p"},"help command:mysqlcoins")," or see ",(0,o.kt)("a",{parentName:"p",href:"/docs/runanode/terminal_commands"},"here"),"."),(0,o.kt)("h3",{id:"export-the-tables-from-mysql"},"Export the tables from MySQL"),(0,o.kt)("p",null,"To Export the archive data from MySQL to a file:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open MySQL workbench")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Double click on ",(0,o.kt)("strong",{parentName:"p"},"minimaarchive")," to open the database")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Administration")," tab, select ",(0,o.kt)("strong",{parentName:"p"},"Data Export")," (also available from the Server dropdown menu)"))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"sql",src:a(3034).Z+"#width50",width:"537",height:"763"})," "),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Check the box for ",(0,o.kt)("strong",{parentName:"li"},"archivedb")," and check the boxes for ",(0,o.kt)("strong",{parentName:"li"},"cascadedata")," and ",(0,o.kt)("strong",{parentName:"li"},"syncblock")," ")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We do not recommend exporting the coins table as this will be very large."))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Under Export Options, select ",(0,o.kt)("strong",{parentName:"li"},"Export to self-contained file")," and ",(0,o.kt)("strong",{parentName:"li"},"Include Create Schema"),". Optionally change the file path.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"sql",src:a(1506).Z,width:"1206",height:"688"})," "),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Start Export"))),(0,o.kt)("p",null,"The exported file will be unzipped, you should zip the exported file to reduce your storage requirement. "),(0,o.kt)("p",null,"This file can be imported to MySQL if required."))}u.isMDXComponent=!0},8066:function(e,t,a){t.Z=a.p+"assets/images/A.AddConnection-28267dbcd83cca00260f640cbd100d2c.png"},2304:function(e,t,a){t.Z=a.p+"assets/images/B.CreateConnection-a4a7509fee60ea34865902ee8f8ee960.png"},3034:function(e,t,a){t.Z=a.p+"assets/images/F.AdminExportData-b57a71a8ddaa6625da8f9a8b9f7f4625.png"},1506:function(e,t,a){t.Z=a.p+"assets/images/G.DataExportSelection-aa58b4a054b043286647bc89f165efe3.png"}}]);