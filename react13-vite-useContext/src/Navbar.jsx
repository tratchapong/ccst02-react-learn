import React,{useContext} from 'react'
import ProfileInfo from './ProfileInfo'
import UserContext from './contexts/UserContext'

export default function Navbar({setPage}) {
  console.log('Navbar run...')
  const {user, logout} = useContext(UserContext)
  return (
    <div className='navbar'>
      { !user ? 
        <button onClick={()=>setPage(1)}>Login Form</button>
        :
        <button onClick={logout}>Logout</button>

      }
      <button onClick={()=>setPage(2)}>Products</button>
      <ProfileInfo />
    </div>
  )
}
