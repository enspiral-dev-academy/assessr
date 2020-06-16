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

export function markAsComplete(id) {
    return request.patch('/api/submissions/done/' + id)
        .set({ 'Authorization': `Bearer ${getUserToken()}` })
        .then(res => res.body)
}

export function markSubmissionsReviewed(id, reviewedEvidenceIds) {
    return request.patch('/api/submissions/reviewed/' + id)
        .set({ 'Authorization': `Bearer ${getUserToken()}` })
        .send(reviewedEvidenceIds)
        .then(res => res.body)
}

export function getNewUsers() {
    return request.get('/api/auth/users')
        .set({ 'Authorization': `Bearer ${getUserToken()}` })
        .then(res => res.body)
}
