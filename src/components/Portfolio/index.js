import React from 'react';
import Sidebar from '../Nav';
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
    <div>
    <h1>This is Portfolio</h1>
    <><Sidebar></Sidebar></>
    <section className='container'>
            <ul className='d-flex flex-row'>
              <li>
              <div>-----------------------</div>
                <img src= {horiseon} alt="horiseon" style={{width: 200, height: 170}} />
                <a href="https://jaredlove.github.io/challenge1-Horiseon/" ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            
                <a href="https://jaredlove.github.io/challenge1-Horiseon/"> Horiseon</a>
                <div>-----------------------</div>
              </li>
              <li>
              <div>-----------------------</div>
                <img src={runBuddy} alt="runbuddy" style={{width: 200, height: 170}} />
                 <a href="https://github.com/bsolis6878/time-2-work/tree/develop" ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                    
                    
                 <a href="https://jaredlove.github.io/run-buddy/">Runbuddy</a>
                 <div>-----------------------</div>
              </li>
              <li>
              <div>-----------------------</div>
                <img src={onIt} alt="Onit Streaming" style={{width: 200, height: 170}} />
                <a href="https://brenbrenda55.github.io/onit/" ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                    
                    
                <a href="https://brenbrenda55.github.io/onit/" >Onit</a>
                <div>-----------------------</div>
              </li>
              <li> 
              <div>-----------------------</div>
                <img src={timeWork} alt="Time-2-Work" style={{width: 200, height: 170}} />
                <a href="https://github.com/bsolis6878/time-2-work/tree/develop" ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                   
                    
                    <a href="https://protected-taiga-76694.herokuapp.com/" >Time-2-Work</a>
                    <div>-----------------------</div>
              </li>
              <li >
              <div>-----------------------</div>
                <img src={book} alt="Bookeeper2go" style={{width: 200, height: 170}} />
                <a href="https://github.com/JaredLove/Bookeeper2go" ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </a>
                    
                    
                <a href="https://jaredlove.github.io/Bookeeper2go/" >Bookeeper2go</a> 
                <div>-----------------------</div>
              </li>
              <li>
              <div>-----------------------</div>
                    <img src={myPort} alt="myportfolio" style={{width: 200, height: 170}} />
                   <a href="https://github.com/JaredLove/myportfolio" ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </a> 
                    <a href="https://jaredlove.github.io/myportfolio/" >HTMl-CSS Portfolio</a>
                    <div>-----------------------</div>
              </li>
            </ul>

    </section>
    
    
    </div>
  );
}

export default Portfolio;
