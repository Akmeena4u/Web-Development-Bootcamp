/*React hooks are a set of functions provided by the React library that enable functional components to manage state, side effects, and other React features that were 
 traditionally exclusive to class components. They were introduced in React 16.8 to address various challenges and limitations of class components and to promote the use of functional components.

Here are some key aspects and features of React hooks:
1.State Management: The useState hook allows functional components to manage local component state. You can declare and update state variables within a functional component.
2.Side Effects: The useEffect hook enables functional components to handle side effects, such as data fetching, subscriptions, and interaction with the DOM. It replaces the 
                componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods found in class components.
3.reusability: Hooks enable reusability of stateful logic and promote the creation of custom hooks for sharing logic.
4.Complex Component Logic: They make it easier to manage complex component logic by encapsulating it in custom hooks.
5.Improved Code Organization: Hooks encourage better code organization within functional components.


Hook Rules :- There are 3 rules for hooks:
1.Hooks can only be called inside React function components.
2.Hooks can only be called at the top level of a component.
3.Hooks cannot be conditional
4.All custom hooks should be prefixed with "use" to indicate that they are hooks. For example, useCounter

                

