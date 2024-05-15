---
sidebar_position: 4
---

# Chain Query Node

- A Chain Query node allows you to query a substrate based blockchain. 

- Think of a "Polkadot-js Apps" with special powers. The output from querying a pallet method can be used as pills that can be used in any other node, including another Chain Query node. 


### 1. Drop a Chain Query node
Drag and drop a chain query node into the scenario
 <img src={require('@site/static/img/chainQuery0.png').default}  width="500"/>


### 2. Chain Query Form

Enter the `chain`, `pallet`, `method`, and fill out the `method fields` (if required) to query the storage of the substrate chain.  

If you leave the blockhash/blocknumber field empty then it will default to the latest block. 


<div class="text--center">
 <img src={require('@site/static/img/chain_query1.png').default}  width="500"/>


 
</div>



:::tip[Pro tip]

If you use the click the toggle on (blue) then the selection field becomes an input field, that means you can manually provide the data. 
<img src={require('@site/static/img/chainQuery3.png').default}  width="300"/>

:::danger[Take care]

Take care with a free input as you may get data validation issues so you have to be accurate. 

:::


:::
### 3. Run Method Once
You can query the chain individually, without it being part of thw scenario workflow. Just click `Run Method Once` and you will get the output below.  

<img src={require('@site/static/img/chainQuery2.png').default}  width="500"/>



### 4. Create Pills out of the Chain Query output

If you want to generate pills, so that you can drop them in to other nodes, execute the scenario once (by clicking the green play button in the top right of the canvas). 

 <img src={require('@site/static/img/chainQuery4.png').default}/>

When the scenario is executed once, data will show in the event notifications. (as above)

 <img src={require('@site/static/img/chainQuery6.png').default}/>

Then hey presto! If you connect a node to the right of the  Chain Query node you will be able to use the output fields as Pills. 

Then we send the request. Once it is sent the Webhook should receive the event, and you should get a notification that the webhook event is received. 


