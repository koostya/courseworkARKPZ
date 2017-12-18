import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Vote } from '../actions/vote/index'
import { showCreditModal } from '../actions/modal/index'
 
class UserListItem extends Component {

    vote = (nickname, idOfVote, rating) => {
        rating++
        this.props.dispatch(Vote(nickname, idOfVote, rating))
    }

    render() {
        const { nickname, userInfo } = this.props

        return(
            <li className="userlist_item">
                <div className="user_header">
                    <div className="nickname">
                        { userInfo.nickname }
                    </div>
                </div>
                <div className="user_content">
                    <div className="user_img">
                        <img src="./img/boy.png" />
                    </div>
                    <div className="user_description">
                        { userInfo.description }
                    </div>
                    <div className="user_rating_wrap">
                        <button 
                            className="user_vote_but"
                            onClick={() => {this.vote(nickname, userInfo.id, userInfo.rating)}}
                        >
                        </button>
                        <div className="user_rating">{ userInfo.rating }</div>
                    </div>
                </div>
                <button 
                    className="leave_request"
                    onClick={() => this.props.dispatch(showCreditModal(userInfo.id))}
                >
                    Leave request
                </button>
            </li>
        );
    }
}

export default connect(state => ({
    nickname: localStorage.getItem('user')
})
)(UserListItem)
