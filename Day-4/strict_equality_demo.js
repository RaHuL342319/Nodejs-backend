/**
 * Difference between == and === ?
 * 
 *    == -> only checks values
 *    === -> checks vslues as well as type.  Both the statements are wrong.
 * 
 * 
 * Both === and  == checks the types but difference is both of them do something different after checking the type.
 * 
 * so == does type checking and if types are same it calls ===.
 * 
 *  === checks types and if types are not not same returns false.
 * 
 *  Main difference is 
 *                  * Abstract equlaity (==) does coercion if types are not same.
 *                  * Strict equality (===) never does. 
 * 
 * 1) In JS NaN is the only primitive value not equal to itself.
 * 2) if both are same number then it will return true.
 * 3) 0 === -0 or -0 === 0 => true
 * 
 */
console.log(NaN === 23) // false

console.log(23 === NaN); // false

console.log(33 === 33); //true
console.log(33 === 34); //false

console.log(0 === -0); //true
console.log(-0 === 0); // true

console.log(undefined === undefined); // true

console.log(null === null); // true

console.log("rahul" === "rahul"); // true

console.log({} === {}); // false

let x = {};
console.log(x === x);  // true

console.log(Symbol('hi') === Symbol('hi')); // false

let y = Symbol('hi');
console.log(y === y);  // true