# Debug 

### Simple:  
-  [ ] Copy scenario id    
-  [ ] Post on Discord    
-  [ ] Wait for response    

### Advanced:     
Threadbag comes with tokio-console support, which is part of a giant async Rust debugging project, allowing you to view task execution in realtime in a top/htop style way.   

![](/img/debug_console.png)

-  [ ] Clone    
-  [ ] Change your local instance of Bagpipes UI to use localhost 
-  [ ] Compile with tokio-console support:   
```shell   
make build_unstable
``` 


