import React, { Component } from 'react';
import hero from '../assets/hero.png';

function Hero() {
  return (
    <div className="hero">
      <img src={hero} alt="collage of pictures with activites" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

export default Hero;
