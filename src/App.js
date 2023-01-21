import React from 'react'
import './App.css'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar';

export class App extends React.Component {
  render() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <Intro />
        </>
    )
  }
}

export default App;