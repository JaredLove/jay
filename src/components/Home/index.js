import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../../assets/images/logo-s.png';
import './index.css';
import { Link } from 'react-router-dom';
function Home(){

  return (
    
    <div>  

    
      
      
     
    <section className='home'>
           <h1 className='text-white'>Hi,</h1> 
            <h2 className='text-white'>I'm Jared Love</h2> 
            <h2 className='text-white'>Full Stack Web Developer</h2>      
            <p>Front End / Back End / Freelancer</p>
            <Link to="/contact"> <button>Contact Me</button></Link> 
    </section>
</div>

  );
}
export default Home;
