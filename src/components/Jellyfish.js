import React from 'react'

const Jellyfish = () => {
  return (
    <div className='aquarium'>
      {/* <div className='j1-item'>
        <img id='j1-trans' src={process.env.PUBLIC_URL + '/images/jelly1-trans.png'} alt=''/>
      </div> */}
      <div className='j2-item'>
        <img id='j2-trans' src={process.env.PUBLIC_URL + '/images/jelly2-trans.png'} alt=''/>
        <img id='j2-fill' src={process.env.PUBLIC_URL + '/images/jelly2-fill.png'} alt=''/>
      </div>
      {/* <div className='j3-item'>
        <img id='j3-trans' src={process.env.PUBLIC_URL + '/images/jelly3-trans.png'} alt=''/>
        <img id='j3-fill' src={process.env.PUBLIC_URL + '/images/jelly3-fill.png'} alt=''/>
      </div> */}
    </div>
  )
}

export default Jellyfish