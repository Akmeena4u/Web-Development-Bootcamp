

### Function Scope in JavaScript

Function scope refers to the concept that variables declared inside a function are only accessible within that function. These variables have local scope, meaning their visibility is limited to the block of code defined by the function.

#### Example 1: Local Scope and Global Scope
```javascript
function greet() {
  const message = "Hello, World!";
  console.log(message);
}

greet(); // Outputs: "Hello, World!"

console.log(message); // ReferenceError: message is not defined
```

In this example, the `message` variable is declared inside the `greet` function, so it has local scope and is accessible only within the function. Attempting to access it outside the function scope results in a ReferenceError.

#### Example 2: Block Scope with let
```javascript
function example() {
  if (true) {
    let blockScopedVar = 42;
    console.log(blockScopedVar); // Outputs: 42
  }
  console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined
}

example();
```

Here, `blockScopedVar` is declared with `let` inside a block (if statement), giving it block scope. It's accessible only within that block and not outside it.

Function scope provides encapsulation, ensuring that variables declared inside a function do not interfere with variables in the global scope or variables declared in other functions. Each function creates its own scope, and variables with the same name can exist in different function scopes without conflict.

It's important to note that variables declared with `var` inside a function have function scope, whereas variables declared with `let` or `const` inside a block (including a function block) have block scope. Block-scoped variables are only accessible within the block in which they are defined, not just within the function.
