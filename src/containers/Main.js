import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from '../components/UserList'

class Main extends Component {
    render() {
        return (
            <div className="main">
                <h1>Main</h1>
                <UserList />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nickname: localStorage.getItem('user'),
        users: state.users.users
    }
}

export default connect(
    mapStateToProps
)(Main)