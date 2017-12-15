import { history } from '../../index'
import fetch from 'isomorphic-fetch'

export function submitLoginForm(nickname) {
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
                type: 'SUBMIT_FORM',
                body: json
            })
        })
    }
}