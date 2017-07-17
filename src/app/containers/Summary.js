/**
 * Packages import
 */
import React from 'react'
import request from 'superagent'
import { connect } from 'react-redux'


import TimeTotal from '../components/TimeTotal.js'

class Summary extends React.Component {

  constructor() {
    super()
    this.state = {
      total: {
        ['2.5s']: 12313123,
        ['60s']: 0,
        ['15m']: 0
      }
    }
  }

  render() {
    return(
      <div className="container navbar navbar-default">
        <ul className="list-inline text-center">
          <li><TimeTotal name="2.5s" value={12.3} /></li>
          <li>{'|'}</li>
          <li><TimeTotal name="60s"  value={13.3} /></li>
          <li>{'|'}</li>
          <li><TimeTotal name="15m"  value={44.3} /></li>
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  console.log(state)
  return {

  }
}

const mapDispatchToProps = (dispatch) => { // Subscribes, I guess
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary)
