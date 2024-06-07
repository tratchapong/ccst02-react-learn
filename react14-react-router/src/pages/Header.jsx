import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  const [id, setId] = useState(1)

  const hdlChangeId = e => {
    const newId = e.target.value
    setId(newId)
    navigate(`/product/${newId}`)
  }

  return (
    <div style={{display:'flex', gap:'100px', alignItems:'baseline'}}>
      <h2
        style={{cursor:'pointer'}}
        onClick={ ()=> navigate('/') }
      >Logo</h2>
      <nav style={{display: 'flex', gap: '10px'}}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/private'>Private</Link>
        <Link to='/users'>Users</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
        <input type="number" value={id} onChange={hdlChangeId} />
        <Link to={`/product/${id}`}>Product by id</Link>
      </nav>
      <p>current page : {location.pathname}</p>
    </div>
  )
}

export default Header