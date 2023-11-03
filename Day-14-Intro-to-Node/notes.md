Q1. library vs Framework
--> 
Libraries are collections of pre-written code that can be used to perform specific tasks. They are typically smaller in scope and more focused than frameworks, and they can be used in a variety of different applications.

Frameworks, on the other hand, are more comprehensive sets of code that provide a structure for developing software applications. They typically include libraries, but they also provide additional features such as routing, authentication, and templating.



Q2. what is difference between Node and Browser?
--> 

Q.3 when __dirname is not accessible?
--> 

Q4. difference between Absolute and relative path?
--> 

Django is Framework.
Node is neither a framework nor language.

* Node is a runtime environment(we can say just like browser ) for JS. 

* IN 2009, Ryan Dahl created node. Before 2009, JS was running Inside only browser(like Chrome, Mozilla, Firefox), Js was only interact in Browser.

* Ryan Dahl created new runtime environment i.e. node some of features took it and Some of features gets neglected like(DOM,BOM).

* A lot of features added like operating system interaction(like filesystem) and we can node in terminal too.

features added to Node:
* File system
* Process
* Streams
* 

There is framework 
* electrons  =>to build destop applications
* ionic, React-native  => to build mobile apps.
* express, sails  =>  to create server(means we can do server-side-logic).

How to run Node program?
--> Just create a JS file(index.js) write everything inside that
   $ node index.js

* REPL -> Read Execute Print Loop


* Globals: accessible anywhere and provided by runtime (autoGlobals)
1. process : to access the process of system
2. __dirname : shows current directory.(this global is not always accessible.)
3. module : 



Module pattern of Nodejs:

module :
        1. commonjs  (.js or .cjs) -> importing using require() global
        2. ES module (.mjs) -> importing using import --> 1. default exports
                                                          2. named exports

There are two ways to use ES module :
1. by using .mjs extension in file
2. by creating package.json and writing { "type": "module"}

package: 
       It is a folder which contains a package.json file.

JSON - javascript object Notation
example : 
{
    "name": "Rahul",
    "company": "Infosys"
}

No package.json ==> .js -> commonjs
                    .mjs -> es

package.json => { "type":"module"}  => .js -> ES
                                       .cjs -> commonjs

package.json => { "type":"commonjs"}  => .js -> commonjs
                                       .mjs -> ES

there are two types of exports in ES module:
1. default Export
export default function1;


if you two default exports then It will override.
export default function1;
export default function2;

if you will import this then function2 will run only

2. named export
export function(){

}

Note: If you more than one function then you should use one default 
exports and others should be named exports.




    



