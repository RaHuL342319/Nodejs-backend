// Example 1
{
    var x = 10;  // It is global scope due to var.
    console.log(x);
}
console.log(x);

// Example 2
function fun(){
    console.log(y);   // undefined
    var y = 11;
    console.log(y);
}
fun()
// console.log(y); // It will not accessible because y is function scope.

// Example 3
if(true){
    var z = 100;   // global scope
}

if(false){
    var a = 200; // not reachable
}

console.log(z);  // 100
console.log(a);   // undefined