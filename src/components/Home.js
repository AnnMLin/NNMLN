import React, {useState, useRef, useEffect} from 'react'
import { Projects, About, Contact, Toggle } from '../components'

const Home = () => {
  
  const [show, setShow] = useState('')
  
  const handleClick = (e, id) => {
    show && show === e.target.title ? setShow('') : setShow(e.target.title)
    const target = e.target
    setTimeout(() => {
      // window.location.assign(`#${id}`)
      target.scrollIntoView({behavior: 'smooth', block: 'start'})
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