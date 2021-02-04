import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import { connect } from "react-redux"

import Login from "./Login"
import WhatType from "./WhatType"
import Register from "./Register"
import Nav from "./Nav"
import StudentHome from "./student/StudentHome"
import TeacherHome from "./teacher/TeacherHome"
import AwaitingConfirmation from "./AwaitingConfirmation"

import { isAuthenticated, isTeacher, isStudent, registrationIsPending } from "../utils/auth"

export function App({ auth }) {
  return (
    <Router>
      <Nav />
      <div className="container has-text-centered">
        <div className="">
          {!isAuthenticated() && (
            <>
              <Route exact path="/" component={Login} />

              <Route exact path="/register" component={WhatType} />
              <Route path="/register/:type" component={Register} />
            </>
          )}
          {isStudent() && <StudentHome />}
          {isTeacher() && <TeacherHome />}
          {registrationIsPending() && <AwaitingConfirmation />}
        </div>
      </div>
    </Router>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect(mapStateToProps)(App)
