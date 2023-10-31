//npm install axios


//app.js
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
  )
}

export default App



//superhero.page.js
            
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
