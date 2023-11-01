//Polling is a common technique in web applications for regularly fetching updated data from a server at predefined intervals

//1.Polling with React Query :- The polling option defines the frequency (in milliseconds) at which the query should be automatically refetched.
    useQuery('yourQueryKey', fetchData, {
       polling: 5000, // Poll every 5 seconds (5000 milliseconds)
   });
    //In this example, the query with the key 'yourQueryKey' will automatically refetch its data every 5 seconds (5000 milliseconds).



//2.Dynamic Polling: we can also make the polling interval dynamic based on certain conditions
    useQuery('yourQueryKey', fetchData, {
  polling: (data) => (data?.length < 10 ? 5000 : 10000), // Poll every 5 seconds if data length is less than 10, otherwise, every 10 seconds
});


//3. Disabling Polling:To disable polling for a query, simply set the polling option to false:
  useQuery('yourQueryKey', fetchData, {
  polling: false, // Disable polling
});



//In React Query, the refetchInterval and refetchIntervalInBackground options are used to fine-tune the behavior of data fetching through polling.

//1. refetchInterval:The refetchInterval option determines how frequently a query should be polled for updates. It specifies the polling interval in milliseconds, and the query will automatically refetch data at the specified interval.
  useQuery('yourQueryKey', fetchData, {
  refetchInterval: 5000, // Poll every 5 seconds (5000 milliseconds)
});


//2.refetchIntervalInBackground: The refetchIntervalInBackground option is used to control whether polling should continue when the application is in the background (e.g., the user has switched to a different tab or minimized the window).

useQuery('yourQueryKey', fetchData, {
  refetchInterval: 5000, // Poll every 5 seconds
  refetchIntervalInBackground: true, // Poll even when the application is in the background
});

