console.log("Rahul" + {"a": 10});
/**
 * "Rahul" is already a primitive
 * {"a": 10} is a object so,It call ToPrimitive without a hint
 * means hint -> number
 * it first call valueOf on {"a" : 10} -> and it returns same object
 * it call toString -> toString will return '[object Object]' which is a string i.e. primitive
 * "Rahul" + "[object Object]" => "Rahul[object Object]"
 * 
 */

console.log(8 - {"a" : 10});
/**
 * its - operator so, It will change both into number.
 * So 8 is already number,
 * {"a" : 10} is object so It will call ToPrimitive with hint number.
 * it first call valueOf on {"a" : 10} -> and it returns same object
 * it call toString -> toString will return '[object Object]' which is a string i.e. primitive
 * so it call ToNumber({"a" : 10}) => NaN
 * 8 - NaN => NaN
 */

let x = {"b": 10, valueOf(){return 2;}, toString(){return "custom";}}
console.log(x - 10);
/**
 * x is an object, we need to pass it to ToPrimitive with hint Number
 * it call valueOf -> it return 2; i.e. primitive
 * x becomes 2
 * 2 - 10 = -8
 */

console.log(x + "razz");
/**
 * x is an object, we need to pass it to ToPrimitive with hint Number
 * {"b": 10, valueOf(){return 2;}, toString(){return "custom";}} is object so It will call ToPrimitive with hint Number.
 * it call valueOf -> it return 2; i.e. primitive
 * x becomes 2
 * 2 + "razz" => "2razz"
 */