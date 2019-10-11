import React, {memo, useState, useRef, useEffect} from 'react'
import { Projects, About, Contact, Toggle } from '../components'

const Home = () => {
  
  const [show, setShow] = useState('')

  const handleClick = e => {
    console.log(e.target.title)
    show === e.target.title ? setShow('') : setShow(e.target.title)
  }
  
  return(
    <div id='home-page'>
      <div>
        <Toggle name='PROJECTS' handleClick={handleClick}>
          <Projects />
        </Toggle>
        <Toggle name='ABOUT' handleClick={handleClick}>
          <About />
        </Toggle>
        <Toggle name='CONTACT' handleClick={handleClick}>
          <Contact />
        </Toggle>
      </div>
    </div>
  )
}

export default Home

        /* <div className='big-letters'>
          <div className='big-letters-link' onClick={handleClick} title='projects'>PROJECTS</div>
        </div>
        <div className={show === 'projects' ? 'section-expand' : 'section-collapse'}>
          <Projects />
        </div>
        <div className='big-letters'>
          <div className='big-letters-link' onClick={handleClick} title='about'>ABOUT</div>
        </div>
        <div className={show === 'about' ? 'section-expand' : 'section-collapse'}>
          <About />
        </div>
        <div className='big-letters'>
          <div className='big-letters-link' onClick={handleClick} title='contact'>CONTACT</div>
        </div>
        <div className={show === 'contact' ? 'section-expand' : 'section-collapse'}>
          <Contact />
        </div> */