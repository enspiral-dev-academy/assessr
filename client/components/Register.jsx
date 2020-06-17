import React from 'react'
import {connect} from 'react-redux'

import {registerUserRequest} from '../actions/register'
import {loginError} from '../actions/login'

function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

class Register extends React.Component {
  state = {
    user_type: capitalise(this.props.match.params.type)
  }

  // TODO: Make dynamic based on database (as cohort names may change)
  cohorts = {
    Auckland: ['Harakeke', 'Kahikatea', 'Matai', 'Pohutukawa', 'Horoeka'],
    Wellington: ['Kahu', 'Piwakawaka', 'Kotare', 'Roa', 'Hihi'],
    Online: ['Manaia', 'Aihe']
  }

  componentDidMount = () => {
    this.props.dispatch(loginError(''))
  }

  updateDetails = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submit = (e) => {
    e.preventDefault()
    let {password, confirm_password, user_type, cohort} = this.state
    if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    if (user_type == 'student' && cohort == undefined) return this.props.dispatch(loginError("Please choose a cohort"))
    
    e.target.reset()
    // TODO: update this process to deal with new info
    this.props.dispatch(registerUserRequest(this.state)) 
  }

  renderStudentPart = (campus) => {
    const cohorts = this.cohorts[campus]
    return (
      <div>
        Which cohort are you enrolled in?
        <select required name="cohort" defaultValue="" onChange={this.updateDetails}>
            <option disabled value=""> -- select an option -- </option>
            {cohorts.map((cohort, i) => (
              <option key={i} value={cohort}>{cohort}</option>
            ))}
          </select>
      </div>
    )
  }

  render = () => {
    const {auth} = this.props
    const isStudentPage = this.state.user_type == 'student'
    return (
      <form className="center-form Register form box" onSubmit={this.submit}>
        <h1 className="title is-2">{this.state.user_type} Register</h1>
        <hr />
        {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}

        <div className="form-row"> 
          <label className="column is-6 is-offset-one-quarter label is-large has-text-centered" htmlFor="user_name">Username</label>
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Username" type="text" name="user_name" onChange={this.updateDetails}/>
        </div>
        <div className="form-row"> 
          <label className="column is-6 label is-large has-text-centered" htmlFor="password">Password</label>
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Password" type="password" name="password" onChange={this.updateDetails}/>
        </div>
        <div className="form-row"> 
          <label className="column is-6 label is-large has-text-centered" htmlFor="confirm_password">Confirm Password</label>
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Confirm Password" type="password" name="confirm_password" onChange={this.updateDetails}/>
        </div>
        <div className="form-row"> 
          <label className="column is-6 label is-large has-text-centered" htmlFor="actual_name">Full Name</label>
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Full Name" type="text" name="actual_name" onChange={this.updateDetails}/>
        </div>
        <div>
          {isStudentPage ? "Which campus are you studying at?" : "What is your primary campus?"}
          <select required name="campus" defaultValue="" onChange={this.updateDetails}>
            <option disabled value=""> -- select an option -- </option>
            <option value="Auckland">Auckland - Love that commute</option>
            <option value="Wellington">Wellington - That wind tho</option>
            <option value="Online">Online - PJ's all day</option>
          </select>
        </div>

        {isStudentPage && this.state.campus && this.renderStudentPart(this.state.campus)}

        <hr/>
        After registering your account, we will then finish creating and hooking it up for you, so please make sure you include both your first and last name so we recognise who you are :)

        <input className="button is-success is-large is-fullwidth" value="Register" type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Register)
