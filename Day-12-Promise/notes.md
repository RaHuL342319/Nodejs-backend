Promise : 

* Promises are special JS objects that are also considered readability enhances.
They get immediately return from a function setup to return a promise.

* It act as placeholder for the data we hope to get back from the some future tasks.

* we also attach the functionality we want to defer until the future task is done. and promise object automatically handles the execution of the functionality.

* so promises do two things: one inside JS and one Outside JS.
1) It signs the process required to run in the runtime and gives a placeholder in JS,
   which has a value property.



Q1. How to create a promise?
Q2. How to consume a Promise?
Q.3 what are the properties involved?

Q. How promises work behind the scene?
the promise object we create has 4 major properties
1) status
2) value
3) onFullfilment
4) onReject


what is the status?
-> status shows current promise status/state ---> 
            1) pending  :  still going on
            2) fulfilled   : success
            3) rejected    : error

what is value?
when status of the promise is pending, this value property is undefined,
the moment promise is resolved, the value property is updated from undefined to then new value(this value we can consider as the return/resolve value),
so the value property act like a placeholder till the time promise finishes.

                        |-------------> pending                              undefined
                        |
promise ==> status ==>  |-------------> resolve/fulfilled  ===> value ==>    returned/resolved data
                        |
                        |--------------> rejected                            Error data




what is onfulfilledment?
--> onfulfillment => this is an array, which contains functions that we attach to our promise object(to a promise object we can attach some function using .then() method).
 
when the value property is updated from undefined to the new value, JS gives chance to these attached functions one by one with the value property as their  argument(if there is no piece of code in the callStack and global code log).



Q. how to consume a promise?
 
 Promise takes one parameter that is callback function and that function takes two parameter resolve and reject.
return new Promise(
    function(resolve,reject){
        
    }
)

* To create a promise call the Promise constructor
* the promise constructor takes a callbakc as argumnet
* the callbakc passed inside the constructor, expects 2 arguments resolve and reject.
* then inside callback function write your logic
* if you want to return something on success, then call resolve() with whatever value you want to return .


when do we consider a promise fulfilled?
--> if we call resolve(), we consider it fulfilled.

--> we consider it rejected if we call reject()


consuming a promise:
 the promise consumption is main beauty, using which we will aviod inversion of control.
 wheneverwe call a function, returning a promise, 
 we will get a promise object which is like any JS object that wee can store in a variable.



 we can use .then() function on the promise object , to bind the function we want execute once we fulfill a promise.

 the .then() function takes function as the argument that we want to execute after promise fulfills and the argumnet function takes value property as parameter.


 Microtask queue: It is for Promise callback.
 Event queue : It is for Normal callbacks.
 Microtask is more priority than Event queue.
 




