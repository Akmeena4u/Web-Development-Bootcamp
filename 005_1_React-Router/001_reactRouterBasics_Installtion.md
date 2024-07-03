
# React Router Guide
React Router is a popular library for handling routing and navigation in React applications. It enables the creation of single-page applications (SPAs) where different views or components are rendered based on the URL, without refreshing the page.

## Features of React Router
1. **Client and Server-Side Routing:** React Router provides robust routing capabilities for both client-side and server-side rendering in React applications.
2. **URL Navigation:** Enables creation and navigation between different URLs within a single-page application (SPA).
3. **Sharable UI:** Each component in the application can have its own URL, making it easy to share specific UI states or views.

## Topics to Learn

### Basic Routing
1. **Configuring Routes:** Define routes for different components/pages.
2. **Navigating on Button Click:** Use links and buttons to navigate between routes.
3. **Navigating Programmatically:** Redirect programmatically based on logic or user actions.

### Advanced Routing
4. **Dynamic Routes:** Handle routes with dynamic segments.
5. **Nested Routes:** Create nested route structures.
6. **Route Parameters:** Extract and utilize parameters from the URL.
7. **Lazy Loading:** Load components asynchronously to improve performance.
8. **Authentication:** Secure routes based on user authentication status.

## Installation Setup

### Setting Up a New React Application
If starting from scratch:
```bash
npx create-react-app my-react-router-app
cd my-react-router-app
```

### Installing React Router
Install React Router DOM package:
```bash
npm install react-router-dom
# or using yarn
yarn add react-router-dom
```

### Usage
Once installed, you can start using React Router in your application by importing components like `BrowserRouter`, `Route`, `Switch`, `Link`, and `Redirect` from `react-router-dom`.

### Example
Here’s a basic example of setting up routes in a React component:
```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
```

This setup creates routes for the `Home` and `About` components, accessible via `/` and `/about` URLs respectively.

---
