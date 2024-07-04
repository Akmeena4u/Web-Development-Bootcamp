# Programmatic Navigation in React Router

## Overview
Programmatic navigation allows you to trigger route changes and navigation based on events or conditions within your application code. This can be useful for scenarios such as navigating to an order history page after placing an order.

## Steps to Implement Programmatic Navigation

### Step 1: Import `useNavigate` Hook
First, import the `useNavigate` hook from `react-router-dom`.

### Step 2: Use `useNavigate` Hook Inside the Component
Use the `useNavigate` hook within your component to get access to the `navigate` function.

### Step 3: Create a Navigation Function or Use Inline Navigation
Create a function to handle programmatic navigation or directly use the `navigate` function within your component's return statement.

## Example Implementation

### Home Component
1. **Import the `useNavigate` Hook**
2. **Use the `useNavigate` Hook Inside the Home Component**
3. **Create a Navigation Function or Use Inline Navigation**

```jsx
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  // Optional: Create a navigation function
  // const handleNavigation = () => {
  //   navigate('order-summary'); // Programmatic navigation to the OrderSummary route
  // };

  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate('order-summary')}>Place order</button>
      {/* Replace order-summary handler with -- onClick={handleNavigation} */}
    </>
  );
};
```

### OrderSummary Component
1. **Import the `useNavigate` Hook**
2. **Use the `useNavigate` Hook Inside the OrderSummary Component**
3. **Navigate Back Using the `navigate` Function**

```jsx
import { useNavigate } from 'react-router-dom';

export const OrderSummary = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        Order confirmed!
        <button onClick={() => navigate(-1)}>Go back</button>  {/* Use negative number as argument to go back */}
      </div>
    </>
  );
};
```

## Explanation

### How Programmatic Navigation Works in This Scenario
1. **Home Component:**
   - When the "Place order" button is clicked, it calls `navigate('order-summary')`, which navigates to the 'order-summary' route.
2. **OrderSummary Component:**
   - When the "Go back" button is clicked, it calls `navigate(-1)`, which navigates back to the previous route in the history stack.

This approach allows for more dynamic and flexible navigation within your React application, enabling better user experiences and more complex routing scenarios.

## Notes
- Programmatic navigation is useful for scenarios where route changes are triggered by events or conditions within the application code.
- The `useNavigate` hook provides a `navigate` function that can be used to specify the target route.
- You can navigate to specific routes or navigate back in the history stack using the `navigate` function with appropriate arguments.
