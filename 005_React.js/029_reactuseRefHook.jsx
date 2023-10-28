/*-------------------------------------------------------------Refs in react-------------------------------------------------------------------------------------------
Refs are a tool to access and interact with elements created in the render method. In React, parent components typically interact with their children through props, 
but there are situations where you need to directly change a child component or a DOM element. In such cases, React offers a way to do so.

There are a few good use cases for refs:
1.Managing focus, text selection, or media playback.
2.Triggering imperative animations.
3.Integrating with third-party DOM libraries.  

By default, you may not use the ref attribute on function components because they don’t have instances: in functional components we use useref hook
useRef is primarily used to access and manipulate the DOM or store mutable values without triggering re-renders. It provides a mutable reference that persists across component renders.
useRef is a React Hook that lets you reference a value that’s not needed for rendering. */

//To use refs in React, follow these steps:
  //1.Import React:
      import React from 'react';

  //2.Create a Ref: Inside your component, create a ref using the createRef function for class components or the useRef hook for functional components.
    class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
    // ...
   }

//functional componnet
import React, { useRef } from 'react';

function MyComponent() {
  const myRef = useRef();
  // ...
}


//3.Attach Ref to an Element or Component: In your component's render method (for class components) or JSX return (for functional components), attach the ref to the DOM element or component you want to reference
//class component
render() {
  return (
    <div>
      <input type="text" ref={this.myRef} />
    </div>
  );
}

//functional component
function MyComponent() {
  const myRef = useRef();

  return (
    <div>
      <input type="text" ref={myRef} />
    </div>
  );
}


//4.Access and Interact with the Ref:  To interact with the ref, you can use the .current property of the ref.
// Inside a method or function
this.myRef.current.focus(); // Example: focusing an input element
// OR
myRef.current.focus(); // For functional components



//EXAMPLES-------------------------------------------------------Class components -refs-------------------------------------------------------------------

import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); // Create a ref
  }

  focusInput = () => {
    this.inputRef.current.focus(); // Access and focus the input element
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}

export default ClassComponent;

//In this example, we create a ref called inputRef and attach it to an input element. When the button is clicked, it focuses the input field using the ref.


//-------------------------------------------------------------Funtional component :-UseRef Hook---------------------------------------------------------


import React, { useRef } from 'react';

function FunctionalComponent() {
  const inputRef = useRef(null); // Create a ref

  const focusInput = () => {
    inputRef.current.focus(); // Access and focus the input element
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FunctionalComponent;

//In this example, we create a ref called inputRef using the useRef hook and attach it to an input element. When the button is clicked, it focuses the input field using the ref.







