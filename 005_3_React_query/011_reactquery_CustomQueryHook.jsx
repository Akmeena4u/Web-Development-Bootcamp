//Custom query hooks simplify the integration of React Query into your components and promote code reusability.
/*Benefits:

Encapsulating data-fetching logic within a custom query hook promotes code reusability and reduces duplication.
Custom hooks provide a cleaner and more organized way to integrate React Query into your components.
Custom hooks allow you to keep query-specific logic in one place, making your codebase more maintainable.*/


// CustomQueryHook.js

import { useQuery } from 'react-query';

async function fetchData() {
  // Your data-fetching logic here
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export function useCustomQuery() {
  return useQuery('myQueryKey', fetchData, {
    // Query options here
    onError: (error) => {
      // Handle errors, e.g., log or display an error message
      console.error('Error:', error);
    },
  });
}


// MyComponent.js

import { useCustomQuery } from './CustomQueryHook';

function MyComponent() {
  const { data, isLoading, isError, error } = useCustomQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  // Render your component with data
  return (
    <div>
      <h1>My Component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default MyComponent;


/*n this component:

You import the useCustomQuery hook from the CustomQueryHook.js file.
You call the useCustomQuery hook to initiate the query and access the result, including data, loading state, and error state.
Depending on the query state, you can render loading indicators or display the data.*/
