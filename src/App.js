import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Nav from './components/Navbar/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Homepage/>
    </div>
  );
}

export default App;
