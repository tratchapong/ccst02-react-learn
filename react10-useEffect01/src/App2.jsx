// Dependency array

import React,{useState, useEffect} from 'react'

function App2() {
  console.log('App run..')
  const [array, setArray] = useState([1, 2, 3])

  useEffect( ()=> {
    console.log('useEffect: Array change : ', array)
  }, [array.length])

  return (
    <div style={{display:'flex', flexDirection:'column'}} >
      <span>{JSON.stringify(array)}</span>
      <button onClick={()=> setArray([...array, array.length +1 ])} >Add number</button>
      {/* <button onClick={()=> setArray([...array])}>Same numbers</button> */}
      {/* <button onClick={()=> setArray(prv=> {
            prv.push(9)
            return prv
       } )}>Same numbers</button> */}
      <button onClick={()=> setArray( array.filter( el=> el>-1) )}>Same numbers</button>
    </div>
  )
}

export default App2