import React from 'react';
import ImageUploader from './components/Converter/ImageUploader';
import FeaturesSection from './components/Features/FeaturesSection';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <ImageUploader />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default App;
