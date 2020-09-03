import React, {useState, useEffect} from 'react'
import { Projects, About, Contact, Toggle } from '../components'
import $ from "jquery"

const Home = () => {
  
  const [show, setShow] = useState('')
  
  const handleClick = (e) => {
    show && show === e.target.title ? setShow('') : setShow(e.target.title)
  }

  //BUG HERE: [on mobile] when clicked on toggle with a minus top value, scrollTop breaks
  useEffect(() => {
    setTimeout(() => {
      show ? 
      $('html, #home-page').animate({
        scrollTop: $(`#${show}`).offset().top
      }, 1200) :
      $('html, #home-page').animate({
        scrollTop: $(`#PROJECTS`).offset().top
      }, 1200)
    }, 1500)
  })
  
  return(
    <div id='home-page'>
      <div>
        <Toggle name='PROJECTS' handleClick={handleClick} isOpen={show === 'PROJECTS'}>
          <Projects />
        </Toggle>
        <Toggle name='ABOUT' handleClick={handleClick} isOpen={show === 'ABOUT'}>
          <About />
        </Toggle>
        <Toggle name='CONTACT' handleClick={handleClick} isOpen={show === 'CONTACT'}>
          <Contact />
        </Toggle>
        <div id='logo-container' className='fade-in-out'>
          {/* <img id='logo' src={process.env.PUBLIC_URL +  '/images/jelly.png'} alt=''/> */}
          <div className='logo-fill'></div>
        </div>
      </div>
    </div>
  )
}

export default Home