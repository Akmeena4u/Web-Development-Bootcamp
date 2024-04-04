
# Variable Declaration in JavaScript

In JavaScript, variables can be created using three different keywords: `var`, `let`, and `const`. Each of these keywords has distinct scoping and mutability characteristics.

## Using `var` Keyword

```javascript
console.log("var");
var a = 10;
console.log(a); // Output: 10

a = 20;
console.log(a); // Output: 20

{
  var a = 30;
}
console.log(a); // Output: 30
```

- Variables declared with `var` are globally scoped and can be re-declared in the same scope without any error.
- They can also be updated within the same scope.

## Using `let` Keyword

```javascript
console.log("let");
let b = 10;
console.log(b); // Output: 10

// let b = 20; // Error: Identifier 'b' has already been declared
b = 20;
console.log(b); // Output: 20

{
  let ba = 40;
  console.log(ba); // Output: 40
}
// console.log(ba); // Error: 'ba' is not defined

```

- Variables declared with `let` are block-scoped, meaning they exist within the block they are defined in and cannot be re-declared in the same scope.
- They can be updated within the same scope.

## Using `const` Keyword

```javascript
console.log("const");
const c = 10;
console.log(c); // Output: 10

// c = 20; // Error: Assignment to constant variable
console.log(c); // Output: 10
```

- Variables declared with `const` are block-scoped constants and cannot be re-declared or updated once assigned.


This  file provides a clear explanation of how variables are declared using the `var`, `let`, and `const` keywords in JavaScript, along with code examples illustrating their scoping and mutability characteristics. Use it as a reference for understanding variable declaration in JavaScript.
