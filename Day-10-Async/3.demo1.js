function process(){
    console.log("Start");
    setTimeout(function exec(){          
        /* It will be run by runtime if timer is done then 
        It will go to event queue then whenever JS natively
         task is done then Event loop will take one by one 
         and put into callstack then it will run. */
        console.log("Executed some task");
    },5000);
    for(let i = 0; i< 10000000000;i++){
        // some task
    }
        console.log("End");

}

process();
console.log("TATA");

/* OUTPUT:
Start
End
TATA
Executed some task
 */