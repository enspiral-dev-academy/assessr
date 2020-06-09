import React from 'react'
import {connect} from 'react-redux'


class ReviewSubmission extends React.Component {
    state = {
        showEvidence: false
    }

    toggleEvidence = () => {
        this.setState({
            showEvidence: !this.state.showEvidence
        })
    }

    renderMore = (sub) => (
        <ul>
            {sub.submissions.map((one, i) => (
                <li key={i}>{one.evidence}</li>
            ))}
        </ul>
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
