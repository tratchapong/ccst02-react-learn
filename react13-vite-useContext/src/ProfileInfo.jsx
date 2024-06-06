import React,{useContext} from 'react'
import UserContext from './contexts/UserContext'


export default function ProfileInfo() {
  const { user } = useContext(UserContext)
  return (
    <div>
      <h3>Hello,{user ? user : 'Guest'} </h3>
    </div>
  )
}
