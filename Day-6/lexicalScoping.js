// Example 1
var teacher = "sanket";   // global scope

function fun(){
    var teacher = "Pulkit"; // function scope
    console.log(teacher);  // It will search first in function scope it it is available then it will access it
}

fun();  // Pulkit
console.log(teacher);  // It will search in global scope first : sanket


// Example 2
var teacher = "sanket";   // global scope

function fun(){
    var teacher = "Pulkit"; // function scope
    teachingAssistant = "vaibhav"; /**
    1) If teachingAssistant is not declare outside. --> Autoglobals : In Js if we keep on searching scope of variable
                                                                     in outer scope and nowhere found it, we automatically considers 
                                                                    it in global scope, this happens during execution phase.
                                                                    * It will be accessible below its declarartion.
                                                                    2) If teachingAssistant is declare outside.     --> then it will assign that scope only.
    
    */
    console.log(teacher);  // It will search first in function scope it it is available then it will access it.
    console.log(teachingAssistant); // vaibhav 
}

fun();  // Pulkit
console.log(teacher);  // It will search in global scope first : sanket
console.log(teachingAssistant)  // vaibhav 



// Example 3
var teacher = "sanket";   // global scope

function fun(){
    var teacher = "Pulkit"; // function scope
    teachingAssistant = "vaibhav"; /**
    1) If teachingAssistant is not declare outside. --> Autoglobals : In Js if we keep on searching scope of variable
                                                                     in outer scope and nowhere found it, we automatically considers 
                                                                    it in global scope, this happens during execution phase.
    2) If teachingAssistant is declare outside.     --> then it will assign that scope only.
    
    */
    console.log(teacher);  // It will search first in function scope it it is available then it will access it.
    console.log(teachingAssistant); // vaibhav 
}


console.log(teacher);  // It will search in global scope first : sanket
console.log(teachingAssistant)  //It will throw an error because Autoglobals is done on time of 
                                //excution if fun() will run then it will declare as global scope otherwise it won't so it will throw refernceError
fun();  // Pulkit




// Example 4
var teacher = "sanket";   // global scope

function fun(){
    console.log(subject);   // undefined because it will resolve at parsing phase
    var teacher = "Pulkit"; // function scope
    teachingAssistant = "vaibhav"; /**
    1) If teachingAssistant is not declare outside. --> Autoglobals : In Js if we keep on searching scope of variable
                                                                     in outer scope and nowhere found it, we automatically considers 
                                                                    it in global scope, this happens during execution phase.
    2) If teachingAssistant is declare outside.     --> then it will assign that scope only.
    
    */
   var subject = "maths"
    console.log(teacher);  // It will search first in function scope it it is available then it will access it.
    console.log(teachingAssistant); // vaibhav 
}


console.log(teacher);  // It will search in global scope first : sanket
console.log(teachingAssistant)  //It will throw an error because Autoglobals is done on time of 
                                //excution if fun() will run then it will declare as global scope otherwise it won't so it will throw refernceError
fun();  // Pulkit


// formal declaration is variable which created by using let, var,const or setting up a function.

// JS ==> pasing phase( do scope resolution by formal declaration) => execution phase
