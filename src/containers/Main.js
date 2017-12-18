import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from '../components/UserList'
import Header from '../components/Header'
import CreditModal from '../components/CreditModal'

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <div className="container">
                    <UserList />
                </div>
                {this.props.creditModal ?
                    <CreditModal />
                    :
                    ''
                }
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nickname: localStorage.getItem('user'),
        users: state.users.users,
        creditModal: state.modal.creditModal
    }
}

export default connect(
    mapStateToProps
)(Main)