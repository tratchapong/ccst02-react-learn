import React from 'react'
import useFetch from '../hooks/useFetch'

function UsersList() {
  const [data, error, loading] = useFetch('http://localhost:8000/users')
  
  if(loading) {
    return <h1>Loading...</h1>
  }
  if(error) {
    return <h1>{error.message}</h1>
  }

  return (
    <div>
      <ul>
      { data.map(el => (
        <li key={el.id}>{JSON.stringify(el)}</li>
      ) )}

      </ul>
    </div>
    
  )
}

export default UsersList