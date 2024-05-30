function App() {
  // const [username, setUsername] = React.useState('')
  // const [email, setEmail] = React.useState('')
  const [input, setInput] = React.useState({
    username : '',
    email : '',
    car : ''
  })

  const hdlChange = e => {
    const {name, value} = e.target
    setInput(prv => ({...prv, [name]: value }) )
  }

  const hdlSubmit = e => {
    e.preventDefault()
    // validation
    if(!input.username.trim() || !input.email.trim()) {
      return alert('please fill all inputs')
    }
    // prepare JSON body
    let output = {
      username : input.username.toUpperCase(),
      email : input.email,
      car: input.car
    }
    // fetch data(body) POST, PUT, PATCH ไปที่ Backend API
    console.log(output)
  }
  return (
    <div className="app">
      <h1>Codecamp react08 : Form</h1>
      <hr />
      <form onSubmit={hdlSubmit}>
        <label>Username
          <input 
            type="text"
            name="username"
            value={input.username}
            onChange={hdlChange}
            pattern="[a-z0-9]*"
          />
        </label>
        <label>Email
          <input 
            type="email"
            name="email" 
            value={input.email}
            onChange={hdlChange}
          />
        </label>
        <select name="car" value={input.car} onChange={hdlChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
      </select>
        <button>Login</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
