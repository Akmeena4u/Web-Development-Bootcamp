import url from 'url';


const myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL)
console.log(myURL.href)


//The Node.js URL module is a core module that provides utilities for working with URLs (Uniform Resource Locators). It allows you to parse, format, and manipulate URLs easily. 
