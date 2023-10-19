//                           Boxing 
//            It is a Phenomenon in JS where It tries to convert primitive into objects.

//            Boxing can be done by Manual and Automatic.
// e.g. 
// console.log(9.toString()); error because js doesn't work directly

console.log((9).toString());
console.log(9..toString());

let x = 9;   // automatic boxing done by js
console.log(x.toString());

console.log(Number(9).toString());
