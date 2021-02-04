import request from "superagent"

import { getUserToken } from "../utils/auth"

export function getPendingSubmissions() {
  return request
    .get("/api/submissions")
    .set({ Authorization: `Bearer ${getUserToken()}` })
    .then(res => res.body)
    .catch(() => {
      throw new Error("Couldn't get submissions, oops!")
    })
}

export function getStudents() {
  return request
    .get("/api/students")
    .set({ Authorization: `Bearer ${getUserToken()}` })
    .then(res => res.body)
    .catch(() => {
      throw new Error("Couldn't get students, oops!")
    })
}

export function getStudentInfo(id) {
  return request
    .get("/api/students/" + id)
    .set({ Authorization: `Bearer ${getUserToken()}` })
    .then(res => res.body)
    .catch(() => {
      throw new Error("Couldn't get your information, oops!")
    })
}

export function markAsComplete(id) {
  return request
    .patch("/api/submissions/done/" + id)
    .set({ Authorization: `Bearer ${getUserToken()}` })
    .then(res => res.body)
    .catch(() => {
      throw new Error("Couldn't mark as complete, oops!")
    })
}

export function markSubmissionsReviewed(id, note, reviewedEvidenceIds) {
  return request.patch("/api/submissions/reviewed/" + id)
    .set({ "Authorization": `Bearer ${getUserToken()}` })
    .send({reviewedEvidenceIds, note})
    .then(res => res.body)
    .catch(() => {
      throw new Error("Couldn't mark as complete, oops!")
    })
}

export function getNewUsers() {
  return request
    .get("/api/auth/users")
    .set({ Authorization: `Bearer ${getUserToken()}` })
    .then(res => res.body)
    .catch(() => {
      throw new Error("Couldn't get the new users, oops!")
    })
}
