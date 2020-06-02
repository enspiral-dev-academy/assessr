import React from 'react'
import {connect} from 'react-redux'

import SubmittedItem from './SubmittedItem'

import {getAllPending} from '../actions/teacher'

class TeacherHome extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllPending())
    }

    render() {
        return (
            <div>
                <h1>W B!</h1>
                <p>Welcome Back Teacher!</p>
                <p>Evidence submitted for review:</p>
                {this.props.pending.map((record, i) => (
                    <React.Fragment key={i}>
                        <SubmittedItem record={record} />
                    </React.Fragment>
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