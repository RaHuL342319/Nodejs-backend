//var name = "Rahul";
let name = "Sanket";
function greet(){
    console.log("greetings !",name);
    let x = 10;                     // Function scope
    function test(){                // Function Scope
        console.log("testing!", x); 
    }
    console.log(x);
    test();
}

function fun(){
    console.log("have fun !", name);
}

// test() : It will give you refernce error
greet();
fun();