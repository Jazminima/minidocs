"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4169],{8849:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>i,default:()=>j,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var r=s(5893),n=s(1151);const d={sidebar_position:5},i="KISS VM",l={id:"buildonminima/contracts/kissvm",title:"KISS VM",description:"Here is a breakdown of the simple and complete KISSVM language.",source:"@site/docs/buildonminima/contracts/kissvm.md",sourceDirName:"buildonminima/contracts",slug:"/buildonminima/contracts/kissvm",permalink:"/docs/buildonminima/contracts/kissvm",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/contracts/kissvm.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Token/NFT scripts",permalink:"/docs/buildonminima/contracts/tokenscripts"},next:{title:"Start",permalink:"/docs/buildonminima/dapptutorial/start"}},h={},c=[{value:"Grammar",id:"grammar",level:2},{value:"Globals",id:"globals",level:2},{value:"Functions",id:"functions",level:2}];function x(t){const e={h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"kiss-vm",children:"KISS VM"}),"\n",(0,r.jsx)(e.p,{children:"Here is a breakdown of the simple and complete KISSVM language."}),"\n",(0,r.jsx)(e.h2,{id:"grammar",children:"Grammar"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"Grammar"}),(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"ADDRESS"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"ADDRESS ( BLOCK )"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"BLOCK"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"STATEMENT_1 STATEMENT_2 ... STATEMENT_n"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"STATEMENT"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["LET VARIABLE = EXPRESSION ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{})," LET ( EXPRESSION_1 EXPRESSION_2 ... EXPRESSION_n ) = EXPRESSION ",(0,r.jsx)(e.strong,{children:"|"}),(0,r.jsx)("br",{})," IF EXPRESSION THEN BLOCK [ELSEIF EXPRESSION THEN BLOCK]* [ELSE BLOCK] ENDIF ",(0,r.jsx)(e.strong,{children:"|"}),(0,r.jsx)("br",{})," WHILE EXPRESSION DO BLOCK ENDWHILE ",(0,r.jsx)(e.strong,{children:"|"}),(0,r.jsx)("br",{})," EXEC EXPRESSION ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{}),"MAST EXPRESSION ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{}),"ASSERT EXPRESSION ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{}),"RETURN EXPRESSION"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"EXPRESSION"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"RELATION"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"RELATION"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["LOGIC AND LOGIC  ",(0,r.jsx)(e.strong,{children:"|"}),"  LOGIC OR LOGIC  ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{})," LOGIC XOR LOGIC  ",(0,r.jsx)(e.strong,{children:"|"}),"  LOGIC NAND LOGIC ",(0,r.jsx)(e.strong,{children:"|"}),(0,r.jsx)("br",{})," LOGIC NOR LOGIC  ",(0,r.jsx)(e.strong,{children:"|"})," LOGIC NXOR LOGIC ",(0,r.jsx)(e.strong,{children:"|"})," LOGIC",(0,r.jsx)("br",{})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"LOGIC"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["OPERATION EQ OPERATION  ",(0,r.jsx)(e.strong,{children:"|"})," OPERATION NEQ OPERATION  ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{}),"OPERATION GT OPERATION  ",(0,r.jsx)(e.strong,{children:"|"})," OPERATION GTE OPERATION  ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{}),"OPERATION LT OPERATION  ",(0,r.jsx)(e.strong,{children:"|"})," OPERATION LTE OPERATION  ",(0,r.jsx)(e.strong,{children:"|"})," OPERATION"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"OPERATION"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["ADDSUB & ADDSUB ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{}),"ADDSUB | ADDSUB ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{})," ADDSUB ^ ADDSUB ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{})," ADDSUB"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"ADDSUB"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["MULDIV + MULDIV ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{})," MULDIV - MULDIV ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{})," MULDIV % MULDIV ",(0,r.jsx)(e.strong,{children:"|"}),(0,r.jsx)("br",{})," MULDIV << MULDIV ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{})," MULDIV >> MULDIV ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{}),"MULDIV"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"MULDIV"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["PRIME * PRIME ",(0,r.jsx)(e.strong,{children:"|"}),(0,r.jsx)("br",{})," PRIME / PRIME ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{}),"PRIME"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"PRIME"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["NOT PRIME ",(0,r.jsx)(e.strong,{children:"|"}),"  ",(0,r.jsx)("br",{}),"NEG PRIME ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{})," ~PRIME ",(0,r.jsx)(e.strong,{children:"|"}),(0,r.jsx)("br",{})," BASEUNIT"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"BASEUNIT"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["VARIABLE ",(0,r.jsx)(e.strong,{children:"|"})," VALUE ",(0,r.jsx)(e.strong,{children:"|"})," -NUMBER ",(0,r.jsx)(e.strong,{children:"|"})," GLOBAL ",(0,r.jsx)(e.strong,{children:"|"})," FUNCTION ",(0,r.jsx)(e.strong,{children:"|"})," ( EXPRESSION )"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"VARIABLE"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"[a-z]+"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"VALUE"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["NUMBER ",(0,r.jsx)(e.strong,{children:"|"})," HEX ",(0,r.jsx)(e.strong,{children:"|"})," STRING ",(0,r.jsx)(e.strong,{children:"|"})," BOOLEAN"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"NUMBER"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"^[0-9]+(\\.[0-9]+)?"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"HEX"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"0x[0-9a-fA-F]+"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"STRING"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"[UTF8_String]"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"BOOLEAN"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["TRUE ",(0,r.jsx)(e.strong,{children:"|"})," FALSE"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"FALSE"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"0"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"TRUE"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"NOT FALSE"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"GLOBAL"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["@BLOCK ",(0,r.jsx)(e.strong,{children:"|"})," @BLOCKMILLI ",(0,r.jsx)(e.strong,{children:"|"})," @CREATED ",(0,r.jsx)(e.strong,{children:"|"})," @COINAGE ",(0,r.jsx)(e.strong,{children:"|"})," @INPUT ",(0,r.jsx)(e.strong,{children:"|"}),(0,r.jsx)("br",{})," @AMOUNT ",(0,r.jsx)(e.strong,{children:"|"})," @ADDRESS ",(0,r.jsx)(e.strong,{children:"|"})," @TOKENID ",(0,r.jsx)(e.strong,{children:"|"})," @COINID ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{})," @SCRIPT ",(0,r.jsx)(e.strong,{children:"|"})," @TOTIN ",(0,r.jsx)(e.strong,{children:"|"})," @TOTOUT"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"FUNCTION"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"FUNC ( EXPRESSION_1 EXPRESSION_2 .. EXPRESSION_n )"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"FUNC"}),(0,r.jsxs)(e.td,{style:{textAlign:"left"},children:["CONCAT ",(0,r.jsx)(e.strong,{children:"|"})," LEN ",(0,r.jsx)(e.strong,{children:"|"})," REV ",(0,r.jsx)(e.strong,{children:"|"})," SUBSET ",(0,r.jsx)(e.strong,{children:"|"})," GET ",(0,r.jsx)(e.strong,{children:"|"})," EXISTS ",(0,r.jsx)(e.strong,{children:"|"})," OVERWRITE ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{})," REPLACE ",(0,r.jsx)(e.strong,{children:"|"})," SUBSTR ",(0,r.jsx)(e.strong,{children:"|"})," ADDRESS ",(0,r.jsx)(e.strong,{children:"|"})," SETLEN ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{})," BOOL ",(0,r.jsx)(e.strong,{children:"|"})," HEX ",(0,r.jsx)(e.strong,{children:"|"})," NUMBER ",(0,r.jsx)(e.strong,{children:"|"})," STRING ",(0,r.jsx)(e.strong,{children:"|"})," UTF8 ",(0,r.jsx)(e.strong,{children:"|"})," ASCII ",(0,r.jsx)(e.strong,{children:"|"}),"   ",(0,r.jsx)("br",{})," ABS ",(0,r.jsx)(e.strong,{children:"|"})," CEIL ",(0,r.jsx)(e.strong,{children:"|"})," FLOOR ",(0,r.jsx)(e.strong,{children:"|"})," MIN ",(0,r.jsx)(e.strong,{children:"|"})," MAX ",(0,r.jsx)(e.strong,{children:"|"})," INC ",(0,r.jsx)(e.strong,{children:"|"})," DEC ",(0,r.jsx)(e.strong,{children:"|"})," SIGDIG ",(0,r.jsx)(e.strong,{children:"|"})," POW ",(0,r.jsx)(e.strong,{children:"|"})," SQRT ",(0,r.jsx)(e.strong,{children:"|"}),(0,r.jsx)("br",{})," BITSET ",(0,r.jsx)(e.strong,{children:"|"})," BITGET ",(0,r.jsx)(e.strong,{children:"|"})," BITCOUNT ",(0,r.jsx)(e.strong,{children:"|"})," PROOF ",(0,r.jsx)(e.strong,{children:"|"})," SHA2 ",(0,r.jsx)(e.strong,{children:"|"})," SHA3 ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{})," SIGNEDBY ",(0,r.jsx)(e.strong,{children:"|"})," MULTISIG ",(0,r.jsx)(e.strong,{children:"|"})," CHECKSIG ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{}),"  FUNCTION ",(0,r.jsx)(e.strong,{children:"|"})," SUMINPUT ",(0,r.jsx)(e.strong,{children:"|"})," SUMOUTPUT ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{})," GETOUTADDR ",(0,r.jsx)(e.strong,{children:"|"})," GETOUTAMT ",(0,r.jsx)(e.strong,{children:"|"})," GETOUTTOK ",(0,r.jsx)(e.strong,{children:"|"})," GETOUTKEEPSTATE ",(0,r.jsx)(e.strong,{children:"|"})," VERIFYOUT ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{}),"  GETINADDR ",(0,r.jsx)(e.strong,{children:"|"})," GETINAMT ",(0,r.jsx)(e.strong,{children:"|"})," GETINTOK ",(0,r.jsx)(e.strong,{children:"|"})," GETINID ",(0,r.jsx)(e.strong,{children:"|"})," VERIFYIN ",(0,r.jsx)(e.strong,{children:"|"})," ",(0,r.jsx)("br",{})," STATE ",(0,r.jsx)(e.strong,{children:"|"})," PREVSTATE ",(0,r.jsx)(e.strong,{children:"|"})," SAMESTATE"]})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"globals",children:"Globals"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Global"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@BLOCK"}),(0,r.jsx)(e.td,{children:"the current block number"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@BLOCKMILLI"}),(0,r.jsx)(e.td,{children:"the current block time in milliseconds since Jan 1 1970"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@CREATED"}),(0,r.jsx)(e.td,{children:"the block this coin was created in"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@COINAGE"}),(0,r.jsx)(e.td,{children:"the difference in @BLOCK and @CREATED"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@INPUT"}),(0,r.jsx)(e.td,{children:"Input index of a coin used in the transaction. First input coin has an index of 0."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@COINID"}),(0,r.jsx)(e.td,{children:"the coinid"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@AMOUNT"}),(0,r.jsx)(e.td,{children:"the amount"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@ADDRESS"}),(0,r.jsx)(e.td,{children:"the address"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@TOKENID"}),(0,r.jsx)(e.td,{children:"the tokenid"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@SCRIPT"}),(0,r.jsx)(e.td,{children:"the script of this coin"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@TOTIN"}),(0,r.jsx)(e.td,{children:"the total number of input coins"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@TOTOUT"}),(0,r.jsx)(e.td,{children:"the total number of output coins"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Function"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CONCAT ( HEX_1 HEX_2 ... HEX_n )"}),(0,r.jsx)(e.td,{children:"Concatenate the HEX values."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"LEN ( HEX | SCRIPT )"}),(0,r.jsx)(e.td,{children:"Length of the data"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"REV ( HEX )"}),(0,r.jsx)(e.td,{children:"Reverse the data"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SUBSET ( HEX NUMBER NUMBER )"}),(0,r.jsx)(e.td,{children:"Return the HEX subset of the data - start - length"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"OVERWRITE ( HEX NUMBER HEX NUMBER NUMBER)"}),(0,r.jsx)(e.td,{children:"Copy bytes from the first HEX and pos to the second HEX and pos, length the last NUMBER"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"GET (NUMBER NUMBER .. NUMBER)"}),(0,r.jsx)(e.td,{children:"Return the array value set with LET ( EXPRESSION EXPRESSION .. EXPRESSION )1"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"EXISTS ( NUMBER NUMBER .. NUMBER )"}),(0,r.jsx)(e.td,{children:"Does the array value exists"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ADDRESS ( STRING )"}),(0,r.jsx)(e.td,{children:"Return the address of the script"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"REPLACE ( STRING STRING STRING)"}),(0,r.jsx)(e.td,{children:"Replace in 1st string all occurrence of 2nd string with 3rd"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SUBSTR ( NUMBER NUMBER STRING )"}),(0,r.jsx)(e.td,{children:"Get the substring"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CLEAN ( STRING )"}),(0,r.jsx)(e.td,{children:"Return a CLEAN version of the script"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"UTF8 ( HEX )"}),(0,r.jsx)(e.td,{children:"Convert the HEX value to a UTF8 string"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ASCII ( HEX )"}),(0,r.jsx)(e.td,{children:"Convert the HEX value to an ASCII string"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BOOL ( VALUE )"}),(0,r.jsx)(e.td,{children:"Convert to TRUE or FALSE value"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HEX ( SCRIPT )"}),(0,r.jsx)(e.td,{children:"Convert SCRIPT to HEX"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"NUMBER ( HEX )"}),(0,r.jsx)(e.td,{children:"Convert HEX to NUMBER"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"STRING ( HEX )"}),(0,r.jsx)(e.td,{children:"Convert a HEX value to SCRIPT"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ABS ( NUMBER )"}),(0,r.jsx)(e.td,{children:"Convert SCRIPT to HEX"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"NUMBER ( HEX )"}),(0,r.jsx)(e.td,{children:"Return the absolute value of a number"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CEIL ( NUMBER )"}),(0,r.jsx)(e.td,{children:"Return the number rounded up"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"FLOOR ( NUMBER )"}),(0,r.jsx)(e.td,{children:"Return the number rounded down"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"MIN ( NUMBER NUMBER )"}),(0,r.jsx)(e.td,{children:"Return the minimum value of the 2 numbers"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"MAX ( NUMBER NUMBER )"}),(0,r.jsx)(e.td,{children:"Return the maximum value of the 2 numbers"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"INC ( NUMBER )"}),(0,r.jsx)(e.td,{children:"Increment a number"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DEC ( NUMBER )"}),(0,r.jsx)(e.td,{children:"Decrement a number"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"POW ( NUMBER NUMBER )"}),(0,r.jsx)(e.td,{children:"Returns the power of N of a number. N must be a whole number."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SIGDIG ( NUMBER NUMBER )"}),(0,r.jsx)(e.td,{children:"Set the significant digits of the number"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BITSET ( HEX NUMBER BOOLEAN )"}),(0,r.jsx)(e.td,{children:"Set the value of the BIT at that Position to 0 or 1"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BITGET ( HEX NUMBER )"}),(0,r.jsx)(e.td,{children:"Get the BOOLEAN value of the bit at the position."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BITCOUNT ( HEX )"}),(0,r.jsx)(e.td,{children:"Count the number of bits set in a HEX value"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"PROOF ( HEX HEX HEX )"}),(0,r.jsx)(e.td,{children:"Check the data, mmr proof, and root match. Same as mmrproof on Minima."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"KECCAK ( HEX | STRING )"}),(0,r.jsx)(e.td,{children:"Returns the KECCAK value of the HEX value."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SHA2 ( HEX | STRING )"}),(0,r.jsx)(e.td,{children:"Returns the SHA2 value of the HEX value."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SHA3 ( HEX | STRING )"}),(0,r.jsx)(e.td,{children:"Returns the SHA3 value of the HEX value."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SIGNEDBY ( HEX )"}),(0,r.jsx)(e.td,{children:"Returns true if the transaction is signed by this public key"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"MULTISIG ( NUMBER HEX1 HEX2 .. HEXn )"}),(0,r.jsx)(e.td,{children:"Returns true if the transaction is signed by N of the public keys"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CHECKSIG ( HEX HEX HEX)"}),(0,r.jsx)(e.td,{children:"Check public key, data and signature"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"GETOUTADDR ( NUMBER )"}),(0,r.jsx)(e.td,{children:"Return the HEX address of the specified output"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"GETOUTAMT ( NUMBER )"}),(0,r.jsx)(e.td,{children:"Return the amount of the specified output"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"GETOUTTOK ( NUMBER )"}),(0,r.jsx)(e.td,{children:"Return the token id of the specified output"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"GETOUTKEEPSTATE ( NUMBER )"}),(0,r.jsx)(e.td,{children:"Is the output keeping the state"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"VERIFYOUT ( NUMBER HEX NUMBER HEX BOOL )"}),(0,r.jsx)(e.td,{children:"Verify the output has the specified address, amount, tokenid and keepstate"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"GETINADDR ( NUMBER )"}),(0,r.jsx)(e.td,{children:"Return the HEX address of the specified input"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"GETINAMT ( NUMBER )"}),(0,r.jsx)(e.td,{children:"Return the amount of the specified input"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"GETINTOK ( NUMBER )"}),(0,r.jsx)(e.td,{children:"Return the token id of the specified input"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"VERIFYIN ( NUMBER HEX NUMBER HEX )"}),(0,r.jsx)(e.td,{children:"Verify the input has the specified address, amount and tokenid"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"STATE ( NUMBER )"}),(0,r.jsx)(e.td,{children:"Return the state value for the given number"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"PREVSTATE ( NUMBER )"}),(0,r.jsx)(e.td,{children:"Return the state value stored in the coin MMR data - when the coin was created."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SAMESTATE ( NUMBER NUMBER )"}),(0,r.jsx)(e.td,{children:"Return TRUE if the previous state and current state are the same for the start and end positions"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SUMINPUTS ( HEX )"}),(0,r.jsx)(e.td,{children:"Sum the input values of this token type"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SUMOUTPUTS ( HEX )"}),(0,r.jsx)(e.td,{children:"Sum the output values of this token type"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"FUNCTION ( STRING VALUE1 VALUE2.. VALUEn )"}),(0,r.jsx)(e.td,{children:"Generic Function. Run the script after replacing $1, $2.. $n in the script with the provided parameters and use the variable 'returnvalue' as the returned result."})]})]})]})]})}function j(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(x,{...t})}):x(t)}},1151:(t,e,s)=>{s.d(e,{Z:()=>l,a:()=>i});var r=s(7294);const n={},d=r.createContext(n);function i(t){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:i(t.components),r.createElement(d.Provider,{value:e},t.children)}}}]);