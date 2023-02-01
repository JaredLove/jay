import React from 'react';
import coverImage from '../../assets/images/test.png';
import timeWork from "../../assets/images/time-2-work.jpeg";
import book from "../../assets/images/bookeeper.png";
import watchTime from '../../assets/images/watch-time.png'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub ,  faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
function Home(){

  return (
    <body className='hero'>
      
    <div>
    <section className='home' id='home'>
      <div>
        <h2>Hi, my name is,</h2>
      </div>
    <div>
       <h1> Jared Love</h1> 
    </div>
    <div>
      <h2>I design and build things for the web.</h2>
    </div>
    <div>
       <h3>I'm a full stack web developer
            that can design and build digital experiences.</h3>
    </div>
           
            
           
      <div> 
          <section className='links'>
           <a href='/#contact'> <FontAwesomeIcon icon={faMailBulk} /></a>
           <a href='https://github.com/JaredLove'> <FontAwesomeIcon icon={faGithub} /></a>
           <a href='https://www.linkedin.com/in/jared-love-188479241/'> <FontAwesomeIcon icon={faLinkedin} /></a>
          </section>  
      </div>  
    </section>
 
    </div>
    

    
   
    <div className='about' id='about'>
      <section className='aboutMe'>
      <h1 className='aboutInfo'>01. Who am I? </h1>   
        <p>
          
                Hey, I'm Jared, but you can call me Jay. I started my web
                development and coding joureny in 2021 but have had an intrest in it
                since 2015 when I took a course in c++ while attending college.
        </p> 
        <p>
                Currently based in San Antonio, Texas and graduated from the
                UTSA full stack web developer course in december 2022.
        </p>

        <p>
          Some of my hobbies are gaming, coffee, and you guessed it, coding!
        </p>

        <p>
          How is coffee a hobby, you may be wondering? Why not, It's fun, 
          delicious, social, and you can spend as little as $5 to get a boost.

        </p>
        </section>
        <img className="myImg" src={coverImage}  alt="cover" />
      </div>

      <div className='resumeInfo' id='resume'>

<p className='resumeTitle'>02. My Expertise</p>
<ul>
  <li>
<div className='borderInfo1'>
  <div className='frontEnd'>
  <h1>Frontend Developer</h1>
  <p>
    Knowledgeable UI/UX developer. Experienced
    in HTML, CSS, JS, and React frameworks.
  </p>
  </div>
</div>
</li>
<li>
<div className='borderInfo1'>
  <h1>Backend Developer</h1>
  <p>
    Being experienced in SQL, MongoDB, Apis, Restful Apis,
   and Apollo.
  </p>
</div>
</li>
<li>
<div className='borderInfo1'>
  <h1>Value</h1>
  <p>
    I Strive to provide excellence and value
    into everything I work on. Need a driven and
    hardworking developer? You've come to the right place
  </p>
</div>
</li>
</ul>
<div>
 <h1 className='resumeLink'>Take a look at my <a href="https://docs.google.com/document/d/17J7e-47XY25hDmlJsdg8uso_YAwcqxTL8uDUWnMpqb4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></h1> 
</div>

</div>
      <div className='work' id='work'>
      <h1> 03. Some Of My Work</h1>
      <div className='wt'>
        <p className='title'>WATCHTIME <br></br> <span className='span'>Front End / Back End Development</span></p>
   <section className='watchTime'>
    
  <img src= {watchTime} alt="watchTime" style={{width: 400, height: 200}}></img>
   <div className='overlay'>   <a className='text1' href='https://watch-time-app.herokuapp.com/'>WatchTime</a>
                                <a className='text2' href='https://github.com/JaredLove/Watch--Time'>Github</a></div>
   </section>
   </div>
   <div className='t2w'>
    <p className='title2'>TIME2WORK <br></br> <span className='span'>Front End / Back End Development</span></p>
   <section className='time2Work'>
  
   <img src= {timeWork} alt="time2Work" style={{width: 400, height: 200}} />
   <div className='overlay2'>   <a className='text1' href='https://protected-taiga-76694.herokuapp.com/'>Time 2 Work</a>
                                <a className='text2' href='https://github.com/bsolis6878/time-2-work'>Github</a></div> 
                                
   </section>
   </div>
   <div className='b2g'>
    <p className='title3'>BOOKEEPER2GO <br></br> <span className='span'>Front End / Back End Development</span></p>
   
   <section className='bookeeper2Go'>
   
  <img src= {book} alt="bookeeper2Go" style={{width: 400, height: 200}} />
  <div className='overlay3'>   <a className='text1' href='https://bookeeper2go.herokuapp.com/'>Bookeeper2go</a>
                                <a className='text2' href='https://github.com/JaredLove/Bookeeper2go'>Github</a></div>
   </section>
    </div>
    </div>
 
    <div id='contact'>
    <section className='contactMe'>
      <h1>( ) Contact Me</h1>
      <p>I'm always looking for new opportunities, whether you have a job for me
        or just want to say hello, my inbox is just a click away. I'll try my best
        to get back to you.
      </p>

      <a href = "mailto: abc@example.com"><button>Send Email</button></a>
    </section>
</div>
</body>

  );
}
export default Home;
