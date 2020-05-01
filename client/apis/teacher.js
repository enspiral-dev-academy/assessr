import request from 'superagent'

import { getUserToken } from '../utils/auth'

export function getPendingSubmissions() {
    return request.get('/api/submissions')
        .set({ 'Authorization': `Bearer ${getUserToken()}` })
        .then(res => res.body)
}
