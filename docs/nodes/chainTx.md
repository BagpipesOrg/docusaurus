---
sidebar_position: 6
---

# Chain Tx Node

- A Chain Tx node allows you to sign and broadcast a transaction (extrinsic) on a blockchain. 

- Think of a "Polkadot-js Apps" with special powers. The output from signed transsaction can be used as pills and can used in any other node. You can also add pills as inputs into the fields.


### 1. Drop a Chain Tx node
Drag and drop a Chain Tx node into the scenario
 <img src={require('@site/static/img/chainTx1.png').default}  width="500"/>


### 2. Chain Tx Form

Enter the `chain`, `pallet`, `method`, and fill out the `method fields` (if required) to create a transaction on the substrate chain.  

:::tip [Tip]
If you leave the blockhash/blocknumber field empty then it will default to the latest block. 
:::

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
### 3. Execute Method Once
You can execute and transaction the chain individually, without it being part of the scenario workflow. Just click `Run Method Once` and you will get the output below.  

<img src={require('@site/static/img/chainQuery2.png').default}  width="500"/>



### 4. Create Pills out of the Chain Query output

If you want to generate pills, so that you can drop them in to other nodes, execute the scenario once (by clicking the green play button in the top right of the canvas). 

 <img src={require('@site/static/img/chainQuery4.png').default}/>

When the scenario is executed once, data will show in the event notifications. (as above)

 <img src={require('@site/static/img/chainQuery6.png').default}/>

Then hey presto! If you connect a node to the right of the  Chain Query node you will be able to use the output fields as Pills. 




