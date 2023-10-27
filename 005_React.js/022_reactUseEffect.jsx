/*Side Effects --A React side-effect occurs when we use something that is outside the scope of React.js in our React components . Side effects are not predictable because they are actions which are performed with the "outside world.

The useEffect hook in React is a fundamental hook for managing side effects in functional components. Side effects are operations that occur as a result of component rendering,
state changes, or other events, such as data fetching, subscribing to events, updating the DOM, and more.useEffect accepts two arguments. The second argument is optional.  

useEffect(<function>, <dependency>)

The first argument is a callback function that contains the code for your side effect.
The second argument is an optional array of dependencies. It defines when the effect should run.

By default, the effect runs after every render, including the initial render. When you provide an array of dependencies, the effect will run whenever
any of the dependencies change. If you provide an empty array ([]), the effect runs only after the initial render.

it is close replacement of componentDidUpdate(),ComponentDidMount() , componnetwillunmount()

-----------------------------------------------------------------Common Use Cases:-------------------------------------------------------------------------------

Data Fetching: Fetching data from APIs and updating state with the fetched data.
Network Requests: Making network requests, handling responses, and dealing with errors.
Subscription to Events: Subscribing to and handling events, such as keyboard input, mouse events, or custom events.
Updating the DOM: Manipulating the DOM, like changing element styles, adding/removing elements, or focusing on input fields.
Timers and Intervals: Managing timers and intervals for periodic tasks.
State Updates Based on Previous State: Ensuring state updates depend on the previous state, avoiding race conditions.
Cleanup: Returning a cleanup function from the useEffect callback to handle tasks like unsubscribing from event listeners, canceling network requests, or cleaning up timers and intervals.


------------------------------------------------------------UseEffect Flow------------------------------------------------------------------------------------

1.Component rendering ---> UseEffect sheduled --->CleanUp(If in previous step UseEffect exist )--> UseEffect Execution --> Dependency Check 

Note :-1.The execution of the useEffect callback is scheduled to occur after the render but before the component appears in the updated DOM.
       2.If you have provided an array of dependencies as the second argument of useEffect, React compares the current values of the dependencies with their previous values.
       3.if the array of dependencies is empty ([]), the useEffect always runs after the initial render but not on subsequent renders.
       4.The process continues whenever dependencies change or the component renders.


---------------------------------------------------UseEffect-Replacement of Lifecycle methods ---------------------------------------------------------------------
the useEffect hook in React is a close replacement for the lifecycle methods componentDidMount, componentDidUpdate, and componentWillUnmount used in class-based components.
It allows you to manage side effects at different stages of a component's lifecycle in functional component  */

//componentDidMount:-is invoked after the component is initially rendered and mounted in the DOM.it can be achieved with useEffect by providing an empty dependency array. 
useEffect(() => {
  // This code will run after the initial render, similar to componentDidMount
}, []);

//componentDidUpdate is called after the component's state or props change and the component re-renders. it can be achived by providing dependency in useEffects 2 arguments
useEffect(() => {
  // This code will run whenever dependencies (e.g., state or props) change, similar to componentDidUpdate
}, [dependency1, dependency2]);

//componentWillUnmount is used for cleanup tasks when the component is about to be unmounted and removed from the DOM.
useEffect(() => {
  // This code will run after the initial render

  return () => {
    // This code will run before the component unmounts, similar to componentWillUnmount
  };
}, []);



//Class component -using lifestyle methods 
import React, { Component } from 'react'

class ClassCounterOne extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			name: ''
		}
	}

	componentDidMount() {
		document.title = `Clicked ${this.state.count} times`
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			console.log('Updating document title')
			document.title = `Clicked ${this.state.count} times`
		}
	}

	render() {
		return (
			<div>
				<input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Click {this.state.count} times
				</button>
			</div>
		)
	}
}

export default ClassCounterOne


//Same above Functionality using Functional components -UseEffect Hook
import React, { useState, useEffect } from 'react'

function HookCounterOne() {
	const [count, setCount] = useState(0)
  
	useEffect(() => {
		document.title = `You clicked ${count} times`
	},)
  
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>  useEffect - Click {count} times		</button>
		</div>
	)
}

export default HookCounterOne


/*-----------------------------------------------------Conditionally run Useeffects---------------------------------------------------------------------------------
In React, we can conditionally run effects using the useEffect hook by providing an array of dependencies that determine when the effect should run.
This is useful when we want to run an effect only when specific conditions are met. we will give state or props that we wants to track for changes we will pass that in 2nd parameter   */

import React, { useState, useEffect } from 'react'

function HookCounterOne() {
	const [count, setCount] = useState(0)
	const [name, setName] = useState('')
	useEffect(() => {
		console.log('useEffect - Updating document title ')
		document.title = `You clicked ${count} times`
	}, [count])
	return (
		<div>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<button onClick={() => setCount(count + 1)}>
				useEffect - Click {count} times
			</button>
		</div>
	)
}

export default HookCounterOne

/*Note:-Use the useEffect hook to define the effect that should run only once. To do this, you can provide an empty dependency array ([]) as the second argument to useEffect. */


/*------------------------------------------------------------------------UseEffect With CleanUp Function----------------------------------------------------------------
In React, the useEffect hook is commonly used to manage side effects and perform cleanup when a component is unmounted or when a specific dependency changes.

When we Use the useEffect hook to define the effect we want to run. Additionally, we will return a cleanup function within the effect. 
This cleanup function will be executed when the component unmounts or when specific dependencies change.  */

import React, { useEffect, useState } from 'react';

function EffectWithCleanupComponent() {
  const [count, setCount] = useState(0);
  let timer;

  const startTimer = () => {
    timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default EffectWithCleanupComponent;


/*------------------------------------------------------------------Data Fetching -Using UseEffect and AXioms-----------------------------------------------------
Here we will learn how to fetch data using the useEffect hook and the Axios library in a React component. 

Firstly Install Axios , which allows you to make HTTP requests in React. 
npm install axios
*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetchingPart1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  //We use axios.get to make a GET request to the specified URL. When the data is fetched successfully, we update the data state with the response data. If there's an error, we log an error message.
  return (
    <div>
      <h2>Data Fetching Part 1 - Fetching Data with Axios</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingPart1;


//part-2 -Return indivisual posts from Whole APi
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
	const [post, setPost] = useState({})
	const [id, setId] = useState(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => {
        console.log(res)
        setPost(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [idFromButtonClick])

	const handleClick = () => {
		setIdFromButtonClick(id)
	}

	return (
		<div>
			<input type="text" value={id} onChange={e => setId(e.target.value)} />
			<button type="button" onClick={handleClick}>Fetch Post</button>
			<div>{post.title}</div>
			{/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
		</div>
	)
}

export default DataFetching


