let arr = [1,2,3,4,5];
/**
 * arr.map(callbackFunction); 
 *  map: For all the elements of the given array, It passes the elements as an argument to the callback.
 *          if you will return then It will return as new array.
 */
let x = arr.map(function process(value,index){
    /**
     * value : value of array
     * index : index of array
     */
    // some task
    console.log(value,index)
    return value*value;
})

console.log(x);  [1,4,9,16,25]
console.log(arr); [1,2,3,4,5]