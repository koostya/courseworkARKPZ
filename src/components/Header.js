import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from "./Forms/Login/index"
import { Link } from 'react-router-dom'

import { submitLoginForm } from '../actions/login/index'
import { logout } from '../actions/logout/index'
 
class Header extends Component {
    render() {
        const { nickname } = this.props

        return(
            <div className="header">
                <div className="left_part"> 
                    <Link to="/main" className="header_name">
                        Debts
                    </Link>
                </div>
                <div className="right_part">
                    <Link to="/profile" className="header_nickname">
                        { nickname }
                    </Link>
                    <button 
                        onClick={() => this.props.dispatch(logout())}
                        className="logout_but"
                    >
                        Out
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    nickname: localStorage.getItem('user')
})
)(Header)
