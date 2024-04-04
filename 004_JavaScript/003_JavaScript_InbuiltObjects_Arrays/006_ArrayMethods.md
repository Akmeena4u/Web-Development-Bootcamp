

### 1. Length
The `length` property of an array in JavaScript returns the number of elements in the array. It provides the size or length of the array.

```javascript
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits1.length;  // 4
```

### 2. Reverse
The `reverse()` method reverses the order of elements in an array. It modifies the array in place and returns a reference to the reversed array.

```javascript
let first = [1, 2, 3, 4];
console.log(first);  // [1, 2, 3, 4]
let reverse = first.reverse();
console.log(reverse);  // [4, 3, 2, 1]
```

### 3. Filter
The `filter()` method creates a new array with all elements that pass a certain condition implemented by the provided callback function. It filters out elements based on the criteria specified in the callback function.

```javascript
const ages = [32, 33, 16, 40];
const result = ages.filter(function checkAdult(age) {
  return age >= 18;
});
console.log(result);  // [32, 33, 40]
```

### 4. Map
The `map()` method creates a new array by applying a function to each element of the original array. It transforms each element of the array using the callback function and returns a new array of the transformed elements.

```javascript
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
console.log(newArr);  // [2, 3, 4, 5]
```

### 5. Sort
The `sort()` method sorts the elements of an array in place and returns the sorted array. By default, it sorts the elements alphabetically or numerically. You can customize the sorting order by providing a compare function as an argument.

```javascript
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();
console.log(fruits2);  // ["Apple", "Banana", "Mango", "Orange"]

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return a - b; });
console.log(points);  // [1, 5, 10, 25, 40, 100]
```

### 6. Chaining
Chaining in JavaScript arrays involves applying multiple array methods in sequence to an array. This allows for concise and efficient manipulation of array elements in a single statement.

```javascript
let arr = [1, 2, 3, 4, 5, 6];
let chain = arr.filter(val => val > 2)
               .map(num => num * num)
               .filter(val => val % 2 === 0);
console.log(chain);  // [4, 16, 36]
```

### 7. Reduce
The `reduce()` method applies a function to each element of an array and reduces the array to a single value. It accumulates the results of the callback function on each element to produce a final value.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);  // 15
```

These examples illustrate how each array method works and how they can be used to manipulate array elements effectively in JavaScript.
