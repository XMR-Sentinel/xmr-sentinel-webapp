import React from "react"
import {connect} from "react-redux"

/**
 * Import containers and components
 */

class Index extends React.Component {

  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <UploadForm />
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
