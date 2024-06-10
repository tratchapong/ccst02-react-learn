import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const { isLogin, user, setUser, setIsLogin } = useContext(AuthContext);
  const [id, setId] = useState(1);

  const hdlChangeId = (e) => {
    const newId = e.target.value;
    setId(newId);
    navigate(`/product/${newId}`);
  };

  const hdlLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    setIsLogin(false)
    navigate('/login')
  }

  return (
    <div style={{ display: "flex", gap: "100px", alignItems: "baseline" }}>
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        { isLogin ? user.name : 'Guest' }
      </h2>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/private">Private</Link>
        <Link to="/users">Users</Link>
        {!isLogin && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        <input type="number" value={id} onChange={hdlChangeId} />
        <Link to={`/product/${id}`}>Product by id</Link>
      </nav>
      <button onClick={hdlLogout}>Logout</button>
    </div>
  );
}

export default Header;
