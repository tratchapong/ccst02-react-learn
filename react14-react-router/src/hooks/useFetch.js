import {useState, useEffect} from 'react'
import axios from 'axios'

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( ()=>{
    const run = async () => {
      try {
        setLoading(true)
        const res = await axios.get(url)
        setData(res.data)
        setLoading(false);
      }catch(err){
        setError(err)
        setLoading(false);
      }
    }
    run()
  }, [url] )

  return [data, error, loading]
}

// ทำ useFetch hook ตัวนี้ให้มี loading + error ให้ return ไปพร้อมกับ data ด้วย
// 15min () / 11:45