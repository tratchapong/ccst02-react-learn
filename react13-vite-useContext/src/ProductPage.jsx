import React,{useState, useEffect} from "react";
import axios from 'axios'
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

function ProductPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [filterText,setFilterText] = useState('')

  useEffect( ()=> {
    console.log('App useEffect...', filterText)
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`https://dummyjson.com/products/search?q=${filterText}`)
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
    <div className="product-page" style={{background:'gold'}}>
      <h1>Product Search</h1>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <hr />
      <ProductList products={products} />
    </div>
  );
}

export default ProductPage;
