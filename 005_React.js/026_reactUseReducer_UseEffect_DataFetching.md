# Data Fetching in React using `useEffect` and `useReducer`

Data fetching is a common task in React applications, and it can be accomplished using different methods. Two primary approaches are using `useEffect` and `useReducer`. Let's explore both of them.

## Data Fetching with `useEffect`

In this approach, you use the `useEffect` hook to fetch data when the component mounts. It's a straightforward and easy-to-understand method, suitable for simple scenarios.

### Example (`DataFetchingOne.jsx`):

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setLoading(false);
        setPost(response.data);
        setError('');
      })
      .catch(error => {
        setLoading(false);
        setPost({});
        setError('Something went wrong!');
      });
  }, []);

  return (
    <div>
      {loading ? 'Loading' : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
```

## Data Fetching with `useReducer`

In this approach, you use the `useReducer` hook along with `useEffect` to manage more complex state and actions. It provides a scalable solution and is suitable for larger projects.

### Example (`DataFetchingTwo.jsx`):

```jsx
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'Something went wrong!',
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []);

  return (
    <div>
      {state.loading ? 'Loading' : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;
```

**Note:**
- The `useEffect` approach is more readable and suitable for simpler scenarios.
- The `useReducer` approach is more scalable and better for handling complex state and actions in larger projects.
