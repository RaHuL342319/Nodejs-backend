console.log("Rahul" + "Kumar");

/**
 * Both of them are already a string,
 * so ToPrimitive conversion will also be a string
 * and we concatenate them.
 * "Rahul" + "Kumar" => "RahulKumar"
 */

console.log(undefined + "node");
/** 
 * undefined is not a string  so it will undergo through abstract operation 
 * ToString(undefined) => "undefined"
 * "undefined" + "node" => "undefinednode"
 */

console.log("5" + null);
/**
 * one of them is string, so it will converts both into string
 * ToString(null) => "null"
 * "5" + "null" => "5null"
 */

console.log("Rahul" + true); // "Rahultrue"

console.log("rahul" + [null]); // "rahul"



