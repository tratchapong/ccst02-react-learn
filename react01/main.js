// console.log(React)
// console.log(ReactDOM)

function App() {
  const title = "This is Title";
  const imgSrc = "https://picsum.photos/300";
  const days = ["mon", "tue", "wed", "thu", "fri"];
  return (
    <div>
      <h1>Hello, React from Codecamp Thailand</h1>
      <h2 className="title">Codecamp Thailand, {title}</h2>
      <h3>{9 + 9}</h3>
      <hr />
      <label htmlFor="username">Username : </label>
      <input id="username" />
      <button>OK</button>
      <h3>{new Date().toDateString()}</h3>
      <hr />
      <img src={imgSrc} alt="a pic" />
      <hr />
      <ul>
      { days.map( el => {
        return <li key={el}>{el}</li>
      }) }
      </ul>
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
// root.render( App())

// const root = ReactDOM.createRoot(document.getElementById('root'))
