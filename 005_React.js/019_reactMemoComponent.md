
# React.memo

`React.memo` is a higher-order component (HOC) introduced in React 16.6 that optimizes the performance of functional components. Similar in purpose to React's Pure Components for class components, `React.memo` prevents unnecessary re-renders of functional components by memoizing the result of a component rendering.

## Example Usage:

```jsx
import React from 'react';

const MyComponent = (props) => {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
};

export default React.memo(MyComponent);
```

In the example above, `React.memo` is applied to the `MyComponent` functional component. This memoization ensures that the component only re-renders if the props have changed, preventing unnecessary rendering when the props remain the same.

`React.memo` is particularly useful when dealing with functional components that receive the same props but don't need to re-render due to unchanged data.

