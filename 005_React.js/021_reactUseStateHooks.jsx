/*React's useState hook is a fundamental feature introduced in React 16.8 that allows you to add state management to functional components. Before hooks, state management 
  was primarily handled by class components,

*/
import React, {useState} from 'react'  //import useState from react

function HookCounter() {

  const [count, setCount] = useState(0)   //declare state variable with initial val as argument and it returns a array with curren count val and updater function

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>    // use state variable and updater function
    </div>
  )
}

export default HookCounter


/*---------------------------------------------------------------UseState with functional Update based on previous state ----------------------------------------------------
  In React, we can use the useState hook with the previous value by using the functional update form of useState. This allows us to update a state variable based 
  on its previous value  */

import React, { useState } from 'react'

function HookCounterTwo() {
	const initialCount = 0
	const [count, setCount] = useState(initialCount)
	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount(prevCount => prevCount + 1)
		}
	}
	return (
		<>
			Count: {count}
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>
				Increment
			</button>
			<button onClick={() => setCount(prevCount => prevCount - 1)}>
				Decrement
			</button>
			<button onClick={incrementFive}>Increment 5</button>
		</>
	)
}

export default HookCounterTwo


/*---------------------------------------------------------------------Use state with multiple State Vriables ---------------------------------------------------
  In React, we can use the useState hook to manage multiple state variables by invoking the useState function multiple times. and update there updater function seprately */

import React, { useState } from 'react';

function MyComponent() {
  // Define multiple state variables using the useState hook
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello, world!');
  const [isToggle, setIsToggle] = useState(false);

  // You can update these state variables independently
  const incrementCount = () => {
    setCount(count + 1);
  };

  const updateText = (newText) => {
    setText(newText);
  };

  const toggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>

      <p>Text: {text}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => updateText(e.target.value)}
      />

      <p>Toggle: {isToggle ? 'On' : 'Off'}</p>
      <button onClick={toggle}>
        {isToggle ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
}

export default MyComponent;


/*------------------------------------------------------UseStae Hook with object -----------------------------------------------------------------------------
Using useState with an object in React allows us to manage multiple state variables within a single object. This is particularly useful when we have multiple 
related state values that we  want to update together.   */

import React, { useState } from 'react'

function HookCounterThree() {
	const [name, setName] = useState({ firstName: '', 
                                    lastName: '' 
                                   })
	return (
		<form>
			<input
				type="text"
				value={name.firstName}
				onChange={e => setName({ ...name, firstName: e.target.value })}
			/>
			<input
				type="text"
				value={name.lastName}
				onChange={e => setName({ ...name, lastName: e.target.value })}
			/>
			<h2>Your first name is - {name.firstName}</h2>
			<h2>Your last name is - {name.lastName}</h2>
			<h2>{JSON.stringify(name)}</h2>
		</form>
	)
}

export default HookCounterThree

  /*
  Note-1.we use the spread operator (...) in the updateFirstName function to create a new object that is a shallow copy of the existing formData object 
         before making updates. The spread operator is used to ensure immutability and prevent unintentional side effects when updating the state object.
       2.Here's a breakdown of how it works:
       e --is an event object that holds information about the event that occurred, such as the input field's change event.
       e.target -- represents the element that triggered the event, which in this case is the input field.
       e.target.value --extracts the value property of the input field, which contains the text that the user has typed.
      By using e.target.value, we can capture the user's input and pass it to your updateFirstName function to update the state based on what the user has typed into the input field. This approach ensures that the state reflects the most up-to-date user input.  
       3. use state does not  automatically merge and update object  this is key diffrence from setstate of class components , here we have to do it manually using spread operator that tells make replica of current object and only update req varibales */

/*--------------------------------------------------------------UseStae with Array ------------------------------------------------------------------------
  Using the useState hook with an array in a React functional component allows you to manage and update an array within your component's state  */

import React, { useState } from 'react';

function MyComponent() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const removeItem = (index) => {
    setItems((prevItems) =>
      prevItems.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem('New Item')}>Add Item</button>
    </div>
  );
}

export default MyComponent;


/*
This example demonstrates how to use the useState hook to manage an array of items, add new items, and remove items from the array while rendering the items in the component.
map()-The map function is used to create a new array by transforming each element of an existing array. 
filter()-The filter function is used to create a new array from an existing array by filtering out elements based on a specified condition   */
