<details>
  <summary> Introduction to JavaScript Code Execution </summary>
  
## Introduction to JavaScript Code Execution

### Overview
In this lecture, you will learn how JavaScript code is executed in a browser. JavaScript code runs in an environment, typically a browser like Google Chrome or Firefox, on the client side.

### JavaScript Engine
- **Client-side JavaScript** runs inside a browser.
- Every browser has a built-in JavaScript engine responsible for parsing and executing JavaScript code.
  - **Google Chrome**: V8
  - **Firefox**: SpiderMonkey
  - **Internet Explorer**: Chakra

### How JIT Compilation Works
**Parsing**:
1. JavaScript code is read and converted into an Abstract Syntax Tree (AST).
2. Splits code into meaningful pieces (tokens) and checks for syntax errors.

**Compilation**:
1. Converts AST into machine code and executes it immediately.

**Optimization**:
1. Initially generates unoptimized code for quick execution.
2. Continuously optimizes code during execution for better performance

![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/ae08da1d-4a03-47a4-838c-8e5e9524a5e2)

</details>

---

<details>
<summary> Js Execution context </summary>
When you run a JavaScript program, there are numerous processes happening behind the scenes inside the JavaScript engine. Let's delve into these processes and how the event loop fits into the execution context.

### Execution Context

1. **Global Execution Context Creation**
   - When you run a JavaScript program, a **global execution context** is created.
   - This execution context consists of two components:
     - **Memory Component** (also known as the Variable Environment)
     - **Code Component** (also known as the Thread of Execution)

2. **Phases of Execution Context Creation**
   - **Memory Creation Phase**
     - JavaScript allocates memory to variables and functions.
     - Variables are initialized with `undefined`.
     - Functions are stored in memory with their entire code.
   - **Code Execution Phase**
     - JavaScript executes the code line by line.
     - Variables are assigned their actual values.
     - Functions are invoked, creating new execution contexts.

### Example Code for Execution Context Creation

```javascript
var n = 2;

function square(num) {
    var ans = num * num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);
```

### Detailed Execution Process

1. **Global Execution Context Creation**
   - Memory Allocation Phase:
     - `n` is initialized with `undefined`.
     - `square` is stored with its function code.
     - `square2` and `square4` are initialized with `undefined`.
   - Code Execution Phase:
     - `n` is assigned the value `2`.
     - `square2` and `square4` are assigned the results of the `square` function.

2. **Function Invocation and Execution Context Creation**
   - When `square(n)` is invoked, a new execution context is created.
   - Memory Allocation Phase:
     - `num` is initialized with `undefined`.
     - `ans` is initialized with `undefined`.
   - Code Execution Phase:
     - `num` is assigned the value `2`.
     - `ans` is calculated as `num * num` (i.e., `2 * 2`).
     - The function returns `4`, which is assigned to `square2`.
   - The same process occurs for `square(4)`, resulting in `16` being assigned to `square4`.

### Event Loop

The **event loop** is crucial in JavaScript for handling asynchronous operations, ensuring non-blocking behavior, and managing the execution of multiple tasks. Let's understand how it fits into the execution process.

1. **Call Stack and Web APIs**
   - The call stack manages the execution of function calls in a LIFO (Last In, First Out) manner.
   - When an asynchronous function (e.g., `setTimeout`, `fetch`) is called, it is handed off to the Web APIs (or Node.js APIs in a Node environment).

2. **Task Queue**
   - Once the asynchronous operation completes (e.g., timer expires, data is fetched), a callback function is placed in the **task queue** (also known as the **callback queue**).

3. **Event Loop**
   - The event loop continuously monitors the call stack and the task queue.
   - If the call stack is empty, the event loop pushes the first task from the task queue onto the call stack, allowing the callback function to execute.

### Example with Event Loop

```javascript
console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 2000);

console.log('End');
```

**Execution Flow:**
1. The global execution context is created.
2. `console.log('Start')` is executed, logging "Start" to the console.
3. `setTimeout` is called and handed off to the Web APIs. The timer starts.
4. `console.log('End')` is executed, logging "End" to the console.
5. The call stack is now empty.
6. After 2000ms, the callback from `setTimeout` is moved to the task queue.
7. The event loop pushes the callback onto the call stack.
8. The callback is executed, logging "Timeout" to the console.

### Recap

- The global execution context is created with memory and code components.
- Memory is allocated to variables and functions, initialized with `undefined` or the function code.
- Code execution assigns actual values and invokes functions, creating new execution contexts.
- The event loop ensures asynchronous operations are handled efficiently, allowing JavaScript to remain non-blocking and responsive.

By understanding the execution context and the event loop, you gain deeper insights into how JavaScript manages synchronous and asynchronous operations, ensuring smooth and efficient execution of your code.

![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/1ea1607e-4b73-4d06-be44-5b55be106fb6)


</details>
