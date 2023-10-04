/*Measuring the performance of JavaScript code is essential for identifying bottlenecks and optimizing your applications.
There are several tools and techniques you can use to measure JavaScript code performance and we can also use to comapre two solutions :*/

//#1-Console Logging: 
console.time("myCode");
// Your code here
console.timeEnd("myCode");


//#2-Performance.now(): The performance.now() method provides a high-resolution time stamp, which can be used to measure the elapsed time in milliseconds.
const start = performance.now();
// Your code here
const end = performance.now();
console.log(`Execution time: ${end - start} milliseconds`);

//#3-Profiling Tools:
//Chrome DevTools: The Performance tab in Google Chrome's DevTools allows you to record and analyze the performance of your JavaScript code.
