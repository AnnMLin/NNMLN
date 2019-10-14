import React, {useState, useRef, useEffect} from 'react'
import { Projects, About, Contact, Toggle } from '../components'
import $ from "jquery"

const Home = () => {
  
  const [show, setShow] = useState('')
  
  const handleClick = (e, id) => {
    show && show === e.target.title ? setShow('') : setShow(e.target.title)
    const target = e.target
    setTimeout(() => {
      // window.location.assign(`#${id}`)
      // document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'start'})
      $('html, body').animate({
        scrollTop: $(`#${id}`).offset().top
      }, 1800, () => {
        // const currTab = $(`#${id}`)
        // currTab.focus()
        // if (currTab.is(":focus")) { // Checking if the target was focused
        //   return false;
        // } else {
        //   currTab.attr('tabindex','-1'); // Adding tabindex for elements not focusable
        //   currTab.focus(); // Set focus again
        // };

      })
    }, 400)
  }
  
  return(
    <div id='home-page'>
      <div>
        <Toggle name='PROJECTS' handleClick={handleClick} isOpen={show === 'PROJECTS' ? true : false}>
          <Projects />
        </Toggle>
        <Toggle name='ABOUT' handleClick={handleClick} isOpen={show === 'ABOUT' ? true : false}>
          <About />
        </Toggle>
        <Toggle name='CONTACT' handleClick={handleClick} isOpen={show === 'CONTACT' ? true : false}>
          <Contact />
        </Toggle>
      </div>
    </div>
  )
}

export default Home