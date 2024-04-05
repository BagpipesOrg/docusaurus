"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4511],{5554:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(4848),s=t(8453);const i={},r="Api client example Python flask",l={id:"api/flask",title:"Api client example Python flask",description:"in this example we will create a simple python flask application to list open hrmp channels that are connected to a user defined parachain",source:"@site/docs/api/flask.md",sourceDirName:"api",slug:"/api/flask",permalink:"/docusaurus/docs/api/flask",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/flask.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Api Documentation",permalink:"/docusaurus/docs/api/docs"},next:{title:"DOT &gt; USDT",permalink:"/docusaurus/docs/api/usdt"}},o={},c=[{value:"Requirements:",id:"requirements",level:3},{value:"Run it:",id:"run-it",level:3}];function p(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"api-client-example-python-flask",children:"Api client example Python flask"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"in this example we will create a simple python flask application to list open hrmp channels that are connected to a user defined parachain"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"requirements",children:"Requirements:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Python 3"}),"\n",(0,a.jsxs)(n.li,{children:["requests and flask(",(0,a.jsx)(n.code,{children:"$ pip3 install flask requests"}),")"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"mkdir listchannels/\ntouch listchannels/app.py\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Add the following to ",(0,a.jsx)(n.code,{children:"app.py"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from flask import Flask\nimport requests \n\napp = Flask(__name__)\n\napi_endpoint = \"http://localhost:8080\" # set the address of the api address \n\n\n# Lets make a class to talk with the api\nclass handle_chain():\n\tdef __init__(self):\n\t\tself.api = api_endpoint\n\n\t# check open hrmp channels based on source paraid\n\tdef check_openchannels(self, paraid):\n\t\treturn requests.post(self.api+'/polkadot/openchannels', json={\"paraid\": paraid}).json()\n\n\t# interact with a premade scenario\n\tdef call_scenario(self, scenarioid, calldata):\n\t\treturn requests.post(self.api+'/call/scenario', json={\"data\":calldata}).text\n\n# create the /hrmp/openchannels/chain page \n@app.route('/hrmp/openchannels/<chain>/', methods=['GET'])\ndef chain_channels(chain):\n\t# configure chain name and map it to paraid\n\tsome_chains = {'acala': 2000, 'assethub':1000 , 'hydradx': 2034}\n\t# verify user input\n\tif not some_chains.keys().__contains__(chain.lower()):\n\t\treturn flask.redirect('/', code=301)\n\t# create a string buffer we will use to write the html to\n\toutput = \"\"\n\tchannels = handle_chain().check_openchannels(some_chains.get(chain.lower()))\n\tfor channel in channels.get('open_hrmp_channels', []):\n\t\toutput += \"<p>Chain: {}</p></br>\".format(channel)\n\t# return our html string, if this is a production app we should configure a static template and render it with flask.render_template\n\treturn '<html><body><center>{} is connected to chains: {}</body></html>'.format(chain.title(), output)\n\n\n@app.route('/')\ndef hello():\n    return 'Visit /hrmp/openchannels/assethub/'\n\n\nif __name__ == \"__main__\":\n\t# configure runtime variables such as port and host\n\tapp.run(host='0.0.0.0', port=8081)  \n\n"})}),"\n",(0,a.jsx)(n.h3,{id:"run-it",children:"Run it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ python3 app.py\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var a=t(6540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);