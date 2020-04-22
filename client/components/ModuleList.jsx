import React from 'react'
import { connect } from 'react-redux'

import AssessmentList from './AssessmentList'

import { getAllAssessments } from '../apis/assessments'

class ModuleList extends React.Component {
    componentDidMount() {
        getAllAssessments()
            .then(console.log)
    }

    render(){
        return (
            <div>
                <h1>Assessments</h1>
                {this.props.modules.map(mod => <AssessmentList module={mod} />)}
            </div>
        )
    }
}


function mapState2Props(state) {
    return {
        modules: state.modules
    }
}

export default connect(mapState2Props)(ModuleList)
