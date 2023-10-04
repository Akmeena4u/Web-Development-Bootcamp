/*Asynchronous operations in JavaScript are essential for handling tasks that may take some time to complete, such as responding to user interactions, 
making network requests, or dealing with timers like setTimeout. */

//#1-Event Listeners:
//Event listeners allow you to respond to user interactions (e.g., clicks, input, etc.) asynchronously. You attach event listeners to DOM elements, and
//when the specified event occurs, the associated callback function is executed.

const button = document.getElementById('myButton');

button.addEventListener('click', function () {
  console.log('Button clicked');
});



//#2-setTimeout:
//setTimeout is used to schedule a function to be executed after a specified delay in milliseconds. It's often used for creating delays or scheduling code to run in the future.
setTimeout(function () {
  console.log('This message will appear after 2 seconds.');
}, 2000);
