The `path` module in Node.js provides utilities for working with file and directory paths. It can be used to manipulate and handle file paths, making it easier to work with files across different operating systems. Below are some key methods and examples of how to use the `path` module.

### Importing the `path` Module

To use the `path` module, you need to require it in your Node.js script:

```javascript
const path = require('path');
```

### Key Methods of the `path` Module

#### path.basename()

- **Description**: Returns the last portion of a path, typically the file name.
- **Syntax**: `path.basename(path[, ext])`
  - `path`: The path to process.
  - `ext`: (Optional) File extension to remove.
- **Example**:

```javascript
const filePath = '/home/user/docs/file.txt';
console.log(path.basename(filePath)); // Output: file.txt
console.log(path.basename(filePath, '.txt')); // Output: file
```

#### path.dirname()

- **Description**: Returns the directory name of a path.
- **Syntax**: `path.dirname(path)`
  - `path`: The path to process.
- **Example**:

```javascript
const filePath = '/home/user/docs/file.txt';
console.log(path.dirname(filePath)); // Output: /home/user/docs
```

#### path.extname()

- **Description**: Returns the extension of the path.
- **Syntax**: `path.extname(path)`
  - `path`: The path to process.
- **Example**:

```javascript
const filePath = '/home/user/docs/file.txt';
console.log(path.extname(filePath)); // Output: .txt
```

#### path.join()

- **Description**: Joins all given path segments together using the platform-specific separator as a delimiter.
- **Syntax**: `path.join([...paths])`
  - `...paths`: The path segments to join.
- **Example**:

```javascript
const directory = '/home/user/docs';
const fileName = 'file.txt';
console.log(path.join(directory, fileName)); // Output: /home/user/docs/file.txt
```

#### path.resolve()

- **Description**: Resolves a sequence of paths or path segments into an absolute path.
- **Syntax**: `path.resolve([...paths])`
  - `...paths`: The path segments to resolve.
- **Example**:

```javascript
console.log(path.resolve('file.txt')); // Output: Absolute path to file.txt in the current directory
console.log(path.resolve('/home', 'user/docs', 'file.txt')); // Output: /home/user/docs/file.txt
```

#### path.parse()

- **Description**: Returns an object whose properties represent significant elements of the path.
- **Syntax**: `path.parse(path)`
  - `path`: The path to process.
- **Example**:

```javascript
const filePath = '/home/user/docs/file.txt';
console.log(path.parse(filePath));
// Output: { root: '/', dir: '/home/user/docs', base: 'file.txt', ext: '.txt', name: 'file' }
```

#### path.format()

- **Description**: Returns a path string from an object.
- **Syntax**: `path.format(pathObject)`
  - `pathObject`: The path object.
- **Example**:

```javascript
const pathObject = {
  dir: '/home/user/docs',
  base: 'file.txt'
};
console.log(path.format(pathObject)); // Output: /home/user/docs/file.txt
```

#### path.relative()

- **Description**: Returns the relative path from one directory to another.
- **Syntax**: `path.relative(from, to)`
  - `from`: The starting directory.
  - `to`: The target directory.
- **Example**:

```javascript
const from = '/home/user/docs';
const to = '/home/user/photos';
console.log(path.relative(from, to)); // Output: ../photos
```

### Example Script

Here’s an example script demonstrating the usage of the above methods:

```javascript
const path = require('path');

const filePath = '/home/user/docs/file.txt';

console.log('Basename:', path.basename(filePath)); // Output: file.txt
console.log('Dirname:', path.dirname(filePath)); // Output: /home/user/docs
console.log('Extname:', path.extname(filePath)); // Output: .txt
console.log('Join:', path.join('/home/user', 'docs', 'file.txt')); // Output: /home/user/docs/file.txt
console.log('Resolve:', path.resolve('file.txt')); // Output: Absolute path to file.txt in the current directory

const parsedPath = path.parse(filePath);
console.log('Parsed Path:', parsedPath);
// Output: { root: '/', dir: '/home/user/docs', base: 'file.txt', ext: '.txt', name: 'file' }

const formattedPath = path.format(parsedPath);
console.log('Formatted Path:', formattedPath); // Output: /home/user/docs/file.txt

console.log('Relative Path:', path.relative('/home/user/docs', '/home/user/photos')); // Output: ../photos
```

### Conclusion

The `path` module in Node.js is a powerful utility for handling and transforming file paths, ensuring compatibility across different operating systems. Understanding how to use the `path` module effectively can simplify file operations and improve the portability of your code.
