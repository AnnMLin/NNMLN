import React from 'react'
import {ContactForm} from '../components'

const Contact = () => {
  return(
    <div className='content-container'>
      <div className='contact-item'>
        <div className='text'>Leave me a message!</div>
        <div className='space'></div>
        <ContactForm />
        <div className='space'></div>
        <div className='text'>Or contact me at hello@annmlin.com</div>
      </div>
    </div> 
  )
}

export default Contact