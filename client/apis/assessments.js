import request from 'superagent'

import { getUserToken } from '../utils/auth'

export function getAllAssessments() {
    // console.log(getUserTokenInfo())
    return request.get('/api/assessments')
        .set({ 'Authorization': `Bearer ${getUserToken()}` })
        .then(res => res.body)
}