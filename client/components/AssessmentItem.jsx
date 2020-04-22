import React from 'react'
import { connect } from 'react-redux'

class AssessmentItem extends React.Component {

    status = (code, assessments) => {
        let match = assessments.find(assmt => {
            return assmt.code == code
        })
        if(match){
            return match.status == 'complete' ? 'green' : 'yellow'
        }
        return 'notyet'
    }

    render () {
        const assmt = this.props.assessment
        const status = this.status(assmt.code, this.props.completed)

        return (
            <p className={status}>{assmt.code}: {assmt.title}</p>
        )
    }
}

function mapStateToProps(state) {
    return {
        completed: state.completed
    }
}

export default connect (mapStateToProps)(AssessmentItem)