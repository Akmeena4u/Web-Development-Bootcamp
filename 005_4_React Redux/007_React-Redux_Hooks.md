**Transitioning to React Redux Hooks**

In the recent updates of React Redux (version 7.1), Hooks have been introduced as an alternative to the existing `connect` higher-order component. Hooks provide a more concise and straightforward way to subscribe to the Redux store and dispatch actions directly within functional components. In this series, we'll explore how to transition from using `connect` to using Hooks in the context of our Cake Shop application.

### **Understanding the Transition**

1. **Basic React Redux Pattern Recap:**
   - Defined action creators and reducer functions.
   - Provided the Redux store.
   - Connected components using the `connect` higher-order component.

2. **Introduction of React Redux Hooks:**
   - React Redux now provides a set of Hooks that simplify interaction with the Redux store.
   - These Hooks eliminate the need for the `connect` higher-order component.

### **Specifically, Focus on Cake Shop Container Component:**

In the upcoming videos, we will focus on transitioning the Cake Shop Container component to use React Redux Hooks instead of `connect`. The primary Hooks we'll be using are likely `useSelector` for accessing the state and `useDispatch` for dispatching actions.

### **Key Points to Note:**

- **No Need for `connect`:**
  - Hooks eliminate the need to use `connect` to connect components to the Redux store.

- **Simplifying Component Logic:**
  - Using Hooks can make the component logic more concise and readable.

### **Steps for Transitioning:**

1. **Import Necessary Hooks:**
   - Import the required Hooks from the React Redux library (`useSelector` and `useDispatch`).

2. **Replace `mapStateToProps` with `useSelector`:**
   - Utilize the `useSelector` Hook to directly access the Redux state within the component.

3. **Replace `mapDispatchToProps` with `useDispatch`:**
   - Use the `useDispatch` Hook to get the `dispatch` function and dispatch actions directly.

### **Conclusion:**

By transitioning to React Redux Hooks, we can leverage the new capabilities introduced in React Redux versions 7.1 and above. This series will guide you through each step, ensuring a smooth transition from the traditional `connect` approach to the more modern and concise Hooks-based approach. Stay tuned for the  next , where we'll dive into the practical implementation of these changes in our Cake Shop Container component.

---

**React Redux: Introduction to `useSelector` Hook**

### **Overview:**
In this  we'll explore the `useSelector` hook in React Redux, which serves as a replacement for the traditional `mapStateToProps` function when connecting a component to the Redux store. We'll create a new component, `HooksCakeContainer`, that utilizes this hook to access and display the number of cakes from the Redux store.

### **Steps:**

1. **Create `HooksCakeContainer` Component:**
   - Use the `RFC` or `RCE` snippet to quickly generate the functional component structure.
   - Include an `h2` tag for displaying the number of cakes and a button for dispatching the `buyCake` action.

2. **Import `useSelector` Hook:**
   - Import the `useSelector` hook from the `react-redux` library.
     ```javascript
     import { useSelector } from 'react-redux';
     ```

3. **Implement `useSelector` Hook:**
   - Within the component, use the `useSelector` hook to access the Redux state.
   - The hook takes a selector function as a parameter, which receives the Redux state.
   - Return the specific state property needed, in this case, `state.numberOfCakes`.
     ```javascript
     const number_of_cakes = useSelector((state) => state.numberOfCakes);
     ```

4. **Display State in JSX:**
   - Include the obtained state value in the JSX to render it.
     ```javascript
     <h2>Number of Cakes: {number_of_cakes}</h2>
     ```

5. **Test in App Component:**
   - Include the `HooksCakeContainer` component in the `App` component.
   - Observe the rendered output in the browser.

### **Conclusion:**
The `useSelector` hook simplifies the process of accessing Redux state in functional components. It replaces the need for `mapStateToProps` by directly allowing components to subscribe to the Redux store and retrieve specific state values. In the next , we'll enhance the `HooksCakeContainer` component by adding a button click handler to dispatch the `buyCake` action. Stay tuned for further improvements and practical implementations.

---

Certainly! Here's a more organized presentation of the code with proper linking:

### **React Redux: Introduction to `useDispatch` Hook**

#### **1. Create `HooksCakeContainer` Component:**
```jsx
// HooksCakeContainer.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from './path-to-cake-actions'; // Make sure to provide the correct path

const HooksCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.numberOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes: {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>
        Buy Cake
      </button>
    </div>
  );
};

export default HooksCakeContainer;
```

#### **2. Import `useDispatch` Hook and Action Creator:**
```jsx
// HooksCakeContainer.js
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from './path-to-cake-actions'; // Make sure to provide the correct path
```

#### **3. Use `useDispatch` Hook:**
```jsx
// HooksCakeContainer.js
const HooksCakeContainer = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* ... */}
      <button onClick={() => dispatch(buyCake())}>
        Buy Cake
      </button>
    </div>
  );
};
```

#### **4. Click Handler to Dispatch Action:**
```jsx
// HooksCakeContainer.js
<button onClick={() => dispatch(buyCake())}>
  Buy Cake
</button>
```

#### **5. Test in App Component:**
```jsx
// App.js
import React from 'react';
import HooksCakeContainer from './HooksCakeContainer';

const App = () => {
  return (
    <div>
      <h1>React Redux Cake Shop</h1>
      <HooksCakeContainer />
    </div>
  );
};

export default App;
```

This structured format helps in understanding the code flow and the relationships between different components and hooks. Feel free to use this format for better code readability.
