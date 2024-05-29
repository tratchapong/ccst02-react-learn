function App() {
  const [modalMsg, setModalMsg] = React.useState('')
  return (
    <>
    <div className="app">
      {/* <Counter /> */}
      {/* {Counter()} */}
      <Counter setModalMsg={setModalMsg}/>
      <Counter />
      <Counter />
      <Modal msg={modalMsg} />
    </div>
    </>
  );
}

function Counter({setModalMsg}) {
  const [count, setCount] = React.useState(0);
  
  const updateCounter = (n) => {
    if (count + n < 0) {
      setModalMsg('cannot under 0')
      setTimeout( ()=> setModalMsg(''), 2000)
      return;
    }
    setCount(prv=>prv+n);
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

function Modal({msg}) {
  return (
    <dialog open={!!msg}>
      <h2>{msg}</h2>
    </dialog>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
