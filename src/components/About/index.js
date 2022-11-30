import React from 'react';
import coverImage from '../../assets/images/aboutme.jpg';
import Sidebar from '../Nav';
function About() {
  return (
    <section className="my-5">
      <><Sidebar></Sidebar></>
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
      <div className="my-2">
        <p>
                Hey, I'm Jared, but you can call me Jay. 
                Currently learning to become a Web Developer at UTSA. 
                I strive to provide excellence and value into everything 
                I work on. Currently stationed in San Antonio, TX.  
                Take a look and check me out.
        </p>
      </div>
    </section>
  );
}

export default About;
