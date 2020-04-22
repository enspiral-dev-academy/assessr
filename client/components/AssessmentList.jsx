import React from 'react'
import { connect } from 'react-redux'

function AssessmentList({module, assessments}) {
    
    const status = (code) => {
        let match = assessments.find(assmt => {
            return assmt.code == code
        })
        if(match) return " - " + match.status
    }

    return (
        <div>
            <h1>--- {module.title} ---</h1>
            {module.assessments.map(assmt => (
                <p>{assmt.code}: {assmt.title}{status(assmt.code)}</p>
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        assessments: state.completed
    }
}

export default connect(mapStateToProps)(AssessmentList)
