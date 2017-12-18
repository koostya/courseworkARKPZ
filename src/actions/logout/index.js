import { history } from '../../index'
import fetch from 'isomorphic-fetch'

export function logout() {
    return (dispatch) => {
        localStorage.clear()
        history.push('/')
        
        dispatch({
            type: 'LOGOUT'
        })
    }
}