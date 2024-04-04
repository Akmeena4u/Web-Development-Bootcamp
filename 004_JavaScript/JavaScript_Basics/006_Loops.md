
# Loops in JavaScript

In JavaScript, loops are used to repeatedly execute a code block as long as a specific condition is true. There are several types of loops available:

## 1. for Loop
The for loop is commonly used when you know how many iterations you want to perform.

```javascript
for (let i = 0; i < 5; i++) {
  // Code to be executed during each iteration
  console.log(i);
}
```

## 2. while Loop
The while loop repeatedly executes a block of code as long as a specified condition is true. It's useful when you don't know the number of iterations in advance.

```javascript
let i = 0;
while (i < 5) {
  // Code to be executed during each iteration
  console.log(i);
  i++;
}
```

## 3. do...while Loop
The do...while loop is similar to the while loop, but it guarantees that the code block is executed at least once before checking the condition.

```javascript
let i = 0;
do {
  // Code to be executed during each iteration
  console.log(i);
  i++;
} while (i < 5);
```

## 4. for...in Loop
The for...in loop is used to iterate over the properties of an object. It's typically used with objects or arrays to loop through their keys or indices.

```javascript
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  // Code to access each property
  console.log(key, obj[key]);
}
```

## 5. for...of Loop
The for...of loop is used to iterate over the values of iterable objects like arrays, strings, etc.

```javascript
const arr = [1, 2, 3];
for (let value of arr) {
  // Code to access each value
  console.log(value);
}
```

These loops provide different ways to iterate over data structures or execute code repeatedly based on conditions, making them essential for controlling the flow of your JavaScript programs.


