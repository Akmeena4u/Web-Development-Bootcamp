

# Callback Functions in JavaScript

In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after the completion of a specific task. Callbacks are a fundamental concept in JavaScript, especially in asynchronous programming, and they are commonly used to handle events, perform asynchronous operations, and manage the flow of control in the code.

## Example 1: Simple Callback

```javascript
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
```

In this example, `doSomethingAsync` is a function that simulates an asynchronous task using `setTimeout`. It takes a callback function (`onComplete`) as an argument. Once the asynchronous task is complete, it invokes the provided callback.

## Example 2: Callback with Fetch API

```javascript
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
```

In this example, `fetchData` is a function that uses the Fetch API to make an asynchronous request. It takes a URL and a callback function (`handleData`). The callback is executed after fetching the data, handling both success and error cases.

Callbacks are commonly used in scenarios like handling asynchronous operations, event handling, and working with APIs. They provide a way to manage the asynchronous flow of code and handle the results or errors once a task is completed.
```
