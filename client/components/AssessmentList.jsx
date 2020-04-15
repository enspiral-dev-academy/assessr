import React from 'react'

import { getAllAssessments } from '../apis/assessments'

import ModuleList from './ModuleList'

class AssessmentList extends React.Component {
    constructor(props){
        super(props)

        this.auth = props.auth
        this.state = {
            modules: []
        }
    }

    componentDidMount() {
        getAllAssessments()
            .then(assmts => {
                this.setState({
                    modules: assmts
                })
            })
    }

    render(){
        return (
            <div>
                <h1>Assessments</h1>
                {this.state.modules.map(mod => <ModuleList module={mod} />)}
            </div>
        )
    }
}


export default AssessmentList
