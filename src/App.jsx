import React, { Component } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Hero />
      </div>
    );
  }
}

export default App;
