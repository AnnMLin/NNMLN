import React from 'react'

const About = () => {
  const image = process.env.PUBLIC_URL +  '/images/head.png'
  return(
    <div className='content-container'>
      <div className='about-item'>
        {/* <div className='headshot-item'> */}
          {/* <img className='headshot' src={image} alt=''/> */}
        {/* </div> */}
        <div className='info-field'>
          <div id='headline'>A creative problem solver working at the intersection of technology and art.</div>
          <div>
            <p>Hi, I'm Ann.</p>
            <p>Before becoming a full stack engineer, I was a junior architect, a parametric designer, and a visual programmer. I used to solve problems in architecture, now I solve problems in web development.</p>
            {/* <p>New York City via London, Taiwan, and Oklahoma.</p> */}
            {/* <p>Things I'm good at:<br/>
            Cross-disciplinary teamwork. Visual/verbal communication. Critical thinking. Drawing. Dancing.</p>
            <p>Things I'm not good at:<br/>
            Baking.</p> */}
            <p>Open to any and all projects and collaborations.</p>
            <p>Connect with me at <a href='https://www.linkedin.com/in/ann-m-lin' target='_blank'>Linkedin</a>.</p>
            <p>Download my <a href={process.env.PUBLIC_URL + "/docs/AnnLinResume.pdf"} target='_blank'>resume</a>.</p>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default About