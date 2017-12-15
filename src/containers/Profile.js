import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Profile extends Component {
    
    render() {
        const { nickname } = this.props

        return (
            <div className="profile">
                <h1>{ 'Hello, ' + nickname }</h1>
                <Link to="/main">
                    Main
                </Link>
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