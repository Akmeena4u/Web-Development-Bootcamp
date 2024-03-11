

# React Lists and Keys

Lists are used to display data in an ordered format and are commonly used for displaying menus on websites. In React, lists can be created using the `map()` function to traverse and update the list items. Here's a basic example:

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<ul>{listItems}</ul>);
```

## Basic List Component

Lists are often rendered inside a component. We can refactor the previous example into a component that accepts an array of numbers and outputs a list of elements.

```jsx
// App.jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

// main.jsx
const numbers = [1, 2, 3, 4, 5];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers} />);
```

**Note:** When running this code, a warning may be given that a key should be provided for list items.

## Keys

Keys help React identify which items have changed, are added, or are removed. They should be given to the elements inside the array to give the elements a stable identity. Keys can be assigned in multiple ways:

### Using Strings of the Array Numbers

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

### Using IDs

```jsx
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

### Using Index as Key (as a Last Resort)

```jsx
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

**Note:**
1. Avoid using the index as a key whenever possible, as it may negatively impact performance.
2. Keys must only be unique among siblings of an array.

