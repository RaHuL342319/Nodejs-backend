var x = function gun() {
  console.log("gun");
};

console.log(x);
x();
//gun(); // It will throw an ReferenceError because gun is inside scope of x.
// so you can not call gun directly global scope.

console.log(typeof x)   // function 


// x() // throw error because it it is not declared 
// var x = function gun() {
//   console.log("gun");
// };


