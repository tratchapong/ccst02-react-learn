import React,{createContext, useState} from 'react'

const AuthContext = createContext()

function AuthContextProvider(props) {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, user, setUser}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {AuthContextProvider}
export default AuthContext