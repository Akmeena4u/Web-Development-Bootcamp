
### Function Parameters in JavaScript

Function parameters allow you to pass data into a function when it is called. There are several types of function parameters in JavaScript based on how they are defined and used.

#### 1. Named Parameters (Positional Parameters)
Named parameters are defined by name and are assigned values based on their position when calling the function.

```javascript
function greet(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}!`);
}

greet("John", "Doe"); // Calls the greet function with named parameters
```

#### 2. Default Parameters
Default parameters allow you to specify default values for function parameters in case the caller doesn't provide a value.

```javascript
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // Output: 5
```

#### 3. Rest Parameters
Rest parameters allow you to represent an indefinite number of arguments as an array. They are denoted by an ellipsis (...) followed by a parameter name. Rest parameters are true arrays, so you can use array methods and the spread operator (...) with them.

```javascript
function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

const result = sum(1, 2, 3, 4, 5);
console.log(result); // Output: 15

// Using rest parameters in a function
let add = function addTwoNumbers(a,b,...args) {
    let sum = 0;
    for(let key of args)
        sum += key;
    return sum; 
}

console.log(add(1,2,3,4,5,6,7,8));   
```

#### 4. Arguments Object
The `arguments` object contains all the arguments passed to the function, including those not explicitly named as parameters.

```javascript
let add = function addTwoNumbers(a,b) {
    let sum = 0;
    for(let key of arguments)
        sum += key;
    return sum; 
}

console.log(add(1,2,3,4,5,6,7,8));   
```

These function parameter types provide flexibility and control over how you handle inputs and arguments within your functions.
