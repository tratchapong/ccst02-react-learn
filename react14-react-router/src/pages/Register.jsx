import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const hdlChange =  (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };
  
  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      // validation
      if(input.password !== input.confirmPassword) {
        return alert('Please check confirm-password')
      }
      const body = { 
        name: input.name,
        password : input.password,
        email: input.email
      }
      const res = await axios.post('http://localhost:8000/users', body)
      console.log(res)
      navigate('/users')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <h1>Register form</h1>
      <form className="register-form" onSubmit={hdlSubmit}>
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
        <label>
          Confirm Password :
          <input
            type="text"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={hdlChange}
          />
        </label>
        <label>
          E-mail :
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={hdlChange}
          />
        </label>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
