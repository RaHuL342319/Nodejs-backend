function a(name){
    return function b(){
        console.log(name);
    }
}

let x = a("Sanket");
console.log(x);
x();
