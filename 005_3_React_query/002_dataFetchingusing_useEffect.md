# Fetching Data Using Axios in React Component

In React applications, fetching data from an API is a common task. Axios is a popular library used for making HTTP requests from the browser. Here's how you can use Axios to fetch data in a React component.

## Setting up Axios

First, you need to install Axios in your project:

```bash
npm install axios
```

## Creating a React Component

Let's create a simple React component to fetch and display a list of superheroes from a mock API.

### App.js

```jsx
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/super-heroes'>
            <SuperHeroesPage />
          </Route>
          <Route path='/rq-super-heroes/:heroId'>
            <RQSuperHeroPage />
          </Route>
          <Route path='/rq-super-heroes'>
            <RQSuperHeroesPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
```

### SuperHeroesPage.js

Now, let's create the `SuperHeroesPage` component which fetches superhero data using Axios.

```jsx
import { useState, useEffect } from 'react'
import axios from 'axios'

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:4000/superheroes')
      .then(res => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map(hero => {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </>
  )
}
```

In this component:

- We initialize state variables for loading, data, and error.
- We use the `useEffect` hook to fetch data from the API when the component mounts.
- Axios is used to make the GET request to fetch superhero data.
- Depending on the loading state and any potential errors, appropriate UI is rendered.
- If data is successfully fetched, we map through the array of superheroes and display their names.

## Conclusion

Using Axios simplifies the process of making HTTP requests in React components. It provides a clean and concise way to fetch data from APIs, making it a popular choice for data fetching tasks in React applications.

