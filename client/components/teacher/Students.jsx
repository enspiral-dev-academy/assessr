import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { getAllStudents } from "../../actions/teacher"

class Students extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(getAllStudents())
  }

  render = () => {
    return (
      <div>
        <p>Click on a Student to view their assessments:</p>
        {this.props.students.map((student, i) => (
          <Link key={i} to={`/students/${student.user_id}`}>
            {student.actual_name}
          </Link>
        ))}
      </div>
    )
  }
}

const mapState2Props = state => {
  return {
    students: state.students,
  }
}

export default connect(mapState2Props)(Students)
