
# Action

1. **Overview:**
   - In the series, a project with Redux as a dependency has been set up for a cake shop application.
   - Three parts need implementation: actions, reducers, and the store.
   - This video focuses on implementing actions.

2. **Actions in Redux:**
   - Actions are the only way for the application to interact with the Redux store.
   - They carry information from the app to the Redux store.
   - Actions are plain JavaScript objects and must have a `type` property indicating the action being performed.

3. **Defining Action:**
   - Create a string constant for the action type (e.g., `BUY_CAKE`).
   - This constant helps avoid spelling mistakes when reusing the action.
   - An action object is created with a `type` property set to the constant value.
   - // Constants.js
       ```export const BUY_CAKE = 'BUY_CAKE';```


4. **Additional Properties in Action:**
   - Apart from the `type` property, the structure of an action object is flexible.
   - Additional properties can be added based on the requirements.
   - In the example, an `info` property is added with the value "First Redux Action."
   - ```// Actions.js
      import { BUY_CAKE } from './Constants';

     // Action object
      const buyCakeAction = {
      type: BUY_CAKE,
     info: 'First Redux Action',
     }; ```


5. **Action Creator:**
   - Redux recommends implementing an action creator.
   - An action creator is a function that returns an action object.
   - Helps maintain a clean and consistent structure for creating actions.
   - ```// Actions.js
     import { BUY_CAKE } from './Constants';
       const buyCake = () => {
       return {
         type: BUY_CAKE,
        info: 'First Redux Action',
       };
     };```

export default buyCake;



6. **Key Takeaways:**
   - An action is an object with a `type` property.
   - An action creator is a function that returns an action.
   - This completes the first part of the Redux implementation.

---

# React Reduser

**Summary of Implementing Reducers in Redux for Cake Shop Application:**


1. **Reducers in Redux:**
   - Reducers specify how the application's state changes in response to actions sent to the store.
   - Actions describe what happened, but reducers are responsible for determining how the application's state changes.

2. **Reducer Function:**
   - A reducer is a function that accepts `state` and `action` as arguments and returns the next state of the application.
   - In its simplest form: `previousState, action => newState`

3. **Determining State Structure:**
   - Define the structure of the application state. In this example, a single property, `numberOfCakes`, represents the number of cakes on the shelf.

5. **Initial State:**
   - Pass the initial state as the default value for the `state` parameter in the reducer function.
   - Example: Assuming 10 cakes on the shelf in the morning, set `initialState = { numberOfCakes: 10 }`.

6. **Reducer Implementation:**
   ```javascript
   // Reducer.js
   import { BUY_CAKE } from './Constants';

   const initialState = {
     numberOfCakes: 10,
   };

   const reducer = (state = initialState, action) => {
     switch (action.type) {
       case BUY_CAKE:
         return {
           ...state,
           numberOfCakes: state.numberOfCakes - 1,
         };
       default:
         return state;
     }
   };

   export default reducer;
   ```

   - The reducer function takes `state` and `action` as parameters.
   - It uses a switch statement to handle different action types.
   - If the action type is `BUY_CAKE`, it returns a new state object with the updated `numberOfCakes`.
   - If the action type is not recognized, it returns the current state.

7. **Immutable State Update:**
   - Emphasize the importance of not mutating the state object.
   - Use the spread operator (`...`) to create a copy of the state before making updates.

8. **Completion of Reducer Implementation:**
   - The reducer is a pure function that doesn't modify the existing state but returns a new state based on the action.


---

# Redux Store

**Summary of Implementing Redux Store in Cake Shop Application:**


1. **Redux Store Responsibilities:**
   - Holds the application state.
   - Exposes a `getState` method to access the current state.
   - Provides a `dispatch` method to update the state.
   - Allows subscription to changes via the `subscribe` method.
   - Enables unsubscription from the store.

2. **Implementation:**
   ```javascript
   // index.js
   const Redux = require('redux');
   const reducer = require('./reducer');

   // Create Redux store
   const store = Redux.createStore(reducer);

   // Log initial state
   console.log('Initial State:', store.getState());

   // Subscribe to store changes
   const unsubscribe = store.subscribe(() => {
     console.log('Updated State:', store.getState());
   });

   // Dispatch actions to update the state
   store.dispatch(buyCake());
   store.dispatch(buyCake());
   store.dispatch(buyCake());

   // Unsubscribe from the store
   unsubscribe();
   ```

3. **Explanation:**
   - Import the `redux` library and the `reducer` from the application.
   - Create the Redux store using `Redux.createStore(reducer)`.
   - Log the initial state using `store.getState()`.
   - Subscribe to store changes and log the updated state whenever there's a change.
   - Dispatch actions (`buyCake`) to update the state.
   - Unsubscribe from the store when done.

4. **Understanding the Flow:**
   - The reducer controls state transitions based on actions.
   - Initial state: Number of cakes is 10.
   - Actions (`buyCake`) trigger state updates, and the listener logs the changes.
   - After three actions, the final state is logged as 7.
   - Unsubscribe to stop listening to further changes.

5. **Action Creators:**
   - Using action creators (`buyCake`) ensures consistency and ease of maintenance.
   - Changes to the action object are centralized in one place.



---

**Summary of Introduction to Scalability in Redux:**

1. **Real-World Scenario:**
   - Analogous scenario of a cake shop with cakes on the shelf, a shopkeeper, and a customer.
   - Initially focused on selling cakes.

2. **Business Expansion:**
   - The business decides to expand and introduces a range of products, including ice creams.
   - To handle the new products efficiently, a freezer is purchased.

3. **Need for Scalability:**
   - With the introduction of ice creams, there's a need for separate management of cakes and ice creams.
   - One shopkeeper responsible for cakes, another for ice creams.
   - Each shopkeeper is focused on their specific product category and not concerned with the other.

4. **Scalability Benefits:**
   - Improved organization and efficiency with separate responsibilities.
   - Easier management and troubleshooting.
   - Simplified handling of different product categories.

5. **Scalability in Redux:**
   - Analogous to the cake shop scenario, Redux provides a function to handle scalability.
   - Introduces the concept of dividing responsibilities by creating separate Redux stores for different parts of the application.
   - Each store is responsible for managing a specific part of the application state.

---

# Multiple Reduser

**Summary of Creating Multiple Reducers in Redux:**

**Introduction:**
- The need to sell both cakes and ice creams in the shop.
- Each product category managed by a separate "shopkeeper," equivalent to a reducer in code.

**Single Reducer Approach:**
- Initial state object with both `numberOfCakes` and `numberOfIceCreams`.
- Single reducer handling both actions (`buyCake` and `buyIceCream`).

```javascript
// Single Reducer
const initialState = {
  numberOfCakes: 10,
  numberOfIceCreams: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUY_CAKE':
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case 'BUY_ICE_CREAM':
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    default:
      return state;
  }
};
```

**Issues with Single Reducer:**

- As products increase, the single reducer becomes complex and hard to manage.
- Debugging and tracking become challenging.

**Multiple Reducers Approach:**
- Split the state and reducers into separate parts.
- Have individual reducers for cakes and ice creams.

```javascript
// Multiple Reducers
const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case 'BUY_ICE_CREAM':
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    default:
      return state;
  }
};
```

**Benefits of Multiple Reducers:**
- Each reducer manages its specific state and logic.
- Simpler, more modular, and easier to debug.

**Challenge with `createStore`:**
- `createStore` method accepts only one reducer.


---

# Combing Redusers

**Summary of Combining Multiple Reducers in Redux:**

1. **Introduction:**
   - Exploring how to combine multiple reducers in Redux.
   - Specific example of combining the cake reducer and ice cream reducer.

2. **Combining Reducers in Redux:**
   - Redux provides the `combineReducers` method for combining multiple reducers into a single reducer.
   - The combined reducer is often referred to as the "root reducer."

3. **Implementation Steps:**
   - Import the `combineReducers` method from Redux.
   - Create individual reducers for each part of the state (e.g., cake reducer, ice cream reducer).
   - Use `combineReducers` to create the root reducer by specifying key-value pairs for each reducer.
   - Pass the root reducer to the `createStore` method.

   ```javascript
   // Combining Reducers
   const combinedReducers = Redux.combineReducers;

   // Individual Reducers
   const cakeReducer = (state, action) => { /*...*/ };
   const iceCreamReducer = (state, action) => { /*...*/ };

   // Combine Reducers into Root Reducer
   const rootReducer = combinedReducers({
     cake: cakeReducer,
     iceCream: iceCreamReducer,
   });

   // Create Store with the Root Reducer
   const store = Redux.createStore(rootReducer);
   ```

4. **Accessing Global State:**
   - The global state now has a structure based on the combined reducers.
   - To access specific parts of the state, use the keys specified during the combination process.

   ```javascript
   // Accessing State
   const numberOfCakes = state.cake.numberOfCakes;
   const numberOfIceCreams = state.iceCream.numberOfIceCreams;
   ```

5. **Scaling with Multiple Reducers:**
   - As the application grows, split reducers into separate files.
   - Each reducer can manage different parts of the global state (e.g., auth reducer, user reducer, profile reducer).

6. **Dispatching Actions:**
   - Both reducers receive dispatched actions.
   - Each reducer acts on the relevant part of the state it manages.

7. **Conclusion:**
   - Combining reducers enhances modularity, scalability, and organization in large applications.

----

