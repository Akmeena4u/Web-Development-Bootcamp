/*In JavaScript, when an event occurs, an event object is automatically created and passed to the event handler function. 
This event object contains information about the event, such as the type of event, the target element, and other event-specific details.
Event handlers can access this event object to gather information about the event and perform actions based on it.*/

  
//#1-Accessing the Event Object: To access the event object in an event handler, you can simply include it as a parameter in the event handler function


  element.addEventListener('click', function(event) {
  // Access event properties using the 'event' object
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
});




//#2-  use  event object to detect a click event and prevent the default behavior of a link:
//NOte:- we can pass any word as place of event like e , xx, india etc 

let link = document.getElementById('link');
link.addEventListener('click',function(e)
{
    e.preventDefault();
});



//#3-event.stopPropagation(): A method that can be used to stop the event from propagating further in the DOM (stopping it from triggering other event listeners).

const button = document.getElementById('myButton');

button.addEventListener('click', function(event) {
  // Access event properties
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
  console.log('Current target element:', event.currentTarget);

  // Prevent the default behavior (e.g., following a link)
  event.preventDefault();

  // Stop the event from propagating further
  event.stopPropagation();
});
