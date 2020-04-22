import React from 'react'
import { connect } from 'react-redux'

function AssessmentList({module, assessments}) {
    
    const completed = (code) => {
        return assessments.find(assmt => {
            return assmt.code == code
        })
    }

    return (
        <div>
            <h1>--- {module.title} ---</h1>
            {module.assessments.map(assmt => (
                <p>{assmt.code}: {assmt.title}{completed(assmt.code) && ' - Done!'}</p>
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
