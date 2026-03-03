// JavaScript Eventloop and Asynchrony

// Synchronous behaviour

// function first() {
//     console.log("First function start");
//     second();
//     console.log("First function end");
// }

// function second() {
//     console.log("Second function");
// }

// console.log("Program start");
// first();
// console.log("Program end");

// Asynchronous behaviour

// console.log("Start");

// setTimeout(function timeoutCallback() {
//     console.log("Timeout executed");
// }, 2000);

// function timeoutCallback() {
//     console.log("Timeout executed");
// }

// const timeoutCallback = function() {
//     console.log("Timeout executed");
// }

// const timeoutCallback = () => {
//     console.log("Timeout executed");
// }

// setTimeout(func, delay) {
//     delayFunc(delay)
//     func()
// }

// setTimeout(() => {
//     console.log("Timeout executed");
// }, 2000);

// console.log("End");

// functions with setTimeout
// function greet() {
//     console.log("Hello");
// }

// function delayedGreet() {
//     setTimeout(function () {
//         console.log("Delayed Hello");
//     }, 1000);
// }

// console.log("Start");

// greet();

// delayedGreet();

// console.log("End");

// More on Runtime
// function first() {
//     console.log("First start");

//     setTimeout(function () {
//         console.log("First timeout");
//     }, 0);

//     console.log("First end");
// }

// function second() {
//     console.log("Second function");
// }

// console.log("Program start");

// first();

// second();

// console.log("Program end");