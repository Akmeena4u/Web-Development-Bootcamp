/*Call Stack:

The call stack is a data structure in JavaScript that keeps track of the currently executing functions (and their respective contexts) in your code.
When a function is called, a new frame is pushed onto the call stack to represent that function's execution context.
When a function completes, its frame is popped from the stack, and control returns to the previous function in the stack.*/

function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
  foo();
}

bar();

/*When bar() is called, it's added to the stack, and when it calls foo(), foo() is added to the stack on top of bar(). After foo() completes,
it's removed from the stack, followed by bar().*/
