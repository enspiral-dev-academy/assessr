import { getPendingSubmissions, getStudents, getStudentInfo, markAsComplete } from '../apis/teacher'
import { saveAllCompleted } from './assessments'

export function saveAllPending(pending) {
    return {
        type: 'SAVE_PENDING',
        pending
    }
}

export function saveAllStudents(students) {
    return {
        type: 'SAVE_ALL_STUDENTS',
        students
    }
}

export function markAsReviewed(record_id) {
    return {
        type: 'HAS_BEEN_REVIEWED',
        record_id
    }
}

export function getAllPending () {
    return dispatch => {
        getPendingSubmissions()
            .then(subs => {
                dispatch(saveAllPending(subs))
            })
    }
}

export function getAllStudents () {
    return dispatch => {
        getStudents()
            .then(students => {
                dispatch(saveAllStudents(students))
            })
    }
}

export function getStudentAssessments (id) {
    return dispatch => {
        getStudentInfo(id)
            .then(assmts => {
                dispatch(saveAllCompleted(assmts))
            })
    }
}

export function assmtCompleted (id) {
    return dispatch => {
        markAsComplete(id)
            .then(() => {
                dispatch(markAsReviewed(id))
            })
    }
}

export function reviewedButIncomplete (record_id, reviewedEvidenceIds) {
    return dispatch => {
        // TODO: the database part
        dispatch(markAsReviewed(record_id))
    }
}