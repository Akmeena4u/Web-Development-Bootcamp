# `useCallback` and `useMemo` Hooks in React

React provides the `useCallback` and `useMemo` hooks to optimize performance in scenarios where functions or computations need to be memoized.

## `useCallback` Hook

`useCallback` is a React hook that returns a memoized version of the callback function. The memoized function is created only when one of the specified dependencies changes.

### Why Use `useCallback`?

The primary use cases for `useCallback` are:
1. Passing functions as props to child components.
2. Including functions as dependencies in `useEffect` or other hooks.
3. Having functions that depend on specific state or props and should only be recreated when those dependencies change.

### How to Use `useCallback`

```jsx
const memoizedFunction = useCallback(() => {
  // Your function logic
}, [dependency1, dependency2]);
```

- The first argument is the function you want to memoize.
- The second argument is an array of dependencies (optional). The memoized function will only be recreated if any of these dependencies change.

## `React.memo` for Functional Components

`React.memo` is a higher-order component in React that can be used to optimize the rendering performance of functional components. It prevents unnecessary re-renders by memoizing the component based on its props.

### How to Use `React.memo`

```jsx
const MemoizedComponent = React.memo(FunctionalComponent);
```

- `MemoizedComponent` is a memoized version of `FunctionalComponent`.
- It will re-render only if its props change.

## `useMemo` Hook

`useMemo` is another React hook that allows you to memoize the result of an expensive computation. It takes a function and an array of dependencies and returns the memoized result of that function.

### Why Use `useMemo`?

The primary use case for `useMemo` is to avoid recomputing expensive values on every render.

### How to Use `useMemo`

```jsx
const memoizedValue = useMemo(() => {
  // Expensive computation
  return result;
}, [dependency1, dependency2]);
```

- The first argument is the function that performs the expensive computation.
- The second argument is an array of dependencies. The memoized value will only be recomputed if any of these dependencies change.

**Note:**
- `useMemo` returns a memoized value.
- `useCallback` returns a memoized function.

These hooks are helpful in optimizing performance in React applications by preventing unnecessary re-renders and recomputations. Use them judiciously based on your specific use case.
