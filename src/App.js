import React from 'react';
import Hero from './components/Hero/Hero'
import ImageUploader from './components/Converter/ImageUploader';
import FeaturesSection from './components/Features/FeaturesSection';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Hero />
      <ImageUploader />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default App;
