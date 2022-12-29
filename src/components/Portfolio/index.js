import React from 'react';

import horiseon from "../../assets/images/hweb.jpg";
import runBuddy from "../../assets/images/runb.jpg";
import onIt from "../../assets/images/home.png";
import timeWork from "../../assets/images/time-2-work.jpeg";
import book from "../../assets/images/bookeeper.png";
import myPort from "../../assets/images/myport.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Portfolio() {
  return (
    <div className='workdiv'>
    <h1 className='workHead'>My Work</h1>

    <section className='work' > 
    
            <ul className='workUl'>
              <li>
              
                <img src= {horiseon} alt="horiseon" style={{width: 50, height: 50}} />
                <a href="https://jaredlove.github.io/challenge1-Horiseon/" ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>Github</a>
            
                <a href="https://jaredlove.github.io/challenge1-Horiseon/"> Horiseon Website</a>
                
              </li>
              <li>
           
                <img src={runBuddy} alt="runbuddy" style={{width: 50, height: 50}} />
                 <a href="https://github.com/bsolis6878/time-2-work/tree/develop" ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                    
                    
                 <a href="https://jaredlove.github.io/run-buddy/">Runbuddy</a>
                
              </li>
              <li>
          
                <img src={onIt} alt="Onit Streaming" style={{width: 50, height: 50}} />
                <a href="https://brenbrenda55.github.io/onit/" ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                    
                    
                <a href="https://brenbrenda55.github.io/onit/" >Onit</a>
            
              </li>
              <li> 
          
               <img src={timeWork} alt="Time-2-Work" style={{width: 50, height: 50}} />
                   
                    <a href="https://github.com/bsolis6878/time-2-work/tree/develop">Github</a>
                    <a href="https://protected-taiga-76694.herokuapp.com/" >Time-2-Work</a>
                
              </li>
              <li >
             
                <img src={book} alt="Bookeeper2go" style={{width: 50, height: 50}} />
                <a href="https://github.com/JaredLove/Bookeeper2go" ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </a>
                    
                    
                <a href="https://jaredlove.github.io/Bookeeper2go/" >Bookeeper2go</a> 
                
              </li>
              <li>
            
                    <img src={myPort} alt="myportfolio" style={{width: 50, height: 50}} />
                   <a href="https://github.com/JaredLove/myportfolio" ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </a> 
                    <a href="https://jaredlove.github.io/myportfolio/" >HTMl-CSS Portfolio</a>
                    
              </li>
              <li>
            
                    <img src={myPort} alt="myportfolio" style={{width: 50, height: 50}} />
                   <a href="https://github.com/JaredLove/myportfolio" ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </a> 
                    <a href="https://jaredlove.github.io/myportfolio/" >Watch Time</a>
                 
              </li>
            </ul>

    </section>
    
    
    </div>
  );
}

export default Portfolio;
