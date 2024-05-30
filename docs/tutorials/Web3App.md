---
sidebar_position: 1
---

# Connect your Web App to Bagpipes

Interested in connecting your website or web app with your Bagpipe? Watch this tutorial to find out how you can make your app into a web3 app in minutes. 

Turn your app into Web3 app by creating a bagpipe that queries the blockchain, for a balance and feeds that balance to a front-end web app.

<div style={{ position: 'relative', paddingBottom: '62.5%', height: 0 }}>
  <iframe 
    src="https://www.loom.com/embed/a48e4620e9324c72a19306cd90e0ff5e?sid=ecf378d8-c8e8-4db0-b06a-50407c8b4952" 
    frameBorder="0" 
    webkitAllowFullScreen 
    mozAllowFullScreen 
    allowFullScreen 
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
  />
</div>

------
Ramsey, Product Engineer @ Bagpipes

-----

🔗 Bagpipe template link: 
https://alpha.bagpipes.io/#/create/?diagramData=Ua4SlJi3i

🔗 Frontend mini app: 
https://replit.com/@decentration/ReactWithBagpipes#src/frontendConfig.js

🔗 Server: 
https://replit.com/@decentration/ReactWithBagpipesServer#index.js

Creating a Bagpipe for Querying Blockchain Balance

### Objective:

To create a bagpipe that queries the blockchain, specifically the Polkadot chain, for a balance and feeds that balance to a front-end web app.

### Key Steps:

## 1. **Create Webhook Endpoint**

    - Create a webhook and copy the webhook endpoint link provided.
    - Then activate the webhook by clicking "Start listening" and sending data to it. 

## 2. **Fork the Frontend and Backend with Repl.it**

   - Connect a frontend web app and a Node.js server via the webhook.
   - Provide the frontend URL in the server config and the server URL and webhook endpoint in the frontend config.

## 3. **Send Data to Webhook**

   - Use the frontend to send data to the webhook.
   - Activate the webhook by sending it initial data.

## 4. **Create Execution**

   - Create an execution to fetch the balance.
   - Run the scenario to produce pills based on the data structure of the execution.

## 5. **Send Response to Frontend**

   - Use the (downstream) HTTP Request node to send the response back to the website's Node.js server.
   - Make a POST request with the free balance pill to the server URL with necessary headers (content type, accept).


### Notes

 - Ensure proper data flow from frontend to webhook to query chain node to backend server.
 - Check for errors in data transmission and response handling.
 - Verify the correctness of URLs, endpoints, and headers for smooth operation.

### Tips

- You can use this bagpipes template, the pills will be placed, but you will only be able to access pills from a node if the node has been executed, https://alpha.bagpipes.io/#/create/?diagramData=Ua4SlJi3i

- Use the provided templates for frontend and backend connections.
  - 🔗 Frontend mini app: 
https://replit.com/@decentration/ReactWithBagpipes#src/frontendConfig.js

  - 🔗 Server: 
https://replit.com/@decentration/ReactWithBagpipesServer#index.js
- Send data to the nodes by running the scenario, this will populate the pills
- Reach out for support or clarification if needed via comments or email.

By following these steps, you can quickly create a "Bagpipe" to query blockchain balances and integrate them into your web app!