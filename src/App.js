import React from 'react';
import './App.css';
import Homepage from './Homepage';
// import { Navbar } from './components/Navbar/Navbar';
import Nav from './components/Navbar/Nav';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Nav />
      <Homepage/>
    </div>
  );
}

export default App;
