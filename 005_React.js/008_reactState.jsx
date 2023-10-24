/* in react we can not directly change value of any varible of a component we can change with help of props and state only . by using props we needs to pass values from parent 
   components to child and our child components remains immutable but how we can do these changes from child component itself without taking help of parent component so here states helps us

   The state is a built-in React object that is used to contain data or modify data about the component from component itself without using parent component(props). 
   A component's state can change over time; whenever it changes, the component re-renders.

   The state object is initialized in the constructor:*/


//-------------------------------------------------------------------Initializing State:-Class components ---------------------------------------------------------------------
    //State is typically initialized in the constructor of a class component using this.state 

    class Car extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
      };
    }
      
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}



/*--------------------------------------------------------Changing the state Object- Class components -------------------------------------------------------------

To change a value in the state object, use the this.setState() method.
When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).*/

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}

/*---------------------------------------------------Initialising state- function components ----------------------------------------------------------------
  In functional components, you can manage state using the useState hook
