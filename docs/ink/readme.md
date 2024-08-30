# Ink

Bagpipes supports querying all ink smart contracts on Rococo's contracts chain.    

To get started, you will need the source code and the address of the smart contract, use the public contracts interface at [ui.use.ink](https://ui.use.ink/) to upload your contract to the testnet.  


### Supported chains:   
-  [x] Rococo Contracts chain


### Get started 

In order to build ink contracts we need to install [cargo-contract](https://github.com/use-ink/cargo-contract):   
```shell
cargo install --force --locked cargo-contract
```

Create a new contract:   

```shell
cargo contract new test_contract
```

Build contract:   
```shell   
cd test_contract/ && cargo contract build   
```

Get some testnet tokens using the public faucet:   
[use.ink/faucet](https://use.ink/faucet)   

Upload the .contract file found `target/ink/`:    
![](/img/ink_deploy.png)     
Use [ui.use.ink](https://ui.use.ink/) to upload your contract to the testnet.   


Query the contract on-chain using Bagpipes:    
![](/img/contracts_ink.png)    

Template link:  
[https://alpha.bagpipes.io/#/create/?diagramData=NmtfKAsjz](https://alpha.bagpipes.io/#/create/?diagramData=NmtfKAsjz)    


#### Read more about ink here:    
[Parity data ink dashboard](https://dashboards.data.paritytech.io/ink.html)      
[ink main site](https://use.ink/)   
[Rococo Contracts chain](https://use.ink/testnet/)   


