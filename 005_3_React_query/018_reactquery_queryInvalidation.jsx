/*
Query Invalidation is an essential concept in React Query, which allows us to control when and how queries should be refetched or updated based on specific events.
It helps keep our data fresh and accurate. Invalidation can be triggered by various mechanisms, such as mutations, focus changes, or any custom events we define

Mutations: After performing a mutation (create, update, delete), you can configure React Query to automatically refetch or update relevant queries to reflect the changes in data.
