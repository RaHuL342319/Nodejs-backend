// Example 1
{
    let x = 10;    // block scope so only acessible inside the block
    console.log(x);  // 10
}

// console.log(x);  // It won't run,  it will give you an error.

// Example 2
function fun(){
    // console.log(y);   // it will give you an error  but in case var it was giving undefined.
    let y = 9;         // block scope: once you declare variable then you can access inside block.
                        // but in case of var: It is accessible before declaring the variable.
                        // let doesn't allow re-declaration.
    console.log(y);
}
fun();
// console.log(y);


// Example 3
// console.log(z);
let z = 23;
console.log(z);