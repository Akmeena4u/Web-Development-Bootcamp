

### Creating and Running a Basic Node.js Program

#### Introduction
- Here we'll write our first Node.js code: "Hello World".
- We'll cover some important concepts and steps to set up and run a simple Node.js program.

#### Setting Up the Project
1. **Create an Empty Folder**:
   - Create a new folder named "NodeJS" (or any name you prefer).

2. **Create a New Folder for the First Program**:
   - Inside the "NodeJS" folder, create a new folder named "HelloWorld" (as it's our first program).

3. **Open the Project in a Code Editor**:
   - Open the "HelloWorld" folder in your favorite code editor (e.g., VS Code).

#### Writing the First Program
1. **Create a New JavaScript File**:
   - Create a new file named `hello.js`.
   - Write the following code in `hello.js`:
     ```javascript
     console.log("Hey there, I am just a simple Node.js program.");
     ```

2. **Running the JavaScript File**:
   - Open the integrated terminal in your code editor.
   - Execute the file using Node.js by running:
     ```sh
     node hello.js
     ```
   - This will print "Hey there, I am just a simple Node.js program." in the terminal.

#### Understanding the Node.js Environment
1. **No `window` Object in Node.js**:
   - Unlike browsers, Node.js does not have the `window` object.
   - For example, running `console.log(window)` in Node.js will result in an error: "window is not defined".
   - However, running `console.log(window)` in a browser's console will log the `window` object.

2. **Node.js as a Runtime Environment**:
   - Node.js uses the V8 engine (used in Chrome) to execute JavaScript on the server-side.
   - It doesn't include browser-specific objects like `window`, `document`, etc.

3. **Additional Features in Node.js**:
   - Node.js includes features necessary for server-side programming, such as file handling, cryptography, etc.
   - It removes browser-specific functionalities that are not needed on the server.

---

#### Using `npm` (Node Package Manager)
1. **Initializing a Project with `npm`**:
   - `npm` stands for Node Package Manager and is used to manage project dependencies.
   - Initialize a project by running:
     ```sh
     npm init
     ```
   - Follow the prompts to set up your project's configuration.

2. **Understanding `package.json`**:
   - `package.json` is a configuration file created by `npm init`.
   - It includes details about the project like name, version, description, entry point, scripts, author, license, and dependencies.

3. **Creating and Running Scripts**:
   - You can define custom scripts in `package.json` under the "scripts" section.
   - For example, add a "start" script to run your program:
     ```json
     "scripts": {
       "start": "node hello.js"
     }
     ```
   - Run the script using:
     ```sh
     npm start
     ```

#### Conclusion
- We've learned how to create and run a simple Node.js program.
- We understood the differences between the Node.js environment and the browser environment.
- We explored the usage of `npm` to initialize a project and manage dependencies.
