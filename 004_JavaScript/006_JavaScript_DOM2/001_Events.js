//In JavaScript, events are actions or occurrences that happen in the browser, such as a user clicking a button, typing into a text field,
//or a webpage finishing loading. You can use JavaScript to handle these events and define how your web page should respond when these events occur

//************************************--------------------Common Inline  Events in JS------------------************************************************************

//#1-onclick Event: The onclick event is triggered when an element is clicked. 
     <button id="myButton">Click me</button>
     <script>
      const button = document.getElementById('myButton');
      button.onclick = function() {
       alert('Button clicked!');
     };
    </script>


//#2-onmouseover Event: The onmouseover event is triggered when the mouse pointer enters an element.
     <div id="myDiv" onmouseover="showMessage()">Hover over me</div>
      <script>
      function showMessage() {
      alert('Mouse over the div!');
     }
     </script>

//#3-onmouseout Event: Occurs when the mouse pointer leaves an element.
<div id="myElement" onmouseout="alert('Mouse out!')">Hover over me</div>


//#4-onload Event: Occurs when the web page finishes loading.
   <body onload="alert('Page loaded!')">
  <!-- Page content -->
</body>


//#5-onchange Event: Occurs when the value of a form element changes (e.g., input, select).
<input type="text" id="myInput" onchange="alert('Value changed!')">


//NOTE --
      //#1-WE can see all events in our console using 
      // SEE all events 
        console.log(monitorEvents(document));

       //#2-We can Hide all events in js 
       // not SEE events 
        console.log(unmonitorEvents(document)); 

