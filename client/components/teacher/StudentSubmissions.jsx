import React from "react"
import { connect } from "react-redux"

import ReviewSubmission from "./ReviewSubmission"

class StudentSubmissions extends React.Component {
  state = {
    showSubs: false,
  }

  toggleList = () => {
    this.setState({
      showSubs: !this.state.showSubs,
    })
  }

  renderSubmissionList = student => {
    return (
      <ul>
        {student.submissions.map((sub, i) => (
          <ReviewSubmission submission={sub} key={i} />
        ))}
      </ul>
    )
  }

  render = () => {
    const { student } = this.props
    return (
      <>
        <p onClick={this.toggleList}>{student.actual_name}</p>
        {this.state.showSubs && this.renderSubmissionList(student)}
      </>
    )
  }
}

export default connect()(StudentSubmissions)
