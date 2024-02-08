```
setTimeout(()=>{
    console.log("hello");
},5000)
```

```
CALL BACK FUNCTION
setInterval(()=>{
    console.log("it is call back function");
},2000)

```

- event completes(2000 ms completes) ,action is taken(function call)

process runs on thread
each process has process id

- single thread and asynchronous
- web api run async code(eg timeout will wait here)
- js runs in call stack

event loop -will check the stack if it is empty on it will take timeout from queue.
should reduce the synchronous code

- setTimeout is window object
