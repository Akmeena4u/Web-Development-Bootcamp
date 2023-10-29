/*Route Configuration: Route configuration involves specifying which React components should be rendered for different URL paths. You define a relationship between 
the URL and the corresponding components. For example, you might configure that the URL "/about" should render the About component, and "/contact" should render
the Contact component.
*/

//steps:--
                                                //-------------------step-0.----------------------


//create new react application and install react router
      npx create-react-app react-router-tutorial  //create react project
      cd react-router-tutorial

      npm install react-router-dom               //install react-router- dom




                                                  //---------------------step-1.-----------------------------


//in index.js we wrap APP compomnets with <BrowserRouter> pakage and then wrap with <React.strictmode> in render function(if not )

  import React from 'react'
  import ReactDOM from 'react-dom'
  import { BrowserRouter } from 'react-router-dom'
  import './index.css'
  import App from './App'
  import reportWebVitals from './reportWebVitals'

  ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <App />
     </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
 )

reportWebVitals()






                                                       //-------------------step-2.---------------------------


//create the components that need to be rendered at different URLS path like Home, about,contact

  // src/Home.js
  import React from 'react';

  function Home() {
      return (
         <div>
            <h2>Home</h2>
            <p>Welcome to the Home page!</p>
        </div>
     );
   }

export default Home;

//Repeat this step to create About.js and Contact.js components, customizing their content accordingly.

                                                 //------------------step-3-.---------------------


//in App.js- configure the <Routes> and <route> components from react , keep in mind first import all subcomponents her like hoke,contact

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;

//here to navigate between diffrent pages we needs to manually changee our url from urlbar that is not a feasible in realworld 



                                //-------------step-5 Start out application---------------------

    npm start
# or
yarn start


/*--------------------------------------------------------Link--------------------------------------------------------------------------------------------------------
  Link component in the code you provided is a fundamental part of React Router and is used for client-side navigation within your application. It creates navigation 
  links that allow users to move between different routes without requiring a full page reload
  it gives us a local navigation inside the app

  */

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';   // do not forget to import link
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        //we can define whole <nav> in a seprate componnet<nabar/> and here we justcall that like <navbar/>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;




/*-------------------------------------------------------------------Active-Link---------------------------------------------------------------------------------
  To make navigation links "active" to indicate which route is currently active or selected. React Router provides a special component called "NavLink" that allows us
  to style links based on the current route  

   Every step will remain same only we cahnge in  step-3 mean in configuring routes in App.js we will replace "Link" with "NavLink" and add a class   */
      
  //Create the Routing Configuration with NavLink:
import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'; // Import NavLink
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;


/* Points to remember:-
      1. We import the NavLink component from react-router-dom.
      2. We replace the Link components with NavLink components, which provide the active styling.
      3. We use the activeClassName prop to specify the CSS class name that should be applied to the active link. In this case, it's "active."  */


      
                                    // --------------Create CSS for Active Link Styling--------------------
     // we can define CSS styles for the "active" class in your application's CSS file to control how the active link is visually styled
      .active {
  font-weight: bold;
  color: blue;
}
