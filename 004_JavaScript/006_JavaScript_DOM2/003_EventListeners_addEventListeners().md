
## Adding Event Listeners in JavaScript

Adding event listeners in JavaScript allows you to respond to various events that occur on DOM elements, such as clicks, mouse movements, keyboard inputs, and more.

### Working of addEventListener()

1. Listen to Events: Specify the event you want to listen for, such as "click," "mouseover," "keydown," etc.
2. Respond to Events: Define a function or handler that runs when the specified event occurs.

### Basic Syntax of addEventListener()

```javascript
<event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-event-happens>);
// or
element.addEventListener(event, function, useCapture);
```

### Examples:

#### 1. Add an Event Handler to an Element

```javascript
const element = document.getElementById('myelement');
element.addEventListener("click", function(){ alert("Hello World!"); });
// or using an external named function
element.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}
```

#### 2. Add Many Event Handlers to the Same Element

```javascript
element.addEventListener("click", myFunction);
element.addEventListener("click", mySecondFunction);

// We can add events of different types to the same element:
element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);
```

These examples demonstrate how to use `addEventListener` to listen for events on DOM elements and respond to them by executing functions or handlers.
