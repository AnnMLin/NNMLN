import React from 'react'
import {Sidebar, Main, Navbar} from './components'

const App = () => {
  return (
    <div id='app-container'>
      <Sidebar />
      <Navbar />
      <Main />
    </div>
  )
}

export default App