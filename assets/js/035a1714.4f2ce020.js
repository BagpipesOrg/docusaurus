"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2857],{4824:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(4848),a=n(8453);const i={},o="Bot commands",c={id:"api/discord_bot_commands",title:"Bot commands",description:"The bot reacts on keywords and commands.",source:"@site/docs/api/discord_bot_commands.md",sourceDirName:"api",slug:"/api/discord_bot_commands",permalink:"/docusaurus/docs/api/discord_bot_commands",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/discord_bot_commands.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Discord Bot",permalink:"/docusaurus/docs/api/discord"},next:{title:"Api Documentation",permalink:"/docusaurus/docs/api/docs"}},r={},d=[{value:"Scenario info:",id:"scenario-info",level:2},{value:"Slash command: <strong>/scenario_info copied_link_here</strong>",id:"slash-command-scenario_info-copied_link_here",level:4},{value:"Create swaps",id:"create-swaps",level:2},{value:"Slash command: <strong>/swap source_asset dest_asset amount</strong>",id:"slash-command-swap-source_asset-dest_asset-amount",level:4},{value:"Create scenarios",id:"create-scenarios",level:2},{value:"Slash command: <strong>/xcm-transfer source_chain dest_chain</strong>",id:"slash-command-xcm-transfer-source_chain-dest_chain",level:4},{value:"User examples:",id:"user-examples",level:3},{value:"Get links:",id:"get-links",level:2},{value:"Documentation:",id:"documentation",level:4},{value:"Github:",id:"github",level:4},{value:"<strong>/github-link</strong>",id:"github-link",level:4}];function h(e){const s={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"bot-commands",children:"Bot commands"}),"\n",(0,t.jsx)(s.p,{children:"The bot reacts on keywords and commands."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"scenario-info",children:"Scenario info:"}),"\n",(0,t.jsxs)(s.p,{children:["Using the public interface( ",(0,t.jsx)(s.a,{href:"https://alpha.bagpipes.io",children:"alpha.bagpipes.io"})," ) you can drag and drop together a scenario:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(1090).A+"",width:"1281",height:"527"})}),"\n",(0,t.jsxs)(s.p,{children:["Go to the ",(0,t.jsx)(s.code,{children:"/lab"})," view and copy the link:",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.img,{src:n(2020).A+"",width:"1249",height:"569"})]}),"\n",(0,t.jsxs)(s.p,{children:["Paste the link into the ",(0,t.jsx)(s.strong,{children:"#bot"})," channel:",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.img,{src:n(2914).A+"",width:"452",height:"564"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Note: you can use the slash command or just paste the copied link into the chat for the bot to display the information."})}),"\n",(0,t.jsxs)(s.h4,{id:"slash-command-scenario_info-copied_link_here",children:["Slash command: ",(0,t.jsx)(s.strong,{children:"/scenario_info copied_link_here"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(3023).A+"",width:"698",height:"112"})}),"\n",(0,t.jsx)(s.h2,{id:"create-swaps",children:"Create swaps"}),"\n",(0,t.jsx)(s.p,{children:"Swap one asset on HydraDx for another using Omnipool."}),"\n",(0,t.jsxs)(s.h4,{id:"slash-command-swap-source_asset-dest_asset-amount",children:["Slash command: ",(0,t.jsx)(s.strong,{children:"/swap source_asset dest_asset amount"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(4484).A+"",width:"702",height:"96"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(220).A+"",width:"680",height:"217"})}),"\n",(0,t.jsx)(s.h2,{id:"create-scenarios",children:"Create scenarios"}),"\n",(0,t.jsx)(s.p,{children:"Send an asset from one chain to another with an XCM asset transfer."}),"\n",(0,t.jsxs)(s.h4,{id:"slash-command-xcm-transfer-source_chain-dest_chain",children:["Slash command: ",(0,t.jsx)(s.strong,{children:"/xcm-transfer source_chain dest_chain"})]}),"\n",(0,t.jsx)(s.h3,{id:"user-examples",children:"User examples:"}),"\n",(0,t.jsxs)(s.p,{children:["Send 20 of asset 1:",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.strong,{children:"/xcm-transfer polkadot assethub 1 20"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(9191).A+"",width:"693",height:"112"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(1602).A+"",width:"630",height:"128"})}),"\n",(0,t.jsx)(s.h2,{id:"get-links",children:"Get links:"}),"\n",(0,t.jsx)(s.p,{children:"Request the most up to date Bagpipes project links from the bot."}),"\n",(0,t.jsx)(s.h4,{id:"documentation",children:"Documentation:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"> flipchan: whats the api documentation?\n> BagpipesBot: \nHere is a link to the documentation for the API: https://xcmsend.github.io/api/docs.html\n"})}),"\n",(0,t.jsx)(s.h4,{id:"github",children:"Github:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"> user: What's the github link?  \n> BagpipesBot: Github repo: https://github.com/XcmSend/ \n"})}),"\n",(0,t.jsx)(s.h4,{id:"github-link",children:(0,t.jsx)(s.strong,{children:"/github-link"})}),"\n",(0,t.jsx)(s.p,{children:"Displays github repo link with a slash command."})]})}function l(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9191:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/bot_xcm_transfer_create-a8290c1e129c7a3dea7fea0937120d4b.png"},2914:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/discord_bot-edde07c4935f5f730f63f1e053ccc856.png"},1602:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/discord_bot_xcm_created-df401d890c79057ac783029fae38a5d5.png"},4484:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/discord_swap-1658b2341217b3a0ec0f48ae40b5eea1.png"},220:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/discord_swap2-8c1dcd442ef7452f7f00a2e7df9aa794.png"},2020:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/lab_viewer-39d1c59f9fb6dd6222ebd97d74d872e8.png"},1090:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/scenario_bot-9530427806a9fba07a0745313280528e.png"},3023:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/scenario_info_bot-69071a1674cc036b5aab95c1e2c5b983.png"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var t=n(6540);const a={},i=t.createContext(a);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);