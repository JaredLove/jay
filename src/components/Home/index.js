import React, { useEffect, useState } from 'react';
import coverImage from '../../assets/images/test.png';
import timeWork from "../../assets/images/time-2-work.jpeg";
import book from "../../assets/images/bookeeper.png";
import watchTime from '../../assets/images/watch-time.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub ,  faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';


const  Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState({
    div1: false,
    div2: false,
    div3: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const div1 = document.getElementById('about');
      const div2 = document.getElementById('resume');
      const div3 = document.getElementById('work');
      const div4 = document.getElementById('contact');

      if (div1) {
        const boundingRect1 = div1.getBoundingClientRect();
        if (boundingRect1.top < window.innerHeight) {
          setIsVisible((prevState) => ({ ...prevState, div1: true }));
        }
      }

      if (div2) {
        const boundingRect2 = div2.getBoundingClientRect();
        if (boundingRect2.top < window.innerHeight) {
          setIsVisible((prevState) => ({ ...prevState, div2: true }));
        }
      }

      if (div3) {
        const boundingRect3 = div3.getBoundingClientRect();
        if (boundingRect3.top < window.innerHeight) {
          setIsVisible((prevState) => ({ ...prevState, div3: true }));
        }
      }
      if (div4) {
        const boundingRect3 = div4.getBoundingClientRect();
        if (boundingRect3.top < window.innerHeight) {
          setIsVisible((prevState) => ({ ...prevState, div4: true }));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className='hero'>
      
    <div className='homeSection'>
    <section className='home' id='home'>
      <div className='hello'>
        <p>Hello, my name is</p>
      </div>
    <div>
       <h1> Jared Love.</h1> 
    </div>
    <div>
       <h2>I'm a full stack web developer
            that can design and build <span className='design'>digital experiences.</span></h2>
    </div>
           
            
           
      <div> 
          <section className='links'>
           <a href='#contact' > <FontAwesomeIcon icon={faMailBulk} /></a>
           <a href='https://github.com/JaredLove' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
           <a href='https://www.linkedin.com/in/jared-love-188479241/' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a>
          </section>  
      </div>  
    </section>
 
    </div>
    <div className='about' id='about'   style={{
          opacity: isVisible.div1 ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}    >
      <section className='aboutMe'>
      <h1 className='aboutInfo'>( ) Who am I? </h1>   
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
        <div
      style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        right: '200px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={coverImage}
        alt="mypic"
        className='mypic'
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <div
      className='backgroundShade'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `rgba(0, 0, 0, 0.5)`,
          opacity: isHovered ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      />
    </div>
      </div>
      

      <div className='resumeInfo' id='resume'     style={{
          opacity: isVisible.div2 ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}>

<p className='resumeTitle'>( ) My Expertise</p>
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
  <div className='backEnd'>
  <h1>Backend Developer</h1>
  <p>
    Being experienced in SQL, MongoDB, Apis, Restful Apis, state,
   and Apollo.
  </p>
</div>
</div>
</li>
<li>
<div className='borderInfo1'>
  <div className='value'>
  <h1>Value</h1>
  <p>
    I Strive to provide excellence and value
    into everything I work on. Need a driven and
    hardworking developer? You've come to the right place
  </p>
  </div>
</div>
</li>
</ul>
<div>
 <h1 className='resumeLink'>Take a look at my <a href="https://docs.google.com/document/d/17J7e-47XY25hDmlJsdg8uso_YAwcqxTL8uDUWnMpqb4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></h1> 
</div>

</div>
      <div className='work' id='work'     style={{
          opacity: isVisible.div3 ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}>
      <h1 className='workH1'> ( ) Some Of My Work</h1>
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
 
    <div id='contact' className='contactSection' style={{
          opacity: isVisible.div4 ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}>
    <section className='contactMe'>
      <h1> ( ) Contact Me</h1>
      <p>I'm always looking for new opportunities, whether you have a job for me
        or just want to say hello, my inbox is just a click away. I'll try my best
        to get back to you.
      </p>

      <a href = "mailto: abc@example.com"><button>Send Email</button></a>
    </section>
</div>
</main>

  );
}
export default Home;
