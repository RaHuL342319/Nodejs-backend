function process(){
    console.log("Start");
    setTimeout(function exec(){          
        /* It will be run by runtime if timer is done then 
        It will go to event queue then whenever JS natively
         task is done then Event loop will take one by one 
         and put into callstack then it will run. */
        console.log("Executed some task-1");
    },5000);

    setTimeout(function exec(){          
        /* It will be run by runtime if timer is done then 
        It will go to event queue then whenever JS natively
         task is done then Event loop will take one by one 
         and put into callstack then it will run. */
        console.log("Executed some task-2");
    },2000);
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
Executed some task-2
Executed some task-1
 */

/*
Timer of second task is 2sec and Timer for first task is 5sec so 2nd sec will go First into event queue so It will run first. 
*/