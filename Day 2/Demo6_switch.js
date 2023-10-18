/*
The Switch statement is used to select and evaluate one of the many blocks of code. 
SYNTAX:
switch (expression) {
    case value1: code block;
                 break;
    case value2: code block;
                 break;
    case valueN: code block;
                 break;
    default: code block;              
} 


*/

var perfRating = 15; 
switch (perfRating) { 
    case 5: 
        console.log("Very Poor"); 
        break; 
    case 4: 
        console.log("Needs Improvement"); 
        break; 
    case 3: 
        console.log("Met Expectations"); 
        break; 
    case 2: 
        console.log("Commendable"); 
        break; 
    case 1: 
        console.log("Outstanding"); 
        break; 
    default: 
        console.log("Sorry!! Invalid Rating."); 
} 
  /*
   OUTPUT: 
   Sorry!! Invalid Rating. 
  */
