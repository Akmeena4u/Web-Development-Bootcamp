//Template literals, also known as template strings, are a feature introduced in ECMAScript 6 (ES6) that allow you to create strings with embedded expressions.
//They use backticks (`) instead of single or double quotes,

//#1-embeded experessions
const name = "Alice";
const age = 30;
// Using template literals to create a string with embedded expressions
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);
// Output: Hello, my name is Alice and I am 30 years old.



//#2-multiline string 
const multilineString = `
  This is a
  multiline string.
`;
console.log(multilineString);
/* Output:
  This is a
  multiline string.
*/



//#3-You can include escape sequences within template literals, such as \n for newline and \t for tab.
const escapedString = `This is a newline\nand a tab\tcharacter.`;
console.log(escapedString);
// Output: This is a newline
// and a tab    character.

