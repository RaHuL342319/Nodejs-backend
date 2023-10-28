function test(){
    for(let i = 0; i< 3; i++){
        setTimeout(function exec(){
            console.log(`i : ${i}`);
        },i*1000);
    }
}

test();
/**
 * bacause of let: it gives you block scope, so for every block it stores the values like:
 *  for timer 0s ==> i = 0
 *  for timer 1s ==> i = 1
 *  for timer 2s ==> i = 2
 * output:
i : 0
i : 1
i : 2
 */

// same version of code like above
function test(){
    for(var i = 0; i< 3; i++){
        let j = 0;
        setTimeout(function exec(){
            console.log(`j : ${j}`);
        },i*1000);
    }
}

test();