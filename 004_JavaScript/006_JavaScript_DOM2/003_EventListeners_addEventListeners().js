/*Adding event listeners in JavaScript allows you to respond to various events that occur on DOM elements, such as clicks, mouse movements, keyboard inputs, and more. 

addEventListeners working
1-Listen to events
2-responds to events

basic syntax of addEventListenser()

   <event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-event-happened()>);  
                                      or
     element.addEventListener(event, function, useCapture);                                 
    
                                   
   */


//#1-Add an Event Handler to an Element
const element = document.getElementById('myelement');
element.addEventListener("click", function(){ alert("Hello World!"); });
//or- using external names function
element.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}



//#2-Add Many Event Handlers to the Same Element
element.addEventListener("click", myFunction);
element.addEventListener("click", mySecondFunction);

//we can add events of different types to the same element:
element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);
  
