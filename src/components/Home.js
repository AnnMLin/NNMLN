import React, {memo, useState} from 'react'
import { Projects, About, Contact } from '../components'
import {useSpring, animated} from 'react-spring'
import {useMeasure, usePrevious} from '../helpers.js'

const Home = () => {
  
  const [show, setShow] = useState('')
  const [bind, {height}] = useMeasure()
  const props = useSpring({height})

  const handleClick = e => {
    console.log(e.target.title)
    show === e.target.title ? setShow('') : setShow(e.target.title)
  }
  
  console.log('PROPS: ', props.height)
  return(
    <div id='home-page'>
      <div>
        <div className='big-letters'>
          <div className='big-letters-link' onClick={handleClick} title='projects'>PROJECTS</div>
        </div>
        <animated.div style={{overflow: 'hidden', ...props}}>
          <div {...bind}>
            <Projects />
          </div>
        </animated.div>
        {/* <div className={show === 'projects' ? 'section-expand' : 'section-collapse'}>
          <Projects />
        </div> */}
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
        </div>
      </div>
    </div>
  )
}

export default Home