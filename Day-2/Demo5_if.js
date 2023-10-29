/* 
There are different flavors of if-else statement: 

1. Simple 'if' statement 
2. if -else  
3. if–else–if ladder 
*/

// 1. Simple 'if' statement
let num1 = 12; 
if (num1 % 2 == 0) { 
    console.log("It is an even number!!"); // OUTPUT: It is an even number!! Because 12%2 evaluates to true 
} 

// 2. if - else 
let num2 = 1; 
if (num2 % 2 == 0) { 
    console.log("It is an even number!!"); 
} 
else{ 
    console.log("It is an odd number!!");      
} 
//OUTPUT: It is an odd number!! Because in if 1%2 evaluates to false and moves to else condition 


// 3. if-else-if ladder
let marks = 76;
if (marks >= 75) {
	console.log("Very Good");
}
else if (marks < 85 && marks >= 50) {
	console.log("Good");
}
else {
	console.log("Needs Improvement");
}
// OUTPUT: Needs Improvement, Because the value of marks is 46 which doesn't satisfy the first two condition checks. 
