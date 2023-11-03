

* console.log ==> internally using process.stdout

In files  --> console.log will be synchronous on windows and POSIX.

In TTYs(Terminal) --> console.log will be Async on windows , sync on POSIX.


console.log() is depends on system either it is synchronous and Asynchrounous.


* Major disadvantage of Callback is:
Callback hell :  callback inside callback ..... 

callback(
    callback(
        callback(
            callback(
                callback(

                )
            )
        )
    )
)

* Inversion of control : If there is some part of code whose control we are parsing
