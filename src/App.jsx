import React, { Component } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
import Credits from './components/Credits';

class App extends Component {
  render() {
    const cards = data.map((item) => {
      return <Card key={item.id} item={item} />;
    });

    return (
      <div className="main">
        <Nav />
        <Hero />
        <div className="cards-menu">{cards}</div>
        <Credits />
      </div>
    );
  }
}

export default App;
