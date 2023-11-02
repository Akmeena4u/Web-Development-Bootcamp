/*"Dependent Queries,"  tells  how to fetch data that depends on the results of another query. Dependent queries are useful when you need to fetch data sequentially, 
   where the result of one query determines the parameters or data for another query.

*/

import { useQuery } from 'react-query'
import axios from 'axios'

const fetchUserByEmail = email => {
  return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelId = channelId => {
  return axios.get(`http://localhost:4000/channels/${channelId}`)
}

// query is performed using useQuery to fetch user data. It uses the query key ['user', email], where email is the user's email. The query function () => fetchUserByEmail(email) is called to fetch user data based on the provided email.
export const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(['user', email], () =>
    fetchUserByEmail(email)
  )

  // second query is executed using useQuery to fetch courses based on the channelId. The query key is set as ['courses', channelId]. The query function () => fetchCoursesByChannelId(channelId) is called, but this query's execution is conditionally enabled only if the channelId is truthy.
  const channelId = user?.data?.channelId
  useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId
  })
  return <div>DependentQueries</div>
}
