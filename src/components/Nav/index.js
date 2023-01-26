import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//  import { FaBars, FaTimes } from "@fortawesome/free-solid-svg-icon";
import "./nav.css";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Nav() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		// <header>
		// 	<h3>LOGO</h3>
		// 	<nav ref={navRef}>
		// 		<a href="#about"> About</a>
		// 		<a href="#resume">Expertise</a>
		// 		<a href="#work">My Work</a>
		// 		<a href="#contact">Contact Me</a>
		// 		<button
		// 			className="nav-btn nav-close-btn"
		// 			onClick={showNavbar}>

        //   <FontAwesomeIcon icon={faTimes} />
		// 		</button>
		// 	</nav>
		// 	<button className="nav-btn" onClick={showNavbar}>
	
        // <FontAwesomeIcon icon={faBars} />
		// 	</button>
		// </header>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#home">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#expertise">Expertise</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#work">Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
}

export default Nav;



// import './index.scss'
// import { useState } from 'react'
// import LogoS from '../../assets/images/logo-s.png'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faLinkedin,
//   faGithub,
// } from '@fortawesome/free-brands-svg-icons'
// import {
//   faHome,
//   faUser,
//   faEnvelope,
//   faSuitcase,
//   faPaperclip,
//   faBars,
//   faClose,
// } from '@fortawesome/free-solid-svg-icons'
// import { Link, NavLink } from 'react-router-dom'

// const Sidebar = () => {
//   const [showNav, setShowNav] = useState(false);

//   return (
//     <div className="nav-bar">
//             <Link 
//         className="logo"
//         to="/"
//         onClick={() => setShowNav(false)}>
//         <img src={LogoS} alt="Logo" />
        
//       </Link>
//       <nav className={showNav ? 'mobile-show' : ''}>
//         <NavLink 
//           exact="true"
//           activeclassname="active"
//           to="/"
//           onClick={() => setShowNav(false)}>
//           <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
//         </NavLink>
//         <NavLink 
//           activeclassname="active"
//           className="about-link"
//           to="/about"
//           onClick={() => setShowNav(false)}>
//           <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
//         </NavLink>
//         <NavLink
//           activeclassname="active"
//           className="portfolio-link"
//           to="/portfolio"
//           onClick={() => setShowNav(false)}
//         >
//           <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
//         </NavLink>

//         <NavLink
//           activeclassname="active"
//           className="resume-link"
//           to="/resume"
//           onClick={() => setShowNav(false)}
//         >
//           <FontAwesomeIcon icon={faPaperclip} color="#4d4d4e" />
//         </NavLink>
        
//         <NavLink
//           activeclassname="active"
//           className="contact-link"
//           to="/contact"
//           onClick={() => setShowNav(false)}
//         >
//           <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
//         </NavLink>
//         <FontAwesomeIcon 
//           onClick={() => setShowNav(false)}
//           icon={faClose}
//           color="#ffd700"
//           size="3x"
//           className='close-icon' />
//       </nav>
//       <ul>
//         <li>
//           <a
//             href="https://www.linkedin.com/in/jared-love-188479241/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faLinkedin}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://github.com/JaredLove"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faGithub}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>

//       </ul>
//       <FontAwesomeIcon 
//           onClick={() => setShowNav(true)}
//           icon={faBars}
//           color="#ffd700"
//           size="3x"
//           className='hamburger-icon' />
//     </div>
//   )
// }

// export default Sidebar;

