# Threadbag - Persistance execution 

Threadbag lets you run any scenario that you continously in the main interface of Bagpipes.

```ascii
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0OkO0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKxc';oXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKOl':0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNd,'';dXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0d;,xodNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0d:'odl0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMk:;:l;lKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKl;;od,cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx;;;od,oWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo,::dd,dWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXo:clddckWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKkO0OokxkWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNkllxOXWkkWMMMMMMMMMMMMNNNWWMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXd,,cxNWxdWMMMMMMMMMMMXdldxKMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO::oddxldWMMMMMMMMMMMK:':dXMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMXXWMMMMMMMMMMMMMMMMMMMMMM0c:oxKXx;lXMMWMMMMMMKxc,:ONMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMM0o0MMMMMMMMMMMMMMMMMMMMMWx;;okXMWd;dOKXXXKOkkd:,;ldKWMMMMMMMMMMMMWNWWWMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMWkoKMMMMMMMMMMMMMMMMMMMMNd,:xXNMNllK0OOkkOOOKk:c0NdoXMMMMMMMMMMMNxoxx0WMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMNddNMMMMMMMMMMMMMMMMMMMXo:lOWWWk',OWMMMMMMNOccOWMXdo0NMMMMMMWWNk;':oKWMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMKoxNMMMMMMMMMMMMMMMMMWKkkOXMMWx..xWMMMMMXo:;oXMMMN0xxOOOOOkkx:,;xKNMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMOckWMMMMMMMMMMMMMMMMW0llONMMWo..oNMMMMNd;,cOWMMMMMMNX0O0KKkl:ccxWMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMNo:kWMMMMMMMMMMMMMMMM0:cKMWMNc..:KMMMWO:,:kWMMMMMMMMMMMN0o:lONxlKMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMKlcKMMMMMMMMMMMMMMMMO:dNMWMX:..,0WMWXOdoOWMMMMMMMMMMWOo:;oXWMOl0MMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMM0coXMMMMMMMMMMMMMMWk:kWMWWK;..'kMMXdokKWMMMMMMMMMMXd:,;oKMMMOl0MMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMWkcxNMMMMMMMMMMMMMNoc0MMWMO,...xWWk;lKWMMMMMMMMMW0l;,cONMMMMOoKMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMNdckNMMMMMMMMMMMW0loKMMMMXdcco0WO:cKMMMMMMMMMMNOxdoxXWMMMMMOdXMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMKlc0WMMMMMMMMMMNkdkXWMMMMMWWWW0cc0WMMMMMMMMMXd:oOXWMMMMMMMOxNMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMWOclKWMMMMMMMMMXo:xXMMMMMMMMN0dlOWMMMMMMMMW0c;dKWMMMMMMMMMxdNMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNxlkXWMMMMMMMMO:;xNMMMMMMMW0ddONMMMMMMMMXd:l0WMMMMMMMMMMWxdWMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0odOXMMMMMMMWx,:kWMMMMMMWOc:xXMMMMMMWXOo:xNMMMMMMMMMMMMNodWMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWOclONMMMMMMXo:lOWMMMMMW0:,c0MMMMMMW0dod0WMMMMMMMMMMMMMNodWMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMWWWNKkddkKXXNNN0lco0WMMMMW0:':kWMMWWN0o;:xKWMMMMMMMMMMMMMW0clXMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMWNX0OkkxddooooooddxxdlclOXWWMW0l;;d00OOOxl,';lkKXWWMMMMMMMMMMMWd.,kWMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMWKkolccclollollollllooooooodxkOxc;:oddoool;',:looodk0XWMMMMMMMMMWd..xWMMMMMMMMMM
MMMMMMMMMMMMMMMMMMWKxlccccc::cc::c::c::::lllllloooolc;;clll:,;ccclloodddxkKWMMMMMMMMXc..cXMMMMMMMMMM
MMMMMMMMMMMMMMMMMNOc:::cc::;,;:,;:,';;,,;;ccllloooddoolcclc'..;ccccloodxxdkXMMMMMMMMK;..;0MMMMMMMMMM
MMMMMMMMMMMMMMMMWkc;;::::lodddl,,,..''.'',;;:::clllooooolloc;;;;:::coodddodKWMMMMMMM0,..'OMMMMMMMMMM
MMMMMMMMMMMMMMMMKc,,,;cd0NWWMWNOc........',,,;;::::cllllllloc::;:cc:clloold0WMMMMMMMO'...xWMMMMMMMMM
MMMMMMMMMMMMMMMNx:,;;cONMMMMMMMMXl.........''',;,;;::ccccccllc::;;::::cclldKWMMMMMMMx....dWMMMMMMMMM
MMMMMMMMMMMMMMMKxollo0WMMMMMMMMMMKc'..........',',,;;;;;::::c:;;;,;;;;:cclkNMMMMMMMM0c;;:OWMMMMMMMMM
MMMMMMMMMMMMMMW0lcodkXMMMMMMMMMMMMKc.............',,,,,,;,,;;;;,,,,;;;:ccxNMMMMMMMMMMWNNWWMMMMMMMMMM
MMMMMMMMMMMMMMMOlookNWMMMMMMMMMMMMMKo,...........'''',',,,,;;;;;;;;:::clkNMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMWx:lxXMMMMMMMMMMMMMMMMW0l,.......'''',,,,;;;;:::::::::cox0WMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMk,cKWMMMMMMMMMMMMMMMMMMWXkoc;'',,,,;,,;;;;;::::ccldxOKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMWxc0MMMMMMMMMMMMMMMMMMMMMMMMWX0OkxxdddddddxkkO00KXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMXldNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMOcOWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMNolXMMMMMMMMMMMMMMMThreadBagMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMOckWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM


```


Multi-threaded Persistence work server for Bagpipes. 


Made with: A Tokio runtime, Polodb + Sled, Subxt and actix-web. 


Lets get started by creating a scenario in the main interface at alpha.bagpipes.io, copy the link and copy the scenario id. Then lets start the job: 
![](/img/basic.png) 



### Start Job: 
```shell
curl -X POST -H "Content-Type: application/json" -d '{"id": "qSxt94jqC"}' https://th-0.bagpipes.io/job/start -v
```


### Stop Job: 
```shell
curl -X POST -H "Content-Type: application/json" -d '{"id": "qSxt94jqC"}' https://th-0.bagpipes.io/job/stop -v
```

### Query Job:
After we have started the job we want to continously query for logs.  This can be see as the status update/main logger that will give you all output generated by the scenario worker. 

Python code example:
```python
base = "https://api.bagpipes.io"
scenario_id = "qSxt94jqC"
logs = requests.post(base+"/scenario/worker/logs", json={"id": scenario_id})
print("Logs returned: ", logs.text)
```

```json
{"success":true,"result":["Starting worker","Decoding payload..","downloaded scenario data from api","Parsed scenario data","Starting worker","Decoding payload..","downloaded scenario data from api","Parsed scenario data","Starting worker","Decoding payload..","downloaded scenario data from api","Parsed scenario data","Starting worker","Decoding payload..","downloaded scenario data from api","Parsed scenario data","Starting worker","Decoding payload..","downloaded scenario data from api","Parsed scenario data","Starting worker","Decoding payload..","downloaded scenario data from api","Parsed scenario data","Got webhook data from the api: ","Latest data got back from uuid: {\"asset_id\": Number(7), \"address\": String(\"0x2e4ebdfb837f8b9ab416929986184b835a0c39901b4c5ab543e7d283f661fd67\")}","Building webhook request","uuid for webhook is: e5085097-1cc5-45fc-a5ea-c1db571c12a3","Webhook finished, moving on ","ChainQuery Node detected","ChainQuery Node Request built","ChainQuery got response back","workload executed","Sleeping","Starting worker","Decoding payload..","downloaded scenario data from api","Parsed scenario data","Got webhook data from the api: ","Latest data got back from uuid: {\"asset_id\": Number(7), \"address\": String(\"0x2e4ebdfb837f8b9ab416929986184b835a0c39901b4c5ab543e7d283f661fd67\")}","Building webhook request","uuid for webhook is: e5085097-1cc5-45fc-a5ea-c1db571c12a3","Webhook finished, moving on ","ChainQuery Node detected","ChainQuery Node Request built","ChainQuery got response back","workload executed","Sleeping"]}
```



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
curl -X POST https://th-0.bagpipes.io/job/start -H "Content-Type: application/json" \
-d '{"id":"YDqp6whUK"}'
```
output:  
```json
{'success': True, 'result': 'Job started'}
```


#### 4: Query for logs:  
```shell
curl -X POST https://th-0.bagpipes.io/scenario/worker/logs -H "Content-Type: application/json" \
-d '{"id":"YDqp6whUK"}'
```
output:  
```json
{"success":true,"result":["Starting worker","Decoding payload..","Parsed scenario data","Remark transaction generated","Drafting Remark tx from assetHub to assetHub","Building Action request","Building ChainNode request","Building ChainNode request","Building ChainNode request","Could not generate transaction","xTransfer transaction type","Drafting xTransfer tx from assetHub to hydraDx","Building Action request","workload executed","Sleeping"]}
```



#### 5: Query for generated transactions:    
```shell
curl -X POST https://th-0.bagpipes.io/scenario/tx-H "Content-Type: application/json" \
-d '{"id":"YDqp6whUK"}'
```
output:  
```json  
{"mempool":[{"chain":"assetHub","amount":"0","txType":"Remark","Date":"2024-05-19T22:50:11.827281773Z","tx":"0x2404000714666c756666"},{"chain":"assetHub","amount":"1230000000000","txType":"xTransfer","Date":"2024-05-19T22:50:11.838491720Z","tx":"Could not generate transaction"}]}
```



## Python example: 
```python
import requests, time

base = "https://th-0.bagpipes.io"
scenario_id = "set scenario id here"
print("Starting job: ")
js = requests.post(base+"/job/start", json={"id": scenario_id})
# {'success': True, 'result': 'Job started'}
print("start job response:", js.json())
print("sleeping for 10 seconds.. ")
time.sleep(10)

## Query logs for our scenario
print("Quering logs for: ", scenario_id)
logs = requests.post(base+"/scenario/worker/logs", json={"id": scenario_id})

print("Logs returned: ", logs.text)

## Query for the transaction que 
txmempool = requests.post(base+"/scenario/tx", json={"id": scenario_id})
print("Getting transaction queue: ", txmempool.text)
```


## Mempool:  
After a worker has started, you can query the **/scenario/tx** path to get a list of the transactions that have been generated. Query the transaction queue and sign them locally. 


### Bring your own signer:    

Bagpipes is non-custodial, meaning we only generate the transactions for you, you have to sign it yourself. In this typescript example, we will query for the transactions, validate them then sign and broadcast them.  


```typescript
// fetch transaction list from threadbag
async function fetchTxMempool(scenarioId: string): Promise<MempoolItem[]> {
    try {
        const response: AxiosResponse<TxMempoolResponse> = await axios.post(`https://th-0.bagpipes.io/scenario/tx`, {
            id: scenarioId
        });
        return response.data.mempool;
    } catch (error) {
        console.error('Error fetching threadbag transaction mempool:', error);
        throw error;
    }
}

// take a hex encoded tx, sign it
async function string_tx_sign(tx_raw: string): Promise<SubmittableExtrinsic> {
    const api = await get_api(); // polkadot
  // convert the hex encoded transaction to a polkadot type
    const decodedTx = api.registry.createType('Extrinsic', tx_raw) as SubmittableExtrinsic;
    return decodedTx;//signedTx;
}

function get_account(){
    const senderPrivateKey = "";//change me
    const keyring = new Keyring({ type: 'sr25519' }); // substrate ss58 accountid32
	const account = keyring.addFromUri('add seed here');
    return account; 
}




async function main(){
  console.log(`fetching transactions for scenario id: `, scenario_id);

    const tx_list = await fetchTxMempool(scenario_id);
    const raw_tx = tx_list[0].tx; // take the first transaction in the list
    console.log(`Got response: `, tx_list);
    console.log(`Got hex encoded tx: `, raw_tx); // take the first tx as a test
    console.log(`decoding tx...`);
    // decode the xcm tx and validate args
    const l = await string_tx_sign(raw_tx);

    // decode the polkadot tx
    const decodedentry: any = l.toHuman();
    console.log(`tx human: `, l.toHuman());
    // access data like this
    const dest_paraid = decodedentry.method.args.dest.V3.interior.X1.Parachain;
    console.log(`Destination parachain: `, dest_paraid);
    console.log(`Destination account: `, decodedentry.method.args.beneficiary.V3.interior.X1.AccountId32.id);
    //lets verify that the transaction amount is correct
    const fun_amount = decodedentry.method.args.assets.V3[0].fun.Fungible;
    console.log(`Asset Amount: `, fun_amount);
    console.log(`verifying that its one dot`);
    assert.strictEqual(fun_amount, "10,000,000,000"); // one do
    // convert tx to object
 const decodedTx = await api.registry.createType('Extrinsic', raw_tx);
    // get an account and sign and broadcast tx:
    const sender = get_account();
   const tx_out =  await api.tx(decodedTx).signAndSend(sender);
    console.log('tx_out: ', tx_out);
}
```

Template repo:
https://github.com/XcmSend/threadbag-examples  


### Enterprise/dedicated threadbag endpoints:   
For dedicated threadbags endpoint, submit a github issue here:       
https://github.com/XcmSend/threadbag-examples/issues/new   
