
# Conditional Rendering in React

In React, conditional rendering is a technique where you decide whether to display a particular component or element based on certain conditions.

## Using If Statements

You can use standard JavaScript if statements within your `render()` method to conditionally render components or elements.

```jsx
import React, { Component } from 'react';

class ConditionalRenderingExample extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false, // Simulating a user login state
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome, User!</div>;
    } else {
      return <div>Please log in to access your account.</div>;
    }
  }
}

export default ConditionalRenderingExample;
```

## Using Ternary Operator

A more concise way to perform conditional rendering is by using the ternary operator:

```jsx
render() {
  return (
    <div>
      {this.state.isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <p>Please log in to access your account.</p>
      )}
    </div>
  );
}
```

## Using Logical && Operator

You can also use the `&&` logical operator for conditional rendering when you want to render an element based on a simple true or false condition:

```jsx
render() {
  return (
    <div>
      {this.state.isLoggedIn && <p>Welcome, User!</p>}
    </div>
  );
}
```

If `this.state.isLoggedIn` is true, the `<p>` element is rendered; otherwise, nothing is rendered.

## Using a Function

You can create a function that returns the component or element to render based on your condition. This can make your `render()` method cleaner and more readable:

```jsx
class ConditionalRenderingExample extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  renderContent() {
    if (this.state.isLoggedIn) {
      return <p>Welcome, User!</p>;
    } else {
      return <p>Please log in to access your account.</p>;
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}
```

