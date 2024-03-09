/***********************************************************-------------------JS BOM-------------*******************************************************

In JavaScript, BOM stands for Browser Object Model. The Browser Object Model is a set of objects and APIs provided by web browsers to interact with and control
various aspects of the browser itself, as opposed to the Document Object Model (DOM), which deals with the structure and content of web documents.*/

Certainly! Let's differentiate between BOM (Browser Object Model) and DOM (Document Object Model) with some simple JavaScript code examples.

### DOM (Document Object Model):

The DOM represents the structure of an HTML or XML document as a tree of objects. It provides a way for programs to dynamically access and manipulate the content, structure, and style of a document.

Example code to manipulate the DOM:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Example</title>
</head>
<body>
  <div id="myDiv">
    <p>Hello, DOM!</p>
  </div>

  <script>
    // Accessing and manipulating the DOM
    const myDiv = document.getElementById('myDiv');
    const paragraph = document.createElement('p');
    paragraph.textContent = 'New content!';
    myDiv.appendChild(paragraph);
  </script>
</body>
</html>
```

In this example, JavaScript is used to access an element with the id "myDiv" and add a new paragraph to it. This demonstrates the manipulation of the document structure through the DOM.

### BOM (Browser Object Model):

The BOM represents everything else in the browser outside of the document, including objects like `window`, `navigator`, `location`, and `screen`.

Example code illustrating the BOM:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BOM Example</title>
</head>
<body>
  <script>
    // Accessing BOM properties
    const windowHeight = window.innerHeight;
    const currentURL = window.location.href;

    console.log('Window height:', windowHeight);
    console.log('Current URL:', currentURL);
  </script>
</body>
</html>
```

In this example, JavaScript is used to access properties of the BOM, such as the window's inner height and the current URL. These properties are part of the browser environment and are not directly related to the document structure.

In summary, while the DOM is focused on the structure and manipulation of the document, the BOM deals with browser-specific properties and methods outside the document structure.



