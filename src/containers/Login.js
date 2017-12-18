import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm'

class Login extends Component {
    
    render() {
        return (
            <div className="profile">
                <LoginForm />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(
    mapStateToProps
)(Login)