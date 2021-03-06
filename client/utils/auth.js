import decode from "jwt-decode"

import { get, set } from "./localstorage"

export function isAuthenticated() {
  const token = get("token")

  if (token) {
    const payload = decode(token)
    const expiry = payload.exp

    if (expiry < new Date().getTime() / 1000) {
      removeUser()
      return false
    }
    return true
  } else {
    return false
  }
}

export function registrationIsPending() {
  const token = get("token")

  if (token) {
    const payload = decode(token)
    return !payload.registration_confirmed
  }

  return false
}

export function isTeacher() {
  return checkUserTypeIs("teacher")
}

export function isStudent() {
  return checkUserTypeIs("student")
}

export function isNoOne() {
  return checkUserTypeIs(null)
}

export function checkUserTypeIs(type) {
  const token = get("token")

  if (token) {
    const payload = decode(token)
    const role = payload.user_type
    const confirmed = payload.registration_confirmed
    return confirmed && role == type
  }

  return false
}

export function saveUserToken(token) {
  set("token", token)
  return decode(token)
}

export function getUserToken() {
  return get("token")
}

export function getUserTokenInfo() {
  const token = get("token")
  return token ? decode(token) : null
}

export function removeUser() {
  set("token", null)
}
