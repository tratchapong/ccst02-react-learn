import React,{useState, useEffect} from 'react'

export default function SearchBar({setFilterText}) {
  const [inputText, setInputText] = useState('')

  useEffect( ()=>{
    const timer = setTimeout( ()=>{ setFilterText(inputText)}, 1500 )
    return ()=>{
      clearTimeout(timer)
    }
  },[inputText])

  return (
    <div>
      <input type="text"
        value={inputText}
        onChange={e=>setInputText(e.target.value)}
      />
    </div>
  )
}
