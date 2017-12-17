import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Vote } from '../actions/vote/index'
 
class UserListItem extends Component {

    vote = (nickname, idOfVote, rating) => {
        this.props.dispatch(Vote(nickname, idOfVote, rating++))
    }

    render() {
        const { nickname, userInfo, index } = this.props

        return(
            <li key={index}>
                <strong>{ userInfo.nickname }</strong>
                <span className="user_rating">{ userInfo.rating }</span>
                <button 
                    className="vote_button"
                    onClick={() => {this.vote(nickname, userInfo.id, userInfo.rating)}}
                >
                    Vote
                </button>
            </li>
        );
    }
}

export default connect(state => ({
    nickname: localStorage.getItem('user')
})
)(UserListItem)
