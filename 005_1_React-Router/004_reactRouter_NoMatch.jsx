/*In React Router, a "No Match" route, also known as a "404 route," is used to handle routes that do not match any of the defined routes in your application.
  It's a way to provide a fallback route for unexpected or undefined URLs

  steps :-
  1.import react-router project and install react router
  2.
  3.create Nomatch.js file 
  4.implement nomatch.js --To implement a "No Match" route, add a Route component with no path prop at the end of your route configuration. This route will catch any URLs that don't match the defined routes.
  5.
*/

//NoMatch.js
import React from 'react';

const NotFound = () => {
  return (
    <div>
      <h2>404 - Not Found</h2>
      <p>The requested page does not exist.</p>
    </div>
  );
};

export default NotFound;




//App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NoMatch from './NoMatch'; // Create a NotFound component

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" component={NoMatch} /> {/* "No Match" route */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
