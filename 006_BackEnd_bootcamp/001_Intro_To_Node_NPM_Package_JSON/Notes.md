# Chapter 1 - Introduction to Node, NPM, Package.JSON

## 1. Installation

- Install Node.js from the official site [nodejs.org](https://nodejs.org/), using only LTS versions.
- Verify installation using the terminal/command prompt: `node -v` and `npm -v`.
- Install Visual Studio Code (VS Code) directly from [code.visualstudio.com](https://code.visualstudio.com/).
- Utilize the VS Code terminal to run commands.

## 2. Access the Node REPL interface

- Type `node` in the terminal/command prompt to access the Node REPL interface.
- Use Ctrl+D to exit the interface and Ctrl+C to exit the terminal.

## 3. Running JavaScript Files

- Run any JavaScript file from Node using `node filename.js`.

## 4. Modules

- Modules are basic containers in Node/JavaScript, with one file representing one module.
- Two types of Module Systems in Node JS are CommonJS and ES Modules.

### A. CommonJS Module

```javascript
// lib.js
exports.sum = function() {}

// index.js
const module = require('./lib.js')
module.sum()
```

### B. ES Module

```javascript
// lib.js
export { sum }

// index.js
import { sum } from './lib.js'
```

### C. Core Modules

- The FileSystem Module (fs) is one of the core modules in Node JS. Check NodeJS API docs for more core modules.

## 5. File Operations

- Reading files can be synchronous or asynchronous, with asynchronous being the preferred method in NodeJS.
- No blocking of I/O in NodeJS.

## 6. Node Project Initialization

- Initialize a Node project with `npm init`, which also creates the `package.json` file.
- `package.json` is a configuration file for Node projects containing scripts, dependencies, devDependencies, etc.

## 7. NPM Commands

- Use `npm install <package-name>` to install online modules from the NPM repository.
- Use `nodemon` for running Node servers and tracking live changes.
- Execute scripts inside `package.json` with `npm run <script-name>`, e.g., `npm run dev`.
- Global Installations: Use `npm install -g <package-name>` to install packages globally on your system.

## 8. Node Versions

- Node versions are formatted as major.minor.patch (e.g., 4.1.9).
- Reinstall all dependencies using `npm install` if needed.

## 9. Package Locking & Updating

- `package-lock.json` contains exact versions and dependency links.
- Updating Packages: Safely update packages with `npm update`. Identify outdated packages with `npm outdated`.
- Managing Packages: Uninstall packages from `package.json` using `npm uninstall <package-name>`.

## 10. Project Structure

- `node_modules` should not be shared; use `.gitignore` to exclude it from version control.

---

# Assignments

## Assignment 1

If we delete `node_modules`, how to run our application again successfully? In such a situation, open CMD in the root folder where `package.json` is present and run:

```bash
npm install
```

This command reads the dependencies and devDependencies from your `package.json` file and installs the required packages in the `node_modules` directory. Then run:

```bash
npm start
# or
npm run dev
```

## Assignment 2

How to use command line arguments in Node JS. Like `node index.js 3 2` - how can I get 3 and 2 to be used in my programs.

Hint: Search for command line arguments in Node.

Ans: To use command line arguments in Node JS, such as `node index.js 3 2`, access the arguments in your program using `process.argv`. The actual command line arguments start from the third element of the array onward.

## Assignment 3

Explore the os module in Node Js from their documentation. What all info can you access from it about your operating system?

Ans:
- `os.cpus()`: Returns an array of objects containing information about each logical CPU core, including details like model, speed, and times.
- `os.freemem()`: Returns the amount of free system memory in bytes.
- `os.totalmem()`: Returns the total amount of system memory in bytes.
- `os.hostname()`: Returns the hostname of the operating system.
- `os.platform()`: Returns a string identifying the operating system platform, such as "darwin" (macOS), "win32" (Windows), or "linux".

## Assignment 4

Explore the asynchronous nature of JS as a single-threaded language and how it is achieved using Event Loop.

Ans: JavaScript is a single-threaded, non-blocking, asynchronous language. This is achieved through an event-driven, event loop mechanism. The event loop continuously checks the message queue for new tasks to execute. When an asynchronous task is completed, a callback function is added to the message queue. The event loop then picks up these callbacks and executes them.
