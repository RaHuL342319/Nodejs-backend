/*
Arrays in javascript:

*/
// Declaration of array in js
let arr = [1, 2, 3, 4, 5];
console.log("Array is", arr);

// length(property): Gets the length of the array.
console.log("Length of array is", arr.length);

// Accessing array element one by one
for (let i = 0; i < arr.length; i++) {
  console.log(i + 1, "th element of array is", arr[i]);
}

// push() :Appends new elements to the end of an array, and returns the new length of the array.
console.log("Array is:", arr);
arr.push(12);
console.log("After pushing 12 into array: ", arr);

// pop(): Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log("Before Array is:", arr);
arr.pop();
console.log(" After Array is:", arr);
// array is empty
let emptyArr = [];
console.log(emptyArr.pop()); // undefinded

// shift() : Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log("Before shifting Array is:", arr);
arr.shift();
console.log("After shifting Array is:", arr);

// unshift(): Inserts new elements at the start of an array, and returns the new length of the array.
console.log("Before unshifting Array is:", arr);
arr.unshift(45);
console.log("After unshifting Array is:", arr);

// concat() :  Combines two or more arrays. This method returns a new array without modifying any existing arrays.

let arr1 = [11, 22, 33, 44, 55];
let arr2 = [66, 77, 88, 99];
console.log("After concatenation: ", arr1.concat(arr2));

// second way of writing
const finalArray = arr1.concat(arr2);
console.log(finalArray);

// Iterate over the array/ Traverse  by forEach
arr1.forEach((num) => {
  console.log(num);
});
