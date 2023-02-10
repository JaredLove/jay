import React from 'react';
import Home from './components/Home';
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from './components/Nav';
// import Loading from './components/Loading';

function App() {

  return (
    <div className='hero'>
    <><Navbar></Navbar></>
     
  
      <Routes>
  
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes>
    
    </div>
  );
}

export default App;
