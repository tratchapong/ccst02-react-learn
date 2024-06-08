import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import useDebounce from "../hooks/useDebounce";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { isLogin, setIsLogin, setUser, user } = useContext(AuthContext);
  const [id, setId] = useState(1);
  const newId = useDebounce(id);

  useEffect( ()=> {
    navigate(`/product/${newId}`)
  },[newId])

  const hdlChangeId = (e) => {
    if(e.target.value)
       setId(e.target.value);
  };

  const hdlLogout = () => {
    localStorage.removeItem('user')
    setIsLogin(false)
    setUser(null)
    navigate('/login')
  }

  return (
    <div style={{ display: "flex", gap: "100px", alignItems: "baseline" }}>
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Logo
      </h2>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/private">Private</Link>
        <Link to="/users">Users</Link>
        {!isLogin && (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
        <input type="number" value={id} onChange={hdlChangeId} 
          style={{ width : '3rem'}}
        />
        <Link to={`/product/${id}`}>Product by id</Link>
      </nav>
      <p>{isLogin? user.name : 'guest'}</p>
      { isLogin && <button onClick={hdlLogout}>Logout</button> }
    </div>
  );
}

export default Header;
