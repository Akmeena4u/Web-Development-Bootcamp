/*


The Node.js File System (FS) module is a core module that provides functionality for working with the file system. With this module, you can perform various file-related operations, such as reading from and writing to files, creating and deleting directories, and more.

Reading Files:
fs.readFile(): Reads the contents of a file asynchronously and provides the data in a callback function.
fs.readFileSync(): Reads the contents of a file synchronously and returns the data.


Writing Files:
fs.writeFile(): Writes data to a file asynchronously. If the file doesn't exist, it will be created. If it does exist, its content will be overwritten.
fs.writeFileSync(): Writes data to a file synchronously.

Creating and Deleting Files:
fs.unlink(): Deletes a file.
fs.rename(): Renames a file.
fs.mkdir(): Creates a directory.
fs.rmdir(): Deletes a directory.

*/






const fs = require('fs'); 

// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     console.log(err, data)
// })



// const a = fs.readFileSync('file.txt')

// console.log(a.toString())

// fs.writeFile('file2.txt', "This is a data", ()=>{
//     console.log("Written to the file")
// });



/*fs.unlink('file.txt', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File deleted successfully.'); */

b = fs.writeFileSync('file2.txt', "This is a data2")
console.log(b)
console.log("Finished reading file")
