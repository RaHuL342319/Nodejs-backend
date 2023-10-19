console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("abc")); // false
console.log(Number.isNaN("123")); //false

// Number.isNaN() => this function won't do coercion like isNaN() function.