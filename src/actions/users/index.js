import { history } from '../../index'
import fetch from 'isomorphic-fetch'

export function getUsers() {
    return (dispatch) => {
        fetch('http://localhost:3001/users', {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            },
            body: undefined
        }).then((res) => {
            return res.json()
        }).then((json) => {
            dispatch({
                type: 'SET_USERS',
                body: json
            })
        })
    }
}