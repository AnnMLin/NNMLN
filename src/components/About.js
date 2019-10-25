import React from 'react'

const About = () => {
  const image = '/images/placeholder.jpg'
  return(
    <div className='content'>
      <div className='about-item'>
        <div className='headshot-item'>
          <img className='headshot' src={image} alt=''/>
        </div>
        <div className='info-field'>
          <p>Hi! I'm Ann</p>
          <p>Full-stack software engineer with backgrounds in architectural design, parametric design, and dance.</p>
          <p>New York City via Munich, London, Taiwan, and Oklahoma.</p>
          <p>I work at the intersection of science, technology, and design. Experimental with lots of interests. Always looking for inspirations.</p>
          <p>Outside of coding, I make line drawings, teach adult dance classes, perform, and was named finalists in multiple dance competitions in the US and internationally. I've built a single family housing prototype with my team in Colombia, South America, was part of an exhibition at the Swiss Pavilion at Venice Biennale 2014, and performed at Pole Theatre Iceland.</p>
        </div>
      </div>
    </div> 
  )
}

export default About