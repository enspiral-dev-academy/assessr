import React from "react"

import AssessmentItem from "./AssessmentItem"

function AssessmentList({ module }) {
  return (
    <section>
      <h1>{module.title}</h1>
      <div className="assmt-row">
        {module.assessments.map((assmt, i) => (
          <AssessmentItem key={i} assessment={assmt} />
        ))}
      </div>
    </section>
  )
}

export default AssessmentList
