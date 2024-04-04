
# Window Object in JavaScript

The `window` object in JavaScript represents the current browser window or tab. It is a global object provided by web browsers and serves as the top-level global object for interacting with the browser's environment.

## Accessing Document Object
You can access the document object within the window to manipulate the HTML document.

```javascript
let documentObject = window.document;
```

## Getting Current URL
You can retrieve the current URL of the window using `window.location.href`.

```javascript
let currentURL = window.location.href;
```

## Displaying an Alert
To display an alert dialog in the browser window, use `window.alert()`.

```javascript
window.alert("Hello, world!");
```

## Opening a New Browser Window
You can open a new browser window/tab using `window.open()`.

```javascript
let newWindow = window.open("https://www.example.com", "NewWindow", "width=400,height=300");
```

The `window.open()` method takes three parameters:
1. URL to be opened (`https://www.example.com`)
2. Name of the new window/tab ("NewWindow")
3. Options for the new window (e.g., width and height)

## Closing the Window
You can close the current window using `window.close()`.

```javascript
setTimeout(function() {
    window.close();
}, 5000); // Close the window after 5 seconds
```

Keep in mind that the `window.close()` method may not work if the window was not opened by JavaScript (e.g., manually opened by the user).


This markdown note provides an overview of the `window` object in JavaScript, including how to access the document object, get the current URL, display alerts, open new windows, and close windows. It also includes code snippets for each functionality and explanations of their usage.
