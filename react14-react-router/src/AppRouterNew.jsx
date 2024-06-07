import React, { useState, useContext } from "react";
import { createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Private from "./pages/Private";
import Product from "./pages/Product";
import UsersList from "./pages/UsersList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthContext from "./contexts/AuthContext";

const loginRoute = createBrowserRouter( [
  {
    path : '/',
    element : <Layout />,
    children : [
      { path : '', element: <Home /> },
      { path : 'about', element: <About /> },
      { path : 'contact', element: <Contact /> },
      { path : 'private', element: <Private /> },
      { path : 'product/:id', element: <Product /> },
      { path : 'users', element: <UsersList /> },
      { path : 'login', element: <Login /> },
      { path : 'register', element: <Register /> },
      { path : '*', element: <NotFound /> },
    ]
  }
])
const guestRoute = createBrowserRouter( [
  {
    path : '/',
    element : <Layout />,
    children : [
      { path : '', element: <Home /> },
      { path : 'about', element: <About /> },
      { path : 'contact', element: <Contact /> },
      { path : 'private', element: <Navigate to='/' /> },
      { path : 'product/:id', element: <Product /> },
      { path : 'register', element: <Register /> },
      { path : 'login', element: <Login /> },
      { path : '*', element: <NotFound /> },
    ]
  }
])

function AppRouter() {
  // const [isLogin, setIsLogin] = useState(false);
  const {isLogin} = useContext(AuthContext)
  
  return (
    <>
      {/* <button onClick={() => setIsLogin((prv) => !prv)}>
        {isLogin ? "Logout" : "Login"}
      </button> */}
      <RouterProvider router={ isLogin ? loginRoute : guestRoute } />
    </>
  );
}

export default AppRouter;
