# TypeScript Overview and Basics

## What is TypeScript?

TypeScript is an open-source programming language developed and maintained by Microsoft. It acts as a superset of JavaScript, adding static typing and additional features to the language. TypeScript code is transpiled (converted) into plain JavaScript, making it compatible with all existing JavaScript libraries and runtimes.

### Key Features of TypeScript:

1. **Static Typing:**
   - TypeScript introduces static typing to JavaScript, allowing developers to specify data types for variables, function parameters, and return values.
   - The type system helps catch errors and bugs at compile time, enhancing code reliability.

2. **Improved Tooling:**
   - TypeScript comes with a powerful type checker that identifies and fixes issues early in the development process.
   - Enhanced tooling provides a better development experience, helping developers write more maintainable and error-resistant code.

3. **ES6+ Compatibility:**
   - TypeScript supports all features of ECMAScript 2015 (ES6) and beyond, enabling the use of the latest JavaScript language features alongside TypeScript's type system.

## Installation and Compilation of TypeScript

### 1. Installation:

To use the TypeScript compiler, install TypeScript globally on your system using Node.js and npm (Node Package Manager):

```bash
npm install -g typescript
```

### 2. Transpilation:

Transpile TypeScript files into JavaScript using the `tsc` command. For example, if you have a TypeScript file named `main.ts`:

```bash
tsc main.ts
```

This generates a JavaScript file named `main.js` in the same directory. By default, TypeScript compiles to ECMAScript 3 (ES3).

### 3. Running:

Run the transpiled JavaScript file using Node.js:

```bash
node main.js
```

## Example: Hello World in TypeScript

```typescript
// This is a simple "Hello, World!" program in TypeScript.
export {};
let greeting: string = "Hello, World!";
console.log(greeting);
```

**Note:** The `export {}` statement is added to treat the file as a module rather than a script, preventing potential issues.

## TypeScript Watch Mode

Use the `--watch` mode in TypeScript to automatically recompile files when changes are detected:

```bash
tsc --watch main.ts
```

This command watches `main.ts` for changes and recompiles it whenever updates are saved.

Now, you have a basic understanding of TypeScript, its features, and how to set up and compile TypeScript code.
