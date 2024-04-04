
# Accessing and Modifying HTML Content Using DOM

## Accessing HTML Elements Using DOM

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

## Modifying HTML Content Using DOM

### Changing Text Content
```javascript
const element = document.getElementById('myElement');
element.textContent = 'New Text Content';
```

### Changing HTML Content
```javascript
const element = document.getElementById('myElement');
element.innerHTML = '<p>New <em>HTML</em> Content</p>';
```

### Changing Attribute Values
```javascript
const link = document.getElementById('myLink');
link.setAttribute('href', 'https://www.example.com');
// Or directly
link.href = 'https://www.example.com';
```

### Creating New Elements
```javascript
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph';
const container = document.getElementById('container');
container.appendChild(newParagraph);
```

### Removing Elements
```javascript
const elementToRemove = document.getElementById('elementToRemove');
elementToRemove.remove();
```

### document.write()
```javascript
document.write(Date());
```

These methods provide powerful ways to access and modify HTML content dynamically in JavaScript using the DOM.
