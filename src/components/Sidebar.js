import React from 'react'

const Sidebar = () => {
  return(
    <div id='side-bar'>
      <div id='side-bar-content'>
        <a className='quick-link' href='https://github.com/AnnMLin' target='_blank'>
          <img className='quick-link-icon' src={process.env.PUBLIC_URL + "/icons/github-hollow.png"} alt='link to Github'/>
        </a>
        <a className='quick-link' href='https://www.linkedin.com/in/ann-m-lin' target='_blank'>
          <img className='quick-link-icon' src={process.env.PUBLIC_URL + "/icons/profile.png"} alt='link to Linkedin'/>
        </a>
        <a className='quick-link' href={process.env.PUBLIC_URL + "/docs/AnnLinResume.pdf"} target='_blank'>
          <img className='quick-link-icon' src={process.env.PUBLIC_URL + "/icons/download.png"} alt='link to Resume'/>
        </a>
        <a className='quick-link' href='mailto:hello@annmlin.com'>
          <img className='quick-link-icon' src={process.env.PUBLIC_URL + "/icons/email.png"} alt='link to Email'/>
        </a>
      </div>
    </div>
  )
}

export default Sidebar