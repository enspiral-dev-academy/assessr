import React from 'react'
import {connect} from 'react-redux'

import AssessmentList from '../shared/AssessmentList'

import {getStudentAssessments} from '../../actions/teacher'


class Students extends React.Component {

    componentDidMount = () => {
        this.props.dispatch(getStudentAssessments(this.props.match.params.id))
    }

    render = () => {
        return (
            <div>
                {this.props.modules.map(mod => <AssessmentList module={mod} />)}
            </div>
        )
    }
}

const mapState2Props = (state) => {
    return {
        modules: state.modules
    }
}

export default connect(mapState2Props)(Students)
