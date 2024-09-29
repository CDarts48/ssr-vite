import React from 'react';
import './css/Hero.css';

const HeroSection = () => {
  return (
    <section className="hero">
          <div className="hero-content">
          <div className="hero-image">
          <img src="/workpics/misc/rs=w_1280,h_853.jpg" alt="Description" />
        </div>
        <div className="hero-text">
          <h1>Quality Service</h1>
          <p>Professional handyman for residential and commercial properties.</p>
          <button>Contact Me Today!</button>
              </div>
      </div>
    </section>
  );
}

export default HeroSection;