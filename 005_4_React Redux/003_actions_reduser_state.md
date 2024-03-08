
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
    // Action creator function
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
