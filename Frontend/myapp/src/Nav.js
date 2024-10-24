import { NavLink } from 'react-router-dom'
import './navbar.css'

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h5>Website</h5>
        <div className="logo">
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cloth">Cloth</NavLink>
            </li>
            <li>
              <NavLink to="/mycard">Mycard</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/upload">Upload</NavLink>
            </li>
            <li>
              <NavLink to="/Post">Post</NavLink>
            </li>
            <li>
              <NavLink to="/Mobile">Mobile</NavLink>
            </li>
            <li>
              <NavLink to="/Login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav