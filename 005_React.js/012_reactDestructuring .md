

# Destructuring in React

Destructuring in React is a technique that allows you to extract specific values from objects and arrays, typically used for props and state, to make your code cleaner and more concise.

## Destructuring Arrays in JavaScript

When destructuring arrays, the order that variables are declared is important.

```javascript
const vehicles = ['mustang', 'f-150', 'expedition'];

// Old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// New way
const [car, truck, suv] = vehicles;
```

## Destructuring Props in React

In React, functional components receive props as an argument. You can destructure specific props directly in the function parameter list to access them.

```jsx
// Destructuring Inside the Component
function MyComponent({ prop1, prop2 }) {
  return (
    <div>
      <p>{prop1}</p>
      <p>{prop2}</p>
    </div>
  );
}
```

**NOTE: Default Values**

You can set default values using destructuring in case a prop or state value is undefined.

```jsx
function MyComponent({ prop1 = 'Default Prop', prop2 }) {
  // 'prop1' will be 'Default Prop' if it's not provided
}
```

