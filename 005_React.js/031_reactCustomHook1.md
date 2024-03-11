# Custom Hooks in React

Custom hooks in React are JavaScript functions whose names start with the "use" keyword. They allow you to encapsulate and reuse logic across different components. This is particularly useful when you find yourself duplicating code or when you want to separate concerns in your application.

## Why Use Custom Hooks?

1. **Code Reusability:** Custom hooks help eliminate code duplication. If you have logic that is used in multiple components, you can extract it into a custom hook and reuse it wherever needed.

2. **Separation of Concerns:** Custom hooks enable you to separate the concerns of state management and logic from the rendering components. This improves code organization and readability.

## Steps to Create and Use a Custom Hook

### Step 1: Create the Custom Hook

```jsx
// useCounter.js
import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}

export default useCounter;
```

In this example, the `useCounter` custom hook utilizes `useState` to manage the counter state. It returns an object with the current count value, as well as functions for incrementing and decrementing the count.

### Step 2: Use the Custom Hook in Components

```jsx
// Counter.js
import React from 'react';
import useCounter from './useCounter';

function Counter() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

In this component, the `Counter` component imports and uses the `useCounter` custom hook. It destructures the values returned by the hook (count, increment, and decrement) and uses them in the component's render function.

### Step 3: Use the Component

```jsx
// App.js
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div>
      <h1>Custom Hook Counter Example</h1>
      <Counter />
    </div>
  );
}

export default App;
```

Now, you can use the `Counter` component in your application like any other React component. With this setup, the `Counter` component manages its state and logic using the custom hook `useCounter`. The custom hook encapsulates the counter logic, making it reusable in multiple components and promoting code reusability and separation of concerns.
