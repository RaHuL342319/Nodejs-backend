function dummyPromise(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Timer's Promise");
        },10000)
    })
}

console.log("Start of the file");

setTimeout(function time1(){
    console.log("Timer 1 done");
    let y = dummyPromise();
    y.then(function promiseY(value){
        console.log("Whose Promise ?", value);
    })
},0);


for(let i = 0; i< 1000000000;i++ ){
    // something
}

let x = Promise.resolve("Rahul's Promise");
x.then(function processPromise(value){
    console.log("whose promise ?", value);
});

setTimeout(function timer2(){
    console.log("Timer 2 done")
},0);

console.log("End of the file");

/** OUTPUT:
Start of the file
End of the file
whose promise ? Rahul's Promise
Timer 1 done
Timer 2 done
Whose Promise ? Timer's Promise
 */