//In JavaScript, there are several methods for accessing elements in the Document Object Model (DOM). 

//#1-getElementById: This method retrieves an element by its unique ID attribute.
var element = document.getElementById("myId");

//#2-getElementsByClassName: This method returns a collection of elements with a specific class name.
var elements = document.getElementsByClassName("myClass");

//#3-getElementsByTagName: This method returns a collection of elements with a specific HTML tag name.
var elements = document.getElementsByTagName("div");

//#4-querySelector: This method returns the first element that matches a specified CSS selector.
var element = document.querySelector(".myClass");

//#5-querySelectorAll: This method returns a NodeList containing all elements that match a specified CSS selector.
var elements = document.querySelectorAll("p");

//#6-getElementByName: This method returns a collection of form elements with a specific name attribute.
var elements = document.getElementsByName("myName");

//#7-Parent-Child Relationship: You can navigate the DOM tree using parent-child relationships. For example, we can access child elements of a parent element using the childNodes property.
var parentElement = document.getElementById("parent");
var children = parentElement.childNodes;

//#8-Traversal Methods: You can traverse the DOM using methods like nextSibling, previousSibling, parentNode, and children.
var element = document.getElementById("myId");
var nextElement = element.nextSibling;
var parentElement = element.parentNode;





