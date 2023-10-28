/*The useContext hook is a feature in React that allows you to consume data from a context without the need for prop drilling. 

Steps to follow :-
1. Create a Context :-To use useContext, you first need to create a context using React.createContext. This context can hold some shared data that you want to make available to other components*/
   import React, { createContext } from 'react';
  // Create a context with an initial value
   const MyContext = createContext(initialValue);

//2. Provide the Context : You then wrap a part of your component tree with a Context.Provider component to make the context available to child components.
  <MyContext.Provider value={/* data you want to share */}>
  {/* Your components */}
  </MyContext.Provider>

//3.Consume the Context :- To consume the context data in a child component, you use the useContext hook. It returns the current context value.    
  import React, { useContext } from 'react';
import MyContext from './MyContext'; // Import the context

function MyComponent() {
  const contextData = useContext(MyContext);

  return (
    // Use contextData here
    );
  }


/*-------------------------------------------------------------Class Context API v/s  Functional UseContext-----------------------------------------------------------

In both ways first two steps will be remain same that creating the context and providing context will reamin same that we do in App.jsx 
only diffrence will come in consumption part , usecontext consumption will be so much easy  than class context api consumption  */

//App.jsx -- context creation and providing 
import React from 'react'
import './App.css'
import ComponentC from './components/ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
	return (
		<div className="App">
			<UserContext.Provider value={'Amit'}>
         <ChannelContext.Provider value={'ProCoder'}>
					  <ComponentC />
				 </ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

export default App



//intermidiate component
import React from 'react'
import ComponentE from './ComponentE'

function ComponentC() {
	return <ComponentE />
}
export default ComponentC



//class context Api -- > context - consumption 

import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
	return (
		<div>
			<UserContext.Consumer>
				{user => {
					return (
						<ChannelContext.Consumer>
							{channel => {
                return <div>User context value {user}, channel context value {channel}</div>
							}}
						</ChannelContext.Consumer>
					)
				}}
			</UserContext.Consumer>
		</div>
	)
}

export default ComponentF


//Usecontext conSumption
import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'

function ComponentE() {

  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return <div> User is {user} and channel is {channel}</div>
}

export default ComponentE
