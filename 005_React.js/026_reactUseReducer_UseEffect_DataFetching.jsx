/*Data fetching in React can be accomplished using two primary methods: useReducer and useEffect


*/


//DataFetching with UseEffect
import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFetchingOne() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response => {
        setLoading(false)
        setPost(response.data)
        setError('')
      })
      .catch(error => {
        setLoading(false)
        setPost({})
        setError('Something went wrong!')
      })
  }, [])

  return (
    <div>
      {loading ? 'Loading' : post.title}
      {error ? error : null}
    </div>
  )
}

export default DataFetchingOne


//DataFetching with UseReducer

import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
	loading: true,
	error: '',
	post: {}
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return {
				loading: false,
				post: action.payload,
				error: ''
			}
		case 'FETCH_ERROR':
			return {
				loading: false,
				post: {},
				error: 'Something went wrong!'
			}
		default:
			return state
	}
}

function DataFetchingTwo() {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/1`)
			.then(response => {
				dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
			})
			.catch(error => {
				dispatch({ type: 'FETCH_ERROR' })
			})
	}, [])
	return (
		<div>
			{state.loading ? 'Loading' : state.post.title}
			{state.error ? state.error : null}
		</div>
	)
}

export default DataFetchingTwo


/*NOTE:--
       1.datafecting using useeffect is more readable 
       2.datafectching using usereducer is more scalabel and good for complex projects  */
