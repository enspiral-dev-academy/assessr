import React from 'react'
import { connect } from 'react-redux'

class AssessmentItem extends React.Component {

    state = {
        showMore: false,
        evidence: ""
    }

    status = (code, assessments) => {
        let match = assessments.find(assmt => {
            return assmt.code == code
        })
        if(match){
            return match.status == 'complete' ? 'green' : 'yellow'
        }
        return 'notyet'
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

    render () {
        const assmt = this.props.assessment
        const status = this.status(assmt.code, this.props.completed)

        return (
            <div>
                <p className={status} onClick={this.toggleMore}>{assmt.code}: {assmt.title}</p>
                {this.state.showMore && this.renderSubmit()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        completed: state.completed
    }
}

export default connect (mapStateToProps)(AssessmentItem)