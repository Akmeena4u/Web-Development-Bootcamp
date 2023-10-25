/*---------------------------------------------------------------------------react Event--------------------------------------------------------------------
React provides a way to handle various events in our components, allowing us to make our applications interactive and responsive. Just like HTML DOM events, React can perform actions based on user events.
React has the same events as HTML: click, change, mouseover etc.

Adding Events
React events are written in camelCase syntax: onClick instead of onclick.
React event handlers are written inside curly braces:   onClick={shoot}  instead of onClick="shoot()". */

//React:
<button onClick={shoot}>Take the Shot!</button>
//HTML:
<button onclick="shoot()">Take the Shot!</button>


 /*-------------------------------------------------------------------------------Event Handlers: ---------------------------------------------------------
 Event handlers are functions in your component that specify what should happen when a specific event occurs. They are defined like regular JavaScript functions:*/
function handleClick() {
  // Handle the click event
}


/*-----------------------------------------------------------------------Event Parameters:-------------------------------------------------------------------
In React, event handlers are automatically passed a synthetic event as the first argument. You can access the event properties and methods using this event object*/

function handleClick(event) {
  console.log(event.target); // Access the target element
}


/* -----------------------------------------------------------------------------Event Binding:---------------------------------------------------------------

   When using class components, make sure to bind the event handler functions to the component's context in the constructor or use arrow functions to avoid issues 
   with the value of this inside the handler:*/

// Binding in the Constructor: You can bind event handlers in the constructor of your class component.
   class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Event handling logic here
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}


//Arrow Function as Class Property: You can use class properties with arrow functions, which automatically bind the function to the class instance
 class MyComponent extends React.Component {
  handleClick = () => {
    // Event handling logic here
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}



/*-----------------------------------------------------------------Preventing Default Behavior:------------------------------------------------------------

 In React, you can use the preventDefault() method on the event object to stop the default action associated with certain events. This is often used with elements 
 like forms and anchor tags to prevent the page from reloading or navigating to a new URL when an event occurs.
 Be cautious not to overuse it, as blocking the default behavior of certain events could result in unexpected behavior for users.
*/

function handleLinkClick(event) {
  event.preventDefault(); // Prevent the default link navigation
  // Your custom handling logic here
}

function MyLink() {
  return (
    <a href="/some-page" onClick={handleLinkClick}>
      Click me
    </a>
  );
}

