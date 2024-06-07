import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Private from "./pages/Private";
import Product from "./pages/Product";


function AppRouter() {
  const [isLogin, setIsLogin] = useState(false);
  
  const loginRoute = (
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="private" element={<Private />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
  const guestRoute = (
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="private" element={<Navigate to='/' />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
  return (
    <>
      <button onClick={() => setIsLogin((prv) => !prv)}>
        {isLogin ? "Logout" : "Login"}
      </button>
      <BrowserRouter>
        <Routes>
          {isLogin ? loginRoute : guestRoute}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
