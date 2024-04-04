
# Common Inline Events in JavaScript

Events in JavaScript are actions or occurrences that happen in the browser, such as a user clicking a button, typing into a text field, or a webpage finishing loading. Here are some common inline events in JavaScript along with examples:

## onclick Event
The `onclick` event is triggered when an element is clicked.
```html
<button id="myButton">Click me</button>
<script>
  const button = document.getElementById('myButton');
  button.onclick = function() {
    alert('Button clicked!');
  };
</script>
```

## onmouseover Event
The `onmouseover` event is triggered when the mouse pointer enters an element.
```html
<div id="myDiv" onmouseover="showMessage()">Hover over me</div>
<script>
  function showMessage() {
    alert('Mouse over the div!');
  }
</script>
```

## onmouseout Event
The `onmouseout` event occurs when the mouse pointer leaves an element.
```html
<div id="myElement" onmouseout="alert('Mouse out!')">Hover over me</div>
```

## onload Event
The `onload` event occurs when the web page finishes loading.
```html
<body onload="alert('Page loaded!')">
  <!-- Page content -->
</body>
```

## onchange Event
The `onchange` event occurs when the value of a form element changes (e.g., input, select).
```html
<input type="text" id="myInput" onchange="alert('Value changed!')">
```

### Note:
- You can see all events in the console using `monitorEvents(document)`.
- To hide all events in JavaScript, use `unmonitorEvents(document)`.


These examples demonstrate how to handle common events in JavaScript and define actions based on user interactions or page loading events.
