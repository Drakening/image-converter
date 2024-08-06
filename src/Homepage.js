import React from 'react';
import Hero from './components/Hero/Hero';
import ImageUploader from './components/Converter/ImageUploader';
import ImageComparison from './components/Comparison/ImageComparison';
import Steps from './components/Steps/Steps';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';


const Homepage = () => {
  return (
    <main>
      <div id="home">
        <Hero />
      </div>
      <ImageUploader />
      <ImageComparison />
      <Steps />
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

export default Homepage;
