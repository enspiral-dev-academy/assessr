import React from "react"
import { connect } from "react-redux"

import StudentSubmissions from "./StudentSubmissions"

import { getAllPending } from "../../actions/teacher"

class PendingSubmissions extends React.Component {
  state = {
    toReview: [],
  }

  componentDidMount = () => {
    this.setState(
      {
        toReview: this.orderPending(this.props.pending),
      },
      () => this.props.dispatch(getAllPending())
    )
  }

  componentDidUpdate = prevProps => {
    const oldProps = JSON.stringify(prevProps.pending)
    const newProps = JSON.stringify(this.props.pending)

    if (oldProps !== newProps) {
      this.setState({
        toReview: this.orderPending(this.props.pending),
      })
    }
  }

  orderPending = pendingSubs => {
    let reducedArr = pendingSubs.reduce((students, sub) => {
      const formattedSub = {
        record_id: sub.record_id,
        assessment_code: sub.assessment_code,
        status: sub.status,
        submissions: sub.submissions,
      }

      const match = students.find(student => {
        return student.user_id == sub.user_id
      })

      if (match) {
        match.submissions.push(formattedSub)
      } else {
        const student = {
          user_id: sub.user_id,
          actual_name: sub.actual_name,
          cohort_id: sub.cohort_id,
          submissions: [formattedSub],
        }
        students.push(student)
      }

      return students
    }, [])

    reducedArr.sort((a, b) => {
      if (a.actual_name > b.actual_name) {
        return 1
      } else if (a.actual_name < b.actual_name) {
        return -1
      }
      return 0
    })

    return reducedArr
  }

  render = () => {
    return (
      <div>
        <p>Assessments submitted for review:</p>
        {this.state.toReview.map((record, i) => (
          <StudentSubmissions key={i} student={record} />
        ))}
      </div>
    )
  }
}

const mapState2Props = state => {
  return {
    pending: state.pending,
    modules: state.modules,
  }
}

export default connect(mapState2Props)(PendingSubmissions)
