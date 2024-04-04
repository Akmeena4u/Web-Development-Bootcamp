
# JavaScript Operators

## Arithmetic Operator
Arithmetic operators perform mathematical operations on values.
```javascript
let num1 = 10;
let num2 = 20;

console.log(num1 + num2); // Output: 30
console.log(num1 - num2); // Output: -10
console.log(num1 * num2); // Output: 200
console.log(num1 / num2); // Output: 0.5
console.log(num1 % num2); // Output: 10
```

## Post and Pre Increment/Decrement
Post and pre increment/decrement operators modify the value of a variable.
```javascript
let num1 = 10;
let num2 = 20;

console.log(num1++ + ++num2); // Output: 11 21 31
console.log(++num1 + num2--); // Output: 12 20 33 
console.log(num1-- - num2--); // Output: 11 19 -8
console.log(num1-- - --num2); // Output: 10 18 -7
console.log(++num1 - --num2); // Output: 11 17 -6  
console.log(++num1 + --num2); // Output: 12 16 28
```

## Assignment Operator
Assignment operators are used to assign values to variables.
```javascript
let a = 5;
console.log(a); // Output: 5
a += a;
console.log(a); // Output: 10
a -= 4;
console.log(a); // Output: 6
a *= 5;
console.log(a); // Output: 30
a /= 2;
console.log(a); // Output: 15
a %= 7;
console.log(a); // Output: 1
```

## Comparison Operator
Comparison operators are used to compare two values and return a boolean result.
```javascript
let n1 = 5;
let n2 = '5';

console.log(n1 == n2); // Output: true
console.log(n1 === n2); // Output: false
console.log(n1 != n2); // Output: false
console.log(n1 !== n2); // Output: true
console.log(n1 >= n2); // Output: true
console.log(n1 <= n2); // Output: true
console.log(n1 > n2); // Output: false
console.log(n1 < n2); // Output: false
```

## Bitwise Operators
Bitwise operators perform bitwise operations on integer values.
```javascript
let bo = 10;

console.log(bo & 3); // Output: 2
console.log(bo | 3); // Output: 11 
console.log(bo ^ 3); // Output: 9 XOR - it  sets the resulting bit to 1 only if the input bits are different.
console.log(~bo); // Output: -11
console.log(bo >> 1); // Output: 5  Right shift - This effectively divides the number by 2 for each position shifted.
console.log(bo << 1); // Output: 20    left shif- This effectively multiplies the number by 2 for each position shifted.  
```

## Logical Operator 
Logical operators are used to perform logical operations on boolean values.
```javascript
let lo1 = true; 
let lo2 = false;

console.log(lo1 && lo2); // Output: false
console.log(lo1 || lo2); // Output: true
console.log(!lo1); // Output: false
console.log(!lo2); // Output: true
```

## Ternary Operator
Ternary operator is a shorthand for if-else statement.
```javascript
let age = 18;
age > 18 ? console.log("You can Vote") : console.log("You cannot vote");
```

Understanding and using these operators effectively is crucial for writing efficient and concise JavaScript code.
