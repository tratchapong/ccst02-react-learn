import React,{useState, useEffect} from "react";
import axios from 'axios'
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filterText,setFilterText] = useState('')

  useEffect( ()=> {
    console.log('App useEffect...')
    // setLoading(true)
    const fetchData = async () => {
      try {
        // const res = await fetch(`https://dummyjson.com/products/search?q=${filterText}`)
        // const data = await ( await fetch(`https://dummyjson.com/products/search?q=${filterText}`) ).json()
        const res = await axios.get(`https://dummyjson.com/products/search?q=${filterText}`)
        console.log("*****",res)
        setProducts(res.data.products)
      }catch(err) {
        setError(err)
      }finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [filterText])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="app" style={{background:'gold'}}>
      <h1>Product Search</h1>
      <SearchBar setFilterText={setFilterText} />
      <hr />
      <ProductList products={products}/>
    </div>
  )
}

export default App