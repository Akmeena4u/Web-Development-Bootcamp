
# Document Object Model (DOM) Objects in JavaScript

The Document Object Model (DOM) provides access to various HTML objects and object collections within a web page.

## 1. Document
- Represents the top-level object representing the entire HTML document.
```javascript
var documentObject = document;
```

## 2. document.anchors
- Represents a collection of all anchor (<a>) elements in the document.
```javascript
var anchors = document.anchors;
```

## 3. document.body
- Represents the <body> element of the document.
```javascript
var bodyElement = document.body;
```

## 4. document.documentElement
- Represents the root <html> element of the document.
```javascript
var htmlElement = document.documentElement;
```

## 5. document.embeds
- Represents a collection of embedded elements, typically used for multimedia.
```javascript
var embeds = document.embeds;
```

## 6. document.forms
- Represents a collection of all HTML forms (<form>) in the document.
```javascript
var forms = document.forms;
```

## 7. document.head
- Represents the <head> element of the document, which contains metadata and external resources.
```javascript
var headElement = document.head;
```

## 8. document.images
- Represents a collection of all <img> elements in the document.
```javascript
var images = document.images;
```

## 9. document.links
- Represents a collection of all anchor (<a>) elements that have the href attribute in the document.
```javascript
var links = document.links;
```

## 10. document.scripts
- Represents a collection of all <script> elements in the document.
```javascript
var scripts = document.scripts;
```

## 11. document.title
- Represents the title of the document as specified in the <title> element.
```javascript
var documentTitle = document.title;
```

These objects and collections allow JavaScript to interact with and manipulate various elements and metadata of the HTML document.
