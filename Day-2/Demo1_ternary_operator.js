/**
 *          Ternary Operator ?:
 *      (condition) ? true expression : false expression
 */

console.log((5>3)?"Five is greater than 3":"five is less than 3")



/**
 * Exponential operator : **
 */

console.log(2**3); // IT means 2 to the power 3 i.e. 8


/**
 *          Unary Operator
 *          ++, --
 * 
 *      ++x (pre increment)  : first increase by 1 then assign      
 *      --x(pre decrement)  : first decrease by 1 then assign
 * 
 *      x++(post increment): first assign then increse by 1
 *      x--(post decrement): first assign then decrese by 1
 */


x = 5;
y = ++x;  // y = 6 x =6
z = --x; // z = 5 x = 5
console.log(x,y,z) // 5 6 5


x = 5;
y = x++;  // y = 5 x =6
z = x--; // z = 6 x = 5
console.log(x,y,z) // 5 5 6