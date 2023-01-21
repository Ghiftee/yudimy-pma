import React from 'react'
import './App.css'
import logo from './assets/images/logo.png'
import hamburger from './assets/images/hamburger.png'

export class App extends React.Component {
  render() {
    return (
        <div>
        <header>
            <nav>
                <img id="logo" alt="logo" src={logo} />
                <img id="hamburger" alt="hamburger" src={hamburger} />
            </nav>
        </header>
        </div>
    )
  }
}

export default App;