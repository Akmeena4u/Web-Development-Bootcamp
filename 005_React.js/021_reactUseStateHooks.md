

# React useState Hook

React's `useState` hook is a fundamental feature introduced in React 16.8, allowing functional components to manage state.

## Basic Usage:

```jsx
import React, { useState } from 'react';

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
```

## Functional Update Based on Previous State:

```jsx
import React, { useState } from 'react';

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </>
  );
}

export default HookCounterTwo;
```

## Multiple State Variables:

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello, world!');
  const [isToggle, setIsToggle] = useState(false);

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
```

## Object State:

```jsx
import React, { useState } from 'react';

function HookCounterThree() {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}

export default HookCounterThree;
```

## Array State:

```jsx
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
```

