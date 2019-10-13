import React, {useState, useRef, useEffect} from 'react'
import { Projects, About, Contact, Toggle } from '../components'
import { scrollToRef } from '../helpers.js'

const Home = () => {
  
  const [show, setShow] = useState('')
  const projects = useRef(null)
  const about = useRef(null)
  const contact = useRef(null)
  
  const handleClick = e => {
    show && show === e.target.title ? setShow('') : setShow(e.target.title)
  }

  // useEffect(() => {
  //   console.log('SHOW: ', show)
  //   const scrolltosection = () => {
  //     if (show) {
  //       if(show === 'PROJECTS') scrollToRef(projects)
  //       if(show === 'ABOUT') scrollToRef(about)
  //       if(show === 'CONTACT') scrollToRef(contact)
  //     }
  //   }
  //   window.setTimeout(scrolltosection, 400)
  // }, [show])
  
  return(
    <div id='home-page'>
      <div>
        <Toggle name='PROJECTS' r={projects} handleClick={handleClick} isOpen={show === 'PROJECTS' ? true : false}>
          <Projects />
        </Toggle>
        <Toggle name='ABOUT' r={about} handleClick={handleClick} isOpen={show === 'ABOUT' ? true : false}>
          <About />
        </Toggle>
        <Toggle name='CONTACT' r={contact} handleClick={handleClick} isOpen={show === 'CONTACT' ? true : false}>
          <Contact />
        </Toggle>
      </div>
    </div>
  )
}

export default Home