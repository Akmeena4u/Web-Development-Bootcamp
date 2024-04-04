Here are the notes on the Math object in JavaScript:

## Math Object

### Properties:
1. **Euler Number (`Math.E`):**
   - Represents the mathematical constant e.

2. **PI (`Math.PI`):**
   - Represents the mathematical constant π (pi).

3. **Log2E (`Math.LOG2E`):**
   - Represents the logarithm of E to base 2.

### Methods:
1. **Round (`Math.round()`):**
   - Rounds a number to the nearest integer.

2. **Ceil (`Math.ceil()`):**
   - Returns the smallest integer greater than or equal to a given number.

3. **Floor (`Math.floor()`):**
   - Returns the largest integer less than or equal to a given number.

4. **Random (`Math.random()`):**
   - Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

5. **Min (`Math.min()`):**
   - Returns the minimum of two or more numbers.

6. **Max (`Math.max()`):**
   - Returns the maximum of two or more numbers.

7. **Pow (`Math.pow()`):**
   - Raises a base number to the power of an exponent.

### Example Usage:
```javascript
console.log(Math.round(12.79)); // 13
console.log(Math.ceil(12.79)); // 13
console.log(Math.floor(12.79)); // 12
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.min(10, 12)); // 10
console.log(Math.max(10, 12)); // 12
console.log(Math.pow(2, 10)); // 1024
```

### Generating Random Integers:
```javascript
// Returning a random integer between two bounds (e.g., 40 and 100)
const lowerBound = 40;
const upperBound = 100;
console.log(Math.round(Math.random() * (upperBound - lowerBound)) + lowerBound);
```

The Math object in JavaScript provides various properties and methods for mathematical calculations and operations, making it useful for a wide range of applications.
