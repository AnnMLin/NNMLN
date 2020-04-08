import React, {memo} from 'react'
import {useMeasure} from '../helpers.js'
import {useSpring, animated} from 'react-spring'
import classNames from 'classnames'

const Toggle = memo(({ children, name, isOpen/* = false*/, handleClick }) => {
  
  const [bind, { height: viewHeight}] = useMeasure()
  
  const { height, opacity } = useSpring({
    from: { height: isOpen ? 0 : viewHeight, opacity : isOpen ? 0 : .99 },
    to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? .99 : 0 },
    config: { mass: 1, tension: 280, friction: 120, duration: 1000 }
  })

  return (
    <div id={`${name}`} className='big-letters'>
      <div className={classNames('big-letters-link', {isOpen})}>
        <div className='big-letters-container'>
          <span className='big-letters-inner-text' onClick={(e) => handleClick(e, name)} title={name}>{name}</span>
        </div>
      </div>
      <animated.div className='animated-div' style={{ opacity, height }}>
        {/* <div {...bind} children={children} /> */}
        <div {...bind}>
          {children}
        </div>
      </animated.div>
    </div>
  )
})

export default Toggle