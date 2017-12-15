import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
    
    render() {
        const { nickname } = this.props

        return (
            <div className="profile">
                <h1>{ 'Hello, ' + nickname }</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nickname: localStorage.getItem('user')
    }
}

export default connect(
    mapStateToProps
)(Profile)