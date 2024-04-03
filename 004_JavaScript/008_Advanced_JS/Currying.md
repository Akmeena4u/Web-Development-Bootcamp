
# Currying in JavaScript

Currying is a process in functional programming where we transform a function with multiple arguments into a sequence of nested functions that take one argument at a time. Let's understand this concept with an example.

### Definition

Currying is the process of transforming a function with multiple arguments like `f(a, b, c)` into a sequence of nesting functions like `f(a)(b)(c)`.

### Example

Let's define a `sum` function that takes three parameters and returns their sum:

```javascript
function sum(a, b, c) {
    return a + b + c;
}

const result = sum(2, 3, 5);
console.log(result); // Output: 10
```

Now, let's curry the `sum` function by transforming it into a sequence of functions that take one argument at a time:

```javascript
function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c);
            };
        };
    };
}

const curriedSum = curry(sum);
const result2 = curriedSum(2)(3)(5);
console.log(result2); // Output: 10
```

### Explanation

- `curry` is a higher-order function that accepts a function `fn` as its argument and returns a curried version of `fn`.
- Each nested function returned by `curry` takes one argument and returns another nested function until all arguments are received, then it invokes the original function with the collected arguments.

### Practical Use

Currying allows us to create reusable functions and compose new functions easily. For example:

```javascript
const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);

console.log(add5); // Output: 10
```

This demonstrates how currying helps in composing functions with preset arguments, making function composition more flexible and reusable.

### Further Exploration

Currying has practical applications in functional programming and is used extensively for composing functions and creating reusable code. 
