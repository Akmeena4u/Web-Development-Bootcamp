Here are the three methods for cloning objects in JavaScript:

1. **Using Iteration (Deep Cloning):**
   - This method involves iterating through the properties of the original object and copying each property to a new object.
   - Example:
     ```javascript
     const rectangle = { length: 2, breadth: 4 };
     const duplicate = {};
     for (let key in rectangle) {
         duplicate[key] = rectangle[key];
     }
     ```
   - This method performs a deep clone, copying nested objects and arrays as well.

2. **Using `Object.assign()` (Shallow Copy):**
   - The `Object.assign()` method creates a shallow copy of an object by copying its enumerable own properties to a new object.
   - Example:
     ```javascript
     const rectangle = { length: 2, breadth: 4 };
     const duplicate = Object.assign({}, rectangle);
     ```
   - This method creates a shallow copy, meaning nested objects or arrays within the original object are not deeply cloned.

3. **Using Spread Syntax (Shallow Copy):**
   - The spread syntax (`...`) can also be used to create a shallow copy of an object, similar to `Object.assign()`.
   - Example:
     ```javascript
     const rectangle = { length: 2, breadth: 4 };
     const duplicate = { ...rectangle };
     ```
   - Like `Object.assign()`, this method creates a shallow copy, so nested objects or arrays are not deeply cloned.

It's important to note that while these methods create copies of the object's properties, they do not clone nested objects or arrays within the object deeply. Deep cloning requires additional techniques, such as recursively applying these methods to nested objects or using specialized libraries like Lodash's `_.cloneDeep()` function.
