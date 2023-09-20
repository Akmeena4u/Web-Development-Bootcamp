/*The removeEventListener() method removes event handlers that have been attached with the addEventListener() method:
/syntax---    element.removeEventListener(eventType, eventHandlerFunction, useCapture);
              useCapture (optional): A Boolean value that indicates whether the event listener was added in the capturing phase (true) or the bubbling phase (false, default).


Note_Things to keep in mind- in removeEventListener() function u should use same target, same type , same eventhandler function that u passed in addEventListener() function*/


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


