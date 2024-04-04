

- **Factory Function**:
  - A factory function is a function that returns an object.
  - It encapsulates the creation of objects with specific properties and methods.
  - Useful for creating multiple similar objects.

  **Example 1:**
  ```javascript
  function createPerson(name, age) {
      return {
          name: name,
          age: age,
          greet: function() {
              console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
          }
      };
  }

  const person1 = createPerson("Alice", 25);
  const person2 = createPerson("Bob", 30);

  person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
  person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.
  ```

  **Example 2:**
  ```javascript
  function createRectangle() {
    const rectangle = {
      length: 2,
      breadth: 4,

      draw: function () {
        console.log("Drawing rectangle");
      },

      area: function () {
        console.log(`Area of Rectangle: ${rectangle.length * rectangle.breadth}`);
      },
    };
    return rectangle;
  }

  let rectangle1 = createRectangle();
  console.log(rectangle1.length);
  ```

In both examples, the factory function `createPerson` and `createRectangle` returns objects with predefined properties and methods, allowing for easy creation of instances with consistent structures.

