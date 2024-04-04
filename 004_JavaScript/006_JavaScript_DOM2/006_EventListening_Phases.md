
## Event Propagation Phases in JavaScript

In JavaScript, events go through two main phases during their lifecycle: the capturing phase and the bubbling phase.

### 1. Capturing Phase:

In the capturing phase, the event starts at the root of the DOM tree (usually the document object) and moves down to the target element where the event occurred. Event listeners added with the `useCapture` parameter set to `true` are triggered during this phase.

To listen for an event during the capturing phase, you can use the `addEventListener` method with the `useCapture` parameter set to `true`:
```javascript
element.addEventListener(eventType, eventHandlerFunction, true);
```

Example:
```javascript
const myDiv = document.getElementById('myDiv');

// Add a click event listener during the capturing phase
myDiv.addEventListener('click', function(event) {
  console.log('Capturing Phase: Clicked on the div');
}, true);
```

### 2. Bubbling Phase:

After the target phase, the event moves from the target element and bubbles up the DOM tree towards the root. Event listeners without the `useCapture` parameter or with `useCapture` set to `false` are triggered during this phase.

Example:
```javascript
const myDiv = document.getElementById('myDiv');

// Add a click event listener (bubbling phase)
myDiv.addEventListener('click', function(event) {
  console.log('Bubbling Phase: Clicked on the div');
});
```

In the above example, the first event listener captures the click event during the capturing phase, while the second event listener captures the event during the bubbling phase.

Understanding event propagation phases is important for handling events effectively and managing event flow in your JavaScript applications.
