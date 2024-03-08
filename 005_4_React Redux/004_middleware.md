
# MiddleWare

**Summary of Redux Middleware: Integrating Redux Logger**

1. **Introduction to Middleware:**
   - Middleware is a way to extend Redux with custom functionality.
   - Acts as a third-party extension point between dispatching an action and reaching the reducer.
   - Useful for adding features like logging, crash reporting, asynchronous tasks, etc.

2. **Demonstration with Redux Logger:**
   - Incorporating the Redux Logger library as middleware.
   - Install Redux Logger using `npm install redux-logger`.
   - Import and create a logger using `reduxLogger.createLogger()`.

   ```javascript
   // Import Redux Logger
   const reduxLogger = require('redux-logger');
   // Create Logger
   const logger = reduxLogger.createLogger();
   ```

3. **Applying Middleware using `applyMiddleware`:**
   - Redux provides the `applyMiddleware` function to apply middleware to the store.
   - Import `applyMiddleware` using `redux.applyMiddleware`.
   - Add middleware to the `createStore` function.

   ```javascript
   // Import applyMiddleware
   const applyMiddleware = redux.applyMiddleware;
   // Apply Middleware to the Store
   const store = redux.createStore(rootReducer, applyMiddleware(logger));
   ```

4. **Usage and Output:**
   - Middleware intercepts actions between dispatch and reaching the reducer.
   - Demonstrated with the example of Redux Logger, which logs state changes, actions, and the resulting state.
   - The logs are visible in the console.

   ```javascript
   // Demonstration of Middleware in Action
   store.dispatch(buyCake()); // Logs: previous state, action, next state
   ```

5. **Applying Multiple Middleware:**
   - You can apply multiple middleware to the store by passing them as arguments to `applyMiddleware`.

   ```javascript
   // Apply Multiple Middleware
   const store = redux.createStore(rootReducer, applyMiddleware(logger, otherMiddleware));
   ```

6. **Conclusion:**
   - Middleware is a crucial concept for extending Redux functionality.
   - Redux Logger serves as an example of middleware for logging Redux actions and state changes.

---
