// import React from 'react';
// import Hero from './components/Hero/Hero'
// import ImageUploader from './components/Converter/ImageUploader';
// import ImageComparison from './components/Comparison/ImageComparison';
// import Steps from './components/Steps/Steps';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <Hero />
//       <ImageUploader /> 
//       <Steps />
//       <ImageComparison />
//       <About />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar'
import Homepage from './Homepage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/About" element={<About />} /> 
        <Route path="/Contact" element={<Contact />} /> 
      </Routes>
    </Router>
  );
}

export default App;
