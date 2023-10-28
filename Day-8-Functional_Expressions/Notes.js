/**
 *              Function Expressions
 *      
 *  if function doesn't start with function keyword that is function expressions.
 * example: 
 *          function fun(){
 *              console.log("hi Fun");
 *            }    this is not function expressions.
 * 
 *      var gun = function(){
 *              console.log("gun functions")
 *          }
 * 
 *      ( function(){})  IIFE(Immediately Invoke Function expression)
 * 
 * 
 *  * In JS, we can pass functions as an argumnet to another function.
 * 
 * 
 * Function Expressions are of two types:
 * 1. Anonymous Function Expression
 * 2. Named Function Expression
 * 
 * var x = function(){
 * //statements
 * }
 * 
 * 
 * gun(
 * function(){
 * //statements
 * })                         both are the anonymous function expressions.
 * 
 * 
 * Anonymous functions are hard to debug.
 * Code readability will be hard.
 * 
 * 
 * Scope of function Expressions:
 * 
 * function fun(){
 * }
 * var x = function gun(){ // function gun is inside the scope of x.
 * }
 * 
 * 
 * 
 * 
 */