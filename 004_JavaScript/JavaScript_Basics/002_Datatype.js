// Data Types 

// In JavaScript, data types can be categorized as follows:

// Primitive Data Types:
// Number: Represents numeric values (integers or floating-point).
// String: Represents textual data, enclosed in single or double quotes.
// Boolean: Represents true or false values.
// Undefined: Represents a variable that has been declared but has no value.
// Null: Represents the intentional absence of any object value.
// Symbol: Represents unique and immutable values, often used as object property keys (ES6).
// BigInt: Represents large integers that cannot be represented by the Number type (ES11).


// Composite Data Types:
// Object: Represents a collection of key-value pairs (properties and methods).
// Array: Represents an ordered list of values, indexed by numbers.
// Function: Represents a reusable block of code.


// Special Data Types:
// NaN: Represents a special "Not-a-Number" value, often resulting from invalid mathematical operations.
// Infinity and -Infinity: Represent positive and negative infinity values, respectively.
// Primitive Wrapper Objects: Objects that temporarily wrap primitive values for certain operations (e.g., String, Number, Boolean).


// Reference Data Types (Objects):
// Object: Represents a collection of properties and methods.
// Array: A specialized object for storing ordered lists of values.
// Function: A callable object that contains executable code.
// Date: Represents date and time information.
// RegExp: Represents regular expressions for pattern matching.
// Error: Represents runtime errors.
// Understanding JavaScript data types is essential for working with variables, functions, and data in your JavaScript programs. It helps you manage and manipulate data effectively.

// Primitive Data Types 
// #1 - String
let firstName = "Amit kumar";
let lastName = 'meena';
let fullName = firstName + " " + lastName;

console.log(firstName);
console.log(lastName);
console.log(fullName);

// #2 - Number 
let num = 10.6;
console.log(num);

num = 10;
console.log(num);

// #3 - Boolean
let bool = true;
bool ? console.log("True") : console.log("False");

// #4 - Undefined
let x;
console.log(x);

// #5 - Null
let y = null;
console.log(y);

// Non - Primitive 
// #1 - Arary 

let arr = [1, 2, 3, 4, 5];
console.log(arr);

arr = ['my','name','is','Amit'];
console.log(arr);
console.log(arr[0]);

// #2 - Object 

let obj = {
    "Name" : 'Amit',
    "Age" : 20
};

console.log(obj["Name"]);
