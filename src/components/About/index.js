import React from 'react';
import coverImage from '../../assets/images/test.png';

function About() {
  return (
 <div className='aboutInfo'>
        <h3 className='about'>Who am I?</h3>
        <p className='aboutMe'>
          
                Hey, I'm Jared, but you can call me Jay. I started my web
                development and coding joureny in 2021 but have had an intrest in it
                since 2015 when I took a course in c++ while attending college. 
                Currently based in San Antonio, Texas and graduated from the
                UTSA full stack web developer course in december 2022.
                I strive to provide excellence and value into everything 
                I work on. Take a look and check me out.
        </p>
        <img className="myImg" src={coverImage}  alt="cover" />
      </div>

  );
}

export default About;
