import React from 'react';
import Flip from "./Flip";
import './hero.css';

const Hero = () => {
  const words = ["Free Image Converter", "Gratis beeldomskakelaar"];
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1><Flip words={words} /></h1>
        <p>Convert images in seconds without losing its quality and installing any software or plugins!</p>
      </div>
    </section>
  );
};

export default Hero;
