import React from 'react'
import {connect} from 'react-redux'

class TeacherHome extends React.Component {
    render(){
        const {record} = this.props
        return (
            <>
                <p>{record.actual_name} - {record.assessment_code}</p>
                <ul>
                    {record.submissions.map((sub, i) => <li key={i}>{sub.evidence}</li>)}
                </ul>
            </>
        )
    }
}

export default connect()(TeacherHome)