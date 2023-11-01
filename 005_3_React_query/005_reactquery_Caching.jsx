/*The query cache is one of the core features of React Query. It helps in managing and caching the results of queries
 It helps optimize data fetching and ensures that the most recent data is available without unnecessary network requests.

1.Query Execution:
When you execute a query using useQuery or a similar hook, React Query performs the following steps:
It checks if the query key exists in the cache.
If the query key is found, React Query checks if the cached data is fresh (not stale). If the data is fresh, it returns the cached data directly.
If the data is stale or the query key is not found in the cache, React Query proceeds to fetch the data from the server using the query function you provided.

2.Data Caching:
When the data is fetched, React Query caches the following information:
The data from the query result.
Error states, if any (e.g., network errors).
Timestamps to track when the data was fetched and its freshness.

3.Stale Data and Automatic Refetching:
React Query uses the concept of "stale time." It considers data as "stale" after a certain amount of time has passed since the data was last fetched.
If you set a staleTime in your query configuration, React Query will automatically refetch the data once it becomes stale.

4.Manual Invalidation:
You can manually invalidate a query's data by calling invalidateQueries on the query key. This tells React Query that the data is no longer valid,
and it should be refetched the next time the query is used.

5.Cache Expiry and Garbage Collection:
React Query automatically handles cache expiry and garbage collection to manage memory efficiently. It removes stale data that is no longer needed to free up memory.

*/


/*Stale Time:

"Stale time" is a concept in React Query that defines how long a query result is considered "fresh" and up-to-date in the cache. After the stale time has elapsed, 
 React Query considers the data as "stale," and it may trigger a refetch of the data the next time the query is used. *//
useQuery('yourQueryKey', fetchData, {
  staleTime: 60000, // 60 seconds
});

//In this example, the staleTime is set to 60 seconds. This means that if the data in the cache is 60 seconds old or older, it's considered stale, and React Query will refetch it on the next usage.

//Automatic Refetch: When a query becomes stale, React Query automatically triggers a refetch when the query is used again. This ensures that your data remains up-to-date without you needing to manually manage data refreshing.
