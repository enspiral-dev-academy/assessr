import React from 'react'
import {connect} from 'react-redux'

import {assmtCompleted, reviewedButIncomplete} from '../../actions/teacher'


class ReviewSubmission extends React.Component {
    state = {
        showEvidence: false,
        note: ''
    }

    addNote = (e) => {
        this.setState({note: e.target.value})
    }

    submitComplete = () => {
        this.props.dispatch(assmtCompleted(this.props.submission.record_id))
    }

    submitReview = () => {
        const {submission} = this.props
        const {note} = this.state
        const reviewedIds = submission.submissions.map(s => s.id)

        this.setState({note: ''})

        this.props.dispatch(reviewedButIncomplete(submission.record_id, note, reviewedIds))
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
            <textarea onChange={this.addNote} value={this.state.note} name="note" id="" cols="30" rows="5"></textarea>
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
