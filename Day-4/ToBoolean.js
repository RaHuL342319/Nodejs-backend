/**
 * List of Falsy values:
 * null
 * undefined
 * +0
 * -0
 * NaN
 * '' or ""
 * false
 
except above valuse all the values in javascript will truthy values.
 */

console.log(!0);
/**
 * 0 -> falsy
 * ToBoolean(0) -> false
 * !0 -> true
 */

console.log(!(-4));
/**
 * -4 -> truthy
 * ToBoolean(-1) -> true
 * !(-4)-> false
 */

console.log(!({})); // false

/**
 * {} -> truthy
 * ToBoolean({}) -> true
 * ! ({}) -> false
 */

console.log(!console.log(0)); // true
/**
 * console.log(0) -> it returns  undefined
 * ToBoolean(undefined) -> false
 * ! (undefined) -> true
 */


