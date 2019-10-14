import React, {memo} from 'react'
import {useMeasure} from '../helpers.js'
import {useSpring, animated} from 'react-spring'

const Toggle = memo(({ children, name, isOpen = false, handleClick }) => {
  
  const [bind, { height: viewHeight}] = useMeasure()
  
  const { height, opacity } = useSpring({
    from: { height: isOpen ? 0 : viewHeight, opacity : isOpen ? 0 : 1 },
    to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0 },
    config: { mass: 1, tension: 280, friction: 120, duration: 1000 }
  })

  return (
    <div id={`${name}`} className='big-letters'>
      <div className='big-letters-link' onClick={(e) => handleClick(e, name)} title={name}>{name}</div>
      <animated.div className='content' style={{ opacity, height }}>
        <div {...bind} children={children} />
      </animated.div>
    </div>
  )
})

export default Toggle