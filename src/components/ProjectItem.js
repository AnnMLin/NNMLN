import React from 'react'

const ProjectItem = ({ title, image, desc, tech = [], gitHubLink, link, youtube }) => {
  return (
    <div className='project-item'>
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
            <a href={gitHubLink}>
              <img className='link-icon' src="./icons/github-5.png" alt='link to Github'/>
            </a>
          </div> : null }
          {youtube ?
          <div className='link-item'>
            <a href={youtube}>
              <img className='link-icon' src="./icons/youtube-icon.png" alt='link to Youtube'/>
            </a>
          </div> : null }
          {link ?
          <div className='link-item'>
            <a href={link}>
              <img className='link-icon' src="./icons/web-5.png" alt='link to Website'/>
            </a>
          </div> : null }
        </div>
      </div>
    </div>
  )
}

export default ProjectItem