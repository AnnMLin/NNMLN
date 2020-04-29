import React from 'react'
import { Sidebar, Home, Jellyfish } from './components'

const App = () => {
  return (
    <div id='app-container'>
      <Home />
      <Sidebar />
      {/* <Jellyfish /> */}
    </div>
  )
}

export default App