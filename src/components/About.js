import React from 'react'

const About = () => {
  const image = '/images/placeholder.jpg'
  return(
    <div className='content'>
      <div>
        <div className='cover-photo-item'>
          <img className='cover-photo' src={image} alt=''/>
        </div>
        <p>Hi! I'm Ann, a full-stack software developer based in New York.</p>

        <p>My coding journey started when I was studying</p>

        <p>I have a background in Architecture. Because of the nature of the industry I travel a lot. I've lived in I like to make line drawings when I travel.</p>

        <p>I have another background in dance. When I'm not coding I dance and vice versa. I am a licensed instructor and a active competitor. I teach, perform and compete in the US and internationally.</p>
      </div>
    </div> 
  )
}

export default About