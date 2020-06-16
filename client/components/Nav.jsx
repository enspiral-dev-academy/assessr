import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {logoutUser} from '../actions/logout'


class Nav extends React.Component {

  render = () => {
    const {auth, logout} = this.props
    return <nav className="navbar">
      
        <h1 className="logo-title"> <Link to='/' className="">Assessr </Link></h1>
          <div className="navbar-end">
            {auth.isAuthenticated
              ? <Link to='/' className="navbar-item" onClick={() => logout()}>Logout</Link>
              : [
                <Link className="navbar-item" to='/login'>Login</Link>,
                <Link className="navbar-item" to='/register'>Register</Link>
              ]
            }
          </div>
    </nav>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
