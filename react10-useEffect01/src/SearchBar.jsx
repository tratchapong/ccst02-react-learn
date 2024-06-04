import React, { useEffect,useState } from "react";

function SearchBar() {
  const [count, setCount] = useState(0)
  console.log('SearchBar: run..')

  const docClick = () => {
    alert(999)
  }

  useEffect( ()=>{
    console.log('SearchBar : useEffect start..')
    document.addEventListener('contextmenu', docClick )
    const it1 = setInterval( ()=>console.log('2sec'), 2000)
    return ()=>{
      console.log('SearchBar: return in useEffect...')
      document.removeEventListener('contextmenu', docClick)
      clearInterval(it1)
    }
  },[count] )

  return (
    <div>
      <input type="text" />
      <button>Search</button>
      <button onClick={()=>setCount(prv => prv+1)}>Count={count}</button>
    </div>
  );
}

export default SearchBar;
