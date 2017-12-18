import { history } from '../../index'
import fetch from 'isomorphic-fetch'

export function showCreditModal(creditorID) {
    return (dispatch) => {
        dispatch({
            type: 'CREDIT_MODAL_SHOW',
            creditorID
        })
    }
}

export function hideCreditModal() {
    return (dispatch) => {
        dispatch({
            type: 'CREDIT_MODAL_HIDE'
        })
    }
}

export function confirmCreditModal(user, creditorID, sum) {
    return (dispatch) => {
        fetch('http://localhost:3001/credit', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: user,
                creditor: creditorID,
                quantity: sum
            })
        }).then((res) => {
            return res.json()
        }).then((json) => {
            dispatch({
                type: 'CREDIT_MODAL_HIDE'
            })
        })
    }
}