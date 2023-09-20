/*In JavaScript, events go through multiple phases during their lifecycle. These phases are known as the event propagation phases,
and there are two main phases: the capturing phase and the bubbling phase

#1-Capturing Phase:
In the capturing phase, the event starts at the root of the DOM tree (typically the document object) and moves down to the target element where the event occurred.
Event listeners added with the useCapture parameter set to true are triggered during this phase.

To listen for an event during the capturing phase, you can use the addEventListener method with the useCapture parameter set to true*/

//element.addEventListener(eventType, eventHandlerFunction, useCapture);

  const myDiv = document.getElementById('myDiv');

  // Add a click event listener during the capturing phase
  myDiv.addEventListener('click', function(event) {
    console.log('Capturing Phase: Clicked on the div');
  }, true);


//#2-Target Phase:
//The event reaches the target element where it originally occurred.

//#3-Bubbling Phase:
//After the target phase, the event starts from the target element and bubbles up the DOM tree towards the root.
//Event listeners without the useCapture parameter or with useCapture set to false are triggered during this phase.

  const myDiv = document.getElementById('myDiv');

  // Add a click event listener (bubbling phase)
  myDiv.addEventListener('click', function(event) {
    console.log('Bubbling Phase: Clicked on the div');
  });
