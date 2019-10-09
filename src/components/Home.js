import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <div id='home-page'>
      <div>
        <div className='big-letters'>
          <Link className='big-letters-link' to='/projects'>PROJECTS</Link>
        </div>
        <div className='big-letters'>
          <Link className='big-letters-link' to='/about'>ABOUT</Link>
        </div>
        <div className='big-letters'>
          <Link className='big-letters-link' to='/contact'>CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default Home