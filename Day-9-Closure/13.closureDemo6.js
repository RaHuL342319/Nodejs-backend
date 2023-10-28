function test(){
    for(var i = 0; i< 3; i++){
        setTimeout(function exec(){
            console.log(`i : ${i}`);
        },i*1000);
    }
}

test();
/**
 * bacause of var : it gives you function scope
 * output:
i : 3
i : 3
i : 3
 */