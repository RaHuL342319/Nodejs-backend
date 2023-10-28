function fun(){
    console.log("fun called");
}

function gun(fn){
     console.log("inside fun");
     fn();
     console.log("leaving gun!")
}

gun(function(){
    console.log("new function called");
})

gun(fun);