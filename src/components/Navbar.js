import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <div id='nav-bar'>
      <div id='nav-bar-content'>
        <div class='nav-wings'>
          <Link class='nav-item' to='/about'>ABOUT</Link>
          <Link class='nav-item' to='/projects'>PROJECTS</Link>
        </div>
        <Link id='home' to='/'>ANN LIN</Link>
        <div class='nav-wings'>
          <div class='nav-item'>RESUME</div>
          <Link class='nav-item' to='/contact'>CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar