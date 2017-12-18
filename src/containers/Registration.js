import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegistrationForm from '../components/RegistrationForm'

class Registration extends Component {
    
    render() {
        return (
            <div className="profile">
                <RegistrationForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(
    mapStateToProps
)(Registration)