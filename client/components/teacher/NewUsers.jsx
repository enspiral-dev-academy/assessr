import React from "react"

import ConfirmUser from "./ConfirmUser"

import { getNewUsers } from "../../apis/teacher"

class NewUsers extends React.Component {
  state = {
    users: [],
  }

  componentDidMount = () => {
    getNewUsers().then(users => this.setState({ users }))
  }

  render = () => {
    return (
      <div>
        <p>Look at these fresh faces!</p>
        {this.state.users.map((user, i) => (
          <ConfirmUser key={i} user={user} />
        ))}
      </div>
    )
  }
}

export default NewUsers
