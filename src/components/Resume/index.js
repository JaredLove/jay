import React from 'react';
import Sidebar from '../Nav';


function Resume() {



  return (
    <body>
      <><Sidebar></Sidebar></>
     <h1>Download My <a href="/resume">Resume</a></h1> 

     <section>
          <h2>Here are some technologies I've worked with</h2>

<ul class="skill">
    <li>
        
        <i class="fa-solid fa-check"></i> HTML
    </li>
    <li>
        <i class="fa-solid fa-check"></i> CSS-Bootstrap-Bulma
    </li>
    <li>
        <i class="fa-solid fa-check"></i> Javascript
    </li>
    <li>
        <i class="fa-solid fa-check"></i> Node.js
    </li>
    <li>
        <i class="fa-solid fa-check"></i> Express.js
    </li>
    <li>
        <i class="fa-solid fa-check"></i> Mysql
    </li>
    <li>
        <i class="fa-solid fa-check"></i> React
    </li>
    <li>
        <i class="fa-solid fa-check"></i> Mongoose
    </li>
    <li>
        <i class="fa-solid fa-check"></i> MongoDB
    </li>
</ul>
          </section>
    </body>
  );
}

export default Resume;
