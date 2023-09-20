/*To insert HTML content adjacent to an element in the Document Object Model (DOM)

//#1--insertAdjacentHTML():
The insertAdjacentHTML() method allows you to insert HTML content as a string into a specified position relative to an element.
This method takes two arguments: the position where you want to insert the HTML content and the HTML string you want to insert.*/

const element = document.getElementById('myElement');
const htmlContent = '<p>This is the new content</p>';

// Insert HTML content before the element
element.insertAdjacentHTML('beforebegin', htmlContent);

// Insert HTML content as the first child of the element
element.insertAdjacentHTML('afterbegin', htmlContent);

// Insert HTML content as the last child of the element
element.insertAdjacentHTML('beforeend', htmlContent);

// Insert HTML content after the element
element.insertAdjacentHTML('afterend', htmlContent);



//#2-createElement() and appendChild():
 //If you want to insert actual elements rather than HTML strings, you can create elements using document.createElement() and insert them using the appendChild() method.

const element = document.getElementById('myElement');
const newElement = document.createElement('p');
newElement.textContent = 'This is the new content';

// Insert the new element as the last child of the element
element.appendChild(newElement);
