import React from "react"
import { Link } from "react-router-dom"

class WhatType extends React.Component {
    render = () => {
        return (
            <div>
                <h2>I'm a</h2>       
                <p>
                  <Link role='button' to='/register/student'>Student</Link>
                </p>     
                <p>
                  <Link role='button' to='/register/teacher'>Teacher</Link>
                </p>     
            </div>
        )
    }
}

export default WhatType
