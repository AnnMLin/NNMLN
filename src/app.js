import React from 'react'
import { Sidebar, Home, Jellyfish } from './components'

const App = () => {
  return (
    <div id='app-container'>
      <Sidebar />
      <Home />
      {/* <Jellyfish /> */}
    </div>
  )
}

export default App