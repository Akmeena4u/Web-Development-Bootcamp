//The HTML DOM allows JavaScript to change the content of HTML element



//#1-*******************************************----------------Accessing HTML elemnts using DOM--------------******************************************

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





//**************************************----------------------Modifying HTML Content Using DOM------------------***************************************


//Changing HTML content using the Document Object Model (DOM) in JavaScript is a fundamental way to manipulate and update web page content dynamically
// without needing to reload the entire page

    //#1-Changing Text Content: You can change the text content of an HTML element using the textContent or innerText property.
           // Get an element by its ID
              const element = document.getElementById('myElement');
           // Change its text content
              element.textContent = 'New Text Content';

   //#2- Changing HTML Content: If you want to change the inner HTML of an element (including HTML tags), you can use the innerHTML property
            // Get an element by its ID
                const element = document.getElementById('myElement');
            // Change its HTML content
                element.innerHTML = '<p>New <em>HTML</em> Content</p>';



   //#3- Changing Attribute Values: You can modify attribute values of HTML elements using the setAttribute method or by directly accessing the attribute properties:
            // Get an element by its ID
                 const link = document.getElementById('myLink');
            // Change the href attribute
                  link.setAttribute('href', 'https://www.example.com');
            // Or, directly change an attribute property
                  link.href = 'https://www.example.com';


    //#4-Creating New Elements: You can create new HTML elements and add them to the DOM using methods like createElement and appendChild:
            // Create a new <p> element
                  const newParagraph = document.createElement('p');
            // Set its text content
                  newParagraph.textContent = 'This is a new paragraph';
           // Append it to an existing element
                 const container = document.getElementById('container');
                 container.appendChild(newParagraph);


   //#5-  Removing Elements:-You can remove elements from the DOM using the remove method:
           // Get an element by its ID
                 const elementToRemove = document.getElementById('elementToRemove');
          // Remove it from the DOM
               elementToRemove.remove();


   //#6-document.write():-In JavaScript, document.write() can be used to write directly to the HTML output stream:
              document.write(Date());
