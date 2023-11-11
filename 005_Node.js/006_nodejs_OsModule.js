
/*

The os module in Node.js provides a way to interact with the operating system. It offers various methods to retrieve information about the operating system,
such as CPU architecture, memory usage, and platform details.

*/


const os = require('os');

console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.platform())
console.log(os.release())
console.log(os.type())



//To run system commands from Node.js and store the output in a text file, you can use the child_process module. 
// index.js
const { exec } = require('child_process');
const fs = require('fs');

// Run the ls (or dir on Windows) command
exec('ls', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  // Store the output in a text file
  fs.writeFileSync('output.txt', stdout);

  console.log('Command Output:', stdout);
});


//This will execute the ls command (or dir on Windows), store the output in output.txt, and log the output to the console.
