//The HTML DOM allows JavaScript to change the style of HTML elements.

//**************************************************---------Accessing CSS selectors using DOM--------****************************************************


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



//************************************------Manipulation IN CSS style using DOM-------**********************************************************************
  //CSS manipulation using the Document Object Model (DOM) in JavaScript involves changing the style properties of HTML elements dynamically

  //1. Using the style Property:

       const element = document.getElementById('myElement');
       // Change background color
       element.style.backgroundColor = 'lightblue';
      // Change font size
       element.style.fontSize = '18px';
      // Change margin
        element.style.margin = '10px';


//2- Adding or Removing CSS Classes: An alternative to directly manipulating CSS properties is to add or remove CSS classes from elements.
//This approach is especially useful when you have predefined CSS styles in your stylesheet.

       const element = document.getElementById('myElement');
       // Add a CSS class
       element.classList.add('my-class');
       // Remove a CSS class
        element.classList.remove('other-class');
        //Applying CSS as a string of attributes
       element.style.cssText = 'color: red; background-color: yellow; font-size: 20px;';

