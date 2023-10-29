function fun(){
    console.log("Fun called");
    setTimeout(function exec(){
        console.log("Inside the 5sec timeout");
    },5000);
    setTimeout(function exec(){
        console.log("Inside 3s timeout");
    },3000);
}

fun();
for(let i = 0; i < 10000000000;i++){
    // some task
    // it will take more than 5 sec so first two timer will completed till last timer will start.
}
setTimeout(function last(){
    console.log("Last timeout of 7s");
},0);

/** output: 
Fun called
Inside 3s timeout
Inside the 5sec timeout
Last timeout of 7s
 */