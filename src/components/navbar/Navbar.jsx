import React from 'react'
import logo from '../../assets/images/logo.png'
import hamburger from '../../assets/images/hamburger.png'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <nav className="px-md-5">
          <img id="logo" alt="logo" src={logo} />
          <img id="hamburger" alt="hamburger" src={hamburger} />
          <ul id="navbar" className="nav gap-4 text-decoration-none">
            <li>
              <a className="text-decoration-none text-secondary" href="#home">Home</a>
            </li>
            <li>
              <a className="text-decoration-none text-secondary" href="#home">Our mission</a>
            </li>
            <li>
              <a className="text-decoration-none text-secondary" href="#home">Products</a>
            </li>
            <li>
              <a className="text-decoration-none text-secondary" href="#home">Insights</a>
            </li>
            <li>
              <a className="text-decoration-none text-secondary" href="#home">Contact us</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar