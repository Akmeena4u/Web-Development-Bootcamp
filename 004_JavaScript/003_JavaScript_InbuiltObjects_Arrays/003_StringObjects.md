
# String Manipulation in JavaScript

## Properties
- `length`: Returns the number of characters in a string.
  ```javascript
  const text1 = "Hello, World!";
  const length = text1.length; // Returns 13
  ```

## Methods

### Accessing Characters
- `charAt(index)`: Returns the character at the specified index.
  ```javascript
  const text2 = "Hello";
  const firstChar = text2.charAt(0); // Returns "H"
  ```
- `charCodeAt(index)`: Returns the Unicode value of the character at the specified index.
  ```javascript
  const text3 = "Hello";
  const unicodeValue = text3.charCodeAt(1); // Returns 101 (Unicode for "e")
  ```
- `substring(startIndex, endIndex)`: Returns a substring between startIndex (inclusive) and endIndex (exclusive).
  ```javascript
  const text4 = "Hello, World!";
  const sub = text4.substring(7, 12); // Returns "World"
  ```

### Searching and Replacing
- `indexOf(substring)`: Returns the index of the first occurrence of substring, or -1 if not found.
  ```javascript
  const text5 = "Hello, World!";
  const index = text5.indexOf("World"); // Returns 7
  ```
- `lastIndexOf(substring)`: Returns the index of the last occurrence of substring, or -1 if not found.
  ```javascript
  const text7 = "Hello, World, World!";
  const index = text7.lastIndexOf("World"); // Returns 13
  ```
- `replace(searchValue, replaceValue)`: Replaces the first occurrence of searchValue with replaceValue.
  ```javascript
  const text8 = "Hello, World!";
  const newText = text8.replace("World", "Universe"); // Returns "Hello, Universe!"
  ```
- `includes(searchString)`: Checks if the string contains the specified substring and returns true or false.
  ```javascript
  const text9 = "Hello world, welcome to the universe.";
  const result = text9.includes("world");  // Returns true
  ```

### Case Manipulation
- `toUpperCase()`: Converts the string to uppercase.
  ```javascript
  const text10 = "Hello";
  const uppercaseText = text10.toUpperCase(); // Returns "HELLO"
  ```
- `toLowerCase()`: Converts the string to lowercase.
  ```javascript
  const text11 = "Hello";
  const lowercaseText = text11.toLowerCase(); // Returns "hello"
  ```

### Trimming
- `trim()`: Removes whitespace from both ends of the string.
  ```javascript
  const text12 = "  Hello, World!  ";
  const trimmedText = text12.trim(); // Returns "Hello, World!"
  ```

### Splitting and Joining
- `split(separator[, limit])`: Splits the string into an array of substrings based on the separator.
  ```javascript
  const text17 = "apple,banana,cherry";
  const fruits1 = text17.split(","); // Returns ["apple", "banana", "cherry"]
  ```
- `join(separator)`: Joins the elements of an array into a single string, separated by the specified separator.
  ```javascript
  const fruits2 = ["apple", "banana", "cherry"];
  const text19 = fruits.join(","); // Returns "apple,banana,cherry"
  ```


These examples cover various string manipulation operations in JavaScript using properties and methods of the String object.
