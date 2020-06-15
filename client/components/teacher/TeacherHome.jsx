import React from 'react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'

import PendingSubmissions from './PendingSubmissions'
import Students from './Students'
import StudentView from './StudentView'
import NewUsers from './NewUsers'


class TeacherHome extends React.Component {
    
    render = () => {
        return (
            <>
                <h1>W B!</h1>
                <p>Welcome Back Teacher!</p>
                <Link to='/pending'>Review some stuff</Link>
                <Link to='/students'> Look at some peeps</Link>
                <Link to='/signups'> New peeps</Link>

                <Route path="/pending" component={PendingSubmissions} />
                <Route exact path="/students" component={Students} />
                <Route path="/students/:id" component={StudentView} />
                <Route path='/signups' component={NewUsers} />
            </>
        )
    }
}

export default connect()(TeacherHome)
