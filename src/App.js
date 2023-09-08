import React, { useState, useEffect } from 'react';
import Home from './pages/Home.js';
import { Route, Routes, Navigate } from "react-router-dom";
import Header from './components/Header';
// import Loading from './components/Loading';
import Footer from './components/Footer';
import Contact from './components/Contact';
  const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate an asynchronous operation, such as fetching data
      
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }, []);
  return (
   
     
    <div className='hero'>

      {/* {
         loading ?

         <Loading />

         :
       */}
     <header>
    <><Header/></>
     
  
      <Routes>
  
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes></header>
    {/* } */}
    <Footer/>
    </div>
    

  );
}

export default App;
