import React from "react"

import AssessmentItem from "./AssessmentItem"

function AssessmentList({ module }) {
  return (
    <section>
      <h1>{module.title}</h1>
      <div className="assmt-row">
        {module.assessments.map(assmt => (
          <AssessmentItem key={assmt.code} assessment={assmt} />
        ))}
      </div>
    </section>
  )
}

export default AssessmentList
