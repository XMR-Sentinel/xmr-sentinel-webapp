import React from "react"
import {connect} from "react-redux"

/**
 * Import containers and components
 */
import Summary from '../containers/Summary.js'
import MainTable from '../containers/MainTable.js'

class Index extends React.Component {

  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <Summary />
        <MainTable />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Index)
