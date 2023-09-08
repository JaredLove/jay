import React from "react";
import { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub ,  faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faFolder, faExternalLinkSquare} from '@fortawesome/free-solid-svg-icons';
import code from '../../assets/images/code.jpg';

function Work() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const handleShowAll = () => {
    setSelectedButton(null);
  };
  const renderImages = () => {
    // Define your image sets based on the button clicked
    if (selectedButton === 'webDesigns') {
      // web designs
      return (
        <div className='images'>
          <div className="workContainerWrapper">
            <div className="workTop">
              <div className="folder">
                <FontAwesomeIcon icon={faFolder} />
              </div>
              <div className="projectLinks">
                <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
              </div>
            </div>
            <div className="workContent">
              <h3 className="projectTitle">Watch Time</h3>
              <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
          </div>
          <div className="workBottom">
       
              <p>React Node.js MongoDB</p>
    
          </div>
          </div>

            
          <div className="workContainerWrapper">
            <div className="workTop">
              <div className="folder">
                <FontAwesomeIcon icon={faFolder} />
              </div>
              <div className="projectLinks">
                <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
              </div>
            </div>
            <div className="workContent">
              <h3 className="projectTitle">Watch Time</h3>
              <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
          </div>
          <div className="workBottom">
       
              <p>React Node.js MongoDB</p>
    
          </div>
          </div>
          <div className="workContainerWrapper">
            <div className="workTop">
              <div className="folder">
                <FontAwesomeIcon icon={faFolder} />
              </div>
              <div className="projectLinks">
                <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
              </div>
            </div>
            <div className="workContent">
              <h3 className="projectTitle">Watch Time</h3>
              <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
          </div>
          <div className="workBottom">
       
              <p>React Node.js MongoDB</p>
    
          </div>
          </div>
          <div className="workContainerWrapper">
            <div className="workTop">
              <div className="folder">
                <FontAwesomeIcon icon={faFolder} />
              </div>
              <div className="projectLinks">
                <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
              </div>
            </div>
            <div className="workContent">
              <h3 className="projectTitle">Watch Time</h3>
              <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
          </div>
          <div className="workBottom">
       
              <p>React Node.js MongoDB</p>
    
          </div>
          </div>
          <div className="workContainerWrapper">
            <div className="workTop">
              <div className="folder">
                <FontAwesomeIcon icon={faFolder} />
              </div>
              <div className="projectLinks">
                <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
              </div>
            </div>
            <div className="workContent">
              <h3 className="projectTitle">Watch Time</h3>
              <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
          </div>
          <div className="workBottom">
       
              <p>React Node.js MongoDB</p>
    
          </div>
          </div>
          <div className="workContainerWrapper">
            <div className="workTop">
              <div className="folder">
                <FontAwesomeIcon icon={faFolder} />
              </div>
              <div className="projectLinks">
                <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
              </div>
            </div>
            <div className="workContent">
              <h3 className="projectTitle">Watch Time</h3>
              <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
          </div>
          <div className="workBottom">
       
              <p>React Node.js MongoDB</p>
    
          </div>
          </div>
        </div>
      );
    } else if (selectedButton === 'emailTemplates') {
      return (
        <div className='images'>
          <div className="workContainerWrapper">
            <div className="workTop">
              <div className="folder">
                <FontAwesomeIcon icon={faFolder} />
              </div>
              <div className="projectLinks">
                <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
              </div>
            </div>
            <div className="workContent">
              <h3 className="projectTitle">Watch Time</h3>
              <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
          </div>
          <div className="workBottom">
       
              <p>React Node.js MongoDB</p>
    
          </div>
          </div>

            
          <div className="workContainerWrapper">
            <div className="workTop">
              <div className="folder">
                <FontAwesomeIcon icon={faFolder} />
              </div>
              <div className="projectLinks">
                <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
              </div>
            </div>
            <div className="workContent">
              <h3 className="projectTitle">Watch Time</h3>
              <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
          </div>
          <div className="workBottom">
       
              <p>React Node.js MongoDB</p>
    
          </div>
          </div>
          <div className="workContainerWrapper">
            <div className="workTop">
              <div className="folder">
                <FontAwesomeIcon icon={faFolder} />
              </div>
              <div className="projectLinks">
                <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
              </div>
            </div>
            <div className="workContent">
              <h3 className="projectTitle">Watch Time</h3>
              <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
          </div>
          <div className="workBottom">
       
              <p>React Node.js MongoDB</p>
    
          </div>
          </div>
          <div className="workContainerWrapper">
            <div className="workTop">
              <div className="folder">
                <FontAwesomeIcon icon={faFolder} />
              </div>
              <div className="projectLinks">
                <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
              </div>
            </div>
            <div className="workContent">
              <h3 className="projectTitle">Watch Time</h3>
              <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
          </div>
          <div className="workBottom">
       
              <p>React Node.js MongoDB</p>
    
          </div>
          </div>
          <div className="workContainerWrapper">
            <div className="workTop">
              <div className="folder">
                <FontAwesomeIcon icon={faFolder} />
              </div>
              <div className="projectLinks">
                <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
              </div>
            </div>
            <div className="workContent">
              <h3 className="projectTitle">Watch Time</h3>
              <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
          </div>
          <div className="workBottom">
       
              <p>React Node.js MongoDB</p>
    
          </div>
          </div>
          <div className="workContainerWrapper">
            <div className="workTop">
              <div className="folder">
                <FontAwesomeIcon icon={faFolder} />
              </div>
              <div className="projectLinks">
                <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
              </div>
            </div>
            <div className="workContent">
              <h3 className="projectTitle">Watch Time</h3>
              <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
          </div>
          <div className="workBottom">
       
              <p>React Node.js MongoDB</p>
    
          </div>
          </div>
        </div>
      );
    }
    // Add more conditions for additional buttons if necessary
    return (
      <div className='images'>
      <div className="workContainerWrapper">
        <div className="workTop">
          <div className="folder">
            <FontAwesomeIcon icon={faFolder} />
          </div>
          <div className="projectLinks">
            <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
          </div>
        </div>
        <div className="workContent">
          <h3 className="projectTitle">Watch Time</h3>
          <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
      </div>
      <div className="workBottom">
   
          <p>React Node.js MongoDB</p>

      </div>
      </div>

        
      <div className="workContainerWrapper">
        <div className="workTop">
          <div className="folder">
            <FontAwesomeIcon icon={faFolder} />
          </div>
          <div className="projectLinks">
            <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
          </div>
        </div>
        <div className="workContent">
          <h3 className="projectTitle">Watch Time</h3>
          <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
      </div>
      <div className="workBottom">
   
          <p>React Node.js MongoDB</p>

      </div>
      </div>
      <div className="workContainerWrapper">
        <div className="workTop">
          <div className="folder">
            <FontAwesomeIcon icon={faFolder} />
          </div>
          <div className="projectLinks">
            <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
          </div>
        </div>
        <div className="workContent">
          <h3 className="projectTitle">Watch Time</h3>
          <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
      </div>
      <div className="workBottom">
   
          <p>React Node.js MongoDB</p>

      </div>
      </div>
      <div className="workContainerWrapper">
        <div className="workTop">
          <div className="folder">
            <FontAwesomeIcon icon={faFolder} />
          </div>
          <div className="projectLinks">
            <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
          </div>
        </div>
        <div className="workContent">
          <h3 className="projectTitle">Watch Time</h3>
          <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
      </div>
      <div className="workBottom">
   
          <p>React Node.js MongoDB</p>

      </div>
      </div>
      <div className="workContainerWrapper">
        <div className="workTop">
          <div className="folder">
            <FontAwesomeIcon icon={faFolder} />
          </div>
          <div className="projectLinks">
            <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
          </div>
        </div>
        <div className="workContent">
          <h3 className="projectTitle">Watch Time</h3>
          <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
      </div>
      <div className="workBottom">
   
          <p>React Node.js MongoDB</p>

      </div>
      </div>
      <div className="workContainerWrapper">
        <div className="workTop">
          <div className="folder">
            <FontAwesomeIcon icon={faFolder} />
          </div>
          <div className="projectLinks">
            <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://shop-shop-jl.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
          </div>
        </div>
        <div className="workContent">
          <h3 className="projectTitle">Watch Time</h3>
          <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
      </div>
      <div className="workBottom">
   
          <p>React Node.js MongoDB</p>

      </div>
      </div>
    </div>
    );
  };
  return (
    <div className='work' id='work'>
    <h1 className='workH1'><span className='navSign'>( )</span> My Work</h1>
<div className='buttons'>
    
      <button
        id="webDesigns"
        onClick={() => handleButtonClick('webDesigns')}
        style={{ border: selectedButton === 'webDesigns' ? '2px solid #37B6BD' : 'none' }}
      >
        Web designs
      </button>

         <button
        id="emailTemplates"
        onClick={() => handleButtonClick('emailTemplates')}
        style={{ border: selectedButton === 'emailTemplates' ? '2px solid #37B6BD' : 'none' }}
      >
        Email Templates
      </button>

     

      {/* Add more buttons as needed */}
    
      <button
        id="showAllButton"
        onClick={handleShowAll}
        style={{ border: selectedButton === null ? '2px solid #37B6BD' : 'none' }}
      >
        Show All
      </button>
      
     

    </div> 
    {/* Render the appropriate image set */}
    {renderImages()}
    </div>

  );
}

export default Work;