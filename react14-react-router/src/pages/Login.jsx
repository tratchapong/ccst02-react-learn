import React, { useState } from "react";
import axios from 'axios'


function Login() {
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
