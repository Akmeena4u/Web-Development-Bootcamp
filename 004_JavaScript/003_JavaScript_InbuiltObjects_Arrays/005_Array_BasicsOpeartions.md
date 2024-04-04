
# Arrays in JavaScript

In JavaScript, an array is a data structure that allows you to store multiple values (called elements) in a single variable. Arrays are ordered collections.

## 1. Creation of Array
```javascript
const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixedArray = [1, "apple", true];
```

## 2. Accessing Array Elements
```javascript
const fruits1 = ["apple", "banana", "cherry"];
const firstFruit = fruits1[0]; // "apple"
const secondFruit = fruits1[1]; // "banana"
```

## 3. Modifying Array Elements
```javascript
const fruits = ["apple", "banana", "cherry"];
fruits[1] = "grape"; // Modifies the second element
```

## 4. Iterating through Array
```javascript
const fruits2 = ["apple", "banana", "cherry"];
// Using a for loop
for (let i = 0; i < fruits2.length; i++) {
  console.log(fruits2[i]);
}
// Using for..of loop
for (let value of fruits2) {
  console.log(value);
}
// Using forEach method with a callback function
fruits2.forEach(function (fruit) {
  console.log(fruit);
});
```

## 5. Adding and Removing Elements
```javascript
// Adding
const arr = [1, 2, 5, 4, 7];
arr.unshift(10); // Insertion at Beginning
arr.push(8); // Insertion at End
arr.splice(3, 0, 100); // Insertion at Middle

// Removing
const arr1 = [1, 2, 5, 4, 7];
arr1.shift(); // Remove at Beginning
arr1.pop(); // Remove at End
arr1.splice(1, 1); // Remove at Middle
```

## 6. Combining Two Arrays
```javascript
// Using concat() Method
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray1 = array1.concat(array2);

// Using Spread Operator (...)
const combinedArray2 = [...array1, ...array2];

// Using Array.from() Method
const combinedArray3 = Array.from([...array1, ...array2]);
```

## 7. Slicing
```javascript
const numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(1, 4); // [2, 3, 4]
const slicedNumbers1 = numbers.slice(2); // [3, 4, 5]
const slicedNumbers2 = numbers.slice(-3, -1); // [3, 4]

// Copying an Array
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = originalArray.slice();
```


Arrays in JavaScript are versatile and offer various methods for manipulation, iteration, and combination of elements.
