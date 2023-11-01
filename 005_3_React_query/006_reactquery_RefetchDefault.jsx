/*In React Query, the refetchOnWindowFocus and refetchOnReconnect options are used to control when queries should be automatically refetched based on certain events.
  These options can help ensure that your application's data remains up-to-date and responsive.  

  1. refetchOnMount:
  The refetchOnMount option determines whether a query should be automatically refetched when the component that uses the query mounts (i.e., is initially rendered).
  By default, refetchOnMount is set to false. This means that queries will not automatically refetch when the component mounts.  */

  useQuery('yourQueryKey', fetchData, {
    refetchOnMount: true,
  });


/*2.  refetchOnWindowFocus:
     The refetchOnWindowFocus option controls whether a query should be automatically refetched when the application window regains focus.
     By default, refetchOnWindowFocus is set to false. This means that queries will not automatically refetch when the window regains focus.  */

useQuery('yourQueryKey', fetchData, {
  refetchOnWindowFocus: true,
});


//example

// Import necessary dependencies
import React from 'react';
import { useQuery } from 'react-query';

// A function to fetch data (simulated API call)
const fetchData = async () => {
  // Simulate a delay for the API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 'Data from the API';
};

function App() {
  // Define a query using React Query
  const { data, isLoading, isError } = useQuery('exampleQuery', fetchData, {
    refetchOnMount: true,         // Automatically refetch on component mount
    refetchOnWindowFocus: true,   // Automatically refetch when the window regains focus like changing back tabs 
    refetchOnReconnect: true,     // Automatically refetch on network reconnection
  });

  return (
    <div>
      <h1>React Query Example</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching data</p>
      ) : (
        <p>Data: {data}</p>
      )}
    </div>
  );
}

export default App;
