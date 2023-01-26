import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coverImage from '../../assets/images/test.png';
import timeWork from "../../assets/images/time-2-work.jpeg";
import book from "../../assets/images/bookeeper.png";
import watchTime from '../../assets/images/watch-time.png'
import './index.css';
import { Link } from 'react-router-dom';
function Home(){

  return (
    <div>
    <div className='home' id='home'>  
            <h1 className='text-white'> Jared Love</h1> 
            <h2 className='text-white'>Full Stack Web Developer</h2>
            <Link to="/contact"> <button>Contact Me</button></Link> 

    </div>

    <div className='aboutInfo' id='about'>
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

      <div className='resumeInfo' id='resume'>


<div className='borderInfo'>
 <h1>Take a look at my <a href="https://docs.google.com/document/d/17J7e-47XY25hDmlJsdg8uso_YAwcqxTL8uDUWnMpqb4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></h1> 

   <h2>Here are some technologies I've worked with</h2>

<ul className="skill">
<li>
 
 <i className="fa-solid fa-check"></i> HTML
</li>
<li>
 <i className="fa-solid fa-check"></i> CSS-Bootstrap-Bulma
</li>
<li>
 <i className="fa-solid fa-check"></i> Javascript
</li>
<li>
 <i className="fa-solid fa-check"></i> Node.js
</li>
<li>
 <i className="fa-solid fa-check"></i> Express.js
</li>
<li>
 <i className="fa-solid fa-check"></i> Mysql
</li>
<li>
 <i className="fa-solid fa-check"></i> React
</li>
<li>
 <i className="fa-solid fa-check"></i> Mongoose
</li>

<li>
 <i className="fa-solid fa-check"></i> MongoDB
</li>
<li>
 <i className="fa-solid fa-check"></i> SQL
</li>
<li>
 <i className="fa-solid fa-check"></i> Apollo
</li>
<li>
 <i className="fa-solid fa-check"></i> State
</li>


</ul>
</div>   
</div>
      <div className='work' id='work'>
      <h1> Some Of My Work</h1>
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
  <div className='overlay3'>   <a className='text1' href='https://jaredlove.github.io/Bookeeper2go/'>Bookeeper2go</a>
                                <a className='text2' href='https://github.com/JaredLove/Bookeeper2go'>Github</a></div>
   </section>
    </div>
    </div>
</div>

  );
}
export default Home;
