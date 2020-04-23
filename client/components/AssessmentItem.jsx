import React from 'react'
import { connect } from 'react-redux'

class AssessmentItem extends React.Component {

    state = {
        showMore: false,
        evidence: ""
    }

    findStatus = (assessments) => {
        const code = this.props.assessment.code
        const match = assessments.find(assmt => {
            return assmt.code == code
        })
        return match ? match.status : "not yet"
    }

    getColour = (status) => {
        switch (status) {
            case 'complete':
                return 'green'
            case 'in progress':
                return 'yellow'
            default:
                return 'notyet'
        }
    }

    toggleMore = () => {
        this.setState({
            showMore: !this.state.showMore
        })
    }

    handleTyping = (evt) => {
        this.setState({
            evidence: evt.target.value
        })
    }

    submit = () => {
        console.log(this.state.evidence + "!")
        this.setState({
            evidence: ""
        })
    }

    renderSubmit = () => {
        return (
            <React.Fragment>
                <input type='text' onChange={this.handleTyping} value={this.state.evidence} />
                <button onClick={this.submit}>Submit</button>
            </React.Fragment>
        )
    }

    renderMore = (status) => {
        return (
            <React.Fragment>
                <h4>{status}</h4>
                {status != 'complete' && this.renderSubmit()}
            </React.Fragment>
        )
    }

    render () {
        const assmt = this.props.assessment
        const status = this.findStatus(this.props.submitted)

        return (
            <div className={this.getColour(status)}>
                <p onClick={this.toggleMore}>{assmt.code}: {assmt.title}</p>
                {this.state.showMore && this.renderMore(status)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        submitted: state.completed
    }
}

export default connect (mapStateToProps)(AssessmentItem)