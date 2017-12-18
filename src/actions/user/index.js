import { history } from '../../index'
import fetch from 'isomorphic-fetch'

export function getUserData(nickname) {
    return (dispatch) => {
        fetch('http://localhost:3001/user/:nickname?nickname=' + nickname, {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            },
            body: undefined
        }).then((res) => {
            return res.json()
        }).then((json) => {
            localStorage.setItem('user', json.nickname)
            history.push('/profile')
            dispatch({
                type: 'SET_USER_DATA',
                body: json
            })
        })
    }
}

export function editMoney() {
    return (dispatch) => {
        dispatch({
            type: 'EDITING_MONEY'
        })
    }
}

export function editMoneyConfirm(nickname, money) {
    return (dispatch) => {
        fetch('http://localhost:3001/user/:nickname?nickname=' + nickname, {
            method: 'PUT',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nickname: nickname,
                money: money
            })
        }).then((res) => {
            return res.json()
        }).then((json) => {
            dispatch({
                type: 'EDITING_MONEY_CONFIRM',
                body: json
            })
        })
    }
}