import React from 'react'
import { ProjectItem } from '../components'

const Projects = () => {
  const projects = [ 
    { title: 'NNMLN',
      image: process.env.PUBLIC_URL + '/images/nnmln-bw.png',
      desc: `A single page app using React’s component architecture, focused on front end effects and animation.`,
      tech: ['React', 'React Spring', 'Javascript', 'jQuery', 'NodeJS', 'HTML', 'CSS'],
      gitHubLink: 'https://github.com/AnnMLin/nnmln'
    },
    { title: 'Build-A-Mate',
      image: process.env.PUBLIC_URL + '/images/bam-bw.png',
      desc: `An online dating app that presents profiles and candidates by imagery. Utilizing a drag-and-drop interface to select ideal facial features, users can find their match in the database with machine learning libraries that sort results based on the desired features.`,
      tech: ['HTML', 'CSS', 'Javascript', 'NodeJS', 'React', 'Redux', 'Express', 'Sequelize', 'PostgreSQL', 'React DnD', 'Face-api.js', 'MaterialUI'],
      gitHubLink: 'https://github.com/fsa-capstone-team/build-a-mate'
    },
    { title: 'Present and Absent of the Body',
      image: process.env.PUBLIC_URL + '/images/robot-bw.png',
      desc: `A robot with bio-mimicry components that is capable of sensing a user’s movements, synchronously imitate, and live stream captured visions to goggles utilizing Arduino board, stepper motors, micro servo, and IMU 6DOF sensors.`,
      tech: ['Processing 2.0', 'Java', 'Arduino', 'C++', 'LabVIEW', 'Rhino 3D', 'AutoCAD', 'IMU 6DOF', 'Laser Cut', 'CNC', '3d Print'],
      youtube: 'https://www.youtube.com/watch?v=pl25EXSgB4E'
    },
    { title: 'Sol_ID',
      image: process.env.PUBLIC_URL + '/images/solid-bw.png',
      desc: `Solution for the future of sustainable social housing in the tropics. Proposal for Solar Decathlon Latin America and Caribbean.`,
      tech: ['Processing 2.0', 'Java', 'Grasshopper', 'Rhino 3D','AutoCAD'],
      gitHubLink: 'https://github.com/AnnMLin/sol_id'
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