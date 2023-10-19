let a =  "10";
let b = "abc";
let c ="sanket";
let d = 10 - c;

console.log(a, b, c, d)
console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));

// anything which is not coercible to number 
// i.e. string is not NaN but when we convert "abc" to a number it becomes NaN and hence isNaN returns true.

console.log((typeof(d) == 'number' && isNaN(d))?"NaN value":"not NaN value");

let x = {valueOf() { return 10;}}
console.log(x);
console.log((typeof(x) == 'number' && isNaN(x))?"NaN value":"not NaN value");