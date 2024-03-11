# React `useContext` Hook

The `useContext` hook is a feature in React that facilitates the consumption of data from a context without the need for prop drilling. Contexts are an efficient way to share and manage state across components.

## Steps to Use `useContext`:

### 1. Create a Context:

To use `useContext`, you first need to create a context using `React.createContext`. This context can hold shared data that you want to make available to other components.

```jsx
// Create a context with an initial value
const MyContext = createContext(initialValue);
```

### 2. Provide the Context:

Wrap a part of your component tree with a `Context.Provider` component to make the context available to child components.

```jsx
<MyContext.Provider value={/* data you want to share */}>
  {/* Your components */}
</MyContext.Provider>
```

### 3. Consume the Context:

To consume the context data in a child component, you use the `useContext` hook. It returns the current context value.

```jsx
import React, { useContext } from 'react';
import MyContext from './MyContext'; // Import the context

function MyComponent() {
  const contextData = useContext(MyContext);

  return (
    // Use contextData here
  );
}
```

## Class Context API vs. Functional `useContext`:

### Class Context API (Traditional Way):

```jsx
import React from 'react';
import { UserContext, ChannelContext } from '../App';

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {user => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return <div>User context value {user}, channel context value {channel}</div>;
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
```

### Functional `useContext`:

```jsx
import React, { useContext } from 'react';
import ComponentF from './ComponentF';
import { UserContext, ChannelContext } from '../App';

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return <div>User is {user} and channel is {channel}</div>;
}
```

In both approaches, the first two steps (creating and providing the context) remain the same. The crucial difference lies in the consumption part, where the `useContext` hook simplifies the process compared to the traditional `Context.Consumer` approach.

