import React,{useState, useEffect} from "react";

function SearchBar({ filterText, setFilterText }) {
  const [inputText, setInputText] = useState('')

  useEffect( ()=>{
    const timer = setTimeout( ()=>{ setFilterText(inputText)}, 1500 )
    return ()=>{
      clearTimeout(timer)
    }
  },[inputText] )

  // const hdlChange = async e => {
  //   setFilterText(e.target.value)
  //   const res = await fetch('http://dummyjson.com/users/search?q=John')
  //   const data = await res.json()

  // }

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={e=>setInputText(e.target.value)}
      />
      <span>FilterText = {filterText}</span>
    </div>
  );
}

export default SearchBar;
