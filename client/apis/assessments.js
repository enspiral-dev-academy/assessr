import request from 'superagent'

export function getAllAssessments() {
    return request.get('/api/assessments')
        .then(res => res.body)
}