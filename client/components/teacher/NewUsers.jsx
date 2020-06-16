import React from 'react'

import {getNewUsers} from '../../apis/teacher'


class NewUsers extends React.Component {
    state = {
        users: []
    }

    componentDidMount = () => {
        getNewUsers()
            .then(users => this.setState({users}))
    }

    render = () => {
        return (
            <div>
                <p>Look at these fresh faces!</p>
                {this.state.users.map((user, i) => <p key={i}>{user.user_name}</p>)}            
            </div>
        )
    }
}

export default NewUsers
