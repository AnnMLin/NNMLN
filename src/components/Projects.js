import React from 'react'

const Projects = () => {
  return(
    <div className='content-container'>
      <div className='content'>
        <div className='project-item'>
          <div className='cover-photo-item'>
            <img className='cover-photo' src='./images/placeholder.jpg' alt='Build-A-Mate project'/>
          </div>
          <div className='text-field'>
            {/* <div className='title'>Build-A-Mate</div> */}
            <div className='desc'>
            An online dating application that is here not only to revolutionize online dating but also make it fun. It allows a user to sign up, take a selfie and design an ideal type of appearance they are looking for. Once completed, the user will be able to browse through profiles that match the user's designed type. Using machine learning libraries and our interactive drag and drop interface, we help a user find their perfect match by letting them build their ideal face. 
            </div>
            <div className='tech'>
              <div className='tech-item'>
                <div className='tech-keyword'>HTML</div>
              </div>
              <div className='tech-item'>
                <div className='tech-keyword'>CSS</div>
              </div>
              <div className='tech-item'>
                <div className='tech-keyword'>Javascript</div>
              </div>
              <div className='tech-item'>
                <div className='tech-keyword'>Node.js</div>
              </div>
              <div className='tech-item'>
                <div className='tech-keyword'>React</div>
              </div>
              <div className='tech-item'>
                <div className='tech-keyword'>Redux</div>
              </div>
              <div className='tech-item'>
                <div className='tech-keyword'>Express</div>
              </div>
              <div className='tech-item'>
                <div className='tech-keyword'>Sequelize</div>
              </div>
              <div className='tech-item'>
                <div className='tech-keyword'>React DnD</div>
              </div>
              <div className='tech-item'>
                <div className='tech-keyword'>MaterialUI</div>
              </div>
              <div className='tech-item'>
                <div className='tech-keyword'>Face-api.js</div>
              </div>
            </div>
            <div className='link'> 
              <img className='quick-link-icon' src="./icons/github-5.png" alt='link to Github'/>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Projects