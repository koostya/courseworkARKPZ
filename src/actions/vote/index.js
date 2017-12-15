import { history } from '../../index'
import fetch from 'isomorphic-fetch'

export function Vote(nickname, id, rating) {
    return (dispatch) => {
        fetch('http://localhost:3001/vote', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nickname: nickname,
                id: id,
                rating: rating
            })
        }).then((res) => {
            return res.json()
        }).then((json) => {
            console.log(json)
        })
    }
}