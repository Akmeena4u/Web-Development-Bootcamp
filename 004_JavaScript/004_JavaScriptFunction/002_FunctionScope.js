//function scope refers to the concept that variables declared inside a function are only accessible within that function. 
//These variables are said to have local scope because their visibility is limited to the block of code defined by the function.

//#1-local scope  and global scope
function greet() {
  const message = "Hello, World!";
  console.log(message);
}

greet(); // Outputs: "Hello, World!"

console.log(message); // ReferenceError: message is not defined



function example() {
  if (true) {
    let blockScopedVar = 42;
    console.log(blockScopedVar); // Outputs: 42
  }
  console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined
}

example();




/*Function scope provides encapsulation, which means that variables declared inside a function do not interfere with variables in the global scope
  or variables declared in other functions. Each function creates its scope, and variables with the same name can exist in different function
scopes without conflict.

It's important to note that variables declared with var inside a function have function scope, whereas variables declared with let or const inside a block 
(including a function block) have block scope. Block-scoped variables are only accessible within the block in which they are defined, not just within the function. */   
