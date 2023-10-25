/*----------------------------------------------------------------------------React list--------------------------------------------------------------------------

Lists are used to display data in an ordered format and mainly used to display menus on websites. In React, Lists can be created in a similar way as we create lists in JavaScript
we use map() function to traverse and update our list and store all <li> of map() into a new array listItems  and Then, we can include the entire listItems array inside a <ul> element:
*/

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<ul>{listItems}</ul>);


/*---------------------------------------------------------------Basic List Component------------------------------------------------------------------------
Usually you would render lists inside a component.We can refactor the previous example into a component that accepts an array of numbers and outputs a list of elements.

*/
//App.jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

//main.jsx
const numbers = [1, 2, 3, 4, 5];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers} />);

//Note:When we  run this code, we’ll be given a warning that a key should be provided for list items


/*-----------------------------------------------------------------------------Keys :------------------------------------------------------------------------------
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:
we can assign keys in multiple ways like follows 
*/
//using strings of the array numbers
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);

//using a id 
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);

//index as key : When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:

const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);

/*Note:- 1.try to avoid useing index as key it may negatively impact performance and If we choose not to assign an explicit key to list items then React will default to using indexes as keys.
         2.Keys Must Only Be Unique Among Siblings of a array
