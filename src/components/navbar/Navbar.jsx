import React from 'react'
import logo from '../../assets/images/logo.png'
import hamburger from '../../assets/images/hamburger.png'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
            <img id="logo" alt="logo" src={logo} />
            <img id="hamburger" alt="hamburger" src={hamburger} />
        </nav>
    </div>
  )
}

export default Navbar