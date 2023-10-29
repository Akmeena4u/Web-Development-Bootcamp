/*Programmatically navigating means that you can trigger route changes and navigation based on events or conditions within your application code. 
  like on clicking place order button it should go to order history page etc

  1.we use useNavigate hook from react-router-dom to achieve programmatic routing in a React application. 


*/

/*home.js
  step-1-import useNavigate Hook
  step-2--use the useNavigate hook inside Home component
  step-3-inside Home componets Create a Navigation Function that will handle the programmatic navigation. This function typically uses the navigate function 
  returned by the useNavigate hook to specify the target route.or else we can diretly pass route in navigate function inside return

  */

  import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()

  /*
   const handleNavigation = () => {
    navigate('order-summary); // Programmatic navigation to the About route
  };

  */
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate('order-summary')}>Place order</button>              //replace order-summary handler with --   onclick={handleNavigation}
    </>
  )
}


//order-summary
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
  const navigate = useNavigate()

  return (
    <>
      <div>
        Order confirmed!
        <button onClick={() => navigate(-1)}>Go back</button>  //use negative number as arguments to go back
      </div>
    </>
  )
}


/*
NOTE:--Here's how programmatic routing works in this scenario:
In the Home component, when the "Place order" button is clicked, it calls navigate('order-summary'), which navigates to the 'order-summary' route.
In the OrderSummary component, when the "Go back" button is clicked, it calls navigate(-1), which navigates back to the previous route in the history stack.  */
