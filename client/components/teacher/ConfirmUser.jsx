import React from 'react'


class ConfirmUser extends React.Component {
    state = {
        showForm: false,
        userType: null
    }

    toggleForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    setType = type => {
        this.setState({
            userType: type
        })
    }

    renderStudent = () => {
        // TODO: Set student info (get cohort list for dropdown)
        return (
            <>
                <p>A student you say, how novel!</p>
                
                <p>What is their airtable ID?</p>
                <input type="text" name="student_id" />
            </>
        )
    }  

    renderTeacher = () => {
        // TODO: Set teacher info (get campuses?)
        return (
            <>
                <p>A teacher? Oh my! Prepare to welcome them to the ranks</p>
            </>
        )
    }  

    renderDelete = () => {
        // TODO: Confirm button then remove the record
        return (
            <>
                <p>Are you sure you want to delete this person????</p>
                <button onClick={() => console.log('boop')}>Yes I'm sure!</button>
            </>
        )
    }

    renderForms = (userType) => {
        return (
            <>
                {userType == 'student' && this.renderStudent()}
                {userType == 'teacher' && this.renderTeacher()}
                {userType == 'delete' && this.renderDelete()}
            </>
        )
    }

    renderButtons = () => {
        return (
            <>
                <button onClick={() => this.setType('student')}>Student</button>
                <button onClick={() => this.setType('teacher')}>Teacher</button>
                <button onClick={() => this.setType('delete')}>Delete</button>
            </>
        )
    }

    render = () => {
        const {user} = this.props
        return (
            <div>
                <p onClick={this.toggleForm}>{user.actual_name}</p>
                
                {this.state.showForm && this.renderButtons()}
                {this.state.showForm && this.renderForms(this.state.userType)}
                
            </div>
        )
    }
}

export default ConfirmUser
