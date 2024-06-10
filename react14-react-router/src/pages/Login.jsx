import React, { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import AuthContext from "../contexts/AuthContext";


function Login() {
  const navigate = useNavigate()
  const {setUser, setIsLogin} = useContext(AuthContext)
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
      // Login
      // check ว่ามี username ที่ input มานั้น ใน db หรือไม่
      const res = await axios.get(`http://localhost:8000/users?name=${input.name}`)
      if(!res.data.length) {
        return alert('Invalid Login')
      }
      const foundUser = res.data[0]
      // check password ว่าตรงกับ input.password หรือไม่
      if( foundUser.password !== input.password) {
        return alert('Invalid Login')
      }
      // เก็บค่า user ที่ login ไว้ที่ AuthContext:user / localStorage
      localStorage.setItem('user', JSON.stringify(foundUser))
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
