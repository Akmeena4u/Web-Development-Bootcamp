### Node.js Global Objects

Node.js provides several global objects that are available in all modules. These objects are not required to be imported and can be accessed directly. Below is an overview of the key global objects available in Node.js:

#### 1. **`__dirname`**

- **Description**: The directory name of the current module.
- **Example**:

    ```javascript
    console.log(__dirname);
    // Output: The directory path of the current module
    ```

#### 2. **`__filename`**

- **Description**: The file name of the current module (includes the complete path).
- **Example**:

    ```javascript
    console.log(__filename);
    // Output: The file path of the current module
    ```

#### 3. **`exports`**

- **Description**: An object that is used to expose variables or functions from a module.
- **Example**:

    ```javascript
    // myModule.js
    exports.myFunction = () => {
      console.log('Hello, world!');
    };
    ```

#### 4. **`module`**

- **Description**: A reference to the current module, and can be used to export and import modules.
- **Example**:

    ```javascript
    // myModule.js
    module.exports = {
      myFunction: () => {
        console.log('Hello, world!');
      }
    };
    ```

#### 5. **`require()`**

- **Description**: A function to import modules, JSON, and local files.
- **Example**:

    ```javascript
    const myModule = require('./myModule');
    myModule.myFunction(); // Output: Hello, world!
    ```

#### 6. **`global`**

- **Description**: An object that holds global variables that can be accessed from anywhere in the application.
- **Example**:

    ```javascript
    global.myGlobalVariable = 'This is a global variable';
    console.log(global.myGlobalVariable); // Output: This is a global variable
    ```

#### 7. **`process`**

- **Description**: An object that provides information about and control over the current Node.js process. It can be used for handling events, standard input/output, and more.
- **Example**:

    ```javascript
    console.log(process.version); // Output: The Node.js version
    console.log(process.argv); // Output: Array of command line arguments
    ```

- **Key Methods and Properties**:
  - **`process.exit([code])`**: Ends the process with the specified exit code (0 by default).
  - **`process.env`**: An object containing the user environment.
  - **`process.cwd()`**: Returns the current working directory.
  - **`process.nextTick(callback)`**: Schedules a callback function to be invoked in the next iteration of the event loop.

    ```javascript
    process.nextTick(() => {
      console.log('This will be executed in the next iteration of the event loop');
    });
    console.log('This will be executed first');
    ```

#### 8. **`console`**

- **Description**: Provides a simple debugging console similar to the JavaScript console mechanism provided by web browsers.
- **Example**:

    ```javascript
    console.log('Hello, world!'); // Output: Hello, world!
    console.error('An error occurred'); // Output: An error occurred
    ```

#### 9. **`setTimeout(callback, delay)`**

- **Description**: Executes a function after a specified delay.
- **Example**:

    ```javascript
    setTimeout(() => {
      console.log('Executed after 2 seconds');
    }, 2000);
    ```

#### 10. **`setInterval(callback, delay)`**

- **Description**: Repeatedly executes a function at specified intervals.
- **Example**:

    ```javascript
    setInterval(() => {
      console.log('Executed every 2 seconds');
    }, 2000);
    ```

#### 11. **`setImmediate(callback)`**

- **Description**: Executes a function immediately after the current event loop completes.
- **Example**:

    ```javascript
    setImmediate(() => {
      console.log('Executed immediately');
    });
    ```

#### 12. **`clearTimeout(timeoutObject)`**

- **Description**: Stops a `setTimeout` operation from executing.
- **Example**:

    ```javascript
    const timeout = setTimeout(() => {
      console.log('This will not be executed');
    }, 2000);

    clearTimeout(timeout);
    ```

#### 13. **`clearInterval(intervalObject)`**

- **Description**: Stops a `setInterval` operation from executing.
- **Example**:

    ```javascript
    const interval = setInterval(() => {
      console.log('This will not be executed');
    }, 2000);

    clearInterval(interval);
    ```

### Conclusion

Node.js global objects provide essential functionalities that are accessible throughout the application. Understanding these objects helps in writing more efficient and effective Node.js code, allowing you to manage the environment, handle asynchronous operations, and debug more effectively.
