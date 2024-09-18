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
![](/img/ink_upload.png)     
Use [ui.use.ink](https://ui.use.ink/) to upload your contract to the testnet.   


Copy the address of the deployed contract:    
![](/img/copy_contract_address.png)   


Query the contract on-chain using Bagpipes:    
![](/img/contracts_ink.png)    

Template link:  
[https://alpha.bagpipes.io/#/create/?diagramData=NmtfKAsjz](https://alpha.bagpipes.io/#/create/?diagramData=NmtfKAsjz)    


### Use the api:     
Get the contracts .json file and the address of the contract.   

```shell  
curl -X POST http://localhost:8080/api/ink/contract_info \
     -H "Content-Type: application/json" \
     -d @- <<EOF
{
  "abiJson": $(cat flipper.json),
  "address": "5GLTeaqe8DqZbqhhzV6i2MdaG5zJbps84KwgjewUVo75gwga"
}
> 
> EOF
```  
output:   
```json  
{"sucess":true,"description":[{"function_name":"flip","selector":"0x633aa551","mutates":true,"args":[]},{"function_name":"get","selector":"0x2f865bd9","mutates":false,"args":[]}]}
```


#### Read more about ink here:    
[Parity data ink dashboard](https://dashboards.data.paritytech.io/ink.html)      
[ink main site](https://use.ink/)   
[Rococo Contracts chain](https://use.ink/testnet/)   


