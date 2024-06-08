import { useEffect, useState } from "react";

function useDebounce(input) {
  const [output, setOutput] = useState(input)

  useEffect( ()=>{
    const timer = setTimeout( ()=> setOutput(input), 1000)

    return ()=> clearTimeout(timer)
  },[input])

  return output
}

export default useDebounce