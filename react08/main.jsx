function App() {

  const [input, setInput] = React.useState({
    firstName: '',
    lastName: '',
    age: '',
  })

  const hdlChange = e => {
    const {name, value} = e.target
    setInput(prv => ({...prv, [name]: value }) )
  }

  const hdlSubmit = e => {
    e.preventDefault()
    // validation
    if(!input.firstName.trim() || !input.lastName.trim()) {
      return alert('please fill all inputs')
    }
    // prepare JSON body
    let output = {
      firstName : input.firstName,
      lastName : input.lastName,
      age: +input.age
    }
    // fetch data(body) POST, PUT, PATCH ไปที่ Backend API
    console.log(output)
    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(output)
    })
    .then( rs => rs.json())
    .then(data => console.log(data))
    .catch(err=> console.log('Have error',err.message))
  }
  return (
    <div className="app">
      <h1>Codecamp react08 : Form</h1>
      <hr />
      <form onSubmit={hdlSubmit}>
        <label>FirstName
          <input 
            type="text"
            name="firstName"
            value={input.firstName}
            onChange={hdlChange}
          />
        </label>
        <label>LastName
          <input 
            type="text"
            name="lastName" 
            value={input.lastName}
            onChange={hdlChange}
          />
        </label>
        <label>age
          <input 
            type="number"
            name="age" 
            value={input.age}
            onChange={hdlChange}
          />
        </label>

        <button>Login</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
