console.log("Start")
setTimeout(function exec(){
    console.log("Task done");
},7000);
console.log("End");

/**
 * Here output will be:
 * Start
 * End
 * Task done   (afer 7000ms)
 */
