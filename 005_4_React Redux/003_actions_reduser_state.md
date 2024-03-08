
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
