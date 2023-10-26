/*-----------------------------------------------------------Life cycle methods -----------------------------------------------------------------------------
In React, components have a lifecycle that consists of different phases. Each phase has a set of lifecycle methods that are called at specific points in the component's lifecycle.
These methods allow you to control the component's behavior and perform specific actions at different stages of its lifecycle.

A component's lifecycle has three main phases: the Mounting Phase, the Updating Phase, and the Unmounting Phase.
The Mounting Phase begins when a component is first created and inserted into the DOM. The Updating Phase occurs when a component's state or props change. And the Unmounting Phase occurs when a component is removed from the DOM.


------------------------------------------------------1.Mounting phase ----------------------------------------------------------------------------------------
The mounting phase in React's component lifecycle is primarily used for setting up the initial state, rendering the component, and performing actions immediately after 
the component is inserted into the DOM. Here are common use cases for each of the mounting phase methods: */

//1-----constructor(props): This method is called before the component is mounted and is used for initializing state and binding event handlers.
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default Counter;

/*2----The render() lifecycle method
The render() method is responsible for generating the component's virtual DOM representation based on its current props and state. 
It is called every time the component needs to be re-rendered, either because its props or state have changed, or because a parent component has been re-rendered. */

render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}


/*3---getDerivedStateFromProps() lifecycle method:_-
During the mounting phase, getDerivedStateFromProps() is called after the constructor and before render(). This method is called for every render cycle and provides an opportunity to update the component's state based on changes in props before the initial render.
The signature of getDerivedStateFromProps() is as follows: */
static getDerivedStateFromProps(props, state)

/*It takes two parameters:
props: The updated props for the component.
state: The current state of the component.

The method should return an object that represents the updated state of the component, or null if no state update is necessary. 
It's important to note that getDerivedStateFromProps() is a static method, which means it does not have access to the this keyword and cannot interact with the component's instance methods or properties.
*/

  static getDerivedStateFromProps(props, state) {
    return {favoritefood: props.favfod };
  }
   
/*4--The componentDidMount() lifecycle method
The componentDidMount() method is called once the component has been mounted into the DOM. It is typically used to set up any necessary event listeners or timers, 
perform any necessary API calls or data fetching, and perform other initialization tasks that require access to the browser's DOM API.  */
import React from 'react';
import ReactDOM from 'react-dom';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritefood: "rice"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritefood: "pizza"})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Food is {this.state.favoritefood}</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root')); 



/*------------------------------------------------------------------------Updating phase-------------------------------------------------------------------
This phase occurs when a component's props or state changes, and the component needs to be updated in the DOM.

//1-------The shouldComponentUpdate() lifecycle method
The shouldComponentUpdate()  method is called before a component is updated. It takes two arguments: nextProps and nextState. This method returns a boolean value that
determines whether the component should update or not. If this method returns true, the component will update, and if it returns false, the component will not update.  */


  shouldComponentUpdate(nextProps, nextState) {
    // Only re-render if the favoriteFood state has changed
    return this.state.favoriteFood !== nextState.favoriteFood;
  }


/*2-----The componentWillUpdate() lifecycle method
componentWillUpdate() is a lifecycle method in React that gets called just before a component's update cycle starts. It receives the next prop and state as arguments 
and allows you to perform any necessary actions before the component updates. */

  componentWillUpdate(nextProps, nextState) {
    if (nextState.count !== this.state.count) {
      console.log(`Count is about to update from ${this.state.count} to ${nextState.count}.`);
    }
  }

  
/*3----The componentDidUpdate lifecycle method
The componentDidUpdate() method is a lifecycle method in React that is called after a component has been updated and re-rendered.
It is useful for performing side effects or additional operations when the component's props or state have changed.  */

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Count has been updated:', this.state.count);
    }
  }


/*The getSnapshotBeforeUpdate lifecycle method
The getSnapshotBeforeUpdate() method is called just before the component's UI is updated. It allows the component to capture some information about the current 
state of the UI, such as the scroll position before it changes. This method returns a value that is passed as the third parameter to the componentDidUpdate() method.*/
import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritefood: "rice"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritefood: "pizza"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritefood;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite food is " + this.state.favoritefood;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Food is {this.state.favoritefood}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));


/*---------------------------------------------------------------------------3- Unmounting Phase---------------------------------------------------------------

The unmounting phase refers to the lifecycle stage when a component is being removed from the DOM (Document Object Model) and is no longer rendered or accessible.
During this phase, React performs a series of cleanup operations to ensure that the component and its associated resources are properly disposed of. */


/*1------componentWillUnmount(): 
This method is called just before the component is removed from the DOM. It allows you to perform any necessary cleanup, such as canceling timers, removing event listeners,
or clearing any data structures that were set up during the mounting phase.

After componentWillUnmount() is called, the component is removed from the DOM and all of its state and props are destroyed.
It's important to note that once a component is unmounted, it cannot be mounted again. If you need to render the component again, you will need to create a new instance of it.

Understanding these lifecycle methods can help developers to control the component's behavior and perform specific actions at different stages of its lifecycle.*/
