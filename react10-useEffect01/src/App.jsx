import React,{useState, useEffect} from "react";

function App() {
  console.log('App run')
  const [red, setRed] = useState(false)
  const [count, setCount] = useState(0)

  useEffect( ()=>{
    console.log('useEffect1 : red= ', red)
  },[red])

  useEffect(()=>{
    console.log('useEffect2 : Count = ', count)
  },[count])

  useEffect( ()=>{
    console.log('useEffect3 : run on first time only')
  },[])
  
  useEffect( ()=>{
    console.log('useEffect4 : run on every render')
  })
  
  return (
    <div className="app">
      {console.log('App Jsx..')}
      <h1 style={{ color: red ? 'red': '' }}>useEffect Lab01</h1>
      <button onClick={()=>setRed(true)}>red</button>
      <button onClick={()=>setRed(false)} >no red</button>
      <hr />
      <button onClick={ ()=> setCount( prv => prv>0 ? prv-1 : prv)}>-</button>
      <span>{count}</span>
      <button onClick={()=>setCount(prv=>prv+1)}>+</button>
    </div>
  )
}

export default App