console.log(typeof 2);  // number
console.log(typeof 3.5); // number
console.log(typeof -0); // number
console.log(typeof NaN); // number

console.log(typeof null); // object
console.log(typeof undefined); // undefined

console.log(typeof "Rahul"); // string
console.log(typeof 'A');   // string

console.log(typeof true);  // boolean
console.log(typeof false);  // boolean 

console.log(typeof {name: "rahul"}); // object


console.log(typeof typeof 12); // string because typeof 12 return "number" then typeof "number" will return string
