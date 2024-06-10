import { useState, useEffect, useRef } from "react";

function App() {
  const inputElement = useRef();
  const btnElement = useRef()

  const focusInput = () => {
    console.log(btnElement.current)
    inputElement.current.focus();
    inputElement.current.style.backgroundColor = 'red'
    btnElement.current.style.fontSize = '20px'
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput} ref={btnElement} >Focus Input</button>
    </>
  );
}

export default App
