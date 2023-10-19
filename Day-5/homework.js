function checkDirection(val){
    // tell us whether, val is a negative value or a positive value.
    // if val is negative return 'left' then if val is positive return 'right';
    if(val == 0){
        return "center";
    }else if(val > 0){
        return("Right");
    }else{
        return "Left";
    }
}

console.log(checkDirection(0))
console.log(checkDirection(3));
console.log(checkDirection(-1))