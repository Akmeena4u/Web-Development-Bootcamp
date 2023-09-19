/*In JavaScript, $0 is a special variable that is often used in the browser's developer tools console. It represents the currently selected element in the Elements
panel of the browser's DevTools. It is a convenient way to interact with and manipulate the selected HTML element directly from the browser's console.

Here's how you can use $0:
1-Select an Element: In the browser's developer tools, go to the Elements panel and select an HTML element by clicking on it.
2-Access Properties: You can access properties and methods of the selected element directly from the console using $0. For example, you can access its properties or change its attributes.*/

// Access the innerHTML property of the selected element
console.log($0.innerHTML);

// Change the background color of the selected element
$0.style.backgroundColor = "yellow";

$0.textContent = "New Text";
$0.style.backgroundColor = "red";

