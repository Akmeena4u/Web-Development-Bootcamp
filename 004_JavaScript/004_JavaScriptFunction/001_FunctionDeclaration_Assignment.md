

### 1. Function Declaration
Function declarations in JavaScript are defined using the `function` keyword followed by the function name, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces. They can be called using the function name followed by arguments in parentheses.

#### Example:
```javascript
// Function to return the square of a number
function square(number) {
  return number * number;
}

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); // Calls the greet function with the argument "Alice"
```

### 2. Function Assignment
Functions can also be assigned to variables. There are three types of function assignments:

#### a. Named Function Assignment
A named function is assigned to a variable using the function keyword followed by a function name. This allows the function to be referenced by that variable.

```javascript
let add = function addTwoNumbers(a, b) {
  let sum = a + b;
  return sum;
}
console.log(add(6, 7)); // Outputs: 13
```

#### b. Anonymous Function Assignment
An anonymous function is assigned to a variable without a function name. It is commonly used for one-time or short-term operations.

```javascript
let add = function(a, b) {
  let sum = a + b;
  return sum;
}
console.log(add(8, 8)); // Outputs: 16
```

#### c. Arrow Function Assignment
Arrow functions are a concise way to write functions in JavaScript, especially for short functions. They use the `=>` syntax.

```javascript
let add = (a, b) => {
  let sum = a + b;
  return sum;
}

let num1 = Math.round(Math.random() * 1000);
let num2 = Math.round(Math.random() * 1000);
console.log(add(num1, num2)); // Outputs the sum of num1 and num2
```

These examples demonstrate different ways to define and use functions in JavaScript, including function declarations, named function assignments, anonymous function assignments, and arrow function assignments.
