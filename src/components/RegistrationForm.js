import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from "./Forms/Registration/index"

import { submitRegistrationForm } from '../actions/registration/index'

class RegistrationForm extends Component {

    submit = (values) => {
        console.log(values)
        this.props.dispatch(submitRegistrationForm(this.generateID(), values.nickname, values.name, values.surname, values.password))
    }

    generateID = () => new Date().getTime()

    render() {
        return(
            <div className="form">
                <Form onSubmit={this.submit} />
            </div>
        );
    }
}

export default connect(state => ({

})
)(RegistrationForm)
