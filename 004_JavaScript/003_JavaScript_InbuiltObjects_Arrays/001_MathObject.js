//In JavaScript, there are several built-in objects and classes that provide various functionalities for tasks like manipulating strings, working with numbers,
//handling arrays, and interacting with the browser environment.


// Math object 

// Properties 
// #1 - Euler Number - Represents the mathematical constant e.
console.log(Math.E);

// #2 - PI - Represents the mathematical constant π (pi).
console.log(Math.PI);

// #3 - Log2E
console.log(Math.LOG2E);
    

// Methods 

// #1 - Round 
console.log(Math.round(12.79)); // 13
console.log(Math.round(12.49)); // 12

// #2 - Ceil 
console.log(Math.ceil(12.79)); //13

// #3 - Floor 
console.log(Math.floor(12.79)); //12

// #4 - Random - Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()); //....................

// #5 - min 
console.log(Math.min(10,12)); //10

// #6 - Random 
console.log(Math.max(10,12)); //12

// #7 - pow 
console.log(Math.pow(2,10)); //1024


// Returning a random integer between two bounds
// LowerBound - 40 
// Upper Bound - 100
console.log(Math.round(Math.random() * (100 - 40)) + 40);
