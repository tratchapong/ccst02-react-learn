import React, { useState,useContext, useEffect } from "react";
import UserContext from './contexts/UserContext'

export default function LoginForm() {
  const { user, updateUser } = useContext(UserContext)
  const [input, setInput] = useState("");

  const hdlSubmit = e => {
    e.preventDefault()
    updateUser(input)
    // setInput('')
  }

  useEffect( ()=>{
    if(!user) {
      setInput('')
    }
  },[user] )


  return (
    <form className="login-form" onSubmit={hdlSubmit} >
      <label>
        Username :
        <input
          disabled={!!user}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <button disabled={!!user} >Login</button>
    </form>
  );
}
