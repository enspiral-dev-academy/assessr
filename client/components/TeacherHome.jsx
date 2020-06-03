import React from 'react'
import {connect} from 'react-redux'

import StudentSubmissions from './StudentSubmissions'

import {getAllPending} from '../actions/teacher'

class TeacherHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toReview: [],
            hi: 0
        }
    }

    componentDidMount() {
        this.props.dispatch(getAllPending())
    }

    componentDidUpdate(prevProps) {
        const oldStuff = prevProps.pending
        const newStuff = this.props.pending

        console.log(oldStuff)
        console.log(newStuff)

        if(JSON.stringify(oldStuff) !== JSON.stringify(newStuff)) {
            console.log('yes')
            console.log(JSON.stringify(oldStuff) !== JSON.stringify(newStuff))
            this.setState({
                toReview: this.orderSubmissions(this.props.pending),
                hi: this.state.hi + 1
            })
        }
    }

    orderSubmissions(subs) {
        return subs.reduce((students, sub) => {
            
            const formattedSub = {
                record_id: sub.record_id,
                assessment_code: sub.assessment_code,
                status: sub.status,
                submissions: subs.submissions
            }

            const match = students.find((student) => {
                return student.student_id == sub.student_id
            })

            if (match) {
                match.submissions.push(formattedSub)
            } else {
                const student = {
                    student_id: sub.student_id,
                    actual_name: sub.actual_name,
                    cohort_id: sub.cohort_id,
                    submissions: [formattedSub]
                }
                students.push(student)
            }
            return students
        }, [])
    }

    render() {
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

function mapState2Props(state) {
    return {
        pending: state.pending,
        modules: state.modules
    }
}

export default connect(mapState2Props)(TeacherHome)