

# Call Stack in JavaScript

The call stack is a fundamental data structure in JavaScript that keeps track of the currently executing functions and their respective contexts in your code. It operates on a Last In, First Out (LIFO) principle, meaning the last function added to the stack is the first one to be removed.

## How the Call Stack Works

- When a function is called, a new frame is pushed onto the call stack to represent that function's execution context.

- As the function executes, variables, arguments, and other relevant information are stored within its frame on the call stack.

- When a function completes its execution, its frame is popped from the stack, and control returns to the previous function in the stack.

### Example:

Consider the following JavaScript code:

```javascript
function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
  foo();
}

bar();
```

1. When `bar()` is called, it's added to the call stack.
2. Inside `bar()`, when `foo()` is called, `foo()` is added to the stack on top of `bar()`.
3. After `foo()` completes its execution, it's removed from the stack, followed by the removal of `bar()`.

This process illustrates how the call stack manages the flow of execution in your code, with functions being added and removed in a hierarchical manner.

Understanding the call stack is crucial for debugging and tracing the execution flow of your JavaScript programs.
```

