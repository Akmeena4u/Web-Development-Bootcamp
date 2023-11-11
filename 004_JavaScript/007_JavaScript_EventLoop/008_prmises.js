/*
Promises are a JavaScript feature introduced to handle asynchronous operations more effectively. They provide a cleaner and more structured way to work with asynchronous code compared to traditional callback functions. 

Basics of Promises:

Promise States:
Pending: The initial state; the promise is neither fulfilled nor rejected.
Fulfilled/resolved: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure.

*/

//creating promises
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  // If successful, call resolve with the result
  // If an error occurs, call reject with the reason
});

//chaining in promises

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
});

myPromise
  .then((result) => {
    // Handle fulfillment
    return anotherPromise; // Return a new promise for chaining
  })
  .then((result) => {
    // Handle the result of the second promise
  })
  .catch((reason) => {
    // Handle any rejection in the chain
  });



//Promise.all and Promise.race: -- Promise.all([promise1, promise2, ...]):
//Combines multiple promises into a single promise that fulfills with an array of the fulfilled values.
const promises = [promise1, promise2, promise3];
Promise.all(promises)
  .then((results) => {
    // Handle an array of results
  })
  .catch((reason) => {
    // Handle any rejection
  });
