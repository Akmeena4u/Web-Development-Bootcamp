/*----------------------------------------------------------Reduce & Reducer function in js----------------------------------------------------------------------------
reducer() -A reducer is a higher-order callback function in functional programming. It's used to accumulate or reduce a list of values down to a single value.
           Reducers are commonly used with the Array.prototype.reduce() method to perform operations on an array and return a single result.  */

           const reducer = (accumulator, currentValue) => {
             // Perform some operation and return the new accumulator value
           };



//reduce()-- It is used to reduce an array to a single value by applying a provided reducer function iteratively to each item in the array. */
       array.reduce(reducerFunction, initialValue);
                // or 
       array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);

//example 
      const numbers = [1, 2, 3, 4, 5];
      const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      console.log(sum); // Output: 15


/*---------------------------------------------------------------------UseReducer Hook-------------------------------------------------------------------------------
  The useReducer hook in React is a function that allows you to manage complex state logic in functional components. It is an alternative to the useState hook, and 
  it is particularly useful when you need to handle state changes based on various actions or when the next state depends on the previous state. 

                                           //----------------------Reduce vs Usereducer ------------------
                                           
    1. array.reduce(reducer,initialvalue )                                 v/s                   useReducer(reducer , initialstate)
    2.singlevalue= reducer(accumaltor,itemvale)                            v/s                   newstate= reducer(currentstate ,action)
    3. reduce method returns a single value                                 v/s                  useReducer returuns a pair of values  .[newstate,dispatch]

    Note:-1.dispatch function to dispatch actions to the reducer. arguments to dispatch methods is actions specified in reducer function
          2. action is just instruction to the reducer function  , based on these actions reduser function perform state transition , to perform based on action expression we will use switch statements 



//------------------------------------------------------usereducer with Simple action and state  - action and state as String -----------------------------------------*/

import React, { useReducer } from 'react' //step1

const initialState = 0   //step -2
const reducer = (state, action) => {  //step 3
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

function CounterOne() {
	const [count, dispatch] = useReducer(reducer, initialState)  //step 4

	return (
    <div>
      <div>Count = {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>    //step-5
			<button onClick={() => dispatch('decrement')}>Decrement</button>
			<button onClick={() => dispatch('reset')}>Reset</button>
		</div>
	)
}

export default CounterOne


//------------------------------------------------------UseReducer with Complex state and action--Action and state as object ---------------------------------------------------------


import React, { useReducer } from 'react'

const initialState = {
	firstCounter: 0,
	secondCounter: 10
}
const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { ...state, firstCounter: state.firstCounter + action.value }
		case 'decrement':
			return { ...state, firstCounter: state.firstCounter - action.value }
		case 'increment2':
			return { ...state, secondCounter: state.secondCounter + action.value }
		case 'decrement2':
			return { ...state, secondCounter: state.secondCounter - action.value }
		case 'reset':
			return initialState
		default:
			return state
	}
}

function CounterTwo() {
	const [count, dispatch] = useReducer(reducer, initialState)

	return (
		<div>
			<div>Count = {count.firstCounter}</div>
			<button onClick={() => dispatch({ type: 'increment', value: 1 })}>
				Increment
			</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
				Decrement
			</button>
			<button onClick={() => dispatch({ type: 'increment', value: 5 })}>
				Increment 5
			</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
				Decrement 5
			</button>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
			<div>Secound Counter = {count.secondCounter}</div>
			<div>
				<button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
					Increment
				</button>
				<button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
					Decrement
				</button>
			</div>
		</div>
	)
}

export default CounterTwo


/* NOTE:-1. In the first code, the state is a simple integer, and actions are represented as strings. This can be limiting if we need to manage more complex state or have actions with multiple parameters.
        2.in second example the state is structured as an object with named properties (firstCounter and secondCounter). Actions are objects with a type property and additional values when needed. 
          This structure makes it easier to manage complex state.
        3.The second code allows you to perform actions with more granularity. You can increment and decrement both firstCounter and secondCounter independently, and you can reset each one separately.

        */

/* -------------------------------------------------------Usereducer with multiple reducers--------------------------------------------------------------------------
   a. Multiple usereducer wuth same reducer function  */
import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

function CounterThree() {
	const [count, dispatch] = useReducer(reducer, initialState)
	const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

	return (
		<div>
			<div>Count = {count}</div>
			<button onClick={() => dispatch('increment')}>Increment</button>
			<button onClick={() => dispatch('decrement')}>Decrement</button>
			<button onClick={() => dispatch('reset')}>Reset</button>

			<div>Count = {countTwo}</div>
			<button onClick={() => dispatchTwo('increment')}>Increment</button>
			<button onClick={() => dispatchTwo('decrement')}>Decrement</button>
			<button onClick={() => dispatchTwo('reset')}>Reset</button>
		</div>
	)
}

export default CounterThree


//b Multiple userreducers with Diffrent Reducer functions 

import React, { useReducer } from 'react';

// First useReducer for managing count state
const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

// Second useReducer for managing user state
const userReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return { ...state, isLoggedIn: true };
    case 'logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

function MultiReducerComponent() {
  const [count, countDispatch] = useReducer(countReducer, 0);
  const [user, userDispatch] = useReducer(userReducer, { isLoggedIn: false });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => countDispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => countDispatch({ type: 'decrement' })}>Decrement</button>

      <p>User is {user.isLoggedIn ? 'logged in' : 'logged out'}</p>
      <button onClick={() => userDispatch({ type: 'login' })}>Log In</button>
      <button onClick={() => userDispatch({ type: 'logout' })}>Log Out</button>
    </div>
  );
}


   
