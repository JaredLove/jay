import React from 'react';
import Home from './components/Home';
import { Route, Routes, Navigate } from "react-router-dom";
import Nav from './components/Nav';

function App() {

  return (
    <div className='hero'>
    <><Nav></Nav></>
     
  
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes>
    
    </div>
  );
}

export default App;
