/*Nested routes allow you to organize your application's routing structure by having routes within other routes

steps:-
  1.firstly created a products components and route that in App
  2. added a link in navbar components 
  3.created two more components featuredproducts and newproducts
  4. configured these two routes as nested routes in App.jsx 's product route
  5.now products componets needs to know what should i do with these two componets so here we will use outlet
*/

//Step 1: Create the Products Component and Route : First, create a Products component that represents the main product page and add a route for it in your App.js file.
  import { Link} from 'react-router-dom'

export const Products = () => {
  return (
    <>
      <div>
        <input type='search' placeholder='Search products' />
      </div>
      <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
      </nav>
      
    </>
  )
}

//Step 2: Add a Link in the Navbar Component :--In our Navbar component, add a Link component that will allow users to navigate to the main product page. 

import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const auth = useAuth()
  
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }
  return (
    <nav >
      <NavLink to='/products' style={navLinkStyles}>
        Products
      </NavLink>
      )}
    </nav>
  )
}


  //Step 3: Create Two More Components for Nested Routes
  //Next, create two components, FeaturedProducts and NewProducts, that will represent the nested routes. These components will be rendered within the Products component based on the nested route that's active.

  // FeaturedProducts.js
export const FeaturedProducts = () => {
  return <div>List of featured products</div>
}


  // NewProducts.js
export const NewProducts = () => {
  return <div>List of new products</div>
}




//step-4 Step 4: Configure Nested Routes in App.js
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { NewProducts } from './components/NewProducts'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Products } from './components/Products'



function App() {
  return (
    
      <Navbar />
      <Routes>
          <Route path='products' element={<Products />}>
               //index-route- allowed you to define a default child route for a parent route
               //  <Route index element={<FeaturedProducts />} />
            
              <Route path='featured' element={<FeaturedProducts />} />   //in nested we no need to add/ for routing
              <Route path='new' element={<NewProducts />} />
          </Route>
      </Routes>
  )
}

export default App




//Step 5: Use the Outlet in Products Component
//To render the appropriate nested route content, we should use the Outlet component provided by react-router-dom within the Products component. 
//The Outlet component acts as a placeholder for the content of the active nested route. 

import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <>
      <div>
        <input type='search' placeholder='Search products' />
      </div>
      <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
      </nav>
      <Outlet />
    </>
  )
}



