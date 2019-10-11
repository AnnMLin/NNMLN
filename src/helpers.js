/*from react-spring example*/
import React, { useState, useRef, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export function usePrevious(value) {
  const ref = useRef()
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}

export function useMeasure() {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])
  return [{ ref }, bounds]
  // bind is an obj with only ref in it, just so we can attach ref to current div element
  // After initial render, ref will be bound to current div using {...bind}, ref.current will now be set to current div
  // Then in componentDidMount, ro will observe current div and call callback on it
  // Ro callback will get the contentRect of the current div and set it to bounds on state
  // Finally, extract 'viewHeight' from height from bounds
}