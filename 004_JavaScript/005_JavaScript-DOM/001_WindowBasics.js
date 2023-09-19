/*********************************************************************-----Window---*************************************************************

In JavaScript, the window object is a global object provided by web browsers, and it represents the current browser window or tab
Window have DOM, BOM and all global js core functions and objects , we can access window from anywhere in js code because it is top
most level global object  for interacting with the browser's environment */

// Access the document object
let documentObject = window.document;

// Get the current URL
let currentURL = window.location.href;

// Display an alert dialog
window.alert("Hello, world!");

// Open a new browser window
let newWindow = window.open("https://www.example.com", "NewWindow", "width=400,height=300");

// Close the current window after a delay
setTimeout(function() {
    window.close();
}, 5000);




