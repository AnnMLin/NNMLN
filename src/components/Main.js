import React from 'react'
import { Navbar, Projects, About, Contact } from '../components'
import { Switch, Route } from 'react-router-dom'

const Main = () => {
  return(
    <div>
      <Navbar />
      <div id='main'>
        <Switch>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Main