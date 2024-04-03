

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

According to Mozilla docs, a closure is the combination of a function bundled together with references to its surrounding state. Let's break down closures in simple terms using examples.

### Nested Function Scope Revisited

Let's start with nested function scope:
- Define a function `outer` with a variable `counter` initialized to 0.
- Define a nested function `inner` that increments `counter` and logs its value.
- Invoke `inner` inside `outer` and then invoke `outer`.

Output: `1`

### Closure Example

Now, let's introduce closures:
- Define `outer` as before but return `inner` instead of invoking it.
- Assign the result of invoking `outer` to a variable `fn`.
- Invoke `fn` twice.

Output: `1` and `2`

### Explanation

- **Nested Function Scope**: Inner functions have access to outer function variables due to lexical scoping.
- **Closure**: When a function is returned from another function, it retains access to its enclosing function's scope.
- the function defined in the closure ‘remembers’ the environment in which it was created.
-  They allow inner functions to access variables from their outer scope, even after the outer function has completed execution.
- **Example Breakdown**:
  - `outer` returns `inner`, creating a closure with the `counter` variable.
  - Each invocation of `fn` increments `counter` within the closure, persisting its value.

### Key Points

- Closures allow inner functions to access outer function variables even after the outer function finishes execution.
- Understanding closures may require multiple reviews for clarity.



