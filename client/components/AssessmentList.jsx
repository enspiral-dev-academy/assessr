import React from 'react'

import AssessmentItem from './AssessmentItem'

function AssessmentList({module}) {

    return (
        <div>
            <h1>--- {module.title} ---</h1>
            {module.assessments.map((assmt, i) => <AssessmentItem key={i} assessment={assmt} />)}
        </div>
    )
}

export default AssessmentList
