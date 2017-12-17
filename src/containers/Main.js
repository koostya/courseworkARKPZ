import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../actions/users/index'

import UserList from '../components/UserList'

class Main extends Component {

    componentDidMount = () => {
        this.props.dispatch(getUsers())
    }
    
    render() {
        const { nickname, users } = this.props

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