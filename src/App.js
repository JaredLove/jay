import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav';

function App() {

  return (
    <div className='appDiv'>
    <header><><Nav></Nav></></header>
     
  
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    
    </div>
  );
}

export default App;
