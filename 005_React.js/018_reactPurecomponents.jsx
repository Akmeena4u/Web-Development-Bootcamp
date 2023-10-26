/*
A Pure Component in React is a specialized type of React component that is designed to optimize rendering performance by automatically implementing the shouldComponentUpdate method. 
The primary purpose of a Pure Component is to prevent unnecessary re-renders when the component's props and state have not changed.

Key characteristics and features of a React Pure Component include:
a.Automatic shouldComponentUpdate: --Pure Components automatically compare the previous and current props and state. If there are no differences, the component will not re-render. 
   This is done to minimize the rendering and improve performance.

b- Shallow comparison means that only the top-level properties or references are compared, and it doesn't examine nested objects or arrays deeply.
   Shallow comparison compares the top-level properties of objects and arrays, such as keys and references.

*/
const previousProps = { id: 1, data: [1, 2, 3] };
const nextProps = { id: 2, data: [1, 2, 3] };

console.log(previousProps === nextProps); // Shallow comparison, false
console.log(previousProps.data === nextProps.data); // Shallow comparison, true


//example
import React, { PureComponent } from 'react';

class MyPureComponent extends PureComponent {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}


//note- its a good idea that if parent is purecomponent then also make all child components as purecomponent to avoid unecpected behavior
