
## Removing Event Listeners in JavaScript

The `removeEventListener()` method is used to remove event handlers that have been attached with the `addEventListener()` method.

### Syntax

```javascript
element.removeEventListener(eventType, eventHandlerFunction, useCapture);
// useCapture (optional): A Boolean value indicating whether the event listener was added in the capturing phase (true) or the bubbling phase (false, default).
```

### Note: Things to Keep in Mind

- Use the same target (element).
- Use the same event type.
- Use the same event handler function that you passed in the `addEventListener()` function.

### Example:

```javascript
const button = document.getElementById('myButton');

function clickHandler() {
  alert('Button clicked!');
}

// Add a click event listener to the button
button.addEventListener('click', clickHandler);

// Remove the click event listener after 3 seconds
setTimeout(function() {
  button.removeEventListener('click', clickHandler);
  alert('Event listener removed!');
}, 3000);
```

In this example, we add a click event listener to a button element, and after 3 seconds, we remove the event listener using `removeEventListener()`.
```
