import request from 'superagent'

import { getUserToken } from '../utils/auth'

export function getUserAssessments() {
    return request.get('/api/assessments')
        .set({ 'Authorization': `Bearer ${getUserToken()}` })
        .then(res => res.body)
}