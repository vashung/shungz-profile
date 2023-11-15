// MobileHeader.js

import React, { useState } from 'react';
import '../style/MobileHeader.css'; // Create a corresponding CSS file for styling
import { setActiveLink } from 'react-scroll/modules/mixins/scroller';


const navLink = [
  {id:0,to:'home', text: 'Home', smooth: 'true', duration: 500},
  {id:1,to:'about', text: 'About Me', smooth: 'true', duration: 500},
  {id:2,to:'projects', text: 'Projects', smooth: 'true', duration: 500},
  {id:3, to:'education', text: 'Education', smooth: 'true', duration: 500},
  {id:4, to:'contact', text: 'Contact', smooth: 'true', duration: 500}
]



const MobileHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () =>{
    setMenuOpen(false);
    setActive(true)
  }


  function handleClick(e, id) {
    setActive(id)
    closeMenu()
  }

  return (
    <div className={`mobile-header ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className="mobile-menu">
        <ul>
          {navLink.map((link) =>(
            <li key={link.to}>
                <a
                  href={"#" + link.to}
                  className={link.id === active ? "selected" : ""}
                  onClick={(e) => handleClick(e, link.id)}
                >{link.text} </a>
            </li>
          ))}
        {/*   <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About Me</a></li>
          <li><a href="#projects"onClick={closeMenu} >Projects</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li> */}
        </ul>
      </nav>
    </div>
  );
};

export default MobileHeader;
