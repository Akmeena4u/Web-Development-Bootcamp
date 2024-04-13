

### Topics Covered

We will cover the following topics:
1. Nested Functions Scope
2. Closures
3. Currying
4. The "this" Keyword
5. Prototype and Prototypal Inheritance
6. Classes, Iterators, and Generators
7. Asynchronous JavaScript Concepts (in the next video)

### Setup

To follow along, ensure you have:
- Node.js and VS Code installed.
- Open VS Code inside a folder named "advanced-javascript" and create a file called "main.js".
- Open the terminal in VS Code and run `node --version` to check if Node.js is installed.

### Nested Function Scope

Let's revisit the concept of scope in JavaScript. We'll start with an example in `main.js`:

```javascript
let a = 10; // Global Scope

function outer() {
    let b = 20; // Outer Function Scope
    
    function inner() {
        let c = 30; // Inner Function Scope
        console.log(a, b, c);
    }
    
    inner(); // Invoke inner function
}

outer(); // Invoke outer function
```

Output: `10 20 30`

JavaScript resolves variable names from inner to outer scopes, known as lexical scoping. Nested functions have access to variables in their own scope and outer scopes.

---





### Closure in JavaScript


- A closure is a combination of a function bundled together with references to its surrounding state (lexical environment). It allows an inner function to have access to the outer function's scope, even after the outer function has finished executing.

**Lexical Scoping**:
- JavaScript uses lexical scoping, meaning that the scope of variables is determined by their position within the source code.

**Example**:
```javascript
function init() {
  var name = "Mozilla"; // Local variable created by init
  function displayName() {
    // displayName() is the inner function (closure)
    console.log(name); // Accesses outer variable 'name'
  }
  displayName(); // Output: 'Mozilla'
}

init();
```

### Practical Closure Examples

**Closure with Returned Function**:
```javascript
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc(); // Output: 'Mozilla'
```
In this example:

1. makeFunc() defines name and displayName() as an inner function.
2.It returns displayName as a closure.
3. myFunc holds a reference to displayName and when invoked (myFunc()), it prints Mozilla.

**Function Factory with Closures**:
```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // Output: 7
console.log(add10(2)); // Output: 12
```

#### In this example:

1. makeAdder(x) returns a closure that adds x to its argument y.
2. add5 and add10 are closures created with different x values (5 and 10 respectively).
3. Invoking add5(2) adds 5 to 2, resulting in 7.
4. Invoking add10(2) adds 10 to 2, resulting in 12.


**Practical Use Case - Text Size Buttons**:
```javascript
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
```
```html
<button id="size-12">12</button>
<button id="size-14">14</button>
<button id="size-16">16</button>
```



### Notes

- **Closure Definition**: A closure is created when a function is defined within another function and has access to the outer function's variables, forming a persistent scope chain.
  
- **Lexical Scoping**: Determines variable scope based on where variables are declared in the source code.
  
- **Practical Uses**:
  - Encapsulation and private variables.
  - Callback functions and event handling.
  - Creating function factories and modular code structures.

Closures in JavaScript provide a powerful mechanism for managing scope and encapsulating functionality. They are widely used in various programming patterns and are essential for understanding advanced JavaScript concepts.


