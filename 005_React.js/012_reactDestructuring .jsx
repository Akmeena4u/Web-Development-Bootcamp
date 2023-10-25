/*--------------------------------------------------------------------------Destructuring react------------------------------------------------------------------

Destructuring in React is a technique that allows you to extract specific values from objects and arrays, typically used for props and state, to make your code cleaner and more concise.
*/
//Destructing Arrays in js:- When destructuring arrays, the order that variables are declared is important.
const vehicles = ['mustang', 'f-150', 'expedition'];
// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
//new way
const [car, truck, suv] = vehicles;

/*--------------------------------------------------------------------------Destructuring Props:----------------------------------------------------------------
In React, functional components receive props as an argument. You can destructure specific props directly in the function parameter list to access them. */

function MyComponent({ prop1, prop2 }) {
  // Destructuring Inside the Component:--    const [prop1,prop2] =props;   ,,,  by destructuring we are eliminating use of probs.names, probs,age,probs.class each time  and it give us choice to use 
  return (
    <div>
      <p> {prop1}</p>
      <p> {prop2}</p>
    </div>
  );
}


//NOTE:  Default Values: You can set default values using destructuring in case a prop or state value is undefined.
function MyComponent({ prop1 = 'Default Prop', prop2 }) {
  // 'prop1' will be 'Default Prop' if it's not provided
}

