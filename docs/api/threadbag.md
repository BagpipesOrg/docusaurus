# Threadbag - Persistance execution 

Threadbag lets you run any scenario that you continously  in the main interface of 


## Endpoints:  
https://th-0.bagpipes.io   

### Example use case:

#### 0: Navigate to Bagpipes:   
Run it locally or use the public instance: https://app.xcmsend.com

#### 1. Create a scenario in the main ui:    
![](/img/sample_scenario_threadbag.png) 

Scenario Link:
https://app.xcmsend.com/#/create/?diagramData=YDqp6whUK   



#### 2. Copy the link and get the scenario id:     
Go to Lab in the left side menu and press copy link of the scenario. Copy the last part of the link like in the image, this is your scenario_id.   
![](/img/threadbag_copy_si.png)   

The scenario id would be "YDqp6whUK" in this example.  


#### 3. Start the job worker with the scenario id:  
```shell
curl -X POST http://th-0.bagpipes.io/job/start -H "Content-Type: application/json" \
-d '{"id":"YDqp6whUK"}'
```
output:  
```json
{'success': True, 'result': 'Job started'}
```


#### 4: Query for logs:  
```shell
curl -X POST http://th-0.bagpipes.io/scenario/worker/logs -H "Content-Type: application/json" \
-d '{"id":"YDqp6whUK"}'
```
output:  
```json
{"success":true,"result":["Starting worker","Decoding payload..","Parsed scenario data","Remark transaction generated","Drafting Remark tx from assetHub to assetHub","Building Action request","Building ChainNode request","Building ChainNode request","Building ChainNode request","Could not generate transaction","xTransfer transaction type","Drafting xTransfer tx from assetHub to hydraDx","Building Action request","workload executed","Sleeping"]}
```



#### 5: Query for generated transactions:    
```shell
curl -X POST http://th-0.bagpipes.io/scenario/tx-H "Content-Type: application/json" \
-d '{"id":"YDqp6whUK"}'
```
output:  
```json  
{"mempool":[{"chain":"assetHub","amount":"0","txType":"Remark","Date":"2024-05-19T22:50:11.827281773Z","tx":"0x2404000714666c756666"},{"chain":"assetHub","amount":"1230000000000","txType":"xTransfer","Date":"2024-05-19T22:50:11.838491720Z","tx":"Could not generate transaction"}]}
```



## Python example: 
```python

```


## Mempool:  



### Bring your own signer 


Template repo:
https://github.com/XcmSend/threadbag-examples  



