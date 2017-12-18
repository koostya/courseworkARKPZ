import { history } from '../../index'
import fetch from 'isomorphic-fetch'

export function getRequests(nickname) {
    return (dispatch) => {
        fetch('http://localhost:3001/credit/:nickname?nickname=' + nickname, {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            },
            body: undefined
        }).then((res) => {
            return res.json()
        }).then((json) => {
            dispatch({
                type: 'SET_REQUEST_DATA',
                body: json
            })
        })
    }
}

export function getRequestsActive(nickname) {
    return (dispatch) => {
        fetch('http://localhost:3001/credit/active/:nickname?nickname=' + nickname, {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            },
            body: undefined
        }).then((res) => {
            return res.json()
        }).then((json) => {
            dispatch({
                type: 'SET_ACTIVE_DATA',
                body: json
            })
        })
    }
}

export function acceptRequest(user, creditorID) {
    return (dispatch) => {
        fetch('http://localhost:3001/credit', {
            method: 'PUT',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: user,
                creditorID: creditorID
            })
        }).then((res) => {
            return res.json()
        }).then((json) => {
            dispatch({
                type: 'ACCEPT_REQUEST',
                body: json
            })
        })
    }
}