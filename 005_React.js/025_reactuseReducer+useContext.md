# Global State Management in React using `useReducer` and `useContext`

Managing global state in React can be achieved by combining the `useReducer` hook with the `useContext` hook. This approach allows you to create a central store for your application's data and share it across different components.

## Step 1: Create a Store

In this step, you create a file (e.g., `store.js` or `App.jsx`) to set up the central store using the `useReducer` hook. Define an initial state, a reducer function to handle state transitions, and create a context to share the state and dispatch function with other components.

### Example (`App.jsx` or `store.js`):

```jsx
import React, { useReducer } from 'react';

// Initial state
const initialState = 0;

// Reducer function
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

// Create context
export const CountContext = React.createContext();

function App() {
  // useReducer returns the current state and dispatch function
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        Count - {count}
        {/* Other components can now access the shared context */}
        <ComponentA />
      </div>
    </CountContext.Provider>
  );
}

export default App;
```

## Step 2: Share the Data

Now that you have created the store, you can share the data with other parts of your application. Components that need access to the global state can use the `useContext` hook with the context you created.

### Example (`ComponentA.jsx`):

```jsx
import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentA() {
  // useContext retrieves the context value
  const countContext = useContext(CountContext);

  return (
    <div>
      Component A {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentA;
```

Now, `ComponentA` can easily access the global state (`countState`) and dispatch actions (`countDispatch`) without the need for prop drilling.

By following these steps, you've set up a simple global state management system in React using `useReducer` and `useContext`. This pattern becomes especially valuable as your application grows and you need to share state across multiple components.
