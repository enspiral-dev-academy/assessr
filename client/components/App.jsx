import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import StudentHome from './student/StudentHome'
import TeacherHome from './teacher/TeacherHome'
import AwaitingConfirmation from './AwaitingConfirmation'

import {isAuthenticated, isTeacher, isStudent, isNoOne} from '../utils/auth'


export function App({auth}) {
  return (
    <Router>
      <Nav />
      <div className="container has-text-centered">  
        <div className=''>
          {!isAuthenticated() && (
            <React.Fragment>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            </React.Fragment>

          )}
          {isStudent() && <StudentHome />}
          {isTeacher() && <TeacherHome />}
          {isNoOne() && <AwaitingConfirmation />}
        </div>

      </div>
    </Router>
  )
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
