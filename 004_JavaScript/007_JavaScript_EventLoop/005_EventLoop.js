/*The event loop is a crucial part of JavaScript's concurrency model, responsible for handling asynchronous operations and ensuring that your code remains
responsive to user interactions and other asynchronous events. 
Here's a simplified explanation of how the event loop works in JavaScript:

Call stack:- it keep track of the currently executing functions and their contexts.
Browser-when event listener entry comes into call stack at that time it gives cotrol to the browser and remove entry from call stack
        after specified evnet wait or event occurence it gives this to Event queue
event queue:-  event queue executed this function when call stack  becomes empty

these three function works into loop 
*/

//example- eventloop in setTimeout()
console.log('Start');

setTimeout(function () {
  console.log('Timeout callback');
}, 1000);

console.log('End');


//example- eventloop in eventliseners
console.log('Start');

const button = document.getElementById('myButton');

button.addEventListener('click', function () {
  console.log('Button clicked');
});

console.log('End');






