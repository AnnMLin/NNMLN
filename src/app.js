import React from 'react'
import { Sidebar, Home, Main } from './components'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div id='app-container'>
      <Sidebar />
      <Switch>
        <Route exact path='/(projects|about|contact)/'>
          <Main />
        </Route>
        <Route path=''>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App