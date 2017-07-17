import React from "react"

const Root = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-10 col-xs-offset-1">
        {props.children}
      </div>
    </div>
  </div>
)

export default Root
