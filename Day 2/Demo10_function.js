/* To use a function, it must be defined or declared and then it can be invoked anywhere in the program.


A function declaration also called a function definition, consists of the function keyword, followed by:

Function name
A list of parameters to the function separated by commas and enclosed in parentheses, if any.
A set of JavaScript statements that define the function, also called a function body, enclosed in curly brackets {…}.

Q. How to write a function?

function functionName(parameter 1, parameter 2, ......){
    function body....
    ........
    .........
    return statement;
}

return statement is not mandatory, by default it return undefined if we won't write return statement.
return keyword returns an output out of the function and immediately stops the function.

*/
function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(10,5))