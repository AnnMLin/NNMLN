import React, {useState, useEffect} from 'react'
import { Projects, About, Contact, Toggle } from '../components'
import $ from "jquery"

const Home = () => {
  
  const [show, setShow] = useState('')
  
  const handleClick = (e, id) => {
    show && show === e.target.title ? setShow('') : setShow(e.target.title)

    // setTimeout(() => {
    //   $('html, #home-page').animate({
    //     scrollTop: $(`#${id}`).offset().top
    //     // scrollTop: 50
    //   }, 1200)
    // }, 1100)
  }

  useEffect(() => {
    setTimeout(() => {
      show ? 
      $('html, #home-page').animate({
        scrollTop: $(`#${show}`).offset().top
      }, 1200) :
      $('html, #home-page').animate({
        scrollTop: $(`#PROJECTS`).offset().top
      }, 1200)
    }, 1100)
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
      </div>
    </div>
  )
}

export default Home