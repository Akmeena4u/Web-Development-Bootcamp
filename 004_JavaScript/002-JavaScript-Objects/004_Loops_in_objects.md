

**For...in Loop:**
- Used to iterate over the enumerable properties of an object.
- Syntax: `for (const key in object) { ... }`.
- Example:
  ```javascript
  const person = {
      name: "Alice",
      age: 30,
      city: "New York"
  };

  for (const key in person) {
      console.log(key + ": " + person[key]);
  }
  ```

**For...of Loop:**
- Used to iterate over the values of iterable objects like arrays, strings, etc.
- Syntax: `for (const item of iterable) { ... }`.
- Example:
  ```javascript
  const colors = ["red", "green", "blue"];

  for (const color of colors) {
      console.log(color);
  }

  // Using Object.entries() to loop through key-value pairs of an object
  const person = {
      name: "Alice",
      age: 30,
      city: "New York"
  };

  for (const [key, value] of Object.entries(person)) {
      console.log(key + ": " + value);
  }
  ```

**`in` Keyword:**
- Checks if a specified property exists in an object.
- Example:
  ```javascript
  const rectangle = {
      length: 2,
      breadth: 4,
      // ...
  };

  if ("length" in rectangle) {
      console.log("Length Property Exists in Rectangle");
  } else {
      console.log("Absent");
  }
  ```

These loops and the `in` keyword are essential for iterating over objects and checking for the existence of properties within objects in JavaScript.
