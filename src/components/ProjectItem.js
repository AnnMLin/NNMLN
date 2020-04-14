import React from 'react'

const ProjectItem = ({ title, image, desc, tech = [], gitHubLink, link, youtube }) => {
  return (
    <div className='project-card'>
      <div className='cover-photo-item'>
        <img className='cover-photo' src={image} alt={title}/>
      </div>
      <div className='text-field'>
        {/* <div className='title'>{title}</div> */}
        <div className='desc'>{desc}</div>
        <div className='tech'>
          {tech.map(techKey => (
            <div key={techKey} className='tech-item'>
              <div className='tech-keyword'>{techKey}</div>
            </div>
          ))}
        </div>
        <div className='link'> 
          {gitHubLink ? 
          <div className='link-item'>
            <a target='_blank' href={gitHubLink}>
              <img className='link-icon' src={process.env.PUBLIC_URL + "/icons/github.png"} alt='link to Github'/>
            </a>
          </div> : null }
          {youtube ?
          <div className='link-item'>
            <a target='_blank' href={youtube}>
              <img className='link-icon' src={process.env.PUBLIC_URL + "/icons/video.png"} alt='link to Youtube'/>
            </a>
          </div> : null }
          {link ?
          <div className='link-item'>
            <a target='_blank' href={link}>
              <img className='link-icon' src={process.env.PUBLIC_URL + "/icons/home.png"} alt='link to Website'/>
            </a>
          </div> : null }
        </div>
      </div>
    </div>
  )
}

export default ProjectItem