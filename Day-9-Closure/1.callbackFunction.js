function fun(x, fn){   // taking callback as argumnet
     /* x -> number
     * fn -> callback function
     */

    // some logic
    for(let i = 0; i< x; i++){
        console.log(i)
    }

    fn(); // calling the calback function passed
    // some more logic
}

fun(10,function log(){      // function log is callback function
    console.log("Custom Logger")
})

let g = function(){
    console.log("inside g")
}
fun(12,g);


function gun(){
    console.log("Inside gun");
}
fun(11,gun);