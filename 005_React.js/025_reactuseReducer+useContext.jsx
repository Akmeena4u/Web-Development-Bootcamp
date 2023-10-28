/*userreducer is only used for local state management but by combining it with usecontext we can manage global states(share between components )

 Here's How to Do It in Two Simple Steps:
Step 1: Create a Store:- First, we make a place to store the data. We create a file called store.js or App.jsx. In this file, we use useReducer to keep track of our data.
        It's like a manager for our data. We also set up the initial value and the rules for how the data can change. We make a "context" too, which is like a way to share this data with other parts of our app.

Step 2: Share the Data :- Now, we create other parts of our app. When we want to use the data we've stored in our "store," we just use the context we made in Step 1.
        It's like picking up the phone and calling the manager to get the data or make changes.

*/

//create a store 

import React, { useReducer } from 'react'
import './App.css'

import ComponentA from './components/ComponentA'

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

export const CountContext = React.createContext()

function App() {
	const [count, dispatch] = useReducer(reducer, initialState)
	return (
		<CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>
			<div className="App">
				count-{count} 
				<CmponentA /> 
				
			</div>
		</CountContext.Provider>
	)
}

export default App





//use shared data
import React, {useContext} from 'react'
import { CountContext } from '../App';

function ComponentA() {
  const countContext = useContext(CountContext)
  return (
    <div>
      Component A {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
			<button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
			<button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA
