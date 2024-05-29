function App() {
  return (
    <div className="app">
      {/* <Counter /> */}
      {/* {Counter()} */}
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  
  const updateCounter = (n) => {
    if (count + n < 0) {
      alert('cannot under 0')
      return;
    }
    setCount(prv=>prv+n);
    // setCount(prv=>prv+1)
    // setCount(prv=>prv+1)
    // setCount(prv=>prv+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // console.log(count)
  };

  return (
    <>
      <div className="counter">
        <button className="btn btn-dec" onClick={() => updateCounter(-1)}>
          -
        </button>
        <h3 className="number" style={{ color: count>10 ? 'red' : '' }}>
          {count}
        </h3>
        <button className="btn btn-inc" onClick={() => updateCounter(1)}>
          +
        </button>
        <button className="btn btn-clr" onClick={() => updateCounter(-count)}>
          C
        </button>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
