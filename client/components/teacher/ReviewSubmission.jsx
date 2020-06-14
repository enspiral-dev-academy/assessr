import React from 'react'
import {connect} from 'react-redux'

import {assmtCompleted, reviewedButIncomplete} from '../../actions/teacher'


class ReviewSubmission extends React.Component {
    state = {
        showEvidence: false
    }

    submitComplete = () => {
        this.props.dispatch(assmtCompleted(this.props.submission.record_id))
    }

    submitReview = () => {
        const {submission} = this.props
        const reviewedIds = submission.submissions.map(s => s.id)

        this.props.dispatch(reviewedButIncomplete(submission.record_id, reviewedIds))
    }

    toggleEvidence = () => {
        this.setState({
            showEvidence: !this.state.showEvidence
        })
    }

    renderMore = (sub) => (
        <>
            <p>New evidence submitted:</p>
            <ul>
                {sub.submissions.map((one, i) => (
                    <li key={i}>{one.evidence}</li>
                ))}
            </ul>
            <p>Have they finished it all good?</p>
            <button onClick={this.submitComplete}>Y</button>
            <button onClick={this.submitReview}>N</button>
        </>
    )

    render = () => {
        const {submission} = this.props
        return (
            <>
                <li onClick={this.toggleEvidence}>{submission.assessment_code}</li>
                {this.state.showEvidence && this.renderMore(submission)}
            </>
        )
    }
}

export default connect()(ReviewSubmission)
