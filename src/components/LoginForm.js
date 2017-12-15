import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from "./Forms/Login/index"
import { Link } from 'react-router-dom'

import { submitLoginForm } from '../actions/login/index'
 
class LoginForm extends Component {

    submit = (values) => {
        this.props.dispatch(submitLoginForm(values.nickname))
    }

    render() {
        return(
            <div className="form">
                <Form onSubmit={this.submit} />
                <Link to="/registration">
                    Registration
                </Link>
            </div>
        );
    }
}

export default connect(state => ({

})
)(LoginForm)
