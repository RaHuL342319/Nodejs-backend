/**
 * Array<number>.map(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any): number[]
Calls a defined callback function on each element of an array, and returns an array that contains the results.

@param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */

const arr = [6, 1, 3, 4, 7, 8, 9];

// function double(x) {
//   return x * 2;
// }
// const output = arr.map(double);
// console.log(output);

const double = arr.map((value) => {
  return value * 2;
});
console.log(double);

const triple = arr.map((value) => {
  return value * 3;
});
console.log(triple);

const binaryArray = arr.map((value) => {
  return value.toString(2);
});
console.log(binaryArray);
