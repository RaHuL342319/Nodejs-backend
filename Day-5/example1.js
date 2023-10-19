let a = 5;
if(a){  // ToBoolean(5) = true
    console.log("Hi there");
}
if(a == true){ // 5 == ToNumber(true) i.e. 5 == 1 is false
    console.log("By bye")
}