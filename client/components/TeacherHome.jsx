import React from 'react'

class TeacherHome extends React.Component {
    state = {
        pending: []
    }

    render() {
        return (
            <div>
                <p>Welcome Teacher!</p>
                <p>Evidence submitted for review:</p>
                {this.state.pending.map(thing => {
                    <p>{thing}</p>
                })}
            </div>
        )
    }
}

export default TeacherHome