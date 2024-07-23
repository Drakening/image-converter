import React from 'react';
import Flip from "./Flip";
import './hero.css';

const Hero = () => {
  const words = ["free", "unlimited", "quality"];
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1><Flip words={words} /> Image Converter</h1>
        <p>Convert images in bulk without losing their quality. It’s fast, free & easy-to-use!</p>
      </div>
    </section>
  );
};

export default Hero;
