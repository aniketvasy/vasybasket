import React from 'react'
import { Link } from "react-router-dom";
const NavbarLogo = () => {
  return (
    <div className='navbar-logo-comp'>
    <Link to={"/"}>
          <div className="logo">
            <img src="images/logo_vasyerp_nav.png" className="logo-img" />
          </div>
    </Link>
    </div>
  )
}

export default NavbarLogo