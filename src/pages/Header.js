import React from 'react'
import { Link } from 'react-scroll'
import '../style/Header.css'

const navLink = [
  {to:'/', text: 'Home', smooth: 'true', duration: 500},
  {to:'about', text: 'About Me', smooth: 'true', duration: 500},
  {to:'projects', text: 'Projects', smooth: 'true', duration: 500},
  {to:'education', text: 'Education', smooth: 'true', duration: 500},
  {to:'contact', text: 'Contact', smooth: 'true', duration: 500}
]

function Header() {
  return (
    <header className='header-container'>
    <nav>
      <ul>
        {navLink.map((nav) => (
          <li key={nav.to}>
            <Link to={nav.to} smooth = {nav.smooth} duration={nav.duration}>{nav.text}</Link>
          </li>
        ))}
       {/*  <li>
          <Link to="/" activeClass='active' smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="about" activeClass='active' smooth={true} duration={500}>About Me</Link>
        </li>
        <li>
          <Link to="projects" activeClass='active' smooth={true} duration={500}>Projects</Link>
        </li>
        <li>
          <Link to="education" activeClass='active' smooth={true} duration={500}>Education</Link>
        </li>
        <li>
          <Link to="contact" activeClass='active' smooth={true} duration={500}>Contact</Link>
        </li> */}
      </ul>
    </nav>
  </header>
  )
}

export default Header