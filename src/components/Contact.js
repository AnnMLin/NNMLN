import React from 'react'
import {ContactForm} from '../components'

const Contact = () => {
  return(
    <div className='content-container'>
      <div className='contact-item'>
        <div className='text'>Feel free to say hi!</div>
        <div className='space'></div>
        <ContactForm />
        <div className='space'></div>
        <div className='text'>Or contact me at <a href='mailto:hello@annmlin.com'>hello@annmlin.com</a></div>
      </div>
    </div> 
  )
}

export default Contact