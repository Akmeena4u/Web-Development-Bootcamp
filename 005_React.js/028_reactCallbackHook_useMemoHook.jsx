/*usecallback is a hook that will return a memoized version of the callback  function that only changes if one of the dependencies changed

memoized function :- A "memoized" function is a function that caches its results, so if you call it again with the same arguments, it returns the cached result instead of re-computing the result. 

 useCallback is a React hook that memoizes functions, preventing them from being recreated on every render. When a function is recreated on every render,
 it can lead to unnecessary re-renders in components, impacting performance. useCallback helps address this issue by memoizing functions, ensuring they
 are only recreated when their dependencies change.

Why Use useCallback?
The primary use case for useCallback is to optimize performance in scenarios where:
1.we pass functions as props to child components.
2.we include functions as dependencies in useEffect or other hooks.
3.we have functions that depend on specific state or props and should only be recreated when those dependencies change.

How to Use useCallback
The useCallback hook takes two arguments:
1.The function you want to memoize.
2.An array of dependencies (optional).  */
const memoizedFunction = useCallback(() => {
  // Your function logic
}, [dependency1, dependency2]);


//react.memo -it  can be used to optimize the rendering performance of functional components by preventing unnecessary re-renders ,It returns a new component that is memoized
const MemoizedComponent = React.memo(FunctionalComponent);









/*-----------------------------------------------------------Usememo hook-------------------------------------------------------------------------------
What is useMemo?
useMemo is a React hook that allows you to memoize the result of an expensive computation. It takes a function and an array of dependencies,
and it returns the memoized result of that function. The result is cached and will only be recomputed when the dependencies change.

NOTE:-The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. 


