
### Redux Interview Questions

> **What is Redux?**
> -Redux is a state management library for JavaScript applications. It provides a predictable state container that helps manage application state in a consistent and organized manner. Redux is often used with libraries like React or Angular, but it can be used with any JavaScript framework or library.

> **What are the core principles of Redux?**
> - **Single Source of Truth:** The state of the entire application is stored in a single store.
> - **State is Read-Only:** The only way to change the state is by dispatching an action.
> - **Changes are Made with Pure Functions:** Reducers specify how the state changes in response to actions.

> **What is an action in Redux?**
> - An action is a plain JavaScript object that describes a change or event that occurred. It must have a `type` property, which indicates the type of action being performed.

> **What is a reducer in Redux?**
> - A reducer is a pure function that takes the current state and an action as arguments and returns a new state. It determines how the state should change based on the action.

> **What is the store in Redux?**
> - The store is an object that holds the application's state. It provides methods to access the state, dispatch actions, and register listeners.

> **How do you connect a React component to Redux?**
> - Use the `connect` function from the `react-redux` library to map state and dispatch to the component’s props. This allows the component to access Redux state and dispatch actions.

> **What is middleware in Redux?**
> - Middleware provides a way to extend Redux with custom functionality. It wraps the store's dispatch method, allowing you to intercept and handle actions before they reach the reducer.

> **Can you have multiple reducers in Redux?**
> - Yes, you can have multiple reducers. You can combine them into a single root reducer using `combineReducers`.

> **Can you have multiple stores in Redux?**
> - Typically, an application should have a single store. However, you can have multiple stores, but it's generally discouraged as it can complicate state management.

> **What is the difference between Redux Thunk and Redux Saga?**
> - **Redux Thunk** is a middleware that allows you to write action creators that return a function instead of an action. This is useful for handling asynchronous actions.
> - **Redux Saga** is a middleware that uses generator functions to handle asynchronous actions. It provides more powerful capabilities for complex async operations compared to Thunk.
