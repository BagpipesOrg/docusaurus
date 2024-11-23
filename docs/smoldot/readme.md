# Smoldot Light client    


Bagpipes supports the new polkadot Light client, "Smoldot". Together withe new PAPI(polkadot-api) dependencies.  

Smoldot allows us to run a light client in our browser, not making us depend upon rpc providers and centralized entities.   


We have enabled all queries being made using the ChainQuery node to use Smoldot.    

 

#### Query Polkadot with Smoldot:   
![](/img/smoldotpoc.png)     
    
Template Link:   
https://app.xcmsend.com/#/create/?diagramData=nlSg50JSr   


#### Use with docker:   
You can use our public docker image to run it locally:    
```shell
docker pull xcmsend/xcmsend:0.3.3
```


#### Known bugs:   
Public keys of ss58 address for `polkadot.system.account` doesnt work curently. A user has to search using the regular address format.  




### Read more:   
[New Polkadot API](https://papi.how/)    
[Smoldot](https://github.com/smol-dot/smoldot)  
