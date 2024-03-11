

# React Pure Components

A Pure Component in React is a specialized type of React component designed to optimize rendering performance by automatically implementing the `shouldComponentUpdate` method. Its primary purpose is to prevent unnecessary re-renders when the component's props and state have not changed.

## Key Characteristics and Features

### a. Automatic `shouldComponentUpdate`:

Pure Components automatically compare the previous and current props and state. If there are no differences, the component will not re-render. This is done to minimize rendering and improve performance.

### b. Shallow Comparison:

Shallow comparison means that only the top-level properties or references are compared, and it doesn't examine nested objects or arrays deeply. It compares the top-level properties of objects and arrays, such as keys and references.

Example of Shallow Comparison:

```javascript
const previousProps = { id: 1, data: [1, 2, 3] };
const nextProps = { id: 2, data: [1, 2, 3] };

console.log(previousProps === nextProps); // Shallow comparison, false
console.log(previousProps.data === nextProps.data); // Shallow comparison, true
```

## Example Usage:

```jsx
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
```

**Note:** It's a good idea to make all child components as PureComponent if the parent is a PureComponent to avoid unexpected behavior and fully leverage the performance benefits.

