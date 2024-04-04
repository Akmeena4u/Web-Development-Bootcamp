
# JavaScript Browser Object Model (BOM) vs. Document Object Model (DOM)

## DOM (Document Object Model):
The DOM represents the structure of an HTML or XML document as a tree of objects. It allows programs to dynamically access and manipulate the content, structure, and style of a document.

Example DOM manipulation code:
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

## BOM (Browser Object Model):
The BOM represents everything else in the browser outside of the document, including objects like `window`, `navigator`, `location`, and `screen`.

Example BOM code accessing browser properties:
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

In the DOM example, JavaScript manipulates the document's structure by creating and appending elements. In the BOM example, JavaScript accesses properties like window height and current URL, which are part of the browser environment outside the document.

In summary, the DOM focuses on document structure and content manipulation, while the BOM deals with browser-specific properties and methods.
