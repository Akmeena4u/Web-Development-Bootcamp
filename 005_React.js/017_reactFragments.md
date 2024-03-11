
# React Fragments

React fragments, introduced in React 16.2, are a feature that allows you to group multiple React elements without adding extra nodes to the DOM. They are particularly useful when you want to return multiple elements from a component's render method without wrapping them in a parent element and without adding an extra node.

## 1. Using the Empty Angle Brackets (`<>` `</>`):

```jsx
import React from 'react';

function MyComponent() {
  return (
    <>
      <p>Element 1</p>
      <p>Element 2</p>
    </>
  );
}
```

## 2. Using `<React.Fragment>`:

```jsx
import React from 'react';

function MyComponent() {
  return (
    <React.Fragment>
      <p>Element 1</p>
      <p>Element 2</p>
    </React.Fragment>
  );
}
```

You can use either the empty angle brackets or `<React.Fragment>` explicitly. The choice depends on your preference, especially when you want to provide a key or other props to the fragment.

These fragments help in creating cleaner and more concise React components by eliminating the need for an additional wrapping element in the DOM.
```

