/*React fragments, introduced in React 16.2, are a feature that allows you to group multiple React elements without adding extra nodes to the DOM. 
 They are particularly useful when we want to return multiple elements from a component's render method without wrapping them in a parent element and without adding extra node.*/

//1. Using the Empty Angle Brackets (<> </>): we can wrap your elements in empty angle brackets, which create a fragment.
import React from 'react';

function MyComponent() {
  return (
    <>
      <p>Element 1</p>
      <p>Element 2</p>
    </>
  );
}


//2-Using <React.Fragment>: we can also use <React.Fragment> explicitly if you prefer, especially when you want to provide a key or other props to the fragment.
import React from 'react';

function MyComponent() {
  return (
    <React.Fragment>
      <p>Element 1</p>
      <p>Element 2</p>
    </React.Fragment>
  );
}
