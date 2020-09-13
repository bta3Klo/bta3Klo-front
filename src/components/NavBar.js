import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import M from  'materialize-css/dist/js/materialize.min.js';
import navLogo from './imges/bta3-klo-nav.png'

const NavBar=()=>{

  useEffect(() => {
    let sidenav = document.querySelector('#mobile-menu');
    M.Sidenav.init(sidenav, {});
  })

    return (
    <nav class="nav-wrapper teal accent-4" id="nav">
    <div class="container">
      <Link to="/" class="brand-logo"><img src={navLogo} style={{top: '-55px', position: "absolute"}} /></Link>
      <a href="" class="sidenav-trigger" data-target='mobile-menu'>
        <i class="material-icons">menu</i>
      </a>
      <ul class="right hide-on-med-and-down">
        <li><Link to="/Signup">Creat account</Link></li>
        <li><Link to="/SignIn">SignIn</Link></li>
        <li><Link to="">Contact Us</Link></li>
        <li><Link to="">About Us</Link></li>
      </ul>
      <ul class="sidenav teal accent-4" id="mobile-menu">
        <li><Link to="/Signup">Creat account</Link></li>
        <li><Link to="/SignIn">SignIn</Link></li>
        <li><Link to="">Contact Us</Link></li>
        <li><Link to="">About U</Link></li>
      </ul>
    </div>
  </nav>
  )
}
export default NavBar