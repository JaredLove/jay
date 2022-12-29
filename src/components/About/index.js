import React from 'react';
import coverImage from '../../assets/images/aboutme.jpg';

function About() {
  return (
    <section className="my-5">

      
      <img src={coverImage} className="myImg" style={{ width: "20%" }} alt="cover" />
      <div className="my-2">
        <p className='aboutMe'>
          <h1 id="about">Who am I?</h1>
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
