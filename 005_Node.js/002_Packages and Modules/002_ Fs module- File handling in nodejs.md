
### File Handling in Node.js
- The Node.js File System (FS) module is a core module that provides functionality for working with the file system. With this module, you can perform various file-related operations, such as reading from and writing to files, creating and deleting directories, and more.


#### Setting Up
1. **Create a New JS File**: Name it `file.js` (do not name it `fs.js` to avoid confusion with the `fs` module).

#### Importing the File System Module
- Import the `fs` module to interact with the file system.
  ```javascript
  const fs = require('fs');
  ```

---

#### Writing to a File
1. **Synchronous Write**:
   ```javascript
   fs.writeFileSync('./test.txt', 'Hello');
   ```
   - This creates or overwrites `test.txt` with the content "Hello".

2. **Asynchronous Write**:
   ```javascript
   fs.writeFile('./test.txt', 'Hello', (err) => {
     if (err) throw err;
     console.log('File has been written');
   });
   ```
---

#### Reading from a File
1. **Synchronous Read**:
   ```javascript
   const data = fs.readFileSync('./contacts.txt', 'utf8');
   console.log(data);
   ```

2. **Asynchronous Read**:
   ```javascript
   fs.readFile('./contacts.txt', 'utf8', (err, data) => {
     if (err) throw err;
     console.log(data);
   });
   ```

---

#### Understanding Synchronous vs. Asynchronous
- **Synchronous**: Blocks the execution until the operation completes. Returns the result directly.
- **Asynchronous**: Does not block execution. Uses callbacks to handle results.

---

#### Append Data to a File
1. **Synchronous Append**:
   ```javascript
   fs.appendFileSync('./test.txt', '\nNew Data');
   ```

2. **Asynchronous Append**:
   ```javascript
   fs.appendFile('./test.txt', '\nNew Data', (err) => {
     if (err) throw err;
     console.log('Data has been appended');
   });
   ```

---

#### File System Operations
1. **Copy a File**:
   ```javascript
   fs.copyFileSync('./test.txt', './copy.txt');
   ```

2. **Delete a File**:
   ```javascript
   fs.unlinkSync('./copy.txt');
   ```

3. **Check File Statistics**:
   ```javascript
   const stats = fs.statSync('./test.txt');
   console.log(stats);
   ```

4. **Create a Directory**:
   ```javascript
   fs.mkdirSync('./myDirectory');
   ```

5. **List Directory Contents**:
   ```javascript
   const files = fs.readdirSync('./');
   console.log(files);
   ```

---

#### Summary
- **fs Module**: Used for file operations in Node.js.
- **Synchronous Methods**: Block execution, suitable for small, quick operations.
- **Asynchronous Methods**: Non-blocking, use callbacks, suitable for longer tasks.

#### Important Concepts
- **Event Loop**: Understand how Node.js handles asynchronous operations.
- **Blocking vs. Non-Blocking**: Crucial for writing efficient Node.js applications.

Ensure you understand these concepts as they are foundational for backend development and crucial for interviews and application performance.
