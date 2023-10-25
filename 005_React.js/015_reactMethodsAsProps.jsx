/*In React, "Methods as props" is a concept that involves passing functions as props from one component to another. This is a fundamental concept in React and is often used
  to enable communication between parent and child components, allowing child components to trigger actions in their parent components.

 //1.Parent Component:
 The parent component defines a function (method) that performs a specific task. This method can be related to some action or behavior that needs to be triggered by a child component.*/
import React, { Component } from 'react';

class ParentComponent extends Component {
  doSomething = () => {
    // Perform some action or behavior
  }

  render() {
    return (
      <ChildComponent action={this.doSomething} />
    );
  }
}

export default ParentComponent;


//Child Component: The child component receives the function as a prop from the parent component.
import React from 'react';

function ChildComponent(props) {
  return (
    <button onClick={props.action}>Do Something</button>
  );
}

export default ChildComponent;


/*1.When the button is clicked in the child component, it calls the props.action function, which is the doSomething method in the parent component. 
   This allows the child component to trigger an action in the parent component.

   2.Remember that in React, data flows from parent to child through props, and methods can be passed down as props to allow child components to interact with
  and modify the state or behavior of their parent components.  */
