import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <div id='home-page'>
      <div id='welcome'>
        <div className='big-letters'>
          <Link to='/projects'>PROJECTS</Link>
        </div>
        <div className='big-letters'>ABOUT</div>
        <div className='big-letters'>CONTACT</div>
      </div>
    </div>
  )
}

export default Home