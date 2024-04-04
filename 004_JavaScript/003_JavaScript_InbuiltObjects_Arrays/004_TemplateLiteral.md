
# Template Literals in JavaScript

Template literals, also known as template strings, are a feature introduced in ECMAScript 6 (ES6) that allow you to create strings with embedded expressions using backticks (`).

## Embedded Expressions
```javascript
const name = "Alice";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);
// Output: Hello, my name is Alice and I am 30 years old.
```

## Multiline Strings
```javascript
const multilineString = `
  This is a
  multiline string.
`;
console.log(multilineString);
/* Output:
  This is a
  multiline string.
*/
```

## Escape Sequences
```javascript
const escapedString = `This is a newline\nand a tab\tcharacter.`;
console.log(escapedString);
// Output: This is a newline
// and a tab    character.
```

Template literals provide a convenient way to create strings with dynamic content, multiline text, and escape sequences.
