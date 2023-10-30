/*TypeScript is an open-source programming language developed and maintained by Microsoft. It is a superset of JavaScript, which means that it builds on JavaScript by 
 adding static typing and other features to the language. TypeScript code is transpiled (converted) into plain JavaScript that can be run in any JavaScript environment, 
making it compatible with all the existing JavaScript libraries and runtimes.

Here's a breakdown of what TypeScript is and why it is used:

1. Static Typing:
TypeScript introduces static typing to JavaScript. This means that you can specify the data types of variables, function parameters, and return values. The type system
helps catch errors and bugs at compile time rather than runtime,    

2. Improved Tooling:
TypeScript comes with a powerful type checker that helps you identify and fix issues early in the development process. 

3. ES6+ Compatibility:
TypeScript supports all the features of ECMAScript 2015 (ES6) and beyond, which means you can use the latest JavaScript language features alongside TypeScript's type system.  
  
  */


//--------------------------------------------Installtion and compilation of Typescript -----------------------------------------------------------------------


//1.Installation: To use the TypeScript compiler, you first need to install TypeScript on your system. You can do this using Node.js and npm (Node Package Manager) . The -g flag installs TypeScript globally on your system.
  npm install -g typescript

//2.Transpilation: Once TypeScript is installed, we can use the tsc command to transpile TypeScript files into JavaScript. For example, if we  have a TypeScript file named main.ts, we can transpile it by running
tsc main.ts
        //This command will generate a JavaScript file named app.js in the same directory. By default, TypeScript compiles to ECMAScript 3 (ES3)

//3.Run :- run using below 
  node main.js





//------------------------------------------------------Example-Hello world in typescript ----------------------------------------------------------------

// This is a simple "Hello, World!" program in TypeScript.
export {};
let greeting: string = "Hello, World!";
console.log(greeting);

//it will give an warning in top becoz it treated as script rather than a module , module has its own scope while script has global scope , to get rid this error we will add export statement on top




//----------------------------------------------Typescript --watch commnd-------------------------------------------------------------------------------------
//In TypeScript, the tsc compiler provides a --watch mode that allows you to automatically recompile your TypeScript files whenever changes are detected.
tsc --watch main.ts

//This command tells TypeScript to watch the myfile.ts file for changes and recompile it whenever you save updates to the file.
//Now, whenever you make changes to your TypeScript file and save it, the TypeScript compiler will automatically recompile the code, and you'll see the updated JavaScript file in your project directory.
