import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUsers } from '../actions/users/index'

import Item from './UserListItem'
 
class UserList extends Component {

    componentDidMount = () => {
        this.props.dispatch(getUsers())
    }

    render() {
        const { users } = this.props
        return(
            <ul className="users_list">
                {users.map((user, i) => (
                    <Item 
                        key={i}
                        userInfo={user}
                    />
                ))}
            </ul>
        );
    }
}

export default connect(state => ({
    users: state.users.users
})
)(UserList)
