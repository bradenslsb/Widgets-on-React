import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"

import Password from "./components/password"
import AddSubtract from "./components/addSubtract"
import Time from "./components/timeStamp"
import ColorChanger from "./components/colorChanger"
import GrowShrink from "./components/growShrink"
import HideMe from "./components/hideMe"
import ChangePlacement from "./components/leftCenterRight"
import Toggle from "./components/Toggle"

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to="/password">Password Switcher</Link>
          <Link to="/add-subtract">Add and Subtract</Link>
          <Link to="/time">Time-Stamp</Link>
          <Link to="/color-changer">Color Changer</Link>
          <Link to="/grow-shrink">Grow and Shrink</Link>
          <Link to="/hide-me">Hide Me</Link>
          <Link to="/left-center-right">Left Center Right</Link>
          <Link to="/toggle">Toggle</Link>
          <Switch>
            <Route path="/password" component={Password} />
            <Route path="/add-subtract" component={AddSubtract} />
            <Route path="/time" component={Time} />
            <Route path="/color-changer" component={ColorChanger} />
            <Route path="/grow-shrink" component={GrowShrink} />
            <Route path="/hide-me" component={HideMe} />
            <Route path="/left-center-right" component={ChangePlacement} />
            <Route path="/toggle" component={Toggle} />
          </Switch>
        </Router>
      </div>
    )
  }
}

