//TypeScript has a specific syntax for typing function parameters and return values.

/*-------------------------------------------------------------Function Declaration:----------------------------------------------------------------------------
In TypeScript, you can declare functions using the function keyword, similar to JavaScript. You can specify the parameter types and the return type of a function  */

  function add(x: number, y: number): number {
  return x + y;
}

//If no parameter type is defined, TypeScript will default to using any


/*----------------------------------------------------------Optional parameters ----------------------------------------------------------------------------------
Optional Parameter : By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.  */

function greet(name: string, age?: number): void {
  console.log(`Hello, ${name}!`);
  if (age !== undefined) {
    console.log(`You are ${age} years old.`);
  }
}

// The 'age' parameter is optional, so you can call the function with or without it.
greet("Alice");         // Output: Hello, Alice!
greet("Bob", 25);       // Output: Hello, Bob! You are 25 years old.

//In the greet function, the age parameter is marked as optional by adding ? after its name. 



/*----------------------------------------------------------Default parameter---------------------------------------------------------------------------------------
we  can also provide default values for optional parameters. If a value is not provided when calling the function, the default value will be used. */

function greetWithDefault(name: string, age: number = 30): void {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetWithDefault("Charlie"); // Output: Hello, Charlie! You are 30 years old.
greetWithDefault("David", 28); // Output: Hello, David! You are 28 years old.



/*--------------------------------------------------------Rest parameter---------------------------------------------------------------------------------------------
  Rest parameters in TypeScript allow you to represent an indefinite number of function arguments as an array. This feature is particularly useful when you want to 
  write functions that can accept a variable number of arguments. 

  Declaration :- To declare rest parameters, you use the ... syntax before the parameter name in the function's parameter list. The rest parameter must be an array type.  
  */

  function gatherInfo(name: string, ...details: string[]): void {
  console.log(`Name: ${name}`);
  console.log("Additional details:");
  details.forEach(detail => console.log(detail));
}

gatherInfo("Alice", "Age: 25", "Location: New York", "Occupation: Developer");



/*--------------------------------------------------------Named parameters---------------------------------------------------------------------------------------
Named parameters allow a function to be called using the parameter names with their values rather than just their values in a fixed order.
making your function calls more self-documenting and less dependent on the order of the parameters 

Defining a Function with Named Parameters:
To define a function that accepts named parameters, we simply specify the parameter names and their types in the function's signature. 
we don't need to assign default values for the parameters.
*/

function greet(options: { firstName: string, lastName: string, age: number }): string {
  return `Hello, ${options.firstName} ${options.lastName}! You are ${options.age} years old.`;
}

//the greet function takes an object with named properties firstName, lastName, and age.

const result = greet({
  firstName: "Alice",
  lastName: "Johnson",
  age: 30
});

console.log(result); // Output: Hello, Alice Johnson! You are 30 years old.



