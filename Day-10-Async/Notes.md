There are Four Pillars of JS
1. Coercion and Types , Hoisting
2. Scopes
3. Async
4. Objects

Q1.How JS handles Async Operations?

* Javscript is a single threaded language.
* Javascript by default only  supports synchronous code execution.

console.log("Start");

for(let i = 0; i<1000000000; i++){
    // Some task
}
console.log("Task done");
console.log("End");

output: 
Start
Task done
End

Above code is running line by line, if for loop is taking time so it waits for that much time and then run next line.

Note: the above property of sync code execution only works for operations natively known to javascript. like for, if-else, while etc.

javascript Runtime:

* Intially, It was made run inside browser only.
* Browser acted as Runtime.
* Browser gaves so many functions like setTimeout, setInterval, DOM Apis etc. many more. these are not natively known to js.

* In 2009, Ryan Dahl created node, he tried to run JS to run in new runtime(i.e. Node) outside of browser.

* Using node, We can use so may features of OS. like file system, process and many more.
* Node is js runtime.
* Node is using same engine as browser uses(i.e. V8 engine.).
* A lots of features are coming from Node, that is not native to JS, so these features are not bound to follow the synchronous way.

* Runtime also provides functionalities that can be leverage by JS. but how js handled this?

* there is callstack, event loop, event queue in JS.







