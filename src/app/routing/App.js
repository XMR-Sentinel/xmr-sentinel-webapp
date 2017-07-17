import React from 'react'

import {
  HashRouter as Router,
  Route
} from 'react-router-dom'


/**
 * Root component to create navigation
 */
import Root from './Root'

/**
 * Imports for Main container for each page, that will go into the Root
 * component as component prop to the Route componet.
 *
 * @example
 * import Home from './Home'
 *  class App extends React.Component {
 *    render () {
 *      return (
 *        <Router>
 *          <Root >
 *            <Route exact path="/" component={Home}></Route>
 *            <Route path="/userList" component={Home}></Route>
 *          </Root>
 *        </Router>)
 *    }
 *  }
 */

/**
 * Importing main scenes for routing
 */

import Summary from '../scenes/Index.js'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Root >
          <Route exact path="/" component={Summary}></Route>
          <Route path="/summary" component={Summary}></Route>
        </Root>
      </Router>
    )
  }
}

export default App
