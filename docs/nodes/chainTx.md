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


<div class="text--center">
 <img src={require('@site/static/img/chainTx2.png').default}  width="500"/>


  
</div>

:::tip [Pro tip]
### Supercharge with Pills
Dont' forget you can use the outputs from upstream nodes (aka [Pills](/docs/pills)), to drop into a field of your choice. 

<img src={require('@site/static/img/chainTx6.png').default}  width="500"/>
_in the above example, the upstream connected node is a Query Chain node, you will have access to its expected outputs. If you have more then one connected upstream node then you have access to all of its outputs._

Find out more [here](/docs/pills))


:::




:::tip[Pro tip]

If you use the click the toggle on (blue) then the selection field becomes an input field, that means you can manually provide the data. 
<img src={require('@site/static/img/chainTx3.png').default}  width="300"/>

:::danger[Take care]

Take care with a free input as you may get data validation issues so you have to be accurate. 

:::


### 3. Submit Transaction Once
You can execute the transaction on to the chain individually without running the entire workflow. Just click `Submit Tx` and you will get the output below.  

<div class="text--center"><img src={require('@site/static/img/chainTx3.png').default}  width="500"/></div>



### 4. Decode Call Data



If you have encoded call data, that looks something like this:

```
// encoded call data example
0x3c0101000000000000000000000000000000000100000100000100000000000000000000000000000000000000000000000000
```

then you can paste into the field... 
<div class="text--center"><img src={require('@site/static/img/chainTx5.png').default}/></div>

Click the button `Decode`...
<div class="text--center"><img src={require('@site/static/img/chainTx4.png').default}/></div>

...and then the call data be decoded and in human readable form. 





