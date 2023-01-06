import React from 'react';

import horiseon from "../../assets/images/hweb.jpg";
import runBuddy from "../../assets/images/runb.jpg";
import onIt from "../../assets/images/home.png";
import timeWork from "../../assets/images/time-2-work.jpeg";
import book from "../../assets/images/bookeeper.png";
import watchTime from '../../assets/images/watch-time.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Portfolio() {
  return (
    <div className='work'>
   <section className='watchTime'>

  <img src= {watchTime} alt="watchTime" style={{width: 400, height: 200}}></img>
   <div className='overlay'>   <a className='text1' href='https://watch-time-app.herokuapp.com/'>WatchTime</a>
                                <a className='text2' href='https://github.com/JaredLove/Watch--Time'>Github</a></div>
   </section>
   <section className='time2Work'>
   <img src= {timeWork} alt="time2Work" style={{width: 400, height: 200}} />
   <div className='overlay2'>   <a className='text1' href='https://protected-taiga-76694.herokuapp.com/'>Time 2 Work</a>
                                <a className='text2' href='https://github.com/bsolis6878/time-2-work'>Github</a></div>
   </section>
   <section className='bookeeper2Go'>
  <img src= {book} alt="bookeeper2Go" style={{width: 400, height: 200}} />
  <div className='overlay3'>   <a className='text1' href='https://jaredlove.github.io/Bookeeper2go/'>Bookeeper2go</a>
                                <a className='text2' href='https://github.com/JaredLove/Bookeeper2go'>Github</a></div>
   </section>

    
    
    </div>
  );
}

export default Portfolio;
