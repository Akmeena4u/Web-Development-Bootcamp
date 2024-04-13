
# Currying in JavaScript

Currying is a process in functional programming where we transform a function with multiple arguments into a sequence of nested functions that take one argument at a time. Let's understand this concept with an example.

### Definition


So imagine you have a function with multiple arguments: f(a, b, c). Using currying, we achieve a function f(a) that returns a function g(b) that returns a function h(c).

Basically: f(a, b, c) —> f(a) => g(b) => h(c)

Let's build a simple example that adds two numbers. But first, without currying:
```javascript
const add = (x, y) => x + y;
add(1, 2); // 3
```

Great! Super simple! Here we have a function with two arguments. To transform it into a curried function we need a function that receives x and returns a function that receives y and returns the sum of both values.

```javsscript
const add = (x) => {
  function addY(y) {
    return x + y;
  }

  return addY;
};
```

We can refactor addY into a anonymous arrow function:
```javascript
const add = (x) => {
  return (y) => {
    return x + y;
  }
};
```
Or simplify it by building one liner arrow functions:
```javascirpt
const add = (x) => (y) => x + y;
```

These three different curried functions have the same behavior: build a sequence of functions with only one argument.
How can we use it?

ow can we use it?
```javascript
add(10)(20); // 30
```

At first, it can look a bit strange, but there's a logic behind it. add(10) returns a function. And we call this function with the 20 value.
This is the same as:
```javascript
const addTen = add(10);
addTen(20); // 30
```
And this is interesting. We can generate specialized functions by calling the first function. Imagine we want an increment function. We can generate it from our add function by passing 1 as the value.
```javascript
const increment = add(1);
increment(9); // 10
```


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

-Currying has practical applications in functional programming and is used extensively for composing functions and creating reusable code. 
- the concept of currying is definitely useful when you don't want to run the function until all the function parameters are available, especially when dealing with asynchronous data fetching from multiple APIs.
