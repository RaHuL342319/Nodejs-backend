const arr = [6, 1, 3, 4, 7, 8, 9];

// sum of element in array 2. max value in array

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("Sum of array is ", sum);

// same example by reduce function

const output = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);
console.log(output);

// max value in array
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) max = arr[i];
}
console.log("Max in array: ", max);

// by reduce function
const maxInArray = arr.reduce((acc, curr) => {
  if (acc < curr) acc = curr;
  return acc;
});
console.log(maxInArray);
