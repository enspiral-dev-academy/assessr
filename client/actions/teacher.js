import {
  getPendingSubmissions,
  getStudents,
  getStudentInfo,
  markAsComplete,
  markSubmissionsReviewed,
} from "../apis/teacher"
import { saveAllCompleted } from "./assessments"
import { showError } from "./error"

export function saveAllPending(pending) {
  return {
    type: "SAVE_PENDING",
    pending,
  }
}

export function saveAllStudents(students) {
  return {
    type: "SAVE_ALL_STUDENTS",
    students,
  }
}

export function markAsReviewed(record_id) {
  return {
    type: "HAS_BEEN_REVIEWED",
    record_id,
  }
}

export function getAllPending() {
  return dispatch => {
    getPendingSubmissions()
      .then(subs => dispatch(saveAllPending(subs)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function getAllStudents() {
  return dispatch => {
    getStudents()
      .then(students => dispatch(saveAllStudents(students)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function getStudentAssessments(id) {
  return dispatch => {
    getStudentInfo(id)
      .then(assmts => dispatch(saveAllCompleted(assmts)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function assmtCompleted(id) {
  return dispatch => {
    markAsComplete(id)
      .then(() => dispatch(markAsReviewed(id)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function reviewedButIncomplete(record_id, reviewedEvidenceIds) {
  return dispatch => {
    markSubmissionsReviewed(record_id, reviewedEvidenceIds)
      .then(() => dispatch(markAsReviewed(record_id)))
      .catch(err => dispatch(showError(err.message)))
  }
}
