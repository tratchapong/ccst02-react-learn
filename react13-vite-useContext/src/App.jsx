import React, {useState} from "react";
import ProductPage from "./ProductPage";
import Header from './Header'
import LoginForm from "./LoginForm";

function App() {
  console.log('App run...')
  const [page, setPage] = useState(1)

  return (
    <div className="app" >
      <Header setPage={setPage}/>

      { page===1 && <LoginForm />}
      { page===2 && <ProductPage />}
    </div>
  )
}

export default App