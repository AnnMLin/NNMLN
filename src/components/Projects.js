import React from 'react'
import { ProjectItem } from '../components'

const Projects = () => {
  const projects = [ 
    { title: 'myPortfolio',
      image: './images/circle-place-holder.png',
      desc: `Personal portfolio site. Built with React frontend.`,
      tech: ['HTML', 'CSS', 'Javascript', 'jQuery', 'NodeJS', 'React', 'react-spring', 'Photoshop'],
      gitHubLink: 'https://github.com/AnnMLin/portfolio',
      link: ''
    },
    { title: 'Build-A-Mate',
      image: './images/circle-place-holder.png',
      desc: `An online dating application that is here not only to revolutionize online dating but also make it fun. Using machine learning libraries and our interactive drag and drop interface, we help a user find their perfect match by letting them build their ideal face.`,
      tech: ['HTML', 'CSS', 'Javascript', 'NodeJS', 'React', 'Redux', 'Express', 'Sequelize', 'React DnD', 'Face-api.js', 'MaterialUI', 'Photoshop'],
      gitHubLink: 'https://github.com/fsa-capstone-team/build-a-mate'
    },
    { title: 'Present and Absent of the Body',
      image: './images/circle-place-holder.png',
      desc: `A water-bottle sized installation with bio-mimic components that imitates a user's head movement. With researches in human body neck movement, I designed a robotic neck using the technology of 3d print, laser cut, CNC, IMU sensors and stepper motors. The robot is capable to sense a user's head movements, synchronously follow, capture visions and project back to user's eye goggles.`,
      tech: ['Processing', 'National Instrument', 'Rhinoceros', 'AutoCAD', 'Arduino', 'IMU 6DOF', 'Laser Cut', 'CNC', '3d Print'],
      youtube: 'https://www.youtube.com/watch?v=pl25EXSgB4E'
    }
  ]

  return(
    <div className='content-container'>
      <div className='projects-container'>
        {projects.map(item => (
          <div key={item.title}>
            <ProjectItem {...item} />
          </div>
        ))}
        <div className='auto-fill'></div>
        <div className='auto-fill'></div>
        <div className='auto-fill'></div>
        <div className='auto-fill'></div>
      </div>
    </div> 
  )
}

export default Projects