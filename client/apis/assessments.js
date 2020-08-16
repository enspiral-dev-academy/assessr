import request from 'superagent'

import { getUserToken } from '../utils/auth'

export function getUserAssessments() {
    return request.get('/api/assessments')
        .set({ 'Authorization': `Bearer ${getUserToken()}` })
        .then(res => res.body)
        .catch(() => {
            throw new Error('Couldn\'t get assessments, oops!')
          })
}

export function saveSubmission(code, evidence) {
    return request.post('/api/assessments/submission')
        .set({ 'Authorization': `Bearer ${getUserToken()}` })
        .send({code, evidence})
        .then(res => res.body.record_id)
        .catch(() => {
            throw new Error('Couldn\'t save submission, oops!')
          })
}