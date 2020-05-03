import request from 'superagent'

import { getUserToken } from '../utils/auth'

export function getPendingSubmissions() {
    return request.get('/api/submissions')
        .set({ 'Authorization': `Bearer ${getUserToken()}` })
        .then(res => res.body)
}

export function getStudents() {
    return request.get('/api/students')
        .set({ 'Authorization': `Bearer ${getUserToken()}` })
        .then(res => res.body)
}

export function getStudentInfo(id) {
    return request.get('/api/students/' + id)
        .set({ 'Authorization': `Bearer ${getUserToken()}` })
        .then(res => res.body)
}
