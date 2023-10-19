gun();       // print Shoot 
/**
 * this will run because of co-hoisting
 * this happens because JS works as 
 * 1) In parsing phase the gun() is declared at global scope
 * 2) in execution phase, gun() will call gun function and it is already present inside global scobe so It wil perfectely run.
 */
function gun(){
    console.log("Shoot");
}


// Hoisting is a direct consequence of lexical pasrsing that happens in JS, 
// due to which we are able to access some function and variables before declare them. 
// which gives us a notion that they are moved up in the file.