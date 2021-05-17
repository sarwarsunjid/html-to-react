import React from 'react'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'

import {Switch, Route} from 'react-router-dom';
const App = () => {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/service' component={Service} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
     
    </>
  )
}

export default App;