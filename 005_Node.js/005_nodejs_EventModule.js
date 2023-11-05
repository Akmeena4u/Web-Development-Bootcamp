/*

The core of Node.js's event-driven architecture is the EventEmitter, which is a core module that provides an event handling mechanism. Events are used to handle various asynchronous operations, such as user interactions, I/O operations, and more.

EventEmitter:
The events module in Node.js provides the EventEmitter class, which is the foundation for working with events. You can use it to create custom event emitters and listeners.

*/




const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor!');
  setTimeout(() => {
      console.log('Please turn off the motor! Its a gentle reminder');
  }, 3000);
});

console.log("The script is running")
myEmitter.emit('WaterFull');
console.log("The script is still running")
myEmitter.emit('WaterFull');
