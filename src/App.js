import React from 'react';
import ImageUploader from './components/ImageUploader';
import FeaturesSection from './components/FeaturesSection';


function App() {
  return (
    <div className="App">
      <h1>Image File Type Converter</h1>
      <ImageUploader />
      <FeaturesSection/>
    </div>
  );
}

export default App;
