# Accessing CSS Selectors and Manipulating CSS Styles Using DOM

## Accessing CSS Selectors Using DOM

### getElementById
```javascript
var element = document.getElementById("myId");
```

### getElementsByClassName
```javascript
var elements = document.getElementsByClassName("myClass");
```

### getElementsByTagName
```javascript
var elements = document.getElementsByTagName("div");
```

### querySelector
```javascript
var element = document.querySelector(".myClass");
```

### querySelectorAll
```javascript
var elements = document.querySelectorAll("p");
```

### getElementByName
```javascript
var elements = document.getElementsByName("myName");
```

### Parent-Child Relationship
```javascript
var parentElement = document.getElementById("parent");
var children = parentElement.childNodes;
```

### Traversal Methods
```javascript
var element = document.getElementById("myId");
var nextElement = element.nextSibling;
var parentElement = element.parentNode;
```

## Manipulation of CSS Styles Using DOM

### Using the style Property
```javascript
const element = document.getElementById('myElement');
element.style.backgroundColor = 'lightblue';
element.style.fontSize = '18px';
element.style.margin = '10px';
```

### Adding or Removing CSS Classes
```javascript
const element = document.getElementById('myElement');
element.classList.add('my-class');
element.classList.remove('other-class');
```

### Applying CSS as a String of Attributes
```javascript
const element = document.getElementById('myElement');
element.style.cssText = 'color: red; background-color: yellow; font-size: 20px;';
```

These methods allow you to access CSS selectors in the DOM and dynamically manipulate CSS styles of HTML elements.
