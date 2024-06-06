import React,{useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import Private from './pages/Private';
import Product from './pages/Product';

function AppRouter() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
    <button onClick={()=>setIsLogin(prv=>!prv)}>
      {isLogin ? 'Logout' : 'Login'}
    </button>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> } >
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About /> } />
          <Route path="contact" element={ <Contact /> } />
          <Route path="private" element={ 
              isLogin ? <Private /> : <Navigate to='/' />
          } />
          <Route path="product/:id" element={ <Product /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter