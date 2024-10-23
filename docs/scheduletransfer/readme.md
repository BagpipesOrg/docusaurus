# Schedule an XCM asset transfer   

> Selecting the ScheduleTransfer function allows you to schedule a XCM asset transfer in the near future.  


By utilizing Turing Network's AutomationTime Pallet, we have enabled scheduled XCM asset transfers. Allowing you to schedule a transaction in the near future. 

We support the following XCM schedule directions:

### Turing > Moonriver:    
![](/img/tur2ms.png)     
    


Video demo:  
https://drive.google.com/file/d/1E79LutpUKQPCtGNSbO3ZC1dE_iWhNuwG/view?usp=sharing  


Template Link:   
https://app.xcmsend.com/#/create/?diagramData=JoPtE8CaT



### Turing > MangataX:   
![](/img/tur2mas.png)      
    

Video demo:   
https://drive.google.com/file/d/1f2VzqyITNPFb3ZKzwhnGzfoi-rdCR8Is/view?usp=sharing



Template Link:    
https://app.xcmsend.com/#/create/?diagramData=1Ti7jn5lM 




### Debug tips:

 Check the latest automateTime on-chain executions here:
 https://turing.subscan.io/event?page=1&time_dimension=date&module=automationtime   


Once you have broadcasted your transaction, you can view the transaction on the subscan block explorer, check the task id of the scheduled job:

![](/img/turing_task_id.png)     

Example transaction:
https://turing.subscan.io/extrinsic/5907339-2


Then we want to head over to the automationTime subscan execution log here:
 https://turing.subscan.io/event?page=1&time_dimension=date&module=automationtime  

 Our task should be executed under the **automationtime (TaskExecuted)** Action:
 ![](/img/turtask.png)



Query the status of the task:
![](/img/checkturtask.png)


You can check the timestamp to human readable datetime using:
https://www.unixtimestamp.com/

