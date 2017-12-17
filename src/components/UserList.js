import React, { Component } from 'react'
import { connect } from 'react-redux'

import Item from './UserListItem'
 
class UserList extends Component {
    render() {
        const { users } = this.props

        return(
            <ul>
                {users.map((user, i) => (
                    <Item 
                        key={i}
                        userInfo={user}
                        index={i}
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
