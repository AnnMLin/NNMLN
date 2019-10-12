import React, {memo} from 'react'
import {useMeasure, usePrevious} from '../helpers.js'
import {useSpring, animated} from 'react-spring'

const Toggle = memo(({ children, name, isOpen = false, handleClick, r }) => {
  const previous = usePrevious(isOpen)
  const [bind, { height: viewHeight}] = useMeasure()
  
  const { height, opacity } = useSpring({
    from: { height: 0, opacity : 0 },
    to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0 }
  })

  return (
    <div ref={r} className='big-letters'>
      <div className='big-letters-link' onClick={handleClick} title={name}>{name}</div>
      <animated.div className='content' style={{ opacity, height: isOpen && previous.current === isOpen ? 'auto' : height }}>
        <div {...bind} children={children} />
      </animated.div>
    </div>
  )
})

export default Toggle