import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../actions/users/index'
import { Vote } from '../actions/vote/index'

class Main extends Component {

    componentDidMount = () => {
        this.props.dispatch(getUsers())
    }

    vote = (nickname, idOfVote, rating) => {
        console.log(nickname)
        console.log(idOfVote)
        console.log(rating++)
        this.props.dispatch(Vote(nickname, idOfVote, rating++))
    }
    
    render() {
        const { nickname, users } = this.props
        return (
            <div className="main">
                <h1>Main</h1>
                <ul>
                    {users.map((user, i) => (
                        <li key={i}>
                            <strong>{ user.nickname }</strong>
                            <span className="user_rating">{ user.rating }</span>
                            <button 
                                className="vote_button"
                                onClick={() => {this.vote(nickname, user.id, user.rating)}}
                            >
                                Vote
                            </button>
                        </li>
                    ))}
                </ul>
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