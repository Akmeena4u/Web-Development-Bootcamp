/*React UseQuery demonstrates how to trigger a query manually in response to a user action, such as a button click. This can be useful when you want to give users control over when data is fetched. 

step-1- Create a Query with Initial State:
First, create a query using the useQuery hook, but set the enabled option to false. This prevents the query from running automatically when the component renders.
Instead, it will only run when explicitly enabled. */

 const { data } = useQuery("comments", fetchComments, {
    enabled: false
  });

//If we want to use a button to trigger this we can maintain a piece of state that holds true or false and then pass the setEnabled method to a button.

//this method is to use refetch . This is a method that comes with useQuery and is closer to the functionality many of us are looking for in this scenario.
//The data is not fetched automatically. We have turned it off using enabled: false .
//We can then pass the refetch method to our button to grab the data on demand without toggling any state.



export const useComments = () => {
  const { data, refetch } = useQuery("comments", fetchComments, {
    enabled: false
  });
<button onClick={() => refetch()}>Some Button</button>



