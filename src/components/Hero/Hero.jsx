import React from 'react';
import Flip from "./Flip";
import './hero.css';

const Hero = () => {
  const words = ["free", "unlimited", "quality"];
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1><Flip words={words} /> Image Converter</h1>
        <p>Convert images in seconds without losing its quality and installing any software or plugins!</p>
      </div>
    </section>
  );
};

export default Hero;
