import React from "react";
import './nav.css'


const Nav = () => {

    return (
        <header>
            <nav>
                
                    <div className="brand">
                        Jay
                    </div>
            <div>    
                <ul>
                    <li>
                        <a href="#about" >( ) About Me</a>
                    </li>
                    <li>
                        <a href="#resume" >( ) Expertise</a>
                    </li>
                    <li>
                        <a href="#work" >( ) Resume</a>
                    </li>
                    <li>
                        <a href="#contact" >( ) Contact Me</a>
                    </li>
                </ul>
            </div> 
            </nav>
        </header>
    )
}

export default Nav;