// function name1(){
//     console.log(name);
// }
// name1();     // undefined
// var name = "Raj";
// name1();    // Raj


function a(name){
    return function b(){
        console.log(name);
    }
}

let x = a("rahul");
for(let i = 0; i < 1000000000;i++){
    // do something
}     /**
It is time consuming task but x is already there function x is already ran before time consuming task because of closure */

console.log(x);
x();