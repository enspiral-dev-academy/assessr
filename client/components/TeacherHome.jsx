import React from 'react'
import {connect} from 'react-redux'

import StudentSubmissions from './StudentSubmissions'

import {getAllPending} from '../actions/teacher'


class TeacherHome extends React.Component {
    state = {
        toReview: []
    }

    componentDidMount = () => {
        this.props.dispatch(getAllPending())
    }

    componentDidUpdate = (prevProps) => {
        const oldProps = JSON.stringify(prevProps.pending)
        const newProps = JSON.stringify(this.props.pending)

        if(oldProps !== newProps) {
            this.setState({
                toReview: this.orderPending(this.props.pending)
            })
        }
    }

    orderPending = (pendingSubs) => {
        return pendingSubs.reduce((students, sub) => {
            
            const formattedSub = {
                record_id: sub.record_id,
                assessment_code: sub.assessment_code,
                status: sub.status,
                submissions: sub.submissions
            }

            const match = students.find((student) => {
                return student.user_id == sub.user_id
            })

            if (match) {
                match.submissions.push(formattedSub)
            } else {
                const student = {
                    user_id: sub.user_id,
                    actual_name: sub.actual_name,
                    cohort_id: sub.cohort_id,
                    submissions: [formattedSub]
                }
                students.push(student)
            }

            return students
        }, [])
    }

    render = () => {
        return (
            <div>
                <h1>W B!</h1>
                <p>Welcome Back Teacher!</p>
                <p>Assessments submitted for review:</p>
                {this.state.toReview.map((record, i) => (
                    <StudentSubmissions key={i} student={record} />
                ))}
            </div>
        )
    }
}

const mapState2Props = (state) => {
    return {
        pending: state.pending,
        modules: state.modules
    }
}

export default connect(mapState2Props)(TeacherHome)
