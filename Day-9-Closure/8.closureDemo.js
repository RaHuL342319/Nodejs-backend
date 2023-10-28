function todo(task){
    console.log("Starting todo");
    setTimeout(function fun(){
        console.log("completed", task);
    },2000)
    task = "Exercises";
    console.log("Ending of todo");
}


console.log("Starting");
todo("Assignments");
console.log("Ending");