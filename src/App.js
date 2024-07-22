import React from 'react';
import Hero from './components/Hero/Hero'
import ImageUploader from './components/Converter/ImageUploader';
import ImageComparison from './components/Comparison/ImageComparison'
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Hero />
      <ImageUploader />
      <ImageComparison />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
