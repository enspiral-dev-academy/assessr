import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import AssessmentList from '../shared/AssessmentList'
import ErrorMessage from '../ErrorMessage'

import { getCompletedAssessments } from '../../actions/assessments'


class ModuleList extends React.Component {

    componentDidMount = () => {
        this.props.dispatch(getCompletedAssessments())
    }

    render = () => {
        return (
            <div>
                <h1>Assessments</h1>
                <Route path='/' component={ErrorMessage} />
                {this.props.modules.map((mod, i) => <AssessmentList key={i} module={mod} />)}
            </div>
        )
    }
}

const mapState2Props = (state) => {
    return {
        modules: state.modules
    }
}

export default connect(mapState2Props)(ModuleList)
