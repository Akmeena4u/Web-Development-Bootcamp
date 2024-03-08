

![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/a3870c57-bda9-4ded-a1bb-491f5d3e9651)

---

**React Redux Cake Shop Application Setup:**

1. **Project Setup:**
   - Created a new React application using Create React App: `npx create-react-app react-redux-demo`.
   - Changed directory to the project: `cd react-redux-demo`.

2. **Installed Required Packages:**
   - Installed Redux and React-Redux libraries: `npm install redux react-redux`.

3. **Folder Structure:**
   - Created a new folder named `components` within the `src` directory.

4. **Cake Container Component:**
   - Created a new file `cakeContainer.js` inside the `components` folder.
   - Used the RFC snippet to create a functional component.
   - Added JSX elements:
     - `<h2>` tag displaying "Number of Cakes."
     - A button with the label "Buy Cake."

5. **App.js Integration:**
   - Imported `cakeContainer` in `App.js`.
   - Included the `<CakeContainer />` component in the `return` statement of `App.js`.

6. **Running the Application:**
   - Executed the command `npm start` to launch the application.
   - Observed the header and button in the browser.

**Next Steps:**
   - In the upcoming video, we will focus on adding actions to the cake shop application.

This sets up the initial structure of the React Redux Cake Shop application, allowing for further implementation and integration with Redux concepts.

---

**React Redux Cake Shop Application: Define Actions and Action Creators**

1. **Folder Structure Setup:**
   - Created a new folder named `Redux` within the `src` directory.
   - Inside the `Redux` folder, created a `cakes` folder for the cake shop feature.

2. **Action Creator File:**
   - Created a new file `cakeActions.js` inside the `cakes` folder.
   - Defined the `buyCake` action creator:
     ```javascript
     // cakeActions.js
     import { BUY_CAKE } from './cakeTypes';

     export const buyCake = () => {
       return {
         type: BUY_CAKE,
       };
     };
     ```

3. **Action Type Constants:**
   - Created a new file `cakeTypes.js` within the `cakes` folder.
   - Exported a constant `BUY_CAKE` with a string value:
     ```javascript
     // cakeTypes.js
     export const BUY_CAKE = 'BUY_CAKE';
     ```

4. **Usage in Action Creator:**
   - Imported `BUY_CAKE` from `cakeTypes` into `cakeActions.js`.
   - Used the constant `BUY_CAKE` as the action type in the `buyCake` action creator.

5. **Export Action Creator:**
   - Exported the `buyCake` action creator to make it available for use in other components.

6. **Folder Structure Overview:**
   - `src`
     - `Redux`
       - `cakes`
         - `cakeActions.js`
         - `cakeTypes.js`



next we will explore reducers for handling these actions in the React Redux Cake Shop application.

---
**Implementing Cake Reducer in React Redux Cake Shop App**

1. **Create Reducer File:**
   - Created a new file `cakeReducer.js` within the `cakes` folder.

2. **Define Initial State:**
   - Defined the initial state with an object where `numberOfCakes` is set to 10.

   ```javascript
   // cakeReducer.js
   const initialState = {
     numberOfCakes: 10,
   };
   ```

3. **Reducer Function:**
   - Defined the reducer function `cakeReducer` that takes `state` and `action` as parameters.

   ```javascript
   // cakeReducer.js
   const cakeReducer = (state = initialState, action) => {
     switch (action.type) {
       case 'BUY_CAKE':
         return {
           ...state,
           numberOfCakes: state.numberOfCakes - 1,
         };
       default:
         return state;
     }
   };
   ```

4. **Import Action Type:**
   - Imported the `BUY_CAKE` action type from `cakeTypes.js`.

   ```javascript
   // cakeReducer.js
   import { BUY_CAKE } from './cakeTypes';
   ```

5. **Export Reducer:**
   - Exported the `cakeReducer` as the default export.

   ```javascript
   // cakeReducer.js
   export default cakeReducer;
   ```

**Notes:**
- The `cakeReducer` function accepts `state` (with a default value of `initialState`) and `action`.
- A switch statement is used to handle different action types.
- In the `BUY_CAKE` case, it returns a new state object with the updated number of cakes.
- The `default` case returns the current state for any unknown action type.
- Imported `BUY_CAKE` action type for use in the switch statement.

---
**Creating Redux Store and Providing to React App**

1. **Create Store File:**
   - Created a new file `store.js` within the `redux` folder.

2. **Import Dependencies:**
   - Imported `createStore` from Redux to create the store.

   ```javascript
   // store.js
   import { createStore } from 'redux';
   ```

3. **Import Reducer:**
   - Imported the `cakeReducer` that was defined earlier.

   ```javascript
   // store.js
   import cakeReducer from './cakes/cakeReducer';
   ```

4. **Create Store:**
   - Used `createStore` to create the Redux store, passing the `cakeReducer` as a parameter.

   ```javascript
   // store.js
   const store = createStore(cakeReducer);
   ```

5. **Export Store:**
   - Exported the created store as the default export.

   ```javascript
   // store.js
   export default store;
   ```

6. **Provide Store in React App:**
   - Opened the `App.js` file.
   - Imported `Provider` from `react-redux`.
   - Wrapped the component tree with `Provider`.
   - Passed the `store` as a prop to `Provider`.

   ```javascript
   // App.js
   import { Provider } from 'react-redux';
   import store from './redux/store';

   // ...

   return (
     <Provider store={store}>
       <div className="App">
         {/* ... */}
       </div>
     </Provider>
   );
   ```



In the next , the process of dispatching actions and subscribing to changes in the store using React components will be explained.

---

**Connecting React Component with Redux: Step by Step**

In this we are learning how to access the Redux state and dispatch actions from a React component. The process involves three main steps: defining `mapStateToProps`, `mapDispatchToProps` functions, and connecting them to the React component using the `connect` function.

### **Step 1: Define `mapStateToProps` Function**

```javascript
// cakeContainer.js

// Import connect from react-redux
import { connect } from 'react-redux';

// Define mapStateToProps function
const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};
```

- **Explanation:**
  - `mapStateToProps` is a function that takes the Redux state as a parameter.
  - It returns an object with properties that map the state to component props.
  - In this example, we're mapping `state.numberOfCakes` to a prop called `numberOfCakes`.

### **Step 2: Define `mapDispatchToProps` Function**

```javascript
// cakeContainer.js

// Import the buyCake action creator
import { buyCake } from './cakeActions';

// Define mapDispatchToProps function
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
```

- **Explanation:**
  - `mapDispatchToProps` is a function that takes the Redux `dispatch` method as a parameter.
  - It returns an object with properties that map action creators to component props.
  - In this example, we're mapping the `buyCake` action creator to a prop called `buyCake`.

### **Step 3: Connect Functions with React Component**

```javascript
// cakeContainer.js

// Connect the component with mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
```

- **Explanation:**
  - The `connect` function is used to connect the React component to the Redux store.
  - It takes `mapStateToProps` and `mapDispatchToProps` as arguments.
  - It returns a higher-order component that wraps the original component.

### **Final JSX in CakeContainer Component**

```javascript
// CakeContainer Component JSX

<div>
  <h2>Number of Cakes - {props.numberOfCakes}</h2>
  <button onClick={props.buyCake}>Buy Cake</button>
</div>
```

- **Explanation:**
  - The component can now access the Redux state (`numberOfCakes`) as a prop.
  - The `onClick` handler for the button dispatches the `buyCake` action.

### **Summary:**

- `mapStateToProps` maps Redux state to component props.
- `mapDispatchToProps` maps action creators to component props.
- `connect` function connects the React component to the Redux store, providing access to state and actions.

By following these steps, the React component (`CakeContainer`) is successfully connected to the Redux store, enabling it to interact with the Redux state and dispatch actions.
