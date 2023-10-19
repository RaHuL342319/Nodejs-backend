console.log(12 - 4); // both od them are already a number, so we just substract

console.log(undefined - 3);
/**
 * undefined is not a valid number, to we make it ToNumber abstract operation
 * ToNumber(undefined) -> NaN
 * NaN - 3 -> and for any number when you do any operation with NaN it results NaN
 * NaN - 3 -> NaN
 */

console.log(null - 5);
/**
 * null is not a valid number, to we make it ToNumber abstract operation
 * ToNumber(null) -> 0
 * 0 - 5 -> -5
 */

console.log("132" - 10);
/**
 * "132" is not a valid number, to we make it ToNumber abstract operation
 * ToNumber("132") -> 132
 * 132 - 10 -> 122
 */

console.log('12fd' - 10)
/**
 * '12fd' is not a valid number, to we make it ToNumber abstract operation
 * ToNumber('12fd') -> NaN
 * NaN - 10 -> NaN
 */

console.log(4 - true);
/**
 *  true is a boolean, so we make it undergo ToNumber abstract Operation
 * ToNumber(true) -> 1
 * 4 - 1 -> 3
 */

console.log("0xf" - 1);
/**
 *  "0xf", is a string, but in the starting it is 0x which denotes start of hexadecimal
 *  so if we can convert tis string to a valid hexadecimal, abstract operation
 * ToNumber("0xf") -> 15
 * 15 - 1 -> 14
 */

console.log("0xz" - 1);
/**
 *  "0xz", is a string, but in the starting it is 0x which denotes start of hexadecimal
 *  so if we can convert tis string to a valid hexadecimal, abstract operation
 * ToNumber("0xz") -> NaN
 * NaN - 1 -> NaN
 */

console.log("0o11" - 1);
/**
 *  "0o11", is a string, but in the starting it is 0x which denotes start of octal
 *  so if we can convert tis string to a valid octal, abstract operation
 * ToNumber("0o11") -> 9
 * 9 - 1 -> 8
 */

