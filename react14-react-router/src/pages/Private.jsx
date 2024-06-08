import React, { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'

function Private() {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <h1>Private Page for member only</h1>
      <hr/>
      <h3>{JSON.stringify(user)}</h3>
    </div>
  )
}

export default Private