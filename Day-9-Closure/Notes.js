/**
 * setTimeout()
 * setInterval()
 * In order to understand Closure, we need to understand these two functions first.
 * 
 * These Two functions are not by default given to us by JS.
 * 
 * setTimeout : It is a function that helps us to execute some tasks after a certain timer.
 *              for example: 
 *                      setTimeout(taskCallback, time_in_millisecond) : It returns unique id.
 *                      clearTimeout(ids_whatever_by_setTimeout)
 * 
 * setInterval : It is a function that helps us to execute some task again and again after a given interval.
 *                for example: 
 *                          setInterval(taskCallback, time_in_millisecond): It also return unique id.
 *                           clearInterval(id_whatever_by_setInterval)
 *                      
 * To understand these two functions we need to understand one more term i.e. Callbacks
 * 
 * Callbacks: A callback is a function that is passed to another function.
 * In maths, f(g(x)) here, g(x) is callback for f().
 * 
 * 
 *                                Closures
 * 
 *              Closure is when a function "remembers" its lexical scope
 *              even when the function is executed outside that lexical scope.
 * 
 * Q. if todo is completed it will be removed from callstack. how actually the variable store persist?? where are they??
 * --> 
 * 
 * 
 * 
 * 
 * 
 */

