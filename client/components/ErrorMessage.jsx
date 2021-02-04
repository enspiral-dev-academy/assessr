import React from "react"
import { connect } from "react-redux"

function ErrorMessage(props) {
  return props.error ? (
    <div style={{ margin: "100px", textAlign: "center", color: "red" }}>
      <h1>
        <b>{props.error}</b>
      </h1>
    </div>
  ) : null
}

function mapStateToProps(state) {
  return {
    error: state.error,
  }
}

export default connect(mapStateToProps)(ErrorMessage)
