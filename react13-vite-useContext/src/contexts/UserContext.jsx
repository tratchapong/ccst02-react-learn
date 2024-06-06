import React,{createContext, useState} from 'react'

const UserContext = createContext()

function UserContextProvider(props) {
  const [user,setUser] = useState(null)

  const updateUser = (username) => {
    if (username.length < 3) {
      return alert('Username must more than 3 characters')
    }
    setUser(username)
  }
  const logout = () => setUser(null)

  return (
    <UserContext.Provider value={ {user, updateUser, logout } }>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContextProvider }
export default UserContext