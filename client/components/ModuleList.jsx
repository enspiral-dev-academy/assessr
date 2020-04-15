import React from 'react'

function ModuleList({module}) {
    return (
        <div>
            <h1>{module.title}</h1>
            {module.assessments.map(assmt => (
                <p>{assmt.code}: {assmt.title}</p>
            ))}
        </div>
    )
}

export default ModuleList
