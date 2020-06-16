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

    renderButtons = () => {
        return (
            <>
                <button onClick={() => this.setType('student')}>Student</button>
                <button onClick={() => this.setType('teacher')}>Teacher</button>
                <button onClick={() => this.setType('delete')}>Delete</button>
            </>
        )
    }

    renderStudent = () => {
        // TODO: Set student info (get cohort list for dropdown)
        return <p>Student</p>
    }  

    renderTeacher = () => {
        // TODO: Set teacher info (get campuses?)
        return <p>Teacher</p>
    }  

    renderDelete = () => {
        // TODO: Confirm button then remove the record
        return <p>Delete</p>
    }

    render = () => {
        const {user} = this.props
        return (
            <div>
                <p onClick={this.toggleForm}>{user.actual_name}</p>
                
                {this.state.showForm && this.renderButtons()}

                {this.state.userType == 'student' && this.renderStudent()}
                {this.state.userType == 'teacher' && this.renderTeacher()}
                {this.state.userType == 'delete' && this.renderDelete()}
            </div>
        )
    }
}

export default ConfirmUser
