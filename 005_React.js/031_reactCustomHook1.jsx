/*custom Hook is like a javscript function whose name starts with "use" keyword . we can use our inbuilt hooks in our custom hook

why custom Hook?
1. sometimes we wants to use or same logic in multiple times so we can remove this duplicasy by custom hooks , we will write all sharable content inside our custom hook 
2.inplace of custom hook we can also use Higher oreder functions

*/

//steps to follow 
//1.Step 1: Create the Custom Hook - starts with use keyword -useCounter 
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

//In this custom hook, we use useState to manage the counter state and return functions for incrementing and decrementing the counter.

//steps-2 - Step 2: Use the Custom Hook in Components - now let 's use usecounter custom Hook in any component
import React from 'react';
import useCounter from './useCounter';

function Counter() {
  const { count, increment, decrement } = useCounter(0);  //here we can set diffrent initial value and still use same custom hooks functionality

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;

//In this component, we import and use the useCounter custom hook to manage the counter's state. We destructure the values returned by the hook (count, increment, and decrement) and use them in the component's render function.

//step-3--Use the Component :--Now we can use the Counter component in your application just like any other React component:
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

/*Note:With this setup, the Counter component manages its state and logic using the custom hook useCounter. The custom hook encapsulates the counter logic and makes 
        it reusable in multiple components, promoting code reusability and separation of concerns.  */
