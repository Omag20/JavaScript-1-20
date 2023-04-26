console.log(1)
function name () {
    console.log(2)
}
setTimeout(name, 0);
console.log(3)

// --------------------------------------------

$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
});
console.log("Hi!");
setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");

// ------------------------------------------------

function ragister () {
    setTimeout(() => {
        console.log("ragister")
    }, 2000);
    console.log("ragister done")
}
ragister();
console.log("ragister end")

/*

(start debugging the code into sync and async js)
 ----------------                                   
|                |
|   call stack   |   -------------> (async js)
|                |
 ----------------
                                   ----------------                                   
        ^                         |                |
        |                         |     web api    |  (wait until the given time over)
        |                         |                |
                                   ----------------             
  ----------------    <---------
|                 |
|  callback queue |    (push the code to callback as soon as calback)
|                 |
 -----------------

 */