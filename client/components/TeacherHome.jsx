import React from 'react'
import {connect} from 'react-redux'

import {getAllPending} from '../actions/teacher'

class TeacherHome extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllPending())
    }

    render() {
        return (
            <div>
                <p>Welcome Teacher!</p>
                <p>Evidence submitted for review:</p>
                {this.props.pending.map(record => (
                    <>
                        <p>{record.actual_name} - {record.assessment_code}</p>
                        <ul>
                            {record.submissions.map(sub => <li>{sub.evidence}</li>)}
                        </ul>
                    </>
                ))}
            </div>
        )
    }
}

function mapState2Props(state) {
    return {
        pending: state.pending,
        modules: state.modules
    }
}

export default connect(mapState2Props)(TeacherHome)