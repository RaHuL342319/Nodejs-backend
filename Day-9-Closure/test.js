console.log("Start");
setTimeout(function(){
    console.log("Hey")
}, 0);
console.log("End");
/**
Start
End
Hey
 */
// Even if timer is 0ms it is printing after both the console statements.
// This is happening because Asynchronous nature of Javascript.