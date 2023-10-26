/*
React.memo is a higher-order component (HOC) introduced in React 16.6 that is used to optimize the performance of functional components. 
It's similar in purpose to React's Pure Components for class components. React.memo is used to prevent unnecessary re-renders of functional components by memoizing the result of a component rendering.
*/

import React from 'react';

const MyComponent = (props) => {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
};

export default React.memo(MyComponent);
