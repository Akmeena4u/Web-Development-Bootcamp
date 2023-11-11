/*
The asynchronous nature of JavaScript is achieved through mechanisms like callbacks, promises, and async/await. The Event Loop is a crucial part of this process, managing the execution of asynchronous code

1.JavaScript Runtime comprises the heap and call stack. the callstack have all function calls , in heap we have two things web api and callbacn queue , Notable functions like setTimeout are part of Web APIs, not the V8 source.
2.JavaScript's single-threaded nature means only one operation is performed at a time, but asynchronous operations allow the program to handle multiple tasks concurrently.
3.javaScript Runtime + Web APIs + Event Loop + Callback Queue work together.V8 manages the call stack, while Web APIs handle asynchronous operations.

working--
When a JavaScript program starts, an initial script is run, and the event loop begins.
Synchronous code is executed line by line, and functions are added to the call stack.
When an asynchronous operation is encountered (e.g., setTimeout), it is offloaded to the Web APIs, and the synchronous execution continues.
Once an asynchronous operation is complete, its callback is placed in the callback queue.
The event loop continuously checks whether the call stack is empty. If the stack is empty, it takes the first callback from the queue and pushes it onto the stack.



*/
