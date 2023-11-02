/*Mutations allow us to send data to a server and update it, such as creating, updating, or deleting records.
It allows us to easily perform mutations or write operations on our data, such as creating, updating, or deleting records, 
and handles the state management and caching logic for us

When we use the useMutation hook, it returns an array with two elements: a mutation function and an object representing the mutation state. .

*/




import { useMutation } from 'react-query';

const updateUser = async (userData) => {
  // Perform the mutation logic, e.g., make an API request to update the user
  const response = await fetch('/api/users', {
    method: 'PUT',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to update user');
  }

  return response.json();
};

const EditUserForm = ({ userId }) => {
  const [mutate, { isLoading, isError, error }] = useMutation(updateUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);

    mutate(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Saving...' : 'Save'}
      </button>
      {isError && <div>Error: {error.message}</div>}
    </form>
  );









/*
In the example above, we define a mutation function called updateUser, which performs an API request to update a user's data. We pass this function to the useMutation hook
and receive the mutate function and the mutation state object as a result.

When the form is submitted, we call the mutate function with the user data as an argument. The mutate function handles the execution of the mutation logic and manages
the mutation state internally. It automatically triggers re-rendering of the component and updates the state variables ( isLoading, isError, and error) based on the mutation's progress.

The isLoading variable indicates whether the mutation is in progress or not, allowing you to show loading indicators or disable form submission while the mutation is ongoing. 
The isError variable indicates whether an error occurred during the mutation, and the error variable contains the error object if an error occurred.

*/
