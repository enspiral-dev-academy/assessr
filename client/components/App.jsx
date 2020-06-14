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
      <div className="container has-text-centered">

        <div className="hero is-small is-primary">
          <div className="hero-body has-text-centered">
            <Link to='/' className="">
              <h1 className="title is-1">Assessr</h1>
            </Link>
            <Nav />
          </div>
        </div>

        <div className=''>
          {!isAuthenticated() && (
            <>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            </>
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
