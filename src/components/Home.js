import React, {useState} from 'react'
import { Projects, About, Contact, Toggle } from '../components'
import $ from "jquery"

const Home = () => {
  
  const [show, setShow] = useState('')
  
  const handleClick = (e, id) => {
    show && show === e.target.title ? setShow('') : setShow(e.target.title)
    setTimeout(() => {
      $('html, body').animate({
        scrollTop: $(`#${id}`).offset().top
      }, 1200)
    }, 1100)
  }
  
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
      </div>
    </div>
  )
}

export default Home