/**
 * filter(predicate: (value, index, array: number[]) => value is number, thisArg?: any): number[]

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.


Returns the elements of an array that meet the condition specified in a callback function.
 */
const arr = [6, 1, 3, 4, 7, 8, 9];

const oddArray = arr.filter((value) => {
  return value % 2;
});

console.log(oddArray);

const greaterThan3 = arr.filter((value) => {
  return value > 3;
});
console.log(greaterThan3);
