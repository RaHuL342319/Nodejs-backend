let id = setInterval(function(){
    console.log("Task done");
},2000);

setTimeout(function(){
    console.log("Stop setInterval");
    clearInterval(id);  // clearing the interval of setInterval
},10000);