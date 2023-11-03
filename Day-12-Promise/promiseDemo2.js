function demo2(){
    return new Promise(function callback(resolve,reject){
        console.log("Hi");
        setTimeout(function exec(){
            console.log("task done");
            resolve("Done successfully")

        },5000);
        console.log("Bye");
    }
)}

demo2();