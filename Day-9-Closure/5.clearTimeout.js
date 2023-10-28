let id1 = setTimeout(function execute(){
    console.log("task 1 completed");
},10000)

let id2 = setTimeout(function execute(){
    console.log("task 2 completed");
    clearTimeout(id1);
},5000);