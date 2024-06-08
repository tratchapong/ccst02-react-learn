import React, { useContext, useState } from "react";
import axios from 'axios'
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate()
  const {setIsLogin, setUser} = useContext(AuthContext)
  const [input, setInput] = useState({
    name: "",
    password: ""
  });

  const hdlChange =  (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:8000/users?name=${input.name}`)
      if(!res.data.length) {
        return alert('invalid login')
      }
      const foundUser = res.data[0]
      if(foundUser.password !== input.password ) {
        return alert('invalid login')
      }
      localStorage.setItem('user',JSON.stringify(foundUser))
      setUser(foundUser)
      setIsLogin(true)
      navigate('/private')
    }catch(error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <h1>Login form</h1>
      <form className="login-form" onSubmit={hdlSubmit}>
        <label>
          Username :
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={hdlChange}
          />
        </label>
        <label>
          Password :
          <input
            type="text"
            name="password"
            value={input.password}
            onChange={hdlChange}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
