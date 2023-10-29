/*Dynamic routes in React Router allow you to create routes that can match a variety of URL patterns and extract data from the URL. For example, 
you might want to create a route for displaying user profiles where the username is part of the URL.

The Route will provide us with the particular URL to navigate. Here we have two routes “/” and “user/:id”.
The “/” route is the root route of the application and “user/:id” is the key to our dynamic route. Here /user is constant “: id” is the variable or we can say placeholder. We can put any value in here.

This can be translated to anything like /user/you, /user/me, /user/123, /user/ilu143. The trailing can be anything as shown which we will grab as URL Params using a hook useParams from react-router-dom.

*/

//step-1--Install React Router and import 

//Configure dynamic routing in App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Users } from './components/Users'
import { UserDetails } from './components/UserDetails'
import { Admin } from './components/Admin'



function App() {
  return (
    
      <Navbar />
      <Routes>
        <Route path='users' element={<Users />}>
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    
  )
}

export default App


//Accessing Dynamic Parameters: ---other components to route

//Admin.js
export const Admin = () => {
  return <div>Admin user</div>

//user-details.js
  import { useParams } from 'react-router-dom'

export const UserDetails = () => {
  const { userId } = useParams()
  return <div>Details about user {userId}</div>
}
}
