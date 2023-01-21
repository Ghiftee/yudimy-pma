import React from 'react'
import './App.css'
import Intro from './components/intro/Intro'
import Mission from './components/mission/Mission';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import Reviews from './components/reviews/Reviews';

export class App extends React.Component {
  render() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <Intro />
            <Mission />
            <Products />
            <Reviews />
        </>
    )
  }
}

export default App;