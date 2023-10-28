function fun(){
    let name = "Rahul";
    function callback(params){
        console.log(college);
        console.log(name);
    }
    return callback;
}

let x = fun();
x();
var college = "iit delhi";
x();