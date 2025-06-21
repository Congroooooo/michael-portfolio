import React from 'react';
import './Hero.css';
import profilePic from '../../assets/michael.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Michael Laureles</h1>
        <p>"Pursuing opportunity that will allow me to grow and enhance my skills professionally and to use my skills in the best possible way for achieving the company goals."</p>
        <a href="mailto:michaellaureles613@gmail.com" className="hero-hire-button">Hire Me</a>
      </div>
      <div className="hero-image">
        <img src={profilePic} alt="Michael Laureles" />
      </div>
    </section>
  );
};

export default Hero; 