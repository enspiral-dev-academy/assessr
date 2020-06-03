import React from 'react'
import {connect} from 'react-redux'

class StudentSubmissions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSubs: false
        }
        this.toggleList = this.toggleList.bind(this)
    }

    toggleList() {
        this.setState({
            showSubs: !this.state.showSubs
        })
    }

    renderSubmissionList(student) {
        return (
            <ul>
                {student.submissions.map((sub, i) => <li key={i}>{sub.assessment_code}</li>)}
            </ul>
        )
    }

    render(){
        const {student} = this.props
        return (
            <>
                <p onClick={this.toggleList}>{student.actual_name}</p>
                {this.state.showSubs && this.renderSubmissionList(student)}
            </>
        )
    }
}

export default connect()(StudentSubmissions)