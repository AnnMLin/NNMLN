import React, {memo, useState, useRef, useEffect} from 'react'
// import {useMeasure, usePrevious} from '../helpers.js'
import {useSpring, animated} from 'react-spring'

const Toggle = memo(({ children, name, open = false, handleClick }) => {
  
  const [isOpen, setOpen] = useState(open)

  const previous = useRef()
  useEffect(() => void (previous.current = isOpen), [isOpen])
  // const previous = !isOpen

  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])
  const [bind, { height: viewHeight }] = [{ ref }, bounds]
  // bind is an obj with only ref in it, just so we can attach ref to current div element
  // After initial render, ref will be bound to current div using {...bind}, ref.current will now be set to current div
  // Then in componentDidMount, ro will observe current div and call callback on it
  // Ro callback will get the contentRect of the current div and set it to bounds on state
  // Finally, extract 'viewHeight' from height from bounds

  const { height } = useSpring({
    from: { height: 0 },
    to: { height: isOpen ? viewHeight : 0 }
  })

  return (
    <div className='big-letters'>
      <div className='big-letters-link' onClick={() => setOpen(!isOpen)} >{name}</div>
      <animated.div className='content' style={{ height: isOpen && previous.current === isOpen ? 'auto' : height }}>
        <div {...bind} children={children} />
      </animated.div>
    </div>
  )
})

export default Toggle