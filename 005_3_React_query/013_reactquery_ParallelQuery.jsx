/*paralle queries tells how to fetch data from multiple API endpoints concurrently. Parallel queries are useful when you need to retrieve data from different sources or endpoints independently and efficiently.

*/


//parallelqueries.page.js

import { useQuery } from 'react-query'
import axios from 'axios'

//fetchSuperHeroes and fetchFriends, are defined. These functions use Axios to make HTTP GET requests to specific API endpoints.
const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends')
}

export const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes)
  const { data: friends } = useQuery('friends', fetchFriends)
  console.log(superHeroes, friends)
  return <div>Parallel Queries</div>
}


//Dyanamicparallel.page.js
import { useQueries } from 'react-query'
import axios from 'axios'

const fetchSuperHero = heroId => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const DynamicParallelPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map(id => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id)
      }
    })
  )

  console.log({ queryResults })
  return <div>Dynamic Parallel Queries</div>
}
