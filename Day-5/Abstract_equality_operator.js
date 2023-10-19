/**
 * It also checks the types 
 *          if types are same: follow === statement.
 *          else:
 *               null == undefined => true  or undefined == null then true.
 *               if x is number and y is string then return x == ToNumber(y)
 *               if x is String and y is Number then return ToNumber(x) == y
 *               if x is boolean  then return ToNumber(x) == y
 *               if y is boolean then return x == ToNumber(y)
 *               if x is either string, number or symbol and y is object then x == ToPrimitive(y)
 *          else: return false
 */
console.log(null == undefined); // true
console.log(undefined == null); // true

console.log(10 == '10'); // ToNumber('10') => 10 so 10 == 10 is true
console.log(10 == '12'); // ToNumber('12') => 12 so 10 == 12 is false

console.log('99' == 99); // ToNumber('99') => 99 => 99 == 99 is true

console.log(false == 1); // ToNumber(false) => 0 => 0 == 1 is false
console.log(1 == true); // ToNumber(true) => 1 => 1 == 1 is true

console.log("rahul" == {name: "rahul"}); // false
console.log("rahul" == {toString(){return "rahul"}}) // ToPrimitive({toString(){return "rahul"}}) => "rahul" => "rahul" == "rahul" is true 

console.log(10 == "abc"); // ToNumber("abc") => NaN then 10 == NaN is false

console.log(10 == {valueOf(){ return 10;}}) //  ToPrimitive({valueOf(){ return 10;}}) => 10 so 10 == 10 is true





