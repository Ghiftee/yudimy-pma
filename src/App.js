import React from 'react'
import './App.css'
import Intro from './components/intro/Intro'
import Mission from './components/mission/Mission';
import Navbar from './components/navbar/Navbar';

export class App extends React.Component {
  render() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <Intro />
            <Mission />
        </>
    )
  }
}

export default App;