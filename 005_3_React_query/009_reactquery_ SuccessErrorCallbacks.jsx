/*
Query Success Callback:
A success callback is a function that gets executed when a query successfully fetches data.
You can define a success callback function when creating a query using the onSuccess option.
The success callback receives the data fetched by the query as its argument.  */

useQuery('myQueryKey', fetchData, {
  onSuccess: (data) => {
    // Process the data or perform additional actions on success
  },
});



/*Query Error Callback:

An error callback is a function that gets executed when a query encounters an error, such as a network request failure or an API response error.
You can define an error callback function when creating a query using the onError option.
The error callback receives the error object as its argument.  */

useQuery('myQueryKey', fetchData, {
  onError: (error) => {
    // Handle the error, e.g., display an error message or log the error
  },
});


/*
NOTE:-
1. Handling Errors:In the error callback, you can implement error-handling logic, such as displaying an error message to the user or logging the error for debugging.
2. Custom Data Processing: In the success callback, you can process the fetched data as needed. This can include data transformation, filtering, or preparing the data for display.

*/
