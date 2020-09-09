import React from 'react'
import {Link} from 'react-router-dom'
const NavBar=()=>{
    return ( <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">Bta3Klo</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="/SignIn">SignIn</Link></li>
            <li><Link to="/Signup">Signup</Link></li>
            <li><Link to="Profile">My profile</Link></li>
          </ul>
        </div>
      </nav>)
}
export default NavBar