import React from "react"
import { connect } from "react-redux"

import { submitEvidence } from "../../actions/assessments"
import Evidence from "./Evidence"

class AssessmentItem extends React.Component {
  state = {
    showMore: false,
    evidence: "",
  }

  findRecord = assessments => {
    const code = this.props.assessment.code
    const match = assessments.find(assmt => {
      return assmt.code == code
    })
    return match
  }

  findRecordId = () => {
    const match = this.findRecord(this.props.assessments)
    return match ? match.assessment_record : null
  }

  findStatus = assessments => {
    const match = this.findRecord(assessments)
    return match ? match.status : "not yet"
  }

  findEvidence = assessments => {
    const code = this.props.assessment.code
    let match = assessments.find(assmt => {
      return assmt.code == code
    })
    // TODO: This hack will be fixed when we move
    // to TypeScript and refactor the domain model
    return !!match ? match.evidence || match.submissions : []
  }

  getColour = status => {
    switch (status) {
      case "complete":
        return "green"
      case "pending review":
        return "yellow"
      case "in progress":
        return "orange"
      default:
        return "notyet"
    }
  }

  toggleMore = () => {
    this.setState({
      showMore: !this.state.showMore,
    })
  }

  handleTyping = evt => {
    this.setState({
      evidence: evt.target.value,
    })
  }

  submit = evt => {
    evt.preventDefault()
    this.props.dispatch(submitEvidence(this.props.assessment.code, this.state.evidence))
    this.setState({
      evidence: "",
    })
  }

  renderSubmit = () => {
    return (
      <form className="assmt-form" onSubmit={this.submit}>
        <input type="text" onChange={this.handleTyping} value={this.state.evidence} />
        <button onClick={this.submit}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>
    )
  }

  renderMore = (status, evidence) => {
    return (
      <React.Fragment>
        <h4>{status}</h4>
        <p>Evidence Submitted:</p>
        <ul>
          {evidence.map((e, i) => <Evidence key={i} e={e} i={i} elen={evidence.length}/>)}
        </ul>
        {status != "complete" && this.renderSubmit()}
      </React.Fragment>
    )
  }

  render = () => {
    const assmt = this.props.assessment
    const status = this.findStatus(this.props.completed)
    const evidence = this.findEvidence(this.props.completed)

    return (
      <article className={`assmt ${this.getColour(status)}`}>
        <p onClick={this.toggleMore}>
          {assmt.code}: {assmt.title}
        </p>
        {this.state.showMore && this.renderMore(status, evidence)}
      </article>
    )
  }
}

function mapStateToProps(state) {
  return {
    completed: state.completed,
  }
}

export default connect(mapStateToProps)(AssessmentItem)
