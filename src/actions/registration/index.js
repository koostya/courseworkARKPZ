import { history } from '../../index'
import fetch from 'isomorphic-fetch'

export function submitRegistrationForm(id, nickname, name, surname, password) {
    return (dispatch) => {
        fetch('http://localhost:3001/user', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                nickname: nickname,
                name: name,
                surname: surname,
                password: password
            })
        }).then((res) => {
            return res.json()
        }).then((json) => {
            history.push('/login')
        })
    }
}