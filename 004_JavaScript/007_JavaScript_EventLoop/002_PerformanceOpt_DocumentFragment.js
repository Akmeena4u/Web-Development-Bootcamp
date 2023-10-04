/*Optimizing JavaScript code performance is crucial for delivering a fast and responsive web application. 

Reflow and repaint are two fundamental processes in web browsers that occur when the layout and appearance of a web page need to be updated.
Understanding these processes is essential for optimizing the performance of your web applications. Document fragments can be used to help
manage these processes more efficiently.

reflow-- Reflow is the process by which the browser calculates the layout of elements on a web page. It computes the size and position of every 
element based on the DOM tree and the CSS styles applied to those elements.

Repaint (Rendering)- Repaint is the process of updating the visual appearance of elements on a web page without changing their layout.
repainting is faster than reflow

IMP--When reflow and repainting is high code optimization will be low

A DocumentFragment in JavaScript is a lightweight, in-memory representation of the DOM (Document Object Model) that allows you to group and manipulate 
a collection of DOM nodes offscreen before appending them to the main DOM.
document fragment minimizes repaint and reflows*/

// Create a DocumentFragment
const fragment = document.createDocumentFragment();

// Create DOM elements and add them to the fragment
const div1 = document.createElement('div');
div1.textContent = 'Element 1';
fragment.appendChild(div1);

const div2 = document.createElement('div');
div2.textContent = 'Element 2';
fragment.appendChild(div2);

// Continue to manipulate and add more elements to the fragment

// Insert the fragment into the document
const container = document.getElementById('container');
container.appendChild(fragment);
