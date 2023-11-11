/*
In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after the completion of a specific task. 
Callbacks are a fundamental concept in JavaScript, especially in asynchronous programming, and they are commonly used to handle events, perform asynchronous operations, 
and manage the flow of control in the code.

*/

// Example 1: Simple Callback
function doSomethingAsync(callback) {
  setTimeout(function () {
    console.log("Task completed!");
    callback();
  }, 1000);
}

function onComplete() {
  console.log("Callback executed!");
}

doSomethingAsync(onComplete);


/*
In this example, doSomethingAsync is a function that simulates an asynchronous task using setTimeout. It takes a callback function (onComplete) as an argument.
Once the asynchronous task is complete, it invokes the provided callback.
*/


//Callbacks are commonly used in scenarios like handling asynchronous operations, event handling, and working with APIs. Here's another example using the fetch API:

// Example 2: Callback with Fetch API
function fetchData(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(null, data))
    .catch((error) => callback(error, null));
}

function handleData(error, data) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Data:", data);
  }
}

fetchData("https://jsonplaceholder.typicode.com/todos/1", handleData);
