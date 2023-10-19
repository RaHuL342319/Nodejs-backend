/**
 * Q. What do we mean by the word Scope?
 * In Simple words, Scope is simply where to look for things.
 * 
 * Q. In Programming, what are we looking for?
 * we are looking for variables and functions.
 * 
 * there are 3 types of Scopes in JS?
 * 1. Global Scope
 * 2. Function Scope
 * 3. Block Scope
 * 
 * Global Scope:
 *              If a variable is present in a global scope, Then it is accessible everywhere in the js file.
 * 
 *      Q.How do we define a varible in global Scope?
 *      there are many ways:
 *      1. if you declare a variable outside the function or block.
 * 
 * 
 * Function Scope:
 *          In a funtion, the visibility of a variavle/function is just inside the outer function.
 * 
 *          e.g. 
 *              function fun(){
 *                  var x = 10;  // this is accessible inside this function only.
 *                               // It is locally availble to this function
 *              }
 * 
 * Block Scope:
 *          In JS, we can use a pair of curly braces to declare a block.
 * 
 *             {
 *              statements...
 *              ...
 *              }
 *          Now, If a variable/function is only accessible/visible inside a block then
 *          It will be having block scope.
 * e.g. if block, while block, for block, raw block.
 * 
 * 
 * 
 *              let, var, const
 * 
 * var -> whenever we use a var anywhere inside a function, the variable gets function scope.
 *          if we use it outside a function, no matter if it is enclosed in a block or not, it will give the variable gloabal scope.
 * 
 *  let -> 
 *   * Whenever we intialize a variable with let, It always gets the scope of enclosing BLOCK.
 *      
 *   * if we declare, let outside any block, then it doesn't get complete Global Scope.   
 *      
 *   * let doesn't allow re-declaration. but var does allow.
 *   * if you intialize the variable with let outside any block, then also it will not become 
 *      accessible completely in the global scope, but if you do with var, It will be.
 * 
 * Const -> 
 *     * const are block-scoped(same as let). Only differnce is it doesn't reassignment.
 * 
 *      let x = 10;
 *      console.log(x); // 10
 *      x = 34;
 *      console.log(x); // 34
 * 
 *      const y = 10;
 *      console.log(y);
 *      y = 23;  // you can't do this with const.
 * 
 * How JavaScript parse the code?
 * --> So we kow that jS is not interpreted, it definitely is hybrid i.e. compiled + interpreted.
 *      So, whenever we try to execute a jS code, JS first parses the whole code , in this parsing phase it assigns scopes to variables/ functions.
 *      once done, it reads the code and excutes it.
 *   Every variable in your code will be used in one of the following ways:
 *  1) either it will be getting  variable assigned i.e. it is used as a target. x =10;
 *  2) or it will be used to reterive a vlue i.e.- it will be used as source. y = 10 + x
 * 
 * what JS does is, It will start the parsing phase. Outtside every thing it maintains Global Scope,
 * but the moment it goes inside a function, it starts maintaining scope of that function also.
 * 
 *
 * 
 * Q.  undefined vs undeclared:
 * undefiined is a variable state when the  scopes already know about it but in the execution phase we have not allocated it a value.
 * 
 * undeclared: it is a variable stae when we never formally declared a variable  and before assigning it a value so that it has chance to become autoglobals, we try to use it.
 *
 * 
 * 
 */