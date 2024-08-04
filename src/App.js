import React from 'react';
import './App.css';
import Homepage from './Homepage';
import { Navbar } from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
