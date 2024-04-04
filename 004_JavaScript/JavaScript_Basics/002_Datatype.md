
# JavaScript Data Types

## Primitive Data Types

### Number
Numbers in JavaScript can be integers or floating-point numbers. They are used for mathematical calculations and storing numeric values.
```javascript
let num = 10.6;
console.log(num); // Output: 10.6

num = 10;
console.log(num); // Output: 10
```

### String
Strings represent textual data and are enclosed in single ('') or double ("") quotes. They are used for storing and manipulating text.
```javascript
let firstName = "Amit Kumar";
let lastName = 'Meena';
let fullName = firstName + " " + lastName;

console.log(firstName); // Output: Amit Kumar
console.log(lastName); // Output: Meena
console.log(fullName); // Output: Amit Kumar Meena
```

### Boolean
Booleans represent true or false values. They are often used in conditional statements and logical operations.
```javascript
let bool = true;
bool ? console.log("True") : console.log("False"); // Output: True
```

### Undefined
Undefined is a data type used for variables that have been declared but not assigned a value yet.
```javascript
let x;
console.log(x); // Output: undefined
```

### Null
Null represents the intentional absence of any object value. It is used to explicitly indicate that a variable has no value.
```javascript
let y = null;
console.log(y); // Output: null
```

## Non-Primitive Data Types

### Array
Arrays are used to store collections of values in a single variable. They are indexed starting from 0 and can hold different data types.
```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr = ['my', 'name', 'is', 'Amit'];
console.log(arr); // Output: ['my', 'name', 'is', 'Amit']
console.log(arr[0]); // Output: my
```

### Object
Objects are used to store collections of key-value pairs. They are versatile and can hold different data types as values.
```javascript
let obj = {
    "Name": 'Amit',
    "Age": 20
};

console.log(obj["Name"]); // Output: Amit
```

Understanding JavaScript data types is crucial for effectively working with variables, functions, and data in your JavaScript programs. Each data type has specific characteristics and use cases, making them essential building blocks in programming.


This explanation provides a more detailed understanding of each JavaScript data type, along with code examples demonstrating their usage and behavior. It's important to grasp these concepts to write effective and efficient JavaScript code.
