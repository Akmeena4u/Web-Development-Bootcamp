
# React useEffect Hook

In React, side effects occur when components interact with the outside world, resulting in actions that are not predictable. The `useEffect` hook is fundamental for managing side effects in functional components. It accepts a callback function as its first argument, and an optional array of dependencies as its second argument.

## Basic Usage:

```jsx
import React, { useEffect, useState } from 'react';

function ExampleComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Code for side effect (e.g., data fetching) goes here
  }, []);
  
  return (
    <div>
      {/* Render component content */}
    </div>
  );
}
```

## Common Use Cases:

- **Data Fetching:**
  Fetching data from APIs and updating state with the fetched data.

- **Network Requests:**
  Making network requests, handling responses, and dealing with errors.

- **Subscription to Events:**
  Subscribing to and handling events, such as keyboard input, mouse events, or custom events.

- **Updating the DOM:**
  Manipulating the DOM, like changing element styles, adding/removing elements, or focusing on input fields.

- **Timers and Intervals:**
  Managing timers and intervals for periodic tasks.

- **State Updates Based on Previous State:**
  Ensuring state updates depend on the previous state, avoiding race conditions.

- **Cleanup:**
  Returning a cleanup function from the `useEffect` callback to handle tasks like unsubscribing from event listeners, canceling network requests, or cleaning up timers and intervals.

## UseEffect Flow:

1. Component rendering
2. `useEffect` scheduled
3. Cleanup (if `useEffect` exists in the previous step)
4. `useEffect` execution
5. Dependency check

## UseEffect as a Replacement for Lifecycle Methods:

### `componentDidMount`:
```jsx
useEffect(() => {
  // Code for componentDidMount
}, []);
```

### `componentDidUpdate`:
```jsx
useEffect(() => {
  // Code for componentDidUpdate
}, [dependency1, dependency2]);
```

### `componentWillUnmount`:
```jsx
useEffect(() => {
  // Code for componentWillUnmount

  return () => {
    // Cleanup code
  };
}, []);

## Conditionally Run `useEffect`:

```jsx
useEffect(() => {
  // Code for useEffect
}, [dependency]);
```

## `useEffect` with Cleanup Function:

```jsx
useEffect(() => {
  // Code for useEffect

  return () => {
    // Cleanup code
  };
}, [dependency]);

## Data Fetching with `useEffect` and Axios:

```jsx
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
```

## Data Fetching with Dynamic Post Selection:

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>Fetch Post</button>
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetching;
```



