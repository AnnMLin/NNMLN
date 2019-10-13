import React, {memo} from 'react'
import {useMeasure, usePrevious} from '../helpers.js'
import {useSpring, animated} from 'react-spring'

const Toggle = memo(({ children, name, isOpen = false, handleClick, r }) => {
  
  const [bind, { height: viewHeight}] = useMeasure()
  
  const { height, opacity } = useSpring({
    from: { height: isOpen ? 0 : viewHeight, opacity : isOpen ? 0 : 1 },
    to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0 }
  })

  return (
    <div id={`${name}`} ref={r} className='big-letters'>
      <a href={`#${name}`} className='big-letters-link' onClick={handleClick} title={name}>{name}</a>
      <animated.div className='content' style={{ opacity, height }}>
        <div {...bind} children={children} />
      </animated.div>
    </div>
  )
})

export default Toggle