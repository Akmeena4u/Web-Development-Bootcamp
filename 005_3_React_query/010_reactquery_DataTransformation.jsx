/*"Data Transformation," tells us how to use React Query's capabilities to transform and shape data retrieved from API endpoints before it's used in our application. Data transformation is a powerful feature that allows us to tailor the data to fit our specific needs.
select option allows us to extract and shape the specific parts of the data as we need from the response of an API call. This can be especially useful when the API response contains a large amount of data, but we only need a subset of it for our application

Defining the select Option:
When creating a query using the useQuery hook, you can include the select option to specify which parts of the response data to select. The select option takes a callback function that allows you to transform the data
*/

import { useQuery } from 'react-query';

const { data, isLoading, isError, error } = useQuery('myQueryKey', fetchData, {
  select: (data) => {
    // Extract and shape the data as needed
    return data.map((item) => ({ id: item.id, name: item.name }));
  },
});

if (isLoading) {
  return <p>Loading...</p>;
}

if (isError) {
  return <p>Error: {error.message}</p>;
}

// Render your transformed data

