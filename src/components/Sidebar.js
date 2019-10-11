import React from 'react'

const Sidebar = () => {
  return(
    <div id='side-bar'>
      <div id='side-bar-content'>
        <img className='quick-link-icon' src="./icons/github-5.png" alt='link to Github'/>
        <img className='quick-link-icon' src="./icons/linkedin-4.png" alt='link to Linkedin'/>
        <img className='quick-link-icon' src="./icons/download-2.png" alt='link to Download'/>
        <img className='quick-link-icon' src="./icons/email-1.png" alt='link to Email'/>
      </div>
    </div>
  )
}

export default Sidebar