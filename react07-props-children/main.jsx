function App() {

  return (
    <div className="app">
      <h1>Codecamp react06</h1>
      <hr />
      <Card color='red'>
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>
      </Card>
      <Card>
        <img src="https://picsum.photos/200" alt="A description" />
        <p>Here is an image inside the card.</p>
      </Card>
      <Card>
        <button onClick={() => alert("Button clicked!")}>Click Me</button>
      </Card>
    </div>
  );
}

function Card({children, color}) {
  console.log(children)
  return <div  className="card" style={{color}}>{children}</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
